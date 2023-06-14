import React from "react";

export const EventDate = () => {
  return (
    <>
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
    </>
  );
};
