import React, { FC } from 'react'
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell,
  selected: boolean,
  click: (cell: Cell) => void
}

const CellComp: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div className={["Cell", cell.color, selected ? "Selected" : ""].join(' ')}
      onClick={() => click(cell)}
      style={{ background: cell.avalibale && cell.figure ? "green" : "" }}>
      {cell.avalibale && !cell.figure && <div className='available' />}
      {cell.figure?.logo && <img src={cell.figure.logo} alt=""></img>}
    </div>

  );
};

export default CellComp