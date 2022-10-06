function ComputerBag(
  pockets,
  color,
  strapOn,
  backStrapsOn,
  backStrapLengthR,
  backStrapLengthL,
  strapLength,
  zipped
) {
  this.pockets = pockets;
  this.strapOn = strapOn;
  this.color = color;
  this.backStrapsOn = backStrapsOn;
  this.backStrapLength = {
    left: backStrapLengthL,
    right: backStrapLengthR,
  };
  this.strapLength = strapLength;
  this.zipped = zipped;
  this.zipBag = function (zipped) {
    this.zipped = zipped;
  };
}

export default ComputerBag;
