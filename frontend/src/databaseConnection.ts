const backendAddress: string = "http://127.0.0.1:3000";

export type Region = {
  name: string;
  acronym: string;
  subregions: string[];
  author: string;
};

type DatabaseDataParams = {
  name?: string;
  acronym?: string;
  author?: string;
};

//WARNING: this function fetches NO hidden data
export async function getRegions(params: DatabaseDataParams) {
  const urlquery = new URLSearchParams(params);

  const url = new URL("fetchEntries", backendAddress);

  url.search = urlquery.toString();
  const response = await fetch(url.toString(), {
    method: "GET",
  });
  let returnedRegionArray: Region[] | undefined = await response.json();
  returnedRegionArray ??= [];
  return returnedRegionArray;
}

export async function isAcronymInDatabase(acronym: string) {
  const url = new URL(`fetchAcronym/${acronym}`, backendAddress);
  const response = await fetch(url.toString(), {
    method: "GET",
  });

  const returnedBoolean: boolean = await response.json();
  return returnedBoolean;
}

