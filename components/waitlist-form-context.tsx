"use client";

import { createContext, useRef, ReactNode } from "react";
import { WaitlistFormRef } from "./waitlist-form";

export const WaitlistFormContext =
  createContext<React.RefObject<WaitlistFormRef> | null>(null);

export function WaitlistFormProvider({ children }: { children: ReactNode }) {
  const formRef = useRef<WaitlistFormRef>(null);

  return (
    <WaitlistFormContext.Provider value={formRef}>
      {children}
    </WaitlistFormContext.Provider>
  );
}
