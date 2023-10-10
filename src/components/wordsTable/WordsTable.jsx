import React, { useMemo, useState } from "react";
import styles from "./WordsTable.module.scss";
import { useTable } from "react-table";

import { ActionsModal } from "../actionsModal/ActionsModal";
import { ProgressBar } from "../progressBar/ProgressBar";

export const WordsTable = ({ ownWords }) => {
  const [isOpenActionsModal, setIsOpenActionsModal] = useState(false);
  const [currentWordId, setCurrentWordId] = useState(null);

  const openModalActionsWord = () => setIsOpenActionsModal(true);
  const closeModalActionsWord = () => setIsOpenActionsModal(false);

  const handleActions = (row) => {
    openModalActionsWord();
    setCurrentWordId(row.original._id);
    // console.log(row.original._id);
  };
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
        Cell: ({ cell }) => <ProgressBar value={cell.value} />,
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <button
            className={styles.actionBtn}
            onClick={() => handleActions(row)}
          >
            ...
          </button>
        ),
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
    <div className={styles.tableWrp}>
      <table {...getTableProps()} className={styles.table}>
        <thead className={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <tr
              className={styles.trHead}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th className={styles.thHead} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tBody} {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr className={styles.trBody} {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className={styles.tdBody} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {isOpenActionsModal && (
        <ActionsModal
          isOpen={isOpenActionsModal}
          onClose={closeModalActionsWord}
          currentWordId={currentWordId}
        />
      )}
    </div>
  );
};
