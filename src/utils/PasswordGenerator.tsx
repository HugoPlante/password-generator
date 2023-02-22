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

  let password = "";
  for (let i = 0; i < options.length; i++) {
    password += allPossibleCharacters.charAt(
      Math.floor(Math.random() * allPossibleCharacters.length)
    );
  }

  return password;
};

function mergeAlphabets(options: GeneratorOptions) {
  let allPossibleCharacters = "";

  if (options.includeLowercase) allPossibleCharacters += lowerCaseAlphabet;
  if (options.includeUppercase) allPossibleCharacters += upperCaseAlphabet;
  if (options.includeNumbers) allPossibleCharacters += numbers;
  if (options.includeSymbols) allPossibleCharacters += symbols;
  if (options.excludeSimilarCharacters)
    allPossibleCharacters = removeSimilarCharacters(allPossibleCharacters);

  return allPossibleCharacters;
}

function removeSimilarCharacters(str: string) {
  return str.replace(new RegExp("[" + similarCharacters + "]", "g"), "");
}
