class Region
{
	constructor(name: string, acronym: string, subregions: string[], author: string, isVisible: boolean = false)
	{
		this.name = name;
		this.acronym = acronym;
		this.subregions = subregions;
		this.isVisible = isVisible;
		this.author = author;
	}
	name: string;
    acronym: string;
    subregions: string[];
	isVisible: boolean = false;
	author: string

}


const Database: Region[] = [
	new Region("amogus", "am", ["the vent"], "god", true),
	new Region("half life whatsapp", "hl", ["the ring", "the call", "the hangup"], "gaben", true),
	new Region("fortnite", "fn", [], "epic gay", true),
	new Region("transpog.gay", "tr", [], "wack", true),
	new Region("#building", "bd", ["drama", "criticism", "detrax"], "kali", true),

];

//public data
export function isAcronymInDatabase(acronym: string): boolean {
	return Database.some(x => x.acronym.toUpperCase() == acronym.toUpperCase());
}
//public data
export function isInDatabase(predicate: (arg0: Region) => boolean, requester: string | undefined = undefined): boolean {
	return !!fetchFromDatabase(predicate, requester)
}

//private data
export function fetchEntries(predicate: (arg0: Region) => boolean, requester: string | undefined = undefined): Region[] {
	return Database.filter(x => predicate(x) && isValidForShowing(x, requester));
}

//public data
function fetchFromDatabase(predicate: (arg0: Region) => boolean, requester: string | undefined): Region | undefined {
	
	const region = Database.find(predicate);

	if(region && isValidForShowing(region, requester)) return region;
	return undefined;
}
//filter
function isValidForShowing(region: Region, requester: string | undefined) : boolean
{

	return region.isVisible || (requester !== undefined && region.author == requester);
}