import React, { useRef, useState } from "react";
import { FaHouseUser } from "react-icons/fa";
import { HiCamera } from "react-icons/hi";
import { MdMarkEmailUnread } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { fetchUser } from "../app/feature/userInfoSlice";
import axios from "../axios";
import ChangePassword from "../components/utilities/ChangePassword";
import Layout from "../components/utilities/Layout";
import ProfieInfo from "../components/utilities/ProfieInfo";
import WraperSideLinks from "../components/utilities/WraperSideLinks";

export default function Profile() {
  const [cngPassword, setcngPassword] = useState(false);
  const { info } = useSelector((state) => state.userInfo);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const fileRef = useRef();

  const handleChangeImage = async (e) => {
    //preview photo from fontend url
    setImage(URL.createObjectURL(e.target.files[0]));

    const formdata = new FormData();
    formdata.append("avatar", e.target.files[0]);
    formdata.append("email", info.email);

    //requiest send
    const { data } = await axios.put("/user/update", formdata);

    if (data) {
      dispatch(fetchUser());
      toast.success("upload successfull", { autoClose: 700 });
    }
  };

  const handleChangePasswordToggle = () => {
    setcngPassword((prev) => !prev);
  };

  return (
    <Layout>
      <ToastContainer />
      <WraperSideLinks page="personal info">
        <div className="border-2 h-fit sm:p-10 py-10 px-6 relative rounded-sm mt-8 bg-gray-200/30">
          <div className=" sm:flex flex-wrap gap-6">
            <div className="relative w-40">
              <img
                className="w-full h-auto"
                src={info?.avatar || image}
                alt="avatar"
              />
              <span
                className="bg-slate-500/20 inline-block p-1 rounded-full absolute right-0 bottom-0 cursor-pointer"
                onClick={() => fileRef.current.click()}
              >
                <HiCamera className="text-xl text-slate-800" />
              </span>
            </div>
            <div className="font-montserrat">
              <ProfieInfo
                name="name"
                title={info?.username}
                icon={FaHouseUser}
              />
              <ProfieInfo
                name="email"
                title={info?.email}
                icon={MdMarkEmailUnread}
              />
            </div>

            <button
              onClick={() => handleChangePasswordToggle()}
              className="absolute right-6 bottom-2 text-orange-400"
            >
              change password?
            </button>
            <input
              type="file"
              ref={fileRef}
              onChange={handleChangeImage}
              className="hidden"
            />
          </div>
          <div className={cngPassword ? "block" : "hidden"}>
            <ChangePassword
              handleChangePasswordToggle={handleChangePasswordToggle}
              email={info?.email}
            />
          </div>
        </div>
      </WraperSideLinks>
    </Layout>
  );
}
