import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  fieldCount: any;
  rowCount: any;
  X: any = "X";
  O: any = "O";
  currentPlayer: any;
  posMap = {};
  arrX: any = [];
  arrO: any = [];
  winnerCombination: any = [];
  isAiPlayer: any = true;
  winnerMsg: any = "";
  emptyPosArr = [];

  constructor() {
    this.emptyPosArr = ["0_0", "0_1", "0_2", "1_0", "1_1", "1_2", "2_0", "2_1", "2_2"];
    this.posMap = {
      "0_0": 1,
      "0_1": 2,
      "0_2": 3,
      "1_0": 4,
      "1_1": 5,
      "1_2": 6,
      "2_0": 7,
      "2_1": 8,
      "2_2": 9
    };
    this.winnerCombination = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    this.fieldCount = [0, 1, 2];
    this.rowCount = [0, 1, 2];
    this.currentPlayer = "O";//computer player
  }

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    let startPos = Math.floor(Math.random() * Math.floor(3)) + "_" + Math.floor(Math.random() * Math.floor(3));
    this.addPosition(startPos);
  }

  checkWinner(arr) {
    var length = arr.length;
    breakAllLoop:
    for (var i = 0; i < length; i++) {
      for (var j = i + 1; j < length; j++) {
        for (var k = j + 1; k < length; k++) {
          var a = this.posMap[arr[i]];
          var b = this.posMap[arr[j]];
          var c = this.posMap[arr[k]];
          for (var winArr in this.winnerCombination) {
            if (this.winnerCombination[winArr].includes(a) && this.winnerCombination[winArr].includes(b) && this.winnerCombination[winArr].includes(c)) {
              this.endGame();
              break breakAllLoop;
            }
          }
        }
      }
    }
  }

  checkWinnerDummy(arr) {
    var length = arr.length;
    var isWinner = false;
    breakAllLoop:
    for (var i = 0; i < length; i++) {
      for (var j = i + 1; j < length; j++) {
        for (var k = j + 1; k < length; k++) {
          var a = this.posMap[arr[i]];
          var b = this.posMap[arr[j]];
          var c = this.posMap[arr[k]];
          for (var winArr in this.winnerCombination) {
            if (this.winnerCombination[winArr].includes(a) && this.winnerCombination[winArr].includes(b) && this.winnerCombination[winArr].includes(c)) {
              isWinner = true;
              break breakAllLoop;
            }
          }
        }
      }
    }
    return isWinner;
  }

  endGame() {
    this.winnerMsg = "Player " + this.currentPlayer + " is winner!!!";
  }

  addPosition(position) {
    if (this.winnerMsg == "") {
      if (this.currentPlayer == "X") {
        this.arrX.push(position);
        var emptyPosArrIndex = this.emptyPosArr.indexOf(position);
        if (emptyPosArrIndex > -1) {
          this.emptyPosArr.splice(emptyPosArrIndex, 1);
        }
        this.checkWinner(this.arrX);
        this.currentPlayer = "O";
        if (this.isAiPlayer == true)
          this.takeAiPlayerAction(this.arrO,this.arrX,this.emptyPosArr);
      } else {
        this.arrO.push(position);
        var emptyPosArrIndex = this.emptyPosArr.indexOf(position);
        if (emptyPosArrIndex > -1) {
          this.emptyPosArr.splice(emptyPosArrIndex, 1);
        }
        this.checkWinner(this.arrO);
        this.currentPlayer = "X";
      }
    }
  }

  takeAiPlayerAction(arrO,arrX,emptyPosArr) {
    let res_1 = false;
    let res_2 = false;
    var dummyArrO = arrO.slice();
    var dummyArrX = arrX.slice();
    var dummyEmptyPosArr = emptyPosArr.slice();

    allBreak1:
    for (var emptyPos in dummyEmptyPosArr) {
      res_1 = this.algorithm1(dummyEmptyPosArr[emptyPos],dummyArrO);
      if (res_1 == true) {
        this.addPosition(dummyEmptyPosArr[emptyPos]);
        break allBreak1;
      }
    }
    if(res_1 == false){
      allBreak2:
      for (var emptyPos in dummyEmptyPosArr) {
        res_2 = this.algorithm2(dummyEmptyPosArr[emptyPos],dummyArrX);
        if (res_2 == true) {
          this.addPosition(dummyEmptyPosArr[emptyPos]);
          break allBreak2;
        }
      }
    }else{
      return;
    }
    if(res_2 == false){
      dummyEmptyPosArr.splice(0, 1);
      this.takeAiPlayerAction(dummyArrO,dummyArrX,dummyEmptyPosArr);
    }else{
      return;
    }
  }

  //self win
  algorithm1(position,newArrO) {
    //var newArrO = this.dummyArrO.slice();
    newArrO.push(position);
    return this.checkWinnerDummy(newArrO);
  }

  //opponent win
  algorithm2(position,newArrX) {
    //var newArrX = this.dummyArrX.slice();
    newArrX.push(position);
    return this.checkWinnerDummy(newArrX);
  }
}
