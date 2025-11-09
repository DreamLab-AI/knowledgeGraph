# Examples Directory

This directory contains example code, queries, and use cases demonstrating how to use the Disruptive Technologies Meta-Ontology.

## Structure

```
examples/
├── notebooks/           # Jupyter notebooks with interactive examples
├── sparql-queries/      # SPARQL query examples
│   ├── basic/          # Simple queries for learning
│   ├── advanced/       # Complex queries and analytics
│   └── federated/      # Federated queries across domains
└── use-cases/          # Real-world application scenarios
```

## SPARQL Queries

### Basic Queries

Example queries for beginners:
- List all classes in a domain
- Find properties of a concept
- Retrieve concept definitions
- Navigate class hierarchies

### Advanced Queries

Complex analytical queries:
- Cross-domain reasoning
- Pattern matching
- Aggregations and statistics
- Inference examples

### Federated Queries

Queries spanning multiple ontology domains:
- AI + Blockchain integration
- Metaverse + Robotics scenarios
- Multi-domain analytics

## Jupyter Notebooks

Interactive Python notebooks demonstrating:
- Loading and querying ontologies
- Visualization of ontology structure
- Adding new concepts programmatically
- Integration with machine learning
- Knowledge graph analytics

## Use Cases

Real-world application scenarios:
- Virtual world content creation
- Decentralized AI governance
- Robot coordination in metaverse
- Blockchain-based digital assets
- Cross-platform interoperability

## Running Examples

### Prerequisites

```bash
pip install rdflib jupyter sparqlwrapper matplotlib networkx
```

### SPARQL Queries

Using Python:
```python
from rdflib import Graph

g = Graph()
g.parse("ontologies/unified/disruptive-technologies-meta-ontology-v1.0.0.ttl")

query = """
    PREFIX dto: <http://purl.org/disruptive-technologies-ontology/>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT ?class ?label
    WHERE {
        ?class a owl:Class ;
               rdfs:label ?label .
    }
    LIMIT 10
"""

results = g.query(query)
for row in results:
    print(f"{row.class}: {row.label}")
```

### Jupyter Notebooks

```bash
cd examples/notebooks
jupyter notebook
```

## Example Categories

- **Data Integration** - Combining data from multiple sources
- **Reasoning** - Inferencing and classification
- **Visualization** - Graph and hierarchy visualization
- **Validation** - Testing ontology constraints
- **Application** - Building ontology-driven applications

## Contributing Examples

When adding new examples:
1. Include clear documentation
2. Add data dependencies
3. Test with latest ontology versions
4. Follow PEP 8 for Python code
5. Add example to appropriate subdirectory

## See Also

- `/docs/getting-started/` - Quick start guide
- `/docs/api/` - API documentation
- `/tools/` - Ontology tools and utilities

## License

See LICENSE file in the repository root.
