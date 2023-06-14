import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    avalibale: boolean; //Можно ли переместить
    id: number; //Для ReactKey

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.avalibale = false;
        this.id = Math.random();
    }

    isEmpty():boolean {
        return this.figure === null;
    }

    isEnemy(target:Cell):boolean{
        if(target.figure){
            return this.figure?.color!==target.figure.color;
        } return false
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);
        if (absX !== absY) {
            return false;
        }
        else {
            const dy = this.y < target.y ? 1 : -1;
            const dx = this.x < target.x ? 1 : -1;
            for (let i = 1; i < absY; i++) {
                if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                    return false
                } else return true
            }
        } return true
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {
            this.figure.moveFigure(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}