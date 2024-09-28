FROM python:3.8-alpine
#   copying all the data from local to /app in continer
COPY . /app
# changing working directory to /app
WORKDIR /app
# Installing the dependencies
RUN pip install -r requirements.txt
CMD python app.py