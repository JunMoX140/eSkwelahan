import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

async function checkIfAuthenticated() {
  try {
    const response = await axios({
      method: "get",
      url: "/api/auth/verify",
    });
    return response.status === 200;
  } catch (e) {
    if (e.response.status === 401) {
      return false;
    }
    throw e;
  }
}

export default function useIsAuthenticated() {
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      const isAuthenticated = await checkIfAuthenticated();
      !isAuthenticated && navigate("/");
    }
    init();
  }, [navigate]);

  return {};
}
