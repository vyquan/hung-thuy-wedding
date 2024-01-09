import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Countdown = () => {
  const targetDate = new Date("2024-01-12T10:30:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdown = [
    {
      format: "Ngày",
      value: timeRemaining.days || 0,
    },
    {
      format: "Giờ",
      value: timeRemaining.hours || 0,
    },
    {
      format: "Phút",
      value: timeRemaining.minutes || 0,
    },
    {
      format: "Giây",
      value: timeRemaining.seconds || 0,
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
      fatherInLaw: "Hoàng Kim Kiều",
      motherInLaw: "Hoàng Thị Hường",
      address: "Thị Trấn Bình Gia, Bình Gia",
    },
  ];

  return (
    <section className="w-full h-auto py-16 bg-countdown bg-repeat">
      <div className="container mx-auto flex flex-col justify-center items-center text-black">
        <h4 className="font-imperialScript text-4xl md:text-5xl tracking-wider">Save The Date</h4>
        <div className="text-lg mt-2">For the wedding of</div>
        <h1 className="my-4 font-imperialScript text-4xl md:text-5xl tracking-wider text-red-love">
          Ngọc Hưng ❤️ Hoàng Thuỳ
        </h1>
        <p className="my-1">Thứ Sáu, Ngày 12 Tháng 01 Năm 2024</p>
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
        <div className="w-full flex flex-col justify-center gap-10 md:flex-row relative text-center mt-4">
          <div className="w-36 h-auto absolute md:top-0 left-1/2 -translate-x-1/2">
            <img src="/images/effects/love-countdown.png" alt="love" />
          </div>
          {info.map((item) => (
            <div key={item.type} className="w-full md:w-1/2">
              <div className="font-imperialScript text-3xl md:text-4xl tracking-wider">{item.type}</div>
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
