public:: true

# Formal Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:formal-specification",
  "@type": "Page",
  "vc:slug": "formal-specification",
  "title": "Formal Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:formal-specification",
  "@type": "Class",
  "label": "Formal Specification",
  "definition": "A formal specification is a precise, mathematically grounded description of the intended behaviour or structure of a system, written in a language with well-defined syntax and semantics. It allows properties of the system to be stated unambiguously and reasoned about or verified mechanically. Formal specifications underpin formal methods, model checking, and the construction of provably correct software and ontologies.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology"}, {"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A formal specification is a precise, mathematically grounded statement of what a system should do or how it is structured, expressed in a language with defined semantics. It is a building block of the [[Formal Methods Domain]] and a basis for constructing a rigorous [[Domain Ontology]].
- ### Content
  - Formal specifications are written in notations such as Z, VDM, TLA+, B, or description logics, enabling automated consistency checking and proof. They separate the statement of intent from implementation, allowing requirements to be validated before code exists. In ontology engineering, the OWL axioms themselves constitute a formal specification of a domain.
