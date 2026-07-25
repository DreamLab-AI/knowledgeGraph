public:: true

# Named Entity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:817cd53b6d44b4de1cbcd7f1302cac21701b72549e64ff7583cee6057ed40216",
  "@type": "Page",
  "vc:slug": "named-entity",
  "title": "Named Entity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0814"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Named Entity"
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
  "@id": "urn:ngm:class:named-entity",
  "@type": "Class",
  "label": "Named Entity",
  "definition": "A Named Entity is a real-world object or concept denoted by a proper noun—typically a person, organisation, location, geopolitical entity, date, time expression, monetary value, or product—that can be identified and classified within text by a named-entity recognition system. Named entities form the primary subjects, objects, and contextual anchors of factual statements, making their accurate identification a prerequisite for downstream information-extraction, relation-extraction, question-answering, and knowledge-graph construction tasks. The boundary and category of a named entity are determined by an annotation schema and domain ontology, so the same text span may be categorised differently across biomedical, legal, and news domains.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:named-entity-recognition", "label": "Named Entity Recognition"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-base", "label": "Knowledge Base"},
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tokenization", "label": "Tokenization"},
      {"@id": "urn:ngm:class:conditional-random-field", "label": "Conditional Random Field"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:vocabulary", "label": "Vocabulary"},
      {"@id": "urn:ngm:class:token", "label": "Token"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:feature-engineering", "label": "Feature Engineering"},
      {"@id": "urn:ngm:class:pattern-recognition", "label": "Pattern Recognition"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:named-entity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:817cd53b6d44b4de1cbcd7f1302cac21701b72549e64ff7583cee6057ed40216"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
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
  - Person, organization, location, or other named entity.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NamedEntity
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Named Entity — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
