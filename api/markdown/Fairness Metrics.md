public:: true

# Fairness Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc",
  "@type": "Page",
  "vc:slug": "fairness-metrics",
  "title": "Fairness Metrics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-p7003-2021",
      "vc:label": "IEEE P7003-2021"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-tr-24027",
      "vc:label": "ISO/IEC TR 24027"
    },
    {
      "@id": "urn:visionflow:linked:nist-sp-1270",
      "vc:label": "NIST SP 1270"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0377"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Metrics"
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
  "@id": "urn:ngm:class:fairness-metrics",
  "@type": "Class",
  "label": "Fairness Metrics",
  "definition": "Quantitative measures and mathematical frameworks used to evaluate whether an AI system produces equitable outcomes across demographic groups. Core metrics include demographic parity, equalized odds, equal opportunity, and predictive parity; selection among them depends on context and regulatory requirements, as metrics can conflict and no single criterion satisfies all fairness definitions simultaneously.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:demographic-parity", "label": "Demographic Parity"},
      {"@id": "urn:ngm:class:equalized-odds", "label": "Equalized Odds"},
      {"@id": "urn:ngm:class:equal-opportunity", "label": "Equal Opportunity"},
      {"@id": "urn:ngm:class:predictive-parity", "label": "Predictive Parity"},
      {"@id": "urn:ngm:class:individual-fairness", "label": "Individual Fairness"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:confusion-matrix", "label": "Confusion Matrix"},
      {"@id": "urn:ngm:class:protected-attributes", "label": "Protected Attributes"},
      {"@id": "urn:ngm:class:statistical-testing", "label": "Statistical Testing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:ai-audit", "label": "AI Audit"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"},
      {"@id": "urn:ngm:class:disparate-impact", "label": "Disparate Impact"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"},
      {"@id": "urn:ngm:class:machine-learning-model-evaluation", "label": "Machine Learning Model Evaluation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:diversity-non-discrimination-and-fairness", "label": "Diversity, Non-Discrimination, and Fairness"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ieee-p7003-2021", "label": "IEEE P7003-2021"},
      {"@id": "urn:ngm:class:nist-ai-rmf", "label": "NIST AI RMF"},
      {"@id": "urn:ngm:class:iso-iec-tr-24027", "label": "ISO-IEC TR 24027"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"},
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:algorithmic-fairness-measures", "label": "Algorithmic Fairness Measures"},
    {"@id": "urn:ngm:class:equity-metrics", "label": "Equity Metrics"}
  ],
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-metrics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:655ddd6220ef4b1d8cdf5f3b713f29ab9db463aeba8fce27be118a52bf4cc4fc"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE P7003-2021]]",
      "resolved": "urn:visionflow:linked:ieee-p7003-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC TR 24027]]",
      "resolved": "urn:visionflow:linked:iso-iec-tr-24027",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST SP 1270]]",
      "resolved": "urn:visionflow:linked:nist-sp-1270",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
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
  - Fairness Metrics are quantitative measures and mathematical frameworks used to evaluate and ensure equitable treatment across different demographic groups in AI systems. These metrics provide objective, measurable criteria to assess whether an algorithmic system produces disparate impacts, maintains statistical parity, or achieves equalized odds across protected attributes such as race, gender, age, or disability status. Key fairness metrics include demographic parity (equal positive prediction rates across groups), equalized odds (equal true positive and false positive rates), equal opportunity (equal true positive rates), and predictive parity (equal precision across groups). The selection and application of fairness metrics depends on the specific context, stakeholder values, and regulatory requirements, as different metrics can conflict and no single metric satisfies all fairness criteria simultaneously. Implementation requires confusion matrix analysis, statistical testing, and careful consideration of base rate differences between groups, as formalized in IEEE P7003-2021 and NIST SP 1270 guidelines for algorithmic fairness assessment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessMetrics
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Blockchain]] (domain: bc)

- ### Content
  Fairness Metrics — content pending enrichment.

- ### Provenance
  - sources:: [[IEEE P7003-2021]], [[ISO/IEC TR 24027]], [[NIST SP 1270]]
  - migration-date:: 2026-04-26T00:00:00Z
