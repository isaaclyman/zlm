export const getImageResponse = (
  prompt: string,
  canvas?: HTMLCanvasElement
): string => {
  const ctx = canvas?.getContext("2d");
  if (!ctx) {
    return "";
  }

  prompt = `"${prompt}"`;

  const textHeight = 32;
  const lineHeight = textHeight * 1.1;

  const font = `${textHeight}px "Comic Relief", "Comic Sans MS", "Comic Sans", cursive`;
  ctx.font = font;

  const fullTextWidth = ctx.measureText(prompt).width;
  const fontSizeSquaresNeeded = Math.ceil(fullTextWidth / lineHeight);
  const approximateSquare = Math.sqrt(fontSizeSquaresNeeded);
  const calculatedEdge = approximateSquare * lineHeight;

  const defaultWidth = 400;
  const edge = Math.max(calculatedEdge, defaultWidth);
  const padding = 25;

  const lines = getLines(ctx, prompt, edge);
  ctx.canvas.height = lines.length * lineHeight + padding * 2;

  const paddedEdge = edge + padding * 2;
  ctx.canvas.width = paddedEdge;

  ctx.fillStyle = "#0400f2";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = font;
  ctx.textBaseline = "top";

  for (let lineIx = 0; lineIx < lines.length; lineIx++) {
    const line = lines[lineIx];
    const offsetHeight = lineIx * lineHeight + padding;
    ctx.fillText(line, padding, offsetHeight, edge);
  }

  return ctx.canvas.toDataURL();
};

// https://stackoverflow.com/a/16599668/4347245
function getLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  var words = text.split(" ");
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  lines.push(currentLine);
  return lines;
}
