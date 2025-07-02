📖 Accessible Reading Assistant
A voice-enabled web application that helps visually impaired users read aloud typed or uploaded text. It supports multi-language detection, offline/online speech synthesis, keyboard shortcuts, and high-contrast mode — all aimed at inclusive learning.

🌟 Features
🔊 Text-to-Speech (TTS) using Python backend

✅ Offline support via pyttsx3

✅ Online voice quality via gTTS

🌍 Auto Language Detection (langdetect)

📂 Upload .txt files and read them aloud

🌓 High Contrast Mode for low-vision users

⌨️ Keyboard Accessibility

Alt + R: Read aloud

Alt + C: Toggle high contrast

Tab, Enter: Navigate and activate

🔧 Tech Stack
         Layer                                        	Tech
🧠 Backend	                 :                  Python, Flask, pyttsx3, gTTS, langdetect
🎨 Frontend	                 :                   HTML, CSS, JavaScript
🔁 Communication	         :                   REST API (/speak), JSON, CORS
🎧 Audio Playback	         :                   playsound (local)
📦 Deployment Ready	         :                   Flask App with venv

How to Run Locally
Clone the repo:
git clone https://github.com/your-username/accessible-reading-assistant
cd accessible-reading-assistant

Set up virtual environment:
python -m venv venv
venv\Scripts\activate 

Install dependencies:
pip install -r requirements.txt

Run the Flask server:
python server.py

Future Improvements:
1.Add speech-to-text for dictation
2.Deploy on Render or Replit
3.Collect user data for research insights
4.Allow users to save read sessions

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.

👩‍💻 Author
Stuti Khanna
📍 Lucknow, India
🎓 B.Tech CSE | Passionate about accessibility, AI, and inclusive tech
