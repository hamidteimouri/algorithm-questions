function solution(array) {
    let result = 0;
    
    for (let i = 1; i < array.length; i++){
        if (result > array[i]) {
            result = array[i];
        }
    }
    return result;
}

const array = [-1, 1, -2, 2];
let a = solution(array);
console.log(a)
