public:: true

# Model Cards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9b249e8d5fb2a9eb2bc58ca1ab6803cf9663a32b6911a843412b4b8d1f398703",
  "@type": "Page",
  "vc:slug": "model-cards",
  "title": "Model Cards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    },
    {
      "@id": "urn:visionflow:linked:responsible-ai",
      "vc:label": "Responsible AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Cards"
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
  "@id": "urn:ngm:class:model-cards",
  "@type": "Class",
  "label": "Model Cards",
  "definition": "Model Cards are short structured documents that accompany a trained machine learning model, reporting its intended uses, out-of-scope uses, training and evaluation data characteristics, disaggregated performance metrics across demographic groups, known limitations, and ethical considerations. Introduced by Mitchell et al. (2019) at Google, they standardise transparency disclosures so that developers, deployers, and affected communities can judge whether a model is appropriate for a given context. Model Cards serve as a communication artefact bridging technical model documentation to governance, fairness auditing, and regulatory compliance workflows.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:responsible-ai",
      "label": "Responsible AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Disaggregated Evaluation"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Model Metadata"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:algorithmic-auditing",
        "label": "Algorithmic Auditing"
      },
      {
        "@id": "urn:ngm:class:informed-consent",
        "label": "Informed Consent"
      },
      {
        "@id": "urn:ngm:class:ai-risk-assessment",
        "label": "AI Risk Assessment"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:performance-metrics",
        "label": "Performance Metrics"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Bias and Fairness Analysis"
      },
      {
        "@id": "urn:ngm:class:training-data-documentation",
        "label": "Training Data Documentation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-documentation-standards",
        "label": "AI Documentation"
      },
      {
        "@id": "urn:ngm:class:model-governance",
        "label": "Model Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:datasheets-for-datasets",
        "label": "Datasheets for Datasets"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fairness-in-machine-learning",
        "label": "Fairness in Machine Learning"
      },
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:model-documentation-cards",
      "label": "Model Documentation Cards"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-cards:589d485a740e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9b249e8d5fb2a9eb2bc58ca1ab6803cf9663a32b6911a843412b4b8d1f398703"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Responsible AI]]",
      "resolved": "urn:visionflow:linked:responsible-ai",
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
  - Model Cards are short, structured disclosure documents that accompany a trained [[Machine Learning]] model, systematically reporting its intended uses, out-of-scope uses, training and evaluation data characteristics, disaggregated [[Performance Metrics]] across demographic and contextual subgroups, known limitations, and ethical considerations. Introduced by Mitchell et al. (2019), they operate at the intersection of [[Responsible AI]], [[Transparency]], and [[AI Governance]], providing a standardised communication artefact for developers, deployers, regulators, and affected communities. Model Cards complement [[Datasheets for Datasets]] (which document training data) and [[System Cards]] (which document multi-model pipelines), together forming the broader landscape of [[AI Documentation]].

- ### Overview
  - Model Cards were conceived in response to the widespread deployment of machine learning models without adequate transparency about their provenance, capabilities, or failure modes.
  - The core insight is that a model is not self-documenting: its intended behaviour, performance envelope, and appropriate use are not derivable from its weights or architecture alone. A Model Card externalises this tacit knowledge in a human-readable, structured format.
  - **Why they matter**
    - Enable [[Algorithmic Auditing]] by third parties without requiring access to proprietary model weights.
    - Support [[Informed Consent]] workflows when models are deployed in high-stakes settings such as healthcare, credit, or criminal justice.
    - Provide the artefact needed for [[AI Risk Assessment]] under emerging regulatory frameworks including the EU AI Act.
    - Facilitate reproducibility and comparison across models by standardising what is reported and how.
  - **Scope and adoption**
    - Originally published as a research paper with accompanying template, Model Cards have been adopted by major model hubs including Hugging Face, TensorFlow Hub, and Google Model Garden.
    - Open-source tooling (e.g. the `model-card-toolkit` library) automates partial card generation from training runs.
    - Regulatory pressure — especially from the EU AI Act and NIST AI Risk Management Framework — has elevated Model Cards from best practice to de facto compliance artefact.

- ### Key Components
  - **Model Details**
    - Model name, version, type (e.g. classification, generation), and development organisation.
    - Links to paper, repository, and licence.
    - Contact information for questions or concerns.
  - **Intended Use**
    - Primary intended uses: the specific tasks and deployment contexts for which the model was developed and validated.
    - Out-of-scope uses: explicit list of applications the model is not designed for and should not be used for.
    - Users in scope: the expected operator and end-user populations.
  - **Factors**
    - Relevant factors affecting model behaviour: demographic groups (age, gender, ethnicity), environmental conditions, instrument or platform variation.
    - Evaluation factors: the specific subgroups on which [[Disaggregated Evaluation]] was performed.
  - **Metrics**
    - Chosen [[Performance Metrics]] (e.g. accuracy, F1, AUC-ROC, calibration error) and why they were selected.
    - Decision thresholds used and their rationale.
    - Approaches to uncertainty quantification.
  - **Evaluation Data**
    - Description of the evaluation dataset(s), including source, preprocessing, and representativeness.
    - Links to [[Datasheets for Datasets]] where available.
    - Known distribution shifts between training and evaluation data.
  - **Training Data**
    - High-level description of training data provenance; detailed documentation deferred to [[Training Data Documentation]] or [[Datasheets for Datasets]].
    - Data collection period and known biases in collection.
  - **Quantitative Analyses**
    - Unitary results: overall performance across the whole evaluation set.
    - Intersectional results: disaggregated performance broken down by the factors identified above, surfacing [[Bias and Fairness Analysis]] findings.
  - **Ethical Considerations**
    - Sensitive data used; potential for harm from misuse or failure.
    - Mitigations implemented and residual risks.
    - Connection to organisational responsible AI principles.
  - **Caveats and Recommendations**
    - Known limitations not yet mitigated.
    - Recommended safeguards for deployment.
    - Guidance on when human review should override model output.

- ### Mechanisms
  - **Structured Template**
    - Model Cards follow a canonical section structure, though the specific fields vary across implementations (Google's original, Hugging Face's extended format, NIST's AI RMF alignment template).
    - Machine-readable variants use JSON or YAML structured data embedded in or alongside the human-readable document, enabling [[Model Registry]] integration and automated compliance checks.
  - **Disaggregated Evaluation**
    - The distinctive technical contribution of Model Cards is the requirement for [[Disaggregated Evaluation]]: reporting performance broken down by subgroup rather than only reporting aggregate metrics.
    - This makes differential performance (e.g. lower accuracy for minority demographic groups) visible and auditable, directly supporting [[Fairness in Machine Learning]] goals.
  - **Versioning**
    - Cards should be updated with each model version; version-controlled alongside model weights in a [[Model Registry]] or model repository.
    - Semantic versioning of the card format itself allows tooling to parse and compare cards programmatically.
  - **Integration with MLOps**
    - In mature [[MLOps]] pipelines, card generation is partly automated: metrics sections are populated from evaluation run artefacts, and manual sections (ethics, intended use) are filled by human authors.
    - The `model-card-toolkit` (Google, open source) demonstrates this pattern, consuming TensorFlow Model Analysis outputs and rendering cards in HTML or JSON.

- ### Applications and Use Cases
  - **Regulatory Compliance**
    - Under the EU AI Act, high-risk AI systems require technical documentation that substantially overlaps with Model Card content. Model Cards provide a head-start on compliance artefacts.
    - The NIST AI Risk Management Framework (AI RMF 1.0) references model documentation as a key governance practice.
  - **Model Hubs and Repositories**
    - Hugging Face's model hub displays Model Cards as the primary landing page for each model, making them the de facto public face of open-source model releases.
    - Cards on model hubs enable community [[Algorithmic Auditing]] by allowing third parties to identify and report gaps between claimed and observed performance.
  - **Enterprise AI Governance**
    - Organisations deploying models internally use Model Cards as the unit of record in [[Model Governance]] workflows: procurement, internal review boards, and post-deployment monitoring.
    - Integration with [[AI Risk Assessment]] processes allows risk ratings to be anchored to documented limitations.
  - **Research and Reproducibility**
    - Published alongside research papers, Model Cards improve reproducibility by documenting evaluation conditions that may not appear in the paper itself.
    - They allow downstream researchers to assess whether a pre-trained model is appropriate for transfer learning to a new domain.
  - **Procurement and Vendor Assessment**
    - Buyers of AI systems can request Model Cards as part of procurement due diligence, using them to assess fitness for purpose and to identify red-flag limitations before deployment.
  - **Public Communication**
    - Simplified versions of Model Cards (sometimes called "user-facing cards") communicate model capabilities and limitations to non-technical stakeholders and affected communities, supporting [[Informed Consent]] and public trust.

- ### Relationships
  - subClassOf:: [[Responsible AI]]
  - requires:: [[Transparency]]
  - requires:: [[Disaggregated Evaluation]]
  - requires:: [[Model Metadata]]
  - enables:: [[Accountability]]
  - enables:: [[Algorithmic Auditing]]
  - enables:: [[Informed Consent]]
  - enables:: [[AI Risk Assessment]]
  - hasPart:: [[Intended Use Statement]]
  - hasPart:: [[Performance Metrics]]
  - hasPart:: [[Bias and Fairness Analysis]]
  - hasPart:: [[Training Data Documentation]]
  - partOf:: [[AI Documentation]]
  - partOf:: [[Model Governance]]
  - contrastsWith:: [[Datasheets for Datasets]]
  - contrastsWith:: [[System Cards]]
  - relatedTo:: [[Fairness in Machine Learning]]
  - relatedTo:: [[Explainability]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Model Registry]]
  - bridges-to:: [[AI Governance]]
  - bridges-to:: [[Regulatory Compliance]]

- ### Standards and Context
  - **Foundational Reference**
    - Mitchell, M. et al. (2019). "Model Cards for Model Reporting." In Proceedings of FAccT 2019. The original paper establishing the concept and template.
  - **NIST AI RMF**
    - The NIST AI Risk Management Framework (AI RMF 1.0, 2023) treats model documentation — including Model Card-style artefacts — as a core practice under the GOVERN and MEASURE functions.
  - **EU AI Act**
    - Technical documentation requirements for high-risk AI systems in the EU AI Act (Annex IV) align closely with Model Card sections. Cards do not satisfy the full legal requirement but are a strong foundation.
  - **ISO/IEC 42001**
    - The ISO/IEC 42001:2023 AI Management System standard references transparency and documentation practices that Model Cards embody.
  - **Hugging Face Card Format**
    - Hugging Face extended the original template with structured YAML front-matter (`model-index` metadata), enabling programmatic indexing and filtering of model capabilities across the hub.
  - **Google Model Card Toolkit**
    - Open-source Python library (`model-card-toolkit`) for generating Model Cards from TensorFlow Model Analysis evaluation artefacts, demonstrating automated card generation in [[MLOps]] pipelines.
  - **Related Artefacts**
    - [[Datasheets for Datasets]] (Gebru et al., 2018): analogous documentation for training datasets.
    - [[System Cards]] (Meta AI, 2022): extension of the concept to multi-model AI systems.
    - [[FactSheets]] (IBM, 2018): an independently developed parallel concept with similar goals.

- ### Provenance
  - sources:: Mitchell et al. (2019) FAccT paper; NIST AI RMF 1.0 (2023); EU AI Act Annex IV; Hugging Face model card documentation; Google Model Card Toolkit README
  - updated:: 2026-06-13
