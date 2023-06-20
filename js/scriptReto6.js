function mostrarModal(figura) {
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalContentArea = document.getElementById('modal-content-area');
    var modalResult = document.getElementById('modal-result');
    var modalResultText = document.getElementById('modal-result-text');
  
    modalTitle.textContent = figura.charAt(0).toUpperCase() + figura.slice(1);
    modalContentArea.innerHTML = '';
  
    if (figura === 'circulo') {
      modalContentArea.innerHTML = `
        <label for="radio">Radio:</label>
        <input type="number" id="radio" required>
      `;
    } else if (figura === 'triangulo') {
      modalContentArea.innerHTML = `
        <label for="lado1">Lado 1:</label>
        <input type="number" id="lado1" required>
        <label for="lado2">Lado 2:</label>
        <input type="number" id="lado2" required>
        <label for="lado3">Lado 3:</label>
        <input type="number" id="lado3" required>
      `;
    } else if (figura === 'rectangulo') {
      modalContentArea.innerHTML = `
        <label for="base">Base:</label>
        <input type="number" id="base" required>
        <label for="altura">Altura:</label>
        <input type="number" id="altura" required>
      `;
    } else if (figura === 'cuadrado') {
      modalContentArea.innerHTML = `
        <label for="lado">Lado:</label>
        <input type="number" id="lado" required>
      `;
    }
  
    modalContentArea.innerHTML += `
      <button onclick="calcular('${figura}')">Calcular</button>
    `;
  
    modalResult.style.display = 'none';
    modalResultText.textContent = '';
  
    modal.style.display = 'block';
  }
  
  function cerrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  
  function calcular(figura) {
    var modalResult = document.getElementById('modal-result');
    var modalResultText = document.getElementById('modal-result-text');
    var resultado;
  
    if (figura === 'circulo') {
      var radio = Number(document.getElementById('radio').value);
      resultado = {
        area: calcularAreaCirculo(radio),
        perimetro: calcularPerimetroCirculo(radio)
      };
    } else if (figura === 'triangulo') {
      var lado1 = Number(document.getElementById('lado1').value);
      var lado2 = Number(document.getElementById('lado2').value);
      var lado3 = Number(document.getElementById('lado3').value);
      resultado = {
        area: calcularAreaTriangulo(lado1, lado2, lado3),
        perimetro: calcularPerimetroTriangulo(lado1, lado2, lado3)
      };
    } else if (figura === 'rectangulo') {
      var base = Number(document.getElementById('base').value);
      var altura = Number(document.getElementById('altura').value);
      resultado = {
        area: calcularAreaRectangulo(base, altura),
        perimetro: calcularPerimetroRectangulo(base, altura)
      };
    } else if (figura === 'cuadrado') {
      var lado = Number(document.getElementById('lado').value);
      resultado = {
        area: calcularAreaCuadrado(lado),
        perimetro: calcularPerimetroCuadrado(lado)
      };
    }
  
    modalResultText.innerHTML = `
      <p>Área: ${resultado.area.toFixed(2)}</p>
      <p>Perímetro: ${resultado.perimetro.toFixed(2)}</p>
    `;
  
    modalResult.style.display = 'block';
  }
  
  function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
  }
  
  function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
  }
  
  function calcularAreaTriangulo(lado1, lado2, lado3) {
    var semiperimetro = (lado1 + lado2 + lado3) / 2;
    return Math.sqrt(
      semiperimetro *
      (semiperimetro - lado1) *
      (semiperimetro - lado2) *
      (semiperimetro - lado3)
    );
  }
  
  function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }
  
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
  
  function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
  }
  
  function calcularAreaCuadrado(lado) {
    return Math.pow(lado, 2);
  }
  
  function calcularPerimetroCuadrado(lado) {
    return 4 * lado;
  }
  