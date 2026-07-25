public:: true

# Automated Decision Making
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:automated-decision-making", "@type":"Page", "title":"Automated Decision Making", "vc:slug":"automated-decision-making", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automated-decision-making",
  "@type": "Class",
  "label": "Automated Decision Making",
  "definition": "Automated decision making is the use of algorithms or machine learning models to reach decisions about individuals or situations without meaningful human involvement. It ranges from rule-based scoring to predictions from trained models, applied to outcomes such as eligibility, pricing or risk classification. Because such decisions can significantly affect people, data protection frameworks like the GDPR grant rights around solely automated decisions, including a right to obtain human intervention and an explanation. Responsible deployment depends on fairness, transparency and accountability safeguards.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:decision-making",
      "label": "Decision Making"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model",
        "label": "Model"
      },
      {
        "@id": "urn:ngm:class:predictive-analytics",
        "label": "Predictive Analytics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:model",
        "label": "Model"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human in the Loop"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:human-in-the-loop",
        "label": "Human in the Loop"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:algorithmic-fairness",
        "label": "Algorithmic Fairness"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
- Automated decision making uses algorithms and [[Machine Learning]] models to reach decisions about individuals without meaningful human involvement. It draws on [[Predictive Analytics]] and a [[Model]], and is governed by [[Transparency]], [[Accountability]] and [[Algorithmic Fairness]] safeguards.
- ### Overview
- Automated decisions span simple rule engines to complex model-driven predictions applied to consequential outcomes.
- When decisions are made solely by automation and have legal or similarly significant effects, data protection regimes attach specific individual rights.
- The central tension is between efficiency at scale and the need for [[Fairness]], contestability and human oversight.
- ### Key aspects
- Solely automated versus human-assisted decisions, a distinction that determines applicable obligations.
- Right to explanation and to obtain [[Human in the Loop]] intervention for affected individuals.
- Risk of encoding [[Bias]] from training data into systematic, repeated decisions.
- ### Mechanisms
- A trained [[Model]] or scoring rule maps inputs to a decision or risk classification.
- [[Risk Assessment]] and impact analysis evaluate harms before deployment.
- [[Explainable AI]] techniques produce justifications for individual outcomes.
- Oversight and audit trails support [[Accountability]] and contestability.
- ### Applications
- Credit, insurance and eligibility scoring.
- Fraud and risk classification.
- Content moderation and prioritisation at scale.
- Triage and recommendation in operational workflows.
- ### Relationships
- enables:: [[Predictive Analytics]]
- bridgesTo:: [[Governance]]
- dependsOn:: [[Model]]
- dependsOn:: [[Predictive Analytics]]
- requires:: [[Transparency]]
- uses:: [[Risk Assessment]]
- supports:: [[Human in the Loop]]
- contrastsWith:: [[Human in the Loop]]
- implements:: [[Algorithmic Fairness]]
- relatedTo:: [[Explainable AI]]
- relatedTo:: [[Accountability]]
- relatedTo:: [[Bias]]
- relatedTo:: [[Fairness]]
- ### Provenance
- updated:: 2026-06-15
