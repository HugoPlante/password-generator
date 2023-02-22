import React from "react";
import PropTypes from "prop-types";
import { GeneratorOptions } from "../types/PasswordOptions";
import Toggle from "./Toggle";
import Slider from "./Slider";

export type PasswordOptionsProps = {
  options: GeneratorOptions;
  setLengthCallback: (value: number) => void;
  setOptionsCallback: (options: GeneratorOptions) => void;
};

const PasswordOptions = ({
  options,
  setLengthCallback,
  setOptionsCallback,
}: PasswordOptionsProps) => {
  return (
    
    </div>
  );
};

export default PasswordOptions;
