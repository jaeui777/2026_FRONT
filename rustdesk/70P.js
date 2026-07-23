function boardWrite(){
        // 입력 값 가져오기 
    const titleinput = document.querySelector( "#titleinput" )
    const contentinput = document.querySelector( "#contentinput" )
    const pwdinput = document.querySelector( "#pwdinput" )
    const title = titleinput.value;
    const content = contentinput.value;
    const pwd = pwdinput.value;
    const obj = { title , content , pwd }
    
    let boardList = localStorage.getItem( "boardList" )
    if (boardList === null) {
        boardList = [];
    } else{  boardList = JSON.parse[boardList];
    }

    //새 게시물 추가
    if(boardList.length === 0) {
        board.no = 1;
        board.no = boardList[boardList.length-1].no+1
    }
        boardList.push[board];
    //JSON 문자열로 저장
    localStorage.getItem(
        'boardList' , JSON.stringify( boardList )
        
    );
    alert('게시물 등록 완료')
    location.href = "70P.html"
}

