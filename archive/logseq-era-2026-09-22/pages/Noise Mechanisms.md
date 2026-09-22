public:: true

# Noise Mechanisms
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:noise-mechanisms",
  "@type": "Page",
  "title": "Noise Mechanisms",
  "vc:slug": "noise-mechanisms",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:noise-mechanisms",
  "@type": "Class",
  "label": "Noise Mechanisms",
  "definition": "Noise mechanisms are the algorithmic primitives in differential privacy that add calibrated random perturbation to query results or data so that the contribution of any single individual is statistically masked. The amount of noise is calibrated to the query's sensitivity and the desired privacy budget, balancing privacy protection against the accuracy of released statistics. The principal mechanisms are the Laplace, Gaussian, and exponential mechanisms, each suited to particular query types and privacy definitions.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:differential-privacy",
      "label": "Differential Privacy"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:laplace-mechanism",
        "label": "Laplace Mechanism"
      },
      {
        "@id": "urn:ngm:class:gaussian-mechanism",
        "label": "Gaussian Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:laplace-mechanism",
        "label": "Laplace Mechanism"
      },
      {
        "@id": "urn:ngm:class:gaussian-mechanism",
        "label": "Gaussian Mechanism"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:privacy-budget",
        "label": "Privacy Budget"
      },
      {
        "@id": "urn:ngm:class:sensitivity",
        "label": "Sensitivity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-technology",
        "label": "Privacy Preserving Technology"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-anonymization",
        "label": "Data Anonymization"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:privacy-budget",
        "label": "Privacy Budget"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:epsilon-differential-privacy",
        "label": "Epsilon Differential Privacy"
      },
      {
        "@id": "urn:ngm:class:noise-injection",
        "label": "Noise Injection"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Noise mechanisms are the algorithmic primitives in differential privacy that add calibrated random perturbation to query results or data so that the contribution of any single individual is statistically masked. The amount of noise is calibrated to the query's sensitivity and the desired privacy budget, balancing privacy protection against the accuracy of released statistics. The principal mechanisms are the Laplace, Gaussian, and exponential mechanisms, each suited to particular query types and privacy definitions.
  - Core related concepts: [[Differential Privacy]], [[Laplace Mechanism]], [[Gaussian Mechanism]], [[Privacy Budget]], [[Data Privacy]].

- ### Overview
  - Noise mechanisms are the operational heart of differential privacy. By perturbing outputs with random noise drawn from a carefully chosen distribution, they guarantee that an observer cannot tell with confidence whether any particular individual's record was present in the dataset. The calibration depends on sensitivity, how much one record can change the output, and on the privacy parameter epsilon, which bounds the allowed information leakage.

- ### Mechanisms
  - Laplace mechanism: adds noise from a Laplace distribution scaled to the L1 sensitivity, providing pure epsilon-differential privacy for numeric queries.
  - Gaussian mechanism: adds Gaussian noise scaled to the L2 sensitivity, providing approximate (epsilon, delta)-differential privacy and composing well across many queries.
  - Exponential mechanism: selects from a discrete set of outputs with probability weighted by a utility score, extending differential privacy to non-numeric outputs.
  - Calibration: noise magnitude grows with sensitivity and shrinks with the privacy budget, making the accuracy-privacy trade-off explicit.

- ### Applications
  - Privacy-preserving release of aggregate statistics from sensitive databases.
  - Differentially private machine-learning training that bounds memorisation of individual records.
  - Census and survey publication where individual confidentiality is legally mandated.
  - Telemetry collection at scale where individual contributions must remain indistinguishable.

- ### Relationships
  - subClassOf:: [[Differential Privacy]]
  - partOf:: [[Differential Privacy]]
  - hasPart:: [[Laplace Mechanism]]
  - hasPart:: [[Gaussian Mechanism]]
  - uses:: [[Laplace Mechanism]]
  - uses:: [[Gaussian Mechanism]]
  - dependsOn:: [[Privacy Budget]]
  - dependsOn:: [[Sensitivity]]
  - enables:: [[Data Privacy]]
  - enables:: [[Privacy Preserving Technology]]
  - supports:: [[Data Anonymization]]
  - requires:: [[Privacy Budget]]
  - implements:: [[Differential Privacy]]
  - relatedTo:: [[Epsilon Differential Privacy]]
  - relatedTo:: [[Noise Injection]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
