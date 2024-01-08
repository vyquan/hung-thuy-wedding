import { mapAddress } from "@/helpers/constants";
import Link from "next/link";

const Map = () => {
  return (
    <section className="w-full h-auto bg-flower bg-no-repeat bg-center bg-cover">
      <div className="backdrop-blur-sm py-20">
        <div className="container mx-auto text-white px-4">
          <h4 className="font-imperialScript text-4xl md:text-6xl tracking-wider">Di chuyển</h4>
          <p className="my-2 text-lg">
            ❤️ Quý khách vui lòng liên hệ với Ngọc Hưng & Hoàng Thuỳ để được hướng dẫn, hỗ trợ di chuyển nhé.
          </p>
          <p className="my-2 text-lg">❤️ Gia đình chúng tôi rất mong sự hiện diện của Quý khách!</p>
          <div className="flex space-x-4 mt-8">
            <Link
              className="w-48 group py-1 px-4 border border-white rounded-md bg-transparent flex justify-center space-x-1 items-center hover:bg-white text-white hover:text-black"
              href={mapAddress.hung}
              target="_blank"
            >
              <span>TỚI NHÀ TRAI</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.0163 10.119 17.0348 11.602 17.804C11.8548 17.9351 12.1452 17.9351 12.398 17.804ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  fill="#ffffff"
                  className="group-hover:fill-black"
                />
                <path
                  d="M18.0622 16.5C18.6766 16.9561 19 17.4734 19 18C19 18.5266 18.6766 19.0439 18.0622 19.5C17.4478 19.9561 16.5641 20.3348 15.5 20.5981C14.4359 20.8614 13.2288 21 12 21C10.7712 21 9.56414 20.8614 8.5 20.5981C7.43587 20.3348 6.5522 19.9561 5.93782 19.5C5.32344 19.0439 5 18.5266 5 18C5 17.4734 5.32344 16.9561 5.93782 16.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  className="group-hover:fill-black"
                />
              </svg>
            </Link>
            <Link
              className="w-48 group py-1 px-4 border border-white rounded-md bg-transparent flex justify-center space-x-1 items-center hover:bg-white text-white hover:text-black"
              href={mapAddress.thuy}
              target="_blank"
            >
              <span>TỚI CƯỚI NHÀ GÁI</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.398 17.804C13.881 17.0348 19 14.0163 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 14.0163 10.119 17.0348 11.602 17.804C11.8548 17.9351 12.1452 17.9351 12.398 17.804ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  fill="#ffffff"
                  className="group-hover:fill-black"
                />
                <path
                  d="M18.0622 16.5C18.6766 16.9561 19 17.4734 19 18C19 18.5266 18.6766 19.0439 18.0622 19.5C17.4478 19.9561 16.5641 20.3348 15.5 20.5981C14.4359 20.8614 13.2288 21 12 21C10.7712 21 9.56414 20.8614 8.5 20.5981C7.43587 20.3348 6.5522 19.9561 5.93782 19.5C5.32344 19.0439 5 18.5266 5 18C5 17.4734 5.32344 16.9561 5.93782 16.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  className="group-hover:fill-black"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
