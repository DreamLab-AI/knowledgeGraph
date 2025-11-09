#!/usr/bin/env python3
"""
Apply 200+ cross-domain bridges to existing TTL file
Reads bridges from generate_unified_ontology.py and adds them to the graph
"""

import sys
from pathlib import Path
from rdflib import Graph, Namespace, RDF, RDFS, OWL, URIRef, Literal, BNode

# Add tools/generators to path
sys.path.insert(0, str(Path(__file__).parent.parent / 'tools' / 'generators'))

# Define namespaces
DT = Namespace("http://purl.org/disruptive-tech/bridges#")
META = Namespace("http://purl.org/disruptive-tech/meta#")
AIGO = Namespace("http://purl.org/ai-ontology#")
BC = Namespace("http://purl.org/blockchain-ontology#")
MV = Namespace("http://purl.org/metaverse-ontology#")
RB = Namespace("http://purl.org/robotics-ontology#")

def resolve_namespace(prefix):
    """Resolve namespace prefix to Namespace object"""
    if prefix == 'aigo' or prefix == 'ai':
        return AIGO
    elif prefix == 'bc':
        return BC
    elif prefix == 'mv':
        return MV
    elif prefix == 'rb':
        return RB
    elif prefix == 'dt':
        return DT
    else:
        return MV  # Default

def resolve_term(term_str):
    """Resolve term string like 'rb:HumanoidRobot' to URIRef"""
    if ':' in term_str:
        prefix, local = term_str.split(':', 1)
        # Sanitize local part - remove spaces and special characters
        local = local.replace(' ', '').replace('-', '')
        ns = resolve_namespace(prefix)
        return ns[local]
    return MV[term_str.replace(' ', '').replace('-', '')]  # Default

def apply_bridges(input_ttl, output_ttl):
    """Apply cross-domain bridges to TTL file"""

    print(f"Loading existing ontology from {input_ttl}...")
    graph = Graph()
    graph.parse(input_ttl, format='turtle')

    print(f"Original triples: {len(graph):,}")

    # Bind additional namespaces
    graph.bind('dt', DT)
    graph.bind('meta', META)
    graph.bind('aigo', AIGO)
    graph.bind('bc', BC)
    graph.bind('mv', MV)
    graph.bind('rb', RB)

    # Import bridge definitions
    print("\nImporting bridge definitions...")
    try:
        from generate_unified_ontology import CROSS_DOMAIN_BRIDGES
        print(f"✅ Loaded {len(CROSS_DOMAIN_BRIDGES)} bridge definitions")
    except ImportError:
        print("ERROR: Could not import CROSS_DOMAIN_BRIDGES")
        print("Reading bridges directly from generate_unified_ontology.py...")

        # Fallback: read and parse the Python file directly
        gen_file = Path(__file__).parent.parent / 'tools' / 'generators' / 'generate_unified_ontology.py'
        with open(gen_file, 'r') as f:
            content = f.read()

        # Extract bridge tuples using regex
        import re
        pattern = r'\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*([0-9.]+)\)'
        matches = re.findall(pattern, content)

        CROSS_DOMAIN_BRIDGES = [
            (m[0], m[1], m[2], m[3], m[4], float(m[5]))
            for m in matches
        ]
        print(f"✅ Extracted {len(CROSS_DOMAIN_BRIDGES)} bridges from source file")

    # Apply bridges
    print("\nApplying cross-domain bridges...")
    bridges_added = 0
    bridge_properties = set()

    for subject_term, predicate_term, object_term, bridge_dir, bridge_type, confidence in CROSS_DOMAIN_BRIDGES:
        try:
            # Resolve URIs
            subject = resolve_term(subject_term)
            predicate = resolve_term(predicate_term)
            obj = resolve_term(object_term)

            # Add the bridge triple
            graph.add((subject, predicate, obj))

            # Add bridge metadata using reification
            bridge_node = BNode()
            graph.add((bridge_node, RDF.type, RDF.Statement))
            graph.add((bridge_node, RDF.subject, subject))
            graph.add((bridge_node, RDF.predicate, predicate))
            graph.add((bridge_node, RDF.object, obj))
            graph.add((bridge_node, META.crossDomainBridge, Literal(bridge_dir)))
            graph.add((bridge_node, META.bridgeType, Literal(bridge_type)))
            graph.add((bridge_node, META.confidence, Literal(confidence)))

            # Declare bridge property as ObjectProperty (if dt: namespace)
            if predicate_term.startswith('dt:'):
                graph.add((predicate, RDF.type, OWL.ObjectProperty))
                bridge_properties.add(predicate)

            bridges_added += 1

            if bridges_added % 50 == 0:
                print(f"  Added {bridges_added} bridges...")

        except Exception as e:
            print(f"Warning: Could not add bridge {subject_term} {predicate_term} {object_term}: {e}")

    print(f"✅ Added {bridges_added} cross-domain bridges")
    print(f"✅ Declared {len(bridge_properties)} dt: bridge properties")
    print(f"\nFinal triples: {len(graph):,}")

    # Save enhanced ontology
    print(f"\nSaving enhanced ontology to {output_ttl}...")
    graph.serialize(destination=output_ttl, format='turtle')
    print("✅ Done!")

    # Print statistics
    print("\n📊 Enhancement Statistics:")
    print(f"   Original triples: {len(graph) - (bridges_added * 6):,}")  # Approx
    print(f"   Bridges added: {bridges_added}")
    print(f"   Bridge metadata triples: {bridges_added * 5}")  # 5 triples per bridge reification
    print(f"   Total triples: {len(graph):,}")
    print(f"   Bridge properties: {len(bridge_properties)}")

if __name__ == '__main__':
    import sys
    input_file = sys.argv[1] if len(sys.argv) > 1 else 'outputs/metaverse-ontology-comprehensive.ttl'
    output_file = sys.argv[2] if len(sys.argv) > 2 else 'outputs/metaverse-ontology-unified-with-bridges.ttl'

    apply_bridges(input_file, output_file)
