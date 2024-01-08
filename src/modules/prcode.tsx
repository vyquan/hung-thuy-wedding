import Image from "next/image";

const QrCode = () => {
  const bankInfo = [
    {
      type: "CHÚ RỂ",
      name: "Hoàng Ngọc Hưng",
      avatarUrl: "/images/hungthuy/qrcode-hung.jpeg",
      bankCode: "1290607453",
      bankName: "BIDV",
    },
    {
      type: "img",
      avatarUrl: "/images/effects/hungthuy-qr.png",
    },
    {
      type: "CÔ DÂU",
      name: "Hoàng Thị Thuỳ",
      avatarUrl: "/images/hungthuy/qrcode-thuy.jpeg",
      bankCode: "8410205026321",
      bankName: "Agribank",
    },
  ];
  return (
    <section className="w-full h-auto container mx-auto py-8">
      <div className="text-center flex flex-col items-center">
        <h4 className="text-center font-imperialScript text-4xl md:text-5xl tracking-wider">
          Gửi lời chúc đến Cô Dâu & Chú Rể
        </h4>
        <p className="text-center w-full lg:w-3/6 my-4">Sự hiện diện của bạn là niềm vinh hạnh của chúng tôi!</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
        {bankInfo.map((info) => (
          <div key={info.type}>
            {info.type === "img" ? (
              <div>
                <img className="w-80 h-80" src={info.avatarUrl} alt="Ảnh Hưng Thuỳ" />
              </div>
            ) : (
              <div>
                <div>
                  <img className="w-40 h-40" src={info.avatarUrl} alt={info.type} />
                </div>
                <div className="mt-4">
                  <div>{info.type}</div>
                  <div>{info.name}</div>
                  <div>STK: {info.bankCode}</div>
                  <div>{info.bankName}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center flex flex-col gap-4 font-dancingScript my-8">
        <h4 className="text-4xl md:text-5xl">Happy Ending</h4>
        <p className="text-2xl">Thanh you!</p>
      </div>
    </section>
  );
};

export default QrCode;
