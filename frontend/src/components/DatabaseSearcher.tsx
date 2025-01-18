import { useState } from "react";
import { isAcronymInDatabase } from "../databaseConnection";

export function DatabaseSearcher() {
  const [currentlabel, setLabel] = useState("Find out if your acronym is taken!");
  const [acronym, setAcronym] = useState("");

  return (
    <>
      <p>{currentlabel}</p>
      <input
        type="text"
        value={acronym}
        onChange={(event) => {
          const input = event.target.value;
          if (input.length < 2) {
            setLabel("The acronym must be at least two symbols long");
          } else {
            setLabel("Find out if your acronym is taken!");
          }
          setAcronym(input);
        }}
        placeholder="acronym"
      />
      <button
        type="submit"
        disabled={acronym.length < 2}
        onClick={async () => {
          if (acronym.length < 2) {
            return;
          }
          const result = await isAcronymInDatabase(acronym);
          if (result) setLabel("your acronym is in database");
          else setLabel("your acronym is free");
        }}
      >
        search
      </button>
    </>
  );
}

