import React from "react";
import { MdOutlineWifiCalling3 } from "react-icons/md";

type CallButtonProps = {
  onClick: () => void;
};

const CallButton: React.FC<CallButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <MdOutlineWifiCalling3
        size={32}
        className="text-sky-500 cursor-pointer hover:text-sky-600 transition"
      />
    </button>
  );
};

export default CallButton;
