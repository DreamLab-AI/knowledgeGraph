public:: true

# Expert Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221",
  "@type": "Page",
  "vc:slug": "expert-systems",
  "title": "Expert Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-support",
      "vc:label": "Decision Support"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-representation",
      "vc:label": "Knowledge Representation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Expert Systems"
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
  "@id": "urn:ngm:class:expert-systems",
  "@type": "Class",
  "label": "Expert Systems",
  "definition": "Expert Systems are rule-based AI programs that encode domain-specific knowledge in a knowledge base and apply logical inference to emulate the decision-making capability of human experts, enabling decision support, diagnosis, and configuration in specialised domains.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:knowledge-representation",
    "label": "Knowledge Representation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:explanation-facility",
        "label": "Explanation Facility"
      },
      {
        "@id": "urn:ngm:class:knowledge-acquisition-module",
        "label": "Knowledge Acquisition Module"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:domain-knowledge",
        "label": "Domain Knowledge"
      },
      {
        "@id": "urn:ngm:class:production-rules",
        "label": "Production Rules"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      },
      {
        "@id": "urn:ngm:class:automated-diagnosis",
        "label": "Automated Diagnosis"
      },
      {
        "@id": "urn:ngm:class:fault-detection",
        "label": "Fault Detection"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:logic-programming",
        "label": "Logic Programming"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:forward-chaining",
        "label": "Forward Chaining"
      },
      {
        "@id": "urn:ngm:class:backward-chaining",
        "label": "Backward Chaining"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      },
      {
        "@id": "urn:ngm:class:semantic-network",
        "label": "Semantic Network"
      },
      {
        "@id": "urn:ngm:class:fuzzy-logic",
        "label": "Fuzzy Logic"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:clinical-decision-support",
        "label": "Clinical Decision Support"
      },
      {
        "@id": "urn:ngm:class:configuration-management",
        "label": "Configuration Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:knowledge-based-systems",
      "label": "Knowledge-Based Systems"
    },
    {
      "@id": "urn:ngm:class:rule-based-systems",
      "label": "Rule-Based Systems"
    }
  ],
  "quality": 0.65,
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
  "@id": "urn:visionflow:annotation:link-resolutions:expert-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff7b82b996e8a5301231668161ede8fe9997d5f32ce58c77bc8e98dc6769c221"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decision Support]]",
      "resolved": "urn:visionflow:linked:decision-support",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:owl:class:knowledge-representation",
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
  - Expert Systems is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ExpertSystems
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Knowledge Representation]]
  - enables:: [[Decision Support]]
  - bridges-to:: [[Autonomous Robot]], [[Blockchain]]

- ### Content

  ### Definition
  Expert systems are computer programs that emulate the decision-making ability of human experts in specific domains. They consist of a knowledge base containing domain-specific information and an inference engine that applies logical rules to derive conclusions, make recommendations, or solve complex problems within their specialized area of expertise.

  ### Architecture Components
  - Knowledge base (facts and rules)
  - Inference engine (reasoning mechanism)
  - User interface
  - Explanation facility
  - Knowledge acquisition module

  ### Historical Significance
  - MYCIN (medical diagnosis)
  - DENDRAL (chemical analysis)
  - XCON (computer configuration)
  - Peak popularity in 1980s-1990s

  ### Modern Applications
  - Medical diagnosis support
  - Financial planning
  - Quality control
  - Fault diagnosis
  - Configuration systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
