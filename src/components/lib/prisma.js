import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient(); //if our global object has anything like prisma take that

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

//globalThis.prisma = db; //if we are in development mode, we can use the global object to avoid multiple instances of PrismaClient
//if we are in production mode, we create a new instance of PrismaClient
