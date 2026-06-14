public:: true

# Intersectional Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb4b38ac75c42d5660880c74200e7178e043b5c0101422ad2c2897bba90a1978",
  "@type": "Page",
  "vc:slug": "intersectional-fairness",
  "title": "Intersectional Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:buolamwini-and-gebru-2018",
      "vc:label": "Buolamwini and Gebru (2018)"
    },
    {
      "@id": "urn:visionflow:linked:crenshaw-1989",
      "vc:label": "Crenshaw (1989)"
    },
    {
      "@id": "urn:visionflow:linked:ieee-p7003-2021",
      "vc:label": "IEEE P7003-2021"
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
      "vc:value": "AI-0384"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Intersectional Fairness"
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
  "@id": "urn:ngm:class:intersectional-fairness",
  "@type": "Class",
  "label": "Intersectional Fairness",
  "definition": "Intersectional Fairness is an approach to algorithmic fairness that evaluates bias and discrimination across subgroups defined by combinations of multiple protected attributes—such as race, gender, age, and disability—recognising that individuals with intersecting marginalised identities may experience unique harms not captured by single-attribute analysis. Rooted in Crenshaw's (1989) intersectionality theory, it requires auditing model performance across all cross-attribute subgroup combinations, demanding both statistical rigour and sufficient sample sizes for rare intersectional groups.",
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
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:fairness-constraints", "label": "Fairness Constraints"},
      {"@id": "urn:ngm:class:fairness-auditing-tools", "label": "Fairness Auditing Tools"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"},
      {"@id": "urn:ngm:class:disparate-impact", "label": "Disparate Impact"},
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fairness-accuracy-tradeoffs", "label": "Fairness Accuracy Tradeoffs"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:intersectional-fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb4b38ac75c42d5660880c74200e7178e043b5c0101422ad2c2897bba90a1978"
  },
  "vc:resolutions": [
    {
      "raw": "[[Buolamwini and Gebru (2018)]]",
      "resolved": "urn:visionflow:linked:buolamwini-and-gebru-2018",
      "kind": "StubLink"
    },
    {
      "raw": "[[Crenshaw (1989)]]",
      "resolved": "urn:visionflow:linked:crenshaw-1989",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE P7003-2021]]",
      "resolved": "urn:visionflow:linked:ieee-p7003-2021",
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
  - Intersectional Fairness is an approach to algorithmic fairness that accounts for overlapping and interacting protected attributes, recognizing that individuals with multiple marginalized identities may experience unique forms of discrimination not captured by analyzing single attributes in isolation. Rooted in intersectionality theory from critical race and feminist scholarship (Crenshaw 1989), this framework acknowledges that the experiences of, for example, Black women cannot be understood simply as the combination of being Black and being a woman, but involve distinct discriminatory patterns at the intersection of race and gender. In AI systems, intersectional fairness requires evaluating bias and fairness metrics across intersectional subgroups defined by specific combinations of protected attribute values, where the number of subgroups equals the product of attribute cardinalities (e.g., 2 genders × 4 race categories × 3 age brackets = 24 subgroups). This analysis often reveals intersectional disparities where subgroups experience worse outcomes than predicted by single-attribute analysis, particularly affecting individuals with multiple marginalized identities. Implementation challenges include exponential growth of subgroups with additional attributes, sample size limitations for rare intersectional groups, and computational complexity of enforcing fairness across all subgroups simultaneously. Intersectional fairness auditing is increasingly required by comprehensive AI governance frameworks and documented in research by Buolamwini and Gebru (2018) on gender-race bias in facial recognition.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:IntersectionalFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Fairness Metrics]], [[Bias Detection Methods]]
  - uses:: [[Fairness Constraints]], [[Fairness Auditing Tools]]
  - relatedTo:: [[Algorithmic Bias]], [[Disparate Impact]], [[Bias Mitigation Techniques]], [[Explainability]], [[Responsible AI]]
  - supports:: [[AI Governance]], [[AI Ethics]]
  - enables:: [[Fairness Accuracy Tradeoffs]]

- ### Content
  Intersectional fairness extends standard algorithmic fairness frameworks beyond single protected-attribute analysis to examine outcomes for subgroups defined by combinations of attributes. Where demographic parity or equal opportunity metrics compare performance across groups defined by a single characteristic such as gender or race, intersectional analysis examines all cross-product combinations—Black women, older disabled men, young non-binary individuals from low-income backgrounds—recognising that discrimination at intersections can be invisible to single-attribute audits. This approach draws directly on Crenshaw's (1989) legal and social theory of intersectionality, which demonstrated that Black women's experiences of workplace discrimination were not merely additive combinations of race-based and gender-based discrimination but constituted a distinct category of harm.

  In AI systems, intersectional fairness auditing requires enumerating all subgroup combinations and computing fairness metrics—false positive rates, false negative rates, calibration error, selection rates—for each. The number of subgroups grows exponentially with the number of attributes and their cardinalities: two binary attributes yield four subgroups, but four attributes with three values each yield 81 subgroups. Many intersectional subgroups contain insufficient test samples for statistically reliable estimates, creating a fundamental tension between thoroughness and statistical power. Approaches include Bayesian methods for small-sample subgroup estimation, multi-level modelling, and active data collection strategies that oversample rare intersectional groups.

  Implementation in practice involves extending existing fairness toolkits such as Fairlearn, AI Fairness 360, and Aequitas to compute intersectional metrics, which may require custom slicing logic and careful multiple-testing corrections to avoid spurious findings. Enforcement strategies include intersectional constraints in constrained optimisation during training, post-processing calibration applied separately to intersectional subgroups, and regular monitoring dashboards that surface intersectional disparities alongside single-attribute metrics.

  Regulatory and governance frameworks are increasingly incorporating intersectional requirements. The EU AI Act and the US Executive Order on Safe, Secure, and Trustworthy AI both reference protected characteristics in terms that implicitly encompass intersectional considerations. Independent audits such as Buolamwini and Gebru's 2018 Gender Shades study—which revealed commercial facial recognition systems performing significantly worse for darker-skinned women than for lighter-skinned men—demonstrate the practical importance of intersectional analysis and have driven meaningful improvements in commercial AI system performance across demographic groups.

- ### Provenance
  - sources:: [[Crenshaw (1989)]], [[Buolamwini and Gebru (2018)]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z
