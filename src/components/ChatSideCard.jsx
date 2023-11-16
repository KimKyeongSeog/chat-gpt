import { useState } from "react";
import { CgCloseR, CgVolume } from "react-icons/cg";

const ChatSideCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className="mb-2 truncate cursor-pointer hover:font-bold"
        onClick={onClickModal}
      >
        {question}
      </li>
      {isOpen && (
        <div className="fixed top-0 left-0 bg-gray-700 bg-opacity-70 w-full h-full z-10 text-black">
          <div className="bg-white fixed p-8 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibol shadow-2xl">
            <button onClick={onClickClose}>
              <CgCloseR />
            </button>
            <div><CgVolume />{question}</div>
            <div>{answer}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatSideCard;