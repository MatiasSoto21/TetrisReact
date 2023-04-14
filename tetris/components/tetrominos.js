export const TETROMINOS = {
  0: { shape: [[0]], color: "black" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "bg-cyan-400",
    border: "border-cyan-700",
  },

  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "bg-blue-700",
    border: "border-blue-900",
  },

  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: 'bg-orange-300',
    border: "border-orange-700",

  },

  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "bg-yellow-400",
    border: "border-yellow-700",
  },

  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "bg-green-500",
    border: "border-green-700",
  },

  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "bg-purple-700",
    border: "border-purple-900",
  },

  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "bg-red-500",
    border: "border-red-700",
  },
};

export const randomTetromino = () => {
    const tetrominos = "IJLOSTZ";
    const randTetromino = 
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
    return TETROMINOS[randTetromino];
}
