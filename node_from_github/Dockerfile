
#Project setup will be downloaded from github
FROM node

WORKDIR /developer/nodejs/app-from-github

#will run commands inside CLI inside container. apt-get is pg manager inside linux
RUN apt-get update && apt-get install -y git

# Clone in current working dir 
RUN git clone https://github.com/crazyphoton10/Dockerizing_node_project.git .

ENV PORT=3000

# docker run -it --init -P python-app - when we use expose
# The container will by default expose a PORT for the host 
# EXPOSE 3000 

RUN npm ci

CMD ["npm", "start"]