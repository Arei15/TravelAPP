import clsx from "clsx";
import { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import CloseXSvg from "../../../public/icons/close.svg";
import { UploadFile } from "../UploadFile";

export function AddPostModal({ isOpenAddPost, setIsOpenAddPost }) {
  const [tagInput, setTagInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [textInput, setTextInput] = useState("");
  const [tagsValue, setTagsValue] = useState([]);
  const [isOpenTagsView, setIsOpenTagsView] = useState(true);
  const [postFileConfig, setPostFileConfig] = useState(null);
  const swipeAddPostRef = useRef(null);
  
  const handleSetTagsKeyDown = (e) => {
    if (tagInput.length && !tagsValue.includes(tagInput)) {
      if (e.key === "Enter") {
        setTagsValue([tagInput, ...tagsValue]);
        setTagInput("");
        setIsOpenTagsView(true);
      }
    }
  };

  const swipeable = useSwipeable({
    onSwiping: (eventData) => {
      if (eventData.dir === "Down" && swipeAddPostRef.current) {
        const newTranslateY = Math.max(eventData.absY, 0);

        swipeAddPostRef.current.style.transform = `translateY(${newTranslateY}px)`;
      }
    },
    onSwiped: (eventData) => {
      if (swipeAddPostRef.current) {
        if (eventData.absY > 80 && eventData.dir === "Down") {
          setIsOpenAddPost(false);
        }

        swipeAddPostRef.current.style.transform = `translateY(0px)`;
      }
    },
  });

  return (
    <>
      <div
        className={clsx(
          "h-screen z-10 transition-colors fixed top-0 duration-1000",
          isOpenAddPost ? "bg-black/65 w-screen" : "bg-transparent w-0"
        )}
      ></div>
      <div
        id="add-post"
        onClick={(e) => e.target.id === "add-post" && setIsOpenAddPost(false)}
        ref={swipeAddPostRef}
        className={clsx(
          "transition-all duration-1000 fixed flex z-20 top-0 w-full h-screen"
        )}
        style={{
          transform: `translateY(${!isOpenAddPost ? 4000 : 0}px)`,
        }}
      >
        <div className="rounded-t-[20px] bg-white w-screen mt-auto desktop:h-[90%] h-max pt-2.5 px-2.5 pb-7">
          <div className="flex items-center flex-col w-full h-full">
            <div
              {...swipeable}
              onDoubleClick={() => setIsOpenAddPost(false)}
              className="flex items-center flex-col w-full gap-2.5 cursor-pointer"
            >
              <span className="min-h-1 w-20 bg-[#D9D9D9]" />
              <h6 className="text-dark-blue font-medium">Add post</h6>
            </div>
            <div className="flex items-center flex-col w-full gap-2.5 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full">
              <input
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="Enter the title"
                className="border p-4 border-[#D2D2D2] rounded-[20px] w-full outline-none"
              />
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Enter the text"
                className="border p-4 border-[#D2D2D2] rounded-[20px] w-full max-h-[265px] desktop:min-h-[100px] min-h-[150px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] outline-none"
              ></textarea>
              {tagsValue.length && isOpenTagsView ? (
                <div
                  id="tag-view"
                  onClick={(e) => {
                    e.target.id === "tag-view" && setIsOpenTagsView(false);
                  }}
                  className="border border-[#D2D2D2] rounded-[20px] w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-2.5 flex items-center overflow-x-auto gap-2.5"
                >
                  {tagsValue.map((tag) => {
                    return (
                      <span
                        className="bg-main-blue/10 pl-3 text-sm py-2 rounded-[20px] flex gap-2.5 items-center"
                        key={tag}
                      >
                        <button
                          onClick={() => (
                            setTagInput(tag),
                            setIsOpenTagsView(false),
                            setTagsValue(
                              tagsValue.filter((tagValue) => tagValue !== tag)
                            )
                          )}
                          className="text-[14px] leading-[16px]"
                        >
                          {tag}
                        </button>
                        <button
                          onClick={() =>
                            setTagsValue(
                              tagsValue.filter((tagValue) => tagValue !== tag)
                            )
                          }
                          className="pr-2"
                        >
                          <CloseXSvg />
                        </button>
                      </span>
                    );
                  })}
                </div>
              ) : (
                <input
                  value={tagInput}
                  onBlur={() => setIsOpenTagsView(true)}
                  onKeyDown={handleSetTagsKeyDown}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="border border-[#D2D2D2] rounded-[20px] w-full p-4 outline-none"
                  placeholder="Enter the tags"
                />
              )}
              <UploadFile fileConfig={postFileConfig} setFileConfig={setPostFileConfig} />
            </div>
            <button className="w-full bg-main-blue rounded-[20px] font-roboto font-medium leading-[18px] text-white h-14">
              {postFileConfig && "Add "}Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
