#Use lightweight Node environment 
# TODO: Use the LTS/ the latest version 
FROM node:lts-alpine 

# Set working directory inside container 
WORKDIR /app 

# Copy package files and install dependencies 
COPY package*.json ./ 
RUN npm install 

# Copy application source code 
COPY . . 

# Expose internal port 
# TODO: CHANGE PORT NUMBER ACCORDINGLY 
EXPOSE 5001  
# Specify container start command 
CMD ["npm", "start"] 