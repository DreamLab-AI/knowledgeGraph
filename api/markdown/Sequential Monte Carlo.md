public:: true

# Sequential Monte Carlo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ffe8b4556a074fe9fbfce5317c57128401772b55106377cf5fbc1e91dddecfe",
  "@type": "Page",
  "vc:slug": "sequential-monte-carlo",
  "title": "Sequential Monte Carlo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:monte-carlo-integration",
      "vc:label": "Monte Carlo Integration"
    },
    {
      "@id": "urn:visionflow:linked:particle-filter",
      "vc:label": "Particle Filter"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:importance-sampling",
      "vc:label": "Importance Sampling"
    },
    {
      "@id": "urn:visionflow:linked:numerical-methods",
      "vc:label": "Numerical Methods"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sequential Monte Carlo"
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
  "@id": "urn:ngm:class:sequential-monte-carlo",
  "@type": "Class",
  "label": "Sequential Monte Carlo",
  "definition": "Sequential Monte Carlo is a family of methods that approximate evolving probability distributions using a set of weighted samples updated recursively as new observations arrive.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:numerical-methods",
      "label": "Numerical Methods"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sequential-monte-carlo:f62965b3b95a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8ffe8b4556a074fe9fbfce5317c57128401772b55106377cf5fbc1e91dddecfe"
  },
  "vc:resolutions": [
    {
      "raw": "[[Monte Carlo Integration]]",
      "resolved": "urn:visionflow:linked:monte-carlo-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Particle Filter]]",
      "resolved": "urn:visionflow:linked:particle-filter",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bayesian Inference]]",
      "resolved": "urn:visionflow:linked:bayesian-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Importance Sampling]]",
      "resolved": "urn:visionflow:linked:importance-sampling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Numerical Methods]]",
      "resolved": "urn:visionflow:linked:numerical-methods",
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
  - Sequential Monte Carlo is a family of methods that approximate evolving probability distributions using a set of weighted samples updated recursively as new observations arrive.

- ### Semantic Classification
  - owl-class:: metaverse:SequentialMonteCarlo
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Numerical Methods]]
  - bridges-to:: [[Bayesian Inference]], [[Importance Sampling]]
  - requires:: [[Monte Carlo Integration]]
  - enables:: [[Particle Filter]]

- ### Content
  - Sequential Monte Carlo represents a distribution by a population of samples, or particles, carrying importance weights, then propagates and reweights them over time, resampling to combat weight degeneracy. It is well suited to non-linear, non-Gaussian state estimation.
  - The particle filter is its best-known instance, used for tracking and localisation in robotics and XR. It builds on Monte Carlo integration and importance sampling within a Bayesian inference framework.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
