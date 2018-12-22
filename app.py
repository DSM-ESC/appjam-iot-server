from flask import Flask
from controller import init_controller

app = Flask(__name__)
init_controller(app)


@app.route("/")
def index():
    return "Hello, World"


if __name__ == "__main__":
    app.run()
