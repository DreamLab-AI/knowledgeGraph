public:: true

# Disparate Impact
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff3aa95f9f11b059ed20fe461a99e8aceed24b4a504cb8449993a038515da340",
  "@type": "Page",
  "vc:slug": "disparate-impact",
  "title": "Disparate Impact",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-anti-discrimination-directives",
      "vc:label": "EU Anti-Discrimination Directives"
    },
    {
      "@id": "urn:visionflow:linked:uk-equality-act-2010",
      "vc:label": "UK Equality Act 2010"
    },
    {
      "@id": "urn:visionflow:linked:us-eeoc-uniform-guidelines",
      "vc:label": "US EEOC Uniform Guidelines"
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
      "vc:value": "AI-0381"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Disparate Impact"
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
  "@id": "urn:ngm:class:disparate-impact",
  "@type": "Class",
  "label": "Disparate Impact",
  "definition": "Disparate Impact is a legal doctrine and AI fairness concept denoting the condition where a facially neutral policy, practice, or algorithmic decision system produces outcomes that disproportionately disadvantage a legally protected group relative to a comparator group, regardless of discriminatory intent. Measured via the four-fifths rule or statistical significance tests, it is legally actionable in employment (US EEOC guidelines), lending, housing, and insurance, and is the analytical basis for algorithmic bias audits under the EU AI Act and GDPR. Remediation requires either demonstrating business necessity or adopting less discriminatory alternatives.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:ai-fairness",
      "label": "AI Fairness"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"},
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fairness-auditing-tools", "label": "Fairness Auditing Tools"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:algorithmic-bias", "label": "Algorithmic Bias"},
      {"@id": "urn:ngm:class:harmful-bias", "label": "Harmful Bias"},
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:diversity-non-discrimination-and-fairness", "label": "Diversity, Non-Discrimination, and Fairness"},
      {"@id": "urn:ngm:class:intersectional-fairness", "label": "Intersectional Fairness"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:group-vs-individual-fairness", "label": "Group vs Individual Fairness"},
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
  "@id": "urn:visionflow:annotation:link-resolutions:disparate-impact:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff3aa95f9f11b059ed20fe461a99e8aceed24b4a504cb8449993a038515da340"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU Anti-Discrimination Directives]]",
      "resolved": "urn:visionflow:linked:eu-anti-discrimination-directives",
      "kind": "StubLink"
    },
    {
      "raw": "[[UK Equality Act 2010]]",
      "resolved": "urn:visionflow:linked:uk-equality-act-2010",
      "kind": "StubLink"
    },
    {
      "raw": "[[US EEOC Uniform Guidelines]]",
      "resolved": "urn:visionflow:linked:us-eeoc-uniform-guidelines",
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
  - Disparate Impact is a legal doctrine and form of indirect discrimination that occurs when facially neutral policies, practices, or algorithmic systems disproportionately affect protected groups, regardless of intent to discriminate. Originating from US employment law (EEOC Uniform Guidelines 1978) and extended to UK and EU anti-discrimination frameworks, disparate impact is measured by comparing selection rates, approval rates, or outcome rates between protected and unprotected groups. The "80 percent rule" (four-fifths rule) establishes that disparate impact exists when the selection rate for a protected group is less than 80 percent of the rate for the highest-performing group, calculated as a disparate impact ratio. Unlike disparate treatment (intentional direct discrimination), disparate impact focuses on discriminatory outcomes rather than discriminatory intent. Legal defenses include business necessity (US) - demonstrating the practice is job-related and consistent with business necessity, and proportionate means (UK/EU) - showing the practice is a proportionate means of achieving a legitimate aim. In AI systems, disparate impact analysis requires statistical testing of algorithmic decisions across demographic groups, documentation of less discriminatory alternatives if available, and compliance with sector-specific regulations in employment, lending, insurance, and housing domains.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DisparateImpact
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Fairness Metrics]], [[Bias Detection Methods]]
  - enables:: [[Fairness Auditing Tools]], [[Algorithmic Accountability]]
  - relatedTo:: [[Algorithmic Bias]], [[Harmful Bias]], [[Bias Mitigation Techniques]], [[Diversity, Non-Discrimination, and Fairness]], [[Intersectional Fairness]], [[Regulatory Compliance]]
  - contrastsWith:: [[Group vs Individual Fairness]], [[Fairness Accuracy Tradeoffs]]

- ### Content

  ### Definition

  Disparate Impact is the condition in which a statistically neutral decision rule or algorithmic system produces outcome distributions that differ significantly across legally protected demographic groups (race, gender, age, disability, religion, national origin). Unlike disparate treatment (intentional direct discrimination), disparate impact is outcome-based: the policy or algorithm need not mention protected characteristics to be unlawful. The analytical standard originates in US employment law via the EEOC's 1978 Uniform Guidelines and has since been codified or adopted in UK (Equality Act 2010), EU anti-discrimination directives, and sector-specific regulations for financial services and housing.

  ### Relationships

  Detecting disparate impact requires Fairness Metrics (selection rate ratios, equalised odds differentials, demographic parity gaps) and Bias Detection Methods capable of disaggregating model outputs by protected group. It enables — and indeed mandates in regulated sectors — the use of Fairness Auditing Tools and Algorithmic Accountability mechanisms. It is closely related to Algorithmic Bias (the technical cause), Harmful Bias (the broader harm concept), and Bias Mitigation Techniques (the remediation toolkit). Intersectional Fairness addresses cases where multiple overlapping protected characteristics interact to produce amplified impacts. Regulatory Compliance frameworks increasingly reference disparate impact as the operative standard for AI system approval.

  ### Content

  The four-fifths rule (80% rule) provides the operational threshold: disparate impact is indicated when the selection rate for a protected group is less than 80% of the selection rate for the highest-performing group. For example, if 50% of white applicants and 35% of Black applicants are approved for loans, the ratio is 0.70 (below 0.80), indicating potential disparate impact. Statistical significance tests (chi-square, Fisher's exact test, standardised mean difference) supplement the four-fifths rule for small sample sizes.

  In AI systems, disparate impact analysis requires disaggregated performance evaluation across all relevant demographic intersections, documentation of less discriminatory alternative model formulations if disparate impact is found, and justification of business necessity when alternatives with lower impact are not adopted. The EU AI Act's conformity assessment requirements for high-risk AI systems in employment, credit, and essential services explicitly incorporate bias testing obligations that operationalise the disparate impact doctrine. Fairness-aware machine learning techniques — including pre-processing (resampling), in-processing (fairness constraints during training), and post-processing (calibration) — provide the mitigation toolkit, though all involve trade-offs with overall predictive accuracy captured by the Fairness Accuracy Tradeoffs concept.

- ### Provenance
  - sources:: [[US EEOC Uniform Guidelines]], [[UK Equality Act 2010]], [[EU Anti-Discrimination Directives]]
  - migration-date:: 2026-04-26T00:00:00Z
