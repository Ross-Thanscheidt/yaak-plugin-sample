FROM node:26

RUN apt-get update && apt-get install -y libdbus-1-3 && rm -rf /var/lib/apt/lists/*

# Install the Yaak CLI globally
RUN npm config set allow-scripts=@yaakapp/cli --location=user
RUN npm install -g @yaakapp/cli

# Set working directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Output or default command (adjust based on whether you want an artifact or running dev mode)
CMD ["yaak", "plugin", "build"]
