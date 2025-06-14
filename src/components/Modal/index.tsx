import React, { type PropsWithChildren } from "react";
import {
  ModalContext,
  useModalContext,
  type ModalContextValue,
} from "./context/ModalContext";

const ModalProvider = ({
  isOpen,
  toggle,
  children,
}: PropsWithChildren<ModalContextValue>) => {
  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {children}
    </ModalContext.Provider>
  );
};

const Trigger = ({ as }: { as: React.ReactElement }) => {
  const { toggle } = useModalContext();
  return React.cloneElement(as, {
    ...as.props,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      as.props.onClick?.(e);
      toggle();
    },
  });
};

const Content = ({ children }: PropsWithChildren) => {
  const { isOpen } = useModalContext();
  if (!isOpen) return null;
  return <>{children}</>;
};

const Modal = Object.assign(ModalProvider, {
  Trigger,
  Content,
});

export default Modal;
