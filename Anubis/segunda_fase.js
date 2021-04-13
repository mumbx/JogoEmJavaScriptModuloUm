



function segundaFase(){    
    
    var acertou = `<head>

    <meta charset="UTF-8">                   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estiloanubis.css">
    <title>FASE - 1</title>

    </head>
    
    <div class="acertou">

    <h1>Você acertou</h1>

    <h2>Clique no botão abaixo para avançar</h2>

    <a href="anubis_terceira_fase.html"><button>Avançar</button><a>

    <div>`

    var gameOver = `<head>

                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="estiloanubis.css">
                    <title>FASE - 1</title>

                    </head>          
                    
                    <div class="gameover">

                    <h1> Você Errou </h1>

                    <img style="width:25%" src="../gameover.png">
                    <a href="../index.html"><button>Jogar Novamente</button><a>
    
                    <div>`

    var opcao = prompt("Digite a opção escolhida");

    if(opcao == 2)
    {
        document.write(acertou);        
    }
    else if(opcao==1){

        document.write(gameOver);
        
    }  
    else
    {
        if((opcao > 2) || (opcao < 0))
        {
            return segundaFase()
        }

    }
}

