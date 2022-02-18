import { connectToDatabase } from "../db/connect";
import { getTypeChart } from "../pokeApi/scrapetypes";
import envs from "./envs";

export const startServer = async () => {
  try {
    await connectToDatabase(envs.mongoURI);

    console.log('connected to database successfully');
    try {
      await getTypeChart();
      console.log('done');
    } catch (error) {
      console.log(error);
    }

    console.log(`${new Date().toLocaleTimeString()} - Server on port: ${envs.port}`);
  } catch (error) {
    console.log('failed to connect to database: ', error);
  }
}