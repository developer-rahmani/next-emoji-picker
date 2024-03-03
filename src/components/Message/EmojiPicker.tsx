"use client";

// !! Hooks
import React, { useEffect, useRef, useState } from "react";

// !! Components
import EmojiContainer from "./EmojiContainer";
import { EmojiIcon, SendIcon } from "../Icons";

const EmojiPicker = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [text, setText] = useState<string>("");
  const [isShowEmoji, setIsShowEmoji] = useState(false);

  const handleOutsiteClick = () => {
    setIsShowEmoji(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsiteClick);

    return () => {
      window.removeEventListener("click", handleOutsiteClick);
    };
  }, []);

  return (
    <div className="flex justify-center relative w-[500px] max-w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log({ text });
        }}
        className="w-full h-[48px] rounded-[8px] px-[8px] text-md bg-gray-800 text-gray-100 flex items-center gap-4"
      >
        <input
          ref={inputRef}
          className="bg-transparent w-full h-full flex-1"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">
          <SendIcon />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();

            setIsShowEmoji(prevState=>!prevState);
          }}
        >
          <EmojiIcon />
        </button>
      </form>

      <EmojiContainer
        isShowEmoji={isShowEmoji}
        input={inputRef.current}
        text={text}
        setText={(newText) => setText(newText)}
      />
    </div>
  );
};

export default EmojiPicker;
