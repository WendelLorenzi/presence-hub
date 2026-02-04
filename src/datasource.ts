import MongoDB from "./providers/mongoDB";

const datawarehouse = new MongoDB(process.env.DATABASE_URI || "");

export default datawarehouse;