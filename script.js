const numberGenerator = document.querySelector (".sorteador")


function buttonClick() { 

    const entre = Math.ceil(document.querySelector (".input-entre").value)
    const e = Math.floor(document.querySelector (".input-e").value)



const numero = Math.floor(Math.random() * (e - entre + 1)) + entre; 

alert ("O número sorteado é: " + (numero)); 

}


numberGenerator.addEventListener ("click" , buttonClick)