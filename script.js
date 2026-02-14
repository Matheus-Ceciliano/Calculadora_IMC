function aplicarVirgula() {
    const input = document.getElementById("calc_height");

    input.addEventListener("input", function (event) {


        let numeros = event.target.value.replace(/\D/g, "");


        numeros = numeros.substring(0, 3);

        let formatado = numeros;

        if (numeros.length > 1) {
            formatado = numeros[0] + "," + numeros.substring(1);

        }
        event.target.value = formatado;





    });
}

aplicarVirgula();


function aplicarVirgulaPeso() {

    const input = document.getElementById("calc_peso");

    input.addEventListener("input", function (event) {

        let valor = event.target.value.replace(/\D/g, "");

        valor = valor.substring(0, 5);

        let formatados = valor;


        if (valor.length === 3) {
            formatados = valor.substring(0, 1) + "," + valor.substring(1);

        }

        else if (valor.length === 4) {
            formatados = valor.substring(0, 2) + "," + valor.substring(2);

        }

        else if (valor.length === 5) {
            formatados = valor.substring(0, 3) + "," + valor.substring(3);

        }

        event.target.value = formatados;
    });
}
aplicarVirgulaPeso();



function imc() {
    let altura = document.querySelector("#calc_height").value;
    let peso = document.querySelector("#calc_peso").value;

    let peso_tratado = peso.replace(",", ".");
    let altura_tratado = altura.replace(",", ".");



    let altura_validado = Number(altura_tratado);
    let peso_validado = Number(peso_tratado);

    let imc_resultado;

    if (peso === "" || altura === "") {
        alert("Digite corretamente para calcular");
        return;
    }
    if (altura_validado < 0.5 || altura_validado > 2.5) {
        alert("Digite uma altura válida entre 0,50m e 2,50m");
        return;
    }
    if (peso_validado < 10 || peso_validado > 300) {
        alert("Digite um peso válido entre 10kg e 300kg");
        return;
    }


    else {

        let altura_ao_quadrado = (altura_validado) ** 2;

        let peso_validados = peso_validado;

        imc_resultado = (peso_validados / (altura_ao_quadrado));

        let imc_formatado = imc_resultado.toFixed(2);


        resultado.innerHTML = `<p>O seu IMC É: <span>${imc_formatado} </span></p>`;

    }

    const magreza = document.getElementById("calc1");
    const normal = document.getElementById("calc2");
    const sobrepeso = document.getElementById("calc3");
    const obesidade = document.getElementById("calc4");
    const obesidade_grave = document.getElementById("calc5");

    magreza.style.backgroundColor = "";
    normal.style.backgroundColor = "";
    sobrepeso.style.backgroundColor = "";
    obesidade.style.backgroundColor = "";
    obesidade_grave.style.backgroundColor = "";

    if (imc_resultado < 18.5) {
        magreza.style.backgroundColor = "rgb(235, 253, 234)";
    }
    else if (imc_resultado >= 18.5 && imc_resultado < 24.9) {
        normal.style.backgroundColor = "rgb(235, 253, 234)";
    }
    else if (imc_resultado >= 24.9 && imc_resultado < 29.9) {
        sobrepeso.style.backgroundColor = "rgb(235, 253, 234)";
    }
    else if (imc_resultado >= 30 && imc_resultado < 39.9) {
        obesidade.style.backgroundColor = "rgb(235, 253, 234)";
    }
    else if (imc_resultado >= 40) {
        obesidade_grave.style.backgroundColor = "rgb(235, 253, 234)";
    }
};