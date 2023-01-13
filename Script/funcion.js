let vocales = ["a","e","i","o","u"];
let vocalesEn = ["ai","enter","imes","ober","ufat", " "];

function encriptar(){
    let text1 = document.getElementById("message");
    if (/^[a-z\s]+$/.test(text1.value)) {
        encriptar();
    }
}

function encriptar(){
    let frase = [];
    let text1 = document.getElementById("menssage");
    let text2 = document.getElementById("resultado");

    for(let x=0; x < vocales.length;x++){
        if(vocales.indexOf(text1.value[x]) != -1){
            for(let y=0;y<vocales.length;y++){
                if(text1.value[x] == vocales[y]){
                    frase.push(vocalesEn[y])
                }
            }
        }else{
            frase.push(text1.value[x]);
        }
    }

    text2.value = frase.join(" ");
}

function desencriptar(){
    let message1 = document.getElementById("resultado");
    let frase = document.querySelector("#menssage").value;
    let newF = frase.replace(/ober/g, "o").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ufat/g, "u");
    message1.value = newF;
}

function copiar(){
    var messageC = document.getElementById("resultado").value;

    navigator.clipboard.writeText(messageC)
    .then(() => {
        document.getElementById("menssage").value=" ";
        document.getElementById("resultado").value=" ";
    })
}