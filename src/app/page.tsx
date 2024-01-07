import Album from "@/modules/album";
import Banner from "@/modules/banner";
import Countdown from "@/modules/countdown";
import Events from "@/modules/events";
import Form from "@/modules/form";
import Map from "@/modules/map";
import QrCode from "@/modules/prcode";
import Stories from "@/modules/stories";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white overflow-x-hidden font-questrial text-black">
      <Banner />
      <Countdown />
      <Stories />
      <Events />
      {/* <Form /> */}
      <Album />
      {/* <Map /> */}
      {/* <QrCode /> */}
    </main>
  );
}
