public:: true

# Algorithmic Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:algorithmic-fairness",
  "@type": "Page",
  "title": "Algorithmic Fairness",
  "vc:slug": "algorithmic-fairness",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:algorithmic-fairness",
  "@type": "Class",
  "label": "Algorithmic Fairness",
  "definition": "Algorithmic fairness is the study and engineering of machine-learning systems so that their predictions and decisions do not produce unjustified disparities across individuals or protected groups. It formalises fairness through competing mathematical criteria such as demographic parity, equalised odds and individual fairness, which cannot in general be satisfied simultaneously. The field combines measurement, bias mitigation techniques and governance to align automated decisions with ethical and legal norms.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
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
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      },
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:labelled-dataset",
        "label": "Labelled Dataset"
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
  - [[Algorithmic Fairness]] is the discipline of ensuring that [[Machine Learning]] systems avoid unjustified disparities across groups and individuals.
  - It operationalises the broader notion of [[Fairness]] into measurable criteria evaluated during [[Model Evaluation]].
  - It directly contrasts with [[Bias]] in data, models and deployment, and supports [[Responsible AI]].
- ### Overview
  - As models drive consequential decisions in lending, hiring and justice, fairness moved from a philosophical concern to an engineering requirement.
  - Researchers formalised multiple, often incompatible, fairness definitions, exposing genuine trade-offs rather than a single correct metric.
  - Fairness is contextual: the appropriate criterion depends on the decision, the harms at stake and the legal framework.
  - It is inseparable from [[Accountability]], [[Transparency]] and [[Explainability]] within [[AI Governance and Ethics]].
- ### Key aspects
  - Group fairness criteria equalise statistical measures across protected groups.
  - Individual fairness requires similar individuals to receive similar outcomes.
  - Pre-processing, in-processing and post-processing methods mitigate measured bias.
  - Impossibility results show that several fairness criteria conflict whenever base rates differ.
  - Fairness auditing tests deployed systems against chosen metrics over time.
- ### Applications
  - Credit scoring and lending decisions subject to anti-discrimination law.
  - Hiring, admissions and recommendation systems affecting opportunity.
  - Risk-assessment tools in criminal justice and welfare.
  - Content ranking and ad delivery where disparate exposure raises concern.
- ### Relationships
  - partOf:: [[AI Governance and Ethics]]
  - partOf:: [[AI Ethics]]
  - enables:: [[Accountability]]
  - enables:: [[Transparency]]
  - requires:: [[Model Evaluation]]
  - supports:: [[Explainability]]
  - supports:: [[Responsible AI]]
  - contrastsWith:: [[Bias]]
  - uses:: [[Machine Learning]]
  - uses:: [[Classification]]
  - relatedTo:: [[Fairness]]
  - relatedTo:: [[AI Governance]]
  - dependsOn:: [[Labelled Dataset]]
- ### Provenance
  - updated:: 2026-06-15
