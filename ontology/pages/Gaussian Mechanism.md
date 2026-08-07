public:: true

# Gaussian Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d1420c639c5b5a365896d87c5982512c17cf75b43e9e72d5f28b0ee320a0023",
  "@type": "Page",
  "vc:slug": "gaussian-mechanism",
  "title": "Gaussian Mechanism",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:noise-mechanisms",
      "vc:label": "Noise Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:differential-privacy",
      "vc:label": "Differential Privacy"
    },
    {
      "@id": "urn:visionflow:linked:laplace-mechanism",
      "vc:label": "Laplace Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaussian-mechanism",
  "@type": "Class",
  "label": "Gaussian Mechanism",
  "definition": "A differential privacy noise mechanism that releases a numeric query result after adding noise drawn from a normal distribution calibrated to the query's L2 sensitivity, providing approximate (epsilon, delta)-differential privacy; its light tails, per-coordinate efficiency on high-dimensional vectors, and tight composition under Rényi and zero-concentrated accounting make it the mechanism of choice for iterative computations, most prominently gradient perturbation in differentially private stochastic gradient descent (DP-SGD).",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:noise-mechanisms",
    "label": "Noise Mechanisms"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-preserving-analytics",
        "label": "Privacy Preserving Analytics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:laplace-mechanism",
        "label": "Laplace Mechanism"
      }
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
  - "A differential privacy noise mechanism that releases a numeric query result after adding noise drawn from a normal distribution calibrated to the query's L2 sensitivity, providing approximate (epsilon, delta)-differential privacy; its light tails, per-coordinate efficiency on high-dimensional vectors, and tight composition under Rényi and zero-concentrated accounting make it the mechanism of choice for iterative computations, most prominently gradient perturbation in differentially private stochastic gradient descent (DP-SGD)."

- ### Semantic Classification
  - owl-class:: security:GaussianMechanism
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Noise Mechanisms]]
  - part-of:: [[Differential Privacy]]
  - contrasts-with:: [[Laplace Mechanism]]
  - enables:: [[Privacy Preserving Analytics]]

- ### Content

  ## Definition

  The **Gaussian mechanism** privatises a numeric query f by releasing f(D) + N(0, σ²I), with the standard deviation σ calibrated to the query's L2 sensitivity Δ₂f — the largest Euclidean-norm change in f caused by adding or removing one individual's record. Unlike the [[Laplace Mechanism]], it cannot achieve pure ε-differential privacy: normal tails decay too fast to bound the worst-case likelihood ratio everywhere, so it offers the relaxed (ε, δ)-guarantee, where δ is a small probability mass (conventionally well below 1/n) on which the pure bound may fail. The classical calibration σ ≥ Δ₂f·√(2 ln(1.25/δ))/ε suffices for ε < 1; Balle and Wang's 2018 analytic Gaussian mechanism gives the tight calibration for all regimes.

  Its practical dominance comes from two properties. First, L2 calibration: for a d-dimensional query whose coordinates each move by a bounded amount, Δ₂ grows as √d while Δ₁ grows as d, so Gaussian noise per coordinate can be far smaller than Laplace noise on high-dimensional releases such as gradient vectors or embedding statistics. Second, composition: sums of Gaussian mechanisms are themselves Gaussian in their privacy-loss behaviour, which Rényi differential privacy and zero-concentrated DP exploit to give much tighter accounting over thousands of adaptive queries than basic composition allows.

  These properties make the Gaussian mechanism the engine of differentially private machine learning. DP-SGD (Abadi et al., 2016) clips each example's gradient to bound Δ₂ and adds Gaussian noise to every minibatch update, with the moments accountant tracking cumulative privacy loss across training — the approach behind private training in TensorFlow Privacy and Opacus, and behind production systems for [[Privacy Preserving Analytics]] at Apple, Google, and Microsoft.

  ## Technical Details

  For neighbouring databases the privacy loss of N(f(D), σ²I) is itself normally distributed with mean Δ₂²/2σ² — this sub-Gaussian privacy-loss profile is what Rényi-DP accounting exploits: the mechanism satisfies (α, α·Δ₂²/2σ²)-RDP for every order α, and RDP guarantees convert to (ε, δ)-DP at the end of composition. In DP-SGD, per-example gradients are clipped to norm C (so Δ₂ = C under add/remove adjacency), noise N(0, (zC)²) is added to the summed batch gradient, and privacy amplification by Poisson subsampling further reduces per-step cost; the noise multiplier z, sampling rate, and step count jointly determine the final (ε, δ) via the moments accountant or numerically tight privacy-loss-distribution accountants. Implementation caveats mirror the Laplace case: floating-point sampling must be hardened (Mironov-style attacks apply), and the discrete Gaussian (Canonne, Kamath, Steinke 2020) — used in the 2020 US Census Disclosure Avoidance System — provides an exact integer-valued variant immune to those side channels.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
