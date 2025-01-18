import "./App.css";
import { DatabaseSearcher } from "./components/DatabaseSearcher";
import { RegionTable } from "./components/RegionTable";

export function App() {
  return (
    <>
      <div>
        <DatabaseSearcher />
      </div>
      <RegionTable />
    </>
  );
}
