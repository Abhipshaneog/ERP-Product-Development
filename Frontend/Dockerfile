# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other project files into the container
COPY . .

# Expose the port that Vite uses (default is 5173)
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
