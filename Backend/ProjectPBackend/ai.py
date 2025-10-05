import os
from openai import OpenAI
from dotenv import load_dotenv
from flask import current_app, Blueprint, request, jsonify
from pydantic import BaseModel, ValidationError

load_dotenv()

bp = Blueprint('ai', __name__, url_prefix='/projectp/api/ai')
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class PlanetaryNavigationAssistantResponse(BaseModel):
    found_feature: bool
    latitude: float
    longitude: float
    text_response: str

class PlanetaryFeatureDescriptionAssistantResponse(BaseModel):
    description: str

@bp.route('/planetary_navigation_assistant', methods=['POST'])
def planetary_navigation_assistant():
    input = request.json.get('input', '')
    planet = input.get('planet', '')
    feature = input.get('feature', '')

    if not input:
        return jsonify({"error": "Input is required"}), 400
    
    if not planet or not feature or planet.strip() == "" or feature.strip() == "":
        return jsonify({"error": "Both planet and feature are required"}), 400
    
    if len(feature) > 1000:
        return jsonify({"error": "Input is too long"}), 400
    
    if len(feature) < 3:
        return jsonify({"error": "Input is too short"}), 400
    
    model="o3-mini"
    input = [
        {"role": "system", "content": os.getenv("PLANETARY_NAVIGATION_ASSISTANT_PROMPT")},
        {"role": "user", "content": input}
    ]

    try:
        response = client.responses.parse(
            model=model,
            input=str(input),
            text_format=PlanetaryNavigationAssistantResponse
        )
        return jsonify(response.output_parsed.model_dump_json()), 200
    except ValidationError as e:
        current_app.logger.error(f"Validation error: {e.json()}")
        return jsonify({"error": "Failed to parse response from AI model"}), 500
    except Exception as e:
        current_app.logger.error(f"Error communicating with OpenAI: {str(e)}")
        return jsonify({"error": "Error communicating with AI model"}), 500

@bp.route('/planetary_feature_description_assistant', methods=['POST'])
def planetary_feature_description_assistant():
    input = request.json.get('input', '')
    print(f"Received input: {input}")
    planet = input.get('planet', '')
    feature = input.get('feature', '')

    if not input:
        return jsonify({"error": "Input is required"}), 400
    
    if not planet or not feature or planet.strip() == "" or feature.strip() == "":
        return jsonify({"error": "Both planet and feature are required"}), 400

    if len(feature) > 1000:
        return jsonify({"error": "Input is too long"}), 400

    if len(feature) < 3:
        return jsonify({"error": "Input is too short"}), 400
    
    model="o3-mini"
    input = [
        {"role": "system", "content": "The user will provide the name of a planetary feature. You will respond with a ~100 word detailed description of that feature."},
        {"role": "user", "content": input}
    ]

    try:
        response = client.responses.parse(
            model=model,
            input=str(input),
            text_format=PlanetaryFeatureDescriptionAssistantResponse
        )
        return jsonify(response.output_parsed.model_dump_json()), 200
    except ValidationError as e:
        current_app.logger.error(f"Validation error: {e.json()}")
        return jsonify({"error": "Failed to parse response from AI model"}), 500
    except Exception as e:
        current_app.logger.error(f"Error communicating with OpenAI: {str(e)}")
        return jsonify({"error": "Error communicating with AI model"}), 500