const https = require('https');
const fs = require('fs');
const path = require('path');
const dns = require('dns');

const hostname = '0.0.0.0';
const port = 44302;

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

//get certs
const options = {
    key: fs.readFileSync('private/private.key.pem'),
    cert: fs.readFileSync('private/domain.cert.pem')
};

const server = https.createServer(options, (req, res) => {
    let filePath = req.url;
    const ip = req.socket.remoteAddress;
    //check if ip is in ban list
    // fs.readFile('private/banlist.txt', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error(`Error reading ban list: ${err.message}`);
    //         return;
    //     }
    //     const banList = data.split('\n').filter(Boolean);
    //     if (banList.includes(ip)) {
    //         console.log(`Banned IP attempted access: ${ip}`);
    //         res.writeHead(403, { 'Content-Type': 'text/html' });
    //         res.end('<h1>403 - Forbidden</h1><p>Your IP has been banned.</p>');
    //         return;
    //     }
    // });

    //ban request that are malicious
    if(filePath.length > 100 || filePath.includes('..') || filePath.includes('%00') || filePath.includes('.ico') || filePath.includes('php')) {
        console.log(`Warning: Long/ Malicious URL detected - ${filePath}`);
        //ban the ip of the request
        console.log(`Banning IP: ${ip}`);
        fs.writeFile('private/banlist.txt', ip + '\n', { flag: 'a' }, (err) => {
            if (err) {
                console.error(`Error banning IP: ${err.message}`);
            }
        });
        return;
    }
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
    
    if(contentType === 'text/plain'){
        console.log(req)
    }

    // Add some debugging
    console.log(`Request: ${req.url} -> ${filePath} -> ${fullPath}`);
    
    // Read the file
    fs.readFile(fullPath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                console.log(`404: File not found - ${fullPath} -> ${ip}`);
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
        console.log(`200: Served ${fullPath} -> ${ip}`);
        console.log(`Content-Type: ${contentType}`);
        //handle form submissions
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
