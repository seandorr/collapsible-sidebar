import React from "react";
import styles from "../theme-buttons-group.module.scss";

export function ThemeButton({
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
      className={`${styles.theme_btn} ${
        themeName === kind ? styles.active : ""
      }`}
      onClick={onClick}
      tabIndex={0}
    >
      {kind}
    </button>
  );
}
