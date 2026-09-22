public:: true

# Term Definitions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:term-definitions",
  "@type": "Page",
  "vc:slug": "term-definitions",
  "title": "Term Definitions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:term-definitions",
  "@type": "Class",
  "label": "Term Definitions",
  "definition": "Term definitions are the authoritative, machine-readable descriptions that bind a label or identifier to its precise meaning within a controlled vocabulary, glossary, or ontology. Each definition fixes the intension of a term so that data producers and consumers interpret it consistently. They are the atomic content of glossaries and semantic registries and are essential for interoperability across systems.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:semantic-metadata-registry", "label": "Semantic Metadata Registry"},
      {"@id": "urn:ngm:class:glossary-index", "label": "Glossary Index"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Term definitions bind each label or identifier to its precise meaning, forming the core entries of a [[Glossary Index]] and a [[Semantic Metadata Registry]].
- ### Content
  - A well-formed term definition records the term, a unique identifier, the intended meaning, and often the source, scope notes, and relationships to broader or related terms. Capturing definitions in a machine-readable registry allows automated validation, disambiguation, and reuse across datasets and applications. Standards such as SKOS and ISO 11179 provide structures for representing definitions so that vocabularies remain consistent and interoperable as they evolve.
