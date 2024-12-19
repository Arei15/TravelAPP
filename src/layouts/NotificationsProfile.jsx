"use client";

import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import NotificationsSvg from "../../public/icons/notifications.svg";
import { NotificationsViewModal } from "@/common/modals/NotificationsViewModal";
import { ProfileViewModal } from "@/common/modals/ProfileViewModal";
import { ProfileContext } from "./Providers";
import { useRouter } from "next/navigation";
import ProfileSvg from "../../public/icons/profile.svg";

export default function NotificationsProfile({ notificationsCount }) {
  const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false);
  const [isOpenProfileModal, setIsOpenProfileModal] = useState(false);
  const [bodyElement, setBodyElement] = useState(null);
  const { profile, setProfile } = useContext(ProfileContext);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      setBodyElement(document.body);
    }
  }, []);
  return (
    <>
      <div className="flex min-w-24 items-center justify-center">
        <button
          onClick={() => setIsOpenNotificationModal(true)}
          className="relative cursor-pointer pt-0.5 h-max"
        >
          <NotificationsSvg />
          {notificationsCount && (
            <span className="font-poppins text-[8px] leading-tight font-medium bg-main-blue text-white rounded-[5px] flex items-center p-[3px] justify-center absolute top-0 right-0 -mt-1 -mr-2">
              {notificationsCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setIsOpenProfileModal(true)}
          className="w-max h-max ml-auto"
        >
          {!profile ? (
            <div className="h-10 w-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
              <ProfileSvg  className='w-5 h-5'/>
            </div>
          ) : (
            <Image
              alt="Profile Image"
              src={"/images/profile-image.jpeg"}
              width={40}
              height={40}
              priority
              className="rounded-full w-10 h-10 object-cover"
            />
          )}
        </button>
      </div>
      {bodyElement &&
        createPortal(
          <NotificationsViewModal
            isOpenNotificationModal={isOpenNotificationModal}
            handleCloseNotifications={() => setIsOpenNotificationModal(false)}
          />,
          bodyElement
        )}
      {bodyElement &&
        createPortal(
          <ProfileViewModal
            profile={profile}
            setProfile={setProfile}
            isOpenProfileModal={isOpenProfileModal}
            handleCloseProfile={() => setIsOpenProfileModal(false)}
          />,
          bodyElement
        )}
    </>
  );
}
