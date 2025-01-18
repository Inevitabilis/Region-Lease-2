import { useState } from "react";
import { isAcronymInDatabase } from "../databaseConnection";

export function DatabaseSearcher() {
  const [currentlabel, setLabel] = useState("Find out if your acronym is taken!");
  const [acronym, setAcronym] = useState("");

  return (
    <>
      <p>{currentlabel}</p>
      <input type="text" onChange={(event) => setAcronym(event.target.value)} placeholder="acronym" />
      <button
        type="submit"
        onClick={async () => {
          if (acronym.length < 2) {
            setLabel("it's not even two symbols long c'mon you can try better");
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

