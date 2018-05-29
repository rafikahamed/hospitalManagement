import { createConnection } from 'mysql';
import { config } from './config';
const connection = createConnection(config.db);

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err}`);
        process.exit(1);
    } else {
        console.log("Connected to My SQL");
    }
});

connection.on('error', (err) => {
    console.error(`Error: ${err}`);
    process.exit(2);
});
connection.on('end', (err) => {
    console.error(err);
})

export { connection };