import Image from "next/image";
import BackSvg from "../../../public/icons/back.svg";
import ProfileSvg from "../../../public/icons/profile.svg";
import SettingsProfileSvg from "../../../public/icons/settings-profile.svg";
import ReferralsSvg from "../../../public/icons/referrals.svg";
import CopySvg from "../../../public/icons/copy.svg";
import ExitSvg from "../../../public/icons/exit.svg";
import InviteFriendsBox from "../../../public/images/invite-friends-present.svg";
import ReferralsStars from "../../../public/icons/referrals-stars.svg";
import { useRef, useState } from "react";
import { UploadFile } from "../UploadFile";
import { useSwipeable } from "react-swipeable";
import clsx from "clsx";
import { ReferralsViewModal } from "./ReferralsViewModal";

export function ProfileViewModal({
  handleCloseProfile,
  isOpenProfileModal,
  profile,
  setProfile,
}) {
  const [isOpenReferrals, setIsOpenReferrals] = useState(false);
  const [isOpenProfileConfig, setIsOpenProfileConfig] = useState(false);
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [isOpenLogout, setIsOpenLogout] = useState(false);

  const swipeLogoutRef = useRef(null);

  const referralCode = "https://www.google.ru/?hl=ru";

  const swipeable = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Down" && swipeLogoutRef.current) {
        const newTranslateY = Math.max(eventData.absY, 0);

        swipeLogoutRef.current.style.transform = `translateY(${newTranslateY}px)`;
      }
    },
    onSwiped: (eventData) => {
      if (swipeLogoutRef.current) {
        if (eventData.absY > 80 && eventData.dir === "Down") {
          setIsOpenLogout(false);
        }

        swipeLogoutRef.current.style.transform = `translateY(0px)`;
      }
    },
  });

  return (
    <>
      <div
        className={clsx(
          "flex flex-col items-center w-screen h-screen bg-white px-4 gap-2.5 fixed z-10 top-0 pb-2.5 safe-top overflow-y-hidden transition-all duration-700",
          isOpenProfileModal ? "translate-x-0" : "translate-x-[1500px]"
        )}
      >
        <div className="flex items-center w-full py-4 mt-2.5">
          <button className="pl-1 py-1" onClick={handleCloseProfile}>
            <BackSvg />
          </button>
          <h4 className="font-medium mx-auto py-1">Profile</h4>
        </div>
        {!profile ? (
          <div className="rounded-full w-[129px] h-[129px] flex items-center justify-center bg-[#F5F5F5]">
            <ProfileSvg className="w-[59px] h-[59px]" />
          </div>
        ) : (
          <Image
            alt="Profile Image"
            src={"/images/profile-image.jpeg"}
            width={129}
            height={129}
            className="rounded-full w-[129px] h-[129px] object-cover"
          />
        )}
        <h5 className="font-semibold text-xl">Name User</h5>
        <h6 className="text-sm opacity-40">test@gmail.com</h6>
        {/* <div className="border rounded-[20px] border-[#D2D2D2]/50 py-4 w-full flex justify-between">
          <span className="border-r border-r-[#D2D2D2]/50 flex gap-0.5 flex-col items-center w-1/3">
            <p className="text-xs">Text</p>
            <p className="text-main-blue font-semibold">123</p>
          </span>
          <span className="border-r border-r-[#D2D2D2]/50 flex gap-0.5 flex-col items-center w-1/3">
            <p className="text-xs">Text</p>
            <p className="text-main-blue font-semibold">123</p>
          </span>
          <span className="flex gap-0.5 flex-col items-center w-1/3">
            <p className="text-xs">Text</p>
            <p className="text-main-blue font-semibold">123</p>
          </span>
        </div> */}
        <div className="border px-4 flex flex-col rounded-[20px] border-[#D2D2D2]/50 w-full">
          <button
            onClick={() => setIsOpenProfileConfig(true)}
            className="px-1.5 border-b border-b-[#D2D2D2]/50 flex items-center py-5"
          >
            <span className="flex items-center gap-1.5 w-max">
              <ProfileSvg className="w-5 h-5" />
              <p className="font-semibold text-sm">Profile</p>
            </span>
            <BackSvg className="ml-auto rotate-180" />
          </button>
          <button className="px-1.5 border-b border-b-[#D2D2D2]/50 flex items-center py-5">
            <span className="flex items-center gap-2 w-max">
              <SettingsProfileSvg />
              <p className="font-semibold text-sm">Settings</p>
            </span>
            <BackSvg className="ml-auto rotate-180" />
          </button>
          <button
            onClick={() => setIsOpenReferrals(true)}
            className="px-1.5 border-b border-b-[#D2D2D2]/50 flex items-center py-5"
          >
            <span className="flex items-center gap-1.5 w-max">
              <ReferralsSvg />
              <p className="font-semibold text-sm">Referrals</p>
            </span>
            <BackSvg className="ml-auto rotate-180" />
          </button>
          <button
            onClick={() => setIsOpenLogout(true)}
            className="px-1.5 flex items-center py-5"
          >
            <span className="flex items-center gap-1.5 w-max">
              <ExitSvg />
              <p className="text-[#BA5353] text-sm font-semibold">Logout</p>
            </span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "h-screen z-10 transition-colors fixed top-0 duration-1000",
          isOpenLogout ? "bg-black/65 w-screen" : "bg-transparent w-0"
        )}
      ></div>
      <div
        id="profile-logout"
        onClick={(e) =>
          e.target.id === "profile-logout" && setIsOpenLogout(false)
        }
        ref={swipeLogoutRef}
        className={clsx(
          "transition-all duration-1000 fixed flex z-20 top-0 w-full h-screen"
        )}
        style={{
          transform: `translateY(${!isOpenLogout ? 4000 : 0}px)`,
        }}
      >
        <div className="flex flex-col items-center pt-2.5 px-2.5 pb-7 rounded-t-[20px] mt-auto w-full gap-2.5 bg-white">
          <div
            {...swipeable}
            onDoubleClick={() => setIsOpenLogout(false)}
            className="flex items-center flex-col w-full gap-2.5 cursor-pointer"
          >
            <span className="min-h-1 w-20 bg-[#D9D9D9]" />
            <h6 className="text-dark-blue font-medium">Logout</h6>
          </div>
          <p className="text-center text-[#848282] w-72">
            Are you sure you want to log out of your profile
          </p>
          <div className="w-full flex gap-2.5">
            <button
              onClick={() => setIsOpenLogout(false)}
              className="bg-main-blue border-2 border-main-blue p-4 rounded-[20px] text-white w-full"
            >
              Cancel
            </button>
            <button className="border-2 border-main-blue rounded-[20px] text-main-blue p-4 w-full">
              Yes,Logout
            </button>
          </div>
        </div>
      </div>
      <ReferralsViewModal
        isOpenReferrals={isOpenReferrals}
        setIsOpenReferrals={setIsOpenReferrals}
        referralCode={referralCode}
      />
      <div
        className={clsx(
          "flex flex-col items-center gap-2.5 fixed z-20 top-0 transition-all overflow-x-hidden duration-700 safe-top w-screen pb-10 overflow-y-auto bg-white px-4 h-screen",
          isOpenProfileConfig ? "translate-x-0" : "translate-x-[1500px]"
        )}
      >
        <div className="flex items-center w-full py-4 mt-2.5">
          <button
            className="pl-1 py-1"
            onClick={() => setIsOpenProfileConfig(false)}
          >
            <BackSvg />
          </button>
          <h4 className="font-medium mx-auto py-1">Profile</h4>
        </div>
        <UploadFile
          showUploadedImage={true}
          fileConfig={profileAvatar}
          setFileConfig={setProfileAvatar}
        />
        <form className="flex flex-col gap-2.5 w-full -mt-2 ">
          <label htmlFor="profile-name" className="text-sm font-semibold">
            Name
          </label>
          <input
            id="profile-name"
            placeholder="e.g. Maria"
            className="rounded-[20px] border p-4 border-[#D2D2D2] w-full outline-none"
          />
          <label htmlFor="profile-email" className="text-sm font-semibold">
            Email
          </label>
          <input
            id="profile-email"
            placeholder="e.g. test@gmail.com"
            className="rounded-[20px] border p-4 bg-[#D2D2D2]/50 w-full outline-none text-[#848282]"
          />
        </form>

        <button className="rounded-[20px] w-full mt-auto bg-main-blue p-4 text-white font-medium">
          Save
        </button>
      </div>
    </>
  );
}
