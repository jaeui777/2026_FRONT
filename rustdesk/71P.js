boardPrint();
    // 게시물 전체 출력 함수
function boardprint() {

    // tbody 가져오기
    let boardTbody = document.querySelector('.boardTbody')
    
    // localStorage에서 게시물 목록 가져오기
    let boardList = localStorage.getItem('boardList');

    // 만약 저장된 게시물이 없을 때
    if( boardList === null ){
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    // 출력할 문자열 생성
    let html = '';
    for ( let i = 0; i <= boardList.length - 1 ; i++ ) {
        let board = boardList[i];
    }

    html += 
    <tr>
        <td> `${boardList} </td>
        <td> <a href = "71P.html?no=${board.no)">
            ${boardList}
            </a></td>
    </tr>
        boardTbody.innerHTML = html;
    }