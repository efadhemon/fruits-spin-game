import Image from "next/image";
import React, { useEffect, useState } from "react";

const WheelSpinner = () => {
  // const [isSpin, setSpin] = useState(false);
  const [counter, setCounter] = useState(20);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setTimeout(async () => {
    if (counter === 0) {
      await sleep(6000);
    }
    setCounter(counter === 0 ? 20 : counter - 1);
  }, 1000);

  useEffect(() => {
    async function runWheel() {
      const wheel: any = document.getElementById("wheel");
      let spinValue = -16;
      if (counter !== 0) {
        wheel.style.transition = "none";
        wheel.style.transform = `rotate(${spinValue}deg)`;

        await sleep(8000);
        return;
      } else {
        spinValue = Math.floor(Math.floor((Math.random() * 36000) / 60) * 60);
        wheel.style.transition = "all 5s ease-in-out";
        wheel.style.transform = `rotate(${spinValue - 16}deg)`;
        console.log((spinValue / 60) % 3);

        await sleep(6000);
        return win(spinValue);
      }
    }
    runWheel();
  }, [counter]);

  const win = (value: number) => {
    if ((value / 60) % 3 === 0) return alert("apple win");
    if ((value / 60) % 3 === 1) return alert("Watermelon win");
    if ((value / 60) % 3 === 2) return alert("lemon win");
  };

  return (
    <>
      <div className="wheel_spinner_main">
        <div className="wheel_wrapper">
          <div className="wheel_img">
            <Image
              className="mx-auto"
              alt="wheel"
              src="/images/wheel.png"
              width={220}
              height={220}
            />
          </div>
          <div className="spinner_wheel" id="wheel">
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="apple"
                  src="/images/apple.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="lemon"
                  src="/images/lemon.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="watermelon"
                  id="watermelon"
                  src="/images/watermelon.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="apple"
                  id="apple"
                  src="/images/apple.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="lemon"
                  id="lemon"
                  src="/images/lemon.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
            <div className="fruit_box">
              <div className="fruit_box_holder">
                <img
                  alt="watermelon"
                  src="/images/watermelon.png"
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="counter mt-8">
        <div className="w-20 mx-auto text-center bg-[#2c2c2c] rounded-2xl  text-white">
          {counter}
        </div>
      </div>
    </>
  );
};
export default WheelSpinner;
