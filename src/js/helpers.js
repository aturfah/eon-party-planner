import React from 'react';
import Table from 'react-bootstrap/Table';

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function generateTableHTML(headers, rows) {
  const headerTH = [];
  headers.forEach(function(headerName) {
    headerTH.push(<td key={headerName}>{headerName}</td>)
  });

  return (
    <Table responsive="xl" size="sm">
      <thead>
        <tr>
          {headerTH}
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}
