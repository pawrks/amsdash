# Lets Docker know what version of Node.js to use 
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# When building for production use command directly below instead of npm install
# RUN npm ci --omit=dev
RUN npm install

# Bundle app source
COPY . .

# Expose on port 8080
EXPOSE 8080

# When building for production use two commands directly below insead of npm run dev
# CMD [ "npm", "run", "build" ]
# CMD [ "npm", "run", "start" ]
CMD [ "npm", "run", "dev" ]
