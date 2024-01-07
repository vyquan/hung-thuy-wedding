"use client";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState<string | number>(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const inputDate = "12 Jan 2024";

  useEffect(() => {
    const intervalId = setInterval(() => {
      const changingDate: any = new Date(inputDate);
      const currentDate: any = new Date();
      const totalSeconds = (changingDate - currentDate) / 1000;
      setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
      setHours(Math.floor(totalSeconds / 3600) % 24);
      setMinutes(Math.floor(totalSeconds / 60) % 60);
      setSeconds(Math.floor(totalSeconds % 60));
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const countdown = [
    {
      format: "Ngày",
      value: days,
    },
    {
      format: "Giờ",
      value: hours,
    },
    {
      format: "Phút",
      value: minutes,
    },
    {
      format: "Giây",
      value: seconds,
    },
  ];

  const info = [
    {
      type: "Nhà Trai",
      name: "Hoàng Ngọc Hưng",
      fatherInLaw: "Hoàng Văn Trường",
      motherInLaw: "Mông Thị Nga",
      address: "Tân Văn, Bình Gia",
    },
    {
      type: "Nhà Gái",
      name: "Hoàng Thị Thuỳ",
      fatherInLaw: "Hoàng Văn A",
      motherInLaw: "....",
      address: "Thị Trấn Bình Gia, Bình Gia",
    },
  ];

  return (
    <section className="w-full h-auto py-16 bg-countdown bg-no-repeat">
      <div className="container mx-auto flex flex-col justify-center items-center text-black">
        <h4 className="font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider">Save The Date</h4>
        <div className="text-lg mt-2">For the wedding of</div>
        <h1 className="my-4 font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider text-red-love">
          Ngọc Hưng ❤️ Hoàng Thuỳ
        </h1>
        <p className="my-1">Thứ Sáu, Ngày 12 Tháng 1 Năm 2024</p>
        <div className="flex item-center my-4 space-x-4">
          {countdown.map((time) => (
            <div
              key={time.format}
              className="min-w-16 sm:min-w-28 px-2 py-2 rounded-md flex flex-col items-center bg-red-love text-white"
            >
              <span className="font-semibold text-2xl">{time.value}</span>
              <span className="text-[10px] uppercase font-thin">{time.format}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col justify-center gap-10 md:flex-row relative text-center">
          <div className="w-28 h-auto absolute md:top-0 left-1/2 -translate-x-1/2">
            <img className="" src="/images/effects/love-countdown.png" alt="love" />
          </div>
          {info.map((item) => (
            <div key={item.type} className="w-full md:w-1/2">
              <div className="font-parfumerieScriptPro text-3xl md:text-4xl tracking-wider">{item.type}</div>
              <div>
                <strong>{item.type === "Nhà Trai" ? "Chú Rể" : "Cô Dâu"}: </strong>
                <span>{item.name}</span>
              </div>
              <div>
                <strong>Ông: </strong>
                <span>{item.fatherInLaw}</span>
              </div>
              <div>
                <strong>Bà: </strong>
                <span>{item.motherInLaw}</span>
              </div>
              <div>
                <strong>Địa chỉ: </strong>
                <span>{item.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
