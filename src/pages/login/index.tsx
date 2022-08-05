import LayoutEmpty from "@/components/Layout/empty";
import React from "react";
import styles from "./Login.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { path } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/user/user.slice";

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { login: userLogin } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      const dataUser = await userLogin(data)
      //check account, set state and redirect
      if (dataUser && dataUser.user.status == 0) {
        dispatch(login(dataUser))
        if (dataUser.user.role === 1) {
          router.push(path.private.rootRoute)
          toast.success("Login successfully!", {
            position: 'top-center'
          })
        } else {
          router.push(path.public.rootRoute)
          toast.success("Login successfully!", {
            position: 'top-center'
          })
        }
      } else {
        toast.error("Your account is locked!"), {
          position: 'top-center'
        }
      }

    } catch (error) {
      toast.error(error.response.data.msg, {
        position: 'top-center'
      })
    }
  };
  return (
    <div className={styles["cont"]}>
      <div className={styles["content"]}>
        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles["text"]}>Welcome To Ecommerce</h3>
          <p className={styles["tep"]}>Log in with email & password</p>
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Email
            </label>
            <input
              type="text"
              className={styles["form-input"]}
              placeholder="Exmple@gmail.com"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />
            {errors?.email?.type == "required" && (
              <span className="my-error">Email is required</span>
            )}
            {errors?.email?.type == "pattern" && (
              <span className="my-error">Field must be a valid email</span>
            )}
          </div>
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Password
            </label>
            <input
              type="password"
              className={styles["form-input"]}
              placeholder="********"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors?.password?.type == "required" && (
              <span className="my-error">Password is required</span>
            )}
            {errors?.name?.type == "minLength" && (
              <span className="my-error">Min length must be at least 5</span>
            )}
          </div>
          <br />
          <Button.Fill className={styles["btn"]} content="Login" />
          <p className={styles["on"]}>__________ &nbsp; on &nbsp; __________</p>
          <Button.Fill1
            className={styles["btn"]}
            content="Continue with Facebook"
          />
          <div className={styles["google"]}>
            {" "}
            <Button.Fill2
              className={styles["btn"]}
              content="Continue with Google"
            />
          </div>
        </form>
        <div className={styles["lg1"]}>
          Don’t have account?
          <span className={styles["lg-1"]}>
            &nbsp;
            <Link href={path.public.signupRoute}>Sign Up</Link>
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