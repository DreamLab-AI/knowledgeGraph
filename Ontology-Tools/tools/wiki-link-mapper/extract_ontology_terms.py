#!/usr/bin/env python3
"""
Extract canonical ontology terms from Logseq markdown files.
Builds a mapping table for wiki-link conversion.
"""

import os
import re
import json
import csv
from pathlib import Path
from collections import defaultdict

def extract_preferred_term(content):
    """Extract preferred-term from OntologyBlock."""
    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else None

def extract_term_id(content):
    """Extract term-id from OntologyBlock."""
    match = re.search(r'term-id::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else None

def extract_source_domain(content):
    """Extract source-domain from OntologyBlock."""
    match = re.search(r'source-domain::\s*(.+?)(?:\n|$)', content)
    return match.group(1).strip() if match else None

def extract_public_access(content):
    """Extract public-access from OntologyBlock."""
    match = re.search(r'public-access::\s*(.+?)(?:\n|$)', content)
    if match:
        value = match.group(1).strip().lower()
        return value == 'true'
    return False  # Default to false if not specified

def has_ontology_block(content):
    """Check if file has ontology block."""
    return 'ontology:: true' in content

def generate_common_variations(term):
    """Generate common variations of a term for fuzzy matching."""
    variations = [term]

    # Lowercase variation
    variations.append(term.lower())

    # Title case variation
    variations.append(term.title())

    # Remove hyphens
    if '-' in term:
        variations.append(term.replace('-', ' '))
        variations.append(term.replace('-', ''))

    # Add hyphenated versions
    if ' ' in term and '-' not in term:
        variations.append(term.replace(' ', '-'))

    # Singular/plural heuristics
    if term.endswith('s') and len(term) > 3:
        variations.append(term[:-1])  # Remove trailing 's'
    elif not term.endswith('s'):
        variations.append(term + 's')  # Add trailing 's'

    # Remove duplicates while preserving order
    seen = set()
    unique_variations = []
    for v in variations:
        if v not in seen:
            seen.add(v)
            unique_variations.append(v)

    return unique_variations

def extract_all_terms(pages_dir):
    """Extract all canonical terms from ontology files."""
    terms = []

    for md_file in Path(pages_dir).glob('*.md'):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            if has_ontology_block(content):
                preferred_term = extract_preferred_term(content)
                term_id = extract_term_id(content)
                source_domain = extract_source_domain(content)
                public_access = extract_public_access(content)
                filename = md_file.stem

                if preferred_term:
                    terms.append({
                        'canonical_term': preferred_term,
                        'term_id': term_id or 'N/A',
                        'source_domain': source_domain or 'unknown',
                        'public_access': public_access,
                        'filename': filename,
                        'variations': generate_common_variations(preferred_term)
                    })
        except Exception as e:
            print(f"Error processing {md_file}: {e}")

    return terms

def build_mapping_table(terms):
    """Build mapping from all variations to canonical terms."""
    mapping = {}

    for term_info in terms:
        canonical = term_info['canonical_term']

        # Map filename to canonical term
        mapping[term_info['filename']] = canonical

        # Map all variations to canonical term
        for variation in term_info['variations']:
            if variation not in mapping:
                mapping[variation] = canonical
            elif mapping[variation] != canonical:
                # Conflict: prefer exact match (case-sensitive)
                if variation == canonical:
                    mapping[variation] = canonical

    return mapping

def save_mapping_csv(terms, output_file):
    """Save mapping table as CSV."""
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Old Term', 'Canonical Term', 'Term ID', 'Domain', 'Filename', 'Public Access'])

        for term_info in sorted(terms, key=lambda x: x['canonical_term']):
            canonical = term_info['canonical_term']
            term_id = term_info['term_id']
            domain = term_info['source_domain']
            filename = term_info['filename']
            public_access = 'true' if term_info.get('public_access', False) else 'false'

            # Write canonical term
            writer.writerow([canonical, canonical, term_id, domain, filename, public_access])

            # Write variations
            for variation in term_info['variations']:
                if variation != canonical:
                    writer.writerow([variation, canonical, term_id, domain, filename, public_access])

def save_mapping_json(terms, mapping, output_file):
    """Save detailed mapping as JSON."""
    output = {
        'terms': terms,
        'mapping': mapping,
        'stats': {
            'total_canonical_terms': len(terms),
            'total_mappings': len(mapping)
        }
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output, f, indent=2, ensure_ascii=False)

def main():
    pages_dir = 'logseq/pages'
    output_dir = 'tools/wiki-link-mapper'

    print(f"Extracting ontology terms from {pages_dir}...")
    terms = extract_all_terms(pages_dir)

    print(f"Found {len(terms)} canonical ontology terms")

    print("Building mapping table...")
    mapping = build_mapping_table(terms)

    print(f"Generated {len(mapping)} total mappings (including variations)")

    csv_file = os.path.join(output_dir, 'wiki-link-mapping.csv')
    json_file = os.path.join(output_dir, 'wiki-link-mapping.json')

    print(f"Saving CSV mapping to {csv_file}...")
    save_mapping_csv(terms, csv_file)

    print(f"Saving JSON mapping to {json_file}...")
    save_mapping_json(terms, mapping, json_file)

    print("\nMapping generation complete!")
    print(f"- CSV: {csv_file}")
    print(f"- JSON: {json_file}")

if __name__ == '__main__':
    main()
