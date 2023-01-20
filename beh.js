setInterval(setClock,1)
function setClock(){
    const hourHand = document.querySelector("[data-hour-hand]")
    const minHand = document.querySelector("[data-min-hand]")
    const secHand = document.querySelector("[data-sec-hand]")

    const currentDate = new Date()
    const secRation = currentDate.getSeconds()/60
    const minRation =(secRation + currentDate.getMinutes())/60
    const hourRation =(minRation + currentDate.getHours())/12

    setRotation(secHand,secRation);
    setRotation(minHand,minRation);
    setRotation(hourHand,hourRation);
  
      
}
function setRotation(element, rotationRation){
    element.style.setProperty('--rotation',rotationRation*360)
}