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
  histArrey: [
    [
      `Andando pelo deserto você encontra um local com a marca dos deuses, você sabe que ali é um 
    local de devoção, seu povo vê aquilo como uma possibilidade de agradar aos deuses e sugerem uma 
    oferenda. Nessa situação você 1.faz a oferenda. 2 n faz a oferenda`, //0
      `logo quando você termina a 
    oferenda vocês sentem um tremor de terra do meio das dunas surge um verme gigante com 
    tantos dentes quanto as pode contar e com o tamanho que escurece o ambiente. 
    Você então decide 1 enfrentar o monstro. 2. Tentar capturar o Vermum baseado nas antigas 
    histórias de cavaleiros de duna 3. Recuar.`, //1
      ` O Vermum investe contra seu povo, você rapidamente ordena a 
    parede de escudos com lanças atrás, a parede aguenta bem a primeira investida do monstro e 
    logo em seguida ele é transpassado por flechas de seus arqueiros. O monstro fica mais furioso e 
    novamente faz seu ataque porém antes que ele alcance a sua defesa preparada para o impacto uma 
    nova saraivada finaliza a criatura. (+20 de comida e mais +10 de moral)`, //2
      ` o monstro é assustador você 
    demora a tomar a decisão do que fazer, as suas tropas vendo a sua indecisão acaba agindo por 
    contra própria, e isso foi crucial. O Vermum faz seus ataques e com uma bocada ele mata vários de 
    seus guerreiros, vendo isso você ordena a retirada, muitos dos que te acompanhavam morrem na 
    confusão mas você se livra da criatura, o seu povo vê isso como uma comprovação que os deus estão 
    zangados e que essa é sua punição. (-10 de moral)`, //3
      `você se lembra das antigas histórias de cavaleiros místicos 
    do deserto que cavalgavam vermes pelas dunas você ordena a formação de batalha na investida da 
    criatura você avança pelo flanco e a escala com a ajuda de sua lâmina, a criatura pula e se 
    contorce na tentativa de se livrar da sua presença, mas você cumpre a sua missão escala o topo 
    da fera no topo você fere mortalmente a criatura. (+30 de comida e +20 de felicidade).`, //4
      ` você se lembra das antigas 
    histórias de cavaleiros místicos do deserto que cavalgavam vermes pelas dunas você ordena a formação 
    de batalha na investida da criatura você avança pelo flanco e a escala com a ajuda de sua lâmina, 
    a criatura se debate e vc é arremessado com muita força contra a parede, você acorda um tempo 
    depois em um acampamento, muitos morreram e quase não conseguiram escapar do Vermum. 
    "É quem diria que conto de fadas são só conto de fadas". (-20 de moral)`, //5
      ` você ordena a retirada, 
    por ser cedo todos conseguem escapar da situação, mas você se pergunta e se você tivesse 
    tentado montar na criatura?`, //6
      `você avalia a situação e percebe que não vale a pena fazer a ofernda, seu povo não entende a sua opção 
    e reforça a ideia que você é um herege(-10 de felicidade)`,
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
    let mist = Math.floor(Math.random() * 2);

    for (let i = 0; i < 5; i++) {
      let histout;
      let histin;
      console.log("turnos", i);

      if (mist == 0) {
        console.log(this.histArrey[0][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[0][1]),
            (histin = prompt()),
            this.dado(),
            (resp = this.dado());

          if (histin == 1 && resp > 12) {
            console.log(this.histArrey[0][2]);
          }
          if (histin == 1 && resp < 12) {
            console.log(this.histArrey[0][3]);
          }
          if (histin == 2 && resp > 15) {
            console.log(this.histArrey[0][4]);
          }
          if (histin == 2 && resp < 15) {
            console.log(this.histArrey[0][5]);
          }

          if (histin == 3) {
            console.log(this.histArrey[0][6]);
          }
        }
        if (histin == 1) {
          console.log(this.histArrey[0][7]);
        }
      }
      if (mist == 1) {
        console.log(this.histArrey[1][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[1][1]);
          (histin = prompt()), this.dado(), (resp = this.dado());

          if (histin == 1) {
            console.log(this.histArrey[1][2]);
          }
          if (histin == 2 && resp > 6) {
            console.log(this.histArrey[1][3]);
            if (histin == 2 && resp < 6) {
              console.log(this.histArrey[1][4]);
            }
          }
        }
        if (histout == 2) {
        }
      }
      if (mist == 2) {
        console.log(this.histArrey[2][0]), (hist = prompt());
        let resp = this.dado();
        if (hist == 1 && resp >= 15) {
          console.log(this.histArrey[2][1]);
          score++;
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
}, 7000);
