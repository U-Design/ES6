function fibonacchi( number ){

    let mem = [0,1];
    for (let i = 2; i <= number; i++){


            mem[i] = mem[i - 2] + mem[i -1];

    };

    console.log(mem.join());
}

fibonacchi(10);