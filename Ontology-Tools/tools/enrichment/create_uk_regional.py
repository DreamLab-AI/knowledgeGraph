#!/usr/bin/env python3
"""
Create UK Regional Technology Hub Ontology Files
"""

import json
import subprocess
from pathlib import Path
from datetime import date

PAGES_DIR = Path(__file__).parent.parent.parent / "mainKnowledgeGraph" / "pages"
PERPLEXITY_API_KEY = os.environ.get("PERPLEXITY_API_KEY", "")

UK_REGIONAL_HUBS = [
    {
        "name": "Manchester Tech Cluster",
        "region": "Greater Manchester",
        "focus": "Digital, AI, FinTech",
        "definition": "Manchester's thriving technology ecosystem centred on MediaCityUK, including AI, digital innovation, and financial technology sectors."
    },
    {
        "name": "Leeds Digital Hub",
        "region": "West Yorkshire",
        "focus": "HealthTech, FinTech, Digital Industries",
        "definition": "Leeds' digital technology sector focusing on health technology innovation, financial services technology, and digital creative industries."
    },
    {
        "name": "Newcastle AI & Health Innovation",
        "region": "North East England",
        "focus": "AI, Health Tech, Research",
        "definition": "Newcastle's technology ecosystem centred on artificial intelligence and health innovation, anchored by research institutions and the Great North Snowdome."
    },
    {
        "name": "Sheffield Advanced Manufacturing",
        "region": "South Yorkshire",
        "focus": "Manufacturing, Materials, Robotics",
        "definition": "Sheffield's advanced manufacturing hub specialising in materials science, robotics, and Industry 4.0 technologies."
    },
    {
        "name": "Liverpool Smart Cities",
        "region": "Merseyside",
        "focus": "Smart Cities, IoT, Urban Tech",
        "definition": "Liverpool's smart cities initiative and technology sector focusing on Internet of Things, urban technology, and digital infrastructure."
    },
    {
        "name": "North England Innovation Corridor",
        "region": "Northern Powerhouse",
        "focus": "Regional Collaboration, Innovation",
        "definition": "The collaborative innovation corridor spanning Manchester, Leeds, Liverpool, Sheffield, and Newcastle, forming the Northern Powerhouse technology ecosystem."
    }
]

def call_perplexity(prompt):
    """Call Perplexity API"""
    payload = {
        "model": "sonar",
        "messages": [
            {"role": "system", "content": "You are a regional technology expert. Provide detailed, accurate information about UK technology hubs. Use UK English."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2,
        "max_tokens": 4000
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
        return response["choices"][0]["message"]["content"], response.get("citations", [])
    return None, []

def create_regional_hub_file(hub_info):
    """Create ontology file for UK regional hub"""

    print(f"\n📍 Creating: {hub_info['name']}")

    prompt = f"""Research "{hub_info['name']}" in {hub_info['region']}, North England.

Provide comprehensive information on:

## Overview
- Brief history and development
- Current state and infrastructure
- Key organisations and institutions

## Technology Focus
- Primary technology sectors: {hub_info['focus']}
- Notable companies and startups
- Research institutions and universities
- Innovation programmes

## Economic Impact
- Employment and growth
- Investment and funding
- Regional contribution

## Notable Projects
- Specific examples of innovation
- Success stories
- Collaborative initiatives

## Future Development
- Growth plans and strategies
- Infrastructure investments
- Policy support

Format as Logseq nested bullets. Use UK English. Be precise and cordial."""

    content, citations = call_perplexity(prompt)

    if not content:
        print(f"  ❌ Failed to research {hub_info['name']}")
        return None

    # Create filename
    filename = f"{hub_info['name']}.md"
    file_path = PAGES_DIR / filename

    # Build ontology file
    term_id = f"UK-{len(list(PAGES_DIR.glob('UK-*.md'))) + 1:03d}"

    ontology_file = f"""- ### OntologyBlock
  id:: {hub_info['name'].lower().replace(' ', '-').replace('&', 'and')}-ontology
  collapsed:: true
\t- ontology:: true
\t- term-id:: {term_id}
\t- preferred-term:: {hub_info['name']}
\t- source-domain:: uk-regional
\t- status:: active
\t- definition:: {hub_info['definition']}
\t- maturity:: established
\t- region:: {hub_info['region']}
\t- focus-areas:: {hub_info['focus']}
\t- owl:class:: uk:{hub_info['name'].replace(' ', '').replace('&', 'And')}
\t- owl:physicality:: ConceptualEntity
\t- owl:role:: RegionalEcosystem
\t- belongsToDomain:: [[UKTechEcosystem]]


## Regional Technology Hub

{content}


## Related Hubs

- [[North England Innovation Corridor]]
- [[Northern Powerhouse]]
- [[UK Tech Ecosystem]]


## References

"""

    # Add citations
    if citations:
        for i, citation in enumerate(citations[:10], 1):
            ontology_file += f"{i}. [{citation}]({citation})\n\n"

    ontology_file += f"""

## Metadata

- **Created**: {date.today().isoformat()}
- **Region**: {hub_info['region']}, North England
- **Category**: Regional Technology Ecosystem
- **Status**: Active


"""

    # Write file
    file_path.write_text(ontology_file, encoding='utf-8')
    print(f"  ✅ Created: {filename}")

    return filename

def main():
    """Create all UK regional hub files"""

    print("🇬🇧 CREATING UK REGIONAL TECHNOLOGY HUB FILES")
    print("=" * 70)

    created = []
    for hub in UK_REGIONAL_HUBS:
        try:
            filename = create_regional_hub_file(hub)
            if filename:
                created.append(filename)
        except Exception as e:
            print(f"  ❌ Error: {e}")

    print(f"\n\n✅ Created {len(created)}/{len(UK_REGIONAL_HUBS)} regional hub files")

    return created

if __name__ == "__main__":
    main()
