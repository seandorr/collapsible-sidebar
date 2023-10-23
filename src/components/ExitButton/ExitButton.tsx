import React from "react";
import "./exit-button.scss";

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
      className={`close-btn ${className || ""}`}
      onClick={onClick}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      x
    </span>
  );
}
