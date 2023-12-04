document.addEventListener("DOMContentLoaded", function (){
    //Variables generales
      let valorSliderVoltaje, diferenciaPotencialFuente, capacitanciaTotal,cargaTotal
      let cargaCapacitor1, cargaCapacitor2, cargaCapacitor3
      let energiaAlmacenada1, energiaAlmacenada2, energiaAlmacenada3, energiaAlmacenadaTotal
      let diferenciaPotencial1, diferenciaPotencial2, diferenciaPotencial3, sumaPotencial
      let area1 = 7.5, distancia1 = 250
      let area2 = 7.5, distancia2 = 250
      let area3 = 7.5, distancia3 = 250
      let capacitancia1 = calcularCapacitanciaIndividual(area1,distancia1)
      let capacitancia2 =calcularCapacitanciaIndividual(area2,distancia2)
      let capacitancia3 = calcularCapacitanciaIndividual(area3,distancia3)

    //Variables DOM
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

          //Variables inputs diferencia Potencial
          let potencial1 = document.getElementById("potencial1")
          let potencial2 = document.getElementById("potencial2")
          let potencial3 = document.getElementById("potencial3")
          let potencialTotal = document.getElementById("potencial4")
          
          //Variables inputs trabajo
          let trabajo1 = document.getElementById("Trabajo1");
          let trabajo2 = document.getElementById("Trabajo2");
          let trabajo3 = document.getElementById("Trabajo3");

          // Variables inputs energia
          let energia1= document.getElementById("energia1")
          let energia2= document.getElementById("energia2")
          let energia3= document.getElementById("energia3")

          //Variables inputs carga
          let carga1 = document.getElementById("carga1")
          let carga2 = document.getElementById("carga2")
          let carga3 = document.getElementById("carga3")

    //Funciones Principales
      function capacitor_1(){
        actualilizarInputCapacitancia()
        //Modificar Distancia
        const rango3 = document.querySelector(".slider3")
        rango3.addEventListener("input", function () {
          const valorSlider3 = parseFloat(rango3.value)
          distanciaCapacitor1.value = convertirDistancia(valorSlider3) + " mm"
          distancia1 = convertirDistancia(valorSlider3)
          capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)
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
          actualilizarInputCapacitancia()
          actualizarInputCarga()
          actualizarInputEnergia()
          actualizarInputDiferenciaPotencial()
        })
        //Modificar Area
        const rango1 = document.querySelector(".slider1")
        rango1.addEventListener("input", function (){
            const valorSlider1 = parseFloat(rango1.value)   
            areaCapacitor1.value = convertirArea(valorSlider1) + " mm²";
            area1 = convertirArea(valorSlider1);
            capacitancia1= calcularCapacitanciaIndividual(area1, distancia1)        
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
            actualilizarInputCapacitancia()
            actualizarInputCarga()
            actualizarInputEnergia()
            actualizarInputDiferenciaPotencial()
        })
      }
      
      function capacitor_2(){
            //Modificar Area
      const rango2 = document.querySelector(".slider2")
      rango2.addEventListener("input", function () {
        const valorSlider1 = parseFloat(rango2.value)   
        areaCapacitor2.value = convertirArea(valorSlider1) + " mm²";
        area2 = convertirArea(valorSlider1);
        capacitancia2= calcularCapacitanciaIndividual(area2, distancia2);
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
          actualilizarInputCapacitancia()
          actualizarInputCarga()
          actualizarInputEnergia()
          actualizarInputDiferenciaPotencial()
      })

      //Modificar Distancia
      const rango4 = document.querySelector(".slider4")
      rango4.addEventListener("input", function () {
          const valorSlider4 = parseFloat(rango4.value)  
          distanciaCapacitor2.value = convertirDistancia(valorSlider4) + " mm";
          distancia2 = convertirDistancia(valorSlider4);
          capacitancia2= calcularCapacitanciaIndividual(area2, distancia2)
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
          actualilizarInputCapacitancia()
          actualizarInputCarga()
          actualizarInputEnergia()
          actualizarInputDiferenciaPotencial()
      })
      }

      function capacitor_3(){
      //Modificar Area
      const rango5 = document.querySelector(".slider5")
      rango5.addEventListener("input", function (){
        const valorSlider5 = parseFloat(rango5.value)     
        areaCapacitor3.value = convertirArea(valorSlider5) + " mm²";
        area3 = convertirArea(valorSlider5);
        capacitancia3= calcularCapacitanciaIndividual(area3, distancia3);
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
        actualilizarInputCapacitancia()
        actualizarInputCarga()
        actualizarInputEnergia()
        actualizarInputDiferenciaPotencial()
      })

      //MOdificar Distancia
      const rango6 = document.querySelector(".slider6")
      rango6.addEventListener("input", function (){
        const valorSlider6 = parseFloat(rango6.value) 
        distanciaCapacitor3.value = convertirDistancia(valorSlider6) + " mm";
        distancia3 = convertirDistancia(valorSlider6);
        capacitancia3= calcularCapacitanciaIndividual(area3, distancia3)
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
          actualilizarInputCapacitancia()
          actualizarInputCarga()
          actualizarInputEnergia()
          actualizarInputDiferenciaPotencial()
      })
      }

      function Bateria(){
        let voltajeBateria = document.querySelector(".voltaje-bateria")
        voltajeBateria.addEventListener("input", function () {
          const inputVoltaje = document.querySelector(".inp-voltaje")
          valorSliderVoltaje = parseFloat(voltajeBateria.value)
          actualizarInputCarga()
          actualizarInputDiferenciaPotencial()
          inputVoltaje.value= diferenciaPotencialFuente.toFixed(2) +" V"
          const imgBateria = document.querySelector(".bateria")
          if(valorSliderVoltaje<50){
            imgBateria.src= "/Assets/Bateria2-Negativo.png"
          }else{
            imgBateria.src= "/Assets/Bateria2-Positivo.png"
          }
          actualizarInputEnergia()
          actualizarInputTrabajo()
        })
      }
  
    // Funciones basicas
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

    //Funciones Calcular
      function calcularCarga(capacitancia, diferenciaPotencial){
        const cargaTotal =Math.abs( capacitancia * diferenciaPotencial) // valor absoluto de la carga total 
        return cargaTotal
      }
      function calcularVoltaje(valorRango) {
        const voltajeMinimo = -1.5
        const voltajeMaximo = 1.5
        const rangoDeVoltaje = voltajeMaximo - voltajeMinimo
        const valorPorPaso = rangoDeVoltaje / 100
        const voltaje = voltajeMinimo + (valorRango * valorPorPaso)
        return voltaje;
      }
      function calcularTrabajo( diferenciaPotencial, carga) {
        const trabajo = diferenciaPotencial * carga
        return trabajo
      }
      function calcularCapacitanciaIndividual(area, distancia) {
        const constantePermitividad = 8.8541878176e-12;
        const areaMetros = area/1000000
        const distanciaMetros = distancia/1000  
        const capacitancia = (constantePermitividad * areaMetros) / (distanciaMetros);
        return capacitancia
      }
      function calcularPorcentajeCarga(){
        const progreso1 = document.getElementById("progreso1")
        const progreso2 = document.getElementById("progreso2")
        const progreso3 = document.getElementById("progreso3")
        const porcentaje1 = (cargaTotal / 3.54e-13) * 100
        const porcentaje2 = (cargaCapacitor2 / 3.54e-13) * 100
        const porcentaje3 = (cargaCapacitor3 / 3.54e-13) * 100
        console.log(porcentaje1.toFixed(5))
        progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
        progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
        progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
      }
      function calcularPorcentajeEnergia(){
        const progreso1 = document.getElementById("progresoEnergia1")
        const progreso2 = document.getElementById("progresoEnergia2")
        const progreso3 = document.getElementById("progresoEnergia3")
        const porcentaje1 = (energiaAlmacenada1 / 3.98e-11 ) * 100
        const porcentaje2 = (energiaAlmacenada2 / 3.98e-11) * 100
        const porcentaje3 = (energiaAlmacenada3 / 3.98e-11) * 100
        progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
        progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
        progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
      }
      function calcularPorcentajeVoltaje(){
        const progreso1 = document.getElementById("progresoDiferencia1")
        const progreso2 = document.getElementById("progresoDiferencia2")
        const progreso3 = document.getElementById("progresoDiferencia3")
        const progreso4 = document.getElementById("progresoDiferencia4")  
        const porcentaje1 = (diferenciaPotencialFuente / 150) * 10000
        const porcentaje2 = (diferenciaPotencialFuente / 150) * 10000
        const porcentaje3 = (diferenciaPotencialFuente / 150) * 10000
        progreso1.style.setProperty("--wth", `${Math.abs(porcentaje1)}%`)
        progreso2.style.setProperty("--wth", `${Math.abs(porcentaje2)}%`)
        progreso3.style.setProperty("--wth", `${Math.abs(porcentaje3)}%`)
        progreso4.style.setProperty("--wth", `${Math.abs(porcentaje3)}%`)
      }
      function calcularPorcentajeTrabajo(){
        const progreso1 = document.getElementById("progresotrabajo1")
        const progreso2 = document.getElementById("progresotrabajo2")
        const progreso3 = document.getElementById("progresotrabajo3")
        const porcentaje1 = (Inputtrabajo1 / 1.59e-12 ) * 100
        const porcentaje2 = (Inputtrabajo2 / 1.59e-12) * 100
        const porcentaje3 = (Inputtrabajo3 / 1.59e-12) * 100
        progreso1.style.setProperty("--wth", `${porcentaje1.toFixed(5)}%`)
        progreso2.style.setProperty("--wth", `${porcentaje2.toFixed(5)}%`)
        progreso3.style.setProperty("--wth", `${porcentaje3.toFixed(5)}%`)
      }
      function calcularCarga(capacitancia, diferenciaPotencial){
        const carga =Math.abs(capacitancia * diferenciaPotencial) // valor absoluto de la carga total 
        return carga
      }   
      function calcularVoltaje(valorRango){
        const voltajeMinimo = -1.5
        const voltajeMaximo = 1.5
        const rangoDeVoltaje = voltajeMaximo - voltajeMinimo
        const valorPorPaso = rangoDeVoltaje / 100
        const voltaje = voltajeMinimo + (valorRango * valorPorPaso)
        return voltaje
      }
      function calcularVoltajePlca(carga, capacitancia) {
        const voltaje = carga/capacitancia;
        return voltaje
      }

  //funciones ActualizarInputs
      function actualizarInputEnergia(){
        if(!isNaN(diferenciaPotencialFuente)){
          energiaAlmacenada1 = (1*(capacitancia1 * (diferenciaPotencialFuente**2))/2)
          energiaAlmacenada2 = (1*(capacitancia2 * (diferenciaPotencialFuente**2))/2)
          energiaAlmacenada3 = (1*(capacitancia3 * (diferenciaPotencialFuente**2))/2)
          energiaAlmacenadaTotal = energiaAlmacenada1 + energiaAlmacenada2 +energiaAlmacenada3
          energia1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(energiaAlmacenada1) + " J"}`
          energia2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(energiaAlmacenada2) + " J"}`
          energia3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(energiaAlmacenada3) + " J"}`
          calcularPorcentajeEnergia()
        }
      }
      function actualizarInputTrabajo() {
        const diferenciaPotencial = Math.abs(diferenciaPotencialFuente.toFixed(2))
        Inputtrabajo1 = calcularTrabajo(diferenciaPotencial, cargaCapacitor1)
        Inputtrabajo2 = calcularTrabajo(diferenciaPotencial, cargaCapacitor2)
        Inputtrabajo3 = calcularTrabajo(diferenciaPotencial, cargaCapacitor3)
        trabajo1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(Inputtrabajo1) + " J"}`
        trabajo2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(Inputtrabajo2) + " J"}`
        trabajo3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(Inputtrabajo3) + " J"}`
        calcularPorcentajeTrabajo()
      }
      function actualilizarInputCapacitancia(){
        inputCapacitanciaTotal.value=formatoNotacionConSubindice((1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3))) + " F"
        inputCapacitancia1.value = formatoNotacionConSubindice(capacitancia1) + " F"
        inputCapacitancia2.value = formatoNotacionConSubindice(capacitancia2) + " F"
        inputCapacitancia3.value = formatoNotacionConSubindice(capacitancia3) + " F"
      }
      function actualizarInputCarga(){
        diferenciaPotencialFuente = calcularVoltaje(valorSliderVoltaje)
        if(!isNaN(diferenciaPotencialFuente)){
          capacitanciaTotal = 1/(1/capacitancia1 + 1/capacitancia2 + 1/capacitancia3)
          cargaTotal=  calcularCarga(capacitanciaTotal,diferenciaPotencialFuente);
          cargaCapacitor1 = cargaTotal
          cargaCapacitor2 = cargaTotal
          cargaCapacitor3 = cargaTotal
          carga1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(cargaCapacitor1) + " C"}`;
          carga2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(cargaCapacitor2) + " C"}`;
          carga3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(cargaCapacitor3) + " C"}`;
          actualizarInputTrabajo()
          calcularPorcentajeCarga()
        }
      }
      function actualizarInputDiferenciaPotencial(){
        if(!isNaN (diferenciaPotencialFuente)){
          diferenciaPotencial1 = calcularVoltajePlca(cargaTotal,capacitancia1)
          diferenciaPotencial2 = calcularVoltajePlca(cargaTotal,capacitancia2)
          diferenciaPotencial3 = calcularVoltajePlca(cargaTotal,capacitancia3)
          sumaPotencial = diferenciaPotencial1 + diferenciaPotencial2 + diferenciaPotencial3
          potencial1.innerHTML = `<span>Capacitor 1</span>${formatoNotacionConSubindice(parseFloat(diferenciaPotencial1)) + " V"}`;
          potencial2.innerHTML = `<span>Capacitor 2</span>${formatoNotacionConSubindice(parseFloat(diferenciaPotencial2)) + " V"}`;
          potencial3.innerHTML = `<span>Capacitor 3</span>${formatoNotacionConSubindice(parseFloat(diferenciaPotencial3)) + " V"}`;
          potencialTotal.innerHTML = `<span>Total</span>${sumaPotencial.toFixed(2) + " V"}`;
          calcularPorcentajeVoltaje()
        }
      }


    //EJECUCION DEL PROGRAMA()
      capacitor_1()
      capacitor_2()
      capacitor_3()
      Bateria()
})



// Funciones extras
  function mostrarOcultarCodigo() {
    let checkBox1 = document.getElementById("carAlmacenadaCheck")
    let checkBox2 = document.getElementById("difPotencialCheck")
    let checkBox3 = document.getElementById("trabajoCheck")
    let checkBox4 = document.getElementById("EnAlmacenadaCheck")
    let codigoDivCarga = document.getElementById("cargaAlmacenada")
    let codigoDivPotencial = document.getElementById("diferenciaPotencial")
    let codigoDivTrabajo = document.getElementById("trabj")
    let codigoDivEnergia = document.getElementById("energiaAlmacenada")

    //Obtener estilos 
    var estilosCarga = window.getComputedStyle(codigoDivCarga);
    var estilosPotencial = window.getComputedStyle(codigoDivPotencial);
    var estilosTrabajo = window.getComputedStyle(codigoDivTrabajo);
    var estilosEnergia = window.getComputedStyle(codigoDivEnergia)
    
    //carga
    if (checkBox1.checked) {
      codigoDivCarga.style.display = "block"
      if(((estilosEnergia.getPropertyValue('margin-left') == "295px") &&  (checkBox4.checked )) ||
      ((estilosTrabajo.getPropertyValue('margin-left') == "295px") &&  ( checkBox3.checked)) ||
      ((estilosPotencial.getPropertyValue('margin-left') == "295px") && (checkBox2.checked)) 
      ){
        if(((estilosEnergia.getPropertyValue('margin-left') == "580px") &&  (checkBox4.checked )) ||
        ((estilosTrabajo.getPropertyValue('margin-left') == "580px") &&  ( checkBox3.checked)) ||
        ((estilosPotencial.getPropertyValue('margin-left') == "580px") && (checkBox2.checked)) 
        ){
            if(((estilosEnergia.getPropertyValue('margin-left') == "865px") &&  (checkBox4.checked )) ||
            ((estilosTrabajo.getPropertyValue('margin-left') == "865px") &&  ( checkBox3.checked)) ||
            ((estilosPotencial.getPropertyValue('margin-left') == "865px") && (checkBox2.checked)) 
            ){
              codigoDivCarga.style.marginLeft = "1150px"
            }else{
              codigoDivCarga.style.marginLeft = "865px"
            }
        }else{
          codigoDivCarga.style.marginLeft = "580px"
        }
   }else{
    codigoDivCarga.style.marginLeft = "295px"
   }
      
    } else {
      codigoDivCarga.style.display = "none"
    }

    //diferencia
    if (checkBox2.checked) {
      codigoDivPotencial.style.display = "block"
        if(((estilosEnergia.getPropertyValue('margin-left') == "295px") &&  (checkBox4.checked )) ||
           ((estilosTrabajo.getPropertyValue('margin-left') == "295px") &&  ( checkBox3.checked)) ||
           ((estilosCarga.getPropertyValue('margin-left') == "295px") && (checkBox1.checked)) 
        ){
          if(((estilosEnergia.getPropertyValue('margin-left') == "580px") &&  (checkBox4.checked )) ||
          ((estilosTrabajo.getPropertyValue('margin-left') == "580px") &&  ( checkBox3.checked)) ||
          ((estilosCarga.getPropertyValue('margin-left') == "580px") && (checkBox1.checked)) 
          ){
            if(((estilosEnergia.getPropertyValue('margin-left') == "865px") &&  (checkBox4.checked )) ||
            ((estilosTrabajo.getPropertyValue('margin-left') == "865px") &&  ( checkBox3.checked)) ||
            ((estilosCarga.getPropertyValue('margin-left') == "865px") && (checkBox1.checked)) 
            ){
              codigoDivPotencial.style.marginLeft = "1150px"
            }else{
              codigoDivPotencial.style.marginLeft = "865px"
            }
          }else{
             codigoDivPotencial.style.marginLeft = "580px"
          }
        }else{
          codigoDivPotencial.style.marginLeft = "295px"
        }  
    } else {
      codigoDivPotencial.style.display = "none"
    }
    //trabajo
    if (checkBox3.checked) {
      codigoDivTrabajo.style.display = "block"
      if(((estilosEnergia.getPropertyValue('margin-left') == "295px") &&  (checkBox4.checked )) ||
      ((estilosCarga.getPropertyValue('margin-left') == "295px") &&  ( checkBox1.checked)) ||
      ((estilosPotencial.getPropertyValue('margin-left') == "295px") && (checkBox2.checked)) 
      ){
        if(((estilosEnergia.getPropertyValue('margin-left') == "580px") &&  (checkBox4.checked )) ||
        ((estilosCarga.getPropertyValue('margin-left') == "580px") &&  ( checkBox1.checked)) ||
        ((estilosPotencial.getPropertyValue('margin-left') == "580px") && (checkBox2.checked)) 
        ){
            if(((estilosEnergia.getPropertyValue('margin-left') == "865px") &&  (checkBox4.checked )) ||
            ((estilosCarga.getPropertyValue('margin-left') == "865px") &&  ( checkBox1.checked)) ||
            ((estilosPotencial.getPropertyValue('margin-left') == "865px") && (checkBox2.checked)) 
            ){
              codigoDivTrabajo.style.marginLeft = "1150px"
            }else{
              codigoDivTrabajo.style.marginLeft = "865px"
            }
        }else{
          codigoDivTrabajo.style.marginLeft = "580px"
        }
      }else{
        codigoDivTrabajo.style.marginLeft = "295px"
      }
      } else {
        codigoDivTrabajo.style.display = "none"
      }
    //energia
    if (checkBox4.checked) {
      codigoDivEnergia.style.display = "block"
      if(((estilosTrabajo.getPropertyValue('margin-left') == "295px") &&  (checkBox3.checked )) ||
      ((estilosCarga.getPropertyValue('margin-left') == "295px") &&  ( checkBox1.checked)) ||
      ((estilosPotencial.getPropertyValue('margin-left') == "295px") && (checkBox2.checked)) 
      ){
        if(((estilosTrabajo.getPropertyValue('margin-left') == "580px") &&  (checkBox3.checked )) ||
        ((estilosCarga.getPropertyValue('margin-left') == "580px") &&  ( checkBox1.checked)) ||
        ((estilosPotencial.getPropertyValue('margin-left') == "580px") && (checkBox2.checked)) 
        ){
            if(((estilosTrabajo.getPropertyValue('margin-left') == "865px") &&  (checkBox3.checked )) ||
            ((estilosCarga.getPropertyValue('margin-left') == "865px") &&  ( checkBox1.checked)) ||
            ((estilosPotencial.getPropertyValue('margin-left') == "865px") && (checkBox2.checked)) 
            ){
              codigoDivEnergias.style.marginLeft = "1150px"
            }else{
              codigoDivEnergia.style.marginLeft = "865px"
            }
        }else{
          codigoDivEnergia.style.marginLeft = "580px"
        }
      }else{
        codigoDivEnergia.style.marginLeft = "295px"
        }
    } else {
      codigoDivEnergia.style.display = "none"
    }

    }

  
  
  function mostrarControles() {
    let controlcheckbox = document.getElementById("controles")
    let checkboxcontainer = document.getElementById("checkbox-container")

    if (controlcheckbox.checked) {
        checkboxcontainer.style.display = "block"
    } else {
        checkboxcontainer.style.display = "none"
    }
  }
