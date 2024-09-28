FROM ubuntu:latest

# Update the package list
RUN apt-get update

# Install curl for downloading Node.js
RUN apt-get install -y curl

# Download and install Node.js 18.x and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Verify Node.js and npm installation
RUN node -v && npm -v

# Copy the package.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application
COPY main.js .

# Start the app
ENTRYPOINT ["node", "main.js"]