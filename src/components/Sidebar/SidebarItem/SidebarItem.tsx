import React, { ReactNode } from "react";
import "./sidebar-item.scss";

interface INavItem {
  btnClassName?: string;
  btnId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  icon: string;
  label?: string | ReactNode;
  tooltipVisible: boolean;
  index?: number;
  sidebarExpanded?: boolean;
  expandItem?: boolean;
}

export function SidebarItem({
  btnClassName,
  btnId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  icon,
  label,
  tooltipVisible,
  index,
  sidebarExpanded,
  expandItem = false,
}: INavItem) {
  return (
    <div className="sidebar-item-container">
      <button
        id={btnId}
        className={`item ${btnClassName || ""}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {!expandItem && (
          <span
            className={sidebarExpanded ? "label sidebar-expanded" : "label"}
            style={{ transitionDelay: `calc(${index} * 24ms)` }}
          >
            {label}
          </span>
        )}
      </button>
      {tooltipVisible && <span className="tooltip">{label}</span>}
    </div>
  );
}
