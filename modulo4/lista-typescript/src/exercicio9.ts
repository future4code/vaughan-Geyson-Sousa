const anagrama = (string: string): number => {
    let index: number = string.length;
    let arr: number[] = [];

    for(let i: number = 0; i < index; i++){
        arr.push(i+1)
    }

    arr.reverse();

    return arr.reduce((a,p) => a * p, 1);
}

console.log(anagrama('Sião'));