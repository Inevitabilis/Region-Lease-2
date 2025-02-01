import express from "express";
import { fetchEntries, isAcronymInDatabase } from "./database";

export function Route(app: express.Express) {
  app.get("/test", (req, res) => {
    res.send("Hello from backend!");
  });

  app.get("/fetchAcronym/:acronym", (req, res) => {
    const acronym = req.params.acronym;
    const result = isAcronymInDatabase(acronym);
    res.status(200).send(result);
  });

  app.get("/fetchEntries", (req, res) => {
    try {
      //faulty request divert
      if (req.query === undefined) {
        res.status(400).send([]);
        return;
      }
      //getting required data from request
      const author = req.query.author;
      const acronym = req.query.acronym;
      const regionName = req.query.regionName;
      //getting data from database
      const regions = fetchEntries((region) => {
        return (
          (author === undefined || region.author == author) &&
          (acronym === undefined || region.acronym == acronym) &&
          (regionName === undefined || region.name == regionName)
        );
      });
      //stripping unnecessary properties off regions
      const strippedRegions: FrontEndRegion[] = regions.map<FrontEndRegion>((region) => {
        return { id: region.id, name: region.name, subregions: region.subregions, author: region.author, acronym: region.acronym };
      });

      res.status(200).send(strippedRegions);
    } catch (e) {
      console.log(e);
    }

    
  });
}

type FrontEndRegion = {
  id: number
  name: string;
  subregions: string[];
  author: string;
  acronym: string;
};

