const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

// CORS configuration
const corsOptions = {
    // ?Loxleys
    origin: "http://192.168.1.93:8081/", // Allow only this origin
    // ? Home
    // origin: "http://192.168.56.1:8081/", // Allow only this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: false,
    optionsSuccessStatus: 204,
};

// Use the CORS middleware with the options above
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server is running on PORT http://localhost:${PORT}`)
);
