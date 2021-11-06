import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import {axiosInstance} from "../utils/axios";
import { StoreContext } from "../App";
import Loading from "../components/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const store = React.useContext(StoreContext);

  useEffect(() => {
    async function fetchUser() {
      // setLoading(true);
      const res = await axiosInstance.get("/auth/me");
      store.user = res.data;
      store.isAuthenticated = true;
      setLoading(false);
    }

    fetchUser();
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <Loading />
      ) : (
        <div className="dashboard-container">
          <p>Hello User Welcome Back !!!</p>
          <Link to="/post-blog">
            <i
              className="fa fa-plus-circle fa-5x"
              aria-hidden="true"
              title="Post a Blog"
            ></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
