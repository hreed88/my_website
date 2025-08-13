const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = req.url;
    
    // Handle routing for different pages
    if (filePath === '/') {
        filePath = '/pages/landing/index.html';
    } else if (filePath === '/about.html') {
        filePath = '/pages/about/about.html';
    } else if (filePath === '/landing.html') {
        filePath = '/pages/landing/index.html';
    }
    
    // Get the file extension
    const extname = path.extname(filePath);
    const contentType = mimeTypes[extname] || 'text/plain';
    
    // Construct the full file path
    const fullPath = path.join(__dirname, filePath);
    
    // Add some debugging
    console.log(`Request: ${req.url} -> ${filePath} -> ${fullPath}`);
    
    // Read the file
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                console.log(`404: File not found - ${fullPath}`);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - File Not Found</h1><p>The requested file could not be found.</p>');
            } else {
                // Server error
                console.log(`500: Server error - ${err.message}`);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1><p>Something went wrong on the server.</p>');
            }
            return;
        }
        
        // Success - serve the file
        console.log(`200: Served ${fullPath}`);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Landing page: http://${hostname}:${port}/`);
    console.log(`About page: http://${hostname}:${port}/about`);
    console.log(`Direct landing: http://${hostname}:${port}/landing`);
    console.log('Check console for request logs...');
});
