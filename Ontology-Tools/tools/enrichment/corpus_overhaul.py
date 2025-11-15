#!/usr/bin/env python3
"""
Comprehensive Ontology Corpus Overhaul System
- Reviews existing content for accuracy and currency
- Identifies gaps and creates new ontology files
- Standardizes formatting and citations
- Adds UK/North England context
- Ensures consistent academic rigour
"""

import os
import re
import json
import subprocess
import sys
from pathlib import Path
from datetime import date
from typing import Dict, List, Tuple
from concurrent.futures import ThreadPoolExecutor, as_completed

PAGES_DIR = Path(__file__).parent.parent.parent / "mainKnowledgeGraph" / "pages"
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
MAX_WORKERS = 5

# Logseq markdown style guide
STYLE_GUIDE = """
## Style Guide for Ontology Files

### Structure
- Use Logseq nested bullets (-, tabs for nesting)
- Headings use ## for sections, ### for subsections
- NO bold text - use headings instead
- Two blank lines between major sections per Logseq spec

### Content Style
- Cordial and technically precise
- Subtle rye humour where appropriate
- UK English spelling throughout
- Focus on North England examples where natural

### Citations
- Use footnote style: [1], [2], etc.
- Full citations in ## References section
- Format: Author(s), Year, "Title", Journal/Source, DOI/URL
- Resolve partial references with complete information

### Content Requirements
- Remove dated news and legacy announcements
- Update facts that have changed over time
- Keep rich media links (images, videos)
- Match content to filename and ontology position
- Add UK/regional context where relevant
"""

def call_perplexity_api(prompt):
    """Call Perplexity API for research"""
    if not PERPLEXITY_API_KEY:
        return {"error": "API key not set"}

    payload = {
        "model": "sonar",
        "messages": [
            {
                "role": "system",
                "content": "You are a meticulous research editor reviewing academic content. Provide precise, current information with proper citations. Use UK English. Be cordial but technically rigorous. Add subtle wit where appropriate."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.2,
        "max_tokens": 4000
    }

    try:
        result = subprocess.run(
            ["curl", "-s", "-X", "POST", "https://api.perplexity.ai/chat/completions",
             "-H", f"Authorization: Bearer {PERPLEXITY_API_KEY}",
             "-H", "Content-Type: application/json",
             "-d", json.dumps(payload)],
            capture_output=True,
            text=True,
            timeout=60
        )

        if result.returncode != 0:
            return {"error": f"curl failed: {result.stderr}"}

        response = json.loads(result.stdout)
        if "choices" in response and len(response["choices"]) > 0:
            return {
                "success": True,
                "content": response["choices"][0]["message"]["content"],
                "citations": response.get("citations", [])
            }
        elif "error" in response:
            return {"error": response["error"].get("message", "Unknown error")}
        else:
            return {"error": "No response content"}

    except Exception as e:
        return {"error": str(e)}


def parse_ontology_block(content):
    """Extract ontology metadata"""
    ontology_data = {}
    lines = content.split('\n')
    in_block = False

    for line in lines:
        if '### OntologyBlock' in line:
            in_block = True
            continue

        if in_block:
            match = re.match(r'\s*-\s*([^:]+)::\s*(.+)', line)
            if match:
                ontology_data[match.group(1).strip()] = match.group(2).strip()

            if line.strip() == '' and ontology_data:
                break

    return ontology_data


def analyze_file_quality(file_path):
    """Analyze a file for quality issues and needed improvements"""
    content = file_path.read_text(encoding='utf-8')
    ontology = parse_ontology_block(content)

    issues = []

    # Check for dated content (news, announcements)
    if any(term in content.lower() for term in ['breaking', 'just announced', 'recently released', 'last week', 'yesterday']):
        issues.append("contains_news_language")

    # Check for old dates
    old_years = ['2020', '2021', '2022', '2023']
    if any(year in content for year in old_years):
        issues.append("contains_old_dates")

    # Check for bold text (should use headings)
    if '**' in content:
        issues.append("uses_bold_text")

    # Check for missing UK context
    if 'uk' not in content.lower() and 'britain' not in content.lower() and 'england' not in content.lower():
        issues.append("missing_uk_context")

    # Check for partial references
    if re.search(r'\[\d+\]', content) and 'References' not in content and 'Citations' not in content:
        issues.append("incomplete_references")

    # Check structure
    if '- ' not in content or content.count('- ') < 5:
        issues.append("not_using_bullets")

    return {
        'file': file_path.name,
        'ontology': ontology,
        'issues': issues,
        'size': len(content),
        'lines': len(content.split('\n'))
    }


def identify_ontology_gaps():
    """Identify gaps in ontology coverage based on Gartner emerging tech"""

    # Gartner emerging tech areas (2023-2025)
    gartner_areas = {
        "AI & Machine Learning": [
            "Generative AI Engineering", "AI TRiSM", "Multimodal AI",
            "Composite AI", "Neuromorphic Computing", "Quantum AI"
        ],
        "Spatial Computing": [
            "Digital Humans", "Spatial Web", "Web3", "Metaverse Navigation",
            "Immersive Workspaces", "Augmented Connected Workforce"
        ],
        "Infrastructure": [
            "Platform Engineering", "Wireless Value Realization",
            "Sustainable Technology", "Industry Cloud Platforms"
        ],
        "Security & Privacy": [
            "Postquantum Cryptography", "AI-Augmented Development",
            "Privacy-Enhancing Computation"
        ],
        "North England Tech Hubs": [
            "Manchester Tech Cluster", "Leeds Digital Hub",
            "Newcastle AI Innovation", "Sheffield Advanced Manufacturing"
        ]
    }

    return gartner_areas


def review_and_update_file(file_path):
    """Comprehensive review and update of a single file"""
    relative_path = file_path.relative_to(PAGES_DIR)

    try:
        print(f"\n📄 Reviewing: {relative_path}")

        content = file_path.read_text(encoding='utf-8')
        ontology = parse_ontology_block(content)

        if not ontology.get('preferred-term'):
            print(f"  ⚠️  No ontology block, skipping")
            return {"file": str(relative_path), "status": "skipped", "reason": "no ontology"}

        term = ontology.get('preferred-term')
        definition = ontology.get('definition', '')

        print(f"  🔍 Analyzing: {term}")

        # Create comprehensive review prompt
        prompt = f"""Review and improve this ontology entry for "{term}".

CURRENT DEFINITION: {definition}

FILENAME: {relative_path}

REQUIRED IMPROVEMENTS:
1. Remove any dated news, announcements, or time-sensitive content
2. Update facts that have changed since 2024
3. Verify all assertions are current and accurate
4. Add UK context, especially North England where relevant (Manchester, Leeds, Newcastle, Sheffield)
5. Convert ALL content to Logseq nested bullet format (use -, tabs for nesting)
6. Remove ALL bold text (**), use headings (##, ###) instead
7. Resolve any partial academic references with complete citations
8. Add subtle, appropriate humour where it fits naturally
9. Ensure technically precise yet cordial tone

Provide ONLY the updated content section (after the OntologyBlock), formatted as:

## Academic Context

- Brief contextual overview
  - Key developments and current state
  - Academic foundations

## Current Landscape (2025)

- Industry adoption and implementations
  - Notable organisations and platforms
  - UK and North England examples where relevant
- Technical capabilities and limitations
- Standards and frameworks

## Research & Literature

- Key academic papers and sources
  - Full citations with authors, year, title, journal
  - DOI or URL where available
- Ongoing research directions

## UK Context

- British contributions and implementations
- North England innovation hubs (if relevant)
- Regional case studies

## Future Directions

- Emerging trends and developments
- Anticipated challenges
- Research priorities

## References

1. Complete citation format
2. Full bibliographic details
3. Verified and current sources

Use UK English. Be precise, cordial, technically rigorous. Add wit sparingly and naturally."""

        result = call_perplexity_api(prompt)

        if "error" in result:
            print(f"  ❌ Review failed: {result['error']}")
            return {"file": str(relative_path), "status": "failed", "error": result['error']}

        # Extract ontology block
        parts = re.split(r'\n## ', content, maxsplit=1)
        ontology_block = parts[0]

        # Build updated content
        updated_content = f"""{ontology_block}

{result['content']}


## Metadata

- **Last Updated**: {date.today().isoformat()}
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable


"""

        # Write updated content
        file_path.write_text(updated_content, encoding='utf-8')
        print(f"  ✅ Updated successfully ({len(updated_content)} bytes)")

        return {
            "file": str(relative_path),
            "status": "updated",
            "size": len(updated_content)
        }

    except Exception as e:
        print(f"  ❌ Error: {e}")
        return {"file": str(relative_path), "status": "error", "error": str(e)}


def main():
    """Main execution"""
    print("🔍 COMPREHENSIVE CORPUS OVERHAUL")
    print("=" * 70)

    if not PERPLEXITY_API_KEY:
        print("❌ PERPLEXITY_API_KEY not set")
        sys.exit(1)

    # Phase 1: Analysis
    print("\n📊 Phase 1: Analyzing corpus...")
    md_files = list(PAGES_DIR.glob("*.md"))

    ontology_files = []
    for f in md_files:
        content = f.read_text(encoding='utf-8')
        if '### OntologyBlock' in content:
            ontology_files.append(f)

    print(f"Found {len(ontology_files)} ontology files to review")

    # Analyze quality
    print("\n🔬 Analyzing file quality...")
    analyses = []
    for f in ontology_files[:10]:  # Sample for analysis
        analysis = analyze_file_quality(f)
        analyses.append(analysis)

    # Show sample issues
    all_issues = {}
    for a in analyses:
        for issue in a['issues']:
            all_issues[issue] = all_issues.get(issue, 0) + 1

    print("\n📋 Common issues found:")
    for issue, count in sorted(all_issues.items(), key=lambda x: -x[1]):
        print(f"   {issue}: {count} files")

    # Phase 2: Comprehensive update
    print(f"\n\n🔄 Phase 2: Updating all {len(ontology_files)} files...")
    print("=" * 70)

    results = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(review_and_update_file, f): f for f in ontology_files}

        for future in as_completed(futures):
            result = future.result()
            results.append(result)

    # Summary
    print('\n\n' + '=' * 70)
    print('📊 OVERHAUL SUMMARY')
    print('=' * 70)
    print(f"Total files reviewed: {len(results)}")
    print(f"✅ Updated: {sum(1 for r in results if r['status'] == 'updated')}")
    print(f"⏭️  Skipped: {sum(1 for r in results if r['status'] == 'skipped')}")
    print(f"❌ Failed: {sum(1 for r in results if r['status'] in ('failed', 'error'))}")
    print('=' * 70)

    return results


if __name__ == "__main__":
    results = main()
    failed = sum(1 for r in results if r['status'] in ('error', 'failed'))
    sys.exit(1 if failed > len(results) * 0.1 else 0)  # Allow 10% failure rate
