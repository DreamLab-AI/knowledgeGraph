public:: true

# Algorithmic Bias
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd2b99a03f735872899a2eb101f502a1ad44eece3140edeed4f16c9e8e631871",
  "@type": "Page",
  "vc:slug": "algorithmic-bias",
  "title": "Algorithmic Bias",
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
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
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
      "vc:value": "AI-0378"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Algorithmic Bias"
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
  "@id": "urn:ngm:class:algorithmic-bias",
  "@type": "Class",
  "label": "Algorithmic Bias",
  "definition": "Systematic and repeatable errors in AI systems that create unfair outcomes favouring or discriminating against particular groups or individuals. Bias manifests through historical bias, representation gaps, measurement proxies, aggregation errors, and feedback loops, and is detected through statistical auditing, counterfactual testing, and fairness metrics.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-fairness", "label": "AI Fairness"},
      {"@id": "urn:ngm:class:fairness", "label": "Fairness"},
      {"@id": "urn:ngm:class:bias", "label": "Bias"},
      {"@id": "urn:ngm:class:explainability", "label": "Explainability"},
      {"@id": "urn:ngm:class:harmful-bias", "label": "Harmful Bias"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bias-detection-methods", "label": "Bias Detection Methods"},
      {"@id": "urn:ngm:class:fairness-metrics", "label": "Fairness Metrics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bias-mitigation-techniques", "label": "Bias Mitigation Techniques"},
      {"@id": "urn:ngm:class:algorithmic-accountability", "label": "Algorithmic Accountability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:fairness-constraints", "label": "Fairness Constraints"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:algorithmic-bias:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd2b99a03f735872899a2eb101f502a1ad44eece3140edeed4f16c9e8e631871"
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
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
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
  - Algorithmic Bias refers to systematic and repeatable errors in AI systems that create unfair outcomes favoring or discriminating against particular groups or individuals. This bias manifests through multiple pathways including historical bias (reflecting past societal inequalities in training data), representation bias (unrepresentative or incomplete data samples), measurement bias (flawed proxy variables), aggregation bias (combining heterogeneous groups inappropriately), and feedback loops (where system outputs influence future inputs, amplifying initial biases). Algorithmic bias affects protected groups based on attributes such as race, gender, age, disability, or socioeconomic status, potentially resulting in discriminatory decisions in critical domains like hiring, lending, criminal justice, and healthcare. Detection requires statistical analysis, fairness auditing, and counterfactual testing, while mitigation involves pre-processing data corrections, in-processing fairness constraints, and post-processing prediction adjustments. The severity and legal implications of algorithmic bias are governed by anti-discrimination frameworks including the EU Anti-Discrimination Directives, UK Equality Act 2010, and US civil rights legislation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AlgorithmicBias
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Smart Contract]] (domain: bc)

- ### Content
  Algorithmic Bias — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC TR 24027]], [[NIST SP 1270]], [[IEEE P7003-2021]]
  - migration-date:: 2026-04-26T00:00:00Z
