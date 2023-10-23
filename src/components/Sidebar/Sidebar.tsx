import React, { useState, useEffect } from "react";
import { ISidebarItem, sidebarItems } from "../../utils/constants/sidebarItems";
import "./sidebar.scss";

export function Sidebar({
  activeSidebarItem,
  setActiveSidebarItem,
}: {
  activeSidebarItem: ISidebarItem;
  setActiveSidebarItem: (item: ISidebarItem) => void;
}) {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarItemHover, setSidebarItemHover] = useState(undefined);

  useEffect(() => {
    window.addEventListener("keydown", toggleSidebar);

    return () => {
      window.removeEventListener("keydown", toggleSidebar);
    };
  }, []);

  const toggleSidebar = (event: KeyboardEvent) => {
    const commandKey = event.metaKey;
    const oKey = event.which === 79;

    if (commandKey && oKey) {
      setSidebarExpanded((prevState) => !prevState);
    }
  };

  const sidebarWidth = {
    width: `${
      sidebarExpanded
        ? "var(--sidebar-width-expanded)"
        : "var(--sidebar-width-collapsed)"
    }`,
  };

  return (
    <aside className="sidebar" style={sidebarWidth}>
      <div className={`${sidebarExpanded ? "logo expanded" : "logo"} `}></div>
      <div className="card nav-container">
        <div className="nav-items">
          {sidebarItems.map((item, index) => {
            return (
              <div key={index} className="sidebar-item-container">
                <button
                  className={`${
                    item.id === activeSidebarItem.id ? "item active" : "item"
                  }`}
                  onClick={() => setActiveSidebarItem(item)}
                  onMouseEnter={() => setSidebarItemHover(item.id)}
                  onMouseLeave={() => setSidebarItemHover(undefined)}
                  tabIndex={0}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
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
        <div className="sidebar-item-container">
          <button
            className="item"
            id="expand-item"
            onClick={() => setSidebarExpanded((prevState) => !prevState)}
            onMouseEnter={() => setSidebarItemHover("expand")}
            onMouseLeave={() => setSidebarItemHover(undefined)}
            tabIndex={0}
          >
            <span className="material-symbols-outlined">
              {sidebarExpanded
                ? "keyboard_double_arrow_left"
                : "keyboard_double_arrow_right"}
            </span>
          </button>
          {sidebarItemHover === "expand" && (
            <span className="tooltip">
              <div className="keys-container">
                <span className="keyboard-key">⌘</span>+
                <span className="keyboard-key">o</span>
              </div>
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
