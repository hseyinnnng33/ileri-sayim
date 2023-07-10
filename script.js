const gerisayım = document.querySelectorAll(".counter");

gerisayım.forEach((item)=>{
    item.textContent = "0";

    function update(){
        const target = Number(item.getAttribute("data-target"))
        const degeriSayiyaDonustur = Number(item.innerText)
        
        const artis = target / 400;
        let deger = degeriSayiyaDonustur + artis;
        console.log(deger)

        if(degeriSayiyaDonustur < target){
            item.innerHTML = `${Math.ceil(deger)}`;
            setTimeout(update, 5)
        }
        else{
            item.innerHTML = target;
        }
    }
    update()
})
