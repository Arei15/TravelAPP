import BackSvg from "../../../public/icons/back.svg";
import SettingsSvg from "../../../public/icons/settings.svg";
import NoNotificationsSvg from "../../../public/icons/no-notifications.svg";
import ViewMoreSvg from "../../../public/icons/view-more.svg";
import { useState } from "react";
import { SwitchToggle } from "../SwitchToggle";
import clsx from "clsx";

export function NotificationsViewModal({
  handleCloseNotifications,
  userNotifications = [{ title: "Title" }],
  isOpenNotificationModal,
}) {
  const [isOpenSettings, setIsOpenSettings] = useState(false);
  const [isEmailOn, setIsEmailOn] = useState(true);
  const [isInAppOn, setIsInAppOn] = useState(true);
  const [isUpdateOn, setIsUpdateOn] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "fixed bg-white z-20 px-4 top-0 safe-top pb-2.5 h-screen w-screen duration-700 transition-all",
          isOpenSettings ? " translate-x-0" : "translate-x-[1500px]"
        )}
      >
        <div className="flex items-center w-full py-5 mt-2.5">
          <button onClick={() => setIsOpenSettings(false)}>
            <BackSvg />
          </button>
          <h4 className="font-medium mx-auto">Notifications setting</h4>
        </div>
        <div className="flex flex-col gap-2.5 py-2.5">
          <span className="text-sm text-main-blue flex justify-between w-full bg-main-blue/10 rounded-[20px] p-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua
          </span>
          <div className="flex justify-between py-5 w-full border-b gap-2.5 border-[#D9D9D9]/50">
            <span className="flex flex-col gap-2.5">
              <h5 className="font-semibold text-sm">Email notification</h5>
              <p className="opacity-40 text-xs w-[267px]">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              </p>
            </span>
            <div className="flex items-center">
              <SwitchToggle isOn={isEmailOn} setIsOn={setIsEmailOn} />
            </div>
          </div>{" "}
          <div className="flex justify-between py-5 w-full border-b gap-2.5 border-[#D9D9D9]/50">
            <span className="flex flex-col gap-2.5">
              <h5 className="font-semibold text-sm">In app notification</h5>
              <p className="opacity-40 text-xs w-[267px]">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              </p>
            </span>
            <div className="flex items-center">
              <SwitchToggle isOn={isInAppOn} setIsOn={setIsInAppOn} />
            </div>
          </div>{" "}
          <div className="flex justify-between py-5 w-full border-b gap-2.5 border-[#D9D9D9]/50">
            <span className="flex flex-col gap-2.5">
              <h5 className="font-semibold text-sm">Update application</h5>
              <p className="opacity-40 text-xs w-[267px]">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
              </p>
            </span>
            <div className="flex items-center">
              <SwitchToggle isOn={isUpdateOn} setIsOn={setIsUpdateOn} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "w-screen h-screen fixed z-10 top-0 safe-top bg-white transition-all px-4 duration-700",
          isOpenNotificationModal ? "translate-x-0" : "translate-x-[1500px]"
        )}
      >
        <div className="flex items-center justify-between w-full py-5 mt-2.5">
          <button onClick={handleCloseNotifications}>
            <BackSvg />
          </button>
          <h4 className="font-medium">Notifications</h4>
          <button onClick={() => setIsOpenSettings(true)}>
            <SettingsSvg />
          </button>
        </div>
        {userNotifications.length ? (
          <>
            <div className="flex flex-col py-2.5 gap-1.5">
              <h2 className="font-medium text-dark-blue">Today</h2>
              <div className="flex w-full justify-between border border-[#D2D2D2]/50 gap-1.5 flex-col rounded-[20px] p-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold">title</h4>
                  <ViewMoreSvg />
                </div>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua
                </p>
                <div className="flex gap-2.5">
                  <button className="rounded-[20px] py-2.5 px-6 bg-main-blue font-roboto text-sm text-white">
                    Accept
                  </button>
                  <button className="rounded-[20px] py-2.5 px-6 font-roboto text-sm border border-[#D2D2D2] text-[#CAC8C8]">
                    Deny
                  </button>
                </div>
                <p className="opacity-40 text-sm">Today at 2:20pm</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col text-center items-center gap-2.5 py-6">
            <NoNotificationsSvg />
            <h4 className="font-semibold text-xl">No notifications yet</h4>
            <p className="opacity-40 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua
            </p>
          </div>
        )}
      </div>
    </>
  );
}
