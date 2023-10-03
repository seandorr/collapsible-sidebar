import React from "react";
import "./theme-buttons.scss";

export default function ThemeButtons({
  themeName,
  setTheme,
  setThemeName,
  defaultDark,
}: {
  themeName: string;
  setTheme: (string: string) => void;
  setThemeName: (string: string) => void;
  defaultDark: boolean;
}) {
  return (
    <div className="theme-btn-container">
      <button
        className={`${
          themeName === "system" ? "theme-btn active" : "theme-btn"
        }`}
        onClick={() => {
          setTheme(defaultDark ? "dark" : "light");
          setThemeName("system");
        }}
        tabIndex={0}
      >
        System
      </button>
      <button
        className={`${themeName === "dark" ? "theme-btn active" : "theme-btn"}`}
        onClick={() => {
          setTheme("dark");
          setThemeName("dark");
        }}
        tabIndex={0}
      >
        dark
      </button>
      <button
        className={`${
          themeName === "light" ? "theme-btn active" : "theme-btn"
        }`}
        onClick={() => {
          setTheme("light");
          setThemeName("light");
        }}
        tabIndex={0}
      >
        light
      </button>
    </div>
  );
}
