type Region = {
  name: string;
  acronym: string;
  subregions: string[];
  isVisible?: boolean;
  author: string;
};

type RegionPredicate = (region: Region) => boolean;

const Database: Region[] = [
  { name: "amogus", acronym: "am", subregions: ["the vent"], author: "god", isVisible: true },
  {
    name: "half life whatsapp",
    acronym: "hl",
    subregions: ["the ring", "the call", "the hangup"],
    author: "gaben",
    isVisible: true,
  },
  { name: "fortnite", acronym: "fn", subregions: [], author: "epic gay", isVisible: true },
  { name: "transpog.gay", acronym: "tr", subregions: [], author: "wack", isVisible: true },
  {
    name: "#building",
    acronym: "bd",
    subregions: ["drama", "criticism", "detrax"],
    author: "kali",
    isVisible: true,
  },
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

