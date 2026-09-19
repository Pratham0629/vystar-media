import re
import json

filepath = r'C:\Users\prath\.gemini\antigravity\brain\7e3a939a-86ec-4f23-912d-2ddb902d739e\.system_generated\steps\1217\content.md'

with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

drive_ids = [
    '1UU0jXecExI7W6rZRyA8OYinXC19JUIwS',
    '11fMqWHObtOI7Vj8VMQa5gs46hlfL6qQK',
    '1T6TR6_x0sb2qks8szOrXP37dQlD7INdi',
    '1DuVbSCxJFcMy9ubBQClx-B1ZCk-ykHW8',
    '1Xk8BBj1oODuVtODq0P7a-lmi1aDDXzmg',
    '1nJ8FJ-w9a3e-vaxjju1wv556I4BgCZd4',
]

for fid in drive_ids:
    idx = text.find(fid)
    if idx != -1:
        snippet = text[max(0, idx-50):min(len(text), idx+200)]
        print(f"=== ID: {fid} ===")
        print(snippet.replace('\n', ' '))
