import React, { useMemo, useState } from "react";
import styles from "./WordsTable.module.scss";
import { useTable } from "react-table";

import { ActionsModal } from "../actionsModal/ActionsModal";
import { ProgressBar } from "../progressBar/ProgressBar";
import { useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addWordsById, getStatistics } from "../../redux/words/wordsOperation";
import { toast } from "react-toastify";

export const WordsTable = ({ ownWords, allWords }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isDictionaryPage = location.pathname === "/dictionary";
  const [isOpenActionsModal, setIsOpenActionsModal] = useState(false);
  const [currentWordId, setCurrentWordId] = useState(null);
  const [currentWord, setCurrentWord] = useState(null);

  const openModalActionsWord = () => setIsOpenActionsModal(true);
  const closeModalActionsWord = () => setIsOpenActionsModal(false);

  const handleActions = (row) => {
    openModalActionsWord();
    setCurrentWordId(row.original._id);
    setCurrentWord(row.original);
  };

  const handleAddToDictionary = (row) => {
    dispatch(addWordsById(row.original._id))
      .then((response) => {
        if (response.payload) {
          dispatch(getStatistics());
        } else {
          toast.error("Failed to add word to dictionary");
        }
      })
      .catch((error) => {
        toast.error("Failed to add word to dictionary");
      });
  };

  const mobileHiddenCategory = window.innerWidth < 768;
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

      ...((!isDictionaryPage && mobileHiddenCategory) || !mobileHiddenCategory
        ? [
            {
              Header: "Category",
              accessor: "category",
            },
          ]
        : []),
      ...(isDictionaryPage
        ? [
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
          ]
        : [
            {
              Header: "",
              accessor: "addToDictionary",
              Cell: ({ row }) => (
                <button
                  className={styles.addToDictionaryBtn}
                  onClick={() => handleAddToDictionary(row)}
                >
                  <span>Add to dictionary </span>
                  <BsArrowRight color="#85AA9F" />
                </button>
              ),
            },
          ]),
    ],
    // eslint-disable-next-line
    [isDictionaryPage]
  );

  const data = useMemo(() => [ownWords], [ownWords]);
  const dataRecomend = useMemo(() => [allWords], [allWords]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: isDictionaryPage ? data[0] : dataRecomend[0],
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
          currentWord={currentWord}
        />
      )}
    </div>
  );
};
