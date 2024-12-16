"use client";

import React, { useState, useEffect } from "react";
import styles from "./cv-container.module.css";
// components
import Front from "@/features/cv/ui/side-a/front";
import Back from "@/features/cv/ui/side-b/back";
// types
import { IRole } from "../../type";
import Translation, { Locate } from "../../state/locale";

interface CVProps {
  role: IRole;
  locale: Locate;
}
const CV = ({ locale, role }: CVProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  useEffect(() => {
    Translation.setLanguage(locale);
  });

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={styles.front}>
        <Front role={role} />
      </div>
      <div className={styles.back}>
        <Back role={role}  />
      </div>
    </div>
  );
};

export default CV;
