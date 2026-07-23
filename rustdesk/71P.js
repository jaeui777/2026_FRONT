boardPrint();
function boardPrint() {
    const boardTbody = document.querySelector('#boardTbody')
let boardList = localStorage.getItem('boardList');
// 저장된 게시물이 만약 없을 때
    if(boardList === null) {
        boardList = [];
    } else { //JSON 문자 변환
        boardList = JSON.parse(boardList);
    }
let html = '';
for( let i = 0; i<= boardList.length-1; i++)
   {const board = boardList[i];
    html +=
    <tr>
        <td> `${board.no}` </td>
        <td> <a href="71P.html?no=${board.no}"> ${board.title}
        </a>
        </td>
    </tr>
}
boardTbody.innerHTML = html;
}
