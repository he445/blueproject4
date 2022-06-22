console.clear();
const prompt = require("prompt-sync")();
const game = {
  init: [
    `– Mas Camarada Chuĭkov eles tem mais de duzentos mil alemães, os batalhões de  
     panzer que derrubaram as tropas francesas e a força aérea que está massacrando nossa divisão.  
     A opção mais correta seria recuar e formar uma linha defensiva do outro lado do rio Volga, ali  
     seus soldados e panzers seriam ineficazes contra nossas forças. Ali faremos um muro que nem a  
     Wehrmacht seria capaz de ultrapassar.`,
    `– Camarada, as ordens são claras “defender Stalingrado ou morrer tentando”,  
     iremos cumprir essa ordem com excelência e nenhum facista atravessará o Volga vivo.`,
    `– Mas Chuĭkov n...`,
    `Sem “mas” camarada, sem “mas”, preparem as tropas, a ordem foi clara.  
     Stalingrado será o cemitério do tirano.`,
  ],
  histArrey: [
    [
      `– Avante, avante camaradas.  
       – cuidado com o flanco 
       – Facista abatido. 
       – Camaradas a missão é bem simples: tomar a residência nas coordenadas  48.71787, 44.513. Mechan-se.  
       O edifício tem sido uma pedra no sapato dos esforços soviéticos, a tomada desse edifício é  
       crucial para a retomada do setor. O esquadrão do Sargento Semyonovich é escolhido para a missão.  
       A casa está cercada por minas, atiradoras de elite e metralhadoras.  
       Você então decide 1. atacar a distância os atiradores de elite  
       2. avançar e encurtar a distância para fazer um assalto rápido.  
       3. lançar fogo  de supressão enquanto avança para tomar a casa.`, //0
      `– atiradoras mirrem nos atiradores de precisão deles.`, //1
      ` –Camarada fascistas mortos`, //2
      ` Malditos, não temos visão senhor e eles estão em terreno elevado, estão nos caçando como moscas.`, //3
      `2. avançar e encurtar a distância para fazer um assalto rápido.  
       3. lançar fogo  de supressão enquanto avança para tomar a casa.`, //4
      ` PELA PÁTRIA MÃE, UUUUURRRRAAA! AVANCEM, AVANCEM!`, //5
      ` Camarada 1. estabelecemos o perímetro ou  2.invadimos a casa `, //6
      `perímetro estabelecido Camarada, não tem risco de inimigos pela costa Camarada. 2. - Avante pela casa!`, //7
      `- Avante pela casa!`, //8
      ` primeiro andar tomado, 1 para o segundo as baionetas 2 para o segundo lance as granadas e  
     pescamos os desgraçados na fulga.`, //9
      `– Explosão de granadas, tiros e gritos de desespero, gorgolejar de sangue.  
     Haha veja como os fascistas morrem, como ratos saindo da toca. (O reforço soviétivo está se preparando!)`, //10
      `Capitão ninguém sobreviveu do esquadrão do Sargento Semyonovich 
     Avisem a família, muitos de nós morreram, mas sobreviveremos. (A ofensiva Alemã ganha força!)`, //11
      `distraiam a escória com a metralhadora.`, //12
      `1. atacar a distância os  
       atiradores de elite 2. avançar e encurtar a distância para fazer um assalto rápido. `, //13
      `Morra facista. senhor esse foi o último. Sucesso casa tomada (O reforço soviétivo está se preparando!)`, //14
    ],
    [
      ` – Vassili, preste atenção sempre mire entre os olhos da criatura
– Sim vovô.
– Lembre-se meu filho, nunca demonstre medo, essas criaturas farejam o medo.
– Recruta, entre os olhos, sem medo…
– “Essas criaturas farejam o medo”
– O que disse Soldado Zaitsev?
– Nada camarada, só uma coisa que meu avô me falava.
 – Camaradas  hoje a missão de vocês será apoiar nossos regimentos de assalto para assegurar as proximidades da rua Rua Komsomolskaya, sabemos que ali estão alguns oficiais bem cruciais para os fascistas. A missão principal é assegurar os arredores, mas ceifem cada oficial que tiverem a oportunidade
– Sim Camarada! UUURRRAAA! 
– Tenente Zaitsev se apresentado Camarada
– Certo você comandará os franco-atiradores, ouvi dizer que você é especialista em matar esses animais, “morte branca”. Avante!
– Sim camarada!
– Senhor os comunistas se aproximam, preparem a defesa soldado, não se preocupem, são moscas perto da Wehrmacht.
Camarada Zaitsev quais são as ordens: 1. priorizar os soldados de linha frente. 2. Priorizar os oficiais.`, //0
      `Scharfschütze!! estão abatendo nossa linha de frente (-2 para o combate alemão)`, //1
      `Senhor as ordens? Senhor? Senhor? – o soldado alemão se vira e vê o tenente alemão abatido. (-4 no combate alemão)`, //2
      `– Posicione Scharfschützen nos pontos de vantagem.
   Camarada Zaitsev, snaypery inimigo se posicionando. 1 impeça eles 2. concentrar fogo nos oficiais.`, //3
      ` –os malditos estão abatendo nossos Scharfschützen. (-5 para o combate alemão)`, //4
      ` – Você avanç.. (-2 no combate alemão)
`, //5
      `--os malditos estão nos massacrando senhor! mandem os Flammenwerfer, queimem esses malditos.
lança chamas camarada Zaitsev. 1. mirem nos tanques de combustível nas costas 2. Sempre entre os olhos homens`, //6
      `Ihr Kraftstofftank... Ihr Kraftstofftank wird explodieren.
 (-6)`, //7
      `Queimem escória, quei… (-2)`, //8
      `haha esses comunistas são persistentes avancem com os panzers e os massacrem. 
Panzers à vista. 1 mantenham a infantaria em cheque. 2. Fogo dos morteiros`, //9
      `malditos Scharfschützen comunistas, malditos (-2).`, //10
      `Tschüss Kommunist. was? Rückzug Rückzug ahh (-4)`, //11
      `Vitória, zona tomada Camarada (O reforço soviétivo está se preparando!) `, //12
      `hahaha vejam como fogem esses comunistas. (A ofensiva Alemã ganha força!)`,
    ],
    [
      `– Camaradas, nossa missão hoje é fazem o bombardeio da instalação nas coordenadas 48.73, 49.49. Voaremos a noite como de costume, simples, voar, bombardear e voltar.
"Sim Camarada Beliaeva"
– Estamos nos aproximando do alvo, Kroliova, fascistas à vista?
– Não camarada, tudo seguro.
– Preparar para liberar as bombas em 1,2…
– CAMARADA, GUSTAV À VISTA!!
– ABORTAR,ABORTAR, MANOBRAS EVASIVAS!!
– LIDYA O QUE VOCÊ TÁ FAZENDO? VOLTA PARA A FORMAÇÃO!
–To ganhando tempo Camarada.
1."Vou desligar os motores, ir abaixo dele e subir repentinamente nem vai me ver chegando" 2. "Tá na mira, vou alvejar daqui mesmo"`, //0
      ` "haha bem mais fácil" (+2 no ataque)`, //1
      `"haha facista maldito" (+3 no ataque)`, //2
      `"droga o maldito me percebeu agora ele tá atrás de mim""Maldito tá na hora da velha tática, vou diminuir os motores e planar, esses facistas adoram 
      isso " 2. "Vou mudar o plano de ação, voando lateralmente quando ele se aproximar" `, //3
      `"nunca falha essas 'maravilhas da engenharia alemã' nunca conseguem voar 
      tão baixo estão devagar" (-4 para o alemão)`, //4
      `– Facista abatido Camarada Raisa.  soviéticos
      – Lydia isso foi imprudente!!
      – Me desculpa Camarada, ele tava bem no ponto.
      – Lydia, Lydia. Kroliova
      – nada a vista camarada
      – certo, bombas no alvo!! (O reforço soviétivo está se preparando!)`, //5
      ` – fui acertada, fui acertada, 
      – vamos camarada
      – Camarada mais deles se aproximando. 
– Espalence, Espalence, lancem as bombas cumpram a missão (A ofensiva Alemã ganha força!)`,
    ],
    [
      `Camaradas o quilômetro 74 da do entroncamento ferroviário foi tomado, os batedores dão conta de 70 panzers, 3000 infantes e artilheiros. A retomada desse entroncamento é crucial para a nossa logística, devemos tomá-lo agora. Mobilizem as divisões.
    –Camarada Andreev, sua coluna será a ponta da lança no ataque, você avançará com os seus t-34 e abrirá caminho para a infantaria.
    – sim Camarada!
    – Camarada estamos nos aproximando! –Formação de batalha  1. Flecha! 2. Parede de aço`, //0
      `os tanques avançam em formato de flecha com o tanque central sendo do tenente Andreev (+2 soviéticos)`, //1
      `os ataques se espalham formando uma parede de aço protegendo a infantaria. -1 para os alemães`, //2
      `– Avancem rompam as defesas 1 priorizem as estruturas de defesa 2 priorizem as peças de artilharia`, //3
      `Saian da frente facistas (+2 soviéticos)`, //4
      ` Fogo dos artilheiros (+3 soviéticos)`, //5
      `– Camarada 20 panzers inimigos a frente
   1 –Avancem façam conhecer o poder T-34
   2 – Mantenham a formação protejam o avanço da infantaria.
   Turno de combate`, //6
      `– Haha rompemos a defesa, mantenham a pressão (O reforço soviétivo está se preparando!)`, //7
      ` –  Mantenham a formação essa batalha ainda não acabou (A ofensiva Alemã ganha força!) `,
    ],
    [
      `Camaradas o quilômetro 74 da do entroncamento ferroviário foi tomado, os batedores dão conta de 70 panzers, 3000 infantes e artilheiros. A retomada desse entroncamento é crucial para a nossa logística, devemos tomá-lo agora. Mobilizem as divisões. 
  – Camarada  Khvastantzev você e seu pelotão levaram os Katyusha e lançaram o inferno nesses animais. O seu foco como artilharia é prover o suporte para o combate em solo.
  –Camarada  Khvastantzev estamos em posição onde gostaria de começar o bombardeio 1 nas peças de artilharia 2 
  na retaguarda`, //0
      `hã?! Stalins Organe, se abriguem, suchen Schutz`, //1
      ` – Senhor quais são as ordens câmbio, senhor, sons de explosão pelo rádio +3 Rússia`, //2
      `Camarada os nossos tanques estão assaltando a linha de frente 1 fogo de supressão 
  nós panzers inimigos 2 cubram o avanço da infantaria`, //3
      `Avancem vamos massacrar essas carroças soviéticas, 
  – senhor os Stalins Organe, estão chovendo mísseis em nós.
  – busquem abrigo, Schutz suchen
    -2 Alemanha`, //4
      `Avancem, Avancem matem essa escória comunista, Avance…+3 Rússia`, //5
      `Camarada os fascistas estão avançando com tudo contra nossa infantaria
    1 os destrua 2 fogo na artilharia inimiga`, //6
      `Weiter, weiter, mantém a escória comunista. 
    – Senhor a artilharia está massacrando nossos soldados +3
    – Malditos`, //7
      `Senhor não temos acesso as nossas peças de artilharia. -2 Alemanha 
    Continuem se sacrificando pela vitória.`, //8
      `Camarada Khvastantzev eles estão em vantagem Fogo total na linha de frente + 2 
    na retaguarda estão os comandantes +3`, //9
      `zurückziehen, zurückziehen, Malditos comunistas (O reforço soviétivo está se preparando!)`, //10
      `Vencemos a escória comunista senhor
    – muito bom soldado, muito bom.(A ofensiva Alemã ganha força!)`,
    ],
    [
      `– enfim um pouco de calma.
    – não abaixem a guarda, eles sempre estão a esperta
    – Camarada, você nunca relaxa
    – só no fim da guerra Cabo Ivanovich
    – Fascistas à vista 
    – As suas posições Camaradas, as ordens são
    "defender essa posição ou morrer tentando"
    –Cabo, assuma a metralhadora, castiguem esses malditos.
    –Sim Camarada Andreev!
    "Deixa comigo camarada, todo mundo vai voltar pra casa hoje"
    –Eles estão por todos os lados!
    1 "vou criar uma barreira de fogo apoiando o eixo central" 2 "vou fustigar a retaguarda"
    `, //0
      `eles não estão avançando! Haha estão com medo do aço soviético +2 urss`, //1
      ` morteiros inimigo inoperante, -3 alemanha`, //2
      `– panzers avançando!
     1"Vou focar nos infantes" 2"panzer, blindagem forte, mas minha metralhadora é ruim"`, //3
      ` os panzers estão sem apoio da infantaria, aproveitem e os destruam -2 alemanha`, //4
      `NÃO desperdice munição nos panzers Cabo! +3 Alemanha`, //5
      `"1. vou finalizar na ora da fuga" 2 fogo na linha de frente`, //6
      `haha vejam como correm camarada +3`, //7
      `se ficaram é pq querem mais aço +2`, //8
      `" droga essa investida tá muito forte. Fogo na linha de frente" 2 eles estão avançando. 
     "Fogo na retaguarda" `, //9
      `Parabéns cabo Ivanovich excelente trabalho (O reforço soviétivo está se preparando!)`, //10
      `resistam, resistam (A ofensiva Alemã ganha força!) `,
    ],
    [
      `– Panzers!
    - Sua vez Camarada Khachin! 
    – Sim camarada! preparar a recepção desses canalhas
    –Tiger se aproximando à esquerda, Panzer II A direita.
    1 Elimine os Tigers 2 Fogo nos panzers
    `, //0
      `Senhor kummunist atirando em nós !
    – mirem neles `, //1
      `Camarada fogo inimig… ahh!
    – Soldado!
    Camarada perdemos metade do escudo 
    1 continuem com o fogo! 2 Recuar!`, //2
      `Senhor, destruímos metade da arma e matamos  2 kummunists na tripulação! Fogo!`, //3
      `Camarada fogo inimigo!
    Camarada, a arma está quase destruída
    1 Quase soldado mantenha o fogo, mataremos esses Fascistas hoje! 2 Recuar`, //4
      `Senhor os kummunists destruíram 3 dos nossos Tigers malditos, destruam!`, //5
      `Camarada sistemas de mira destruidos! 1 só mais um tiro! 2 Recuar`, //6
      `(A ofensiva Alemã ganha força!)`, //7
      `(O reforço soviétivo está se preparando!)`, //8
      `Veículos desabilitados 2 A vez é dos Tigers`,
    ],
  ],
  dado: function () {
    resp = Math.floor(21 * Math.random());
    return resp;
  },
  hist: function hist() {
    let next;
    console.log(this.init[0]);
    next = prompt();
    console.log(this.init[1]);
    next = prompt();
    console.log(this.init[2]);
    next = prompt();
    console.log(this.init[3]);
    next = prompt();
    console.log();

    let scoreGer = 7;
    let scoreSU = 7;
    console.log(`O reforso Soviético esta há ${scoreSU} de distancia`);
    console.log(`O reforso Soviético esta há ${scoreGer} de distancia`);

    console.log();

    for (let i = 0; i < 7; ) {
      let histout;
      let histin;
      let histin1;
      console.log("turnos", i);
      console.log(`O reforso Soviético esta há ${scoreSU} de distancia`);
      console.log(`O reforso Soviético esta há ${scoreGer} de distancia`);

      while (i == 0) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);
        let scoreinGer = 0;
        let scoreinUs = 0;
        console.log(this.histArrey[1][0]), (histout = prompt());
        console.log(scoreinGer);
        console.log(scoreinUs);

        if (histout == 1) {
          console.log(this.histArrey[1][1]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout == 2) {
          console.log(this.histArrey[1][2]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 4),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        console.log(this.histArrey[1][3]), (histout1 = prompt());
        if (histout1 == 1) {
          console.log(this.histArrey[1][4]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 5),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout1 == 2) {
          console.log(this.histArrey[1][5]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        if (scoreinGer < 2) {
          console.log(this.histArrey[1][6]);
          histout2 = prompt();
          if (histout2 == 1) {
            console.log(this.histArrey[1][7]);
            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 6),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[1][12]);

              scoreGer--;
              i++;
            } else if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[1][13]);

              scoreSU--;
              i++;
            }
          }

          if (histout2 == 2) {
            console.log(this.histArrey[1][8]);

            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[1][12]);

              scoreGer--;
              i++;
            } else if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[1][13]);

              scoreSU--;
              i++;
            }
          }
        }
        if (scoreinGer > 2) {
          console.log(this.histArrey[1][9]);
          histout2 = prompt();
          if (histout2 == 1) {
            console.log(this.histArrey[1][10]);
            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 6),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[1][12]);

              scoreGer--;
              i++;
            } else if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[1][13]);

              scoreSU--;
              i++;
            }
          }

          if (histout2 == 2) {
            console.log(this.histArrey[1][11]);

            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              console.log(this.histArrey[1][12]);

              scoreinUs++;
            }
            if (respUS < bonus) {
              console.log(this.histArrey[1][13]);

              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[1][12]);

              scoreGer--;
              i++;
            } else if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[1][13]);

              scoreSU--;
              i++;
            }
          }
        }
      }
      while (i == 1) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);
        let scoreinGer = 0;
        let scoreinUs = 0;
        console.log(this.histArrey[2][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[2][1]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout == 2) {
          console.log(this.histArrey[2][2]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 3),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        console.log(this.histArrey[2][3]), (histout1 = prompt());
        if (histout1 == 1) {
          console.log(this.histArrey[2][4]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 4),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
          if (scoreinGer > scoreinUs) {
            console.log(this.histArrey[2][6]);
            scoreGer--;
            i++;
          }
          if (scoreinUs > scoreinGer) {
            console.log(this.histArrey[2][5]);
            scoreSU--;
            i++;
          }
          if (scoreinUs == scoreinGer) {
            console.log(this.histArrey[2][6]);
            scoreGer--;
            i++;
          }
        }

        if (histout1 == 2) {
          console.log(this.histArrey[2][5]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 1),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
          if (scoreinGer > scoreinUs) {
            console.log(this.histArrey[2][6]);
            scoreGer--;
            i++;
          }
          if (scoreinUs > scoreinGer) {
            console.log(this.histArrey[2][5]);
            scoreSU--;
            i++;
          }
          if (scoreinUs == scoreinGer) {
            console.log(this.histArrey[2][6]);
            scoreGer--;
            i++;
          }
        }
      }
      while (i == 2) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);
        let scoreinGer = 0;
        let scoreinUs = 0;
        console.log(this.histArrey[3][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[3][1]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout == 2) {
          console.log(this.histArrey[3][2]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 1),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
          console.log(this.histArrey[3][3]), (histout1 = prompt());
        }
        if (histout1 == 1) {
          console.log(this.histArrey[3][4]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 5),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout1 == 2) {
          console.log(this.histArrey[3][5]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        console.log(this.histArrey[3][6]);
        histout2 = prompt();
        if (histout2 == 1) {
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 4),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
          if (scoreinGer > scoreinUs) {
            console.log(this.histArrey[3][7]);
            scoreGer--;
            i++;
          }
          if (scoreinUs > scoreinGer) {
            console.log(this.histArrey[3][8]);
            scoreSU--;
            i++;
          }
        }

        if (histout2 == 2) {
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 3),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
          if (scoreinGer > scoreinUs) {
            console.log(this.histArrey[3][7]);
            scoreGer--;
            i++;
          }
          if (scoreinUs > scoreinGer) {
            console.log(this.histArrey[3][8]);
            scoreSU--;
            i++;
          }
        }

        if (scoreinGer == 3) {
          console.log(this.histArrey[3][7]);

          scoreGer--;
          i++;
        } else if (scoreinUs == 3) {
          console.log(this.histArrey[3][8]);

          scoreSU--;
          i++;
        }
      }
      while (i == 3) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);
        let scoreinGer = 0;
        let scoreinUs = 0;
        console.log(this.histArrey[4][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[4][1]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout == 2) {
          console.log(this.histArrey[4][2]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 3),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        console.log(this.histArrey[4][3]), (histout1 = prompt());
        if (histout1 == 1) {
          console.log(this.histArrey[4][4]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 5),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout1 == 2) {
          console.log(this.histArrey[4][5]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        if (scoreinGer < 2) {
          console.log(this.histArrey[4][6]);
          histout2 = prompt();
          if (histout2 == 1) {
            console.log(this.histArrey[4][7]);
            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 3),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
          }

          if (histout2 == 2) {
            console.log(this.histArrey[4][8]);

            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
          }
        }
        if (scoreinGer > 2) {
          console.log(this.histArrey[4][9]);
          histout2 = prompt();
          if (histout2 == 1) {
            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[4][10]);
              scoreGer--;
              i++;
            }
            if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[4][11]);
              scoreSU--;
              i++;
            }
          }

          if (histout2 == 2) {
            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              console.log(this.histArrey[4][10]);

              scoreSU--;
              i++;
            }
            if (respUS < bonus) {
              console.log(this.histArrey[4][11]);

              scoreGer--;
              i++;
            }
          }
        }
      }
      while (i == 4) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);
        let scoreinGer = 0;
        let scoreinUs = 0;
        console.log(this.histArrey[5][0]), (histout = prompt());

        if (histout == 1) {
          console.log(this.histArrey[5][1]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout == 2) {
          console.log(this.histArrey[5][2]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 3),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        console.log(this.histArrey[5][3]), (histout1 = prompt());
        if (histout1 == 1) {
          console.log(this.histArrey[5][4]);
          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 5),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }

        if (histout1 == 2) {
          console.log(this.histArrey[5][5]);

          (histin = prompt()), (respUS = this.dado());
          (respGer = this.dado()),
            (bonus = respGer - 2),
            console.log(`Nosso ataque ${respUS}`);
          console.log(`Ataque inimigo ${bonus}`);
          if (respUS > bonus) {
            scoreinUs++;
          }
          if (respUS < bonus) {
            scoreinGer++;
          }
        }
        if (scoreinGer < 2) {
          console.log(this.histArrey[5][6]);
          histout2 = prompt();
          if (histout2 == 1) {
            console.log(this.histArrey[5][7]);
            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 3),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[5][10]);
              scoreGer--;
              i++;
            }
            if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[5][11]);
              scoreSU--;
              i++;
            }
          }

          if (histout2 == 2) {
            console.log(this.histArrey[5][8]);

            (histin = prompt()), (respUS = this.dado());
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[5][10]);
              scoreGer--;
              i++;
            }
            if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[5][11]);
              scoreSU--;
              i++;
            }
          }
        }
        if (scoreinGer > 2) {
          console.log(this.histArrey[5][9]);
          histout2 = prompt();
          if (histout2 == 1) {
            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              scoreinUs++;
            }
            if (respUS < bonus) {
              scoreinGer++;
            }
            if (scoreinGer > scoreinUs) {
              console.log(this.histArrey[5][10]);
              scoreGer--;
              i++;
            }
            if (scoreinUs > scoreinGer) {
              console.log(this.histArrey[5][11]);
              scoreSU--;
              i++;
            }
          }

          if (histout2 == 2) {
            respUS = this.dado();
            (respGer = this.dado()),
              (bonus = respGer - 2),
              console.log(`Nosso ataque ${respUS}`);
            console.log(`Ataque inimigo ${bonus}`);
            if (respUS > bonus) {
              console.log(this.histArrey[5][10]);

              scoreSU--;
              i++;
            }
            if (respUS < bonus) {
              console.log(this.histArrey[5][11]);

              scoreGer--;
              i++;
            }
          }
        }
      }
      while (i == 5) {
        console.log(
          `O reforso Soviético esta há ${scoreSU} meses de distancia`
        );
        console.log(`O reforso Alemão esta há ${scoreGer} meses de distancia`);

        console.log(this.histArrey[6][0]), (histout = prompt());
        if (histout == 1) {
          console.log(this.histArrey[6][1]);
          console.log(this.histArrey[6][2]), (histin = prompt());
          if (histin == 1) {
            console.log(this.histArrey[6][3]), (histin1 = prompt());
          } else {
            console.log(this.histArrey[6][7]);
            scoreGer--, i++;
          }
          if (histin1 == 1) {
            console.log(this.histArrey[6][4]), (histin2 = prompt());
          } else {
            console.log(this.histArrey[6][7]);
            scoreGer--, i++;
          }
          if (histin2 == 1) {
            console.log(this.histArrey[6][5]), (histin3 = prompt());
          } else {
            console.log(this.histArrey[6][7]);
            scoreGer--, i++;
          }
          if (histin3 == 1) {
            console.log(this.histArrey[6][6]),
              (histin2 = prompt()),
              console.log(this.histArrey[6][7]);
            scoreSU--, i++;
          } else {
            console.log(this.histArrey[6][7]);
            scoreGer--, i++;
          }
        }
        if (histout == 2) {
          console.log(this.histArrey[6][9])((histout = prompt()));
        }
      }
      if (scoreGer == 1) {
        console.log(`Stalingrado caiu nas maõs do Eixo, quem sabe o que será da cidade e 
      do mundo agora?`),
          i++;
      }
      if (scoreSU == 1) {
        console.log(
          `Vitória!! Agora perseguiremos esses canalhas até Berlin UUUURRRRAAAAA!!`
        ),
          i++;
      }
    }
  },
};

game.hist();
