import React from "react";
import * as S from "./styles";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { sortRows, filterRows } from "./helpers";

const TopNftTable = (props) => {
  const { statsData, selectedOption } = props;
  const [tableData, setTableData] = useState(statsData);
  const [sortConfig, setSortConfig] = useState({
    sortKey: "volume",
    direction: "ascending",
  });

  useEffect(() => {
    sortedAndFilteredData();
  }, [sortConfig, selectedOption ]);

  const sortedAndFilteredData = () => {
    const changedData = [...statsData];

    if (selectedOption.label !== "All Categories") {
      const filteredRows = filterRows(changedData, selectedOption.label);
      const sortedRows = sortRows(filteredRows, sortConfig);
      setTableData(sortedRows);
    } else {
      const sortedRows = sortRows(changedData, sortConfig);
      setTableData(sortedRows);
    }
  };

  const handleItemClick = (sortKey) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.sortKey === sortKey &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ sortKey, direction });
  };

  return (
    <S.TableWrapper>
      <thead>
        <S.TableHeader>
          <S.FirstTableCell>Collection</S.FirstTableCell>
          <S.TableHeaderCell onClick={() => handleItemClick("volume")}>
            Volume <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("hours")}>
            24h % <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("days")}>
            7d % <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("floorPrice")}>
            Floor Price <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("owners")}>
            Owners <MdKeyboardArrowDown />
          </S.TableHeaderCell>
          <S.TableHeaderCell onClick={() => handleItemClick("items")}>
            Items <MdKeyboardArrowDown />
          </S.TableHeaderCell>
        </S.TableHeader>
      </thead>
      <S.Body>
        {tableData.length === 0 ? (
          <S.NotFound>Not found</S.NotFound>
        ) : (
          tableData.map((element) => (
            <S.TableRow key={element.id}>
              <S.FirstCellBody>
                {element.id} <S.Avatar src={element.avatar} alt="avatar" />{" "}
                {element.author}
              </S.FirstCellBody>
              <S.BodyCell>
                {" "}
                <S.EthLogo
                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                {element.volume}
              </S.BodyCell>
              <S.HoursCell {...element}>{element.hours}%</S.HoursCell>
              {element.days === null ? (
                <S.DaysCell>---</S.DaysCell>
              ) : (
                <S.DaysCell {...element}>{element.days}%</S.DaysCell>
              )}
              <S.BodyCell>
                {" "}
                <S.EthLogo
                  src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg"
                  alt="eth"
                />
                {element.floorPrice}
              </S.BodyCell>
              <S.BodyCell>{element.owners}K</S.BodyCell>
              <S.BodyCell>{element.items}K</S.BodyCell>
            </S.TableRow>
          ))
        )}
      </S.Body>
    </S.TableWrapper>
  );
};

export { TopNftTable };
