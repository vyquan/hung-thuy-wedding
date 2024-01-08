import { linkTo } from "@/helpers/constants";

const Album = () => {
  const images = [
    "/images/hungthuy/HIE_0003=60x90-min.jpg",
    "/images/hungthuy/HIE_0041-bat-min.jpg",
    "/images/hungthuy/HIE_0057-min.jpg",
    "/images/hungthuy/HIE_0063-bat+khung-min.jpg",
    "/images/hungthuy/HIE_0137-min.jpg",
    "/images/hungthuy/HIE_0360-bat+khung-min.jpg",
    "/images/hungthuy/HIE_0399-min.jpg",
    "/images/hungthuy/HIE_0401-min.jpg",
    "/images/hungthuy/HIE_9737-bat+khung-min.jpg",
    "/images/hungthuy/HIE_9858-min.jpg",
    "/images/hungthuy/HIE_9889-min.jpg",
    "/images/hungthuy/HIE_9892-min.jpg",
    "/images/hungthuy/HIE_9935-bat-min.jpg",
    "/images/hungthuy/HIE_9982=60x90-min.jpg",
    // "/images/hungthuy/ht-banner-min.jpg",
  ];
  return (
    <section className="w-full h-auto container mx-auto text-black text-center py-8" id={linkTo.album}>
      <h4 className="font-imperialScript text-4xl md:text-5xl tracking-wider">Album Ảnh Cưới</h4>
      <p className="my-4">
        Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu ai đó sâu sắc sẽ cho bạn dũng khí.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 px-4 md:px-0">
        {images.map((img) => (
          <div key={img}>
            <img src={img} alt="Ảnh cưới" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Album;
