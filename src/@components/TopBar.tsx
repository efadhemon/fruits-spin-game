import Image from "next/image";
import React from "react";

const TopBar = () => {
  return (
    <div className="top_bar w-full flex items-center justify-between p-4">
      <div className="flex gap-2">
        <div>
          <Image
            alt="settings icon"
            src="/images/setting.png"
            width={45}
            height={45}
          />
        </div>
        <div>
          <div className="rounded-full">
            <Image
              alt="question icon"
              src="/images/question.png"
              width={45}
              height={45}
            />
          </div>
        </div>
        <div>
          <div className="rounded-full cursor-pointer overflow-hidden">
            <Image
              alt="profile icon"
              src="/images/profile.png"
              width={45}
              height={45}
            />
          </div>
        </div>
      </div>
      <button className="">
        <Image alt="btn" src="/images/exit.png" width={45} height={45} />
      </button>
    </div>
  );
};
export default TopBar;
