console.clear();
const prompt = require("prompt-sync")();
const game = {
  init: "a",
  histArreyE: [
    ["a", "aa", "aaa"],
    ["b", "bb", "bbb"],
    ["c", "cc", "ccc"],
  ],
  histArreyM: [
    ["a1", "aa1", "aaa1"],
    ["b1", "bb1", "bbb1"],
    ["c1", "cc1", "ccc1"],
  ],
  histArreyH: [
    ["a2", "aa2", "aaa2"],
    ["b2", "bb2", "bbb2"],
    ["c2", "cc2", "ccc2"],
  ],
  haguer: 60,
  moral: 60,
  happynes: 60,
  dado: function () {
    resp = Math.floor(21 * Math.random());
    console.log(resp);
    return resp;
  },
  hist: function (difficult) {
    let score = 0;
    let mistE = Math.floor(Math.random() * 3);
    let mistM = Math.floor(Math.random() * 3);
    let mistH = Math.floor(Math.random() * 3);
    for (let i = 0; i < 5; i++) {
      console.log("turnos", i);
      difficult = Math.floor(Math.random() * 3);
      console.log("dificuldade", difficult);
      if (difficult == 0) {
        if (mistE == 0) {
          console.log(this.histArreyE[0][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 5) {
            console.log(this.histArreyE[0][1]), (hist = prompt());
            score++;
          }
        }
        if (mistE == 1) {
          console.log(this.histArreyE[1][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 5) {
            console.log(this.histArreyE[1][1]), (hist = prompt());
            score++;
          }
        }
        if (mistE == 2) {
          console.log(this.histArreyE[2][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 5) {
            console.log(this.histArreyE[2][1]), (hist = prompt());
            score++;
          }
        }
      }

      if (difficult == 1) {
        if (mistM == 0) {
          console.log(this.histArreyM[0][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 10) {
            console.log(this.histArreyM[0][1]), score++;
          } else {
            console.log("falhou");
          }
        }
        if (mistM == 1) {
          console.log(this.histArreyM[1][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 10) {
            console.log(this.histArreyM[1][1]), score++;
          } else {
            console.log("falhou");
          }
        }
        if (mistM == 2) {
          console.log(this.histArreyM[2][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 10) {
            console.log(this.histArreyM[2][1]), score++;
          } else {
            console.log("falhou");
          }
        }
      }
      if (difficult == 2) {
        if (mistH == 0) {
          console.log(this.histArreyH[0][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 15) {
            console.log(this.histArreyH[0][1]);
            score++;
          } else {
            console.log("falhou");
          }
        }
        if (mistH == 1) {
          console.log(this.histArreyH[1][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 15) {
            console.log(this.histArreyH[1][1]);
            score++;
          } else {
            console.log("falhou");
          }
        }
        if (mistH == 2) {
          console.log(this.histArreyH[2][0]), (hist = prompt());
          let resp = this.dado();
          if (hist == 1 && resp >= 15) {
            console.log(this.histArreyH[2][1]);
            score++;
          } else {
            console.log("falhou");
          }
        }
      }
    }
  },
};
game.hist();
