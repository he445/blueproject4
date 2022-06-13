console.clear();
const prompt = require("prompt-sync")();
const game = {
  init: "a",
  histArreyE: [
    ["a", "aa", "aaa"],
    ["b", "bb", "bbb"],
    ["c", "cc", "ccc"],
  ],
  histArreyM: ["a1", "b1", "c1"],
  histArreyH: ["a2", "b2", "c2"],
  haguer: 60,
  moral: 60,
  happynes: 60,
  dado: function () {
    resp = Math.floor(21 * Math.random());
    console.log(resp);
    return resp;
  },
  hist: function (difficult) {
    let mistE = Math.floor(Math.random() * 3);
    let mistM =
      this.histArreyM[Math.floor(Math.random() * this.histArreyM.length)];
    let mistH =
      this.histArreyH[Math.floor(Math.random() * this.histArreyH.length)];
    if (difficult == "e") {
      if (mistE == 0) {
        console.log(this.histArreyE[0][0]), (hist = prompt());
        let resp = this.dado();
        if (hist == 1 && resp >= 10) {
          console.log(this.histArreyE[0][1]);
        } else {
          console.log("falhou");
        }
      }
    }
    if (difficult == "m") {
      if (mistE == 0) {
        console.log(this.histArreyE[1][0]), (hist = prompt());
        let resp = this.dado();
        if (hist == 1 && resp >= 10) {
          console.log(this.histArreyE[1][1]);
        } else {
          console.log("falhou");
        }
      }
    }
    if (difficult == "h") {
      if (mistE == 0) {
        console.log(this.histArreyE[1][0]), (hist = prompt());
        let resp = this.dado();
        if (hist == 1 && resp >= 10) {
          console.log(this.histArreyE[1][1]);
        } else {
          console.log("falhou");
        }
      }
    }
  },
};
function history() {
  if (game.init[0] != "sim") {
    console.log("errou!"), game.hist("e");
  } else {
    console.log("c1"),
      (game.init[2][0] = prompt()),
      game.dado(),
      console.log("c2"),
      (game.init[2][1] = prompt()),
      game.dado(),
      console.log("c2"),
      (game.init[2][2] = prompt()),
      game.dado();
  }
}
history();
