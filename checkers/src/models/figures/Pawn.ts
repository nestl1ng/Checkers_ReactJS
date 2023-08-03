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
            //this.cell.isEnemy(target)
            //this.cell.board.getCell(target.x,target.y).isEmpty()
            const direction = this.cell!.figure?.color === Colors.BLACK ? 1 : -1;
            const directionEmpty = this.cell!.figure?.color === Colors.BLACK ? 2 : -2;
            //Идет вправо белая, влево черная
            if ((this.cell!.x < 7)
                && !this.cell!.isEnemy(this.cell!.board.getCell(this.cell!.x + 1, this.cell!.y + direction)!)
                && (target.x === this.cell!.x + 1)
                && (target.y === this.cell!.y + direction)) {
                return true
            }
            //Идет влево белая, вправо черная
            if (
                //(this.cell!.x > 0)&& 
                !this.cell!.isEnemy(this.cell!.board.getCell(this.cell!.x - 1, this.cell!.y + direction)!)
                && (target.x === this.cell!.x - 1)
                && (target.y === this.cell!.y + direction)) {
                return true
            }
            //Если справа от белой враг и за ним пусто - можно есть/Если слева от черной враг и за ним пусто - можно есть
            if ((this.cell!.x < 6)
                && this.cell!.isEnemy(this.cell!.board.getCell(this.cell!.x + 1, this.cell!.y + direction)!)
                && (this.cell!.board.getCell(this.cell!.x + 2, this.cell!.y + directionEmpty)!.isEmpty())
                && (target.x === this.cell!.x + 2)
                && (target.y === this.cell!.y + directionEmpty)) {
                return true
            }
            //Если слеваа от белой враг и за ним пусто - можно есть/Если справа от черной враг и за ним пусто - можно есть
            if ((this.cell!.x > 1)
                && this.cell!.isEnemy(this.cell!.board.getCell(this.cell!.x - 1, this.cell!.y + direction)!)
                && (this.cell!.board.getCell(this.cell!.x - 2, this.cell!.y + directionEmpty)!.isEmpty())
                && (target.x === this.cell!.x - 2)
                && (target.y === this.cell!.y + directionEmpty)) {
                return true
            }
            // if ((target.y === this.cell!.y + direction)
            //     && (target.x === this.cell!.x + 1 || target.x === this.cell!.x - 1)
            //     && !this.cell!.isEnemy(target)) {
            //     return true
            // } 
        } return false
    }
}