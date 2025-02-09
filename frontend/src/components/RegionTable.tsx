import { useState, useEffect } from "react";
import { getRegions } from "../databaseConnection";
import { Region } from "../databaseConnection";
import { Table } from "./Table";
import { CollapsableList } from "./CollapsableList";
import { ArrowRight } from "./ArrowRight";
import "./RegionTable.css";
import { clamp } from "../utils/MathUtils";

export function RegionTable() {
  const [tableData, setData] = useState<Region[]>([]);
  //current page
  const [firstItemIndexOnPage, setFirstItemIndexOnPage] = useState(0);
  //how much to offset per click
  const [itemsPerPage, setItemsPerFrame] = useState(5);

  const updateTable = async () => setData(await getRegions({}));

  useEffect(() => {
    updateTable();
  }, []);

  const paginationOptions = [5, 10, 50];

  return (
    <>
      <Table
        data={tableData.slice(firstItemIndexOnPage, firstItemIndexOnPage + itemsPerPage)}
        columns={[
          { key: "acronym", header: "Acronym" },
          { key: "name", header: "Region name" },
          { key: "author", header: "Author" },
          {
            key: "subregions",
            header: "Subregions",
            render: (region) => {
              switch (region.subregions.length) {
                case 0:
                  return;
                case 1:
                  return <p>{region.subregions[0]}</p>;
                default:
                  return <CollapsableList array={region.subregions} />;
              }
            },
          },
        ]}
        keyField="id"
      />

      <div id="region-table-footer">
        <div
          onClick={async () =>
            setFirstItemIndexOnPage(clamp(firstItemIndexOnPage - itemsPerPage, { bottom: 0 }))
          }
        >
          <ArrowRight className="arrow-left pressable" scale={5} />
        </div>

        <div id="page-selection">
          <p>current page: {Math.ceil(firstItemIndexOnPage / itemsPerPage) + 1}</p>
        </div>

        <div
          onClick={async () =>
            setFirstItemIndexOnPage(
              clamp(firstItemIndexOnPage + itemsPerPage, {
                top: Math.max(tableData.length - itemsPerPage, 0),
              }),
            )
          }
        >
          <ArrowRight scale={5} className="pressable" />
        </div>
      </div>

      <div>
        <p>Items per page:</p>
        {paginationOptions.map((optionOfItemsPerPage) => (
          <button
            key={optionOfItemsPerPage.toString()}
            onClick={async () => setItemsPerFrame(optionOfItemsPerPage)}
          >
            {optionOfItemsPerPage}
          </button>
        ))}
      </div>
    </>
  );
}

