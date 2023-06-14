import { useState } from "react";
import confetti from "canvas-confetti";
import {
  MapPinIcon,
  HeartIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

type FooterProps = {
  openModal: () => void;
};

export const Footer: React.FC<FooterProps> = ({ openModal }) => {
  const [confirInvitation, setConfirInvitation] = useState<boolean>(false);

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
      <div className="flex flex-col items-center gap-5 mb-20 z-50">
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
          <p className="text-sm text-black uppercase font-[600]">numero 310</p>
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
    </>
  );
};
