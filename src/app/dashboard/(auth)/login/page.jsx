'use client'

import React from 'react'
import styles from './page.module.css'
import {signIn, useSession} from 'next-auth/react'
import {useRouter} from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if(session.status === "loading") {
    return <p>Loading...</p>;
  }

  if(session.status === "authenticated") {
    router?.push('/dashboard');
  } //router가 null 또는 undefined가 될 가능성이 있다면 선택적 체이닝을 사용한 router?.push("/dashboard/login")를 통해 런타임 에러를 피할 수 있다.

  const handleSubmit = async (e) => {

    e.preventDefault() // 이벤트 기본값 방지

    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", {email, password});

  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className={styles.input} required/>
        <input type="password" placeholder='password' className={styles.input} required/>
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )
}

export default Login
