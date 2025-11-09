#!/usr/bin/env python3
"""
Extract OntologyBlock headers from all Logseq markdown pages.

This script parses markdown files to extract structured ontology metadata
and outputs it as YAML for easy review and processing.
"""

import os
import re
import yaml
from pathlib import Path
from typing import Dict, List, Any, Optional


def parse_ontology_block(content: str, filename: str) -> Optional[Dict[str, Any]]:
    """
    Parse an OntologyBlock from markdown content.

    The OntologyBlock starts with "- ### OntologyBlock" and contains
    nested bullet-point structured data in Logseq format.
    """
    # Find the OntologyBlock section
    ontology_match = re.search(
        r'^- ### OntologyBlock\s*$.*?(?=^- ###|\Z)',
        content,
        re.MULTILINE | re.DOTALL
    )

    if not ontology_match:
        return None

    block_content = ontology_match.group(0)

    # Initialize the result structure
    result = {
        'filename': filename,
        'identification': {},
        'definition': {},
        'semantic_classification': {},
        'relationships': [],
        'properties': {},
        'format_notes': [],
        'raw_block': block_content[:500] + '...' if len(block_content) > 500 else block_content
    }

    # Extract id if present
    id_match = re.search(r'^\s*id::\s*(.+)$', block_content, re.MULTILINE)
    if id_match:
        result['block_id'] = id_match.group(1).strip()

    # Parse Identification section
    identification_section = re.search(
        r'- \*\*Identification\*\*\s*$(.*?)(?=^\s*- \*\*|\Z)',
        block_content,
        re.MULTILINE | re.DOTALL
    )

    if identification_section:
        ident_text = identification_section.group(1)
        for line in ident_text.split('\n'):
            line = line.strip()
            if '::' in line:
                # Extract key-value pairs like "ontology:: true"
                match = re.match(r'-\s*(\w[\w-]*)::\s*(.+)$', line)
                if match:
                    key = match.group(1).replace('-', '_')
                    value = match.group(2).strip()
                    # Convert boolean strings
                    if value.lower() == 'true':
                        value = True
                    elif value.lower() == 'false':
                        value = False
                    result['identification'][key] = value

    # Parse Definition section
    definition_section = re.search(
        r'- \*\*Definition\*\*\s*$(.*?)(?=^\s*- \*\*|\Z)',
        block_content,
        re.MULTILINE | re.DOTALL
    )

    if definition_section:
        def_text = definition_section.group(1)
        for line in def_text.split('\n'):
            line = line.strip()
            if '::' in line:
                match = re.match(r'-\s*(\w[\w-]*)::\s*(.+)$', line)
                if match:
                    key = match.group(1).replace('-', '_')
                    value = match.group(2).strip()
                    # Remove wiki-link brackets
                    value = re.sub(r'\[\[([^\]]+)\]\]', r'\1', value)
                    result['definition'][key] = value

    # Parse Semantic Classification section
    semantic_section = re.search(
        r'- \*\*Semantic Classification\*\*\s*$(.*?)(?=^\s*- \*\*|\Z)',
        block_content,
        re.MULTILINE | re.DOTALL
    )

    if semantic_section:
        sem_text = semantic_section.group(1)
        for line in sem_text.split('\n'):
            line = line.strip()
            if '::' in line:
                match = re.match(r'-\s*([\w:]+)::\s*(.+)$', line)
                if match:
                    key = match.group(1).replace(':', '_').replace('-', '_')
                    value = match.group(2).strip()
                    # Remove wiki-link brackets
                    value = re.sub(r'\[\[([^\]]+)\]\]', r'\1', value)
                    result['semantic_classification'][key] = value

    # Parse Relationships section
    relationships_section = re.search(
        r'- #### Relationships.*?$(.*?)(?=^\s*- ####|\Z)',
        block_content,
        re.MULTILINE | re.DOTALL
    )

    if relationships_section:
        rel_text = relationships_section.group(1)
        for line in rel_text.split('\n'):
            line = line.strip()
            if 'is-subclass-of::' in line or 'is-instance-of::' in line:
                match = re.match(r'-\s*([\w-]+)::\s*(.+)$', line)
                if match:
                    rel_type = match.group(1)
                    targets = match.group(2).strip()
                    # Remove wiki-link brackets and split by comma
                    targets = re.sub(r'\[\[([^\]]+)\]\]', r'\1', targets)
                    target_list = [t.strip() for t in targets.split(',')]
                    result['relationships'].append({
                        'type': rel_type,
                        'targets': target_list
                    })

    # Detect format style
    has_structured_sections = bool(identification_section or definition_section or semantic_section)
    has_flat_properties = False

    # Alternative parsing for simple format (without sections)
    if not result['identification'] and not result['definition']:
        result['format_notes'].append('FLAT_FORMAT: No structured sections (Identification/Definition/Semantic)')
        has_flat_properties = True
        # Try parsing flat structure
        for line in block_content.split('\n'):
            line = line.strip()
            if '::' in line and not line.startswith('id::'):
                match = re.match(r'-\s*(\w[\w-]*)::\s*(.+)$', line)
                if match:
                    key = match.group(1).replace('-', '_')
                    value = match.group(2).strip()
                    # Remove wiki-link brackets
                    value = re.sub(r'\[\[([^\]]+)\]\]', r'\1', value)
                    # Convert boolean strings
                    if value.lower() == 'true':
                        value = True
                    elif value.lower() == 'false':
                        value = False
                    result['properties'][key] = value
    else:
        result['format_notes'].append('STRUCTURED_FORMAT: Has organized sections (Identification/Definition/Semantic)')

    # Check for mixed formats
    if has_structured_sections and result['properties']:
        result['format_notes'].append('WARNING: Mixed format detected - has both structured sections AND flat properties')

    # Check for missing standard sections
    if has_structured_sections:
        if not result['identification']:
            result['format_notes'].append('INCOMPLETE: Missing Identification section')
        if not result['definition']:
            result['format_notes'].append('INCOMPLETE: Missing Definition section')
        if not result['semantic_classification']:
            result['format_notes'].append('INCOMPLETE: Missing Semantic Classification section')

    # Detect presence of OWL Axioms
    if 'OWL Axioms' in block_content or '```clojure' in block_content:
        result['format_notes'].append('HAS_OWL_AXIOMS: Contains OWL formal semantics')

    # Clean up empty sections
    result = {k: v for k, v in result.items() if v or k in ('filename', 'format_notes')}

    return result if len(result) > 2 else None  # At least filename + format_notes + 1 data field


def extract_all_ontologies(pages_dir: str) -> List[Dict[str, Any]]:
    """
    Extract ontology blocks from all markdown files in the pages directory.
    """
    pages_path = Path(pages_dir)
    ontologies = []

    # Process all .md files
    for md_file in sorted(pages_path.glob('*.md')):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()

            ontology = parse_ontology_block(content, md_file.name)
            if ontology:
                ontologies.append(ontology)
                print(f"✓ Extracted: {md_file.name}")
            else:
                print(f"  Skipped: {md_file.name} (no OntologyBlock)")

        except Exception as e:
            print(f"✗ Error processing {md_file.name}: {e}")

    return ontologies


def main():
    """Main execution function."""
    # Paths
    repo_root = Path(__file__).parent.parent.parent
    pages_dir = repo_root / 'mainKnowledgeGraph' / 'pages'
    output_file = repo_root / 'Ontology-Tools' / 'outputs' / 'ontology-blocks-extracted.yaml'

    print(f"Scanning directory: {pages_dir}")
    print(f"Output file: {output_file}\n")

    # Extract ontologies
    ontologies = extract_all_ontologies(str(pages_dir))

    # Analyze formats first
    format_stats = {
        'structured': 0,
        'flat': 0,
        'mixed': 0,
        'has_owl_axioms': 0,
        'incomplete': 0
    }

    for ont in ontologies:
        notes = ont.get('format_notes', [])
        if any('STRUCTURED_FORMAT' in note for note in notes):
            format_stats['structured'] += 1
        if any('FLAT_FORMAT' in note for note in notes):
            format_stats['flat'] += 1
        if any('WARNING: Mixed' in note for note in notes):
            format_stats['mixed'] += 1
        if any('HAS_OWL_AXIOMS' in note for note in notes):
            format_stats['has_owl_axioms'] += 1
        if any('INCOMPLETE' in note for note in notes):
            format_stats['incomplete'] += 1

    # Prepare output data
    output_data = {
        'extraction_metadata': {
            'total_files_processed': len(list(pages_dir.glob('*.md'))),
            'ontologies_extracted': len(ontologies),
            'source_directory': str(pages_dir),
            'extraction_date': '2025-11-07',
            'format_statistics': format_stats
        },
        'ontologies': ontologies
    }

    # Write YAML output
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        yaml.dump(
            output_data,
            f,
            default_flow_style=False,
            allow_unicode=True,
            sort_keys=False,
            width=120
        )

    print(f"\n{'='*80}")
    print(f"Extraction Complete!")
    print(f"{'='*80}")
    print(f"Total files scanned: {output_data['extraction_metadata']['total_files_processed']}")
    print(f"Ontologies extracted: {output_data['extraction_metadata']['ontologies_extracted']}")
    print(f"Output written to: {output_file}")

    print(f"\n{'='*80}")
    print(f"Format Analysis")
    print(f"{'='*80}")
    print(f"Structured format: {format_stats['structured']}")
    print(f"Flat format: {format_stats['flat']}")
    print(f"Mixed format (WARNING): {format_stats['mixed']}")
    print(f"With OWL axioms: {format_stats['has_owl_axioms']}")
    print(f"Incomplete sections: {format_stats['incomplete']}")

    print(f"\n{'='*80}")
    print(f"Summary by term-id prefix:")
    print(f"{'='*80}")

    # Count by prefix
    prefixes = {}
    for ont in ontologies:
        term_id = ont.get('identification', {}).get('term_id') or ont.get('properties', {}).get('term_id', '')
        if term_id:
            prefix = term_id.split('-')[0] if '-' in term_id else 'other'
            prefixes[prefix] = prefixes.get(prefix, 0) + 1

    for prefix, count in sorted(prefixes.items()):
        print(f"  {prefix}: {count} ontologies")


if __name__ == '__main__':
    main()
