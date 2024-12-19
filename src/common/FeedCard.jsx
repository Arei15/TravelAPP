import ShareSvg from "../../public/icons/share.svg";
import BookmarkSvg from "../../public/icons/bookmark.svg";
import Image from "next/image";

export default function FeedCard({
  profileName,
  profileImage,
  title,
  paragraph,
  image,
  tags,
  createdAt,
}) {
  return (
    <section className="border-[#D2D2D2]/50 rounded-[20px] border p-4 flex flex-col mx-auto mt-2.5 gap-1.5 mobile-md:w-full w-[343px] min-h-[547px]">
      <div className="flex w-full justify-between">
        <div className="flex gap-2.5">
          <div>
            <Image
              src={profileImage}
              width={40}
              height={40}
              alt="Profile image"
              className="object-cover rounded-full w-10 h-10"
              priority
            />
          </div>
          <div>
            <h5>{profileName}</h5>
            <h6 className="text-xs opacity-40">2 hours ago</h6>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <BookmarkSvg className="w-[22px] h-6 [&_path]:stroke-[#848282]" />
        </div>
      </div>
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-sm break-words">
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
        tempor incidunt ut labore et dolore magna{" "}
      </p>
      <Image
        src={profileImage}
        width={313}
        height={313}
        priority
        alt="Feed"
        className="w-full mx-auto h-[313px] object-cover rounded-[20px]"
      />
      <p className="text-sm text-main-blue break-words">
        #text, #text, #text, #text
      </p>
      <span className="flex mt-1 items-center justify-between">
        <p className="text-sm opacity-40">Today at 2:20pm</p>
        <button>
          <ShareSvg className="w-[15px] h-[19px]" />
        </button>
      </span>
    </section>
  );
}
