#!/usr/bin/env python3
"""
Parallel Ontology Enrichment using Perplexity API
Processes markdown files with ontology blocks and enriches them with current information
"""

import os
import re
import json
import subprocess
import sys
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import date

PAGES_DIR = Path(__file__).parent.parent.parent / "mainKnowledgeGraph" / "pages"
PERPLEXITY_API_KEY = os.getenv("PERPLEXITY_API_KEY")
BATCH_SIZE = 10
MAX_WORKERS = 5

def call_perplexity_api(prompt):
    """Call Perplexity API using curl"""
    if not PERPLEXITY_API_KEY:
        return {"error": "API key not set"}

    payload = {
        "model": "sonar",
        "messages": [
            {
                "role": "system",
                "content": "You are a precise research assistant providing current, factual information with citations. Use UK English spelling. Format responses in markdown."
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
    """Extract ontology metadata from markdown"""
    ontology_data = {}
    lines = content.split('\n')
    in_block = False

    for line in lines:
        if '### OntologyBlock' in line:
            in_block = True
            continue

        if in_block:
            # Match lines like "- preferred-term:: AI Alignment"
            match = re.match(r'\s*-\s*([^:]+)::\s*(.+)', line)
            if match:
                ontology_data[match.group(1).strip()] = match.group(2).strip()

            # End of block
            if line.strip() == '' and ontology_data:
                break

    return ontology_data


def needs_enrichment(content):
    """Check if file needs enrichment"""
    lines = [l for l in content.split('\n') if l.strip()]

    # Very small files need enrichment
    if len(lines) < 20:
        return True

    # Check for placeholder content
    if 'I am a prepended block' in content:
        return True

    # Check for missing sections
    has_literature = any(term in content.lower() for term in ['key literature', 'academic', 'sources', 'references'])
    has_examples = any(term in content.lower() for term in ['example', 'application', 'use case'])
    has_current = any(term in content.lower() for term in ['2024', '2025', 'current', 'latest', 'recent'])

    return not (has_literature and has_examples and has_current)


def enrich_term(term, definition):
    """Get enrichment content from Perplexity"""
    prompt = f"""Research the current state of "{term}" (defined as: {definition}).

Provide:
1. **Current Developments**: Latest trends, technologies, and innovations (2024-2025)
2. **Key Applications**: Real-world use cases and implementations
3. **Industry Standards**: Relevant international standards, frameworks, or specifications
4. **Academic Literature**: Recent papers, research, or authoritative sources (with full citations)
5. **Notable Examples**: Specific products, platforms, or organisations using this technology
6. **Future Outlook**: Emerging trends and expected developments

Use UK English spelling throughout. Format with markdown. Include hyperlinks to reputable sources."""

    return call_perplexity_api(prompt)


def generate_enriched_markdown(file_path, ontology_data, existing_content, enrichment):
    """Generate enriched markdown with proper Logseq formatting"""

    # Extract ontology block (everything before ## or first major section)
    parts = re.split(r'\n## ', existing_content, maxsplit=1)
    ontology_block = parts[0]

    # Build enriched markdown
    enriched = f"""{ontology_block}

## Academic Context & Current Developments

{enrichment['content']}


## Related Resources

For more information, see:
- [[Metaverse]]
- [[MetaverseDomain]]


## Citations & Sources

"""

    # Add citations if available
    if enrichment.get('citations'):
        for i, citation in enumerate(enrichment['citations'][:10], 1):
            enriched += f"{i}. [{citation}]({citation})\n\n"

    enriched += f"""

## Metadata

- **Last Enriched**: {date.today().isoformat()}
- **Enrichment Source**: Perplexity AI (Sonar)
- **Verification Status**: Automated enrichment - human review recommended


"""

    return enriched


def process_file(file_path):
    """Process a single markdown file"""
    relative_path = file_path.relative_to(PAGES_DIR)

    try:
        print(f"\n📄 Processing: {relative_path}")

        content = file_path.read_text(encoding='utf-8')

        # Check if enrichment needed
        if not needs_enrichment(content):
            print(f"  ✅ Already enriched, skipping")
            return {"file": str(relative_path), "status": "skipped", "reason": "already enriched"}

        # Parse ontology
        ontology_data = parse_ontology_block(content)

        if not ontology_data.get('preferred-term') and not ontology_data.get('term'):
            print(f"  ⚠️  No ontology block found, skipping")
            return {"file": str(relative_path), "status": "skipped", "reason": "no ontology block"}

        term = ontology_data.get('preferred-term') or ontology_data.get('term')
        definition = ontology_data.get('definition', 'A metaverse-related concept')

        print(f"  📚 Researching: {term}...")

        # Get enrichment
        enrichment = enrich_term(term, definition)

        if "error" in enrichment:
            print(f"  ❌ Enrichment failed: {enrichment['error']}")
            return {"file": str(relative_path), "status": "failed", "error": enrichment['error']}

        # Generate enriched content
        enriched_md = generate_enriched_markdown(file_path, ontology_data, content, enrichment)

        # Write back
        file_path.write_text(enriched_md, encoding='utf-8')
        print(f"  ✅ Enriched successfully ({len(enriched_md)} bytes)")

        return {"file": str(relative_path), "status": "enriched", "size": len(enriched_md)}

    except Exception as e:
        print(f"  ❌ Error: {e}")
        return {"file": str(relative_path), "status": "error", "error": str(e)}


def main(priority_only=False, limit=None):
    """Main processing function"""
    print("🔍 Scanning for files to enrich...\n")

    md_files = list(PAGES_DIR.glob("*.md"))
    print(f"Found {len(md_files)} markdown files")

    # Identify files needing enrichment
    files_to_process = []

    for file_path in md_files:
        try:
            content = file_path.read_text(encoding='utf-8')
            has_ontology = '### OntologyBlock' in content

            # Only process files WITH ontology blocks that need enrichment
            if has_ontology and needs_enrichment(content):
                priority = 'high' if len(content) < 100 else 'medium'
                files_to_process.append({
                    'path': file_path,
                    'priority': priority,
                    'size': len(content),
                    'has_ontology': True
                })
        except Exception as e:
            print(f"Warning: Could not read {file_path}: {e}")

    # Sort by priority (files with ontology blocks first, then by size)
    files_to_process.sort(key=lambda x: (0 if x['priority'] == 'high' else 1, x['size']))

    print(f"\n📋 Found {len(files_to_process)} files needing enrichment")
    high_priority = [f for f in files_to_process if f['priority'] == 'high']
    print(f"   High priority (minimal content): {len(high_priority)}")
    print(f"   Medium priority: {len(files_to_process) - len(high_priority)}\n")

    # Filter if needed
    if priority_only:
        files_to_process = high_priority
        print(f"\n🎯 Processing {len(files_to_process)} high-priority files only\n")

    if limit:
        files_to_process = files_to_process[:limit]
        print(f"\n🎯 Limiting to first {limit} files\n")

    # Process files in parallel
    results = []
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {executor.submit(process_file, f['path']): f for f in files_to_process}

        for future in as_completed(futures):
            result = future.result()
            results.append(result)

    # Summary
    print('\n\n' + '=' * 60)
    print('📊 ENRICHMENT SUMMARY')
    print('=' * 60)
    print(f"Total files processed: {len(results)}")
    print(f"✅ Enriched: {sum(1 for r in results if r['status'] == 'enriched')}")
    print(f"⏭️  Skipped: {sum(1 for r in results if r['status'] == 'skipped')}")
    print(f"❌ Failed: {sum(1 for r in results if r['status'] in ('failed', 'error'))}")
    print('=' * 60 + '\n')

    # Show failures
    failures = [r for r in results if r['status'] in ('failed', 'error')]
    if failures:
        print('\n⚠️  Failed files:')
        for f in failures:
            print(f"   - {f['file']}: {f.get('error', f.get('reason', 'unknown'))}")

    return results


if __name__ == "__main__":
    priority_only = "--priority-only" in sys.argv

    # Get limit if specified
    limit = None
    for arg in sys.argv:
        if arg.startswith("--limit="):
            limit = int(arg.split("=")[1])

    if not PERPLEXITY_API_KEY:
        print("❌ Error: PERPLEXITY_API_KEY environment variable not set")
        sys.exit(1)

    results = main(priority_only=priority_only, limit=limit)

    failed_count = sum(1 for r in results if r['status'] in ('error', 'failed'))
    sys.exit(1 if failed_count > 0 else 0)
