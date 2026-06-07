import re

with open('src/components/ctc/CtcTopPage.tsx', 'r') as f:
    content = f.read()

# Replace <main className="content"> with <main className="main-content-area">
content = content.replace('<main className="content">', '<main className="main-content-area">')

# For each section, we want to wrap it in:
# <div className="section-wrapper">
#   <div className="content">
#     <section ...> ... </section>
#   </div>
# </div>

sections = [
    (r'(<section className="panel about fade-in" id="community">.*?</section>)', 'community-wrapper'),
    (r'(<section className="panel activities fade-in" id="activities">.*?</section>)', 'activities-wrapper'),
    (r'(<section className="panel flow fade-in" id="flow">.*?</section>)', 'flow-wrapper'),
    (r'(<section className="panel recommend fade-in">.*?</section>)', 'recommend-wrapper'),
    (r'(<section className="panel faq fade-in" id="faq">.*?</section>)', 'faq-wrapper'),
    (r'(<section className="line-section fade-in" id="line">.*?</section>)', 'line-wrapper'),
]

for pattern, wrapper_id in sections:
    # Use re.DOTALL to match across newlines
    match = re.search(pattern, content, flags=re.DOTALL)
    if match:
        section_html = match.group(1)
        # Indent the section HTML
        indented_section = "\n".join("      " + line for line in section_html.split("\n"))
        wrapped = f'<div className="section-wrapper" id="{wrapper_id}">\n  <div className="content">\n{indented_section}\n  </div>\n</div>'
        content = content.replace(section_html, wrapped)

with open('src/components/ctc/CtcTopPage.tsx', 'w') as f:
    f.write(content)

