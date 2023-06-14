import { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Inter } from "next/font/google";
import {
  MapPinIcon,
  HeartIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

import flowerOne from "@assets/img/flowerOne.png";
import flowerThree from "@assets/img/flowerThree.png";

import "animate.css";
import { LocationModal } from "@components/LocationModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [confirInvitation, setConfirInvitation] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClickConfirm = () => {
    if (!confirInvitation) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        },
      });
    }

    setConfirInvitation((c) => !c);
  };

  return (
    <>
      <main
        className={`relative h-screen flex flex-col justify-center items-center gap-8 overflow-hidden ${inter.className}`}
      >
        <div className="absolute -top-10 -right-28">
          <Image src={flowerOne} className="" alt="imagen" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm uppercase tracking-wider animate__animated animate__fadeInUp animate__delay-0">
            ! nos casamos ¡
          </p>
          <div className="flex flex-col items-center gap-2">
            <h3 className="couplesTitle tracking-wider animate__animated animate__fadeInUp animate__delay-1">
              mariana
            </h3>
            <h3 className="couplesTitle tracking-wider animate__animated animate__fadeInUp animate__delay-2">
              y
            </h3>
            <h3 className="couplesTitle tracking-wider animate__animated animate__fadeInUp animate__delay-3">
              ricardo
            </h3>
          </div>

          <div className="flex flex-col items-center gap-0 animate__animated animate__fadeInUp animate__delay-4">
            <h6 className="text-sm uppercase tracking-wider">
              tenemos el gusto de invitarte a
            </h6>

            <h6 className="text-sm uppercase tracking-wider">nuestra boda</h6>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-32 text-center eventDate border-[#9f615b] border-y-2 py-3 uppercase tracking-wider animate__animated animate__fadeInUp animate__delay-5">
            domingo
          </div>

          <div className="flex flex-col gap-3 animate__animated animate__fadeInUp animate__delay-6">
            <span className="eventDate tracking-wider uppercase">ago.</span>
            <h4 className="text-black text-4xl eventDate">22</h4>
            <span className="eventDate tracking-wider">2023</span>
          </div>

          <div className="w-32 text-center eventDate border-[#9f615b] border-y-2 py-3 uppercase tracking-wider animate__animated animate__fadeInUp animate__delay-7">
            9:00 p.m
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mb-20 z-50">
          <div className="flex flex-col items-center animate__animated animate__fadeInUp animate__delay-8">
            <p className="text-sm text-black uppercase font-[600]">
              parroquea ntra. sra. de la mercede
            </p>
            <p className="text-sm text-black uppercase font-[600]">
              perico - city
            </p>
          </div>

          <button
            className="w-fit flex items-center gap-2 text-[#8d514b] uppercase px-3 py-2 border border-[#8d514b] shadow text-sm rounded-md outline-none animate__animated animate__fadeInUp animate__delay-9"
            onClick={openModal}
          >
            <MapPinIcon className="text-[#8d514b] w-5 h-5" />
            como llegar
          </button>

          <div className="flex flex-col items-center animate__animated animate__fadeInUp animate__delay-10">
            <p className="text-sm text-black uppercase font-[600]">
              recepcion: aguante perico xd
            </p>
            <p className="text-sm text-black uppercase font-[600]">
              numero 310
            </p>
          </div>

          <button
            className="w-fit bg-[#8d514b] flex items-center gap-2 text-white uppercase px-3 py-2 shadow text-sm rounded-md outline-none animate__animated animate__fadeInUp animate__delay-11"
            onClick={handleClickConfirm}
          >
            {confirInvitation ? (
              <HeartIcon className="text-white w-5 h-5" />
            ) : (
              <HeartIconOutline className="text-white w-5 h-5" />
            )}

            {confirInvitation ? "confirmado" : "confirmar invitacion"}
          </button>
        </div>

        <div className="absolute -bottom-24 -left-16">
          <Image src={flowerThree} className="" alt="imagen" />
        </div>
      </main>

      <LocationModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
