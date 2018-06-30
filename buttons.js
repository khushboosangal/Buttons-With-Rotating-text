var buttons = [];
function createButtons() {
  var div = document.getElementById('btns');
  for( var i = 0; i < 9; i++) {
    var button = document.createElement('button');
    button.setAttribute('id', `btn${i+1}`);
    button.innerHTML = i+1;
    buttons.push(button);
    div.insertAdjacentElement('beforeend', button);
  }

}
createButtons();
var btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function(event) {
  let rotatedArr = rotate();
  changeButtonsText(rotatedArr);
});
var texts = [[1,2,3],[4,5,6],[7,8,9]];

function changeButtonsText(rotatedArr) {
  buttons.forEach(function(button, index) {
    button.innerHTML = rotatedArr[index];
  });
};

function rotate() {
  var m = texts.length;
  var n = texts[0].length;
  var row, col, prev, curr;
  row = col = prev = curr = 0;
  /*
  First row shift
  */
  prev = texts[row+1][col];
  for(let i = col; i < n; i++) {
    curr = texts[row][i];
    texts[row][i] = prev;
    prev = curr;
  }
  row++;
  /*
  	Last column shift
  */
  for(let i = row; i < m; i++) {
    curr = texts[i][n-1];
    texts[i][n-1] = prev;
    prev = curr;
  }
  n--;
  /*
  	Last row shift
  */
  for(let i = n-1; i >= col; i--) {
    curr = texts[m-1][i];
    texts[m-1][i] = prev;
    prev = curr;
  }
  m--;
  /*
  	First column shift
  */
  for(let i = m - 1; i >= row; i--) {
    curr = texts[i][col];
    texts[i][col] = prev;
    prev = curr;
  }
  col++;
  var newArr = [];
  texts.forEach(function(text){
    newArr = newArr.concat(text);
  });
  return newArr;
}
