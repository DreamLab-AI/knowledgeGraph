public:: true

# Fairness Accuracy Tradeoffs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:783c5be5b50bba251014bd3c15bffa56dedca85d1ab728607e8267594fb5815b",
  "@type": "Page",
  "vc:slug": "fairness-accuracy-tradeoffs",
  "title": "Fairness Accuracy Tradeoffs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:chouldechova-2017",
      "vc:label": "Chouldechova (2017)"
    },
    {
      "@id": "urn:visionflow:linked:corbett-davies-et-al-2017",
      "vc:label": "Corbett-Davies et al. (2017)"
    },
    {
      "@id": "urn:visionflow:linked:kleinberg-et-al-2017",
      "vc:label": "Kleinberg et al. (2017)"
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
      "vc:value": "AI-0385"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Accuracy Tradeoffs"
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
  "@id": "urn:ngm:class:fairness-accuracy-tradeoffs",
  "@type": "Class",
  "label": "Fairness Accuracy Tradeoffs",
  "definition": "Fairness Accuracy Tradeoffs represent the fundamental tension in machine learning between maximizing predictive accuracy and satisfying fairness constraints, characterized by the Pareto frontier of achievable (accuracy, fairness) pairs where improving one objective typically requires sacrificing ...",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-accuracy-tradeoffs:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:783c5be5b50bba251014bd3c15bffa56dedca85d1ab728607e8267594fb5815b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Chouldechova (2017)]]",
      "resolved": "urn:visionflow:linked:chouldechova-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Corbett-Davies et al. (2017)]]",
      "resolved": "urn:visionflow:linked:corbett-davies-et-al-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kleinberg et al. (2017)]]",
      "resolved": "urn:visionflow:linked:kleinberg-et-al-2017",
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
  - Fairness Accuracy Tradeoffs represent the fundamental tension in machine learning between maximizing predictive accuracy and satisfying fairness constraints, characterized by the Pareto frontier of achievable (accuracy, fairness) pairs where improving one objective typically requires sacrificing the other. This tradeoff arises because fairness constraints restrict the hypothesis space of permissible models, excluding solutions that achieve maximum accuracy through reliance on correlations between protected attributes and outcomes, even when those correlations reflect genuine statistical relationships in the data. The magnitude of accuracy cost depends on several factors: the strength of correlation between protected attributes and outcomes, which fairness constraint is enforced (with independence constraints typically more costly than separation constraints), the flexibility of the model class, and base rate differences between groups. Implementation typically involves multi-objective optimization with a tradeoff parameter λ balancing accuracy loss L_accuracy and fairness violation L_fairness in the combined objective L = L_accuracy + λ·L_fairness, where varying λ traces out the Pareto frontier. While some contexts permit minimal accuracy costs for fairness improvements, others involve substantial tradeoffs requiring normative judgment about acceptable accuracy sacrifices for fairness gains. Research by Corbett-Davies et al. (2017) demonstrates that fairness constraints can sometimes improve accuracy for disadvantaged groups while reducing overall accuracy, and that the tradeoff is context-dependent based on deployment objectives and stakeholder priorities.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessAccuracyTradeoffs
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Blockchain]], [[Digital Twin]]

- ### Content
  Fairness Accuracy Tradeoffs — content pending enrichment.

- ### Provenance
  - sources:: [[Corbett-Davies et al. (2017)]], [[Kleinberg et al. (2017)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z
