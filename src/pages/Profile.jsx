import React from "react";
import { useAuth } from "context/AuthContext";

function Profile() {
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>프로필</h1>
      {isLoggedIn && (
        <>
          <p>프로필 정보</p>
          <button onClick={handleLogout} 로그아웃></button>
        </>
      )}
    </div>
  );
}

export default Profile;
