FROM node:20-alpine  
WORKDIR /app  
COPY package*.json .  
RUN npm install  
COPY . .  
EXPOSE 5000  
CMD ["npm", "run"]

# Use a lightweight server to serve the app
FROM nginx:alpine

# Copy the build output to the Nginx server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]