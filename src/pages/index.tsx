import { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

import { LocationModal } from "@components/LocationModal";
import { HostHeader } from "@components/HostHeader";
import { EventDate } from "@components/EventDate";

import flowerOne from "@assets/img/flowerOne.png";
import flowerThree from "@assets/img/flowerThree.png";

import "animate.css";
import { Footer } from "@components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <main
        className={`relative h-screen flex flex-col justify-center items-center gap-9 overflow-hidden ${inter.className}`}
      >
        <div className="absolute -top-10 -right-28">
          <Image src={flowerOne} className="" alt="imagen" />
        </div>

        <HostHeader />

        <EventDate />

        <Footer openModal={openModal} />

        <div className="absolute -bottom-24 -left-16">
          <Image src={flowerThree} className="" alt="imagen" />
        </div>
      </main>

      <LocationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
