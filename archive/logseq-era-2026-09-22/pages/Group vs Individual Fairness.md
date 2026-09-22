public:: true

# Group vs Individual Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083",
  "@type": "Page",
  "vc:slug": "group-vs-individual-fairness",
  "title": "Group vs Individual Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:barocas-et-al-2019",
      "vc:label": "Barocas et al. (2019)"
    },
    {
      "@id": "urn:visionflow:linked:dwork-et-al-2012",
      "vc:label": "Dwork et al. (2012)"
    },
    {
      "@id": "urn:visionflow:linked:hardt-et-al-2016",
      "vc:label": "Hardt et al. (2016)"
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
      "vc:value": "AI-0383"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Group vs Individual Fairness"
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
  "@id": "urn:ngm:class:group-vs-individual-fairness",
  "@type": "Class",
  "label": "Group vs Individual Fairness",
  "definition": "Group vs Individual Fairness denotes two competing paradigms for defining and enforcing algorithmic fairness: group fairness requires statistical parity of outcomes or error rates across protected demographic cohorts, while individual fairness requires that similar individuals receive similar predictions regardless of group membership. The two paradigms are formally incompatible in general — satisfying demographic parity does not guarantee individual fairness and vice versa — representing a fundamental tension in fair machine learning that practitioners must resolve through context-specific policy choices. This distinction shapes the selection of fairness metrics, audit methodologies, and bias mitigation interventions in AI system design.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
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
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:fairness-constraints", "label": "Fairness Constraints"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:fairness-auditing-tools", "label": "Fairness Auditing Tools"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:fairness-oecd", "label": "Fairness (OECD)"},
      {"@id": "urn:ngm:class:disparate-impact", "label": "Disparate Impact"},
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"},
      {"@id": "urn:ngm:class:digital-technology-access-equity", "label": "Digital Technology Access Equity"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:fairness-accuracy-tradeoffs", "label": "Fairness Accuracy Tradeoffs"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline-model", "label": "Machine Learning Model"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:group-vs-individual-fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083"
  },
  "vc:resolutions": [
    {
      "raw": "[[Barocas et al. (2019)]]",
      "resolved": "urn:visionflow:linked:barocas-et-al-2019",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dwork et al. (2012)]]",
      "resolved": "urn:visionflow:linked:dwork-et-al-2012",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardt et al. (2016)]]",
      "resolved": "urn:visionflow:linked:hardt-et-al-2016",
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
  Group vs Individual Fairness denotes two competing paradigms for defining and enforcing algorithmic fairness: group fairness requires statistical parity of outcomes or error rates across protected demographic cohorts, while individual fairness requires that similar individuals receive similar predictions regardless of group membership. The two paradigms are formally incompatible in general — satisfying demographic parity does not guarantee individual fairness and vice versa — representing a fundamental tension in fair machine learning that practitioners must resolve through context-specific policy choices. This distinction shapes the selection of fairness metrics, audit methodologies, and bias mitigation interventions in AI system design.

- ### Relationships
  - hasPart:: [[Fairness Metrics]], [[Fairness Constraints]]
  - requires:: [[Fairness Auditing Tools]], [[Bias Detection Methods]]
  - enables:: [[Bias Mitigation Techniques]], [[Algorithmic Accountability]]
  - relatedTo:: [[Fairness]], [[Fairness (OECD)]], [[Disparate Impact]], [[Algorithmic Bias]], [[Digital Technology Access Equity]]
  - contrastsWith:: [[Fairness Accuracy Tradeoffs]]
  - uses:: [[Machine Learning Model]], [[Explainability]]

- ### Content
  Group fairness metrics formalise the requirement that a model's predictions do not systematically disadvantage a protected group. Demographic parity (or statistical parity) requires that positive prediction rates are equal across groups: P(Ŷ=1|A=0) = P(Ŷ=1|A=1). Equalised odds additionally requires that both true positive rates and false positive rates are equal across groups, ensuring that neither group bears a disproportionate burden of false negatives or false positives. Predictive parity (calibration within groups) requires that among those predicted positive, the proportion who are truly positive is equal across groups. These metrics are mutually exclusive except in degenerate cases (Chouldechova, 2017), forcing practitioners to choose the metric most aligned with the deployment context and applicable law.

  Individual fairness, formalised by Dwork et al. (2012) in "Fairness Through Awareness," requires that a classifier f is Lipschitz-continuous with respect to a task-specific similarity metric D on individuals: D(f(x₁), f(x₂)) ≤ D(x₁, x₂). This formulation is theoretically appealing — it prevents treating similar people differently — but operationally demanding because defining a task-appropriate similarity metric that does not encode prohibited biases is itself a sociotechnical challenge. Counterfactual fairness (Kusner et al., 2017) offers an alternative individual-level criterion: a prediction is counterfactually fair if it would be unchanged had the individual belonged to a different demographic group.

  The tension between group and individual fairness has practical consequences for bias mitigation algorithm selection. Pre-processing methods that re-sample or re-weight training data typically target group fairness criteria. In-processing methods that add fairness constraints to the optimisation objective can enforce group or counterfactual fairness. Post-processing methods that adjust decision thresholds per group (e.g., Hardt et al., 2016) enforce equalised odds at the expense of within-group individual consistency.

  Regulatory frameworks — including the EU AI Act's non-discrimination requirements and the US Equal Credit Opportunity Act — primarily reference group-level disparate impact standards, making group fairness operationally dominant in regulated domains. Nevertheless, individual fairness arguments are influential in high-stakes decisions (criminal sentencing, medical diagnosis) where the moral wrongness of treating similar individuals differently is especially salient.

- ### Provenance
  - sources:: Dwork et al. (2012), Hardt et al. (2016), Barocas et al. (2019)
  - migration-date:: 2026-04-26T00:00:00Z
