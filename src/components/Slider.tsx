import React from "react";

interface SliderProps {
  onChangeCallback: (value: number) => void;
}

const Slider = ({ onChangeCallback }: SliderProps) => {
  const [value, setValue] = React.useState(16);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
    onChangeCallback(parseInt(e.target.value));
  };

  return (
    <div className="">
      <label htmlFor="customRange1" className="inline-block text-black">
        Length : {value}
      </label>
      <input
        type="range"
        className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-blue-700"
        id="customRange1"
        min={8}
        max={32}
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Slider;
