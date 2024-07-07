FROM python

WORKDIR /Docker Demo/python-project/flask-app

COPY . . 

RUN pip install --no-cache-dir flask

CMD ["python3","app.py"]

#CMD gives command that will run wwhen we boot up the container. RUN is the command when we set our Docker image
#All dependencies etc required to install will get installed

# docker run -it --init --publish 3005:3005 python-app - It helps to tunnel a port from host mc to container. 
# Container will expose a port that exposed port will receive a request from our host mc PORT 
# Shorthand - # docker run -it --init --p 3005:3005 python-app 