public:: true

# Description Logic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:37ef9af6ddbf60246830b0e0feac5406c6d37b48b999548290a3512f4c525c86",
  "@type": "Page",
  "vc:slug": "description-logic",
  "title": "Description Logic",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:set-theory",
      "vc:label": "Set Theory"
    },
    {
      "@id": "urn:visionflow:linked:owl",
      "vc:label": "OWL"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:linked:ontology",
      "vc:label": "Ontology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Description Logic"
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
  "@id": "urn:ngm:class:description-logic",
  "@type": "Class",
  "label": "Description Logic",
  "definition": "A family of formal knowledge representation languages used to describe concepts, roles, and individuals with well-defined model-theoretic semantics, providing decidable fragments of first-order logic tailored to structured knowledge representation and automated reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:ai-research-area",
    "label": "AI Research Area"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:terminological-logic",
      "label": "Terminological Logic"
    },
    {
      "@id": "urn:ngm:class:concept-language",
      "label": "Concept Language"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tbox",
        "label": "TBox"
      },
      {
        "@id": "urn:ngm:class:abox",
        "label": "ABox"
      },
      {
        "@id": "urn:ngm:class:role-restriction",
        "label": "Role Restriction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:set-theory",
        "label": "Set Theory"
      },
      {
        "@id": "urn:ngm:class:model-theoretic-semantics",
        "label": "Model-Theoretic Semantics"
      },
      {
        "@id": "urn:ngm:class:first-order-logic",
        "label": "First-Order Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:owl",
        "label": "OWL"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:subsumption-reasoning",
        "label": "Subsumption Reasoning"
      },
      {
        "@id": "urn:ngm:class:consistency-checking",
        "label": "Consistency Checking"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tableau-algorithm",
        "label": "Tableau Algorithm"
      },
      {
        "@id": "urn:ngm:class:concept-subsumption",
        "label": "Concept Subsumption"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      },
      {
        "@id": "urn:ngm:class:ontology-engineering",
        "label": "Ontology Engineering"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:full-first-order-logic",
        "label": "Full First-Order Logic"
      },
      {
        "@id": "urn:ngm:class:horn-logic",
        "label": "Horn Logic"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:sparql",
        "label": "SPARQL"
      },
      {
        "@id": "urn:ngm:class:open-world-assumption",
        "label": "Open World Assumption"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:description-logic:ee5a2040e616",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:37ef9af6ddbf60246830b0e0feac5406c6d37b48b999548290a3512f4c525c86"
  },
  "vc:resolutions": [
    {
      "raw": "[[Set Theory]]",
      "resolved": "urn:visionflow:linked:set-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OWL]]",
      "resolved": "urn:visionflow:linked:owl",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:linked:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ontology]]",
      "resolved": "urn:visionflow:linked:ontology",
      "kind": "ResolvedLink"
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
  - A family of formal knowledge representation languages used to describe concepts, roles, and individuals with well-defined model-theoretic semantics.

- ### Semantic Classification
  - owl-class:: mathematics:DescriptionLogic
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Ontology]]
  - bridges-to:: [[Semantic Web Linked Data Standard]]
  - requires:: [[Set Theory]]
  - enables:: [[OWL]], [[Knowledge Graph]]

- ### Content
  - Description logics provide decidable fragments of first-order logic tailored to representing structured knowledge. They distinguish a terminological component describing concepts and roles from an assertional component describing individuals, and they support automated reasoning tasks such as subsumption and consistency checking.
  - They form the theoretical foundation of the Web Ontology Language and are widely used to give precise meaning to classes and properties in knowledge graphs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
