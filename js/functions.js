var resposta = null;
var regra = 'R1';
var nome_json;
var final = false;
var anterior = null;
var num = 1;

// pré carregando imagens
var Andréa = new Image();
Andréa.src = "images/andrea.png";
var Adriana = new Image();
Adriana.src = "images/adriana.png";
var Black = new Image();
Black.src = "images/black.png";
var Chico = new Image();
Chico.src = "images/chico.png";
var Eliana = new Image();
Eliana.src = "images/eliana.png";
var Humberto = new Image();
Humberto.src = "images/humberto.png";
var Ivete = new Image();
Ivete.src = "images/ivete.png";
var Julião = new Image();
Julião.src = "images/juliao.png";
var Kelton = new Image();
Kelton.src = "images/kelton.png";
var Kléber = new Image();
Kléber.src = "images/kleber.png";
var Marar = new Image();
Marar.src = "images/marar.png";
var Márcia = new Image();
Márcia.src = "images/marcia.png";
var Morgado = new Image();
Morgado.src = "images/morgado.png";
var Nilceu = new Image();
Nilceu.src = "images/nilceu.png";
var Papa = new Image();
Papa.src = "images/papa.png";
var Patrícia = new Image();
Patrícia.src = "images/patricia.png";
var Perea = new Image();
Perea.src = "images/perea.png";
var Remo = new Image();
Remo.src = "images/remo.png";
var Renê = new Image();
Renê.src = "images/rene.png";
var Sacoman = new Image();
Sacoman.src = "images/sacoman.png";
var Sementille = new Image();
Sementille.src = "images/sementille.png";
var Simone = new Image();
Simone.src = "images/simone.png";
var Tati = new Image();
Tati.src = "images/tati.png";
var Toninho = new Image();
Toninho.src = "images/toninho.png";
var Wilson = new Image();
Wilson.src = "images/wilson.png";

// função chamada ao clicar botão sim ou não
function clicouBotao(resposta) {
    setRegra(resposta);
    if (regra.length > 3)
        final = true;
    else
        setPergunta();
    if (final)
        setFinal(resposta);
}

// define qual é a regra atual de acordo com o json e os cliques
function setRegra(resposta) {
    if (resposta == "sim")
        regra = eval("regras." + regra + "[0].sim");
    else
        regra = eval("regras." + regra + "[0].nao");
}

// pega a pergunta do json e coloca na página html
function setPergunta() {
    nome_json = "regras." + regra + "[0].pergunta";
    num++;
    $(".perguntas h2").html(eval(nome_json));
    $(".num").html(num);
}

// pega o nome da foto no json e coloca na página html
function setFoto(resposta) {
    if (regra != "Ninguém")
        $(".perguntas img").attr("src", eval(regra).src);
    else
        $(".perguntas img").attr("src", Ninguem.src);
}

// se é o nome de alguém é porque é a resposta, então mostra na página html
function setFinal(resposta) {
    setFoto(resposta);
    $(".perguntas p").html(num+" perguntas até a resposta!");
    $(".perguntas h2").html("Você escolheu " + regra);
}

// no final ele mostra uma mensagem positiva se acertou e uma negativa se errou
function acabou(bool) {
    $(".botoes").css("display", "none");
    $(".final").css("display", "block");
    if (bool == 'sim'){
      $(".perguntas h2").html("Uhul!");
      $(".perguntas p").html("Esse sistema é mesmo um especialista!");
    }
    else{
      $(".perguntas h2").html("Ops!");
      $(".perguntas p").html("Acho que o especialista faltou hoje.");
    }
}

// define qual o professor que o usuário escolheu
function setEscolhido(nome){
    $(".escolhido p").html($(nome).attr("alt"));
    $(".escolhido img").attr("src", $(nome).attr("src"));
}

$(function() {
  $(".data-h").click(function() {
        window.document.location = $(this).data("href");
    });
  
  $(".escolheu").click(function() {
        if ($(".prof-escolhido")[0]){
          $(".fotos-escolher").css("display", "none");
          $(".jogo").css("display", "block");
        }
    });

  
  $(".fotos-escolher img").click(function() {
      $(this).addClass("prof-escolhido");
      $(anterior).removeClass("prof-escolhido");
      anterior = this;
      setEscolhido(this);
    });
  
   $(".sim").click(function() {
        if (!final)
            clicouBotao('sim');
        else
            acabou('sim');
    });

    $(".nao").click(function() {
        if (!final)
            clicouBotao('nao');
        else
            acabou('nao');
    });
  
});