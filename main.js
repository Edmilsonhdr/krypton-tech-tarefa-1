fetch("https://apiintranet.kryptonbpo.com.br/test-dev/exercise-1")
  .then((res) => {
    return res.json();
  })
  .then((users) => {
    var carros = users.carros;
    // carros.push({ marca: "a", modelo: "Q", cor: "p", motor_id: 4 });
    console.log(carros);

    const btn = document.querySelector("#send");
    console.log(btn);

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const marcaC = document.querySelector("#marca");
      const modelo = document.querySelector("#modelo");
      const cor = document.querySelector("#cor");

      const p = document.querySelector(".p");
      const b = document.querySelector(".b");
      const c = document.querySelector(".c");

      console.log(marcaC.value);
      console.log(modelo.value);
      console.log(cor.value);

      const marca = marcaC.value;
      const modeloC = modelo.value;
      const corC = cor.value;
      carros.push({ marca, modeloC, corC });
      // carros.push({marca: 'a', modelo: 'Q', cor: 'p', motor_id: 4});
      console.log(carros);

      b.textContent = modeloC;
      c.textContent = corr;

    });

    for (var i = 0; i < carros.length; i++) {
      const carrosId = document.getElementsByClassName("carro_id");
      const carrosMarca = document.getElementsByClassName("carro_marca");
      const carrosModelo = document.getElementsByClassName("carro_modelo");
      const carrosCor = document.getElementsByClassName("carro_cor");
      const carrosMotorId = document.getElementsByClassName("carro_motor_id");

      let sCarros = carros[i];


      carrosId[i].textContent = i + 1;
      carrosMarca[i].textContent = sCarros.marca;
      carrosModelo[i].textContent = sCarros.modelo;
      carrosCor[i].textContent = sCarros.cor;
      carrosMotorId[i].textContent = sCarros.motor_id;
    }
    var motores = users.motores;

    for (var i = 0; i < motores.length; i++) {
      const motorId = document.getElementsByClassName("motor_id");
      const motorPosicionamentoCilindros =
        document.getElementsByClassName("motor_p_cilindros");
      const motorCilindro = document.getElementsByClassName("motor_cilindros");
      const motorLitragem = document.getElementsByClassName("motor_litragem");
      const motorObservacao =
        document.getElementsByClassName("motor_observacao");

      let motorCarros = motores[i];
      // console.log(meusCar.id)
      motorId[i].textContent = motorCarros.id;
      motorPosicionamentoCilindros[i].textContent =
        motorCarros.posicionamento_cilindros;
      motorCilindro[i].textContent = motorCarros.cilindros;
      motorLitragem[i].textContent = motorCarros.litragem;
      motorObservacao[i].textContent = motorCarros.observacao;
    }
  });
