// 반복문 : for ( 초기값 ; 조건식 ; 증감식) { 실행문 }
// 배열과 반복문 관계 : 배열의 인덱스는 0부터 요소/자료가 저장되는 순서 규칙
// 즉] 인덱스는 0부터 마지막 인덱스는 1씩 증가

//[1] 배열의 데이터를 하나씩 출력
let 과일목록 = ['사과','포도', '딸기']
//1.
console.log(과일목록[0])
console.log(과일목록[1])
console.log(과일목록[2])
// 2. length란? 배열내 요소/자료 개수 반환, 마지막 인덱스 : 배열. length - 1
for (let 인덱스 = 0 ; 인덱스 <= 과일목록.lenth - 1 ; 인덱스++){console.log(과일목록[인덱스]) }

//(생각해보기) 3개의 이름을 입력받아 배열에 저장하고 배열에 저장된 이름들을 html 출력하시오.
let 이름 = []

for (let i = 0; i < 3; i++) {
    이름[i] = prompt(`${i + 1}번째 이름을 입력하세요.`)
}

for (let i = 0; i < 이름.length; i++) {
    document.write(`${이름[i]} <br>`)
}

//반복문 제어키워드
//1. continue;
for( let 반복수 = 1 ; 반복수 <= 5 ; 반복수++){
    //만약에 반복수가 3이면 contunue 만나면 코드 흐름이 증감식으로 이동한다.
    if( 반복수 == 3) continue //가장 가까운 반복문의 증감식으로 흐름 이
    console.log( 반복수 ) // 즉) 반복수가 3이면 console.log 실행안됨'
}

// 2. break; 반복문의 탈출//종료
for( let 반복수 = 1 ; 반복수 <= 5 ; 반복수 ++ ) {
    if(반복수==3)(break) //break 만나면
    console.log(반복수)
} 
    
// 여기로 이동

// 3. 무한루프 (무한반복) * 특정조건의 break 권
for( ; ;) (console.log('무한출력중'))
    for( ; ;){
        let 입력 = prompt()
        let(입력 == 'EXIT') (break)
    }