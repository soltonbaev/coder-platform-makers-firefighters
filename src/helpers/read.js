import axios from "axios";
import { QUESTIONS, TAGS } from "./globals";
import { PROFILE } from "./globals";
import { LOGIN } from "./globals";
import { setToStorage } from "./create";

export async function getTags() {
  console.log("access config", getAccessConfig());
  try {
    let res = await axios.get(TAGS, getAccessConfig());

    console.log("getTags results", res.data.results);
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
}

export function getFromStorage(type) {
  if (type === "token") {
    return JSON.parse(localStorage.getItem("token"));
  } else if (type === "uid") {
    return JSON.parse(localStorage.getItem("uid"));
  }
}

export function getAccessConfig() {
  const accessToken = getFromStorage("token").access;
  const Authorization = `Bearer ${accessToken}`;
  return {
    headers: {
      Authorization,
    },
  };
}

export async function getUserProfile(id) {
  try {
    let res = await axios.get(`${PROFILE}${id}`, getAccessConfig());
    console.log("getUserProfile result", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export const login = async (formData) => {
  try {
    const res = await axios.post(LOGIN, formData);
    console.log("Result of login request", res.data);
    setToStorage("token", {
      refresh: res.data.refresh,
      access: res.data.access,
    });
    setToStorage("uid", res.data.id);
    let userProfileRes = await getUserProfile(res.data.id);
    console.log("userProfieRes", userProfileRes);
    return userProfileRes;
  } catch (error) {
    console.log("Login failed");
    console.log(error);
  }
};

export async function getQuestions() {
  let res = await axios(QUESTIONS);
  console.error("getQuestions result", res.data);
  console.log(res.data);
  console.log(res.data.results);
  return res.data.results;
  //   console.log(res.data.results);
}

export async function getQuestionsRaw() {
  let res = await axios(QUESTIONS + window.location.search);
  console.error("getQuestions result", res.data);

  return res.data;
  //   console.log(res.data.results);
}

export async function getQuestion(slug) {
  let res = await axios(QUESTIONS + slug);
  console.log("getQuestion result", res);
  return res.data;
}
