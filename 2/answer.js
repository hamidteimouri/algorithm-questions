function Solution(A, P, B, E) {
  if (B === E) return true;
  var cranes = [];
  for (let i = 0; i < P.length; i++) {
    cranes[i] = {
      min: P[i] - A[i],
      max: P[i] + A[i],
    }
  }
  // console.log(cranes);
  return Find(cranes, B, E);
}

function Find(cranes, base, dest) {
  for (let i = 0; i < cranes.length; i++) {
    // console.log(cranes[i], base, dest);
    if (base >= cranes[i].min && base <= cranes[i].max && dest >= cranes[i].min && dest <= cranes[i].max) {
      return true;
    }
    if (base < dest) {
      if (base >= cranes[i].min && base < cranes[i].max) {
        return Find(cranes, cranes[i].max, dest);
      }
    } else {
      if (base > cranes[i].min && base <= cranes[i].max) {
        return Find(cranes, cranes[i].min, dest);
      }
    }
  }
  return false;
}

console.log(Solution([2, 1], [5, 1], 3, 6)); // true
console.log(Solution([2, 1], [5, 1], 2, 6)); // false
console.log(Solution([1, 4, 2], [10, 4, 7], 11, 1)); // true
console.log(Solution([5, 5, 1], [3, 3, 6], 4, 8)); // true
