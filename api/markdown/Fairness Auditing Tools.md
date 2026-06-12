public:: true

# Fairness Auditing Tools
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5bb1c15cff7fd2aa723c7d5ec4269650623068fb578d854a20c70e36e975f715",
  "@type": "Page",
  "vc:slug": "fairness-auditing-tools",
  "title": "Fairness Auditing Tools",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:aif360",
      "vc:label": "AIF360"
    },
    {
      "@id": "urn:visionflow:linked:fairlearn",
      "vc:label": "Fairlearn"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p7003-2021",
      "vc:label": "IEEE P7003-2021"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-tr-24027",
      "vc:label": "ISO/IEC TR 24027"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
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
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0386"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Auditing Tools"
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
  "@id": "urn:ngm:class:fairness-auditing-tools",
  "@type": "Class",
  "label": "Fairness Auditing Tools",
  "definition": "Fairness Auditing Tools are software libraries, platforms, and frameworks designed to detect, measure, and mitigate algorithmic bias in AI systems through automated analysis, visualisation, and intervention capabilities. They operationalise fairness metrics—such as demographic parity, equalised odds, and predictive parity—across protected attribute groups, supporting both pre-deployment model assessments and continuous production monitoring.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"},
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"},
      {"@id": "urn:ngm:class:machine-learning-discipline-model", "label": "Machine Learning Model"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fairness-constraints", "label": "Fairness Constraints"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-auditing-tools:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5bb1c15cff7fd2aa723c7d5ec4269650623068fb578d854a20c70e36e975f715"
  },
  "vc:resolutions": [
    {
      "raw": "[[AIF360]]",
      "resolved": "urn:visionflow:linked:aif360",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fairlearn]]",
      "resolved": "urn:visionflow:linked:fairlearn",
      "kind": "StubLink"
    },
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
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
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
  - Fairness Auditing Tools are software libraries, platforms, and frameworks designed to detect, measure, and mitigate algorithmic bias in AI systems through automated analysis, visualization, and intervention capabilities. Leading open-source tools include Fairlearn (Microsoft, MIT license) providing fairness metrics and mitigation algorithms for Python with scikit-learn integration, AIF360 (IBM, Apache-2.0 license) offering comprehensive bias detection and mitigation across the ML pipeline with 70+ fairness metrics, What-If Tool (Google, Apache-2.0) providing interactive visual interfaces for TensorFlow model exploration and counterfactual analysis, Aequitas (University of Chicago, MIT license) focusing on fairness auditing for criminal justice and policy applications, and FairTest (Columbia University, MIT license) enabling statistical fairness testing with association discovery. These tools implement fairness metrics including demographic parity, equalized odds, and predictive parity, provide visualizations such as fairness dashboards, confusion matrices disaggregated by group, and disparity charts, and support mitigation techniques including reweighting, threshold optimization, and adversarial debiasing. Adoption best practices include multi-tool validation to cross-verify findings, integration into CI/CD pipelines for continuous fairness monitoring, documentation of fairness decisions and tradeoffs, and stakeholder engagement in selecting appropriate fairness metrics. These tools operationalize fairness requirements from standards including IEEE P7003-2021, ISO/IEC TR 24027:2021, and the EU AI Act Article 10 on data governance and bias mitigation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessAuditingTools
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - hasPart:: [[Fairness Metrics]], [[Bias Detection Methods]], [[Bias Mitigation Techniques]]
  - requires:: [[Algorithmic Bias]], [[Machine Learning Model]], [[Training Data]]
  - enables:: [[Responsible AI]], [[Explainability]], [[AI Governance]]
  - supports:: [[AI Risk Management]], [[AI Ethics]]
  - relatedTo:: [[Fairness Constraints]], [[Data Governance]], [[AI Governance Framework]]

- ### Content
  Fairness auditing tools address a structural gap between the statistical optimisation objectives used during model training and the equity outcomes required by law, ethics, and organisational policy. A model that minimises average prediction error may systematically underperform for minority demographic groups if those groups are underrepresented in training data or if historical outcomes the model is trained to predict already embed past discrimination. Fairness auditing tools make these disparities visible and quantifiable, enabling practitioners to act before deployment and to monitor continuously in production.

- ### Provenance
  - sources:: [[Fairlearn]], [[AIF360]], [[IEEE P7003-2021]], [[ISO/IEC TR 24027]]
  - migration-date:: 2026-04-26T00:00:00Z
