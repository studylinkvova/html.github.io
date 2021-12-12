let imena = [`Макс`,`Марк`,`Артем`,`Андрій`,`Нікіта`,`Кіріл`];

let ol = document.getElementById(`spisok`);

let dani = ``;
for(i=0; i<6;i++){
dani += `<li>${imena[i]}</li>`;
}

ol.innerHTML = dani;