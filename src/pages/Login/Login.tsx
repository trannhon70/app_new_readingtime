import type { FC } from "react";
// @ts-ignore
import React from "react";
import "./Login.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { GrLinkPrevious } from "react-icons/gr";
// @ts-ignore
import LoginBanner from "./../../assets/banner/login-banner.png";
import { Transitions } from "../../components/Transition";
import {  toast } from 'react-toastify';
import LoginApi from "../../apis/user";
import { useHistory } from "react-router-dom";
interface LoginProps {}

type LoginInput = {
  email: string;
  password: string;
};

const Login: FC<LoginProps> = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = async (dataset) => {
   await LoginApi(dataset).then((res: any) => {
     toast.success(`${res.message}`)
     localStorage.setItem("token", JSON.stringify(res.data.token))
     localStorage.setItem("infoUser", JSON.stringify(res.data.infoUser))
      history.push("/home");

    }).catch((err: any) => {
      console.log(err, 'err');
    toast.error(`${err.response.data.message}`)
      
    })
  };

  return (
    <>
      <Transitions>
        <div className="background-home">
          {/* <div><GrLinkPrevious /></div> */}
          <div className="login-container">
            <img src={LoginBanner} alt="" />
            <div className="login-form">
              <h3 className="login-title">Welcome back</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-item">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className={errors.email ? "error-input" : ""}
                    placeholder="Nhập email của bạn"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="error">* Email không được bỏ trống</span>
                  )}
                </div>

                <div className="form-item">
                  <label htmlFor="">Mật khẩu</label>
                  <input
                    className={errors.password ? "error-input" : ""}
                    type="password"
                    placeholder="Nhập mật khẩu của bạn"
                    {...register("password", { required: true })}
                  />
                  <div className="form-item-message">
                    {errors.password ? (
                      <span className="error">
                        * Mật khẩu không được bỏ trống
                      </span>
                    ) : (
                      <span></span>
                    )}
                    <span className="sub-button">Quên mật khẩu?</span>
                  </div>
                </div>
                <button type="submit">Đăng nhập</button>
              </form>
            </div>
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Login;
