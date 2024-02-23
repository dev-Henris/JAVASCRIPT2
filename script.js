const numberGenerator = document.querySelector (".sorteador")


function buttonClick() { 

    const entre = Math.ceil(document.querySelector (".input-entre").value)
    const e = Math.floor(document.querySelector (".input-e").value)



const numero = Math.floor(Math.random() * (e - entre + 1)) + entre; 



if (entre>= e) { 

    alert ("O primeiro valor, tem que ser MENOR que o segundo valor!!!")
}


if (entre<=e ) { alert ("O número sorteado é: " + (numero)); }

}


numberGenerator.addEventListener ("click" , buttonClick)