```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b14b509ceaa50762e593e0e675aa0e64db7261bb3b76d0be98709a561a40c60c",
  "@type": "Page",
  "vc:slug": "ai-fairness",
  "title": "AI Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:equitable-ai-systems",
      "vc:label": "Equitable AI Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-ethics",
      "vc:label": "AI Ethics"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7014"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Fairness"
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
  "@id": "urn:ngm:class:ai-fairness",
  "@type": "Class",
  "label": "AI Fairness",
  "definition": "AI Fairness refers to the principle and practice of ensuring artificial intelligence systems produce equitable outcomes without bias or discrimination based on protected characteristics such as race, gender, age, or socioeconomic status.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:ai-ethics",
      "label": "AI Ethics"
    }
  ],
  "relations": {},
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

- ### Definition
  - AI Fairness refers to the principle and practice of ensuring artificial intelligence systems produce equitable outcomes without bias or discrimination based on protected characteristics such as race, gender, age, or socioeconomic status. It encompasses methodologies for detecting, measuring, and mitigating algorithmic bias throughout the AI development lifecycle to prevent disproportionate harm to specific demographic groups.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiFairness
  - owl-role:: Principle
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[AI Ethics]]
  - enables:: [[Equitable AI Systems]]
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content

  - #### Key Components
		- **Bias Detection**: Statistical methods to identify disparities in AI model outputs across demographic groups
		- **Fairness Metrics**: Quantitative measures including demographic parity, equalized odds, and calibration metrics
		- **Bias Mitigation**: Techniques applied pre-processing, in-processing, or post-processing to reduce discrimination
		- **Fairness Auditing**: Regular assessment of AI systems for discriminatory patterns and outcomes
		- **Intersectional Analysis**: Examining fairness across multiple overlapping protected characteristics
  - #### Fairness Definitions
		- **Demographic Parity**: Equal outcome rates across demographic groups
		- **Equalized Odds**: Equal false positive and false negative rates across groups
		- **Calibration**: Predicted probabilities reflect true outcomes equally across groups
		- **Individual Fairness**: Similar individuals receive similar predictions
		- **Counterfactual Fairness**: Outcomes unchanged if protected attributes were different
  - #### Key Tools (2025)
		- **AI Fairness 360 (AIF360)**: IBM's toolkit with 70+ fairness metrics and 10+ bias mitigation algorithms
		- **Fairlearn**: Microsoft's library for assessing and improving model fairness
		- **TensorFlow Responsible AI**: Google's integrated fairness and interpretability tools
		- **What-If Tool**: Google's interactive fairness analysis interface
		- **Aequitas**: Open-source bias and fairness audit toolkit
  - #### Applications
		- Fair hiring and recruitment systems
		- Equitable credit scoring and lending decisions
		- Unbiased healthcare risk assessment
		- Fair criminal justice risk prediction
		- Inclusive content moderation and recommendation
		- Accessible AI assistants and services

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
