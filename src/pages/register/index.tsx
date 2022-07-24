import LayoutEmpty from "@/components/Layout/empty";
import React from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";
import Link from "next/link";

const Register = () => {
  return (
    <div className={styles["cont"]}>
      <div className={styles["content"]}>
        <form className={styles["form"]}>
          <h3 className={styles["text"]}>Create Your Account</h3>
          <p className={styles["tep"]}>Please fill all forms to continued</p>
          <div className="">
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
            />
          </div>
          <div className="">
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
          <div className="">
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
          <div className="">
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
            />
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
