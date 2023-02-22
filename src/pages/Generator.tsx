import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { DEFAULTPASSWORDOPTIONS } from "../constants/DefaultPassowordOptions";
import { generatePassword } from "../utils/PasswordGenerator";
import CopyToClipboard from "../components/CopyToClipboard";
import Slider from "../components/Slider";
import Toggle from "../components/Toggle";

const Generator = () => {
  const [password, setPassword] = React.useState("");

  const [length, setLength] = React.useState(DEFAULTPASSWORDOPTIONS.length);
  const [includeLowercase, setIncludeLowercase] = React.useState(
    DEFAULTPASSWORDOPTIONS.includeLowercase
  );
  const [includeUppercase, setIncludeUppercase] = React.useState(
    DEFAULTPASSWORDOPTIONS.includeUppercase
  );
  const [includeNumbers, setIncludeNumbers] = React.useState(
    DEFAULTPASSWORDOPTIONS.includeNumbers
  );
  const [includeSymbols, setIncludeSymbols] = React.useState(
    DEFAULTPASSWORDOPTIONS.includeSymbols
  );
  const [excludeSimilarCharacters, setExcludeSimilarCharacters] =
    React.useState(DEFAULTPASSWORDOPTIONS.excludeSimilarCharacters);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Copied to clipboard !", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const generatedPassword = () => {
    setPassword(
      generatePassword({
        includeLowercase,
        length,
        includeNumbers,
        includeSymbols,
        includeUppercase,
        excludeSimilarCharacters,
      })
    );
  };

  return (
    <div className="flex flex-col bg-slate-200 rounded text-black p-12">
      <h1 className="mb-8">Password Generator</h1>
      <div className="flex flex-row w-full justify-start mb-6">
        <input
          placeholder="Your password will be here"
          value={password}
          readOnly
          className=" text-white rounded p-2 grow mr-2 self-center"
        ></input>
        <CopyToClipboard copyCallback={copyToClipboard} />
      </div>

      <div>
        <h2 className="font-bold text-xl pb-4">Options</h2>
        <div className="flex flex-col sm:flex-col justify-start items-start space-y-4 pb-8">
          <Toggle
            checked={includeLowercase}
            text={"Include lowercase"}
            onChangeCallback={setIncludeLowercase}
          ></Toggle>
          <Toggle
            checked={includeUppercase}
            text={"Include uppercase"}
            onChangeCallback={setIncludeUppercase}
          ></Toggle>
          <Toggle
            checked={includeNumbers}
            text={"Include numbers"}
            onChangeCallback={setIncludeNumbers}
          ></Toggle>
          <Toggle
            checked={includeSymbols}
            text={"Include symbols"}
            onChangeCallback={setIncludeSymbols}
          ></Toggle>
          <Toggle
            checked={excludeSimilarCharacters}
            text={"Exclude similar characters"}
            onChangeCallback={setExcludeSimilarCharacters}
          ></Toggle>
          <Slider onChangeCallback={setLength} />
        </div>

        <button
          type="button"
          className="bg-blue-700 text-white"
          onClick={generatedPassword}
        >
          Generate password
        </button>
      </div>
    </div>
  );
};

export default Generator;
