import os

files_to_update = {
    'services.html': (110, 165),
    'products.html': (525, 581),
    'knowledge.html': (278, 328),
    'contact.html': (104, 154),
    'about.html': (135, 185),
}

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    footer_lines = lines[354:410] # lines 355 to 410 (0-indexed)

for filename, (start, end) in files_to_update.items():
    with open(filename, 'r', encoding='utf-8') as f:
        file_lines = f.readlines()
    
    new_lines = file_lines[:start-1] + footer_lines + file_lines[end:]
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
        
print("Footers replaced successfully!")
