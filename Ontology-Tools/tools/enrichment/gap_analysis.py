#!/usr/bin/env python3
"""
Ontology Gap Analysis and New File Generation
Identifies missing concepts and creates new ontology files
"""

import json
import subprocess
from pathlib import Path
from datetime import date

PAGES_DIR = Path(__file__).parent.parent.parent / "mainKnowledgeGraph" / "pages"
PERPLEXITY_API_KEY = os.environ.get("PERPLEXITY_API_KEY", "")

# Gartner Hype Cycle emerging technologies (2023-2025)
GARTNER_EMERGING_TECH = {
    "AI & Autonomy": [
        "Generative AI Engineering",
        "AI TRiSM",
        "Multimodal AI",
        "Composite AI",
        "Neuromorphic Computing",
        "Quantum AI",
        "Autonomous AI Agents",
        "AI-Augmented Software Engineering"
    ],
    "Spatial & Immersive": [
        "Digital Humans",
        "Spatial Computing",
        "Metaverse Navigation Systems",
        "Immersive Workspaces",
        "Augmented Connected Workforce",
        "Digital Twin of the Customer"
    ],
    "Infrastructure & Cloud": [
        "Platform Engineering",
        "Industry Cloud Platforms",
        "Cloud-Native Applications",
        "Sustainable Technology",
        "Wireless Value Realization"
    ],
    "Security & Trust": [
        "Postquantum Cryptography",
        "Privacy-Enhancing Computation",
        "Decentralized Identity",
        "AI Trust Risk and Security Management"
    ],
    "UK Tech Ecosystems": [
        "Manchester Tech Cluster",
        "Leeds Digital Hub",
        "Newcastle AI & Health Innovation",
        "Sheffield Advanced Manufacturing",
        "Liverpool Smart Cities",
        "North England Innovation Corridor"
    ]
}

def call_perplexity(prompt):
    """Call Perplexity API"""
    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": "You are an ontology expert. Provide precise definitions and context."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2,
        "max_tokens": 3000
    }

    result = subprocess.run(
        ["curl", "-s", "-X", "POST", "https://api.perplexity.ai/chat/completions",
         "-H", f"Authorization: Bearer {PERPLEXITY_API_KEY}",
         "-H", "Content-Type: application/json",
         "-d", json.dumps(payload)],
        capture_output=True,
        text=True,
        timeout=60
    )

    response = json.loads(result.stdout)
    if "choices" in response:
        return response["choices"][0]["message"]["content"]
    return None

def check_term_exists(term):
    """Check if ontology file exists for term"""
    # Try exact match
    exact_file = PAGES_DIR / f"{term}.md"
    if exact_file.exists():
        return True

    # Try case-insensitive search
    for f in PAGES_DIR.glob("*.md"):
        if f.stem.lower() == term.lower():
            return True

    # Check in file content
    for f in PAGES_DIR.glob("*.md"):
        try:
            content = f.read_text(encoding='utf-8')
            if f'preferred-term:: {term}' in content:
                return True
        except:
            pass

    return False

def generate_term_id(term, domain="AI"):
    """Generate unique term ID"""
    # Use research-swarm to find next available ID
    existing_ids = set()
    for f in PAGES_DIR.glob("*.md"):
        try:
            content = f.read_text(encoding='utf-8')
            import re
            matches = re.findall(r'term-id::\s*([A-Z]+-\d+)', content)
            existing_ids.update(matches)
        except:
            pass

    # Find next ID in sequence
    prefix = domain[:2].upper() if domain else "AI"
    for i in range(1, 10000):
        term_id = f"{prefix}-{i:04d}"
        if term_id not in existing_ids:
            return term_id

    return f"{prefix}-9999"

def create_ontology_file(term, category, domain="metaverse"):
    """Create new ontology file for missing term"""

    print(f"\n📝 Creating ontology file for: {term}")

    # Research the term
    research_prompt = f"""Provide a comprehensive overview of "{term}" in the context of {category}.

Include:
1. Precise technical definition (1-2 sentences)
2. Current state and implementations (2024-2025)
3. UK context and examples, especially North England
4. Key research papers and sources with full citations
5. Future outlook

Format as Logseq nested bullets. Use UK English. Be precise yet cordial."""

    content = call_perplexity(research_prompt)

    if not content:
        print(f"  ❌ Failed to research {term}")
        return None

    # Generate term ID
    term_id = generate_term_id(term, domain[:2])

    # Create ontology block
    filename = f"{term}.md"
    file_path = PAGES_DIR / filename

    # Build complete ontology file
    ontology_file = f"""- ### OntologyBlock
  id:: {term.lower().replace(' ', '-')}-ontology
  collapsed:: true
\t- ontology:: true
\t- term-id:: {term_id}
\t- preferred-term:: {term}
\t- source-domain:: {domain}
\t- status:: emerging-technology
\t- definition:: [Generated from Gartner emerging tech analysis]
\t- maturity:: emerging
\t- owl:class:: mv:{term.replace(' ', '')}
\t- owl:physicality:: ConceptualEntity
\t- owl:role:: Concept
\t- belongsToDomain:: [[MetaverseDomain]]
\t- category:: {category}


## Overview

{content}


## UK Context

- British contributions and implementations
  - Research institutions and programmes
  - Industry adoption
  - North England innovation (where relevant)


## Metadata

- **Created**: {date.today().isoformat()}
- **Source**: Gartner Emerging Technology Analysis
- **Category**: {category}
- **Status**: Emerging Technology


"""

    # Write file
    file_path.write_text(ontology_file, encoding='utf-8')
    print(f"  ✅ Created: {filename}")

    return filename

def analyze_gaps():
    """Analyze ontology for gaps"""

    print("\n🔍 ONTOLOGY GAP ANALYSIS")
    print("=" * 70)

    gaps = []

    for category, terms in GARTNER_EMERGING_TECH.items():
        print(f"\n📊 Analyzing: {category}")
        for term in terms:
            exists = check_term_exists(term)
            if not exists:
                print(f"  ❌ Missing: {term}")
                gaps.append((category, term))
            else:
                print(f"  ✅ Found: {term}")

    return gaps

def main():
    """Main gap analysis and filling"""

    # Analyze gaps
    gaps = analyze_gaps()

    print(f"\n\n📋 SUMMARY")
    print("=" * 70)
    print(f"Total gaps identified: {len(gaps)}")

    if not gaps:
        print("✅ No gaps found - ontology is comprehensive!")
        return

    # Ask to create missing files
    print(f"\n🏗️  Creating {len(gaps)} missing ontology files...")

    created = []
    for category, term in gaps[:20]:  # Limit to 20 new files per run
        try:
            filename = create_ontology_file(term, category)
            if filename:
                created.append(filename)
        except Exception as e:
            print(f"  ❌ Error creating {term}: {e}")

    print(f"\n\n✅ Created {len(created)} new ontology files")

    return created

if __name__ == "__main__":
    main()
