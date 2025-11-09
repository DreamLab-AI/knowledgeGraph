#!/usr/bin/env python3
"""
Comprehensive manual categorization with deep semantic understanding.
Analyzes each relationship with full context and makes intelligent decisions.
"""

import re
import json
from pathlib import Path
from collections import defaultdict

def read_full_context(file_path):
    """Read full file content."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except:
        return ""

def extract_metadata(content, filename):
    """Extract metadata."""
    metadata = {'file': filename}
    match = re.search(r'preferred-term::\s*(.+?)(?:\n|$)', content)
    metadata['term'] = match.group(1).strip() if match else filename
    match = re.search(r'source-domain::\s*(.+?)(?:\n|$)', content)
    metadata['domain'] = match.group(1).strip() if match else 'unknown'
    match = re.search(r'definition::\s*(.+?)(?:\n|$)', content)
    metadata['definition'] = match.group(1).strip() if match else ''
    match = re.search(r'term-id::\s*(.+?)(?:\n|$)', content)
    metadata['term_id'] = match.group(1).strip() if match else ''
    return metadata

def comprehensive_categorize(source_meta, target_meta, source_term, target_term):
    """
    Comprehensive intelligent categorization with detailed semantic rules.

    Returns: (action, property, confidence, reason)
    where action is 'replace', 'delete', or 'review'
    """
    src = source_term.lower()
    tgt = target_term.lower()
    src_def = source_meta['definition'].lower()
    tgt_def = target_meta['definition'].lower()

    # ==================================================================
    # HIERARCHICAL RELATIONSHIPS (is-a, type-of, specialization)
    # ==================================================================

    # Pattern: X Network Slice → Network Slice (specific → general)
    if src in tgt or (src.replace('-', ' ') in tgt.replace('-', ' ')):
        if len(src) > len(tgt):
            return 'replace', 'specializes', 0.95, f"'{source_term}' is specialized type"

    # Pattern: Network Slice → X Network Slice (general → specific)
    if tgt in src or (tgt.replace('-', ' ') in src.replace('-', ' ')):
        if len(tgt) > len(src):
            return 'replace', 'has-specialization', 0.95, f"'{target_term}' is specialized type"

    # Pattern: Chatbot ↔ Virtual Assistant (similar AI agents)
    ai_agent_types = ['chatbot', 'virtual assistant', 'conversational ai', 'dialogue system']
    if any(t in src for t in ai_agent_types) and any(t in tgt for t in ai_agent_types):
        return 'replace', 'similar-system', 0.90, "Similar AI agent systems"

    # Pattern: Platform/System → Component/Module
    platforms = ['platform', 'system', 'framework']
    components = ['library', 'module', 'component', 'tool', 'service']

    if any(p in src for p in platforms) and any(c in tgt for c in components):
        return 'replace', 'encompasses', 0.88, f"Platform encompasses component"

    # ==================================================================
    # FUNCTIONAL DEPENDENCIES (uses, requires, depends-on)
    # ==================================================================

    # Pattern: Blockchain Technology → Consensus Mechanism
    if 'blockchain' in src and 'consensus' in tgt:
        return 'replace', 'requires', 0.95, "Blockchain requires consensus mechanism"

    if 'blockchain' in src and 'smart contract' in tgt:
        return 'replace', 'supports', 0.92, "Blockchain supports smart contracts"

    # Pattern: Application → Infrastructure
    app_terms = ['application', 'service', 'dapp', 'tool']
    infra_terms = ['infrastructure', 'network', 'protocol', 'blockchain', 'platform']

    if any(a in src for a in app_terms) and any(i in tgt for i in infra_terms):
        return 'replace', 'depends-on', 0.85, "Application depends on infrastructure"

    # Pattern: HAL → OS/Driver
    if 'hardware abstraction' in src or 'hal' in src:
        if 'operating system' in tgt or 'os' in tgt:
            return 'replace', 'provides-abstraction-for', 0.90, "HAL abstracts OS from hardware"
        if 'driver' in tgt:
            return 'replace', 'coordinates-with', 0.88, "HAL coordinates with drivers"

    # Pattern: Layer Relationships
    layer_order = ['infrastructure', 'hardware', 'network', 'compute', 'application', 'experience']
    src_layer = next((i for i, l in enumerate(layer_order) if l in src), None)
    tgt_layer = next((i for i, l in enumerate(layer_order) if l in tgt), None)

    if src_layer is not None and tgt_layer is not None:
        if src_layer < tgt_layer:
            return 'replace', 'supports', 0.90, "Lower layer supports higher layer"
        elif src_layer > tgt_layer:
            return 'replace', 'depends-on', 0.90, "Higher layer depends on lower"

    # ==================================================================
    # MEASUREMENT RELATIONSHIPS
    # ==================================================================

    metrics = ['metric', 'score', 'accuracy', 'precision', 'recall', 'f1', 'auc', 'roc',
               'confusion matrix', 'performance', 'error', 'loss', 'rmse', 'mae']

    is_src_metric = any(m in src for m in metrics)
    is_tgt_metric = any(m in tgt for m in metrics)

    if is_src_metric and not is_tgt_metric:
        return 'replace', 'measures', 0.92, f"Metric measures concept"
    elif not is_src_metric and is_tgt_metric:
        return 'replace', 'measured-by', 0.92, f"Concept measured by metric"
    elif is_src_metric and is_tgt_metric:
        return 'replace', 'related-metric', 0.85, "Related metrics"

    # ==================================================================
    # TECHNIQUE/METHOD RELATIONSHIPS
    # ==================================================================

    techniques = ['algorithm', 'method', 'technique', 'model', 'neural', 'learning',
                  'network', 'tree', 'forest', 'regression', 'classification']

    is_src_tech = any(t in src for t in techniques)
    is_tgt_tech = any(t in tgt for t in techniques)

    if not is_src_tech and is_tgt_tech:
        return 'replace', 'uses-technique', 0.88, "Uses ML technique"
    elif is_src_tech and not is_tgt_tech:
        return 'replace', 'technique-for', 0.88, "Technique for domain"

    # ==================================================================
    # IMPLEMENTATION RELATIONSHIPS
    # ==================================================================

    # Pattern: CBDC → Payment System
    if 'cbdc' in src or 'digital currency' in src:
        if 'payment' in tgt:
            return 'replace', 'implements', 0.90, "CBDC implements payment system"
        if 'wallet' in tgt:
            return 'replace', 'requires', 0.88, "CBDC requires wallet"

    # Pattern: Supply Chain → Smart Contract/IoT
    if 'supply chain' in src:
        if 'smart contract' in tgt:
            return 'replace', 'uses', 0.90, "Supply chain uses smart contracts"
        if 'iot' in tgt or 'internet of things' in tgt:
            return 'replace', 'integrates-with', 0.90, "Supply chain integrates IoT"

    # ==================================================================
    # COMPOSITIONAL RELATIONSHIPS
    # ==================================================================

    wholes = ['system', 'architecture', 'stack', 'framework', 'platform', 'infrastructure']
    parts = ['component', 'module', 'layer', 'element', 'subsystem', 'service']

    is_src_whole = any(w in src for w in wholes)
    is_tgt_part = any(p in tgt for p in parts)

    if is_src_whole and is_tgt_part:
        return 'replace', 'has-part', 0.85, "Compositional relationship"

    # ==================================================================
    # GOVERNANCE/ETHICS RELATIONSHIPS
    # ==================================================================

    ethics_terms = ['responsible', 'ethical', 'fairness', 'transparency', 'accountability',
                   'governance', 'oversight', 'audit', 'compliance', 'regulation', 'bias']

    is_src_ethics = any(e in src for e in ethics_terms)
    is_tgt_ethics = any(e in tgt for e in ethics_terms)

    if is_src_ethics and is_tgt_ethics:
        return 'replace', 'governance-aspect', 0.83, "Both are governance concepts"

    # ==================================================================
    # STAKEHOLDER RELATIONSHIPS
    # ==================================================================

    stakeholders = ['provider', 'operator', 'user', 'developer', 'stakeholder', 'deployer']

    is_src_stakeholder = any(s in src for s in stakeholders)
    is_tgt_stakeholder = any(s in tgt for s in stakeholders)

    if is_src_stakeholder and is_tgt_stakeholder:
        return 'replace', 'related-role', 0.80, "Related stakeholder roles"

    # ==================================================================
    # DOMAIN-SPECIFIC PATTERNS
    # ==================================================================

    # Medical AI patterns
    medical_domains = ['medical', 'clinical', 'diagnosis', 'treatment', 'pathology',
                      'radiology', 'healthcare', 'patient']

    is_src_medical = any(m in src for m in medical_domains)
    is_tgt_medical = any(m in tgt for m in medical_domains)

    if is_src_medical and is_tgt_medical:
        if 'diagnosis' in src and ('medical ai' in tgt or 'clinical' in tgt):
            return 'replace', 'application-of', 0.88, "Diagnosis is application of Medical AI"
        if 'planning' in src and 'diagnosis' in tgt:
            return 'replace', 'follows', 0.85, "Treatment planning follows diagnosis"

    # Immersion/Presence patterns
    if ('immersion' in src and 'presence' in tgt) or ('presence' in src and 'immersion' in tgt):
        return 'replace', 'experiential-quality', 0.82, "Related experiential qualities (merge needed)"

    if 'immersion' in src and 'telepresence' in tgt:
        return 'replace', 'enables', 0.85, "Immersion enables telepresence"

    # ==================================================================
    # CROSS-DOMAIN RELATIONSHIPS
    # ==================================================================

    if source_meta['domain'] != target_meta['domain']:
        if source_meta['domain'] != 'unknown' and target_meta['domain'] != 'unknown':
            return 'replace', 'bridges-to', 0.75, f"Cross-domain bridge: {source_meta['domain']} → {target_meta['domain']}"

    # ==================================================================
    # SAME DOMAIN (low confidence - might be redundant)
    # ==================================================================

    if source_meta['domain'] == target_meta['domain'] and source_meta['domain'] != 'unknown':
        # Same domain but unclear relationship - likely redundant
        return 'review', 'same-domain-unclear', 0.40, f"Same domain ({source_meta['domain']}) - unclear relationship, consider DELETE"

    # ==================================================================
    # FALLBACK - MARK FOR DELETION
    # ==================================================================

    # If we can't determine a clear semantic relationship, it's probably redundant
    return 'delete', None, 0.30, "No clear semantic relationship - recommend DELETE"

def process_all_relationships(pages_dir='logseq/pages'):
    """Process all relationships with comprehensive categorization."""

    print("Loading relationship data...")
    with open('tools/validation/related-to-replacement-plan.json', 'r') as f:
        data = json.load(f)

    relationships = data['relationships']
    print(f"Processing {len(relationships)} relationships...")
    print()

    file_cache = {}

    def get_metadata(term, filename):
        if filename not in file_cache:
            file_path = Path(pages_dir) / f"{filename}.md"
            content = read_full_context(file_path)
            file_cache[filename] = extract_metadata(content, filename)
        return file_cache[filename]

    categorized = []
    action_counts = defaultdict(int)
    property_counts = defaultdict(int)

    for i, rel in enumerate(relationships, 1):
        if i % 100 == 0:
            print(f"  Processed {i}/{len(relationships)}...")

        source_meta = get_metadata(rel['source'], rel['source_file'])
        target_meta = {'term': rel['target'], 'domain': 'unknown', 'definition': ''}

        # Try to find target file
        for cached_file, cached_meta in file_cache.items():
            if cached_meta['term'] == rel['target']:
                target_meta = cached_meta
                break

        # Comprehensive categorization
        action, property_type, confidence, reason = comprehensive_categorize(
            source_meta, target_meta, rel['source'], rel['target']
        )

        categorized.append({
            **rel,
            'action': action,  # 'replace', 'delete', 'review'
            'new_property': property_type,
            'confidence': confidence,
            'reason': reason,
            'source_domain': source_meta['domain'],
            'target_domain': target_meta['domain']
        })

        action_counts[action] += 1
        if property_type:
            property_counts[property_type] += 1

    return categorized, dict(action_counts), dict(property_counts)

def main():
    print("="*70)
    print("COMPREHENSIVE MANUAL CATEGORIZATION")
    print("="*70)
    print()

    categorized, action_counts, property_counts = process_all_relationships()

    total = len(categorized)

    print()
    print("="*70)
    print("ACTION SUMMARY")
    print("="*70)
    for action, count in sorted(action_counts.items(), key=lambda x: x[1], reverse=True):
        pct = (count / total * 100)
        print(f"{action:20} {count:4} ({pct:5.1f}%)")

    print()
    print("="*70)
    print("PROPERTY TYPES (for 'replace' actions)")
    print("="*70)
    for prop, count in sorted(property_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"{prop:30} {count:4}")

    # Breakdown by action
    replace_rels = [r for r in categorized if r['action'] == 'replace']
    delete_rels = [r for r in categorized if r['action'] == 'delete']
    review_rels = [r for r in categorized if r['action'] == 'review']

    print()
    print("="*70)
    print(f"DETAILS")
    print("="*70)
    print(f"REPLACE: {len(replace_rels)} relationships with specific properties")
    print(f"DELETE:  {len(delete_rels)} relationships (no clear semantic value)")
    print(f"REVIEW:  {len(review_rels)} relationships (need manual review)")

    # Save results
    output_file = 'tools/validation/comprehensive-categorization.json'
    with open(output_file, 'w') as f:
        json.dump({
            'relationships': categorized,
            'action_counts': action_counts,
            'property_counts': property_counts,
            'summary': {
                'total': total,
                'replace': len(replace_rels),
                'delete': len(delete_rels),
                'review': len(review_rels)
            }
        }, f, indent=2)

    print()
    print(f"✓ Comprehensive categorization saved to: {output_file}")
    print()
    print("="*70)
    print("RECOMMENDATION:")
    print("  - REPLACE relationships have clear semantic properties")
    print("  - DELETE relationships are redundant/unclear")
    print("  - REVIEW relationships need manual inspection")
    print("="*70)

if __name__ == '__main__':
    main()
