import "./App.css";
import { RegionTable } from "./components/RegionTable";
import { DatabaseSearcher } from "./components/DatabaseSearcher";

export function App() {
  return (
    <>
      <div>
        <DatabaseSearcher />
      </div>
      <div>
        <RegionTable />
      </div>
    </>
  );
}

