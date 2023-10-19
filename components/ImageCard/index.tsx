"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

type ImageCardProps = {
  src: string;
  alt: string;
  text: string;
};

export const ImageCard = ({ src, alt, text }: ImageCardProps) => {

  return (
    <div className={styles.imageCard}>
      <div className={styles.imageContainer}>
        <Image src={src} alt={alt} width={500} height={500} />
        <div className={styles.overlay}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};
