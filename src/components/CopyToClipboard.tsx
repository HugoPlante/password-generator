import React from "react";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

interface CopyToClipboardProps {
  copyCallback: () => void;
}

const CopyToClipboard = ({ copyCallback }: CopyToClipboardProps) => {
  return (
    <button
      type="button"
      onClick={copyCallback}
      className=" hover:drop-shadow-2xl hover:bg-gray-300 p-2"
      aria-label="copyToClipboard"
    >
      <ClipboardDocumentIcon className=" w-8" />
    </button>
  );
};

export default CopyToClipboard;
