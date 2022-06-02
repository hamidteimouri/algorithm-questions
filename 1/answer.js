function solution(n) {
    d = new Array(30);
    l = 0;
    while (n > 0) {
        d[l] = n % 2;
        n = Math.floor(n / 2);
        l += 1;
    }
    for (p = 1; p < Math.floor(1 + l/2); ++p){
        ok = true;
        for (i = 0; i < l - p; ++i){
            if (d[i] != d[i + p]) {
                ok = false;
                break;
            }
        }
        if (ok) {
            return p;
        }
    }
    return -1;
}


let a = solution(955);
console.log(a);