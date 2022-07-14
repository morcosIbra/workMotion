interface Col {
  key: string,
  value: string | JSX.Element
};

export interface TableRow {
  key: string,
  cols: Col[]
}

export interface Props {
  headers: Col[], rows: TableRow[]
}



