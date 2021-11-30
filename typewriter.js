const sentence = "hello there from lighthouse labs";
let delay = 0;
let increment = 50;
for(let i = 0; i < sentence.length; i++){
    setTimeout(()=>{
        process.stdout.write(sentence[i]);
        if(i === sentence.length-1){
            process.stdout.write('\n');
        }
    }, delay);
    delay += increment; 
}

