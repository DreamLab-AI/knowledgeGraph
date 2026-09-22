public:: true

# Floating-Point Arithmetic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:floating-point-arithmetic",
  "@type": "Page",
  "vc:slug": "floating-point-arithmetic",
  "title": "Floating-Point Arithmetic",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:floating-point-arithmetic",
  "@type": "Class",
  "label": "Floating-Point Arithmetic",
  "definition": "Floating-point arithmetic is a method of representing and computing with real numbers on digital hardware using a sign, a fixed-precision significand, and an exponent, most commonly standardised by IEEE 754. It trades exactness for a wide dynamic range, so operations introduce rounding error, and properties such as associativity no longer hold exactly. Understanding its precision limits, rounding modes, and special values is essential for numerically reliable simulation, graphics, and machine learning.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:computing-infrastructure", "label": "Computing Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"},
      {"@id": "urn:ngm:class:model-optimisation-and-performance", "label": "Model Optimisation and Performance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Floating-point arithmetic represents real numbers with finite precision via significand and exponent under IEEE 754, introducing rounding error that [[Collision Detection]] and [[Model Optimisation and Performance]] must account for. It is a foundational capability of [[Computing Infrastructure]].
- ### Content
  - Common formats range from 64-bit double and 32-bit single precision down to 16-bit and 8-bit formats used to accelerate neural-network training and inference. Reduced precision boosts throughput and lowers memory use but amplifies rounding and overflow risks, so practitioners manage numerical stability through careful scaling, mixed-precision schemes, and awareness of catastrophic cancellation and non-associativity.
