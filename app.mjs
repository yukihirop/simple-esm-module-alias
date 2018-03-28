import http from 'http';
import express from 'express';

import rand from '@lib/random'; // Default './lib/random'

console.log("RAND: " + rand.sayHello);

let app = express();
app.server = http.createServer(app);
app.server.listen(8088, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
