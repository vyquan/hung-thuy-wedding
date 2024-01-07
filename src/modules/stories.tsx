import Image from "next/image";

const Stories = () => {
  return (
    <section className="w-full h-auto container mx-auto py-16">
      <div className="flex flex-col justify-center items-center text-black">
        <h4 className="text-center font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider">Cô Dâu & Chú Rể</h4>
        <p className="text-center w-full lg:w-3/6 my-4">
          Hôn nhân không phải là nơi thuyền tình cập bến,mà là nơi hai người quyết định cùng giăng buồm vượt sóng ra
          khơi.
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center text-black px-4">
        <div className="md:w-1/2 text-right">
          <h3 className="font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider">Ngọc Hưng</h3>
          <p className="my-4">
            Anh chưa từng nghĩ mình có thể dành nhiều cảm xúc cho một người đến thế, rồi anh nhận ra điều đó khi gặp và
            yêu em. Yêu em và chung đôi bên cạnh em là cảm giác tuyệt vời nhất đối với anh. Em chính là nguồn động lực
            tích cực để anh luôn cố gắng cho tương lai hai đứa mình. Nhân sinh là vô thường. Không cầu sẽ ổn định, chỉ
            cầu được sống là chính mình, cùng em.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img src="/images/hungthuy/HIE_0401-min.jpg" alt="Ảnh chú rể" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-8 gap-8 items-center text-black px-4">
        <div className="w-full md:w-1/2">
          <img src="/images/hungthuy/HIE_0057-min.jpg" alt="Ảnh cô dâu" />
        </div>
        <div className="md:w-1/2 text-left">
          <h3 className="font-parfumerieScriptPro text-4xl md:text-6xl tracking-wider">Hoàng Thuỳ</h3>
          <p className="my-4">
            Có điều này chắc chắn anh chưa bao giờ nghĩ tới, đó là lúc chúng ta mới bắt đầu em đã biết mình sẽ về chung
            một nhà. Chưa bao giờ em cảm thấy mình được yêu, mình được thương và được trân trọng khi ở cạnh một người
            như thế! Ngày chung đôi là ngày em hạnh phúc nhất! Ở thời điểm phù hợp nhất, mặc lên người bộ váy cưới đẹp
            nhất, gả cho người đáng tin cậy nhất, người đó chỉ có thể… là anh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stories;
