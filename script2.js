document.addEventListener("DOMContentLoaded", function (){
    let inputCapacitancia1 = document.getElementById("capacitancia1");
    let distanciaCapacitor1 = document.getElementById("separacion3");
    let areaCapacitor1 = document.getElementById("separacion2");
    let inputCapacitancia2 = document.getElementById("capacitancia2");
    let distanciaCapacitor2 = document.getElementById("separacion4");
    let areaCapacitor2 = document.getElementById("separacion1");
    let inputCapacitancia3 = document.getElementById("capacitancia3");
    let distanciaCapacitor3 = document.getElementById("separacion6");
    let areaCapacitor3 = document.getElementById("separacion5");
    let inputCapacitanciaTotal = document.getElementById("capacitanciaTotal");
    let area1 = 7.5, distancia1 = 250;
    let area2 = 7.5, distancia2 = 250;
    let area3 = 7.5, distancia3 = 250;
    let capacitancia1 = calcularCapacitanciaIndividual(area1,distancia1)
    let capacitancia2 =calcularCapacitanciaIndividual(area2,distancia2)
    let capacitancia3 = calcularCapacitanciaIndividual(area3,distancia3)
    let circuitoHorizontal1 = document.querySelector(".circuito-horizontal1");
    let circuitoHorizontal2 = document.querySelector(".circuito-horizontal2")
    let circuitoHorizontal3 = document.querySelector(".circuito-horizontal2")
    let circuitoHorizontal4 = document.querySelector(".circuito-horizontal2")
    let baldosa1 = document.querySelector(".baldosa1-vertical")
    let baldosa2 = document.querySelector(".baldosa2-vertical") 
    let baldosa3 = document.querySelector(".baldosa3-vertical")
    let baldosa4 = document.querySelector(".baldosa4-vertical") 
    let baldosa5 = document.querySelector(".baldosa5-vertical")
    let baldosa6 = document.querySelector(".baldosa6-vertical") 
    //capacitor 1
    capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
    inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
    const rango3 = document.querySelector(".slider3")
    rango3.addEventListener("input", function () {
      const valorSlider3 = parseFloat(rango3.value)
      distanciaCapacitor1.value = convertirDistancia(valorSlider3) + " mm";
      distancia1 = convertirDistancia(valorSlider3)
      capacitancia1= calcularCapacitanciaIndividual(area1, distancia1);
      inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
      if(valorSlider3 <20 ){
        circuitoHorizontal1.style.width=  "300px"
        circuitoHorizontal2.style.width=  "201.6px"
        circuitoHorizontal2.style.marginLeft  = "440px"
        baldosa1.style.marginLeft  = "350px"
        baldosa2.style.marginLeft  = "380px"
      
        
      }else if(valorSlider3 <40){
        circuitoHorizontal1.style.width=  "290px"
        circuitoHorizontal2.style.width=  "191.6px"
        circuitoHorizontal2.style.marginLeft  = "450px"
        baldosa1.style.marginLeft  = "340px"
        baldosa2.style.marginLeft  = "390px"


      }else if(valorSlider3 <60){
        circuitoHorizontal1.style.width=  "280px"
        circuitoHorizontal2.style.width=  "181.6px"
        circuitoHorizontal2.style.marginLeft  = "460px"
        baldosa1.style.marginLeft  = "330px"
        baldosa2.style.marginLeft  = "400px"
      }else if(valorSlider3 <80 ){
        circuitoHorizontal1.style.width=  "270px"
        circuitoHorizontal2.style.width=  "171.2px"
        circuitoHorizontal2.style.marginLeft  = "470px"
        baldosa1.style.marginLeft  = "320px"
        baldosa2.style.marginLeft  = "410px"
      }else{
        circuitoHorizontal1.style.width=  "260px"
        circuitoHorizontal2.style.width=  "161px"
        circuitoHorizontal2.style.marginLeft  = "480px"
        baldosa1.style.marginLeft  = "310px"
        baldosa2.style.marginLeft  = "420px"
      }
    })
    const rango1 = document.querySelector(".slider1")
    rango1.addEventListener("input", function (){
        const valorSlider1 = parseFloat(rango1.value)   
        areaCapacitor1.value = convertirArea(valorSlider1) + " mm²";
        area1 = convertirArea(valorSlider1);
        capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
        inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
        if(valorSlider1 <20 ){      
           circuitoHorizontal2.style.width=  "200px"
           circuitoHorizontal2.style.marginLeft  = "440px"
        
          baldosa1.style.width  = "80px"
          baldosa2.style.width  = "80px" 
        }else if(valorSlider1 <40){
          circuitoHorizontal2.style.width=  "190px"
          circuitoHorizontal2.style.marginLeft  = "450px"
          baldosa1.style.width  = "90px"
          baldosa2.style.width  = "90px"
        }else if(valorSlider1 <60){
          circuitoHorizontal2.style.width=  "180px"
          circuitoHorizontal2.style.marginLeft  = "460px"
        baldosa1.style.width  = "100px"
        baldosa2.style.width  = "100px"
        }else if(valorSlider1 <80 ){
          circuitoHorizontal2.style.width=  "170px"
          circuitoHorizontal2.style.marginLeft  = "470px"
          baldosa1.style.width  = "110px"
          baldosa2.style.width  = "110px"
        }else{
          circuitoHorizontal2.style.width=  "160px"
          circuitoHorizontal2.style.marginLeft  = "480px"
        baldosa1.style.width  = "120px"
        baldosa2.style.width  = "120px"
        }
    })
    
    //capacitor 2
    const rango2 = document.querySelector(".slider2")
    capacitancia2= calcularCapacitanciaIndividual(area2, distancia2);
    inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
    console.log(capacitancia3)
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
    rango2.addEventListener("input", function () {
      const valorSlider1 = parseFloat(rango2.value)   
      areaCapacitor2.value = convertirArea(valorSlider1) + " mm²";
      area2 = convertirArea(valorSlider1);
      capacitancia2= calcularCapacitanciaIndividual(area2, distancia2);
      inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
        if(valorSlider1 <20 ){      
        //    circuitoHorizontal3.style.width=  "200px"
        //    circuitoHorizontal4.style.marginLeft  = "440px"
        
          baldosa3.style.width  = "80px"
          baldosa4.style.width  = "80px" 
        }else if(valorSlider1 <40){
        //   circuitoHorizontal3.style.width=  "190px"
        //   circuitoHorizontal4.style.marginLeft  = "450px"
          baldosa3.style.width  = "90px"
          baldosa4.style.width  = "90px"
        }else if(valorSlider1 <60){
        //   circuitoHorizontal3.style.width=  "180px"
        //   circuitoHorizontal4.style.marginLeft  = "460px"
        baldosa3.style.width  = "100px"
        baldosa4.style.width  = "100px"
        }else if(valorSlider1 <80 ){
        //   circuitoHorizontal3.style.width=  "170px"
        //   circuitoHorizontal4.style.marginLeft  = "470px"
          baldosa3.style.width  = "110px"
          baldosa4.style.width  = "110px"
        }else{
        //   circuitoHorizontal3.style.width=  "160px"
        //   circuitoHorizontal4.style.marginLeft  = "480px"
        baldosa3.style.width  = "120px"
        baldosa4.style.width  = "120px"
        }


    })
    const rango4 = document.querySelector(".slider4")
    rango4.addEventListener("input", function () {
        const valorSlider4 = parseFloat(rango4.value)  
        distanciaCapacitor2.value = convertirDistancia(valorSlider4) + " mm";
        distancia2 = convertirDistancia(valorSlider4);
        capacitancia2= calcularCapacitanciaIndividual(area2, distancia2)
        inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
        if(valorSlider4 <20 ){      
        //   circuitoHorizontal3.style.width=  "260px"
        //   circuitoHorizontal4.style.width=  "161px"
        //   circuitoHorizontal4.style.marginLeft  = "580px"
          baldosa3.style.marginLeft  = "600px"
          baldosa4.style.marginLeft  = "630px"
          
        }else if(valorSlider4 <40){
        //   circuitoHorizontal3.style.width=  "270px"
        //   circuitoHorizontal4.style.width=  "171.2px"
        //   circuitoHorizontal4.style.marginLeft  = "570px"
          baldosa3.style.marginLeft  = "590px"
          baldosa4.style.marginLeft  = "640px"
        }else if(valorSlider4 <60){
        //   circuitoHorizontal3.style.width=  "280px"
        //   circuitoHorizontal4.style.width=  "181.6px"
        //   circuitoHorizontal4.style.marginLeft  = "560px"
          baldosa3.style.marginLeft  = "580px"
          baldosa4.style.marginLeft  = "650px"
        }else if(valorSlider4 <80 ){
        //   circuitoHorizontal3.style.width=  "290px"
        //   circuitoHorizontal4.style.width=  "191.6px"
        //  circuitoHorizontal4.style.marginLeft  = "550px"
          baldosa3.style.marginLeft  = "570px"
          baldosa4.style.marginLeft  = "660px"
        }else{
        //   circuitoHorizontal3.style.width=  "300px"
        //   circuitoHorizontal4.style.width=  "201.6px"
        //   circuitoHorizontal4.style.marginLeft  = "540px"
          baldosa3.style.marginLeft  = "560px"
          baldosa4.style.marginLeft  = "670px"
        }
    })

    //capacitor 3
    const rango5 = document.querySelector(".slider5")
    capacitancia3= calcularCapacitanciaIndividual(area3, distancia3);
    inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
    inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
    rango5.addEventListener("input", function (){
      const valorSlider5 = parseFloat(rango5.value)     
      areaCapacitor3.value = convertirArea(valorSlider5) + " mm²";
      area3 = convertirArea(valorSlider5);
      capacitancia3= calcularCapacitanciaIndividual(area3, distancia3);
      inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
      if(valorSlider5 <20 ){      
      //    circuitoHorizontal5.style.width=  "200px"
      //    circuitoHorizontal6.style.marginLeft  = "440px"
      
        baldosa5.style.width  = "80px"
        baldosa6.style.width  = "80px" 
      }else if(valorSlider5 <40){
      //   circuitoHorizontal5.style.width=  "190px"
      //   circuitoHorizontal6.style.marginLeft  = "450px"
        baldosa5.style.width  = "90px"
        baldosa6.style.width  = "90px"
      }else if(valorSlider5 <60){
      //   circuitoHorizontal5.style.width=  "180px"
      //   circuitoHorizontal6.style.marginLeft  = "460px"
      baldosa5.style.width  = "100px"
      baldosa6.style.width  = "100px"
      }else if(valorSlider5 <80 ){
      //   circuitoHorizontal5.style.width=  "170px"
      //   circuitoHorizontal6.style.marginLeft  = "470px"
        baldosa5.style.width  = "110px"
        baldosa6.style.width  = "110px"
      }else{
      //   circuitoHorizontal5.style.width=  "160px"
      //   circuitoHorizontal6.style.marginLeft  = "480px"
      baldosa5.style.width  = "120px"
      baldosa6.style.width  = "120px"
      }

    })
    const rango6 = document.querySelector(".slider6")
    rango6.addEventListener("input", function (){
      const valorSlider6 = parseFloat(rango6.value) 
      distanciaCapacitor3.value = convertirDistancia(valorSlider6) + " mm";
      distancia3 = convertirDistancia(valorSlider6);
      capacitancia3= calcularCapacitanciaIndividual(area3, distancia3)
      inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
      inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"  
        if(valorSlider6 <20 ){      
        //   circuitoHorizontal3.style.width=  "260px"
        //   circuitoHorizontal4.style.width=  "161px"
        //   circuitoHorizontal4.style.marginLeft  = "580px"
          baldosa5.style.marginLeft  = "850px"
          baldosa6.style.marginLeft  = "880px"
          
        }else if(valorSlider6 <40){
        //   circuitoHorizontal3.style.width=  "270px"
        //   circuitoHorizontal4.style.width=  "171.2px"
        //   circuitoHorizontal4.style.marginLeft  = "570px"
          baldosa5.style.marginLeft  = "840px"
          baldosa6.style.marginLeft  = "890px"
        }else if(valorSlider6 <60){
        //   circuitoHorizontal3.style.width=  "280px"
        //   circuitoHorizontal4.style.width=  "181.6px"
        //   circuitoHorizontal4.style.marginLeft  = "560px"
          baldosa5.style.marginLeft  = "830px"
          baldosa6.style.marginLeft  = "900px"
        }else if(valorSlider6 <80 ){
        //   circuitoHorizontal3.style.width=  "290px"
        //   circuitoHorizontal4.style.width=  "191.6px"
        //  circuitoHorizontal4.style.marginLeft  = "550px"
          baldosa5.style.marginLeft  = "820px"
          baldosa6.style.marginLeft  = "910px"
        }else{
        //   circuitoHorizontal3.style.width=  "300px"
        //   circuitoHorizontal4.style.width=  "201.6px"
        //   circuitoHorizontal4.style.marginLeft  = "540px"
          baldosa5.style.marginLeft  = "810px"
          baldosa6.style.marginLeft  = "920px"
        }
    })
    function convertirArea(valor) {
      const slider = 100;
      const milimetro = 200;
      let area = (valor * milimetro) / slider;
      return area + milimetro;
    }
    function convertirDistancia(valor) {
      const slider = 100;
      const milimetro = 5;
      let distancia = (valor * milimetro) / slider;
      return distancia + milimetro;
    }
    function calcularCapacitanciaIndividual(area, distancia) {
      const constantePermitividad = 8.8541878176e-12;
      const capacitancia = (constantePermitividad * area) / (distancia ** 2);
      return capacitancia;
    }
    function formatoNotacionConSubindice(capacitancia) {
      const [coeficiente, exponente] = capacitancia
        .toExponential(2)
        .split(/e|E/)
        .map((str) => parseFloat(str));
    
      const exponenteUnicode = exponente.toString().replace(/(\d)/g, (_, digit) => {
        const unicodeMap = {
          '0': '⁰',
          '1': '¹',
          '2': '²',
          '3': '³',
          '4': '⁴',
          '5': '⁵',
          '6': '⁶',
          '7': '⁷',
          '8': '⁸',
          '9': '⁹',
          '-': '⁻',
          '+': '⁺',
        };
        return unicodeMap[digit];
      });
    
      return `${coeficiente.toFixed(2)}×10${exponenteUnicode}`;
    }
})
