import { get2DContext } from "../../functions/canvas.functions";
import { Symbol } from "../particles/symbol.class";

export class MatrixEffectCreator {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  fontSize: number;
  columns: number;
  symbolsArray: any[];
  /**
   * Creates a new matrix rain effect instance.
   *
   * @param {number} canvas - The height of the canvas.
   *
   * @constructor
   */
  constructor(canvas) {
    /**
     * The canvas to draw the element to.
     *
     * @type {number}
     */
    this.canvas = canvas;

    this.context = get2DContext(this.canvas);

    /**
     * The font size of the symbols.
     *
     * @type {number}
     */
    this.fontSize = 20;

    /**
     * The number of columns of symbols to display.
     *
     * @type {number}
     */
    this.columns = this.canvas.width / this.fontSize;

    /**
     * An array that contains all of the symbols to be displayed.
     *
     * @type {Symbol[]}
     */
    this.symbolsArray = [];

    this.initialize();
  }

  /**
   * Initializes the `Effect` by creating and adding new `Symbol` instances to the `symbolsArray`.
   *
   * @private
   */
  private initialize(): void {
    for (let i = 0; i < this.columns; i++) {
      const xPosition = i;
      const yPosition = Math.random() * this.canvas.height;
      const symbol: Symbol = new Symbol(
        this.context,
        this.canvas.width,
        this.canvas.height,
        xPosition,
        yPosition,
        this.fontSize
      );
      this.symbolsArray.push(symbol);
      this.columns = this.canvas.width / this.fontSize;
    }
  }

  /**
   * Animates the symbols by updating their states and drawing them on the canvas.
   */
  animateSymbols(): void {
    for (const symbol of this.symbolsArray) {
      symbol.update();
      symbol.draw();
    }
  }

  public resize(newWidth, newHeight): void {
    this.canvas.width = newWidth;
    this.canvas.height = newHeight;
    this.symbolsArray = [];
    this.initialize();
  }
}
