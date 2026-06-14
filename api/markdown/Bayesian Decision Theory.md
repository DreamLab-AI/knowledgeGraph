public:: true

# Bayesian Decision Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ce9dc031316659a8b16130862d1c0299a6007d1fb7b9679b39ac8e7f25d9fdb8",
  "@type": "Page",
  "vc:slug": "bayesian-decision-theory",
  "title": "Bayesian Decision Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bayesian Decision Theory"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayesian-decision-theory",
  "@type": "Class",
  "label": "Bayesian Decision Theory",
  "definition": "Bayesian decision theory is a framework for making decisions under uncertainty by combining probabilities of outcomes with a loss or utility function to choose actions that minimise expected loss. It uses Bayesian updating to incorporate evidence.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:statistics",
      "label": "Statistics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:bayesian-decision-theory:468c17460254",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ce9dc031316659a8b16130862d1c0299a6007d1fb7b9679b39ac8e7f25d9fdb8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Bayesian decision theory is a framework for making decisions under uncertainty by combining probabilities of outcomes with a loss or utility function to choose actions that minimise expected loss. It uses Bayesian updating to incorporate evidence.

- ### Semantic Classification
  - owl-class:: statistics:BayesianDecisionTheory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Statistics]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[Probability Theory]], [[Statistics]]

- ### Content
  - Bayesian decision theory formalises rational choice under uncertainty by representing beliefs as probability distributions, updating them with observed data via Bayes' theorem, and selecting actions that minimise expected loss or maximise expected utility. The optimal action is the one whose posterior expected risk is lowest.
  - The framework provides the theoretical basis for classification rules, hypothesis testing and many machine learning methods. It clarifies how prior knowledge, evidence and the costs of errors jointly determine the best decision.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
