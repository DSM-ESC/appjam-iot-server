from flask import Blueprint, request, jsonify
import serial

blueprint = Blueprint(__name__, __name__, url_prefix="/iot")

ser = serial.Serial(
    port='/dev/cu.usbmodem1421',
    baudrate=9600
)


@blueprint.route("/", methods=['post'])
def apply():
    payload = request.json
    t = payload['type']
    p = payload['power']
    if ser.writable():
        ser.writelines(f'{t} {p}')
        return jsonify(success=True), 200
    else:
        return jsonify(success=False), 500

