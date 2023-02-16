import axios from "axios";
import { useState } from "react";
import { REGISTER } from "./globals";
import { LOGIN } from "./globals";
export const Register = async (formData) => {
  try {
    const res = await axios.post(`${REGISTER}`, formData);
    console.log(res);
    console.log(REGISTER);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (formData, username) => {
  try {
    const res = await axios.post(`${LOGIN}`, formData);
    console.log(res);
  } catch (error) {
    alert("Не верные данные");

    console.log(error);
  }
};
