let url = new URLSearchParams( location.search );
console.log( url )
let name = url.get( 'name' )
console.log( name )

// [2] 페이지 이동하는 방법
//  1) <a href="웹주소"> 링크 </> 
let pcode = url.get( 'pcdoe' );
let page = url.get( 'page' );
console.log( pcode, page )
// 2) location.href = "웹주소"
function 링크함수() {
    location.href = "exam2.html?name=강호동"
}

let value = 0;
function 증가함수() {
    value + 1
    document.querySelector('#box1').innerHTML = value
} // f end
setInterval( 증가함수 , 100 )

function 시계함수() {
    let today = new Date() // 1) 현재 날짜/시간
    let hour = today.getHours()     // 2) 시
    let minute = today.getMinutes() // 3) 분
    let second = today.getSeconds() // 4) 초
    let time = `${ hour } : ${ minute } : ${ second }`
    document.querySelector('#box2').innerHTML = time
} // f end  
// [2]
setInterval( 시계함수, 1000 )


let time = 0; // 초 저장하는 변수
let timeInter; // 인터벌 저장하는 변수
function 타이머시작() {
    timeInter = setInterval( 타이머함수 , 1000)
} // f end

function 타이머함수(){
    time++;
    document.querySelector('#box').innerHTML = time
}   
function 타이머종료() {
    clearInterval(  timeInter )
}