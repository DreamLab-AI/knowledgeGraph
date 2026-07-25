public:: true

# Scientific Machine Learning

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:scientific-machine-learning",
  "@type": "Page",
  "title": "Scientific Machine Learning",
  "vc:slug": "scientific-machine-learning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scientific-machine-learning",
  "@type": "Class",
  "label": "Scientific Machine Learning",
  "definition": "Scientific machine learning is the discipline that fuses data-driven learning with the governing equations, conservation laws and mechanistic structure of the physical sciences. It embeds domain knowledge such as differential equations and symmetries directly into model architectures and loss functions so that learned models remain physically consistent, data-efficient and extrapolative. The field spans surrogate modelling of expensive simulators, discovery of governing equations from data, and hybrid models that blend numerical solvers with neural components.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    },
    {
      "@id": "urn:ngm:class:scientific-discovery",
      "label": "Scientific Discovery"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      },
      {
        "@id": "urn:ngm:class:differential-equations",
        "label": "Differential Equations"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:differential-equations",
        "label": "Differential Equations"
      },
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:differential-equations",
        "label": "Differential Equations"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Scientific machine learning is the discipline that fuses data-driven learning with the governing equations, conservation laws and mechanistic structure of the physical sciences. It embeds domain knowledge such as differential equations and symmetries directly into model architectures and loss functions so that learned models remain physically consistent, data-efficient and extrapolative. The field spans surrogate modelling of expensive simulators, discovery of governing equations from data, and hybrid models that blend numerical solvers with neural components.
  - Related core concepts: [[Machine Learning]], [[Scientific Computing]], [[Differential Equations]], [[Deep Learning]].
- ### Overview
  - Scientific machine learning responds to a recurring problem in computational science: purely data-driven models ignore hard-won physical laws and generalise poorly, while traditional simulators are accurate but slow and inflexible. By encoding mechanistic priors into learnable models, the field obtains predictors that respect physics, train from sparse and noisy measurements, and accelerate simulation by orders of magnitude.
  - It is modelled as a subclass of [[Machine Learning]] within the machine-learning domain.
  - A defining feature of scientific machine learning is differentiability through the physics. By implementing numerical solvers in automatic-differentiation frameworks, gradients can flow from a downstream loss back through the simulator to its parameters, unifying calibration, control and learning in a single optimisation. This blurs the historical boundary between simulation and statistical inference.
  - The field is data-efficient by design: because mechanistic constraints supply much of the inductive bias that a purely data-driven network would otherwise have to learn, models can be trained from sparse, noisy or partial observations that would be insufficient for an unconstrained network.
- ### Mechanisms
  - Physics-informed losses: residuals of governing differential equations are added to the training objective so predictions satisfy known dynamics.
  - Neural surrogates: learned models approximate expensive numerical solvers for rapid forward and inverse evaluation.
  - Equation discovery: sparse regression and symbolic methods recover governing equations directly from observed trajectories.
  - Hybrid solvers: differentiable numerical integrators are composed with neural components for end-to-end training.
- ### Applications
  - Surrogate modelling for fluid dynamics, climate and materials simulation.
  - Inverse problems and data assimilation in geophysics and medical imaging.
  - Accelerating digital twins and design optimisation loops in engineering.
- ### Considerations
  - Balancing data-fit and physics-residual terms in the loss is delicate; poor weighting can let one term dominate and degrade the other.
  - Stiff dynamics and multi-scale phenomena remain challenging for naive physics-informed training, motivating curriculum and domain-decomposition strategies.
  - Verification against trusted numerical baselines is essential before scientific conclusions are drawn from a learned surrogate.
- ### Relationships
  - subClassOf:: [[Machine Learning]]
  - supports:: [[Scientific Computing]]
  - supports:: [[Differential Equations]]
  - bridgesTo:: [[Scientific Computing]]
  - bridgesTo:: [[Deep Learning]]
  - hasPart:: [[Neural Network]]
  - uses:: [[Differential Equations]]
  - uses:: [[Optimisation]]
  - requires:: [[Differential Equations]]
  - enables:: [[Scientific Computing]]
  - implements:: [[Deep Learning]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Neural Network]]
  - partOf:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
