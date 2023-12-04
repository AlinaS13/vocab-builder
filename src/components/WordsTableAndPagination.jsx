// const WordsTableAndPagination = ({ searchQuery }) => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(isLoadingWords);
//   const allWords = useSelector(selectAllWords);
//   const { results, totalPages, page, perPage } = useSelector(selectAllWords);

//   useEffect(() => {
//     dispatch(
//       getAllWords({
//         searchQuery,
//         page: allWords.page,
//         perPage: allWords.perPage,
//       })
//     );
//   }, [dispatch, searchQuery, allWords.page, allWords.perPage]);

//   const handlePageChange = (newPage) => {
//     dispatch(
//       getAllWords({ searchQuery, page: newPage, perPage: getAllWords.perPage })
//     );
//   };

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={styles.recommendContainer}>
//           {results.length > 0 && <WordsTable allWordss={results} />}
//           {totalPages > 1 && (
//             <WordsPagination
//               page={page}
//               totalPages={totalPages}
//               perPage={perPage}
//               onPageChange={handlePageChange}
//             />
//           )}
//         </div>
//       )}
//     </>
//   );
// };
