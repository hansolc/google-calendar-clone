// TabContext.tsx
import { createContext, useContext } from "react";

export interface ModalContextValue {
  isOpen: boolean;
  toggle: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal components must be used within <Modal>");
  }
  return context;
};
