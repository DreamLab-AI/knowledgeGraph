public:: true

# Random Number Generator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:random-number-generator",
  "@type": "Page",
  "vc:slug": "random-number-generator",
  "title": "Random Number Generator",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:random-number-generator",
  "@type": "Class",
  "label": "Random Number Generator",
  "definition": "A random number generator (RNG) produces sequences of numbers that lack predictable pattern, either through deterministic algorithms seeded from an initial state (pseudo-random) or from physical entropy sources (true random). RNGs are essential to stochastic sampling, Monte Carlo methods, simulation, and cryptographic key generation. Quality is judged by statistical uniformity, period length, and, for security uses, unpredictability.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-development", "label": "Software Development"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"},
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A random number generator yields unpredictable or statistically uniform sequences via algorithmic or physical entropy. It is required by [[Sampling]] procedures and by the resampling step of a [[Particle Filter]].
- ### Content
  - Pseudo-random generators (e.g. Mersenne Twister, PCG) are fast and reproducible from a seed, suiting simulation. Cryptographically secure RNGs add unpredictability guarantees for keys and nonces. In probabilistic state estimation, high-quality RNGs ensure unbiased Monte Carlo sampling, while poor generators can introduce correlations that bias filter estimates.
