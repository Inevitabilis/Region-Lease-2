import { useState, useEffect } from "react";
import { getRegions } from "../databaseConnection";
import { Region } from "../databaseConnection";
import { Table } from "./Table";
import { CollapsableList } from "./CollapsableList";
import { ArrowRight } from "./ArrowRight";
import "./RegionTable.css";

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
        data={tableData}
        columns={[
          { key: "acronym", header: "Acronym" },
          { key: "name", header: "Region name" },
          { key: "author", header: "Author" },
          {
            key: "subregions",
            header: "Subregions",
            // render: (region) => region.subregions.map((subregion) => <p>{subregion}</p>),
            render: (region) => !!region.subregions.length && <CollapsableList array={region.subregions} />,
          },
        ]}
        currentPageFirstItemIndex={firstItemIndexOnPage}
        itemsPerPage={itemsPerPage}
      />

      <div id="region-table-footer">
        <div onClick={async () => setFirstItemIndexOnPage(Math.max(0, firstItemIndexOnPage - itemsPerPage))}>
          <ArrowRight className="arrow-left pressable" scale={5} />
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

        <div
          onClick={async () =>
            setFirstItemIndexOnPage(
              Math.min(Math.max(tableData.length - itemsPerPage, 0), firstItemIndexOnPage + itemsPerPage),
            )
          }
        >
          <ArrowRight scale={5} className="pressable" />
        </div>
      </div>
    </>
  );
}

