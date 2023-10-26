import React, { useState, useEffect } from "react";
import { ISidebarItem, sidebarItems } from "../../utils/constants/sidebarItems";
import { SidebarItem } from "./SidebarItem";
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
    <aside className="sidebar-container" style={sidebarWidth}>
      <div className={`${sidebarExpanded ? "logo expanded" : "logo"} `}></div>
      <div className="card sidebar">
        <div className="sidebar-nav-items">
          {sidebarItems.map((item, index) => {
            return (
              <SidebarItem
                key={index}
                index={index}
                btnClassName={item.id === activeSidebarItem.id ? "active" : ""}
                onClick={() => setActiveSidebarItem(item)}
                onMouseEnter={() => setSidebarItemHover(item.id)}
                onMouseLeave={() => setSidebarItemHover(undefined)}
                icon={item.icon}
                label={item.label}
                tooltipVisible={
                  !sidebarExpanded && sidebarItemHover === item.id
                }
                sidebarExpanded={sidebarExpanded}
              />
            );
          })}
        </div>
        <SidebarItem
          expandItem={true}
          btnId="expand-item"
          onClick={() => setSidebarExpanded((prevState) => !prevState)}
          onMouseEnter={() => setSidebarItemHover("expand")}
          onMouseLeave={() => setSidebarItemHover(undefined)}
          icon={
            sidebarExpanded
              ? "keyboard_double_arrow_left"
              : "keyboard_double_arrow_right"
          }
          tooltipVisible={sidebarItemHover === "expand"}
          label={
            <div className="keys-container">
              <span className="keyboard-key">⌘</span>+
              <span className="keyboard-key">o</span>
            </div>
          }
        />
      </div>
    </aside>
  );
}
