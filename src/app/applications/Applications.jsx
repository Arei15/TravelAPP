"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import BackSvg from "../../../public/icons/back.svg";
import CheckSvg from "../../../public/icons/check.svg";
import BinancePng from "../../../public/images/binance.png";
import PinterestPng from "../../../public/images/pinterest.png";
import { useLocalStorage } from "react-use";
import Link from "next/link";
import Image from "next/image";

const appLogos = [{ Binance: BinancePng, Pinterest: PinterestPng }];

export default function Applications() {
  const [isOpenAddApp, setIsOpenAddApp] = useState(false);
  const [isOpenChooseApps, setIsOpenChooseApps] = useState(false);
  const [chooseAppValue, setChooseAppValue] = useState("");
  const [appsInLocalStorage, setAppsInLocalStorage] = useLocalStorage(
    "apps-links",
    []
  );
  const [chooseLinkCompany, setChooseLinkCompany] = useState("");
  const swipeAddApp = useRef(null);
  const swipeChooseApp = useRef(null);

  const swipeableAddApp = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Down" && swipeAddApp.current) {
        const newTranslateY = Math.max(eventData.absY, 0);

        swipeAddApp.current.style.transform = `translateY(${newTranslateY}px)`;
      }
    },
    onSwiped: (eventData) => {
      if (swipeAddApp.current) {
        if (eventData.absY > 80 && eventData.dir === "Down") {
          setChooseLinkCompany("");
          setChooseAppValue("");
          setIsOpenAddApp(false);
        }

        swipeAddApp.current.style.transform = `translateY(0px)`;
      }
    },
  });

  const swipeableChooseApps = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Down" && swipeChooseApp.current) {
        const newTranslateY = Math.max(eventData.absY, 0);

        swipeChooseApp.current.style.transform = `translateY(${newTranslateY}px)`;
      }
    },
    onSwiped: (eventData) => {
      if (swipeChooseApp.current) {
        if (eventData.absY > 80 && eventData.dir === "Down") {
          setChooseLinkCompany("");
          setChooseAppValue("");
          setIsOpenChooseApps(false);
        }

        swipeChooseApp.current.style.transform = `translateY(0px)`;
      }
    },
  });

  return (
    <>
      <div className="w-screen h-screen safe-top px-4 flex items-center flex-col fixed overflow-hidden">
        <div className="pb-2.5 flex flex-col w-full items-start gap-6 pt-5">
          <h1 className="text-dark-blue font-semibold text-3xl">APPS</h1>
          <div className="grid grid-cols-6 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-2.5 mr-auto">
            {appsInLocalStorage.length !== 0 &&
              appsInLocalStorage.map((appsLinks) => {
                const logo = appLogos.find(
                  (appLogo) => appLogo[appsLinks.name]
                );

                return (
                  <button key={appsLinks.name}>
                    <Image
                      className="rounded-lg"
                      src={logo[appsLinks.name].src}
                      width={49}
                      height={49}
                      alt={appsLinks.name}
                    />
                  </button>
                );
              })}
            <button
              onClick={() => setIsOpenAddApp(true)}
              className="w-12 h-12 border border-[#D2D2D2] flex items-center text-[#848282] font-extralight text-[30px] justify-center rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        {!appsInLocalStorage.length && (
          <div className="w-full mt-24 text-center items-center justify-center flex flex-col gap-2.5">
            <h4 className="text-xl font-semibold">No apps yet</h4>
            <span className="opacity-40 text-sm w-80">
              You haven&apos;t added any apps yet. Add your first app to get
              started!
            </span>
          </div>
        )}
      </div>
      <div
        className={clsx(
          "z-10 transition-colors fixed top-0 duration-1000",
          isOpenAddApp
            ? "bg-black/65 w-screen h-screen"
            : "bg-transparent w-0 h-0"
        )}
      ></div>
      <div
        id="add-app"
        onClick={(e) =>
          e.target.id === "add-app" &&
          (setIsOpenAddApp(false),
          setChooseLinkCompany(""),
          setChooseAppValue(""))
        }
        ref={swipeAddApp}
        className={clsx(
          "transition-all duration-1000 fixed flex z-20 top-0 w-full h-screen"
        )}
        style={{
          transform: `translateY(${!isOpenAddApp ? 4000 : 0}px)`,
        }}
      >
        <div className="rounded-t-[20px] bg-white w-screen mt-auto h-max pt-2.5 px-2.5 pb-7">
          <div className="flex items-center flex-col w-full h-full">
            <div
              {...swipeableAddApp}
              onDoubleClick={() => (
                setIsOpenAddApp(false),
                setChooseLinkCompany(""),
                setChooseAppValue("")
              )}
              className="flex items-center flex-col w-full gap-2.5 cursor-pointer"
            >
              <span className="h-[3px] w-20 bg-[#D9D9D9]" />
              <h6 className="text-dark-blue font-medium">Add App</h6>
            </div>
            <div className="flex flex-col gap-2.5 w-full mt-2.5">
              <h6 className="text-sm font-semibold">Name App</h6>
              <button
                onClick={() => setIsOpenChooseApps(true)}
                className="rounded-[20px] p-4 border border-[#D2D2D2] w-full flex justify-between items-center"
              >
                <span>{chooseAppValue.length ? chooseAppValue : "Any"}</span>
                <span>
                  <BackSvg className="rotate-180" />
                </span>
              </button>
              <h6 className="text-sm font-semibold">Link company</h6>
              <input
                value={chooseLinkCompany}
                onChange={(e) => setChooseLinkCompany(e.target.value)}
                className="border border-[#D2D2D2] p-4 rounded-[20px] text-[#848282] outline-none"
                placeholder="Text"
              />
              <button
                onClick={() => {
                  if (chooseAppValue.length && chooseLinkCompany.length) {
                    const isUnique = appsInLocalStorage.some(
                      (appsLinks) =>
                        appsLinks.name === chooseAppValue ||
                        appsLinks.link === chooseLinkCompany
                    );
                    if (!isUnique) {
                      setIsOpenAddApp(false);
                      setChooseAppValue("");
                      setChooseLinkCompany("");
                      setAppsInLocalStorage([
                        ...appsInLocalStorage,
                        { name: chooseAppValue, link: chooseLinkCompany },
                      ]);
                    }
                  }
                }}
                className="bg-main-blue text-white text-center font-medium rounded-[20px] p-4 w-full"
              >
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="choose-app"
        onClick={(e) =>
          e.target.id === "choose-app" &&
          (setChooseAppValue(""),
          setIsOpenChooseApps(false),
          setChooseLinkCompany(""))
        }
        ref={swipeChooseApp}
        className={clsx(
          "transition-all duration-1000 fixed flex z-30 top-0 w-full h-screen"
        )}
        style={{
          transform: `translateY(${!isOpenChooseApps ? 4000 : 0}px)`,
        }}
      >
        <div className="rounded-t-[20px] bg-white w-screen mt-auto h-[90%] pt-2.5 px-2.5 pb-7">
          <div className="flex items-center flex-col w-full h-full">
            <div
              {...swipeableChooseApps}
              onDoubleClick={() => (
                setChooseAppValue(""),
                setIsOpenChooseApps(false),
                setChooseLinkCompany("")
              )}
              className="flex items-center flex-col w-full gap-2.5 cursor-pointer"
            >
              <span className="h-[3px] w-20 bg-[#D9D9D9]" />
              <h6 className="text-dark-blue font-medium">Apps</h6>
            </div>
            <div className="flex flex-col overflow-y-auto w-full h-full">
              {["Binance", "Pinterest"].map((app) => {
                return (
                  <button
                    key={app}
                    onClick={() => setChooseAppValue(app)}
                    className=" flex items-center justify-between p-4 border-b border-[#D9D9D9]"
                  >
                    {app}
                    <span
                      className={clsx(
                        "w-5 h-5 border-2 rounded-full flex items-center transition-all duration-300 justify-center",
                        app === chooseAppValue
                          ? "border-main-blue bg-main-blue"
                          : "border-[#CAC8C8]"
                      )}
                    >
                      {app === chooseAppValue && <CheckSvg />}
                    </span>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setIsOpenChooseApps(false)}
              className="bg-main-blue text-white w-full p-4 rounded-[20px] font-medium"
            >
              Choose
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
