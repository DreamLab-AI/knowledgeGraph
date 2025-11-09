#!/usr/bin/env python3
"""
Analyze unmapped public files to find their integration target concepts.
Assess size/quality of targets to determine which should be marked public.
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

def load_unmapped_files(mapping_json):
    """Load list of unmapped public files."""
    with open(mapping_json, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return [item['public_filename'] for item in data['unmapped']]

def load_ontology_terms(mapping_json):
    """Load all ontology terms with metadata."""
    with open(mapping_json, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data['terms']

def fuzzy_match_score(filename, canonical_term):
    """Calculate fuzzy match score between filename and canonical term."""
    filename_lower = filename.lower()
    term_lower = canonical_term.lower()

    # Exact match
    if filename_lower == term_lower:
        return 100

    # One contains the other
    if filename_lower in term_lower or term_lower in filename_lower:
        return 80

    # Word overlap
    filename_words = set(re.findall(r'\w+', filename_lower))
    term_words = set(re.findall(r'\w+', term_lower))

    if not filename_words or not term_words:
        return 0

    overlap = len(filename_words & term_words)
    total = len(filename_words | term_words)

    return int((overlap / total) * 60)

def find_potential_targets(unmapped_files, ontology_terms, threshold=30):
    """Find potential ontology targets for unmapped public files."""
    matches = []

    for filename in unmapped_files:
        best_match = None
        best_score = 0

        for term_info in ontology_terms:
            score = fuzzy_match_score(filename, term_info['canonical_term'])

            if score > best_score:
                best_score = score
                best_match = term_info

        if best_score >= threshold:
            matches.append({
                'public_filename': filename,
                'canonical_term': best_match['canonical_term'],
                'term_id': best_match['term_id'],
                'domain': best_match['source_domain'],
                'ontology_filename': best_match['filename'],
                'match_score': best_score,
                'already_public': best_match.get('public_access', False)
            })

    return sorted(matches, key=lambda x: x['match_score'], reverse=True)

def assess_file_quality(file_path):
    """Assess quality metrics of an ontology file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Size metrics
        char_count = len(content)
        word_count = len(re.findall(r'\w+', content))
        line_count = content.count('\n')

        # Quality indicators
        has_ontology_block = 'ontology:: true' in content
        has_owl_axioms = '#### OWL Axioms' in content
        has_relationships = any(marker in content for marker in ['bridges-to::', 'has-part::', 'requires::', 'enables::'])
        section_count = content.count('##')

        # References and sources
        reference_count = len(re.findall(r'\[\[.*?\]\]', content))
        source_count = content.count('source::')

        # Quality score (0-100)
        quality_score = 0
        if has_ontology_block: quality_score += 20
        if has_owl_axioms: quality_score += 20
        if has_relationships: quality_score += 15
        if word_count > 500: quality_score += 15
        if section_count > 5: quality_score += 10
        if reference_count > 10: quality_score += 10
        if source_count > 2: quality_score += 10

        return {
            'exists': True,
            'char_count': char_count,
            'word_count': word_count,
            'line_count': line_count,
            'has_ontology_block': has_ontology_block,
            'has_owl_axioms': has_owl_axioms,
            'has_relationships': has_relationships,
            'section_count': section_count,
            'reference_count': reference_count,
            'source_count': source_count,
            'quality_score': quality_score
        }
    except Exception as e:
        return {
            'exists': False,
            'error': str(e)
        }

def main():
    script_dir = Path(__file__).parent
    public_mapping_json = script_dir / 'public-files-mapping.json'
    wiki_mapping_json = script_dir / 'wiki-link-mapping.json'
    pages_dir = Path('logseq/pages')

    print("="*70)
    print("ANALYZING UNMAPPED PUBLIC FILES FOR INTEGRATION TARGETS")
    print("="*70)

    # Load unmapped files
    print("\nLoading unmapped public files...")
    unmapped = load_unmapped_files(public_mapping_json)
    print(f"Found {len(unmapped)} unmapped files")

    # Load ontology terms
    print("\nLoading ontology terms...")
    terms = load_ontology_terms(wiki_mapping_json)
    print(f"Found {len(terms)} canonical ontology terms")

    # Find potential matches
    print("\nFinding potential integration targets (fuzzy matching)...")
    matches = find_potential_targets(unmapped, terms, threshold=30)
    print(f"Found {len(matches)} potential matches")

    # Assess quality of matched targets
    print("\nAssessing quality of target concepts...")
    quality_results = []

    for match in matches:
        file_path = pages_dir / f"{match['ontology_filename']}.md"
        quality = assess_file_quality(file_path)

        if quality['exists']:
            quality_results.append({
                **match,
                **quality
            })

    # Filter for high-quality candidates
    high_quality = [
        r for r in quality_results
        if r['quality_score'] >= 60 and r['word_count'] >= 300 and not r['already_public']
    ]

    print(f"\nFound {len(high_quality)} high-quality candidates for public access")

    # Display results
    print("\n" + "="*70)
    print("HIGH-QUALITY CANDIDATES FOR PUBLIC ACCESS")
    print("="*70)

    if high_quality:
        for i, result in enumerate(sorted(high_quality, key=lambda x: x['quality_score'], reverse=True), 1):
            print(f"\n{i}. {result['canonical_term']} ({result['term_id']})")
            print(f"   Original public file: {result['public_filename']}")
            print(f"   Match score: {result['match_score']}/100")
            print(f"   Quality score: {result['quality_score']}/100")
            print(f"   Word count: {result['word_count']:,}")
            print(f"   Sections: {result['section_count']}")
            print(f"   References: {result['reference_count']}")
            print(f"   File: logseq/pages/{result['ontology_filename']}.md")
    else:
        print("\nNo high-quality candidates found with current criteria.")
        print("Try lowering quality threshold or checking manual integrations.")

    # Known manual integrations from session summary
    print("\n" + "="*70)
    print("KNOWN MANUAL INTEGRATIONS (from previous session)")
    print("="*70)

    manual_integrations = [
        {
            'public_file': '3D and 4D',
            'target': 'Neural 3D Generation',
            'term_id': 'AI-0700',
            'filename': 'Neural 3D Generation'
        },
        {
            'public_file': 'Agents',
            'target': 'AI Agent System',
            'term_id': 'AI-0600',
            'filename': 'AI Agent System'
        },
        {
            'public_file': 'Ai in Games',
            'target': 'AI Game Agent',
            'term_id': 'AI-0800',
            'filename': 'AI Game Agent'
        },
        {
            'public_file': 'Adoption of Convergent Technologies',
            'target': 'Technology Adoption',
            'term_id': 'DT-0003',
            'filename': 'Technology Adoption'
        },
        {
            'public_file': 'Social contract and jobs',
            'target': 'Social Impact',
            'term_id': 'AI-0170',
            'filename': 'Social Impact'
        }
    ]

    print("\nThese files were manually integrated in previous session:")
    for i, integration in enumerate(manual_integrations, 1):
        file_path = pages_dir / f"{integration['filename']}.md"
        quality = assess_file_quality(file_path)

        print(f"\n{i}. {integration['public_file']} → {integration['target']} ({integration['term_id']})")
        if quality['exists']:
            print(f"   Quality score: {quality.get('quality_score', 0)}/100")
            print(f"   Word count: {quality.get('word_count', 0):,}")
            print(f"   Sections: {quality.get('section_count', 0)}")
            print(f"   File: logseq/pages/{integration['filename']}.md")
        else:
            print(f"   Warning: File not found!")

    # Save detailed results
    output_file = script_dir / 'public-target-analysis.json'
    output_data = {
        'high_quality_candidates': high_quality,
        'all_matches': quality_results,
        'manual_integrations': manual_integrations,
        'stats': {
            'unmapped_count': len(unmapped),
            'fuzzy_matches': len(matches),
            'quality_candidates': len(high_quality)
        }
    }

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)

    print("\n" + "="*70)
    print(f"Detailed analysis saved to: {output_file}")
    print("="*70)

if __name__ == '__main__':
    main()
