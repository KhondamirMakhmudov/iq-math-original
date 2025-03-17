"use client";

import React, { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import RightIcon from "../icons/right";
import Pagination from "../pagination";

// AG Grid modullarini ro'yxatdan o'tkazish
ModuleRegistry.registerModules([AllCommunityModule]);

const GridExample = () => {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const generateRandomData = (count) => {
    const getRandomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomDate = () => {
      const day = getRandomNumber(1, 31).toString().padStart(2, "0");
      const month = getRandomNumber(1, 12).toString().padStart(2, "0");
      const year = getRandomNumber(2020, 2025);
      const hour = getRandomNumber(0, 23).toString().padStart(2, "0");
      const minute = getRandomNumber(0, 59).toString().padStart(2, "0");
      return `${hour}:${minute}, ${day}.${month}.${year}`;
    };

    return Array.from({ length: count }, (_, index) => ({
      id: (index + 1).toString().padStart(2, "0"),
      startTime: getRandomDate(),
      endTime: getRandomDate(),
      value: getRandomNumber(10, 50),
      progress: getRandomNumber(0, 100) + "%",
      rating: getRandomNumber(1, 5),
      stars: "⭐".repeat(getRandomNumber(1, 5)),
      ratio: `${getRandomNumber(1, 5)}/5`,
      action: "Продолжить",
    }));
  };

  const rowData = generateRandomData(50);

  // Ustunlar ta'rifi
  const colDefs = [
    { headerName: "№", field: "id", width: 80 },
    { headerName: "Дата начала", field: "startTime", flex: 1 },
    { headerName: "Дата  завершения", field: "endTime", flex: 1 },
    { headerName: "Задачи", field: "value" },
    { headerName: "Прогресс", field: "progress", flex: 1 },
    { headerName: "Прогресс", field: "stars", flex: 1 },
  ];

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const displayedData = rowData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  return (
    <div className="flex flex-col">
      <div style={{ width: "100%", height: "auto" }}>
        <AgGridReact
          rowData={displayedData}
          columnDefs={colDefs}
          domLayout="autoHeight"
          className="custom-grid"
          pagination={false}
        />
      </div>
      <div className="flex justify-between items-center mt-[36px]">
        <div className="relative inline-block">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-[8px] px-[16px] py-[9px] w-36 text-black text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(0);
            }}
          >
            <option value={5}>Показать по 5</option>
            <option value={10}>Показать по 10</option>
            <option value={20}>Показать по 20</option>
            <option value={50}>Показать по 50</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none rotate-90 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.6169 10L7.1678 5.0814C6.94407 4.83401 6.94407 4.43292 7.1678 4.18554C7.39153 3.93815 7.75428 3.93815 7.97801 4.18554L12.8322 9.55207C13.0559 9.79945 13.0559 10.2005 12.8322 10.4479L7.97801 15.8145C7.75428 16.0618 7.39153 16.0618 7.1678 15.8145C6.94407 15.5671 6.94407 15.166 7.1678 14.9186L11.6169 10Z"
                fill={"#000"}
              />
            </svg>
          </div>
        </div>

        <Pagination
          pageCount={Math.ceil(rowData.length / pageSize)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />

        <div>
          <p className="text-[15px] text-[#8a8a8e]">
            Показаны 1-{pageSize} из {rowData.length} элементов
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridExample;
