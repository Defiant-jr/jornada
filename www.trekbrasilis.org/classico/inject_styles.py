import os
import re

dir_path = r"d:\Projetos\jornada\www.trekbrasilis.org\classico"
style_block = """<style>
  html, body {
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden !important;
    background-color: #ffffff !important;
  }
  p {
    margin: 0 !important;
    padding: 0 !important;
  }
  table[width="760"], table[width="769"], table[width="752"], table[width="100%"] {
    width: 788px !important;
  }
  td[background*="fundomenu.gif"] {
    background-image: none !important;
    background-color: #003366 !important;
  }
  td[background*="fundomenu.gif"] * {
    display: none !important;
  }
  img[src*="topobarra2.gif"], img[src*="pebarra2.gif"] {
    width: 188px !important;
    height: auto !important;
    display: block !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  td[width="181"], td[width="182"] {
    width: 188px !important;
    text-align: left !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  td[width="418"], td[width="403"] {
    width: 444px !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  img[src*="pepagina.gif"] {
    width: 788px !important;
  }
  img[src*="gifinvisivel.gif"][width="425"], img[src*="gifinvisivel.gif"][width="410"], img[src*="gifinvisivel.gif"][width="444"] {
    width: 444px !important;
  }
</style>
"""

MARKER = b'fundomenu.gif"] {'
modified_count = 0
skipped_count = 0

for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.lower().endswith(('.html', '.htm')):
            file_path = os.path.join(root, file)
            # Skip the main wrapper index.html
            if os.path.abspath(file_path) == os.path.abspath(os.path.join(dir_path, "index.html")):
                continue

            try:
                with open(file_path, 'rb') as f:
                    content_bytes = f.read()

                # Skip if already injected
                if MARKER in content_bytes:
                    skipped_count += 1
                    continue

                # Find </head> (case insensitive)
                head_match = re.search(b'</head>', content_bytes, re.IGNORECASE)
                if head_match:
                    pos = head_match.start()
                    new_content_bytes = content_bytes[:pos] + style_block.encode('utf-8') + content_bytes[pos:]
                    with open(file_path, 'wb') as f:
                        f.write(new_content_bytes)
                    modified_count += 1
            except Exception as e:
                print(f"Error processing {file_path}: {e}")

print(f"Modified: {modified_count} files.")
print(f"Skipped (already injected): {skipped_count} files.")
