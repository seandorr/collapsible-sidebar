import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import ThemeButtons from "./components/ThemeButtons/ThemeButtons";
import { defaultDark } from "./utils/constants/defaultDarkTheme";
import { sidebarItems } from "./utils/constants/sidebarItems";
import "./styles/main.scss";

export default function App() {
  const [themeName, setThemeName] = useLocalStorage("theme", "system");
  const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

  const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarItemHover, setSidebarItemHover] = useState(undefined);

  const sidebarWidth = {
    width: `${
      sidebarExpanded
        ? "var(--sidebar-width-expanded)"
        : "var(--sidebar-width-collapsed)"
    }`,
  };

  return (
    <div className="container" data-theme={theme}>
      <div className="wrapper">
        <div className="sidebar" style={sidebarWidth}>
          <div
            className={`${sidebarExpanded ? "logo expanded" : "logo"} `}
          ></div>
          <div className="card nav-container">
            <div className="nav-items">
              {sidebarItems.map((item, index) => {
                return (
                  <div key={index} className="sidebar-item-container">
                    <button
                      className={`${
                        item.id === activeSidebarItem.id
                          ? "item active"
                          : "item"
                      }`}
                      onClick={() => setActiveSidebarItem(item)}
                      onMouseEnter={() => setSidebarItemHover(item.id)}
                      onMouseLeave={() => setSidebarItemHover(undefined)}
                      tabIndex={0}
                    >
                      <span className="material-symbols-outlined">
                        {item.icon}
                      </span>
                      <span
                        className={
                          sidebarExpanded ? "label sidebar-expanded" : "label"
                        }
                        style={{ transitionDelay: `calc(${index} * 24ms)` }}
                      >
                        {item.label}
                      </span>
                    </button>
                    {!sidebarExpanded && sidebarItemHover === item.id && (
                      <span className="tooltip">{item.label}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              className="item"
              id="expand-item"
              onClick={() => setSidebarExpanded((prevState) => !prevState)}
              tabIndex={0}
            >
              <span className="material-symbols-outlined">
                {sidebarExpanded
                  ? "keyboard_double_arrow_left"
                  : "keyboard_double_arrow_right"}
              </span>
            </button>
          </div>
        </div>
        <main className="main card">
          <div
            className={`${
              sidebarExpanded
                ? "content-container expanded"
                : "content-container collapsed"
            }`}
          >
            <h1>{activeSidebarItem.label}</h1>
            {activeSidebarItem.label === "Settings" && (
              <>
                <p style={{ marginBottom: "16px" }}>Theme:</p>
                <ThemeButtons
                  themeName={themeName}
                  setTheme={setTheme}
                  setThemeName={setThemeName}
                />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
