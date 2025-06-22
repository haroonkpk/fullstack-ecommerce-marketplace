import { LogOutIcon } from "lucide-react";
import { useAuthStore } from "../stores/auth.store.js";
import { useEffect, useRef } from "react";

export default function Profile() {
  const { authUser, LogOut } = useAuthStore();
  const modalRef1 = useRef("");
  useEffect(() => {
      if (!authUser && modalRef1.current?.close) {
        modalRef1.current.close();
      }
    }, [authUser]);
  return (
    <dialog id="my_modal_4" ref={modalRef1} className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="font-bold text-lg">
          <span className="text-xl">{authUser?.username}</span>{" "}
          <span className="text-sm text-gray-600">
            your favorite store
          </span>
        </h2>
        <button
          onClick={LogOut}
          variant="ghost"
          className="flex items-center space-x-2 text-red-500 btn-ghost btn transition-all mr-2.5 rounded-2xl"
        >
          <LogOutIcon size={20} />{" "}
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </dialog>
  );
}
