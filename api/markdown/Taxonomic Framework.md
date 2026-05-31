public:: true
alias:: TaxonomicFramework

# Taxonomic Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b4242ac4ab3fa592136be305f82e49404ffd76f2027244ac0d2e969f5c1ba2e8",
  "@type": "Page",
  "vc:slug": "taxonomic-framework",
  "title": "Taxonomic Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9532"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Taxonomic Framework"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:taxonomic-framework",
  "@type": "Class",
  "label": "Taxonomic Framework",
  "definition": "A Taxonomic Framework is a principled hierarchical classification system that organises concepts within a domain into superclass-subclass relationships, enabling consistent identification, comparison, and retrieval of entities. In the robotics ontology it structures robot types, actuators, sensors, and control strategies into a formal class hierarchy that supports OWL reasoning, SPARQL queries, and interoperability across ontologies.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:domain-ontology", "label": "Domain Ontology"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:robo-robot-type", "label": "Robot Type"},
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Actuation and Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:structural-member", "label": "Structural Member"},
      {"@id": "urn:ngm:class:systems-engineering", "label": "Systems Engineering"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:semantic-web-standards", "label": "Semantic Web Standards"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:taxonomic-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b4242ac4ab3fa592136be305f82e49404ffd76f2027244ac0d2e969f5c1ba2e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A Taxonomic Framework is a principled hierarchical classification system that organises concepts within a domain into superclass-subclass relationships, enabling consistent identification, comparison, and retrieval of entities. In the robotics ontology it structures robot types, actuators, sensors, and control strategies into a formal class hierarchy that supports OWL reasoning, SPARQL queries, and interoperability across ontologies.

- ### Semantic Classification
  - owl-class:: robotics:TaxonomicFramework
  - owl-role:: concept

- ### Relationships
  - enables:: Ontology, Domain Ontology
  - hasPart:: Robot Type, Actuation and Control
  - relatedTo:: Structural Member, Systems Engineering
  - standardizedBy:: Semantic Web Standards

- ### Content

  ## Overview

  Taxonomic Framework represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
