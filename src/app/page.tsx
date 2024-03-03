// !! Components
import EmojiPicker from "@/components/Message/EmojiPicker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emoji picker",
};

export default function Home() {
  return (
    <div className="w-full h-full flex items-end py-4 justify-center px-4">
      <EmojiPicker />
    </div>
  );
}
