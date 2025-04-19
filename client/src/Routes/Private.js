import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function Private() {
  const [ok, setOk] = useState(false);
  const auth = useSelector((state) => state.login.auth);
  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/user-auth", {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) {
        setOk(true);
      }
      else{
        setOk(false)
      }
    };
    if(auth.token) checkAuth()
  }, []);
  return ok ? <Outlet /> : "spinner";
}
