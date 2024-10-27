import axios from "axios"

export const getToken = () => {
  if (typeof window !== "undefined") {
    // Client-side-only code
    const unParsedToken = sessionStorage.getItem("token");
    return unParsedToken
  } else {
    return "";
  }
};


export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      config.headers.Authorization = "Bearer " + getToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Response interceptor to handle specific status codes
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        console.log(true);
      }
    } else if (error.request) {
      if (typeof window !== "undefined" && !navigator.onLine) {
        console.log("Root", error);
      }
    }

    return Promise.reject(error);
  }
);

export async function getUserProfile() {
  const { data } = await api.get(`/auth/user`)
  return data.userInfo
}

export async function usingAnotherBearerRequest(
  token: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  data?: any
) {
  console.log(token)
  const controller = new AbortController();
  const signal = controller.signal;

  try {
    const response = await api({
      method,
      url,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: method === "POST" || method === "PUT" ? data : undefined,
      signal,
    });
    return response;
  } catch (error: any) {
    if (error.code === "ECONNABORTED" || error.message === "canceled") {
      throw new Error("Request timed out");
    }
    return error.response || error;
  }
}

