import React from "react";
import styles from "./exit-button.module.scss";

export function ExitButton({
  onClick,
  onKeyDown,
  className,
}: {
  onClick: () => void;
  onKeyDown?: any;
  className?: string;
}) {
  return (
    <span
      className={`${styles.close_btn} ${className || ""}`}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      x
    </span>
  );
}
