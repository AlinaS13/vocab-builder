// import React from "react";
// import { useTable } from "react-table";

// export const WordsTable = () => {
//   const data = React.useMemo(
//     () => [
//       {
//         col1: "Row 1, Col 1",
//         col2: "Row 1, Col 2",
//         col3: "Row 1, Col 3",
//         col4: "Row 1, Col 4",
//         col5: "Row 1, Col 5",
//       },
//       {
//         col1: "Row 2, Col 1",
//         col2: "Row 2, Col 2",
//         col3: "Row 2, Col 3",
//         col4: "Row 2, Col 4",
//         col5: "Row 2, Col 5",
//       },
//       // Add more rows as needed
//     ],
//     []
//   );

//   const columns = React.useMemo(
//     () => [
//       { Header: "Column 1", accessor: "col1" },
//       { Header: "Column 2", accessor: "col2" },
//       { Header: "Column 3", accessor: "col3" },
//       { Header: "Column 4", accessor: "col4" },
//       { Header: "Column 5", accessor: "col5" },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <table
//       {...getTableProps()}
//       style={{ border: "solid 1px blue", marginTop: "20px" }}
//     >
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th
//                 {...column.getHeaderProps()}
//                 style={{
//                   borderBottom: "solid 3px red",
//                   background: "aliceblue",
//                   padding: "8px 0",
//                 }}
//               >
//                 {column.render("Header")}
//               </th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return (
//                   <td
//                     {...cell.getCellProps()}
//                     style={{ padding: "10px", border: "solid 1px gray" }}
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };
