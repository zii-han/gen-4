function search() {
  var input = document.getElementById("search-box").value.toLowerCase();
  var muridCards = document.querySelectorAll(".murid-card");
  let x = 0;

  // Kondisi khusus jika nilai pencarian adalah "hidden"
  if (input === "farhan" || input === "farhan fauzi") {
    alert("Data " + input + " telah di hapus 🗿");
    sound2();
    clear();
    return;
  }
  
  //toxic detector 
  else if (input === "anjing" || input === "goblok" || input === "anjir" || input === "gobloq" || input === "goblog" || input === "asu" || input === "jancok" || input === "juancok" || input === "tai" || input === "njing" || input === "tahi" || input === "pantek" || input === "anjiang") {
    sound();
    alert("Prit Prit, Gaboleh Toxic!!")
    alert("GABOLEH TOXIC!!")
    clear();
    return;
    console.log(x);
}
  
  //toxic detector v2
  else if (input === "kontol" || input === "memek" || input === "jembut" || input === "puki" || input === "ngentot" || input === "entod" || input === "entot" || input === "ngentod" || input === "sex" || input === "pukimak" || input === "segs" || input === "anak kecil😋" || input === "anak kecil" || input === "loli" || input === "loli😋" || input === "lonte" || input === "bokep" || input === "hentai") {
    alert("LAH NGELUNJAK🗿");
    while (true) {
    sound1;
    }
    //location.reload();
    clear();
    return;
  }
  
  else if (input === "galery" || input === "open galery") {
    window.open("res/Galery.html")
    clear();
    return;
  }
  
  else if (input === "demon" || input === "demon function") {
    clear();
    var o = 3;
    alert(input + " will be start in : " + o);
    var o = 2;
    alert(input + " will be start in : " + o);
    var o = 1;
    alert(input + " will be start in : " + o);
    var o = 0;
    alert(input + " will be start in : " + o);
    alert(input + " running");
    alert("demon ring function is running");
    sound1();
    
   while(true) {
     var cou = 0;
     cou.value = +1;
    alert("Demon Ring Function : " + cou);
     console.log("demon function telah mengulang sebanyak : " + cou);
   }
   
    return;
  }

  // Loop melalui semua kartu murid
  for (var i = 0; i < muridCards.length; i++) {
    var muridName = muridCards[i].querySelector("h3").textContent.toLowerCase();

    if (muridName.includes(input)) {
      muridCards[i].scrollIntoView({ behavior: "smooth", block: "start" });
      clear();
      return;
    }
  }
  alert(input + " tidak dapet di temukan, mungkin anda memasukan nama panggilannya");
  sound2;
  clear();
  return;
}

// cleaner
function clear() {
  var input = document.getElementById("search-box");
  input.value = "";
}
