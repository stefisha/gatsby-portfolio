# Use the official Node.js image as the base image
FROM node:18 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the Gatsby app files
COPY . .

# Build the Gatsby site
RUN npm run build

# Use Nginx to serve the build files
FROM nginx:stable-alpine as production-stage

# Copy the build files from the previous stage to the Nginx web root
COPY --from=build-stage /app/public /usr/share/nginx/html

# Expose port 80 for the server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
