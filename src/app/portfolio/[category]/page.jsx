import React from 'react';
import styles from './page.module.css';
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = ({params}) => {
  console.log(params);
  return (
    <div className={styles.container}>
       <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.imgContainer}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
            fill={true}
            src="https://image.xportsnews.com/contents/images/upload/article/2021/1002/1633133074281223.jpg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.imgContainer}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
                 fill={true}
                 src="https://image.xportsnews.com/contents/images/upload/article/2021/1002/1633133074281223.jpg" alt=""/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.imgContainer}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img}
                 fill={true}
                 src="https://image.xportsnews.com/contents/images/upload/article/2021/1002/1633133074281223.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Category