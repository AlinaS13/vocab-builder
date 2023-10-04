import React, { useMemo } from "react";
import styles from "./WordsTable.module.scss";
import { useTable } from "react-table";

export const WordsTable = ({ ownWords }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Word",
        accessor: "en",
      },
      {
        Header: "Translation",
        accessor: "ua",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Progress",
        accessor: "progress",
      },
      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );

  const data = useMemo(() => [ownWords], [ownWords]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: data[0],
    });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
