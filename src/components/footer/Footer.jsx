import React from 'react'
import styles from './footer.module.css'
import Image from "next/image"

const Footer = () => {

  console.log("hello")
  return (
    <div className={styles.container}>
      <div>©2023 ahnsozero. All rights reserved.</div>
      <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="ahnsozero Facebook" />
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="ahnsozero" />
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="ahnsozero" />
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="ahnsozero" />
      </div>
    </div>
  )
}

export default Footer