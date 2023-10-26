import React from "react";
import { ThemeButton } from "./ThemeButton/ThemeButton";
import styles from "./theme-buttons-group.module.scss";

export function ThemeButtons({
  setTheme,
  themeName,
  setThemeName,
}: {
  setTheme: (string: string) => void;
  setThemeName: (string: string) => void;
  themeName: string;
}) {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className={styles.theme_btn_container}>
      <ThemeButton
        kind="system"
        onClick={() => {
          setTheme(defaultDark ? "dark" : "light");
          setThemeName("system");
        }}
        themeName={themeName}
      />
      <ThemeButton
        kind="dark"
        onClick={() => {
          setTheme("dark");
          setThemeName("dark");
        }}
        themeName={themeName}
      />
      <ThemeButton
        kind="light"
        onClick={() => {
          setTheme("light");
          setThemeName("light");
        }}
        themeName={themeName}
      />
    </div>
  );
}
