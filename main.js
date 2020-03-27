// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser :male-farmer:);

var nomeUtente, kmDaFare, anniUtente, nomeUtenteInput, kmDaFareInput, anniUtenteInput, prezzoUnKM, prezzoViaggio, risultatoCalcolo, numeroCarrozza, codiceBiglietto;

// input nome utente
nomeUtente = document.getElementById('nome');
// input km utente
kmDaFare = document.getElementById('km');
// input età utente
anniUtente = document.getElementById('anni');

// bottoner genera e bottone annulla
var bottoneGenera = document.getElementById('genera');
var bottoneAnnulla = document.getElementById('annulla');

// gestisco gli effetti al click sul bottone genera
bottoneGenera.addEventListener("click",
  function(){
    // sul click salvo i valori degli input
    nomeUtenteInput = nomeUtente.value;
    kmDaFareInput = kmDaFare.value;
    anniUtenteInput = anniUtente.value;

    // inserisco le condizioni per il calcolo corretto del prezzo dei biglietti
    prezzoUnKM=0.21;
    if (anniUtenteInput<18){
      //sconto del 20% perché restituisco l'80% del prezzo del biglietto
      prezzoViaggio = (((prezzoUnKM * kmDaFareInput)/5)*4);
      document.getElementById('offerta').innerHTML = 'Biglietto Minorenni';
    } else if (anniUtenteInput>65){
      //sconto del 40% perché restituisco il 60% del prezzo del biglietto
      prezzoViaggio = (((prezzoUnKM * kmDaFareInput)/5)*3);
    document.getElementById('offerta').innerHTML = 'Biglietto Senior';
    } else {
      prezzoViaggio = prezzoUnKM*kmDaFareInput;
      document.getElementById('offerta').innerHTML = 'Biglietto Standard';
    }

    // li stampo in console
    console.log(nomeUtenteInput, kmDaFareInput, anniUtenteInput, prezzoViaggio);

    //gestisco la casella a scomaprsa
    risultatoCalcolo = document.getElementById("risultatoCalcolo");
    risultatoCalcolo.style.display="block";

    //Gestisco le variabili che voglio cambino a ogni click
    numeroCarrozza= Math.floor(Math.random()*8+1);
    codiceBiglietto=Math.floor(Math.random()*9999+90000)

    // stampo nel documento le cose che mi servono
    document.getElementById('nomePasseggero').innerHTML = nomeUtenteInput;
    document.getElementById('carrozza').innerHTML = 'Carrozza '+ numeroCarrozza;
    document.getElementById('codiceBiglietto').innerHTML = codiceBiglietto;
    document.getElementById('costoBiglietto').innerHTML = prezzoViaggio.toFixed(2) + '€';
  }
);

// gestisco gli effetti al click sul bottone annulla
bottoneAnnulla.addEventListener("click",
  function(){

    //svuoto gli elementi input riempiti dall'utente se è cliccato il bottone annulla
    nomeUtente.value = "";
    kmDaFare.value = "";
    anniUtente.value = "";

    //gestisco la casella a scomaprsa
    risultatoCalcolo = document.getElementById("risultatoCalcolo");
    risultatoCalcolo.style.display="none";

    // resetto il documento
    document.getElementById('nomePasseggero').innerHTML ="";
    document.getElementById('carrozza').innerHTML = "";
    document.getElementById('codiceBiglietto').innerHTML = "";
    document.getElementById('costoBiglietto').innerHTML = "";
  }
);
