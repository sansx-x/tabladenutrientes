const mostrarImagenButton = document.getElementById('mostrar-imagen');
const resultadoContainer = document.getElementById('resultado-container');

function calcularKgPorEtapa() {
    const tablaFertilizantes = {
        edafotech: 50,
        kmagplus: 50,
        sulfatoPotasio: 50,
        nitratoCalcio: 42,
        edafotechBajo: 21
    };

    return {
        "63": ((50 * 0.30) / 0.24),
        "39": (19 / (tablaFertilizantes.edafotech / 100)),
        "96": ((50 * 0.25) / 0.13),
        "58": (12 / (tablaFertilizantes.edafotechBajo / 100)),
        "51": (26 / (tablaFertilizantes.edafotech / 100)),
        "60": (26 / (tablaFertilizantes.nitratoCalcio / 100)),
        "38": ((50 * 0.10) / 0.13),
        "154": (32 / (tablaFertilizantes.edafotechBajo / 100)),
        "45": (19 / (tablaFertilizantes.nitratoCalcio / 100)),
        "116": (24 / (tablaFertilizantes.edafotechBajo / 100))
    };
}

function calcularSacos() {
    return (46 + 39 + 51 + 39) / 50;
}

function calcularEdafotech() {
    return 63 / 50;
}

function calcularKMagPLUS() {
    return 50 / 50;
}

function calcularEdafotech2() {
    return (96 + 96 + 38 + 38) / 50;
}

function calcularSulfatoAmonio() {
    return (58 + 58 + 154 + 116) / 50;
}

function calcularNitratoCalcio() {
    return (50 + 50) / 50;
}

function calcularEdafotech3() {
    return (60 + 45) / 50;
}

function mostrarResultados() {
    const fosforoRutina = parseFloat(document.getElementById('fosforo-rutina').value) || 0;
    const fosforoExtracto = parseFloat(document.getElementById('fosforo-extracto').value) || 0;
    const calcioRutina = parseFloat(document.getElementById('calcio-rutina').value) || 0;
    const calcioExtracto = parseFloat(document.getElementById('calcio-extracto').value) || 0;
    const magnesioRutina = parseFloat(document.getElementById('magnesio-rutina').value) || 0;
    const magnesioExtracto = parseFloat(document.getElementById('magnesio-extracto').value) || 0;
    const potasioExtracto = parseFloat(document.getElementById('potasio-extracto').value) || 0;
    const sodioExtracto = parseFloat(document.getElementById('sodio-extracto').value) || 0;

    if (fosforoRutina && fosforoExtracto && calcioRutina && calcioExtracto && magnesioRutina && magnesioExtracto && potasioExtracto && sodioExtracto) {
        const sacos = calcularSacos();
        const edafotech = calcularEdafotech();
        const kmagplus = calcularKMagPLUS();
        const edafotech2 = calcularEdafotech2();
        const sulfatoAmonio = calcularSulfatoAmonio();
        const nitratoCalcio = calcularNitratoCalcio();
        const edafotech3 = calcularEdafotech3();

        // Muestra los resultados en el contenedor
        resultadoContainer.innerHTML = `
            <div class="resultado-container">
                <div class="fertilizacion-edifica">
                    <h2 contenteditable="true">Recomendación de fertilización edifica, para el cultivo de pimentón, en gramos/planta/día, kg/semana y en kg/etapa, acorde a la fenología, para la densidad poblacional, indicada en la tabla.</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Días/Etapa</th>
                                <th>Aplicación</th>
                                <th>Fertilizantes</th>
                                <th>Gramos/planta</th>
                                <th>Semanas</th>
                                <th>kg/semana</th>
                                <th>kg/ha/etapa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="4">-</td>
                                <td rowspan="4">En la siembra, incorporando y bien mezclado con la tierra del fondo del hoyo.</td>
                                <td>Edafotech 12-24-12/2</td>
                                <td>1,9</td>
                                <td>0</td>
                                <td>.</td>
                                <td>63</td>
                            </tr>
                            <tr>
                                <td>KMagPLUS 0,15Zn - 0,1B</td>
                                <td>1,5</td>
                                <td>0</td>
                                <td>Todo en la siembra</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>QuelaTech micros</td>
                                <td>0,1</td>
                                <td>0</td>
                                <td>.</td>
                                <td>2,5</td>
                            </tr>
                            <tr>
                                <td>Certero Suelos</td>
                                <td>0,6</td>
                                <td>0</td>
                                <td>.</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td rowspan="4">21</td>
                                <td rowspan="4">Inicio 1-21 ddt o 1-3 semanas</td>
                                <td>Sulfato de potasio (*)</td>
                                <td>0,06</td>
                                <td>3</td>
                                <td>13</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>Edafotech 05-13-26/3</td>
                                <td>0,14</td>
                                <td>3</td>
                                <td>32</td>
                                <td>96</td>
                            </tr>
                            <tr>
                                <td>Nitrato de calcio (NitroCaB)</td>
                                <td>0,07</td>
                                <td>3</td>
                                <td>17</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Sulfato de Amonio</td>
                                <td>0,08</td>
                                <td>3</td>
                                <td>19</td>
                                <td>58</td>
                            </tr>
                                <tr>
                                <td rowspan="4">28</td>
                                <td rowspan="4">Vegetativa 22 - 50 ddt o 4 a 8 semanas</td>
                                <td>Sulfato de potasio (*)</td>
                                <td>0,04</td>
                                <td>4</td>
                                <td>10</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>Edafotech 05-13-26/3</td>
                                <td>0,10</td>
                                <td>4</td>
                                <td>24</td>
                                <td>96</td>
                            </tr>
                            <tr>
                                <td>Nitrato de calcio (NitroCaB)</td>
                                <td>0,05</td>
                                <td>4</td>
                                <td>13</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Sulfato de Amonio</td>
                                <td>0,06</td>
                                <td>4</td>
                                <td>14</td>
                                <td>58</td>
                            </tr>
                                <tr>
                                <td rowspan="4">28</td>
                                <td rowspan="4">Floracion 51 - 79 ddt o 9 - 12 semanas</td>
                                <td>Sulfato de potasio (*)</td>
                                <td>0,055</td>
                                <td>4</td>
                                <td>13</td>
                                <td>51</td>
                            </tr>
                            <tr>
                                <td>Edafotech 13-3-43</td>
                                <td>0,064</td>
                                <td>4</td>
                                <td>15</td>
                                <td>60</td>
                            </tr>
                            <tr>
                                <td>Edafotech 05-13-26/3 6,0 S 0,15Zn - 0,1B</td>
                                <td>0,041</td>
                                <td>4</td>
                                <td>9,6</td>
                                <td>38</td>
                            </tr>
                            <tr>
                                <td>Sulfato de Amonio</td>
                                <td>0,165</td>
                                <td>4</td>
                                <td>39</td>
                                <td>154</td>
                            </tr>
                            <td rowspan="6">49</td>
                                <td rowspan="6">Reproductiva 80 - 129 ddt o 13-19 semanas</td>
                                <td>Sulfato de potasio (*)</td>
                                <td>0,024</td>
                                <td>7</td>
                                <td>6</td>
                                <td>39</td>
                            </tr>
                            <tr>
                                <td>Edafotech 13-3-43</td>
                                <td>0,027</td>
                                <td>7</td>
                                <td>6</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td>Edafotech 05-13-26/3 6,0 S 0,15Zn - 0,1B</td>
                                <td>0,024</td>
                                <td>7</td>
                                <td>5,5</td>
                                <td>38</td>
                            </tr>
                            <tr>
                                <td>Sulfato de Amonio</td>
                                <td>0,012</td>
                                <td>7</td>
                                <td>17</td>
                                <td>116</td>
                            </tr>
                            <tr>
                                <td>Certero de Suelos</td>
                                <td>0,012</td>
                                <td>7</td>
                                <td>2,9</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td colspan="7"> Total a aplicar en el ciclo</td>
                                <td> 35,45</td>
                                <td>35,45</td>
                                <td>1182</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            <div class="resultado-table">
                <h2>Sacos de fertilizantes/ciclo</h2>
                    <table> 
                    <thead>
                    <tr>
                        <th>Fertilizantes fórmulas</th>
                    <th>.</th>
                    <th>Sacos de 50</th> </tr>
                        </thead> <tbody> 
                        <tr> 
                        <td>Edafotech</td> 
                        <td>12-24-12 / 2</td> 
                        <td contenteditable="true">${edafotech.toFixed(2)}</td> 
                        </tr>
                        <tr> 
                            <td>KMagPLUS</td> <td>0-0-22 / 17, 0,15 Zn 0,1 B</td> 
                        <td contenteditable="true">${kmagplus.toFixed(1)}</td>
                        </tr> 
                        <tr>
                        <td>Sulfato de potasio (*)</td> <td>0-0-50 / 0, 18 S</td> <td contenteditable="true">${sacos.toFixed(1)}</td> 
                        </tr>
                        <tr> 
                        <td>Edafotech</td> 
                        <td>5-13-26 / 3, 6 S, 0,15 Zn 0,2 B</td>
                        <td contenteditable="true">${edafotech2.toFixed(1)}</td> 
                        </tr>
                            <tr> <td>Sulfato de Amonio</td> <td>21-0-0 / 0, 24 S</td> <td contenteditable="true">${sulfatoAmonio.toFixed(1)}</td> 
                            </tr> <tr> <td>Nitrato de Calcio (NitroCaB)</td> 
                            <td>15-0-0 / 0, 24,5 CaO</td> <td contenteditable="true">${nitratoCalcio.toFixed(1)}</td> 
                            </tr> <tr> <td>Edafotech</td> <td>13-3-43 / 0</td> <td contenteditable="true">${edafotech3.toFixed(1)}</td>
                            </tr> 
                                </tbody> 
                            </table> 
                            <h2 class="section-title">Fertilizantes con micronutrientes</h2> 
                            <table> <tr> <td>QuelaTech micros</td> <td>2,5 Kilos</td> 
                                </tr> </table> 
                            <h2 class="section-title">Fertilizantes con ácidos húmicos</h2>
                            <table>
                                <tr> 
                            <td>Certero Suelos</td> <td>40 Litros</td> 
                            </tr> </table> 
                            <h2 class="section-title">Equilibrio del suelo Cl/SO₄²⁻, antes y después de la fertilización</h2> 
                            <table> <tr> 
                            <td>Equilibrio Cl/SO₄²⁻ del suelo</td> 
                            <td>1,28</td> 
                            </tr> <tr> <td>Equilibrio Cl/SO₄²⁻, después fertilización</td> 
                            <td>0,02</td> 
                            </tr> 
                            </table> 
                            <h2 class="section-title">Equilibrio del suelo Cl/NO₃⁻, antes y después de la fertilización</h2> 
                            <table> 
                            <tr>
                                <td>Equilibrio Cl/NO₃⁻ del suelo</td> <td>5,73</td> </tr> 
                                <tr> <td>Equilibrio Cl/NO₃⁻, después fertilización</td>
                                <td>0,18</td>
                                </tr> 
                                </table>
                                </div>
<button class="Btn">
    <svg
    class="svgIcon"
    viewBox="0 0 384 512"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
        d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
    ></path>
    </svg>
    <span class="icon2"></span>
    <span class="tooltip">1.2MB</span>
</button>


        `;
    } else {
        alert('Por favor, complete todos los campos');
    }
}

mostrarImagenButton.addEventListener('click', mostrarResultados);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        mostrarResultados();
    }
});

