import clsx from "clsx";
import React, { type PropsWithChildren } from "react";

const Card = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx("bg-white rounded-[28px] p-2", className)}>
      {children}
    </div>
  );
};

export default Card;
