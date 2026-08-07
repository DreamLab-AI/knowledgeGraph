public:: true

# Quasi Monte Carlo

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:quasi-monte-carlo", "@type":"Page", "title":"Quasi Monte Carlo", "vc:slug":"quasi-monte-carlo", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:quasi-monte-carlo",
  "@type": "Class",
  "label": "Quasi Monte Carlo",
  "definition": "Quasi-Monte Carlo (QMC) is a family of numerical integration and sampling methods that replace the pseudo-random points of classical Monte Carlo with deterministic low-discrepancy sequences. By spreading sample points more evenly across the integration domain, QMC achieves faster asymptotic convergence than standard Monte Carlo for many smooth, moderate-dimensional integrals. It is widely used in computational finance, computer graphics, and uncertainty quantification.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:numerical-methods",
      "label": "Numerical Methods"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:variance-reduction",
        "label": "Variance Reduction"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:random-sampling",
        "label": "Random Sampling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:variance-reduction",
        "label": "Variance Reduction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-graphics",
        "label": "Computer Graphics"
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
	- **Quasi Monte Carlo** is a deterministic variant of [[Monte Carlo Integration]] that draws sample points from low-discrepancy sequences instead of pseudo-random numbers, so the points cover the domain more uniformly. It is a core technique in [[Numerical Methods]] and is closely related to [[Variance Reduction]] and [[Sampling]] theory.
	- Where ordinary Monte Carlo error shrinks at a rate proportional to one over the square root of the sample count, QMC can approach a rate near one over the sample count for sufficiently smooth integrands, making it markedly more efficient for many practical problems.
- ### Overview
	- The motivating insight is that the slow convergence of Monte Carlo arises partly from the clustering and gaps that random points exhibit. Low-discrepancy (or "quasi-random") sequences such as Sobol, Halton, and Faure sequences are constructed to fill the unit hypercube as evenly as possible.
	- The Koksma–Hlawka inequality bounds QMC error by the product of the integrand's variation and the discrepancy of the point set, formalising why more uniform points reduce error. The advantage degrades gracefully as dimension and integrand roughness increase.
	- Randomised QMC blends the two paradigms by applying random shifts or scrambles to a low-discrepancy set, recovering unbiased error estimates while retaining most of the convergence benefit.
- ### Mechanisms
	- Generates deterministic low-discrepancy sequences (Sobol, Halton, Faure, lattice rules) rather than independent pseudo-random draws.
	- Measures point-set quality by discrepancy, a uniformity metric tied to the worst-case integration error.
	- Achieves near-linear convergence for smooth integrands of moderate effective dimension.
	- Combines with [[Variance Reduction]] and dimension-reduction transforms to extend its effective reach.
	- Supports randomised scrambling for unbiased confidence intervals.
- ### Applications
	- Pricing of high-dimensional financial derivatives and risk integrals where many correlated factors must be integrated.
	- Light-transport and rendering integrals in computer graphics, where QMC reduces visible noise.
	- Uncertainty quantification and sensitivity analysis in engineering and the physical sciences.
	- Bayesian computation and expectation estimation as a faster alternative to plain [[Importance Sampling]].
- ### Relationships
  - subClassOf:: [[Numerical Methods]]
	- partOf:: [[Numerical Methods]]
	- hasPart:: [[Variance Reduction]]
	- contrastsWith:: [[Monte Carlo Integration]]
	- uses:: [[Sampling]]
	- uses:: [[Random Sampling]]
	- enables:: [[Variance Reduction]]
	- relatedTo:: [[Importance Sampling]]
	- relatedTo:: [[Statistics]]
	- relatedTo:: [[Stochastic Process]]
	- supports:: [[Numerical Methods]]
	- supports:: [[Uncertainty Quantification]]
	- dependsOn:: [[Sampling]]
	- implements:: [[Simulation]]
	- bridgesTo:: [[Computer Graphics]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
