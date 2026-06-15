public:: true

# Ethics
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ethics",
  "@type": "Page",
  "title": "Ethics",
  "vc:slug": "ethics",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ethics",
  "@type": "Class",
  "label": "Ethics",
  "definition": "Ethics is the systematic study of what is right, good and obligatory, and of the principles that should guide conduct. In the context of artificial intelligence it concerns how systems should be designed, deployed and governed so that their effects on people and society are beneficial, fair and accountable. AI ethics draws on long-standing moral philosophy while addressing new questions raised by autonomous and data-driven systems.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-safety",
      "label": "AI Safety"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:value-alignment",
        "label": "Value Alignment"
      },
      {
        "@id": "urn:ngm:class:existential-risk",
        "label": "Existential Risk"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Ethics]] grounds [[Responsible AI]] and [[AI Safety]], bridging to [[Governance]] and enabling [[Accountability]], [[Transparency]] and [[Fairness]].
- ### Overview
  - Ethics provides the normative frameworks - such as consequentialism, deontology and virtue ethics - used to reason about right action.
  - Applied to AI, it asks how systems should treat people, distribute benefits and harms, and remain answerable for their effects.
  - It informs both technical choices and the governance structures that surround AI systems.
- ### Key aspects
  - Normative principles: beneficence, non-maleficence, autonomy and justice.
  - Fairness and non-discrimination in automated decisions.
  - Transparency and explainability of system behaviour.
  - Accountability and redress when systems cause harm.
- ### Applications
  - Ethical review and impact assessment of AI deployments.
  - Designing fairness and bias mitigation into models.
  - Shaping regulation and professional codes of conduct.
  - Guiding alignment between AI behaviour and human values.
- ### Relationships
  - partOf:: [[AI Safety]]
  - partOf:: [[Responsible AI]]
  - bridgesTo:: [[Governance]]
  - bridgesTo:: [[Responsible AI]]
  - bridgesTo:: [[AI Alignment]]
  - enables:: [[Accountability]]
  - enables:: [[Transparency]]
  - enables:: [[Fairness]]
  - supports:: [[Value Alignment]]
  - supports:: [[Responsible AI]]
  - requires:: [[Transparency]]
  - requires:: [[Accountability]]
  - dependsOn:: [[Governance]]
  - relatedTo:: [[Fairness]]
  - relatedTo:: [[AI Alignment]]
  - relatedTo:: [[Value Alignment]]
  - relatedTo:: [[Existential Risk]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
