import React, { ReactNode } from "react";
import styles from "./layout.module.scss";

export function Layout({
  children,
  theme,
  primaryColor,
}: {
  children: ReactNode;
  theme: string;
  primaryColor: string;
}) {
  return (
    <div
      className={styles.container}
      data-theme={theme}
      data-color={primaryColor}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
