import {
  getAlphabetLetters,
  getNumberDigits,
  getSymbols,
} from "../functions/string.functions";

type CharacterSet = {
  letters: string[];
  numbers: string[];
  symbols: string[];
};

/**
 * An object containing arrays of characters
 *
 * @property {string[]} letters - Array of letters in the alphabet
 * @property {string[]} numbers - Array of number digits
 * @property {string[]} symbols - Array of symbol characters
 */
export const characterSet: CharacterSet = {
  letters: getAlphabetLetters(),
  numbers: getNumberDigits(),
  symbols: getSymbols(),
};
