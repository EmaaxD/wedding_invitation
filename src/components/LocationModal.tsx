import { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

type LocationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyUp = (e: any) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
      nodeRef={modalRef}
    >
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div
          ref={modalRef}
          className="bg-white rounded-lg p-8 shadow-lg relative"
        >
          <h2 className="text-xl font-bold mb-4">Modal Title</h2>
          <p>Modal content goes here...</p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};
