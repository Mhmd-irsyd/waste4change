import os
import re
import base64

svg_path = r'C:\Users\irsya\Downloads\SECTION - OUR SERVICE.svg'
if not os.path.exists(svg_path):
    print("SVG not found")
    exit()

with open(svg_path, 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# find all data:image base64
matches = re.findall(r'data:image/[a-zA-Z]+;base64,([A-Za-z0-9+/=]+)', text)
print(f"Found {len(matches)} embedded base64 images in SVG")

os.makedirs('scratch/extracted_images', exist_ok=True)
for i, b64 in enumerate(matches):
    data = base64.b64decode(b64)
    out_path = f'scratch/extracted_images/img_{i:02d}.png'
    with open(out_path, 'wb') as out_f:
        out_f.write(data)
    print(f"Extracted {out_path}, size={len(data)} bytes")
