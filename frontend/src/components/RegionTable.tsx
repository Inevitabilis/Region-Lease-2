import { useState, useEffect } from "react";
import { getRegions } from "../databaseConnection";
import { Region } from "../databaseConnection";

export function RegionTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>region</th>
          <th>acronym</th>
          <th>author</th>
          <th>subregions</th>
        </tr>
      </thead>
      <tbody>
        <TableRows />
      </tbody>
    </table>
  );
}

function TableRows() {
  const [tableDataRef, setdata] = useState<Region[]>([]);
  async function updateTable() {
    const result = await getRegions({});
    setdata(result);
  }
  useEffect(() => {
    updateTable();
  }, []);
  return tableDataRef.map((region) => {
    return (
      <tr key={region.name}>
        <td>{region.name}</td>
        <td>{region.acronym}</td>
        <td>{region.author}</td>
        <td>
          <DisplaySubregions subregions = {region.subregions} />
        </td>
      </tr>
    );
  });
}

type subregionsContainer = {
  subregions: string[]
}

function DisplaySubregions({subregions}: subregionsContainer)
{
  return subregions.map((subregion) => {
    return <p key = {subregion}>{subregion}</p>
  });
}

