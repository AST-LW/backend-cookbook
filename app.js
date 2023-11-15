const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Define a GET route for downloading a file
app.get("/download-file", (req, res) => {
    const filename = "hello.world.txt";
    const filePath = path.resolve(__dirname, `resources/${filename}`);

    // Set the 'Content-Disposition' header to indicate a file download
    // and specify the filename for the downloaded file
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);

    // Read the file as a stream
    const fileStream = fs.createReadStream(filePath);

    // Pipe the file stream to the response object,
    // sending the file content to the client
    fileStream.pipe(res);
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Error in starting server at port - ${PORT}`);
    }
    console.log(`Started server at port - ${PORT}`);
});
