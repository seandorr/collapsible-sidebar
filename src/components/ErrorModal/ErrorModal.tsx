import React, { useEffect } from "react";
import { ExitButton } from "../ExitButton";
import styles from "./error-modal.module.scss";

export function ErrorModal({
  title = "Error",
  errorMessage,
  setError,
}: {
  title?: string;
  errorMessage: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    window.addEventListener("keydown", exitModalOnEsc);

    return () => {
      window.removeEventListener("keydown", exitModalOnEsc);
    };
  }, []);

  const exitModalOnEsc = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      setError(false);
    }
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal}>
        <ExitButton
          className={styles.exit_modal_btn}
          onClick={() => {
            setError(false);
          }}
          onKeyDown={(event: any) => {
            if (event.code === "Enter") {
              setError(false);
            }
          }}
        />
        <h1>{title}</h1>
        <p>{errorMessage}</p>
      </div>
      <div className={styles.mask}></div>
    </div>
  );
}
