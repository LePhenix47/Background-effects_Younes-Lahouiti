import { createCanvasGradient } from "../../functions/canvas.functions";
import { getRandomNumber } from "../../functions/number.functions";
import { getCharacterSets } from "../../functions/string.functions";

export class Symbol {
  /**
   * Object containing all the letters, numbers and symbols.
   * @type {{ letters: string; numbers: string; symbols: string }}
   */
  private characterSets: {
    letters: string[];
    numberDigits: string[];
    symbols: string[];
  };
  height: number;
  fontSize: number;
  x: number;
  y: number;
  text: string;
  context: CanvasRenderingContext2D;
  width: number;

  /**
   * Creates a new Symbol instance.
   * @param {CanvasRenderingContext2D} context - The context of the canvas
   * @param {number} x - The x-coordinate of the symbol.
   * @param {number} y - The y-coordinate of the symbol.
   * @param {number} fontSize - The font size of the symbol.
   * @param {number} width - The width of the canvas.
   * @param {number} height - The height of the canvas.
   */
  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    x: number,
    y: number,
    fontSize: number
  ) {
    this.context = context;
    /**
     * The x-coordinate of the symbol.
     * @type {number}
     */
    this.x = x;

    /**
     * The y-coordinate of the symbol.
     * @type {number}
     */
    this.y = y;

    /**
     * The font size of the symbol.
     * @type {number}
     */
    this.fontSize = fontSize;

    /**
     * The text content of the symbol.
     * @type {string}
     * @default ""
     */
    this.text = "";

    /**
     * The width of the canvas.
     * @type {number}
     */
    this.width = width;

    /**
     * The height of the canvas.
     * @type {number}
     */
    this.height = height;

    /**
     * The character sets used for generating random text.
     * @type {{ letters: string[]; numbers: string[]; symbols: string[] }}
     * @property {string[]} letters - The array of alphabet letters.
     * @property {string[]} numbers - The array of numerical digits.
     * @property {string[]} symbols - The array of symbols.
     */
    this.characterSets = getCharacterSets();
  }

  /**
   * Updates the symbol's state.
   */
  update(): void {
    // Generate a random string for the symbol
    this.text = this.getRandomString();

    // Check if the symbol has reached the bottom of the canvas
    const hasReachedBottom: boolean = this.y * this.fontSize > this.height;

    if (hasReachedBottom) {
      // If the symbol has reached the bottom, reset its position to the top
      this.y = Math.floor(Math.random() * 5);
    } else {
      // Otherwise, increment the y-coordinate to make the symbol move down
      this.y++;
    }
  }

  /**
   * Draws the symbol on the canvas.
   * @param {CanvasRenderingContext2D} context - The rendering context of the canvas.
   */
  draw(): void {
    // Set the fill style to green
    const gradient = createCanvasGradient(
      this.context,
      0,
      this.height,
      this.width,
      0,
      ["#0aff0a", "cyan"]
    );
    this.context.fillStyle = gradient;

    this.context.font = `${this.fontSize}px Consolas`;

    //Center the letter in the middle
    this.context.textAlign = "center";

    // Draw the symbol at the appropriate position on the canvas
    this.context.fillText(
      this.text,
      this.x * this.fontSize,
      this.y * this.fontSize
    );
  }

  /**
   * Returns a random string from the character set.
   * @private
   * @returns {string} The randomly generated string.
   */
  private getRandomString(): string {
    debugger;
    // Select a random property from characterSets (letters, numbers, symbols)
    const characterSetsProperties: string[] = [
      "letters",
      "numberDigits",
      "symbols",
    ];

    const randomPropertyIndex: number = getRandomNumber(
      0,
      characterSetsProperties.length - 1
    );

    const randomProperty: string = characterSetsProperties[randomPropertyIndex];

    // Retrieve the array of characters for the selected property
    const characters: string = this.characterSets[randomProperty];

    // Generate a random index within the range of characters array
    const randomIndex: number = getRandomNumber(0, characters.length - 1);

    // Return the randomly generated character at the random index
    return characters[randomIndex];
  }
}
