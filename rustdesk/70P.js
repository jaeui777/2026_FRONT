function boardWrite() {
    //  1. 입력한 값 가져오기 // **입력받은 값은 value 속성으로 가져옵니다.
    // ** 아이디는 .이 아닌 # 사용 합니다.
    let titleinput = document.querySelector("#titleinput").value;
    let contentinput = document.querySelector("#contentinput").value;
    let pwdinput = document.querySelector("#pwdinput").value;


    // **객체는 { } 중괄호 사용 합니다. 
    let obj = {titleinput , contentinput , pwdinput}

    let boardList = localStorage.getItem('boardList');  
    
    // 2. 저장된 게시물이 없을 경우
    if(boardList === null) {
        boardList = [];
    } else {
        boardList = JSON.parse(boardList);
    }

    // 3. 게시물 번호
    if (boardList.length === 0) {
        obj.no = 1;
    } else {
        obj.no = boardList[boardList.length - 1].no+1
    }

    // 4. 게시물 배열에 새 게시물 추가
    boardList.push(obj);
    // **웹 스토리지에 저장할때는 get이 setItem 사용 
     localStorage.setItem('boardList', JSON.stringify(boardList));

    // 5. 목록 페이지로 이동
    alert( '게시물 등록 성공')
    location.href = '71P.html'
} 