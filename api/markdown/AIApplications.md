schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#AIApplications
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:aiapplications
public:: true

# AIApplications
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:befd85f49a23293fe9ce611589bd86294d7a371992519deafd1eff776a52fb13",
  "@type": "Page",
  "vc:slug": "aiapplications",
  "title": "AIApplications",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-capability",
      "vc:label": "AI Capability"
    },
    {
      "@id": "urn:visionflow:linked:application-domain",
      "vc:label": "Application Domain"
    },
    {
      "@id": "urn:visionflow:linked:industry-vertical",
      "vc:label": "Industry Vertical"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6b618d80a51c"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#AIApplications"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7006"
    },
    {
      "vc:key": "maturity",
      "vc:value": "stable"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AIApplications"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:aiapplications"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:aiapplications"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:befd85f49a23293fe9ce611589bd86294d7a371992519deafd1eff776a52fb13@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:aiapplications",
  "@type": "Class",
  "label": "AIApplications",
  "definition": "A domain classification encompassing the practical deployment and use cases of artificial intelligence systems across industries, including autonomous systems, decision support, content generation, predictive analytics, and intelligent automation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:ai-capability",
        "label": "AI Capability"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:aiapplications:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:befd85f49a23293fe9ce611589bd86294d7a371992519deafd1eff776a52fb13"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Capability]]",
      "resolved": "urn:visionflow:linked:ai-capability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Domain]]",
      "resolved": "urn:visionflow:linked:application-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Industry Vertical]]",
      "resolved": "urn:visionflow:linked:industry-vertical",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:befd85f49a23293fe9ce611589bd86294d7a371992519deafd1eff776a52fb13@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A domain classification encompassing the practical deployment and use cases of artificial intelligence systems across industries, including autonomous systems, decision support, content generation, predictive analytics, and intelligent automation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiApplications
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[ArtificialIntelligenceDomain]]
  - implements:: [[AI Capability]]
  - bridges-to:: [[Industry Vertical]]

- ### Content

  - #### Member Concepts (Inferred by Reasoner)
		    - Autonomous Vehicle is-member-of AIApplications
		    - Medical Diagnosis AI is-member-of AIApplications
		    - Recommendation System is-member-of AIApplications
		    - Generative AI Tool is-member-of AIApplications
		    - Predictive Maintenance is-member-of AIApplications
		    - Conversational AI is-member-of AIApplications
		- implements:: [[AI Capability]]
		- serves:: [[Application Domain]]
		- bridges-to:: [[Industry Vertical]]

  ## Definition

  The **AIApplications** domain classifies AI concepts according to their practical deployment context and use-case orientation. Unlike theoretical AI research, this domain focuses on implemented systems delivering value in specific operational contexts.

  ## Application Categories

  ### Autonomous Systems
  - Self-driving vehicles
  - Robotic process automation
  - Autonomous drones
  - Industrial robotics

  ### Decision Support
  - Medical diagnosis assistance
  - Financial risk assessment
  - Legal document analysis
  - Strategic planning tools

  ### Content Generation
  - Text generation (LLMs)
  - Image synthesis
  - Video production
  - Music composition

  ### Predictive Analytics
  - Demand forecasting
  - Predictive maintenance
  - Customer churn prediction
  - Fraud detection

  ### Intelligent Automation
  - Document processing
  - Customer service chatbots
  - Workflow orchestration
  - Quality control

  ## Cross-Domain Integration

  AIApplications frequently bridge to:
  - **Healthcare**: Medical imaging, drug discovery
  - **Finance**: Algorithmic trading, credit scoring
  - **Manufacturing**: Quality inspection, supply chain optimisation
  - **Retail**: Personalisation, inventory management
  - **Transportation**: Route optimisation, fleet management

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
