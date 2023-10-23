import React, { ReactNode } from "react";
import "./layout.scss";

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
    <div className="container" data-theme={theme} data-color={primaryColor}>
      <div className="wrapper">{children}</div>
    </div>
  );
}
