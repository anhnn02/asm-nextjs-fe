import LayoutEmpty from "@/components/Layout/empty";
import React from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const { register: signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    if (data.password != data.rePassword) {
      alert("Passwords do not match please try again");
    } else {
      alert("Register success");
      await signup(data);
    }
    // console.log(data);
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
            {errors.name && (
              <span style={{ color: "red" }}>Full name cannot be blank</span>
            )}
            {/* {errors.name.type === "minLength" && (
              <span style={{ color: "red" }}>it nhat 5 li tu </span>
            )} */}
          </div>
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
              {...register("email", { required: true, minLength: 5 })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Email cannot be blank</span>
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
              type="Password"
              className={styles["form-input"]}
              placeholder="********"
              {...register("password", { required: true, minLength: 5 })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>Password cannot be blank</span>
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
              {...register("rePassword", { required: true, minLength: 5 })}
            />
            {errors.rePassword && (
              <span style={{ color: "red" }}>
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
          <p> </p>
          <Button.Fill2
            className={styles["btn"]}
            content="Continue with Google"
          />
        </form>
        <div className={styles["lg"]}>
          Already have account?
          <span className={styles["lg-1"]}>
            &nbsp;
            <Link href="">Log in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
Register.Layout = LayoutEmpty;

export default Register;
