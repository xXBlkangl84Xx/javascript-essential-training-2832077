class Desk {
  constructor(name, width, height, length, color, deskAssembled) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.length = length;
    this.color = color;
    this.deskAssembled = deskAssembled;
  }

  assembleDesk() {
    this.deskAssembled = true;
    return console.log("Desk Assembled");
  }
  disassembleDesk() {
    this.deskAssembled = false;
    return console.log("Desk Disassembled");
  }
}

export default Desk;
