/*

    프론트엔드 : 화면, 시각적 요소
    백엔드 : 비지니스로직, 서버
    
    브라우저(크롬/엣지/사파리)에 의존하여 HTML 렌더링(실행)
    HTML 안에 JS/CSS도 포함하여 같이 렌더링 된다.
    브라우저 F5(새로고침) 하면 재렌더링(재요청) 하므로 JS 초기화 한다.
*/
// 1. JS 변수들은 브라우저에서 F5(재렌더링)하면 초기화 된다. 
// 2. HTML 안에 포함된 JS/CSS 파일들은 F12(개발자도구)에서 [Sources] / [Console] 코드 확인이 가능
    // -> 하나의 html에 여러개 js/css 파일 가능하다.
// 3. 서로 다른 .js 파일에서 동일한 HTML에 포함되면 코드 공유 가능
    // test.js 에서 선언된 코드가 , exam1.js에서 호출(사용) 가능


    // [1] 웹 스토리지 객체 호출
    console.log( localStorage )
    console.log( sessionStorage )

    // [2] 웹 스토리지 객체 내 자료 추가 .setItem( 'key' , value )
    sessionStorage.setItem( 'name' , '유재석' )
    // 개발자도구[F12] --> [APPLICATION] -> [왼쪽메뉴] -> 세션스토리지 -> 도메인
    localStorage.setItem( 'age' , 40 )

    // [3] 웹 스토리지 객체 내 자료 삭제 , removeItem( 'key' ) , . clear()
    sessionStorage.removeItem( 'name' ) // 특정한 key가 존재하면 key/value 삭제 // 개발자도구 삭제 결과
    localStorage.clear() // 모든 key 삭제


// [*] 웹 스토리지도 문자열만 지원 *타입변환 필요*
// [5] JSON(자바스크립트객체) , 
// JSON.stringify( 객체 ) : 객체 타입 --> 문자 타입
sessionStorage.setItem( '회원객체' , JSON.stringify({ 'name' : '유재석' , 'age' : 40} ) )
// JSON.parse( 문자열 ) : 문자열 타입 --> 객체 타입 변환
let 회원객체 = JSON.parse( sessionStorage.getItem( '회원객체' ) )
console.log( 회원객체 )

// JS는 브라우저가 F5(새로고침) 메모리가 초기화 된다. 그래서 백엔드가 필요하다