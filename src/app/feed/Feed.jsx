"use client";

import PlusSvg from "../../../public/icons/plus.svg";
import { useState } from "react";
import { AddPostModal } from "@/common/modals/AddPostModal";
import FeedCard from "@/common/FeedCard";

export default function Feed() {
  const [isOpenAddPost, setIsOpenAddPost] = useState(false);

  return (
    <>
      <div className="flex flex-col px-4 overflow-y-auto w-full h-screen safe-top">
        <div className="flex items-start w-full py-2.5 mt-2.5">
          <h1 className="font-semibold text-3xl text-wrap text-dark-blue">
            Feed
          </h1>
        </div>
        <input
          className="w-full border-2 border-[#D2D2D2] rounded-[20px] mt-2.5 py-[18px] px-4 outline-none"
          placeholder="Search Feed"
        />
        <div className="flex flex-col w-full pb-20">
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
          <FeedCard
            profileImage={"/images/profile-image.jpeg"}
            profileName={"Name"}
            title={"title"}
          />{" "}
        </div>
        <button
          onClick={() => setIsOpenAddPost(true)}
          aria-label="Add Post"
          className="fixed bottom-24 w-14 h-14 flex items-center justify-center rounded-full text-white right-6 bg-main-blue"
        >
          <PlusSvg />
        </button>
      </div>
      <AddPostModal
        isOpenAddPost={isOpenAddPost}
        setIsOpenAddPost={setIsOpenAddPost}
      />
    </>
  );
}
