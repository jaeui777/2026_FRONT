// 글쓰기 함수
function boardWrite() {
    // 1. 입력한 값 가져오기
    const titleInput =
        document.querySelector('#titleInput');

    const contentInput =
        document.querySelector('#contentInput');

    const pwdInput =
        document.querySelector('#pwdInput');

    const title = titleInput.value;
    const content = contentInput.value;
    const pwd = pwdInput.value;

    const obj = {title, content, pwd};

    // 3. localStorage에서 게시물 목록 가져오기
    let boardList =
        localStorage.getItem('boardList');

    // 저장된 게시물이 없을 때
    if (boardList === null) {
        boardList = [];
    } else {
        // JSON 문자열을 배열로 변환
        boardList = JSON.parse(boardList);
    }

    // 4. 게시물 번호 만들기
    if (boardList.length === 0) {
        board.no = 1;
    } else {
        board.no =
            boardList[boardList.length - 1].no + 1;
    }

    // 5. 게시물 배열에 새 게시물 추가
    boardList.push(board);

    // 6. 배열을 JSON 문자열로 변환하여 저장
    localStorage.setItem(
        'boardList',
        JSON.stringify(boardList)
    );

    // 7. 안내 후 목록 페이지로 이동
    alert('게시물 등록 성공');

    location.href = 'exam3.html';
}