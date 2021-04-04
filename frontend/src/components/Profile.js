import React, { useEffect, useState } from "react";
import { api } from "./Api";
import Navbar1 from "./Navbar1";
const Profile = () => {
  const [username, setUsername] = useState("");
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const loadUser = async () => {
      try {
        console.log("token is", token);
        const res = await fetch(`${api}/user/details`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        const data = await res.json();
        return data;
      } catch {
        console.log("Error loading user info");
      }
    };
    const getUsers = async () => {
      const infoFromServer = await loadUser();
      if (infoFromServer) {
        setUsername(infoFromServer.username);
        setXp(infoFromServer.xp);
        setLevel(infoFromServer.level);
      }
    };
    getUsers();
  }, []);
  return (
    <>
      <Navbar1 />
    </>
  );
};

export default Profile;
