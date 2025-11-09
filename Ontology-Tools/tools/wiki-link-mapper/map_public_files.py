#!/usr/bin/env python3
"""
Map public files list to canonical ontology terms.
Identifies which ontology files should be marked as publicly accessible.
"""

import os
import json
import csv
from pathlib import Path

def load_public_files_list(file_path):
    """Load the list of files marked as public."""
    with open(file_path, 'r', encoding='utf-8') as f:
        # Strip .md extension and clean whitespace
        return [line.strip().replace('.md', '') for line in f if line.strip()]

def load_mapping_json(json_path):
    """Load the ontology mapping JSON."""
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def find_canonical_term(public_file, mapping_data):
    """Find the canonical ontology term for a public file name."""
    # Direct lookup in mapping
    if public_file in mapping_data['mapping']:
        return mapping_data['mapping'][public_file]

    # Case-insensitive lookup
    lower_public = public_file.lower()
    for old_term, canonical in mapping_data['mapping'].items():
        if old_term.lower() == lower_public:
            return canonical

    # Check if it's a filename match in terms list
    for term_info in mapping_data['terms']:
        if term_info['filename'].lower() == lower_public:
            return term_info['canonical_term']

        # Check variations
        for variation in term_info.get('variations', []):
            if variation.lower() == lower_public:
                return term_info['canonical_term']

    return None

def get_term_details(canonical_term, mapping_data):
    """Get full details for a canonical term."""
    for term_info in mapping_data['terms']:
        if term_info['canonical_term'] == canonical_term:
            return term_info
    return None

def main():
    script_dir = Path(__file__).parent
    public_list_file = script_dir / 'public-files-list.txt'
    mapping_json_file = script_dir / 'wiki-link-mapping.json'
    output_csv = script_dir / 'public-files-mapping.csv'
    output_json = script_dir / 'public-files-mapping.json'

    print("Loading public files list...")
    public_files = load_public_files_list(public_list_file)
    print(f"Found {len(public_files)} files marked as public")

    print("\nLoading ontology mapping...")
    mapping_data = load_mapping_json(mapping_json_file)
    print(f"Loaded {len(mapping_data['terms'])} canonical terms")

    print("\nMapping public files to ontology terms...")

    mapped = []
    unmapped = []

    for public_file in public_files:
        canonical_term = find_canonical_term(public_file, mapping_data)

        if canonical_term:
            term_details = get_term_details(canonical_term, mapping_data)
            mapped.append({
                'public_filename': public_file,
                'canonical_term': canonical_term,
                'term_id': term_details['term_id'] if term_details else 'N/A',
                'source_domain': term_details['source_domain'] if term_details else 'N/A',
                'ontology_filename': term_details['filename'] if term_details else 'N/A',
                'mapped': True
            })
        else:
            unmapped.append({
                'public_filename': public_file,
                'canonical_term': None,
                'term_id': None,
                'source_domain': None,
                'ontology_filename': None,
                'mapped': False
            })

    print(f"\nMapped: {len(mapped)} files")
    print(f"Unmapped: {len(unmapped)} files")

    # Save CSV
    print(f"\nSaving CSV to {output_csv}...")
    with open(output_csv, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Public Filename', 'Canonical Term', 'Term ID', 'Domain', 'Ontology Filename', 'Mapped', 'Should Mark Public'])

        for item in sorted(mapped, key=lambda x: x['canonical_term']):
            writer.writerow([
                item['public_filename'],
                item['canonical_term'],
                item['term_id'],
                item['source_domain'],
                item['ontology_filename'],
                'Yes',
                'Yes'
            ])

        for item in sorted(unmapped, key=lambda x: x['public_filename']):
            writer.writerow([
                item['public_filename'],
                'NOT FOUND',
                '',
                '',
                '',
                'No',
                'N/A (no ontology file)'
            ])

    # Save JSON
    print(f"Saving JSON to {output_json}...")
    output_data = {
        'mapped': mapped,
        'unmapped': unmapped,
        'stats': {
            'total_public_files': len(public_files),
            'mapped_count': len(mapped),
            'unmapped_count': len(unmapped),
            'mapping_rate': f"{len(mapped)/len(public_files)*100:.1f}%"
        }
    }

    with open(output_json, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print("\n" + "="*60)
    print("MAPPING SUMMARY")
    print("="*60)
    print(f"Total public files:  {len(public_files)}")
    print(f"Mapped to ontology:  {len(mapped)} ({len(mapped)/len(public_files)*100:.1f}%)")
    print(f"Not in ontology:     {len(unmapped)} ({len(unmapped)/len(public_files)*100:.1f}%)")

    if unmapped:
        print("\n" + "="*60)
        print("UNMAPPED FILES (not in current ontology)")
        print("="*60)
        for item in sorted(unmapped, key=lambda x: x['public_filename'])[:20]:
            print(f"  - {item['public_filename']}")
        if len(unmapped) > 20:
            print(f"  ... and {len(unmapped) - 20} more")

    print("\n" + "="*60)
    print(f"Outputs saved:")
    print(f"  - {output_csv}")
    print(f"  - {output_json}")
    print("="*60)

if __name__ == '__main__':
    main()
