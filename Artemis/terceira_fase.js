



function terceiraFase(){    
    
    var acertou = `<head>

    <meta charset="UTF-8">                   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estiloartemis.css">
    <title>FASE - 1</title>

    </head>
    
    <div class="acertou">

    <h1>Você Venceu!</h1>

    <img src="../artemis.png">

    <h2>Clique no botão abaixo para escolher outro deus</h2>

    <a href="../index.html"><button>Jogar Novamente</button><a>

    <div>`

    var gameOver = `<head>

                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="estiloartemis.css">
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
            return terceiraFase()
        }

    }
}

