import React, { type FC } from "react";
import styles from "../styles/Common.module.scss";

interface ITagProps {
  style: TagStyle;
  title: string;
  isAbsolute?: boolean;
}

export enum TagStyle {
  red = "redTag",
  yellow = "yellowTag",
}

const Tag: FC<ITagProps> = ({ style, title, isAbsolute }) => {
  return (
    <div
      className={
        isAbsolute
          ? `${styles.absolute} ${styles[style]}`
          : `${styles.tag} ${styles[style]}`
      }
    >
      <svg
        width="72"
        height="24"
        viewBox="0 0 72 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.8 0H71.3077L57.5077 24H0L13.8 0Z" />
      </svg>

      <p className={styles.tag__title}>{title} </p>
    </div>
  );
};

export default Tag;
