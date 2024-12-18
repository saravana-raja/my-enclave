# Step 1: Build the React app using Vite
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run build and ensure the build output exists
RUN npm run build && ls -al /app/dist

# Step 2: Serve the app using nginx
FROM nginx:stable-alpine

# Copy the built app from the build stage to nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Custom nginx configuration to handle React Router handling
# Use a simple fallback for single-page apps with React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port that nginx will use
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
