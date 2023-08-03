import logo from "../../assets/BlackChecker.png"
import { Cell } from "../Cell";
import { Colors } from "../Colors";

export enum FigureNames {
    FIGURE = "Фигура",
    PAWN = "Пешка",
    KING = "Дамка"
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell | null;
    name: FigureNames;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        if (this.cell) {
            this.cell.figure = this;
        }
        this.logo = null;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false
        } else
            return true
    }

    moveFigure(target: Cell) {
    }
}