"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { locations } from "@/data/locations";
import { getConsultAction } from "@/lib/kakao";
import { trackConsultClick } from "@/lib/analytics";

type OpenConsultArgs = {
  program?: string;
  sourcePage?: string;
};

type ConsultModalState = {
  isOpen: boolean;
  program?: string;
  sourcePage?: string;
};

type ConsultModalContextValue = {
  state: ConsultModalState;
  openConsult: (args?: OpenConsultArgs) => void;
  closeConsult: () => void;
  selectLocation: (locationId: string) => void;
};

const ConsultModalContext = createContext<ConsultModalContextValue | null>(null);

function runConsultAction(locationId: string, program?: string, sourcePage?: string) {
  const location = locations.find((l) => l.id === locationId);
  if (!location) return;

  const action = getConsultAction(location);
  trackConsultClick({ branch: location.id, program, sourcePage });

  if (action.type === "kakao") {
    window.open(action.href, "_blank", "noopener,noreferrer");
  } else if (action.type === "tel") {
    window.location.href = action.href;
  }
}

export function ConsultModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ConsultModalState>({ isOpen: false });

  const closeConsult = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const selectLocation = useCallback(
    (locationId: string) => {
      runConsultAction(locationId, state.program, state.sourcePage);
      closeConsult();
    },
    [state.program, state.sourcePage, closeConsult]
  );

  const openConsult = useCallback((args?: OpenConsultArgs) => {
    if (locations.length === 1) {
      const only = locations[0];
      const action = getConsultAction(only);
      if (action.type !== "unavailable") {
        runConsultAction(only.id, args?.program, args?.sourcePage);
        return;
      }
    }
    setState({ isOpen: true, program: args?.program, sourcePage: args?.sourcePage });
  }, []);

  const value = useMemo(
    () => ({ state, openConsult, closeConsult, selectLocation }),
    [state, openConsult, closeConsult, selectLocation]
  );

  return <ConsultModalContext.Provider value={value}>{children}</ConsultModalContext.Provider>;
}

export function useConsultModal(): ConsultModalContextValue {
  const ctx = useContext(ConsultModalContext);
  if (!ctx) throw new Error("useConsultModal must be used within ConsultModalProvider");
  return ctx;
}
