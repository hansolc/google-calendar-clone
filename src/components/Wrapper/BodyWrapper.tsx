import clsx from "clsx";
import { type PropsWithChildren } from "react";

const BodyWrapper = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("flex grow", className)}>{children}</div>;
};

export default BodyWrapper;
