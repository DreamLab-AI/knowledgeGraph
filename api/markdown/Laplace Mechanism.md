public:: true

# Laplace Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff69e9d3869870d00f7008db4f19013412e870478f6eab4c91758c12a80bddb1",
  "@type": "Page",
  "vc:slug": "laplace-mechanism",
  "title": "Laplace Mechanism",
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
      "@id": "urn:visionflow:linked:gaussian-mechanism",
      "vc:label": "Gaussian Mechanism"
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
  "@id": "urn:ngm:class:laplace-mechanism",
  "@type": "Class",
  "label": "Laplace Mechanism",
  "definition": "The foundational noise mechanism of differential privacy, which releases a numeric query result after adding random noise drawn from a Laplace distribution whose scale equals the query's L1 sensitivity divided by the privacy budget epsilon; introduced by Dwork, McSherry, Nissim, and Smith in 2006, it achieves pure epsilon-differential privacy with no failure probability, and remains the standard mechanism for counts, sums, and histograms in privacy-preserving analytics.",
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
        "@id": "urn:ngm:class:gaussian-mechanism",
        "label": "Gaussian Mechanism"
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
  - "The foundational noise mechanism of differential privacy, which releases a numeric query result after adding random noise drawn from a Laplace distribution whose scale equals the query's L1 sensitivity divided by the privacy budget epsilon; introduced by Dwork, McSherry, Nissim, and Smith in 2006, it achieves pure epsilon-differential privacy with no failure probability, and remains the standard mechanism for counts, sums, and histograms in privacy-preserving analytics."

- ### Semantic Classification
  - owl-class:: security:LaplaceMechanism
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Noise Mechanisms]]
  - part-of:: [[Differential Privacy]]
  - contrasts-with:: [[Gaussian Mechanism]]
  - enables:: [[Privacy Preserving Analytics]]

- ### Content

  ## Definition

  The **Laplace mechanism** is the original and simplest way to make a numeric query differentially private. Given a function f over a database, it releases f(D) + noise, where the noise is drawn from the Laplace distribution Lap(Δ₁f/ε): Δ₁f is the query's L1 sensitivity — the largest possible change in f caused by adding or removing one individual's record — and ε is the privacy budget. The result satisfies pure ε-[[Differential Privacy]]: for any two neighbouring databases, the probability of any output differs by a factor of at most e^ε, so no observer can confidently infer any single person's presence or values from the released statistic.

  The mechanism was introduced in the 2006 paper by Dwork, McSherry, Nissim, and Smith that founded differential privacy, and it remains the workhorse for low-sensitivity queries. A counting query ("how many users satisfy X?") has sensitivity 1, so Lap(1/ε) noise — a typical perturbation of a few units — suffices regardless of database size, making the noise negligible for large populations. Histograms enjoy the same property because one record affects only one bucket. Sums and means require bounding (clipping) each individual's contribution to keep sensitivity finite.

  Its principal contrast within [[Noise Mechanisms]] is the [[Gaussian Mechanism]]: Laplace calibrates to L1 sensitivity and gives pure ε-DP with heavier-tailed noise, while Gaussian calibrates to L2 sensitivity and gives only approximate (ε, δ)-DP but composes more gracefully across the many queries of an iterative computation. For a single scalar release, Laplace is almost always the better tool; for high-dimensional vector releases whose L2 sensitivity is much smaller than L1, Gaussian wins.

  ## Technical Details

  The Laplace density is p(x) = (1/2b)·exp(−|x−μ|/b) with scale b = Δ₁f/ε, giving variance 2b². The privacy proof is two lines: the ratio of densities at any output point for neighbouring databases is bounded by exp(ε·|f(D)−f(D′)|/Δ₁f) ≤ e^ε. Accuracy follows from the exponential tail: the error exceeds t·Δ₁f/ε with probability e^−t. For vector-valued f the noise is added independently per coordinate with b = Δ₁f/ε where Δ₁f is the L1 norm of the worst-case change. Practical deployments must respect sequential composition (k queries at ε each consume kε of budget) and guard against floating-point side channels — Mironov's 2012 attack showed naive double-precision sampling leaks information, so production libraries (Google DP, OpenDP, Tumult Analytics) use snapped or discrete variants such as the geometric mechanism, the integer-valued analogue used for count data. The Laplace mechanism underlies deployed systems from the US Census Bureau's tabulations to telemetry collection in privacy-preserving analytics pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
