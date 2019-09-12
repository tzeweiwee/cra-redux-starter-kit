import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
  const {
    type = "button",
    style = "standard",
    text,
    onClick,
    disabled = false
  } = props;

  const buttonStyle = style => {
    switch (style) {
      case "info":
        return styles.infoButton;
      case "alert":
        return styles.alertButton;
      case "standard":
      default:
        return styles.standardButton;
    }
  };

  return (
    <div className={styles.container}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${buttonStyle(style)} ${styles.button}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
