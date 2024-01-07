import Image from "next/image";

const QrCode = () => {
  const bankInfo = [
    {
      type: "CHÚ RỂ",
      name: "Hoàng Ngọc Hưng",
      avatarUrl: "",
      bankCode: "",
      bankName: "",
    },
    {
      type: "CÔ DÂU",
      name: "Hoàng Thị Thuỳ",
      avatarUrl: "",
      bankCode: "",
      bankName: "",
    },
  ];
  return (
    <section className="w-full h-auto container mx-auto py-8">
      {bankInfo.map((info) => (
        <div key={info.type}>
          <div>
            <img src={info.avatarUrl} alt={info.type} />
          </div>
          <div>
            <div>CHÚ RỂ</div>
            <div>– Tên tài khoản: {info.bankName}</div>
            <div>– STK: {info.bankCode}</div>
            <div>-{info.bankName}</div>
          </div>
        </div>
      ))}
      <div className="text-center flex flex-col gap-4 font-dancingScript">
        <h4 className="text-4xl md:text-6xl">Happy Ending</h4>
        <p className="text-2xl">Thanh you!</p>
      </div>
    </section>
  );
};

export default QrCode;
