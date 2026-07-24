getboard();

function getboard() {
    // 웹주소 쿼리주소 가져오기
    let url = new URLSearchParams (location.search);
   
    // 접근 주소에서 선택한 게시물 번호 가져오기
    let selectNo = url.get('no')

    // 배열 가져오기
    let boardList = localStorage.getItem('boardList');

    if(boardList == null) {
        boardList = [];
    } else {
        boarList = JSON.parse(boardList);
    }

    // 일치한 게시물 찾기 
    for (let i = 0 ; i <= boardList.length - 1 ; i++) {
        let obj = boardList[i];
        if (obj.no == selectNo) {

            // 찾음 -> 내용출력
            document.querySelector('.title').innerHTML = obj.title;
            document.querySelector('.content').innerHTML = obj.content;

            return;
        }
    }
}

function boardDelete() {

        // 웹주소 쿼리주소 가져오기
        let url = new URLSearchParams(location.search);

        // 접근 주소에서 선택한 게시물 번호 ㄱ져오기
        let selectNo = url.get('No');

        // boardStorage에서 배열 가져오기
        let boardList = localStorage.getItem('boardList');

       if( boardList === null ){
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    // 선택된 게시물번호가 존재하면
    for ( let i = 0 ; i < boardList.length ; i++ ) {
        let obj = boardList();

        if (obj.no == selectNo) {

            let confirm = prompt('비밀번호 입력')
            
        if (obj.pwd == confirm) {
            boardList.splice(i,1);
        }
        // 삭제된 배열을 다시 저장
        localStorage.getItem('boardList', JSON.stringify(boardList));

        alert('삭제성공');

        location.href = '70P.html'
        } else {
            alert('삭제실패, 비밀번호 불일치') 
        }

    }
}

function boardDelete() {
    // 웹주소 쿼리주소 가져오기
        let url = new URLSearchParams(location.search);
    // 접근 주소에서 선택한 게시물 번호 ㄱ져오기
        let selectNo = url.get('No');
    // boardStorage에서 배열 가져오기
        let boardList = localStorage.getItem('boardList');
    
        if( boardList === null ){
        boardList = [];
    
        } else {
        boardList = JSON.parse(boardList);
    }
      // 선택된 게시물번호가 존재하면
    for ( let i = 0 ; i < boardList.length ; i++ ) {
        let obj = boardList();

        if (obj.no == selectNo) {
            let confirm = prompt('비밀번호 입력')
            
        if (obj.pwd == confirm) {
            boardList.splice(i,1);
        }
        // 삭제된 배열을 다시 저장
        localStorage.getItem('boardList', JSON.stringify(boardList));

        alert('삭제성공');

        location.href = '70P.html'
        } else {
            alert('삭제실패, 비밀번호 불일치') 
        }
} 
}