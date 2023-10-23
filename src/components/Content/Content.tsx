import React from "react";
import { TagGenerator } from "../TagGenerator";
import { ThemeButtons } from "../ThemeButtons";
import { ISidebarItem } from "../../utils/constants/sidebarItems";
import "./content.scss";

export function Content({
  activeSidebarItem,
  themeName,
  setTheme,
  setThemeName,
  primaryColor,
  setPrimaryColor,
}: {
  activeSidebarItem: ISidebarItem;
  themeName: string;
  setTheme: (theme: string) => void;
  setThemeName: (themeName: string) => void;
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
}) {
  return (
    <main className="main card">
      <div className="content-container">
        <h1>{activeSidebarItem.label}</h1>
        {activeSidebarItem.label === "Tags" && <TagGenerator />}
        {activeSidebarItem.label === "Settings" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p style={{ marginBottom: "16px" }}>Theme:</p>
              <ThemeButtons
                themeName={themeName}
                setTheme={setTheme}
                setThemeName={setThemeName}
              />
            </div>
            <>
              <p>Primary color:</p>
              <div className="theme-btn-container">
                <button
                  className={`${
                    primaryColor === "green" ? "theme-btn active" : "theme-btn"
                  }`}
                  onClick={() => setPrimaryColor("green")}
                  tabIndex={0}
                >
                  green
                </button>
                <button
                  className={`${
                    primaryColor === "red" ? "theme-btn active" : "theme-btn"
                  }`}
                  onClick={() => setPrimaryColor("red")}
                  tabIndex={0}
                >
                  red
                </button>
              </div>
            </>
          </div>
        )}
      </div>
    </main>
  );
}
