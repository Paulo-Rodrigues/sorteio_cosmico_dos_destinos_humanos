"use client"

import styles from './page.module.css'
import { useState } from 'react'
import { ThemeSwitch } from '@/components/ThemeSwitch'
import { ImageCard } from '@/components/ImageCard'
import { getRandomImage, resetRandomImage } from '@/lib/getRandomImage'
import { Title } from '@/components/Title'

export default function Home() {
  const [image, setImage] = useState(resetRandomImage())

  return (
    <div className={styles.container}>
      <ThemeSwitch />

      <Title />

      <ImageCard
        src={image.path}
        alt={image.alt}
        text={image.text}
      />
      <div className={styles.buttons}>
        <button
          onClick={() => setImage(resetRandomImage())}
        >
          Reset
        </button>

        <button
          onClick={() => setImage(getRandomImage())}
        >
          Next
        </button>
      </div>
    </div>
  )
}
