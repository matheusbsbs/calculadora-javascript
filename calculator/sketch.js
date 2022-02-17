let calculo = "";
const entrada =  document.getElementById('tela')
var operador = ""
var teclado= ""
var parar = false
var ultimaEntrada = ""
var simbolo = true
var fechar = false
var penultino = ""
var ultimo = ""
*document.addEventListener("keyup",function(event){
   teclado = event.key
    switch(teclado){
        case "*":
        case "-":
        case "+":    
        case  "/":
            operadorSimbolo(teclado)
            break
        case"7":case"8":case"9":case"4":case"5":case"6":case"1":case"2":case"3":case"0":
            numero(teclado)
            break
        case",":
            ponto(".")
            break    
        case"Enter":
            calcular()
            break
        case"Delete":
            limpar()
            break    
        case "":
            break  
        
                                
    }
})

function limpar(){
    entrada.value = ""
    operador = ""
    ultimaEntrada = ""
    parar = false
    calculo = ""
    simbolo = false
}
function numero(string){
    entrada.value = entrada.value + string
    ultimaEntrada = string
    simbolo = true
   
   
      
}
  function apagarcaractere(){
    entrada.value = entrada.value.substring(0, entrada.value.length -1)
    
  }
function parentesisabrir(){
    entrada.value = entrada.value + "("
}
    
function parentesisfechar(){
    entrada.value = entrada.value + ")"
}


function ponto(string){
    if(parar == false){
        if(entrada.value == ""){
            entrada.value = entrada.value
            ultimaEntrada = ultimaEntrada
        }else{
        entrada.value = entrada.value + string
        ultimaEntrada = string
        parar = true
        }
    }else{
        entrada.value = entrada.value
        ultimaEntrada = ultimaEntrada
    }
    
}
function operadorSimbolo(string){
   
     if(simbolo == false){
    entrada.value = entrada.value
    operador = operador
    ultimaEntrada = ultimaEntrada
               
    }
    else {
    entrada.value = entrada.value + string
    operador = string
    ultimaEntrada = string
    parar = false
    simbolo = false
    }
}

function calcular(){
        entrada.value = eval(entrada.value);
}