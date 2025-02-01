type Region = {
  id: number;
  name: string;
  acronym: string;
  subregions: string[];
  isVisible?: boolean;
  author: string;
};

type RegionPredicate = (region: Region) => boolean;

const Database: Region[] = [
  { id: 1, name: "amogus", acronym: "am", subregions: ["the vent"], author: "god", isVisible: true },
  {
    id: 2,
    name: "half life whatsapp",
    acronym: "hl",
    subregions: ["the ring", "the call", "the hangup"],
    author: "gaben",
    isVisible: true,
  },
  { id: 3, name: "fortnite", acronym: "fn", subregions: [], author: "epic gay", isVisible: true },
  { id: 4, name: "transpog.gay", acronym: "tr", subregions: [], author: "wack", isVisible: true },
  {
    id: 5,
    name: "#building",
    acronym: "bd",
    subregions: ["drama", "criticism", "detrax"],
    author: "kali",
    isVisible: true,
  },
  {
    id: 6,
    name: "job",
    acronym: "jb",
    subregions: [],
    author: "aira",
    isVisible: true,
  },
  {
    id: 7,
    name: "black grug",
    acronym: "bg",
    subregions: [],
    author: "wack",
    isVisible: true,
  },
  {
    id: 8,
    name: "modhole",
    acronym: "mh",
    subregions: ["building", "wetcode", "uncat-relevant"],
    author: "henpemaz",
    isVisible: true,
  }
];

//public data
export function isAcronymInDatabase(acronym: string): boolean {
  return Database.some((region) => region.acronym.toUpperCase() == acronym.toUpperCase());
}

/** returns publicly available regions */
export function fetchEntries(
  predicate: RegionPredicate,
  requester: string | undefined = undefined,
): Region[] {
  return Database.filter((region) => isValidForShowing(region, requester) && predicate(region));
}

//filter
function isValidForShowing(region: Region, requester: string | undefined): boolean {
  return region.isVisible || (requester !== undefined && region.author == requester);
}

