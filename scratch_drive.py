import re
import json

filepath = r'C:\Users\prath\.gemini\antigravity\brain\7e3a939a-86ec-4f23-912d-2ddb902d739e\.system_generated\steps\1217\content.md'

with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print("File size:", len(text))

# Let's search for video file extensions or drive file metadata
videos = re.findall(r'\["([a-zA-Z0-9_-]{28,40})",\["([^"]+)"', text)
print("Found videos count:", len(videos))
for vid, name in videos:
    print(f"ID: {vid} -> Name: {name}")

# Also search for drive item names in JS arrays
all_mp4s = re.findall(r'([^\"]+\.(?:mp4|mov|webm|MP4|MOV))', text)
print("Found MP4s:", set(all_mp4s))

# Search for drive file IDs (33 chars long base64url string like 1x_abc123...)
ids = set(re.findall(r'"([a-zA-Z0-9_-]{33})"', text))
print("Drive IDs found:", len(ids), list(ids)[:10])
