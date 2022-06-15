console.clear();
const prompt = require("prompt-sync")();
const game = {
  init: function () {
    let intro1 = `– Ouçam irmãos, hoje essa escória tenta nos desafiar.  
    Aquele cujo os bárbaros chamam Aslog "O grande terror do leste",  
    ousa invadir o reino élfico e pôr em risco nossa sagrada capital.  
    Os bárbaros dizem que o exercício dele é imbatível, que não há  
    mortal, e até mesmo, deus que possa derrotá-lo em batalha,`;
    let intro2 = `que ele devora tudo o que encontra, mas oq eu digo é que essas são  
    balelas de covardes que aceitaram a derrota e nem conseguiram se  
    defender. Nós somos Elfos, os favoritos dos deuses, aqueles a quem  
    foram confiados a magia, os garantidores da paz.`;
    let intro3 = `Não há exército mortal ou demoníaco que não sucumba a nossa força. Hoje essa  
    monstruosidade perecerá pelas nossas flechas,lanças e magia,  
    hj esse "Terror" encontrará o seu fim na ponta de minha espada,  
    e mais um conquistador bárbaro sucumbirá na fronteira de nossa  
    sagrada capital.`;
    let intro4 = `Arqueiros recepcione o invasor com o frio de  
    nosso aço, magos façam as estrelas caírem e o chão se abrir,  
    que os deuses lutem conosco. Glória aos deuses, Glória aos seus  
    favoritos, pela vitória! 
    – Arqueiros atirar! 
    – magos formação de batalha!`;
    let intro = function () {
      console.log("intro");
      setTimeout(function () {
        console.log(intro1);
      }, 75);
      setTimeout(function () {
        console.log(intro2);
      }, 1000);
      setTimeout(function () {
        console.log(intro3);
      }, 2000);
      setTimeout(function () {
        console.log(intro4);
      }, 3000);
    };
    console.log(intro());
  },

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
  hist: function hist() {
    let score = 0;
    let mistE = Math.floor(Math.random() * 3);
    let mistM = Math.floor(Math.random() * 3);
    let mistH = Math.floor(Math.random() * 3);
    for (let i = 0; i < 5; i++) {
      console.log("turnos", i);
      let difficult = Math.floor(Math.random() * 3);
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

game.init();
setTimeout(function () {
  game.hist();
}, 7000);
