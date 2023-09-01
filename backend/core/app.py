from flask import Flask, request, jsonify
from flask_limiter.util import get_remote_address
from flask_limiter import Limiter
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from redis import Redis
import os
import re
import json
import logging
import datetime 

# If modifying these SCOPES, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/calendar']

# Initialize logging
logging.basicConfig(filename='app.log', level=logging.INFO)

# Initialize Flask app
app = Flask(__name__)

# Initialize rate limiter with Redis backend
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    storage_uri="redis://localhost:6379"
)

# Initialize Google Calendar API with OAuth 2.0
creds = None
if os.path.exists('token.json'):
    creds = Credentials.from_authorized_user_file('token.json', SCOPES)

# Refresh the token if it's expired
if not creds or not creds.valid:
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    else:
        flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
        creds = flow.run_local_server(port=0)
    # Save the refreshed credentials for the next run
    with open('token.json', 'w') as token:
        token.write(creds.to_json())

# Build the Google Calendar service
service = build('calendar', 'v3', credentials=creds)


@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input', '').lower()
    logging.info(f"Chat request: {request.json}")
    
    if re.search(r'hello|hi|hey', user_input):
        response = "Hello! How can I assist you today?"
    elif re.search(r'bye|goodbye', user_input):
        response = "Goodbye! Have a great day!"
    else:
        response = "I'm sorry, I didn't understand that. Could you please rephrase?"
    
    return jsonify({"response": response})

@app.route('/reminder', methods=['POST'])
def reminder():
    task_details = request.json.get('task_details', '')
    due_date = request.json.get('due_date', '')
    
    response = f"Reminder '{task_details}' has been set for {due_date}."
    return jsonify({"response": response})

@app.route('/schedule', methods=['POST'])
def schedule():
    event_details = request.json.get('event_details', '')
    start_time = request.json.get('start_time', '')
    end_time = request.json.get('end_time', '')

    current_time = datetime.datetime.now()
    
    if start_time < current_time:
        return "Cannot schedule in the past."
    
    event = {
        'summary': event_details,
        'start': {'dateTime': start_time},
        'end': {'dateTime': end_time},
    }
    event = service.events().insert(calendarId='primary', body=event).execute()
    
    return jsonify({"response": f"Event '{event_details}' has been scheduled from {start_time} to {end_time}."})

@app.route('/feedback', methods=['POST'])
def feedback():
    feedback_text = request.json.get('feedback', '')
    # Store or send the feedback

if __name__ == '__main__':
    app.debug = True
    app.run()
