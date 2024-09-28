from flask import Flask
import os
import time
import redis

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379)

def get_hit_count():
    retris = 5
    while True:
        try:
            cache.reset_retry_count()
            

@app.route('/', methods = ['GET'])
def home():
    return "hellow vivek"


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8888)


