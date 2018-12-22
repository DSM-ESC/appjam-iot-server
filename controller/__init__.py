from flask import Flask


def init_controller(main: Flask):
    from controller import iot
    main.register_blueprint(iot.blueprint)
