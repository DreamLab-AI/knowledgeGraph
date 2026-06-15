public:: true

# Bias Detection Methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0314ce4a5d1fd18c4c0c14237fafd591e81864595a3c0ecf8188d5380bc98c7b",
  "@type": "Page",
  "vc:slug": "bias-detection-methods",
  "title": "Bias Detection Methods",
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
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0379"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Bias Detection Methods"
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
  "@id": "urn:ngm:class:bias-detection-methods",
  "@type": "Class",
  "label": "Bias Detection Methods",
  "definition": "Bias Detection Methods are systematic analytical techniques for identifying algorithmic bias in AI systems through statistical hypothesis testing, fairness audits, counterfactual analysis, intersectional evaluation, and causal inference. These methods examine model predictions across protected demographic groups to detect disparate impacts, unequal error rates, and discriminatory patterns, producing bias audit reports that document severity, affected populations, and regulatory compliance status.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-governance-and-ethics",
    "label": "AI Governance and Ethics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:fairness-metrics",
        "label": "Fairness Metrics"
      },
      {
        "@id": "urn:ngm:class:disparate-impact",
        "label": "Disparate Impact"
      },
      {
        "@id": "urn:ngm:class:fairness-auditing-tools",
        "label": "Fairness Auditing Tools"
      },
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:statistical-hypothesis-testing",
        "label": "Statistical Hypothesis Testing"
      },
      {
        "@id": "urn:ngm:class:counterfactual-analysis",
        "label": "Counterfactual Analysis"
      },
      {
        "@id": "urn:ngm:class:intersectional-fairness",
        "label": "Intersectional Analysis"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ground-truth-labels",
        "label": "Ground Truth Labels"
      },
      {
        "@id": "urn:ngm:class:statistical-testing",
        "label": "Statistical Significance Testing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bias-mitigation-techniques",
        "label": "Bias Mitigation"
      },
      {
        "@id": "urn:ngm:class:ai-fairness",
        "label": "AI Fairness Certification"
      },
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Compliance Reporting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:causal-inference",
        "label": "Causal Inference"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Machine Learning Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-fairness",
        "label": "AI Fairness"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:ai-audit",
        "label": "AI Audit"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-p-7003-2021",
        "label": "IEEE P7003-2021"
      },
      {
        "@id": "urn:ngm:class:iso-iec-tr-24027",
        "label": "ISO-IEC TR 24027"
      },
      {
        "@id": "urn:ngm:class:nist-sp-1270",
        "label": "NIST SP 1270"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bias",
        "label": "Bias Amplification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:bias-in-large-language-models",
        "label": "Bias in Large Language Models"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:algorithmic-bias-detection",
      "label": "Algorithmic Bias Detection"
    },
    {
      "@id": "urn:ngm:class:fairness-testing",
      "label": "Fairness Testing"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:bias-detection-methods:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0314ce4a5d1fd18c4c0c14237fafd591e81864595a3c0ecf8188d5380bc98c7b"
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
  - Bias Detection Methods are systematic approaches and analytical techniques for identifying algorithmic bias in AI systems through statistical testing, fairness audits, counterfactual analysis, and causal inference. These methods examine model predictions across protected groups to detect disparate impacts, unequal error rates, or discriminatory patterns that violate fairness principles. Key techniques include statistical hypothesis testing (chi-square tests, t-tests, permutation tests) to evaluate group differences with defined significance thresholds, fairness auditing that systematically evaluates multiple fairness metrics, counterfactual analysis that tests how predictions change under hypothetical attribute modifications, intersectional analysis examining bias at the intersection of multiple protected attributes, and causal analysis to distinguish legitimate predictive pathways from discriminatory ones. These methods produce bias audit reports documenting detected disparities, their severity, affected populations, and compliance with legal standards. Implementation requires access to protected attribute data, ground truth labels for supervised methods, and statistical expertise to interpret confidence levels and significance thresholds, typically set at p < 0.05 for hypothesis testing as specified in ISO/IEC TR 24027:2021 and NIST SP 1270.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BiasDetectionMethods
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - hasPart:: [[Fairness Metrics]]
  - hasPart:: [[Disparate Impact]]
  - hasPart:: [[Fairness Auditing Tools]]
  - hasPart:: [[Algorithmic Bias]]
  - hasPart:: [[Statistical Hypothesis Testing]]
  - hasPart:: [[Counterfactual Analysis]]
  - hasPart:: [[Intersectional Analysis]]
  - requires:: [[Protected Attribute Data]]
  - requires:: [[Ground Truth Labels]]
  - requires:: [[Statistical Significance Testing]]
  - enables:: [[Bias Mitigation]]
  - enables:: [[AI Fairness Certification]]
  - enables:: [[Regulatory Compliance Reporting]]
  - uses:: [[Causal Inference]]
  - uses:: [[Machine Learning Model Evaluation]]
  - uses:: [[Confusion Matrix]]
  - supports:: [[AI Fairness]]
  - supports:: [[Responsible AI]]
  - supports:: [[Explainable AI]]
  - supports:: [[AI Audit]]
  - standardizedBy:: [[IEEE P7003-2021]]
  - standardizedBy:: [[ISO/IEC TR 24027]]
  - standardizedBy:: [[NIST SP 1270]]
  - contrastsWith:: [[Bias Amplification]]
  - bridgesTo:: [[Data Governance]]
  - bridgesTo:: [[Regulatory Compliance]]
  - relatedTo:: [[Algorithmic Accountability]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[Bias in Large Language Models]]

- ### Content
  Bias Detection Methods — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z
