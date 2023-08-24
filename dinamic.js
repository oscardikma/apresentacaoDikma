

function open() {

    var janela = document.getElementById('janela').style
    janela.display = 'block'

}
function close() {
    var janela = document.getElementById('janela').style
    janela.display = 'none'

}

//abertura da popup
var botão = document.getElementById('btn-click')
botão.addEventListener('click', open, true)

//fechamento da popup
var btn_close = document.getElementById('close')
btn_close.addEventListener('click', close, true)

//procedimento de calculo roi
var btn_plane1 = document.getElementById('plane1')
var btn_plane2 = document.getElementById('plane2')
var btn_plane3 = document.getElementById('plane3')

//indicadores
const roi = document.getElementById('ROI')
const payback = document.getElementById('PAYBACK')
const tir = document.getElementById('TIR')

/**Calculo de roi  */
function return_Roi(tempo,valor,investimento) {
let receita= tempo*valor
let calc =  (receita-investimento)/investimento
let calc2 = calc*100
    roi.innerText = calc2.toFixed(2)
}


function return_Payback(investimento, receita) {
    let valor = investimento / receita
    payback.innerText = valor.toFixed(2)
}


/*função para calculo do tir */
function return_Tir(cashFlows) {
  
        const epsilon = 1e-6; // Precisão desejada
        const maxIterations = 1000; // Número máximo de iterações
      
        // Função que calcula o valor presente líquido (NPV) para uma taxa de desconto dada
        function calculateNPV(rate) {
          let npv = 0;
          for (let i = 0; i < cashFlows.length; i++) {
            npv += cashFlows[i] / Math.pow(1 + rate, i);
          }
          return npv;
        }
      
        let guess = 0.1; // Taxa de desconto inicial para tentativa
        let previousGuess = guess;
      
        for (let i = 0; i < maxIterations; i++) {
          const npv = calculateNPV(guess);
          const derivative = (calculateNPV(guess + epsilon) - npv) / epsilon;
          
          guess = guess - npv / derivative;
      
          // Verifica se a diferença entre as tentativas é menor que a precisão desejada
          if (Math.abs(guess - previousGuess) < epsilon) {
            return guess;
          }
      
          previousGuess = guess;
        }
      
        // Se não convergiu após o número máximo de iterações
        return null;
      }
      
    
      





/*zera os valores de roi and payback*/
function zerar() {

    roi.innerText = 0.00
    payback.innerText = 0.00
    tir.innerText = 0.00
}

/**calculo do perfil conservador */
function calculate_economy() {
    zerar()
    let investimento = 581749.00
    let receita = 15000.00
    let tempo = 60
    const cashFlows = [investimento*-1, receita,receita,receita,receita]
    return_Roi(tempo,receita,investimento)
    return_Payback(investimento, receita)
   tir.innerText=  return_Tir(cashFlows).toFixed(2)
}


/**calculo do perfil realista */
function calculate_real() {
    zerar()
    let investimento = 581749.00
    let receita = 30000.00
    let tempo = 60
    const cashFlows = [investimento*-1, receita,receita,receita,receita]
    return_Roi(tempo,receita,investimento)
    return_Payback(investimento, receita)
    tir.innerText=  return_Tir(cashFlows).toFixed(2)
}


/**calculo do perfil otimista */
function calculate_optmize() {
    zerar()
    let investimento = 581749.00
    let receita = 40000.00
    let tempo =60
    const cashFlows = [investimento*-1, receita,receita,receita,receita]
    return_Roi(tempo,receita,investimento)
    return_Payback(investimento, receita)
    tir.innerText=  return_Tir(cashFlows).toFixed(2)
}





btn_plane1.addEventListener('click', calculate_economy, true)
btn_plane2.addEventListener('click', calculate_real, true)
btn_plane3.addEventListener('click', calculate_optmize, true)

