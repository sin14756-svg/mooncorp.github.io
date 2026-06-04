import re

def update_config():
    filepath = r"c:\Users\sin14\OneDrive\เดสก์ท็อป\WebMoon\Version2\image-config.js"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match pattern like: "key": { x: 0, y: 0, zoom: 1 }, 
    # capturing the inside. We want to add aspectRatio: "original"
    # Actually just match: { x: val, y: val, zoom: val }
    # Let's match: ({.*?zoom:\s*[\d\.]+\s*)(\})
    
    pattern = re.compile(r'(\{\s*x:\s*-?\d+,\s*y:\s*-?\d+,\s*zoom:\s*[\d\.]+\s*)(\})')
    
    new_content = pattern.sub(r'\1, aspectRatio: "original" \2', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    update_config()
