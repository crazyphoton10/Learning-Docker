FROM node
WORKDIR /developer/nodejs/node-bind-mount

COPY . .
RUN npm ci
ENV PORT 3000
CMD ["npm", "start"]

# docker run -it --init -p 3002:3000 -v "%cd%":/developer/nodejs/node-bind-mount app-bind-mount-node