import React from "react";
import ThemeButton from "./ThemeButton";
import { defaultDark } from "../../utils/constants/defaultDarkTheme";
import "./theme-buttons.scss";

export default function ThemeButtons({
  setTheme,
  themeName,
  setThemeName,
}: {
  setTheme: (string: string) => void;
  setThemeName: (string: string) => void;
  themeName: string;
}) {
  return (
    <div className="theme-btn-container">
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
