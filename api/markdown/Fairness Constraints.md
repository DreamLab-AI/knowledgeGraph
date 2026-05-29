public:: true

# Fairness Constraints
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4c44e64c482c158e3c33e90fb395229049753f0feffddd28956a93891274149b",
  "@type": "Page",
  "vc:slug": "fairness-constraints",
  "title": "Fairness Constraints",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:barocas-et-al-2019",
      "vc:label": "Barocas et al. (2019)"
    },
    {
      "@id": "urn:visionflow:linked:chouldechova-2017",
      "vc:label": "Chouldechova (2017)"
    },
    {
      "@id": "urn:visionflow:linked:hardt-et-al-2016",
      "vc:label": "Hardt et al. (2016)"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0382"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Constraints"
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
  "@id": "urn:ngm:class:fairness-constraints",
  "@type": "Class",
  "label": "Fairness Constraints",
  "definition": "Fairness Constraints are mathematical formalizations of equitable treatment requirements in AI systems, expressed as conditions that model predictions must satisfy with respect to protected attributes such as race, gender, or age. The three canonical constraint families are Independence (demographic parity: predictions are statistically independent of protected attributes), Separation (equalized odds: predictions are independent of protected attributes conditional on the true label), and Sufficiency (calibration: true labels are independent of protected attributes conditional on predictions). These constraints are incorporated into model training as regularisation penalties or constrained optimisation objectives, and are subject to fundamental incompatibility theorems when base rates differ across protected groups.",
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
    "requires": [
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:ai-ethics-checklist", "label": "AI Ethics Checklist"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:fairness-accuracy-tradeoffs", "label": "Fairness Accuracy Tradeoffs"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"},
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:fairness-auditing-tools", "label": "Fairness Auditing Tools"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:fairness-oecd", "label": "Fairness (OECD)"},
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:accountability", "label": "Accountability"},
      {"@id": "urn:ngm:class:transparency", "label": "Transparency"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:model-performance", "label": "Model Performance"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-constraints:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4c44e64c482c158e3c33e90fb395229049753f0feffddd28956a93891274149b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Barocas et al. (2019)]]",
      "resolved": "urn:visionflow:linked:barocas-et-al-2019",
      "kind": "StubLink"
    },
    {
      "raw": "[[Chouldechova (2017)]]",
      "resolved": "urn:visionflow:linked:chouldechova-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardt et al. (2016)]]",
      "resolved": "urn:visionflow:linked:hardt-et-al-2016",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
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
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
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
  - Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessConstraints
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Model Training]], [[Bias]]
  - enables:: [[Responsible AI]], [[AI Ethics Checklist]]
  - hasPart:: [[Fairness Metrics]], [[Fairness Accuracy Tradeoffs]]
  - relatedTo:: [[Fairness]], [[Bias Detection Methods]], [[Bias Mitigation Techniques]], [[Fairness Auditing Tools]], [[Explainability]]
  - uses:: [[Fairness (OECD)]], [[Gradient Descent]]
  - supports:: [[Accountability]], [[Transparency]]
  - contrastsWith:: [[Model Performance]]

- ### Content
  Fairness constraints operationalise the intuitive social value of equitable treatment into computable mathematical objects that can be incorporated into machine learning training and evaluation pipelines. The foundational taxonomy, formalised in Hardt et al. (2016) and surveyed extensively in Barocas et al. (2019), distinguishes three mutually exclusive constraint families: Independence, Separation, and Sufficiency — each encoding a different moral intuition about what fairness between groups requires.

  The Independence criterion (demographic parity) demands that a model's predictions be statistically uncorrelated with protected group membership. A hiring algorithm satisfying demographic parity would accept the same proportion of applicants from each demographic group. This is intuitive as a baseline equality measure but can require predicting outcomes that contradict ground-truth base rate differences, potentially undermining predictive accuracy. The Separation criterion (equalized odds) conditions on the true label: it requires that true positive rates and false positive rates be equal across groups. This is appropriate when the ground truth labels are considered reliable and unbiased — a condition rarely fully satisfied in practice. The Sufficiency criterion (calibration across groups) requires that a model's predicted probabilities be equally well-calibrated for all groups, so that a prediction of 70% risk means the same actual risk regardless of group membership.

  The Chouldechova (2017) impossibility theorem proves mathematically that when base rates differ between groups, it is impossible for a predictor to simultaneously satisfy separation and sufficiency unless it has zero error. This has profound practical implications: regulators and practitioners must choose which fairness criterion to prioritise based on domain context and stakeholder values, accepting that other criteria will be violated.

  Implementation of fairness constraints in model training typically uses constrained optimisation with Lagrange multipliers, adversarial debiasing (training an auxiliary adversary to prevent a model from encoding protected attribute information), or post-processing threshold adjustments (calibrating decision thresholds separately per group after training). Each approach carries accuracy costs and requires empirical validation using dedicated fairness auditing tools to verify that constraints are met not just in aggregate but across intersectional subgroups.

- ### Provenance
  - sources:: [[Hardt et al. (2016)]], [[Barocas et al. (2019)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z
