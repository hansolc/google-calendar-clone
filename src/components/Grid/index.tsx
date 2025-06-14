import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

interface GridLayoutProps {
  type: "weekly" | "monthly";
  rowHeight?: number;
  children?: React.ReactNode;
  className?: string;
}

const Grid = ({
  type,
  children,
  rowHeight = 64,
  className,
}: GridLayoutProps) => {
  return (
    <div
      className={clsx(
        styles.grid,
        { [styles.weekly]: type === "weekly" },
        { [styles.monthly]: type === "monthly" },
        className
      )}
      // style={{ gridTemplateRows: `repeat(24, ${rowHeight}px)` }}
    >
      {children}
    </div>
  );
};

export default Grid;
