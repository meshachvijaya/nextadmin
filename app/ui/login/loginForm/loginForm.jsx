"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
// import { useState } from "react";

const LoginForm = () => {
  // If using form action state

  const [state, formAction] = useFormState(authenticate, undefined);

  // If using standard state
  // const [err, setErr] = useState();

  // const handleLogin = async (FormData) => {
  //   const data = await authenticate(FormData);
  //   data.error && setErr(data.error);
  // };

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
      {state && state}
      {/* {err && err} */}
    </form>
  );
};

export default LoginForm;
