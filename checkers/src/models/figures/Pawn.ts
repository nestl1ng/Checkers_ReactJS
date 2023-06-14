import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackLogo from "../../assets/BlackChecker.png";
import whiteLogo from "../../assets/WhiteChecker.png";

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        } else {
            const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
            if ((target.y === this.cell.y + direction)
                && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)) {
                return true
            }
        } return false
    }

    // moveFigure(target: Cell): void {

    // }
}