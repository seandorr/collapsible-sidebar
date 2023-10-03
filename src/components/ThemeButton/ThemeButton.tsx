import React from "react";

export default function ThemeButton({
  kind,
  themeName,
  onClick,
}: {
  kind: string;
  themeName: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`${themeName === kind ? "theme-btn active" : "theme-btn"}`}
      onClick={onClick}
      tabIndex={0}
    >
      {kind}
    </button>
  );
}
