let aleatorio = Math.floor(Math.random() * 100 + 101);
let num 
let numMaxTry = 10;

console.log("Vamos brincar de adivinhar números?\nTente adivinhar um número de 100 a 200");
console.log("Você tem " + numMaxTry + " tentativas! Boa sorte!");

process.stdin.on("data", function(data){
    num = Number(data.toString().trim());
    if(num == aleatorio){
        console.log("Parabéns, você acertou!");
        process.exit();
    }else{
        if(Math.abs(num - aleatorio) <= 50 * 0.1){
            console.log("Está quente")
        }else{
            console.log("Está frio")
        }
        numMaxTry--;
        console.log("Você tem " + numMaxTry + " tentativas!");
        if(numMaxTry == 0){
            console.log("Suas tentativas acabaram! " + aleatorio + " era o número secreto");
            console.log("Tente novamente!");
            numMaxTry = 10;
            aleatorio = Math.floor(Math.random() * 100 + 101);
        }
    }
});