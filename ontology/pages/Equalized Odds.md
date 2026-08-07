public:: true

# Equalized Odds
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2cb1a35b80a94132389d5c2fb71d7b096930be1651677c593c7750f642e8f2d4",
  "@type": "Page",
  "vc:slug": "equalized-odds",
  "title": "Equalized Odds",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:fairness-metrics", "vc:label": "Fairness Metrics"},
    {"@id": "urn:visionflow:linked:algorithmic-fairness", "vc:label": "Algorithmic Fairness"},
    {"@id": "urn:visionflow:linked:fairness", "vc:label": "Fairness"},
    {"@id": "urn:visionflow:linked:bias-mitigation-techniques", "vc:label": "Bias Mitigation Techniques"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:equalized-odds",
  "@type": "Class",
  "label": "Equalized Odds",
  "definition": "A group fairness criterion, introduced by Hardt, Price, and Srebro (2016), requiring that a classifier's true positive rate and false positive rate be equal across protected groups — the prediction must be conditionally independent of group membership given the true outcome; unlike demographic parity it permits base rates to differ between groups, but it conflicts with calibration when base rates differ, and is typically approached by threshold adjustment or constrained training rather than achieved exactly.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:fairness-metrics",
    "label": "Fairness Metrics"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:algorithmic-fairness", "label": "Algorithmic Fairness"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:classification", "label": "Classification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A group fairness criterion, introduced by Hardt, Price, and Srebro (2016), requiring that a classifier's true positive rate and false positive rate be equal across protected groups — the prediction must be conditionally independent of group membership given the true outcome; unlike demographic parity it permits base rates to differ between groups, but it conflicts with calibration when base rates differ, and is typically approached by threshold adjustment or constrained training rather than achieved exactly."

- ### Semantic Classification
  - owl-class:: ai:EqualizedOdds
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Fairness Metrics]]
  - part-of:: [[Algorithmic Fairness]]
  - related-to:: [[Fairness]], [[Bias Mitigation Techniques]]

- ### Content

  ## Definition

  **Equalized odds** is one of the central group [[Fairness Metrics]] for classifiers. Formally, a predictor Ŷ satisfies equalized odds with respect to a protected attribute A (such as race or sex) and true outcome Y when Ŷ ⊥ A | Y — that is, P(Ŷ=1 | Y=y, A=a) is the same for every group a, for both y=1 and y=0. In operational terms, every group must experience the same true positive rate *and* the same false positive rate: qualified candidates are found at equal rates, and unqualified ones are wrongly flagged at equal rates.

  The criterion was proposed by Hardt, Price, and Srebro in "Equality of Opportunity in Supervised Learning" (NeurIPS 2016), partly in response to the COMPAS recidivism controversy, where the disputed disparity was precisely unequal false positive rates between Black and white defendants. Its weaker sibling, *equality of opportunity*, constrains only the true positive rate. Compared with demographic parity — which forces equal selection rates regardless of the underlying distribution — equalized odds respects differing base rates, so a perfectly accurate classifier always satisfies it, which many regard as a more defensible notion of non-discrimination.

  Its principal limitation is the impossibility landscape mapped by Kleinberg, Mullainathan, and Raghavan and by Chouldechova: when base rates differ across groups, no non-trivial classifier can simultaneously satisfy equalized odds and calibration within groups. Enforcing the criterion therefore involves explicit trade-offs, usually surfaced as group-specific decision thresholds or accepted accuracy loss, and the choice among competing criteria is ultimately a policy judgement, not a mathematical one.

  ## Technical Details

  - **Post-processing**: the original Hardt et al. method derives (possibly randomised) group-specific thresholds from ROC curves; the constraint is satisfiable wherever the groups' ROC curves intersect, at some cost to overall accuracy.
  - **In-processing**: constrained optimisation and reductions approaches (e.g. Agarwal et al.'s exponentiated-gradient method) train models subject to bounded equalized-odds violation, trading accuracy against fairness continuously.
  - **Measurement**: reported in practice as TPR and FPR gaps or ratios between groups; toolkits such as Fairlearn and AIF360 compute these alongside demographic parity and calibration diagnostics, and they are among the [[Bias Mitigation Techniques]] surfaced in model cards.
  - **Caveats**: satisfying equalized odds on historical labels inherits any bias in those labels; intersectional subgroups can remain unequal even when top-level groups match; and randomised threshold policies raise their own procedural-fairness concerns.
