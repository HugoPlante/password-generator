import { GeneratorOptions } from "../types/PasswordOptions";

export const DEFAULTPASSWORDOPTIONS: GeneratorOptions = {
  length: 8,
  includeNumbers: true,
  includeSymbols: true,
  includeUppercase: true,
  includeLowercase: true,
  excludeSimilarCharacters: false,
};
