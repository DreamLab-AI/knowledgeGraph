public:: true

# Semantic Reasoning Engine
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f5a507c5a48bd60945f8ec42bde0b730adae0d311e2517bb3fbe748951061f2",
  "@type": "Page",
  "vc:slug": "semantic-reasoning-engine",
  "title": "Semantic Reasoning Engine",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:description-logic",
      "vc:label": "Description Logic"
    },
    {
      "@id": "urn:visionflow:linked:owl-2-web-ontology-language",
      "vc:label": "OWL 2 Web Ontology Language"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:reasoning",
      "vc:label": "Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:inference-engine",
      "vc:label": "Inference Engine"
    },
    {
      "@id": "urn:visionflow:linked:https-www-w-3-org-tr-owl-2-primer",
      "vc:label": "https://www.w3.org/TR/owl2-primer/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Semantic Reasoning Engine"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:semantic-reasoning-engine",
  "@type": "Class",
  "label": "Semantic Reasoning Engine",
  "definition": "Software that derives logically implied facts and checks consistency over a knowledge base expressed in a formal language such as OWL or RDF Schema. It applies inference rules of the underlying logic to make implicit information explicit.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:inference-engine",
      "label": "Inference Engine"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:owl-2-web-ontology-language",
        "label": "OWL 2 Web Ontology Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:semantic-reasoning-engine:0e38e2f02edd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0f5a507c5a48bd60945f8ec42bde0b730adae0d311e2517bb3fbe748951061f2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Description Logic]]",
      "resolved": "urn:visionflow:linked:description-logic",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OWL 2 Web Ontology Language]]",
      "resolved": "urn:visionflow:linked:owl-2-web-ontology-language",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reasoning]]",
      "resolved": "urn:visionflow:linked:reasoning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Engine]]",
      "resolved": "urn:visionflow:linked:inference-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.w3.org/TR/owl2-primer/]]",
      "resolved": "urn:visionflow:linked:https-www-w-3-org-tr-owl-2-primer",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Software that derives logically implied facts and checks consistency over a knowledge base expressed in a formal language such as OWL or RDF Schema. It applies inference rules of the underlying logic to make implicit information explicit.

- ### Semantic Classification
  - owl-class:: general:SemanticReasoningEngine
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Inference Engine]]
  - bridges-to:: [[Reasoning]], [[Knowledge Representation]]
  - requires:: [[Description Logic]], [[OWL 2 Web Ontology Language]]
  - enables:: [[Knowledge Graph]]

- ### Content
  - A semantic reasoning engine, or reasoner, takes an ontology and its asserted facts and computes the conclusions that follow from the formal semantics, such as class membership, subsumption hierarchies and inconsistencies. It lets applications query for facts that were never stated directly.
  - Reasoners implement the inference procedures of description logic and related formalisms, and their feasibility depends on the expressive profile of the ontology. They support tasks such as classification, consistency checking and answering queries that require derived knowledge.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/owl2-primer/]]
  - migration-date:: 2026-05-29T00:00:00Z
