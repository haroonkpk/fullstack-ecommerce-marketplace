import React, { useEffect } from "react";
import { useAuthStore } from "../../stores/auth.store";

export default function UserAction() {
  const { checkAuth, authUser, LogOut } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [LogOut, checkAuth]);

  const handleLoginClick = () => {
    document.getElementById("my_modal_3")?.showModal();
  };

  return (
    <div className="w-full h-[150px] relative bg-blue-100 rounded p-3 gap-2 flex flex-wrap">
      {/* Avatar + Username */}
      <div className="flex gap-2">
        <div className="max-w-11 max-h-11 rounded-full overflow-hidden">
          <img src="/avatar=pic1.jpg" alt="User avatar" />
        </div>
        <div className="h-11 flex flex-col justify-center gap-y-0 leading-4">
          <span>{authUser?.username || "Hi user"}</span>
          {!authUser && <span>Let's get started</span>}
        </div>
      </div>

      {/* User Actions */}
      {!authUser ? (
        <>
          <button
            onClick={handleLoginClick}
            className="btn btn-sm w-full py-4 border border-gray-300 bg-blue-600 text-white rounded text-sm"
          >
            Join now
          </button>
          <button
            onClick={handleLoginClick}
            className="btn btn-sm w-full border border-gray-300 py-4 text-blue-600 bg-white rounded text-sm"
          >
            Join now
          </button>
        </>
      ) : (
        <>
          <span className=" w-full flex justify-center">Let's get started</span>
          <button
            onClick={LogOut}
            className="btn btn-sm w-full border border-gray-300 py-4 text-blue-600 bg-white rounded text-sm"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
