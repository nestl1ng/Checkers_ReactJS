import React, { FC } from 'react'
import { Cell } from '../models/Cell';

interface CellProps {
  cell: Cell
}

const CellComp: FC<CellProps> = ({cell}) => {
  return (
    <div className={["Cell", cell.color].join(' ')}></div>
  );
};

export default CellComp