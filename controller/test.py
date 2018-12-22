from flask import Blueprint, request, jsonify

blueprint = Blueprint(__name__, __name__, url_prefix="/test")


@blueprint.route("/", methods=['post'])
def apply():
    payload = request.json
    print(payload['message'])
    return jsonify(success=True)

