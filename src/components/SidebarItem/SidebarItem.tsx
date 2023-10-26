import React, { ReactNode } from "react";
import styles from "./sidebar-item.module.scss";

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
    <div className={styles.sidebar_item_container}>
      <button
        id={btnId}
        className={`${styles.item} ${btnClassName || ""}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        tabIndex={0}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {!expandItem && (
          <span
            className={`${styles.label} ${
              sidebarExpanded ? styles.sidebar_expanded : ""
            }`}
            style={{ transitionDelay: `calc(${index} * 24ms)` }}
          >
            {label}
          </span>
        )}
      </button>
      {tooltipVisible && <span className={styles.tooltip}>{label}</span>}
    </div>
  );
}
