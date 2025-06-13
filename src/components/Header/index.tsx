import clsx from "clsx";
import { type PropsWithChildren } from "react";
import styles from "./index.module.scss";

const HeaderRoot = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <header className={clsx("flex", className)}>{children}</header>;
};

const Left = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={clsx(styles.header, "shrink-0", className)}>{children}</div>
  );
};

const Right = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("grow shrink", className)}>{children}</div>;
};

const Header = Object.assign(HeaderRoot, {
  Left,
  Right,
});

export default Header;
