import React, { useEffect } from "react";
import ExitButton from "../ExitButton";
import "./error-modal.scss";

export default function ErrorModal({
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
    <div className="modal-container">
      <div className="modal">
        <ExitButton
          className="exit-modal-btn"
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
      <div className="mask"></div>
    </div>
  );
}
