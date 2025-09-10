
const SoatH1=document.getElementById("SoatH1");
const MinutH1=document.getElementById("MinutH1");
const SekundH1=document.getElementById("SekundH1");


const vaqt=new Date();
let soat=vaqt.getHours();
let minut=vaqt.getMinutes();
let sekund=vaqt.getSeconds();





function timer(){
    if(sekund==60){
        sekund=0;
        minut++;
    }
    if(minut==60){
        minut=0;
        soat++;
    }
    if(soat==24){
        soat=0;
        minut=0;
        sekund=0;
    }


    SoatH1.textContent=soat;
    MinutH1.textContent=minut;
    SekundH1.textContent=sekund;
    sekund++;
    


}
setInterval(timer,1000)