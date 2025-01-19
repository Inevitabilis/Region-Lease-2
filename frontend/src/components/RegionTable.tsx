import { useState, useEffect } from "react";
import { getRegions } from "../databaseConnection";
import { Region } from "../databaseConnection";
import { Table } from "./Table";
import { CollapsableList } from "./CollapsableList";

export function RegionTable() {
  const [tableData, setData] = useState<Region[]>([]);

  const updateTable = async () => setData(await getRegions({}));

  useEffect(() => {
    updateTable();
  }, []);

  return (
    <Table
      data={tableData}
      columns={[
        { key: "name", header: "Region name" },
        { key: "acronym", header: "Acronym" },
        { key: "author", header: "Author" },
        {
          key: "subregions",
          header: "Subregions",
          // render: (region) => region.subregions.map((subregion) => <p>{subregion}</p>),
          render: (region) => (!!region.subregions.length && <CollapsableList array={region.subregions}/>)
        },
      ]}
    />
  );
}

