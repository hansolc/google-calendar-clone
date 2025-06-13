import clsx from "clsx";
import type { PropsWithChildren } from "react";
import styles from "./index.module.scss";

const Sidebar = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx("shrink-0", styles.sidebar, className)}>
      {children}
    </div>
  );
};

export default Sidebar;
