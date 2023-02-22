import { GeneratorOptions } from "../types/PasswordOptions";
import {
  lowerCaseAlphabet,
  upperCaseAlphabet,
  numbers,
  symbols,
  similarCharacters,
} from "../constants/Alphabets";

export const generatePassword = (options: GeneratorOptions): string => {
  const allPossibleCharacters = mergeAlphabets(options);
  const finalCharacters = shuffleString(shuffleString(allPossibleCharacters));

  return finalCharacters.slice(0, options.length);
};

function mergeAlphabets(options: GeneratorOptions) {
  let allPossibleCharacters = "";

  if (options.includeLowercase) allPossibleCharacters += lowerCaseAlphabet;
  if (options.includeUppercase) allPossibleCharacters += upperCaseAlphabet;
  if (options.includeNumbers) allPossibleCharacters += numbers;
  if (options.includeSymbols) allPossibleCharacters += symbols;

  return allPossibleCharacters;
}

function shuffleString(str: string) {
  return [...str].sort(() => Math.random() - 0.5).join("");
}
