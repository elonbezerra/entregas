let move = 0;

function tower(n, origem='ORIGEM' , auxiliar='AUXILIAR', destino='DESTINO'){
    if (n===0) {
        return
    }

    tower(n-1, origem, destino, auxiliar);
    move++;

    document.querySelector('#disks').innerHTML += `MOVIMENTO ${move} -> DISCO ${n} VAI DE ${origem} PARA ${destino}<br>`
    tower(n-1, destino, auxiliar, origem);
}

function convertName() {
    const nome = document.querySelector('#nome-completo').value.trim()
    let spearedName =[];
    let finalString = "";
    spearedName = nome.split(" ");
    finalString = `${spearedName[spearedName.length - 1]}, ${spearedName[0]}`;

    for (let i = 1; i < spearedName.length-1; i++) {
        finalString += ` ${spearedName[i][0]}`;
    }
    document.querySelector("#saida-nome").value = finalString;
}