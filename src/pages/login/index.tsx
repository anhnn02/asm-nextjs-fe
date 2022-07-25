import LayoutEmpty from "@/components/Layout/empty";
import React from "react";
import styles from "./Login.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
// import { useAuth } from "@/hooks/auth";
// import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
//   const { register: signup } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit: SubmitHandler<any> = async (data: any) => {
//     if (data.password != data.rePassword) {
//       alert("Passwords do not match please try again");
//     } else {
//       alert("Register success");
//       await signup(data);
//     }
//     // console.log(data);
//   };
  return (
    <div className={styles["cont"]}>
      <div className={styles["content"]}>
        <form className={styles["form"]} >
          <h3 className={styles["text"]}>Welcome To Ecommerce</h3>
          <p className={styles["tep"]}>Log in with email & password</p>
          
           
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Email or Phone Number
            </label>
            <input
              type="text"
              className={styles["form-input"]}
              placeholder="Exmple@gmail.com"
            
            />
            
          </div>
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Password
            </label>
            <input
              type="Password"
              className={styles["form-input"]}
              placeholder="********"
             
            />
            
          </div>
         <br />
         
          <Button.Fill className={styles["btn"]} content="Login" />
          <p className={styles["on"]}>__________ &nbsp; on &nbsp; __________</p>
          <Button.Fill1
            className={styles["btn"]}
            content="Continue with Facebook"
          />
         <div className={styles["google"]}>  <Button.Fill2
            className={styles["btn"]}
            content="Continue with Google"
          /></div>
         
        </form>
        <div className={styles["lg1"]}>
          Don’t have account?
          <span className={styles["lg-1"]}>
            &nbsp;
            <Link href="">Sign Up</Link>
          </span>
        </div>
        <div className={styles["lg"]}>
          Forgot your password?
          <span className={styles["lg-1"]}>
            &nbsp;
            <Link href="">Reset It</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
Login.Layout = LayoutEmpty;

export default Login;