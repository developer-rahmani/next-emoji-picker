"use client";

// !! Types
import { EmojiContainerTypes } from "./index.types";

// !! Hooks
import React, { useEffect, useRef, useState } from "react";

// !! Components
import {
  AnimalIcon,
  BallIcon,
  CalcIcon,
  CarIcon,
  FlagIcon,
  FruitIcon,
  LampIcon,
  SmileIcon,
} from "@/components/Icons";
import emoji from "@/db/emojies.json";
import SimpleBar from "simplebar-react";

// !! Styles
import "simplebar-react/dist/simplebar.min.css";

const EmojiContainer = ({ input, text, setText , isShowEmoji }: EmojiContainerTypes) => {
  const [tab, setTab] = useState("people");
  const [tabIndex, setTabIndex] = useState(0)

  const tabs = [
    {
      value: "people",
      label: <SmileIcon />,
    },
    {
      value: "animal",
      label: <AnimalIcon />,
    },
    {
      value: "food",
      label: <FruitIcon />,
    },
    {
      value: "activity",
      label: <BallIcon />,
    },
    {
      value: "travel",
      label: <CarIcon />,
    },
    {
      value: "object",
      label: <LampIcon />,
    },
    {
      value: "symbol",
      label: <CalcIcon />,
    },
    {
      value: "flag",
      label: <FlagIcon />,
    },
  ];

  return (
    <>
      <div
      className={`flex flex-col w-full bg-secondary-dark-0 rounded-4 py-8px absolute transition-[bottom,opacity] ease-linear duration-200 will-change-[bottom,opacity] ${isShowEmoji ? "bottom-[60px] opacity-1" : "bottom-[48px] opacity-0"}  right-0 bg-gray-800 rounded-[8px] py-4`}
> 
        <div className="w-full grid grid-cols-8 relative">
          {tabs.map((item, index) => (
            <span
              key={item.value}
              onClick={(e) => {
                e.stopPropagation();

                setTabIndex(index)
                setTab(item.value);
              }}
              className={`w-full flex justify-center items-center pb-4 border-b ${tab === item.value ? "border-gray-400" : "border-transparent"}`}
            >
              {item.label}
            </span>
          ))}
        </div>

        <div className="h-[350px] w-full flex flex-col overflow-hidden">
          <SimpleBar className="h-full">
            <div
              className="w-full grid grid-cols-8 gap-y-4 mt-4"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {Object.entries(emoji.emojies).map((item) => {
                const [key, value] = item;
                if (key === tab) {
                  return value.map((emoji) => (
                    <span
                      key={emoji}
                      className="flex items-center justify-center text-3xl w-full text-center cursor-pointer select-none"
                      onClick={() => {
                        const cursor: number | undefined | null =
                          input?.selectionStart;

                        if (cursor?.toString.length) {
                          const newText =
                            text.slice(0, cursor) + emoji + text.slice(cursor);
                          setText(newText);

                          setTimeout(
                            () => input?.setSelectionRange(cursor, cursor + 1),
                            10
                          );
                        }
                      }}
                    >
                      {emoji}
                    </span>
                  ));
                }
              })}
            </div>
          </SimpleBar>
        </div>
      </div>
    </>
  );
};

export default EmojiContainer;
