import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  const className = [
    `btn btn-${isLoading ? "secondary" : "primary"}`,
    styles.button,
  ].join(" ");

  return (
    <button
      type="button"
      // className={[styles.button, styles.padded].join(" ")}
      // className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      className={className}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
