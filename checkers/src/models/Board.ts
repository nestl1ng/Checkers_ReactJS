import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Pawn } from "./figures/Pawn";

export class Board {
    cells: Cell[][] = []

    public highlightCells(selectedCell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i];
            for (let j = 0; j < row.length; j++) {
                const target = row[j];
                target.avalibale = !!selectedCell?.figure?.canMove(target);
            }
        }
    }

    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }

    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null)) //Черные Ячейки
                } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) //Белые Ячейки
                }
            }
            this.cells.push(row);
        }
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            if (i % 2 === 1) {
                new Pawn(Colors.BLACK, this.getCell(i, 0));
                new Pawn(Colors.WHITE, this.getCell(i, 6));
                new Pawn(Colors.BLACK, this.getCell(i, 2));
            } else {
                new Pawn(Colors.BLACK, this.getCell(i, 1));
                new Pawn(Colors.WHITE, this.getCell(i, 5));
                new Pawn(Colors.WHITE, this.getCell(i, 7));
            }
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigures() {
        this.addPawns();
    }
}