public:: true

# Gaussian Distribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e1b01a265b717e3c1191bf79d6b7127395e5e66d1ffbb3fbc63107402b4981a6",
  "@type": "Page",
  "vc:slug": "gaussian-distribution",
  "title": "Gaussian Distribution",
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
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:markov-chain-monte-carlo",
      "vc:label": "Markov Chain Monte Carlo"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gaussian Distribution"
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
  "@id": "urn:ngm:class:gaussian-distribution",
  "@type": "Class",
  "label": "Gaussian Distribution",
  "definition": "A continuous probability distribution, also called the normal distribution, characterised by a symmetric bell-shaped density defined by its mean and variance.",
  "domain": "mathematics",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
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
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gaussian-distribution:38875735715a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e1b01a265b717e3c1191bf79d6b7127395e5e66d1ffbb3fbc63107402b4981a6"
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
      "kind": "StubLink"
    },
    {
      "raw": "[[Bayesian Inference]]",
      "resolved": "urn:visionflow:linked:bayesian-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Markov Chain Monte Carlo]]",
      "resolved": "urn:visionflow:linked:markov-chain-monte-carlo",
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
  - A continuous probability distribution, also called the normal distribution, characterised by a symmetric bell-shaped density defined by its mean and variance.

- ### Semantic Classification
  - owl-class:: mathematics:GaussianDistribution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Probability Theory]]
  - bridges-to:: [[Markov Chain Monte Carlo]]
  - requires:: [[Probability Theory]], [[Statistics]]
  - enables:: [[Bayesian Inference]]

- ### Content
  - The Gaussian distribution is fully described by its mean and variance and arises naturally through the central limit theorem, which states that sums of many independent random variables tend towards it. This makes it a default model for noise and measurement error.
  - Its mathematical tractability, including closed-form conditioning and marginalisation, makes it central to statistics, Bayesian inference, and many machine learning models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
