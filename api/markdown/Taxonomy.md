public:: true

# Taxonomy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:taxonomy",
  "@type": "Page",
  "vc:slug": "taxonomy",
  "title": "Taxonomy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:corporate-tax-compliance-frameworkonomy",
  "@type": "Class",
  "label": "Taxonomy",
  "definition": "A taxonomy is a hierarchical classification scheme that organises concepts or entities into nested categories based on shared characteristics, typically expressing broader-than and narrower-than relationships. It provides a controlled vocabulary that supports consistent naming, navigation, and retrieval within a domain. Taxonomies are a simpler precursor to fuller ontologies, which add richer relations and formal axioms.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:etsi-metaverse-domain-taxonomy", "label": "ETSI Metaverse Domain Taxonomy"},
      {"@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A taxonomy is a hierarchical classification of concepts using broader and narrower relationships, providing a controlled vocabulary that underpins schemes such as the [[ETSI Metaverse Domain Taxonomy]] and relates closely to a [[Domain Ontology]].
- ### Content
  - Each node in a taxonomy is a category positioned by an is-a or part-of relation to its parent, producing a tree or shallow polyhierarchy that aids browsing and tagging. Taxonomies enforce naming consistency and let systems roll up or drill down across levels of abstraction. They differ from ontologies in expressiveness: a taxonomy captures hierarchy alone, whereas an ontology adds arbitrary typed relations, constraints, and inference rules.
