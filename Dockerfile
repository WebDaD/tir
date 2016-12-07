FROM node:argon

# Create app directory
RUN mkdir -p /opt/tir
WORKDIR /opt/tir

# Copy app
COPY . /opt/tir

# Install and Deploy
RUN npm run deploy

# Expose Web Port and Set Start Command
EXPOSE 8080
CMD [ "npm", "start" ]
