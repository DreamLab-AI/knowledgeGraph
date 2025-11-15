# WebVOWL Ontology - Quick Start Guide

## 📦 Generated Files

**Primary Output (Recommended):**
- `unified-ontology-webvowl-final.ttl` (1.1 MB, 28,436 triples)

**Alternate Version:**
- `unified-ontology-webvowl.ttl` (1.1 MB, 28,431 triples)

---

## 🚀 WebVOWL Visualization

### Step 1: Upload to WebVOWL

1. Visit: **http://vowl.visualdataweb.org/webvowl.html**
2. Click **"Ontology"** menu → **"Upload ontology"**
3. Select: `unified-ontology-webvowl-final.ttl`
4. Wait for parsing (10-30 seconds for 995 classes)

### Step 2: Explore the Ontology

**Navigation:**
- **Zoom:** Mouse wheel or pinch gesture
- **Pan:** Click and drag background
- **Select:** Click on any node to view details
- **Filter:** Use search box to find specific concepts

**Viewing Options:**
- Click ⚙️ (settings) to adjust visualization
- Enable/disable datatype properties
- Toggle object property labels
- Adjust node spacing and layout

---

## 📊 What's Inside

### Domain Statistics
```
Total Classes:      995
├─ Cross-Domain:    455 (46%)
├─ AI:              315 (32%)
├─ Blockchain:      120 (12%)
└─ Robotics:        105 (11%)

Object Properties:   67
Data Properties:     44
OWL Restrictions:    5,946
Labels:              1,038
```

### Technology Domains

**AI (Artificial Intelligence) - 315 classes**
- AI Ethics & Governance
- Fairness & Bias Mitigation
- Privacy & Security
- Edge Computing & TinyML
- Trustworthy AI Frameworks

**Blockchain - 120 classes**
- Consensus Mechanisms
- Smart Contracts & DeFi
- Enterprise Blockchain
- Tokenomics & Cryptocurrencies
- Regulatory Compliance

**Metaverse - 455 classes**
- Virtual Worlds & Environments
- Avatars & Digital Identity
- Immersive Experiences (VR/AR/XR)
- Spatial Computing
- Digital Assets

**Robotics - 105 classes**
- Sensors & Actuators
- Autonomous Systems
- Human-Robot Interaction
- Industrial & Mobile Robotics

---

## 🔍 Example SPARQL Queries

### Query 1: Find all AI Fairness concepts

```sparql
PREFIX ai: <http://disruption.org/ontology/artificial-intelligence#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?class ?label ?comment
WHERE {
  ?class a owl:Class ;
         rdfs:label ?label .
  OPTIONAL { ?class rdfs:comment ?comment }
  FILTER(CONTAINS(LCASE(?label), "fairness"))
}
```

### Query 2: Browse Blockchain classes

```sparql
PREFIX bc: <http://disruption.org/ontology/blockchain#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?class ?label
WHERE {
  ?class a owl:Class ;
         rdfs:label ?label .
  FILTER(STRSTARTS(STR(?class), "http://disruption.org/ontology/blockchain#"))
}
LIMIT 50
```

### Query 3: Find classes with restrictions

```sparql
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?class ?label (COUNT(?restriction) as ?numRestrictions)
WHERE {
  ?class a owl:Class ;
         rdfs:label ?label ;
         rdfs:subClassOf ?restriction .
  ?restriction a owl:Restriction .
}
GROUP BY ?class ?label
ORDER BY DESC(?numRestrictions)
LIMIT 20
```

---

## 💻 Python Usage

### Load and Query with RDFLib

```python
from rdflib import Graph, Namespace
from rdflib.namespace import RDF, RDFS, OWL

# Load ontology
g = Graph()
g.parse('unified-ontology-webvowl-final.ttl', format='turtle')

# Define namespaces
AI = Namespace('http://disruption.org/ontology/artificial-intelligence#')
BC = Namespace('http://disruption.org/ontology/blockchain#')
MV = Namespace('http://disruption.org/ontology/metaverse#')
RB = Namespace('http://disruption.org/ontology/robotics#')

# Count classes by domain
print(f"Total triples: {len(g):,}")

ai_classes = list(g.subjects(RDF.type, OWL.Class))
ai_count = sum(1 for cls in ai_classes if str(AI) in str(cls))
print(f"AI classes: {ai_count}")

# Find all fairness-related concepts
for cls in g.subjects(RDF.type, OWL.Class):
    label = g.value(cls, RDFS.label)
    if label and 'fairness' in str(label).lower():
        comment = g.value(cls, RDFS.comment)
        print(f"\n{label}")
        print(f"  URI: {cls}")
        if comment:
            print(f"  Definition: {comment[:100]}...")
```

### Extract Domain Statistics

```python
from collections import Counter

domain_map = {
    'http://disruption.org/ontology/artificial-intelligence#': 'AI',
    'http://disruption.org/ontology/blockchain#': 'Blockchain',
    'http://disruption.org/ontology/metaverse#': 'Metaverse',
    'http://disruption.org/ontology/robotics#': 'Robotics',
    'http://disruption.org/ontology/disruptive-technologies#': 'Cross-Domain'
}

domain_counts = Counter()

for cls in g.subjects(RDF.type, OWL.Class):
    uri_str = str(cls)
    for domain_prefix, domain_name in domain_map.items():
        if domain_prefix in uri_str:
            domain_counts[domain_name] += 1
            break

for domain, count in domain_counts.most_common():
    print(f"{domain}: {count} classes")
```

---

## 🛠️ Advanced Usage

### Convert to Other Formats

```bash
# Convert to RDF/XML
cd Ontology-Tools
source venv/bin/activate
python -c "
from rdflib import Graph
g = Graph()
g.parse('outputs/unified-ontology-webvowl-final.ttl', format='turtle')
g.serialize('outputs/unified-ontology.rdf', format='xml')
print('✅ Converted to RDF/XML')
"

# Convert to JSON-LD
python -c "
from rdflib import Graph
g = Graph()
g.parse('outputs/unified-ontology-webvowl-final.ttl', format='turtle')
g.serialize('outputs/unified-ontology.jsonld', format='json-ld')
print('✅ Converted to JSON-LD')
"
```

### Import into Protégé

1. Download Protégé: https://protege.stanford.edu/
2. Open Protégé
3. File → Open → Select `unified-ontology-webvowl-final.ttl`
4. Explore using:
   - **Classes tab:** Browse class hierarchy
   - **Object Properties tab:** View relationships
   - **DL Query tab:** Run Description Logic queries

---

## 📋 Namespace Reference

```turtle
@prefix ai: <http://disruption.org/ontology/artificial-intelligence#> .
@prefix bc: <http://disruption.org/ontology/blockchain#> .
@prefix mv: <http://disruption.org/ontology/metaverse#> .
@prefix rb: <http://disruption.org/ontology/robotics#> .
@prefix dt: <http://disruption.org/ontology/disruptive-technologies#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
```

---

## ✅ Validation Status

- **RDFLib Parse:** ✅ VALID
- **Turtle Syntax:** ✅ VERIFIED
- **OWL 2 DL:** ✅ COMPLIANT
- **WebVOWL Compatible:** ✅ YES
- **Namespaces:** ✅ CONSISTENT

---

## 📖 Documentation

For detailed information:
- **Generation Report:** `WEBVOWL-GENERATION-REPORT.md`
- **Ontology Tools:** `../README.md`
- **Source Format:** See Logseq pages in `../mainKnowledgeGraph/pages/`

---

## 🔗 Resources

- **WebVOWL:** http://vowl.visualdataweb.org/webvowl.html
- **Protégé:** https://protege.stanford.edu/
- **RDFLib:** https://rdflib.readthedocs.io/
- **OWL 2 Primer:** https://www.w3.org/TR/owl2-primer/
- **SPARQL 1.1:** https://www.w3.org/TR/sparql11-query/

---

**Generated:** 2025-11-08
**Version:** 1.0.0
**Status:** Production Ready
