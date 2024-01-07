import Link from "next/link";

const Events = () => {
  const events = [
    {
      title: "TIỆC CƯỚI NHÀ TRAI",
      img: "/images/hungthuy/HIE_9858-min.jpg",
      hour: "Vào hồi 16 giờ 00 phút",
      date: "Thứ Sáu, ngày 12 tháng 01 năm 2024",
      lunarDate: "Tức ngày 02 tháng 12 năm Quý Mão",
      addressType: "Tư Gia Nhà Trai",
      address: "Thôn Nà Pái - Xã Tân Văn - Huyện Bình Gia - Tỉnh Lạng Sơn",
      mapHref: "",
    },
    {
      title: "TIỆC CƯỚI NHÀ GÁI",
      img: "/images/hungthuy/HIE_9737-bat+khung-min.jpg",
      hour: "Vào hồi 10 giờ 30 phút",
      date: "Thứ Sáu, ngày 12 tháng 01 năm 2024",
      lunarDate: "Tức ngày 02 tháng 12 năm Quý Mão",
      addressType: "Tư Gia Nhà Trai",
      address: "Khối phố Tòng Chu - Thị Trấn Bình Gia - Huyện Bình Gia - Tỉnh Lạng Sơn",
      mapHref: "",
    },
  ];
  return (
    <section className="w-full h-auto container mx-auto px-4">
      <h4 className="text-center font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider">Sự kiện cưới</h4>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-8">
        {events.map((event) => (
          <div
            className="p-4 flex flex-col items-center text-gray-700 bg-white shadow-md bg-clip-border border rounded-xl w-full md:w-96"
            key={event.img}
          >
            <h4 className="text-center text-xl">{event.title}</h4>
            <div>
              <img src="/images/effects/flower.50664b3379a36e68-1.png" alt="" />
            </div>
            <div className="mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
              <img src={event.img} alt="profile-picture" />
            </div>
            <div className="w-full py-6 text-center border-t mt-5 flex">
              <div className="w-11 flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="13" r="7" stroke="#222222" />
                  <path d="M5 5L3 7" stroke="#222222" stroke-linecap="round" />
                  <path d="M19 5L21 7" stroke="#222222" stroke-linecap="round" />
                  <path
                    d="M9 11L11.8093 12.8729C11.9172 12.9448 12.0622 12.9223 12.1432 12.821L14 10.5"
                    stroke="#222222"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="grow text-left">
                <p>{event.hour}</p>
                <p>{event.date}</p>
                <p className="text-sm">{event.lunarDate}</p>
              </div>
            </div>
            <div className="w-full flex justify-between border-t py-6 pt-2 gap-2">
              <div className="w-11 flex justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
                    stroke="#222222"
                  />
                  <path
                    d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
                    stroke="#222222"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="grow">
                <p>{event.addressType}</p>
                <p className="text-sm">{event.address}</p>
              </div>
            </div>
            <div className="mb-2">
              <Link
                href={event.mapHref}
                className="rounded-md bg-[#7a9c59] text-white text-sm flex items-center space-x-1 px-3 py-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.0163 10.119 17.0348 11.602 17.804C11.8548 17.9351 12.1452 17.9351 12.398 17.804ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M18.0622 16.5C18.6766 16.9561 19 17.4734 19 18C19 18.5266 18.6766 19.0439 18.0622 19.5C17.4478 19.9561 16.5641 20.3348 15.5 20.5981C14.4359 20.8614 13.2288 21 12 21C10.7712 21 9.56414 20.8614 8.5 20.5981C7.43587 20.3348 6.5522 19.9561 5.93782 19.5C5.32344 19.0439 5 18.5266 5 18C5 17.4734 5.32344 16.9561 5.93782 16.5"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <span>CHỈ ĐƯỜNG</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
