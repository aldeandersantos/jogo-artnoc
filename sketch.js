// ColabEduc: www.colabeduc.org/descricao/show/509
// Gameplay: www.youtube.com/watch?v=IigwZwAjWcQ
//----------------------------------------------------------------------------------------------
var vetx = 800; var vety = 450; // Tamanho da tela
var rectx = 345; var recty = 190; var rectyjogo = 240;// Botão de selecionar
var rectsizex = 110; // Largura da caixa de seleção
var opcao = 1; var opcaojogo = 4; // Opções de seleção
var tela = 0; var telajogo;
var alternartela = 1; var contador = 0;
var palavracontra = "", letras, trocarpalavra = 0, mudado = 0;
var palavrateste, palavraaleatoria, numeroaleatorio, contarsom = false; // Fase 1
var palavra5 = [""], acertofase2 = true, palavraminuscula, faltaletras = false; //Fase 2
var palavraigualfase2 = false, letrasfase2; // Fase 2
var palavrafase3, numeroaleatorio4, fase3ready = false, palavracontrafase3; // Fase 3
var trocarpalavrafase3, letrasfase3, palavrateste3, fase3win = false; 
let img, palavra = "";

function preload(){  // Pré carrega a imagem na memória
  backmenu = loadImage('planodefundo.png');
  backdescricao = loadImage('descricao.png');
  backcreditos = loadImage('creditos.png');
  victorysound = loadSound('victory.mp3');
  failsound = loadSound('failsound.mp3');
  clicksound = loadSound('click.mp3')
}

function setup(){
  createCanvas((vetx), (vety));
}
//----------------------------------------------------------------------------------------------
function draw(){
  image(backmenu, 0, 0);
  if(tela == 0){ // Selecionar a tela do cliente
    menu();}
  if(tela == 1){
    contarsom = false;
    jogar();}
  if(tela == 2){
    controles();}
  if(tela == 3){
    sobre();}
  if(tela == 4){
    fase1();}
  if(tela == 5){
    fase2();}
  if(tela == 6){
    fase3();}
  contador++
  if(contador == 5){
  alternartela = 0;
  contador = 0;
  }
}
//----------------------------------------------------------------------------------------------
function menu(){ // Menu principal
  fill(155,216,255);
  rect(rectx, recty, rectsizex, 50, 15)
  fill(0,0,0);
  
  textFont('Verdana')
  textSize(48);
  textAlign(CENTER, TOP);
  text("Jogo do artnoC", 400, 65);
  
  textSize(32);
  text("Jogar", 400, 200);
  text("Instruções", 400, 260);

  text("Créditos", 400, 320);
  textFont('TimesNewRoman')
  textSize(12);
  if(opcao == 1){
    rectsizex = 110;
    rectx = 345;
    recty = 190;
  }
  if(opcao == 2){
    rectsizex = 190;
    rectx = 305;
    recty = 250;
  }
  if(opcao == 3){
    rectsizex = 150;
    rectx = 325;
    recty = 310;
  }
  if (mouseX < 465 && mouseX > 335) {
    if (mouseY > 185 && mouseY < 240) {
        opcao = 1;
    }
    if (mouseY > 250 && mouseY < 300) {
        opcao = 2;
    }
    if (mouseY > 310 && mouseY < 360) {
        opcao = 3;
    }
  }
}
//----------------------------------------------------------------------------------------------
function jogar(){ // Jogo
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  textSize(48);
  textAlign(CENTER, TOP);
  textFont('Verdana')
  text("Palavra", 400, 45);
  
  if(mouseX < 755 && mouseX > 645){
    if(mouseY > 40 && mouseY < 65){
      fill(155,216,255);
      rect(645,40,110,30,15);
      fill(0,0,0);
    }
  }


  if(palavra != ""){
    fill(125,156,255);
    ellipse( 400, 160, (20*letras), 50)
    textSize(24);
    fill(155,216,255)
    rect(rectx, rectyjogo, 110, 50, 15)
    fill(0,0,0);
    textAlign(CENTER, TOP);
    text("Fase 1", 400, 250);
    text("Fase 2", 400, 310);
    text("Fase 3", 400, 370);
    if (mouseX < 465 && mouseX > 335) {
      if (mouseY > 21 && mouseY < 290) {
        opcaojogo = 4;
      }
      if (mouseY > 290 && mouseY < 350) {
        opcaojogo = 5;
      }
      if (mouseY > 350 && mouseY < 400) {
        opcaojogo = 6;
      }
    }
    if(opcaojogo == 4){
      rectsizex = 110;
      rectx = 345;
      rectyjogo = 235;
    }
    if(opcaojogo == 5){
      rectsizex = 170;
      rectx = 345;
      rectyjogo = 295;
    }
    if(opcaojogo == 6){
      rectsizex = 90;
      rectx = 345;
      rectyjogo = 355;
    }
  }

  text(palavra, 400, 150);
  textSize(18)
  textFont('Impact');
  text("Voltar", 60, 40);
  textAlign(LEFT, TOP);
  text("Gerar palavra", 650, 45);
}
//----------------------------------------------------------------------------------------------
function controles(){ // Controles

  textAlign(CENTER, TOP);
  image(backdescricao, 0, 0)
  textFont('Impact');
  textSize(18);
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  text("Voltar", 60, 40);
}
//----------------------------------------------------------------------------------------------
function sobre(){ // Sobre 
  image(backcreditos, 0, 0)
  textSize(48);
  textAlign(CENTER, TOP);
  textFont('Verdana')
  textSize(18);
  textFont('Impact');
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  text("Voltar", 60, 40);
}
//----------------------------------------------------------------------------------------------
function fase1(){
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  textAlign(CENTER, TOP);
  if(palavrateste == palavracontra && palavra != ""){
    textSize(48);
    textFont('Verdana')
    text("Parabéns, você acertou!", 400, 200);
    if(contarsom == false){
      contarsom = true;
      victorysound.play();
    }
  }
  if(palavrateste != palavracontra && mudado == 1){
    textSize(48);
    text("Você errou", 400, 145)
    text("Volte e tente novamente", 400, 200)
    if(mouseX < 550 && mouseX > 400){
      if(mouseY > 100 && mouseY < 120){
        fill(155,216,255);
        rect(400,100,150,24,15)
        fill(0,0,0);
      }
    }
    if(contarsom == false){
      contarsom = true;
      failsound.play();
    }
  }
  textSize(18);
  textFont('Impact');
  text("Voltar", 60, 40);
}
//----------------------------------------------------------------------------------------------
function fase2(){
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  textAlign(CENTER, TOP);
  if(mudado == 1 && faltaletras == false){
    for(c = 0; c < 5; c++){
        acertofase2 = false;
      if(palavraminuscula[0] == palavra5[c][0] || palavra[0] == palavra5[c][0]){
        acertofase2 = true;
      }
    }
  }
  if(acertofase2 == true){
    textSize(48);
    textFont('Verdana')
    text("Parabéns, você acertou!", 400, 200);
    fase3ready = true;
    if(contarsom == false){
      contarsom = true;
      victorysound.play();
      aleatoriofase3();
    }
  }
  if(acertofase2 == false){
    textSize(48);
    text("Volte e tente novamente", 400, 200);
    if(contarsom == false){
      contarsom = true;
      failsound.play();
    }
    if(faltaletras == false && palavraigualfase2 == false){
      text("Você errou pelo menos uma palavra", 400, 145) 
    }
    if(faltaletras == true){
      textSize(30);
      text("Digite uma palavra que contenha mais que uma letra", 400, 155)
    }
    if(palavraigualfase2 == true && faltaletras == false){
      textSize(30);
       text("Digite uma palavra diferente da palavra gerada", 400, 155)
    }
  }
    
  if(mouseX < 550 && mouseX > 400){
    if(mouseY > 100 && mouseY < 120){
      fill(155,216,255);
      rect(400,100,150,24,15)
      fill(0,0,0);
    }
  }
  textSize(18);
  textFont('Impact');
  text("Voltar", 60, 40);
}
//----------------------------------------------------------------------------------------------
function fase3(){
   if(fase3win == true){ 
    textSize(48);
    textFont('Verdana')
    text("Parabéns, você acertou!", 400, 200);
    fase3ready = true;
    if(contarsom == false){
      contarsom = true;
      victorysound.play();
    }
   }
  else{
    textSize(48);
    textAlign(CENTER, TOP)
    text("Você errou", 400, 145)
    text("Volte e tente novamente", 400, 200)
    if(mouseX < 550 && mouseX > 400){
      if(mouseY > 100 && mouseY < 120){
        fill(155,216,255);
        rect(400,100,150,24,15)
        fill(0,0,0);
      }
    }
    if(contarsom == false){
      contarsom = true;
      failsound.play();
    }
  }
  textAlign(CENTER, TOP);
  textFont('Impact');
  textSize(18);
  if(mouseX < 90 && mouseX > 27){
    if(mouseY > 35 && mouseY < 70){
      fill(155,216,255);
      rect(30,33,60,35,15)
      fill(0,0,0);
    }
  }
  text("Voltar", 60, 40);
}
//----------------------------------------------------------------------------------------------
function keyPressed(){ // Mapeamento de teclas
  if(tela == 0){
    if(key=="ArrowUp" && recty > 200){
      recty -= 60;
    opcao--}
    if(key=="ArrowDown" && recty < 300){
      recty += 60;
      opcao++}
  }
  if(tela == 1){
    if(palavra != "__________"){
      if(key=="ArrowUp" && rectyjogo > 250){
        rectyjogo -= 60;
      opcaojogo--}
      if(key=="ArrowDown" && rectyjogo < 300){
        rectyjogo += 60;
        opcaojogo++}
    }
  }
  if(key=="Escape"){
    if (tela == 0){
    alert("Você saiu do jogo")}
    if(tela > 0 && tela < 4){
      tela = 0;
    }
    if(tela > 3 && tela < 7){
      tela = 1;
      mudado = 0;
      acertofase2 = true;
      faltaletras = false;
      palavraigualfase2 = false;
    }
  }
}
function keyReleased(){
  if(key=="Enter" && alternartela == 0){
    if(tela == 0){
      tela = opcao;
      alternartela = 1;
    }
  }
  if(key=="Enter" && alternartela == 0){
    if(tela == 1){
      if(palavra != ""){
          tela = opcaojogo;
          alternartela = 1;
          if(opcaojogo == 4){
            palavrateste = prompt("Digite o inverso da palavra " + palavra + "!");
            mudado = 1;
          }
          if(opcaojogo == 5){
            if(mudado == 0){
              for(c = 0; c < 5; c++){
                palavra5[c] = prompt("Digite uma palavra que começe com letra " + palavra[0] + "! (cinco vezes)")
                letrasfase2 = palavra5[c].length
                if(letrasfase2 < 2){
                  faltaletras = true;
                  acertofase2 = false;
                }
                if(palavra5[c] == palavraminuscula){
                  palavraigualfase2 = true;
                  acertofase = false;
                }
              }
              mudado = 1;
            }
          }
          if(opcaojogo == 6){
            aleatoriofase3();
            palavrateste = prompt("Digite o inverso da palavra " + palavrafase3 + "!");
            mudado = 1;
          }
      }
    
      if(palavra == ""){
        aleatorio();
      }
    }
  }  
}
//----------------------------------------------------------------------------------------------
function mouseClicked(){
  clicksound.play();
  if(tela == 0){
    if (mouseX < 465 && mouseX > 335) {
      if (mouseY > 185 && mouseY < 240) {
        tela = 1;
        alternartela = 0;
      }
      if (mouseY > 250 && mouseY < 300) {
        tela = 2;
      }
      if (mouseY > 310 && mouseY < 360) {
        tela = 3;
      }
    }
  }
  if(tela == 1){
    if(mouseX < 755 && mouseX > 645){
      if(mouseY > 40 && mouseY < 65){
        aleatorio();
      }
    }
    if(palavra != ""){
      if (mouseX < 465 && mouseX > 335) {
        if (mouseY > 240 && mouseY < 290) {
          tela = 4;
          mudado = 0;
        }
        if (mouseY > 290 && mouseY < 340) {
          tela = 5;
          mudado = 0;
          faltaletras = false;
          acertofase2 = true;
          palavraigualfase2 = false;
        }
        if (mouseY > 340 && mouseY < 400) {
          if(fase3ready == true){
            tela = 6;
            aleatoriofase3();
            palavrateste3 = prompt("Digite o inverso da palavra " + palavrafase3 + "!");
            if(palavrateste3 == palavracontrafase3){
              fase3win = true;
            }
            if(palavrateste3 != palavracontrafase3){
              fase3win = false;
            }
          }
          else{
            alert("Primeiro, passe pela fase 2.")
          }
        }
      }
    }
  }
  if(tela == 4){
    if(mudado == 0){
      if (opcaojogo == 4) {
        palavrateste = prompt("Digite o inverso da palavra " + palavra + "!")
        mudado = 1;
      }
    }
  }
  if(tela == 5){
    if(mudado == 0){
      if(opcaojogo == 5){
        for(c = 0; c < 5; c++){
          palavra5[c] = prompt("Digite uma palavra que começe com letra " + palavra[0] + "! (cinco vezes)")
          letrasfase2 = palavra5[c].length
          if(letrasfase2 < 2){
            faltaletras = true;
            acertofase2 = false;
          }
          if(palavra5[c] == palavraminuscula || palavra5[c] == palavra){
            palavraigualfase2 = true;
            acertofase = false;
          }
        }
          mudado = 1;
      }
    }
  }
  if(tela > 0 && tela < 4){
    if(mouseX < 90 && mouseX > 30){
      if(mouseY > 33 && mouseY < 70){
        tela = 0;
      }
    }
  }
  if(tela > 3 && tela < 7){
    if(mouseX < 90 && mouseX > 30){
      if(mouseY > 33 && mouseY < 70){
        tela = 1;
      }
    }
  }
}
//----------------------------------------------------------------------------------------------
function aleatorio(){
  numeroaleatorio = parseInt(Math.random() * (0, 49));
  palavra = banco[numeroaleatorio];
  palavraminuscula = palavra.toLowerCase();
  letras = palavra.length
  trocarpalavra = 0;
  palavracontra = ""
  while(trocarpalavra < letras){
    trocarpalavra++
    palavracontra = palavracontra + palavra[(letras - trocarpalavra)]
  }
  palavracontra = palavracontra.toLowerCase();
  return
}
function aleatoriofase3(){
  numeroaleatorio4 = parseInt(Math.random() * (0, 4));
  palavrafase3 = palavra5[numeroaleatorio4];
  trocarpalavrafase3 = 0;
  letrasfase3 = palavrafase3.length
  palavracontrafase3 = ""
  while(trocarpalavrafase3 < letrasfase3){
    trocarpalavrafase3++
    palavracontrafase3 = palavracontrafase3 + palavrafase3[(letrasfase3 - trocarpalavrafase3)]
  }
  palavracontrafase3 = palavracontrafase3.toLowerCase();
}
//----------------------------------------------------------------------------------------------
var banco = ["Ameixa", "Morango", "Pepino", "Abacate", "Abacaxi", "Manga", "Acerola", "Banana", "Laranja", "Melancia", "Bahia", "Brasil", "Amazônia", "Pernambuco", "Paraná", "Recife", "Manaus", "Curitiba", "Ceará", "Natal", "Abelha", "Leão", "Tigre", "Elefante", "Gato", "Cachorro", "Ovelha", "Peixe", "Galinha", "Pato", "Lápis", "Borracha", "Azul", "Tesoura", "Papel", "Cola", "Armário", "Carro", "Moto", "Caneta", "Futebol", "Voley", "Natação", "Atletismo", "Computador", "Televisão", "Festa", "Amigo", "Celular", "Videogame"]