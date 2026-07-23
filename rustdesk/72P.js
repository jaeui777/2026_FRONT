getBoard();

function getBoard() {

    const URL = new URLSearchParams(location.search);
    const selectNo = URL.get('no');
    let boarList = localStorage.getItem('boardList');

    if(boardList == null) {
        boardList = [];
    } else {
        boarList = JSON.parse(boardList)
    }
    for ( let i = 0; i <= boarList.length-1, i++) {
        const obj = boarList[i];

    if (obj no == selectNo) {
        document.querySelector('#title').innerHTML = obj.title;
        document.querySelector('#content').innerHTML = obj.content;
    
        return;
    }
    }
}

function boardDelete() {

    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no')
    let boarList = localStorage.getItem('boardList');
    if (boarList == null){
        boarList = [];
    } else {
        boardList = JSON.parse(boarList);
    }

    for( let i = 0, i < boarList.length ; i++)
}
