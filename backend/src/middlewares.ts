import { NextFunction, Request, Response } from "express";


export function allowCrossOrigin(req: Request, res: Response, next: NextFunction) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
}

// export function blockIPs(req: Request, res: Response, next: NextFunction) {
//     if(req.ip && blockedIPs.includes( req.ip.toString() )) {
//         res.statusCode(403).send("you have been blocked");
//         return;
//     }
    
// }

// const blockedIPs: string[] = ["127.0.0.1"]