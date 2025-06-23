import React, { useEffect, useRef, useState } from 'react'
import SignUpPage from '../../pages/signup'
import LoginPage from '../../pages/login';
import { useAuthStore } from '../../stores/auth.store';

export default function DialogBox() {
  const {authUser, checkAuth}=useAuthStore();

  const modalRef = useRef("");
  useEffect(() => {
    if (authUser && modalRef.current?.close) {
      modalRef.current.close();
    }
  }, [authUser]);


  const [activeForm, setActiveForm] = useState("signup");
  return (
    <div data-theme="winter">
      <dialog id="my_modal_3" ref={modalRef} className="modal ">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-gray-200 btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {activeForm === "signup" ? (
            <SignUpPage switchToLogin={() => setActiveForm("login")} />
          ) : (
            <LoginPage switchToSignup={() => setActiveForm("signup")} />
          )}
        </div>
      </dialog>
    </div>
  );
}
