import React from 'react'
import styles from './page.module.css'
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData()
  return (
    <div className={styles.mainContainer}>

      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image className={styles.image}
                 src="https://image.xportsnews.com/contents/images/upload/article/2021/1002/1633133074281223.jpg"
                 alt=""
                 width={400}
                 height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog