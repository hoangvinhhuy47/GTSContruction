import React, { useState } from "react";
import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROFILES } from "graphql/query/login";
import { EyesHide, EyesShow } from "assets/svg";

interface IVariables {
  login_id: string | undefined;
}
interface Props {}
export const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  // const { data, error } = useQuery<IVariables>(GET_PROFILES, {
  //   variables: { login_id: "k8sOi8L4gCa7Kzm6It8Jeg6eQH73" },
  // });
  // if (error) console.log("Erro", error);
  // if (data) console.log("data", data);

  return (
    <div className={styles.overview}>
      <div className={styles.background}>
        <div className={styles.logo}></div>
        <p className={styles.txtHeader}>GTS CONSTRUCTION</p>
        <p className={styles.txtLogin}>LogIn to DashBoard</p>
        <p className={styles.txtTitle}>Enter your email and password below</p>
        <form onClick={() => console.log(123)} className={styles.formInput}>
          <label className={styles.labelEmail}>Email</label>
          <input
            className={styles.inputEmail}
            name="email"
            placeholder="Email address"
          ></input>
          <label className={styles.labelEmail}>PASSWORD</label>
          <div className={styles.viewPassWord}>
            <input
              className={styles.inputEmail}
              name="password"
              placeholder="Password"
              type={"password"}
            ></input>
            <button onClick={() => setShow(!show)}>
              <img
                src={show ? EyesShow : EyesHide}
                className={styles.eyesPassword}
              ></img>
            </button>
          </div>
        </form>
        <button
          onClick={() => navigate("/overview")}
          className={styles.buttonLogin}
        >
          Login
        </button>
        <Link to={"/home"}>
          <li className={styles.labelForgotPass}>Forgot password</li>
        </Link>
        <Link to={"/home"}>
          <li className={styles.labelForgotPass}>
            Don't have a account? SignUp
          </li>
        </Link>
      </div>
    </div>
  );
};
