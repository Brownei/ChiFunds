"use server"
import { api, usingAnotherBearerRequest } from "./api";

export async function getUser() {
  let user: any;
  let loading: boolean;
  try {
    loading = true
    const response = await usingAnotherBearerRequest("GET", "/auth/user")
    //const response = await api.get("/auth/user")
    console.log(response.data.error)

    if (response.data.error) {
      console.log(response.data.error)
    }

    user = response.data
  } catch (error) {
    console.log(error)
  } finally {
    loading = false
  }

  return {
    user, loading
  }
}
