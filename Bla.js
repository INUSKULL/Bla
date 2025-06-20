
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
    let theOnlyThingTheyFearIsYou = new Audio('Music/The-Only-Thing-They-Fear-is-You-Mick-Gordon.mp3');
   
    switch(n){
        case 1:
            theOnlyThingTheyFearIsYou.src = 'Music/The-Only-Thing-They-Fear-is-You-Mick-Gordon.mp3';
        break;
    }

    theOnlyThingTheyFearIsYou.play();
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

function descarregar(){

    let descarregarArmas = document.querySelector('.doomsection');

    if(descarregarArmas){
        descarregarArmas.innerHTML = '';
        alert('Munições Descarregadas')
    }

}