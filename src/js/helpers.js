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

export function mergeObject(baseObj, newObj) {
  Object.keys(baseObj).forEach(function(keyName) {
    if (typeof baseObj[keyName] === 'number') {
      baseObj[keyName] += newObj[keyName];
    } else if (Array.isArray(baseObj[keyName])) {
      newObj[keyName].forEach(function(value) {
        if (!baseObj[keyName].includes(value)) {
          baseObj[keyName].push(value);
        }
      });
    } else if (typeof baseObj[keyName] === 'object') {
      baseObj[keyName] = mergeObject(baseObj[keyName], newObj[keyName]);
    }
  });

  return baseObj;
}