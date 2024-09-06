const display = document.getElementById("display");
const historico = document.getElementById("historico");

function toHistorico() {
    historico.value = display.value;
}

function toDisplay(input){
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}

function clearHistorico(){
    historico.value = "";
}

function backspaceDisplay(){
    const display = document.getElementById("display");
    let valorAtual = display.value;
    display.value = valorAtual.slice(0, -1);
}

function calcular(){
    try{
        toHistorico();
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Erro";
    }
}

function switchTheme() {
    const themeLink = document.getElementById('theme-link');
    if (themeLink.getAttribute('href') === 'styleL.css') {
        themeLink.setAttribute('href', 'styleD.css');
    } else {
        themeLink.setAttribute('href', 'styleL.css');
    }
}
document.getElementById('theme-switcher').addEventListener('click', switchTheme);

//function elevaquadrado(){
//    toHistorico();
//    const display = document.getElementById("display");
//    let valorq = display.value;
//    historico.value = `${valorq}²`;
//    display.value = valorq ** 2;
//}


function elevaquadrado(){
    const display = document.getElementById("display");
    const historico = document.getElementById("historico");

    let valor = eval(display.value);

    historico.value = `(${display.value})²`;

    display.value = valor ** 2;
}


//function elevanamenosum(){
//    const display = document.getElementById("display");
//    let valor_1 = display.value;
//    //historico.value = `1/${valor_1}`;
//    historico.value = `1/${valor_1}`;
//    display.value = valor_1 ** -1;
//}

function elevanamenosum(){
    const display = document.getElementById("display");
    const historico = document.getElementById("historico");

    let valor_1 = eval(display.value);

    if (valor_1 != 0) {
        historico.value = `1/(${display.value})`;
        display.value = valor_1 ** -1;
    } 
    else {
        display.value = "Erro";
    }
}

//function raizQuadrada(){
//    const display = document.getElementById("display");
//    let raiz = display.value;
//    historico.value = `√${raiz}`;
//    display.value = Math.sqrt(raiz);
//}

function raizQuadrada() {
    try {
        const valorAtual = eval(display.value);
        
        if (valorAtual < 0) {
            display.value = "Erro";
        } 
        else {
            historico.value = `√(${display.value})`;          
            display.value = Math.sqrt(valorAtual);
        }
    } 
    catch (error) {
        display.value = "Erro";
    }
}

function inverteResultado(){
    historico.value = `${display.value}*(-1)`;
    display.value = display.value * -1;
}


function calcularPorcentagem() {
    try {
        const display = document.getElementById("display");
        const historico = document.getElementById("historico");
        let valorAtual = display.value;

       
        const regex = /([\d.]+)([+\-*/])([\d.]+)$/; //verifica se tem operação e o regex descobre qual é
        const match = valorAtual.match(regex);

        if (match) {
            const num1 = parseFloat(match[1]);  
            const operador = match[2];          
            const num2 = parseFloat(match[3]);  // separa em numero 1 operação e numero 2, sendo o numero 2 o que vai ser a %

            
            let resultado;
            switch (operador) {     //switch pra selecionar a operação encontrada pelo regex
                case '+':
                    resultado = (num1 * num2) / 100;
                    resultado = num1 + resultado;
                    break;
                    
                case '-':
                    resultado = (num1 * num2) / 100;
                    resultado = num1 - resultado;
                    break;
                    
                case '*':
                    resultado = (num1 * num2) / 100;
                    break;
                    
                case '/':
                    resultado = (num1 * num2) / 100;
                    resultado = num1 / resultado;
                    break;
                    
                default:
                    console.log('Operador inválido');   // default pra caso uma das operações não seja as especificadas
                    break;
            }

            display.value = resultado;
            historico.value = `${valorAtual}%`;     // atualiza os display com resultado e a conta no histórico se tiver 2 numeros e uma operação
        } else {
            display.value = eval(valorAtual) / 100;
            historico.value = `${valorAtual}%`;     // calculo pra caso seja só um numero e porcentagem ele faz sobre 100
        }
    } catch (error) {
        display.value = "Erro";
    }
}