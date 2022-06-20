console.clear();
const prompt = require("prompt-sync")();
const game = {
  init: function () {
    let intro1 = `– Mas Camarada Chuĭkov eles tem mais de duzentos mil alemães, os batalhões de 
    panzer que derrubaram as tropas francesas e a força aérea que está massacrando nossa divisão. 
    A opção mais correta seria recuar e formar uma linha defensiva do outro lado do rio Volga, ali 
    seus soldados e panzers seriam ineficazes contra nossas forças. Ali faremos um muro que nem a 
    Wehrmacht seria capaz de ultrapassar.`;
    let intro2 = `– Camarada, as ordens são claras “defender Stalingrado ou morrer tentando”, 
    iremos cumprir essa ordem com excelência e nenhum facista atravessará o Volga vivo.`;
    let intro3 = `– Mas Chuĭkov n...`;
    let intro4 = `Sem “mas” camarada, sem “mas”, preparem as tropas, a ordem foi clara. 
    Stalingrado será o cemitério do tirano.`;
    let intro = function () {
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
      }, 200);
    };
    console.log(intro());
  },
  histArrey: [
    [
      `– Avante, avante camaradas. 
      – cuidado com o flanco
      – Facista abatido.
      – Camaradas a missão é bem simples: tomar a residência nas coordenadas  48.71787, 44.513. Mechan-se. 
      O edifício tem sido uma pedra no sapato dos esforços soviéticos, a tomada desse edifício é 
      crucial para a retomada do setor. O esquadrão do Sargento Semyonovich é escolhido para a missão. 
      A casa está cercada por minas, atiradoras de elite e metralhadoras. 
      Você então decide 1. atacar a distância os atiradores de elite 
      2. avançar e encurtar a distância para fazer um assalto rápido. 
      3. lançar fogo  de supressão enquanto avança para tomar a casa.`, //0
      `– atiradoras mirrem nos atiradores de precisão deles.`, //1
      ` –Camarada fascistas mortos`, //2
      ` Malditos, não temos visão senhor e eles estão em terreno elevado, estão nos caçando como moscas.`, //3
      `2. avançar e encurtar a distância para fazer um assalto rápido. 
      3. lançar fogo  de supressão enquanto avança para tomar a casa.`, //4
      ` PELA PÁTRIA MÃE, UUUUURRRRAAA! AVANCEM, AVANCEM!`, //5
      ` Camarada 1. estabelecemos o perímetro ou  2.invadimos a casa `, //6
      `perímetro estabelecido Camarada, não tem risco de inimigos pela costa Camarada. 2. - Avante pela casa!`, //7
      `- Avante pela casa!`, //8
      ` primeiro andar tomado, 1 para o segundo as baionetas 2 para o segundo lance as granadas e 
    pescamos os desgraçados na fulga.`, //9
      `– Explosão de granadas, tiros e gritos de desespero, gorgolejar de sangue. 
    Haha veja como os fascistas morrem, como ratos saindo da toca. (O reforço soviétivo está se preparando!)`, //10
      `Capitão ninguém sobreviveu do esquadrão do Sargento Semyonovich
    Avisem a família, muitos de nós morreram, mas sobreviveremos. (A ofensiva Alemã ganha força!)`, //11
      `distraiam a escória com a metralhadora.`, //12
      `1. atacar a distância os 
      atiradores de elite 2. avançar e encurtar a distância para fazer um assalto rápido. `, //13
      `Morra facista. senhor esse foi o último. Sucesso casa tomada (O reforço soviétivo está se preparando!)`, //14
    ],
    [
      ` você lança uma expedição de reconhecimento, o mapa mostra que em alguns quilômetros haveria um 
    oásis, um grupo menor conseguiria identificar possíveis perigos na região. 
    Depois de algum tempo a expedição diz que encontrou o oásis que é está cheio de árvores 
    frondosas e animais, além de água, nenhum perigo parece cercar o local. Você então: 1 ordena o 
    deslocamento até o local. 2. Você ignora o reporte e continua o caminhar desviando do oásis`, //0
      `você leva o seu povo ao oásis, as crianças pulam no lago e os adultos se refrescam nas sombras 
    das árvores altas. Ninguém, no entanto, reconhece as frutas, por isso  receio de comer-las 
    existe. Então você 1 ordena que os experimentadores reais provem as frutas.2. ordena para que se 
    abastecem das frutas isso é claramente um presente dos deuses. `, //1
      `seus provadores aprovam as frutas elas são deliciosas e matam muito da sede. 
    (+10 de comida + 5 de moral)`, //2
      `seu povo prova as frutas elas são deliciosas e matam muito da sede. (+10 de comida + 5 de moral)
    `, //3
      ` as frutas apodrecem extremamente rápido e contamina algumas das suas provisões, 
    foi uma tarde refrescante, mas esse refresco teve seu custo. (-7 de comida +3 de felicidade)`, //4
      ` a sua população nunca soube do oásis, nem você sabe o que teria acontecido lá, 
    mas você se lembra do seu pai " o seguro morreu de velho meu filho", 
    " mas o ousado morreu mais rico" completa sua mãe.`, //5
    ],
    ["c2", "cc2", "ccc2"],
  ],
  mist: function () {
    var numeros = [];
    while (numeros.length < 3) {
      var aleatorio = Math.floor(Math.random() * 3);

      if (numeros.indexOf(aleatorio) == -1) numeros.push(aleatorio);
    }
    return numeros[0];
  },

  dado: function () {
    resp = Math.floor(21 * Math.random());
    console.log(resp);
    return resp;
  },
  hist: function hist() {
    let scoreGer = 10;
    let scoreSU = 10;
    console.log(`O reforso Soviético esta há ${scoreSU} de distancia`);
    console.log(`O reforso Soviético esta há ${scoreGer} de distancia`);

    console.log();

    for (let i = 0; i < 3; i++) {
      let histout;
      let histin;
      let histin1;
      console.log("turnos", i);
      console.log(`O reforso Soviético esta há ${scoreSU} de distancia`);
      console.log(`O reforso Soviético esta há ${scoreGer} de distancia`);

      console.log(this.mist());
      if (this.mist() == 0) {
        console.log(this.histArrey[0][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[0][1]), this.dado(), (resp = this.dado());
          console.log(resp);

          if (histout == 1 && resp >= 8) {
            console.log(this.histArrey[0][2]);
            console.log(this.histArrey[0][4]), (histout = prompt());
            console.log("a", histout);
          }
          if (histout == 1 && resp < 8) {
            console.log(this.histArrey[0][3]),
              console.log(this.histArrey[0][4]),
              (histout2 = prompt());
            console.log("a", histout);
          }
        }
        if (histout == 2) {
          console.log(this.histArrey[0][5]), this.dado(), (resp = this.dado());

          if (histout == 2 && resp > 10) {
            console.log(this.histArrey[0][6]);
            histin = prompt();
            if (histin == 1) {
              console.log(this.histArrey[0][7]), (bonus = 2);
              histin = prompt();
            } else {
              bonus = 0;
            }
            if (histin == 2 && bonus == 2) {
              coconsole.log(this.histArrey[0][8]), (resp = this.dado());
              buff = resp + bonus;
              console.log(buff), (histin = prompt());
              if (buff >= 10) {
                console.log(this.histArrey[0][8]), (histin1 = prompt());
                resp = this.dado();
              } else if (buff <= 10) {
                console.log(this.histArrey[0][11]);
                scoreGer--;
              }
            }
            if (histin == 2 && bonus != 2) {
              coconsole.log(this.histArrey[0][8]), (resp = this.dado());
              console.log(resp);
              if (resp >= 10) {
                coconsole.log(this.histArrey[0][8]), (histin1 = prompt());
                resp = this.dado();
              } else if (resp <= 10) {
                coconsole.log(this.histArrey[0][11]);
                scoreGer--;
              }
            }
          }
          if (histin1 == 1 && rep >= 10) {
            coconsole.log(this.histArrey[0][14]);
            scoreSU--;
          }
          if (histin1 == 1 && rep < 10) {
            coconsole.log(this.histArrey[0][11]);
            scoreGer--;
          }
          if (histout == 2 && resp < 10) {
            console.log(this.histArrey[0][11]);
            scoreGer--;
          }
        }

        if (histout == 3) {
          console.log(this.histArrey[0][6]);
          histout = prompt();
        }
      }

      if (this.mist() == 1) {
        console.log(this.histArrey[1][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[1][1]);
          (histin = prompt()), this.dado(), (resp = this.dado());

          if (histin == 1) {
            console.log(this.histArrey[1][2]);
            this.food + 10, this.happynes + 5;
          }
          if (histin == 2 && resp > 6) {
            console.log(this.histArrey[1][3]);
            this.food + 10, this.happynes + 5;
          }
          if (histin == 2 && resp < 6) {
            console.log(this.histArrey[1][4]);
            this.food - 7, this.happynes + 1;
          }
        }
        if (histout == 2) {
          console.log(this.histArrey[1][5]);
        }
      }
      if (this.mist() == 2) {
        console.log(this.histArrey[2][0]), (hist = prompt());
        let resp = this.dado();
        if (hist == 1 && resp >= 15) {
          console.log(this.histArrey[2][1]);
        } else {
          console.log("falhou");
        }
      }
    }
  },
};

game.init();
setTimeout(function () {
  game.hist();
}, 3500);
