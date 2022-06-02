Consider a non-empty string:
`S = s[0]s[1]...s[Q-1]` consisting of `Q` questions.
<br>
The `period` of this string is the smallest positive integer `P` such that :
- `P <= Q / 2` and
- `S[K] = S[K+P]` for every `K` , where `0 <= K < Q-P`

<br>
For example, `8` is the period of `codilitycodilityco` and `7` is the period of `abracadabracadabra`.<br>
A positive integer `M` is the Binary Period of a positive integer N