There are `N` cranes (numbered from `0` to `N-1`) arranged in a line along a road. Road begins at position `0`. The `K-th` crane is located at distance `P[K]` from the beginning of the road and its arm length is equal to `A[K]`. The cranes cannot change their positions.<br>
There is a package, initially located at position `B`, that has to moved by the cranes to position `E`.<br>
The `K-th` crane can pick up the package only if the distance between its position and the package position is less than or equal to `A[K]` (the package is within arm range from the crane's position).<br>
A package can be moved by crane to and arbitrary position within the crane's arm reach (between `P[K] - A[K]` and `P[K] + A[K]` for the `K-th` crane).<br><br>
For example, if `P[K] = 5` and `A[K] = 3`,the `K-th` crane can move packages anywhere between positions `2` and `8`, including both of the boundaries.
