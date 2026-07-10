let 칸 = ["","","","","","","","",""]
let 순서 = "O"
let 위치 = Number(prompt("O 차례입니다. 1~9 칸 중 위치를 입력해주세요")) - 1
칸[위치] = 순서
console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "X"

위치 = Number(prompt("X 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])

순서 = "O"

위치 = Number(prompt("O 차례입니다. 1~9 중 위치를 입력하세요.")) - 1
칸[위치] = 순서

console.log(칸[0], 칸[1], 칸[2])
console.log(칸[3], 칸[4], 칸[5])
console.log(칸[6], 칸[7], 칸[8])



if ('O' == 칸[0] &'O' == 칸[1] & 'O' == 칸[2]) {console.log('O 승리')}    
else if ('O' == 칸[3] &'O' == 칸[4] & 'O' == 칸[5]) {console.log(' O 승리')}
else if ('O' == 칸[6] &'O' == 칸[7] & 'O' == 칸[8]) {console.log('O 승리')}
else if ('O' == 칸[0] &'O' == 칸[4] & 'O' == 칸[8]) {console.log('O 승리')}
else if ('O' == 칸[2] &'O' == 칸[4] & 'O' == 칸[6]) {console.log('O 승리')}
else if ('O' == 칸[0] &'O' == 칸[3] & 'O' == 칸[6]) {console.log('O 승리')}
else if ('O' == 칸[1] &'O' == 칸[4] & 'O' == 칸[7]) {console.log('O 승리')}
else if ('O' == 칸[2] &'O' == 칸[5] & 'O' == 칸[8]) {console.log('O 승리')}
else {console.log('O 패배')}

if ('X' == 칸[0] &'X' == 칸[1] & 'X' == 칸[2]) {console.log('X 승리')}    
else if ('X' == 칸[3] &'X' == 칸[4] & 'X' == 칸[5]) {console.log('X 승리')}
else if ('X' == 칸[6] &'X' == 칸[7] & 'X' == 칸[8]) {console.log('X 승리')}
else if ('X' == 칸[0] &'X' == 칸[4] & 'X' == 칸[8]) {console.log('X 승리')}
else if ('X' == 칸[2] &'X' == 칸[4] & 'X' == 칸[6]) {console.log('X 승리')}
else if ('X' == 칸[0] &'X' == 칸[3] & 'X' == 칸[6]) {console.log('X 승리')}
else if ('X' == 칸[1] &'X' == 칸[4] & 'X' == 칸[7]) {console.log('X 승리')}
else if ('X' == 칸[2] &'X' == 칸[5] & 'X' == 칸[8]) {console.log('X 승리')}
else {console.log('X 패배')}
