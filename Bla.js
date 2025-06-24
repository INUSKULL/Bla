let tocouDoom = false;
let tocouDirgeDisunion = false;
let dirgeDisunion;
let theOnlyThingTheyFearIsYou;

function mostrarLista(){
    let listaAmmo= ['Pistol Ammo', 'Chaingun Ammo', 'Shells', 'Box of Shells'];
    console.clear();
    console.log("DOOM");
    console.log(listaAmmo[0]);
    console.log(listaAmmo[1]);
    console.log(listaAmmo[2]);
    console.log(listaAmmo[listaAmmo.length - 1]);
    alert(listaAmmo);
    
}

function doom(n){
    let doomp = document.querySelector('.doomsection');

    if (!tocouDoom) {
        tocouDoom = true;
        theOnlyThingTheyFearIsYou = new Audio('Music/The-Only-Thing-They-Fear-is-You-Mick-Gordon.mp3');
        theOnlyThingTheyFearIsYou.loop = true;
        theOnlyThingTheyFearIsYou.volume = parseFloat(document.getElementById('volumeRange').value);

        theOnlyThingTheyFearIsYou.play().catch(err => {
            console.error('Erro ao tocar o áudio:', err);
        });

        // Atualiza volume em tempo real com o slider
        document.getElementById('volumeRange').addEventListener('input', function () {
            if (theOnlyThingTheyFearIsYou) {
                theOnlyThingTheyFearIsYou.volume = parseFloat(this.value);
            }
        });
    }

    if (doomp) {
        let doomText = document.createElement('p');
        doomText.textContent = 'DOOM';
        doomText.classList.add('doomp');
        doomp.appendChild(doomText);        
    }
}

function adicionar(n){
    let imagem = document.createElement('img');
    switch(n){
        case 1: 
        imagem.src = 'img/pistol ammo.png';
        imagem.alt = 'Pente de Munição';
        break;

        case 2:
        imagem.src = 'img/chaingun ammo.png';
        imagem.alt = 'Caixa de Munição';
        break;

        case 3:
        imagem.src = 'img/shotgun shells.png';
        imagem.alt = 'Cartuchos';
        break;

        case 4:
        imagem.src = 'img/box of shells.png';
        imagem.alt = 'Caixa de Cartuchos';
        break;
        
        default:
        return;
    }
      const doomsection = document.querySelector(".doomsection");
    if (doomsection) {
        doomsection.appendChild(imagem); 
    } else {
        console.error("Elemento com classe .doomsection não encontrado.");
    }
}

function descarregar(n){
    if(!tocouDirgeDisunion){
        tocouDirgeDisunion = true;
        dirgeDisunion = new Audio('Music/Disunion-Dirge.mp3');
        dirgeDisunion.loop = true;
        dirgeDisunion.volume = parseFloat(document.querySelector('#volumeRange').value);

        switch(n){
            case 1:
                dirgeDisunion.src = 'Music/Disunion-Dirge.mp3';
                break;
        }

        dirgeDisunion.play().catch(err => {
            console.error('Erro ao tocar a música:', err);
        });
    }
    let descarregarArmas = document.querySelector('.doomsection');

    if(descarregarArmas){
        descarregarArmas.innerHTML = '';
        alert('Munições Descarregadas')
    }
    document.getElementById('volumeRange').addEventListener('input', function () {
    if (dirgeDisunion) {
        dirgeDisunion.volume = parseFloat(this.value);
    }
});

}