from flask import Flask, request, jsonify
from gtts import gTTS
from playsound import playsound
import os
import uuid
from langdetect import detect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

AUDIO_DIR = "static/audio"

if not os.path.exists(AUDIO_DIR):
    os.makedirs(AUDIO_DIR)

@app.route('/')
def home():
    return jsonify({"message": "gTTS backend with auto-language detection is running"})

@app.route('/speak', methods=['POST'])
def speak():
    data = request.get_json()
    text = data.get('text', '').strip()

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    try:
        # Auto-detect language
        detected_lang = detect(text)
        print(f"Detected language: {detected_lang}")

        filename = f"{uuid.uuid4().hex}.mp3"
        filepath = os.path.join(AUDIO_DIR, filename)

        tts = gTTS(text, lang=detected_lang)
        tts.save(filepath)
        playsound(filepath)
        os.remove(filepath)

        return jsonify({'status': 'Speaking', 'language': detected_lang, 'text': text})

    except Exception as e:
        print("Error:", e)
        return jsonify({'error': 'Speech failed'}), 500

if __name__ == '__main__':
    app.run(debug=True)
