// 1차원으로 X=0~8까지 (승리조건을 8까지)
// X,O 을 교대로 입력

let 칸 = ["","","","","","","","",""]
let 순서 = "O"
let 위치 = Number(prompt("O 차례입니다. 1~9 칸 중 위치를 입력해주세요"))

console.log(칸[0] 칸[1] 칸[2])
console.log(칸[3] 칸[4] 칸[5])
console.log(칸[6] 칸[7] 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0] 칸[1] 칸[2])
console.log(칸[3] 칸[4] 칸[5])
console.log(칸[6] 칸[7] 칸[8])

순서 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0] 칸[1] 칸[2])
console.log(칸[3] 칸[4] 칸[5])
console.log(칸[6] 칸[7] 칸[8])

차례 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0] 칸[1] 칸[2])
console.log(칸[3] 칸[4] 칸[5])
console.log(칸[6] 칸[7] 칸[8])

차례 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0] 칸[1] 칸[2])
console.log(칸[3] 칸[4] 칸[5])
console.log(칸[6] 칸[7] 칸[8])

차례 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 차례

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])


if (O = 칸[0], 칸[1], 칸[2]) {console.log('승리')}
if (O = 칸[3], 칸[4], 칸[5]) {console.log('승리')}
if (O = 칸[6], 칸[7], 칸[8]) {console.log('승리')}
if (O = 칸[0], 칸[3], 칸[6]) {console.log('승리')}
if (O = 칸[1], 칸[4], 칸[7]) {console.log('승리')}
if (O = 칸[2], 칸[5], 칸[8]) {console.log('승리')}
if (O = 칸[0], 칸[4], 칸[8]) {console.log('승리')}
if (O = 칸[2], 칸[4], 칸[6]) {console.log('승리')}
else {console.log('패배')}

if (X = 칸[0], 칸[1], 칸[2]) {console.log('승리')}
if (X = 칸[3], 칸[4], 칸[5]) {console.log('승리')}
if (X = 칸[6], 칸[7], 칸[8]) {console.log('승리')}
if (X = 칸[0], 칸[3], 칸[6]) {console.log('승리')}
if (X = 칸[1], 칸[4], 칸[7]) {console.log('승리')}
if (X = 칸[2], 칸[5], 칸[8]) {console.log('승리')}
if (X = 칸[0], 칸[4], 칸[8]) {console.log('승리')}
if (X = 칸[2], 칸[4], 칸[6]) {console.log('승리')}
else {console.log('패배')}
