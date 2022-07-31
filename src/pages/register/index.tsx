import LayoutEmpty from "@/components/Layout/empty";
import React from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { path } from "@/constants";
import { useRouter } from "next/router";

const Register = () => {
  const { register: signup } = useAuth();
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    if (data.password != data.rePassword) {
      toast.error("Passwords do not match please try again!", {
        position: 'top-center'
      })
    } else {
      try {
        await signup(data);
        toast.success("Register success", {
          position: 'top-center'
        })
        router.push(path.public.loginRoute)
      } catch (error) {
        toast.error(error.response.data.msg, {
          position: 'top-center'
        })
      }
     
    }
  };
  return (
    <div className={styles["cont"]}>
      <div className={styles["content"]}>
        <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles["text"]}>Create Your Account</h3>
          <p className={styles["tep"]}>Please fill all forms to continued</p>
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Full Name
            </label>
            <input
              type="text"
              className={styles["form-input"]}
              placeholder="RalphAdwards"
              {...register("name", { required: true, minLength: 5 })}
            />
            {errors?.name?.type == 'required' && (<span className="my-error">Email is required</span>)}
            {errors?.name?.type == 'minLength' && (<span className="my-error">Min length must be at least 5</span>)}

          </div>
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
              {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
            />
            {errors?.email?.type == 'required' && (<span className="my-error">Email is required</span>)}
            {errors?.email?.type == 'pattern' && (<span className="my-error">Field must be a valid email</span>)}
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
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className='my-error'>Password cannot be blank</span>
            )}
          </div>
          <div className={styles["form__label"]}>
            <label
              htmlFor="exampleInputPassword1"
              className={styles["form__label"]}
            >
              Confirm Password
            </label>
            <input
              type="Password"
              className={styles["form-input"]}
              placeholder="********"
              {...register("rePassword", { required: true })}
            />
            {errors.rePassword && (
              <span className='my-error'>
                Re-Password name cannot be blank
              </span>
            )}
          </div>
          <div className="form-control">
            <label className={styles["label"]}>
              <input type="checkbox" className={styles["label-sty"]} />
              <span className={styles["label-text"]}>
                By signing up, you agree to &nbsp;
                <span className={styles["form-udline"]}>Terms & Condtion</span>
              </span>
            </label>
          </div>
          <Button.Fill className={styles["btn"]} content="Create Account" />
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
        <div className={styles["lg"]}>
          Already have account?
          <span className={styles["lg-1"]}>
            &nbsp;
            <Link href={path.public.loginRoute}>Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
Register.Layout = LayoutEmpty;

export default Register;
