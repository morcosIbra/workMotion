import React from "react";

import { Props } from "./types";

import { TableWrapper, HeaderCol, HeaderRow, Row, RowCol } from "./style";

const Table = ({ headers, rows }: Props) => (
  <TableWrapper>
    <thead>
      <HeaderRow>
        {headers.map(({ key, value }) => (
          <HeaderCol key={key}>{value}</HeaderCol>
        ))}
      </HeaderRow>
    </thead>
    <tbody>
      {rows.map(({ key, cols }) => (
        <Row key={key}>
          {cols.map(({ key, value }) => (
            <RowCol key={key}>{value}</RowCol>
          ))}
        </Row>
      ))}
    </tbody>
  </TableWrapper>
);

export default Table;
