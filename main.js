document.getElementById('base').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Cores da Base";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";
}
else{document.getElementById("h22").innerHTML = "Cores da Base";}
});

document.getElementById('gola1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
  document.getElementById("h22").innerHTML = "Cores da Gola Externa";
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletebaselabel').style.display = "block";}
  else{
      document.getElementById("h22").innerHTML = "Cores da Gola Externa";
  }
});
document.getElementById('punho').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores do Punho";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores do Punho";
      }
});
document.getElementById('vista').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Manga";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Manga";
      }
});
document.getElementById('botoes').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores dos Botões";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores dos Botões";
      }
});
document.getElementById('gola2').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Gola Interna";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Gola Interna";
      }
});
document.getElementById('vista1').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Carcela 1";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 1";
      }
});
document.getElementById('bolsobtn').addEventListener('click',function(e){
  if(window.innerWidth <= 768){
      document.getElementById("h22").innerHTML = "Cores da Carcela 2";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";}
      else{
          document.getElementById("h22").innerHTML = "Cores da Carcela 2";
      }
});


  document.getElementById('cor1').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fff";
        document.getElementById('corbasecostas').style.fill = "#fff";
        document.getElementById('CB').style.backgroundColor = "#fff";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fff";
        document.getElementById('ge').style.backgroundColor = "#fff";
        document.getElementById('golaEE').style.fill = "#fff";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fff";
        document.getElementById('punho1').style.fill = "#fff";
        document.getElementById('punho3').style.fill = "#fff";
        document.getElementById('punho4').style.fill = "#fff";
        document.getElementById('PU').style.backgroundColor = "#fff";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fff");
        document.getElementById('manga1').style.fill = "#fff";
        document.getElementById('VE').style.backgroundColor = "#fff";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fff";
        document.getElementById('BT').style.backgroundColor = "#fff";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fff";
        document.getElementById('gi').style.backgroundColor = "#fff";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fff";
        document.getElementById('VD').style.backgroundColor = "#fff";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fff";
        document.getElementById('BSF').style.backgroundColor = "#fff";
    }
      });
    document.getElementById('cor2').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#bfbcac";
        document.getElementById('corbasecostas').style.fill = "#bfbcac";
        document.getElementById('CB').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#bfbcac";
        document.getElementById('ge').style.backgroundColor = "#bfbcac";
        document.getElementById('golaEE').style.fill = "#bfbcac";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#bfbcac";
        document.getElementById('punho1').style.fill = "#bfbcac";
        document.getElementById('punho3').style.fill = "#bfbcac";
        document.getElementById('punho4').style.fill = "#bfbcac";
        document.getElementById('PU').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bfbcac");
        document.getElementById('manga1').style.fill = "#bfbcac";
        document.getElementById('VE').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#bfbcac";
        document.getElementById('BT').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#bfbcac";
        document.getElementById('gi').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#bfbcac";
        document.getElementById('VD').style.backgroundColor = "#bfbcac";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#bfbcac";
        document.getElementById('BSF').style.backgroundColor = "#bfbcac";
    }
      });
  document.getElementById('cor3').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#bdad92";
        document.getElementById('corbasecostas').style.fill = "#bdad92";
        document.getElementById('CB').style.backgroundColor = "#bdad92";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#bdad92";
        document.getElementById('ge').style.backgroundColor = "#bdad92";
        document.getElementById('golaEE').style.fill = "#bdad92";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#bdad92";
        document.getElementById('punho1').style.fill = "#bdad92";
        document.getElementById('punho3').style.fill = "#bdad92";
        document.getElementById('punho4').style.fill = "#bdad92";
        document.getElementById('PU').style.backgroundColor = "#bdad92";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#bdad92");
        document.getElementById('manga1').style.fill = "#bdad92";
        document.getElementById('VE').style.backgroundColor = "#bdad92";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#bdad92";
        document.getElementById('BT').style.backgroundColor = "#bdad92";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#bdad92";
        document.getElementById('gi').style.backgroundColor = "#bdad92";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#bdad92";
        document.getElementById('VD').style.backgroundColor = "#bdad92";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#bdad92";
        document.getElementById('BSF').style.backgroundColor = "#bdad92";
    }
      });
  document.getElementById('cor4').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#b0bbb6";
        document.getElementById('corbasecostas').style.fill = "#b0bbb6";
        document.getElementById('CB').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#b0bbb6";
        document.getElementById('ge').style.backgroundColor = "#b0bbb6";
        document.getElementById('golaEE').style.fill = "#b0bbb6";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#b0bbb6";
        document.getElementById('punho1').style.fill = "#b0bbb6";
        document.getElementById('punho3').style.fill = "#b0bbb6";
        document.getElementById('punho4').style.fill = "#b0bbb6";
        document.getElementById('PU').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#b0bbb6");
        document.getElementById('manga1').style.fill = "#b0bbb6";
        document.getElementById('VE').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#b0bbb6";
        document.getElementById('BT').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#b0bbb6";
        document.getElementById('gi').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#b0bbb6";
        document.getElementById('VD').style.backgroundColor = "#b0bbb6";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#b0bbb6";
        document.getElementById('BSF').style.backgroundColor = "#b0bbb6";
    }
      });
  document.getElementById('cor5').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#9ea2a2";
        document.getElementById('corbasecostas').style.fill = "#9ea2a2";
        document.getElementById('CB').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#9ea2a2";
        document.getElementById('ge').style.backgroundColor = "#9ea2a2";
        document.getElementById('golaEE').style.fill = "#9ea2a2";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#9ea2a2";
        document.getElementById('punho1').style.fill = "#9ea2a2";
        document.getElementById('punho3').style.fill = "#9ea2a2";
        document.getElementById('punho4').style.fill = "#9ea2a2";
        document.getElementById('PU').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#9ea2a2");
        document.getElementById('manga1').style.fill = "#9ea2a2";
        document.getElementById('VE').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#9ea2a2";
        document.getElementById('BT').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#9ea2a2";
        document.getElementById('gi').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#9ea2a2";
        document.getElementById('VD').style.backgroundColor = "#9ea2a2";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#9ea2a2";
        document.getElementById('BSF').style.backgroundColor = "#9ea2a2";
    }
      });
  document.getElementById('cor6').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#90bdd8";
        document.getElementById('corbasecostas').style.fill = "#90bdd8";
        document.getElementById('CB').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#90bdd8";
        document.getElementById('ge').style.backgroundColor = "#90bdd8";
        document.getElementById('golaEE').style.fill = "#90bdd8";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#90bdd8";
        document.getElementById('punho1').style.fill = "#90bdd8";
        document.getElementById('punho3').style.fill = "#90bdd8";
        document.getElementById('punho4').style.fill = "#90bdd8";
        document.getElementById('PU').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#90bdd8");
        document.getElementById('manga1').style.fill = "#90bdd8";
        document.getElementById('VE').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#90bdd8";
        document.getElementById('BT').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#90bdd8";
        document.getElementById('gi').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#90bdd8";
        document.getElementById('VD').style.backgroundColor = "#90bdd8";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#90bdd8";
        document.getElementById('BSF').style.backgroundColor = "#90bdd8";
    }
      });
  document.getElementById('cor7').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#62a1cd";
        document.getElementById('corbasecostas').style.fill = "#62a1cd";
        document.getElementById('CB').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#62a1cd";
        document.getElementById('ge').style.backgroundColor = "#62a1cd";
        document.getElementById('golaEE').style.fill = "#62a1cd";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#62a1cd";
        document.getElementById('punho1').style.fill = "#62a1cd";
        document.getElementById('punho3').style.fill = "#62a1cd";
        document.getElementById('punho4').style.fill = "#62a1cd";
        document.getElementById('PU').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#62a1cd");
        document.getElementById('manga1').style.fill = "#62a1cd";
        document.getElementById('VE').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#62a1cd";
        document.getElementById('BT').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#62a1cd";
        document.getElementById('gi').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#62a1cd";
        document.getElementById('VD').style.backgroundColor = "#62a1cd";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#62a1cd";
        document.getElementById('BSF').style.backgroundColor = "#62a1cd";
    }
      });
  document.getElementById('cor8').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#0091ba";
        document.getElementById('corbasecostas').style.fill = "#0091ba";
        document.getElementById('CB').style.backgroundColor = "#0091ba";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#0091ba";
        document.getElementById('ge').style.backgroundColor = "#0091ba";
        document.getElementById('golaEE').style.fill = "#0091ba";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#0091ba";
        document.getElementById('punho1').style.fill = "#0091ba";
        document.getElementById('punho4').style.fill = "#0091ba";
        document.getElementById('punho3').style.fill = "#0091ba";
        document.getElementById('PU').style.backgroundColor = "#0091ba";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#0091ba");
        document.getElementById('manga1').style.fill = "#0091ba";
        document.getElementById('VE').style.backgroundColor = "#0091ba";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#0091ba";
        document.getElementById('BT').style.backgroundColor = "#0091ba";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#0091ba";
        document.getElementById('gi').style.backgroundColor = "#0091ba";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#0091ba";
        document.getElementById('VD').style.backgroundColor = "#0091ba";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#0091ba";
        document.getElementById('BSF').style.backgroundColor = "#0091ba";
    }
      });
  document.getElementById('cor9').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#3d474a";
        document.getElementById('corbasecostas').style.fill = "#3d474a";
        document.getElementById('CB').style.backgroundColor = "#3d474a";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#3d474a";
        document.getElementById('ge').style.backgroundColor = "#3d474a";
        document.getElementById('golaEE').style.fill = "#3d474a";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#3d474a";
        document.getElementById('punho1').style.fill = "#3d474a";
        document.getElementById('punho3').style.fill = "#3d474a";
        document.getElementById('punho4').style.fill = "#3d474a";
        document.getElementById('PU').style.backgroundColor = "#3d474a";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#3d474a");
        document.getElementById('manga1').style.fill = "#3d474a";
        document.getElementById('VE').style.backgroundColor = "#3d474a";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#3d474a";
        document.getElementById('BT').style.backgroundColor = "#3d474a";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#3d474a";
        document.getElementById('gi').style.backgroundColor = "#3d474a";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#3d474a";
        document.getElementById('VD').style.backgroundColor = "#3d474a";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#3d474a";
        document.getElementById('BSF').style.backgroundColor = "#3d474a";
    }
      });
  document.getElementById('cor10').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fbf981";
        document.getElementById('corbasecostas').style.fill = "#fbf981";
        document.getElementById('CB').style.backgroundColor = "#fbf981";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fbf981";
        document.getElementById('ge').style.backgroundColor = "#fbf981";
        document.getElementById('golaEE').style.fill = "#fbf981";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fbf981";
        document.getElementById('punho1').style.fill = "#fbf981";
        document.getElementById('punho3').style.fill = "#fbf981";
        document.getElementById('punho4').style.fill = "#fbf981";
        document.getElementById('PU').style.backgroundColor = "#fbf981";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fbf981");
        document.getElementById('manga1').style.fill = "#fbf981";
        document.getElementById('VE').style.backgroundColor = "#fbf981";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fbf981";
        document.getElementById('BT').style.backgroundColor = "#fbf981";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fbf981";
        document.getElementById('gi').style.backgroundColor = "#fbf981";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fbf981";
        document.getElementById('VD').style.backgroundColor = "#fbf981";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fbf981";
        document.getElementById('BSF').style.backgroundColor = "#fbf981";
    }
      });
  document.getElementById('cor11').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#224491";
        document.getElementById('corbasecostas').style.fill = "#224491";
        document.getElementById('CB').style.backgroundColor = "#224491";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#224491";
        document.getElementById('ge').style.backgroundColor = "#224491";
        document.getElementById('golaEE').style.fill = "#224491";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#224491";
        document.getElementById('punho1').style.fill = "#224491";
        document.getElementById('punho3').style.fill = "#224491";
        document.getElementById('punho4').style.fill = "#224491";
        document.getElementById('PU').style.backgroundColor = "#224491";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#224491");
        document.getElementById('manga1').style.fill = "#224491";
        document.getElementById('VE').style.backgroundColor = "#224491";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#224491";
        document.getElementById('BT').style.backgroundColor = "#224491";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#224491";
        document.getElementById('gi').style.backgroundColor = "#224491";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#224491";
        document.getElementById('VD').style.backgroundColor = "#224491";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#224491";
        document.getElementById('BSF').style.backgroundColor = "#224491";
    }
      });
      document.getElementById('cor12').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#346d7d";
        document.getElementById('corbasecostas').style.fill = "#346d7d";
        document.getElementById('CB').style.backgroundColor = "#346d7d";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#346d7d";
        document.getElementById('ge').style.backgroundColor = "#346d7d";
        document.getElementById('golaEE').style.fill = "#346d7d";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#346d7d";
        document.getElementById('punho1').style.fill = "#346d7d";
        document.getElementById('punho3').style.fill = "#346d7d";
        document.getElementById('punho4').style.fill = "#346d7d";
        document.getElementById('PU').style.backgroundColor = "#346d7d";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#346d7d");
        document.getElementById('manga1').style.fill = "#346d7d";
        document.getElementById('VE').style.backgroundColor = "#346d7d";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#346d7d";
        document.getElementById('BT').style.backgroundColor = "#346d7d";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#346d7d";
        document.getElementById('gi').style.backgroundColor = "#346d7d";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#346d7d";
        document.getElementById('VD').style.backgroundColor = "#346d7d";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#346d7d";
        document.getElementById('BSF').style.backgroundColor = "#346d7d";
    }
      });
      document.getElementById('cor13').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#6d7774";
        document.getElementById('corbasecostas').style.fill = "#6d7774";
        document.getElementById('CB').style.backgroundColor = "#6d7774";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#6d7774";
        document.getElementById('ge').style.backgroundColor = "#6d7774";
        document.getElementById('golaEE').style.fill = "#6d7774";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#6d7774";
        document.getElementById('punho1').style.fill = "#6d7774";
        document.getElementById('punho3').style.fill = "#6d7774";
        document.getElementById('punho4').style.fill = "#6d7774";
        document.getElementById('PU').style.backgroundColor = "#6d7774";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#6d7774");
        document.getElementById('manga1').style.fill = "#6d7774";
        document.getElementById('VE').style.backgroundColor = "#6d7774";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#6d7774";
        document.getElementById('BT').style.backgroundColor = "#6d7774";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#6d7774";
        document.getElementById('gi').style.backgroundColor = "#6d7774";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#6d7774";
        document.getElementById('VD').style.backgroundColor = "#6d7774";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#6d7774";
        document.getElementById('BSF').style.backgroundColor = "#6d7774";
    }
      });
    document.getElementById('cor14').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#fe350a";
        document.getElementById('corbasecostas').style.fill = "#fe350a";
        document.getElementById('CB').style.backgroundColor = "#fe350a";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#fe350a";
        document.getElementById('ge').style.backgroundColor = "#fe350a";
        document.getElementById('golaEE').style.fill = "#fe350a";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#fe350a";
        document.getElementById('punho1').style.fill = "#fe350a";
        document.getElementById('punho3').style.fill = "#fe350a";
        document.getElementById('punho4').style.fill = "#fe350a";
        document.getElementById('PU').style.backgroundColor = "#fe350a";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#fe350a");
        document.getElementById('manga1').style.fill = "#fe350a";
        document.getElementById('VE').style.backgroundColor = "#fe350a";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#fe350a";
        document.getElementById('BT').style.backgroundColor = "#fe350a";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#fe350a";
        document.getElementById('gi').style.backgroundColor = "#fe350a";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#fe350a";
        document.getElementById('VD').style.backgroundColor = "#fe350a";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#fe350a";
        document.getElementById('BSF').style.backgroundColor = "#fe350a";
    }
      });
        document.getElementById('cor15').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#d13134";
        document.getElementById('corbasecostas').style.fill = "#d13134";
        document.getElementById('CB').style.backgroundColor = "#d13134";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#d13134";
        document.getElementById('ge').style.backgroundColor = "#d13134";
        document.getElementById('golaEE').style.fill = "#d13134";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#d13134";
        document.getElementById('punho1').style.fill = "#d13134";
        document.getElementById('punho3').style.fill = "#d13134";
        document.getElementById('punho4').style.fill = "#d13134";
        document.getElementById('PU').style.backgroundColor = "#d13134";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#d13134");
        document.getElementById('manga1').style.fill = "#d13134";
        document.getElementById('VE').style.backgroundColor = "#d13134";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#d13134";
        document.getElementById('BT').style.backgroundColor = "#d13134";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#d13134";
        document.getElementById('gi').style.backgroundColor = "#d13134";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#d13134";
        document.getElementById('VD').style.backgroundColor = "#d13134";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#d13134";
        document.getElementById('BSF').style.backgroundColor = "#d13134";
    }
      });  
  document.getElementById('cor16').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#782b44";
        document.getElementById('corbasecostas').style.fill = "#782b44";
        document.getElementById('CB').style.backgroundColor = "#782b44";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#782b44";
        document.getElementById('ge').style.backgroundColor = "#782b44";
        document.getElementById('golaEE').style.fill = "#782b44";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#782b44";
        document.getElementById('punho1').style.fill = "#782b44";
        document.getElementById('punho3').style.fill = "#782b44";
        document.getElementById('punho4').style.fill = "#782b44";
        document.getElementById('PU').style.backgroundColor = "#782b44";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#782b44");
        document.getElementById('manga1').style.fill = "#782b44";
        document.getElementById('VE').style.backgroundColor = "#782b44";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#782b44";
        document.getElementById('BT').style.backgroundColor = "#782b44";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#782b44";
        document.getElementById('gi').style.backgroundColor = "#782b44";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#782b44";
        document.getElementById('VD').style.backgroundColor = "#782b44";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#782b44";
        document.getElementById('BSF').style.backgroundColor = "#782b44";
    }
      });
    document.getElementById('cor17').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#20222e";
        document.getElementById('corbasecostas').style.fill = "#20222e";
        document.getElementById('CB').style.backgroundColor = "#20222e";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#20222e";
        document.getElementById('ge').style.backgroundColor = "#20222e";
        document.getElementById('golaEE').style.fill = "#20222e";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#20222e";
        document.getElementById('punho1').style.fill = "#20222e";
        document.getElementById('punho3').style.fill = "#20222e";
        document.getElementById('punho4').style.fill = "#20222e";
        document.getElementById('PU').style.backgroundColor = "#20222e";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#20222e");
        document.getElementById('manga1').style.fill = "#20222e";
        document.getElementById('VE').style.backgroundColor = "#20222e";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#20222e";
        document.getElementById('BT').style.backgroundColor = "#20222e";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#20222e";
        document.getElementById('gi').style.backgroundColor = "#20222e";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#20222e";
        document.getElementById('VD').style.backgroundColor = "#20222e";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#20222e";
        document.getElementById('BSF').style.backgroundColor = "#20222e";
    }
      });
  document.getElementById('cor18').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#15131b";
        document.getElementById('corbasecostas').style.fill = "#15131b";
        document.getElementById('CB').style.backgroundColor = "#15131b";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#15131b";
        document.getElementById('ge').style.backgroundColor = "#15131b";
        document.getElementById('golaEE').style.fill = "#15131b";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#15131b";
        document.getElementById('punho1').style.fill = "#15131b";
        document.getElementById('punho3').style.fill = "#15131b";
        document.getElementById('punho4').style.fill = "#15131b";
        document.getElementById('PU').style.backgroundColor = "#15131b";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#15131b");
        document.getElementById('manga1').style.fill = "#15131b";
        document.getElementById('VE').style.backgroundColor = "#15131b";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#15131b";
        document.getElementById('BT').style.backgroundColor = "#15131b";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#15131b";
        document.getElementById('gi').style.backgroundColor = "#15131b";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#15131b";
        document.getElementById('VD').style.backgroundColor = "#15131b";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#15131b";
        document.getElementById('BSF').style.backgroundColor = "#15131b";
    }
      });
  document.getElementById('cor19').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#00824e";
        document.getElementById('corbasecostas').style.fill = "#00824e";
        document.getElementById('CB').style.backgroundColor = "#00824e";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#00824e";
        document.getElementById('ge').style.backgroundColor = "#00824e";
        document.getElementById('golaEE').style.fill = "#00824e";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#00824e";
        document.getElementById('punho1').style.fill = "#00824e";
        document.getElementById('punho3').style.fill = "#00824e";
        document.getElementById('punho4').style.fill = "#00824e";
        document.getElementById('PU').style.backgroundColor = "#00824e";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#00824e");
        document.getElementById('manga1').style.fill = "#00824e";
        document.getElementById('VE').style.backgroundColor = "#00824e";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#00824e";
        document.getElementById('BT').style.backgroundColor = "#00824e";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#00824e";
        document.getElementById('gi').style.backgroundColor = "#00824e";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#00824e";
        document.getElementById('VD').style.backgroundColor = "#00824e";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#00824e";
        document.getElementById('BSF').style.backgroundColor = "#00824e";
    }
      });
  document.getElementById('cor20').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#1f483b";
        document.getElementById('corbasecostas').style.fill = "#1f483b";
        document.getElementById('CB').style.backgroundColor = "#1f483b";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#1f483b";
        document.getElementById('ge').style.backgroundColor = "#1f483b";
        document.getElementById('golaEE').style.fill = "#1f483b";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#1f483b";
        document.getElementById('punho1').style.fill = "#1f483b";
        document.getElementById('punho3').style.fill = "#1f483b";
        document.getElementById('punho4').style.fill = "#1f483b";
        document.getElementById('PU').style.backgroundColor = "#1f483b";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#1f483b");
        document.getElementById('manga1').style.fill = "#1f483b";
        document.getElementById('VE').style.backgroundColor = "#1f483b";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#1f483b";
        document.getElementById('BT').style.backgroundColor = "#1f483b";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#1f483b";
        document.getElementById('gi').style.backgroundColor = "#1f483b";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#1f483b";
        document.getElementById('VD').style.backgroundColor = "#1f483b";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#1f483b";
        document.getElementById('BSF').style.backgroundColor = "#1f483b";
    }
      });
  document.getElementById('cor21').addEventListener('click', function(e){
    if(document.getElementById('base').checked){
        document.getElementById('corbase').style.fill = "#000";
        document.getElementById('corbasecostas').style.fill = "#000";
        document.getElementById('CB').style.backgroundColor = "#000";
    }if(document.getElementById('gola1').checked){
        document.getElementById('golaE').style.fill = "#000";
        document.getElementById('ge').style.backgroundColor = "#000";
        document.getElementById('golaEE').style.fill = "#000";
    }if(document.getElementById('punho').checked){
        document.getElementById('punho2').style.fill = "#000";
        document.getElementById('punho1').style.fill = "#000";
        document.getElementById('punho3').style.fill = "#000";
        document.getElementById('punho4').style.fill = "#000";
        document.getElementById('PU').style.backgroundColor = "#000";
    }if(document.getElementById('vista').checked){
      document.querySelectorAll(".manga").forEach(v => v.style.fill = "#000");
        document.getElementById('manga1').style.fill = "#000";
        document.getElementById('VE').style.backgroundColor = "#000";
    }if(document.getElementById('botoes').checked){
        document.getElementById('botao').style.fill = "#000";
        document.getElementById('BT').style.backgroundColor = "#000";
    }if(document.getElementById('gola2').checked){   
        document.getElementById('golaI').style.fill = "#000";
        document.getElementById('gi').style.backgroundColor = "#000";
    }if(document.getElementById('vista1').checked){
        document.getElementById('peitilho1').style.fill = "#000";
        document.getElementById('VD').style.backgroundColor = "#000";
    }if(document.getElementById('bolsobtn').checked){
        document.getElementById('peitilho2').style.fill = "#000";
        document.getElementById('BSF').style.backgroundColor = "#000";
    }
      });
  
      //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
    }
  });

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.querySelector('.costas3').style.display = "none";
      document.querySelector('.costaslonga').style.display = "block";
      document.querySelector('.costas5').style.display = "block";
      document.getElementById('manga1').style.display = "none";
      document.getElementById('manga').style.display = "none";
      document.querySelector('.frente4').style.display = "block";
      document.querySelector('.frente3').style.display = "none";
      document.querySelector('.costas4').style.display = "block";
      document.getElementById('punho1').style.display = "none";
      document.getElementById('punho2').style.display = "none";
      document.querySelector('.frente5').style.display = "block";
      document.querySelector('.frente6').style.display = "block";
    }else {
      document.querySelector('.costas3').style.display = "block";
      document.querySelector('.costaslonga').style.display = "none";
      document.querySelector('.costas5').style.display = "none";
      document.getElementById('manga1').style.display = "block";
      document.getElementById('manga').style.display = "block";
      document.querySelector('.frente4').style.display = "none";
      document.querySelector('.frente3').style.display = "block";
      document.querySelector('.costas4').style.display = "none";
      document.getElementById('punho1').style.display = "block";
      document.getElementById('punho2').style.display = "block";
      document.querySelector('.frente5').style.display = "none";
      document.querySelector('.frente6').style.display = "none";
    }
  });



  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "polo.png");
      
    })
  })
 });

//upload
var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

var imga = document.createElement('img');
imga.src = deleteIcon;

var canvas = new fabric.Canvas('list');
let uploader = document.getElementById("uploader");
uploader.addEventListener('change',function(e){
var reader = new FileReader();
reader.onload = function(e) {
var image = new Image();
image.src = e.target.result;
image.onload = function() {
  var img = new fabric.Image(image);
  img.set({
    left: 100,
    top: 60
  });
  img.scaleToWidth(200);
  canvas.add(img).setActiveObject(img).renderAll();
  }
}
reader.readAsDataURL(e.target.files[0]);
setTimeout(() => {
document.getElementById("uploader").value = "";
}, 1)
});
fabric.Object.prototype.controls.deleteControl = new fabric.Control({
x: 0.5,
y: -0.5,
offsetY: 16,
cursorStyle: 'pointer',
mouseUpHandler: deleteObject,
render: renderIcon,
cornerSize: 24
});


function deleteObject(eventData, transform) {
    var target = transform.target;
    var canvas = target.canvas;
        canvas.remove(target);
    canvas.requestRenderAll();
};

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
var size = this.cornerSize;
ctx.save();
ctx.translate(left, top);
ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
ctx.drawImage(imga, -size/2, -size/2, size, size);
ctx.restore();
};


///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.visibility = "visible";
    }else {
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.visibility = "hidden" ;
    }
  });


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.visibility = "visible";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.visibility = "hidden";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});
