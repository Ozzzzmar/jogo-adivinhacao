let aleatorio = Math.floor(Math.random() * 50 + 1);
let num 
let numMaxTry = 5;

console.log("Vamos brincar de adivinhar números?");
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
            numMaxTry = 5;
            aleatorio = Math.floor(Math.random() * 50 + 1);
        }
    }
});