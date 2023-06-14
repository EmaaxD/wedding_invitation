import React from "react";

export const HostHeader = () => {
  return (
    <>
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
          <h6 className="text-sm uppercase tracking-wider eventDate">
            tenemos el gusto de invitarte a
          </h6>

          <h6 className="text-sm uppercase tracking-wider eventDate">
            nuestra boda
          </h6>
        </div>
      </div>
    </>
  );
};
