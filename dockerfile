FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy only package.json first for caching
COPY package.json ./

# Install dependencies (none listed, but keeps Docker best practices)
RUN npm install

# Copy the rest of your app (including certs, pages, etc.)
COPY . .

# Create a non-root user and switch to it
RUN useradd --user-group --create-home --shell /bin/false appuser
USER appuser

# Expose HTTPS port
EXPOSE 44302

# Start the server
CMD ["node", "server.js", "&"]