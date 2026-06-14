public:: true
alias:: RB-1014-monte-carlo-localization

# Monte Carlo Localization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28de37c294a7bb6265eeae86b0834c9df7b57ac02f211862680698fb08f243ca",
  "@type": "Page",
  "vc:slug": "monte-carlo-localization",
  "title": "Monte Carlo Localization",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:global-localization",
      "vc:label": "Global Localization"
    },
    {
      "@id": "urn:visionflow:linked:global-localization-capability",
      "vc:label": "Global Localization Capability"
    },
    {
      "@id": "urn:visionflow:linked:importance-sampling",
      "vc:label": "Importance Sampling"
    },
    {
      "@id": "urn:visionflow:linked:kidnapped-robot-problem",
      "vc:label": "Kidnapped Robot Problem"
    },
    {
      "@id": "urn:visionflow:linked:map",
      "vc:label": "Map"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robots",
      "vc:label": "Mobile Robots"
    },
    {
      "@id": "urn:visionflow:linked:motion-model",
      "vc:label": "Motion Model"
    },
    {
      "@id": "urn:visionflow:linked:non-parametric",
      "vc:label": "Non-Parametric"
    },
    {
      "@id": "urn:visionflow:linked:particle-filter-theory",
      "vc:label": "Particle Filter Theory"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-methods",
      "vc:label": "Probabilistic Methods"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-robotics",
      "vc:label": "Probabilistic Robotics"
    },
    {
      "@id": "urn:visionflow:linked:rb-1008-odometry",
      "vc:label": "RB-1008-odometry"
    },
    {
      "@id": "urn:visionflow:linked:rb-1015-kalman-filter",
      "vc:label": "RB-1015-kalman-filter"
    },
    {
      "@id": "urn:visionflow:linked:sensor-measurements",
      "vc:label": "Sensor Measurements"
    },
    {
      "@id": "urn:visionflow:owl:class:bayes-filter",
      "vc:label": "Bayes Filter"
    },
    {
      "@id": "urn:visionflow:owl:class:localization",
      "vc:label": "Localization"
    },
    {
      "@id": "urn:visionflow:owl:class:particle-filter",
      "vc:label": "Particle Filter"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1014"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Monte Carlo Localization"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:monte-carlo-localization",
  "@type": "Class",
  "label": "Monte Carlo Localization",
  "definition": "A probabilistic localization algorithm that represents the robot's belief about its position using a set of weighted particles (samples), where each particle represents a hypothesis of the robot's pose. It implements a particle filter to recursively estimate the robot's pose distribution.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    },
    {
      "@id": "urn:ngm:class:rb-1013-localization",
      "label": "RB 1013 localization"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:map",
        "label": "Map"
      },
      {
        "@id": "urn:ngm:class:motion-model",
        "label": "Motion Model"
      },
      {
        "@id": "urn:ngm:class:sensor-measurements",
        "label": "Sensor Measurements"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:global-localization",
        "label": "Global Localization"
      },
      {
        "@id": "urn:ngm:class:kidnapped-robot-problem",
        "label": "Kidnapped Robot Problem"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
      },
      {
        "@id": "urn:ngm:class:rb-1008-odometry",
        "label": "RB-1008-odometry"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:monte-carlo-localization:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:28de37c294a7bb6265eeae86b0834c9df7b57ac02f211862680698fb08f243ca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Global Localization]]",
      "resolved": "urn:visionflow:linked:global-localization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Global Localization Capability]]",
      "resolved": "urn:visionflow:linked:global-localization-capability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Importance Sampling]]",
      "resolved": "urn:visionflow:linked:importance-sampling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kidnapped Robot Problem]]",
      "resolved": "urn:visionflow:linked:kidnapped-robot-problem",
      "kind": "StubLink"
    },
    {
      "raw": "[[Map]]",
      "resolved": "urn:visionflow:linked:map",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robots]]",
      "resolved": "urn:visionflow:linked:mobile-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Model]]",
      "resolved": "urn:visionflow:linked:motion-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[Non-Parametric]]",
      "resolved": "urn:visionflow:linked:non-parametric",
      "kind": "StubLink"
    },
    {
      "raw": "[[Particle Filter Theory]]",
      "resolved": "urn:visionflow:linked:particle-filter-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probabilistic Methods]]",
      "resolved": "urn:visionflow:linked:probabilistic-methods",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probabilistic Robotics]]",
      "resolved": "urn:visionflow:linked:probabilistic-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1008-odometry]]",
      "resolved": "urn:visionflow:linked:rb-1008-odometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1015-kalman-filter]]",
      "resolved": "urn:visionflow:linked:rb-1015-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Measurements]]",
      "resolved": "urn:visionflow:linked:sensor-measurements",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bayes Filter]]",
      "resolved": "urn:visionflow:owl:class:bayes-filter",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Localization]]",
      "resolved": "urn:visionflow:owl:class:localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Particle Filter]]",
      "resolved": "urn:visionflow:owl:class:particle-filter",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RB-1013-localization]]",
      "resolved": "urn:visionflow:owl:class:rb-1013-localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A probabilistic localization algorithm that represents the robot's belief about its position using a set of weighted particles (samples), where each particle represents a hypothesis of the robot's pose. It implements a particle filter to recursively estimate the robot's pose distribution.

- ### Semantic Classification
  - owl-class:: robotics:MonteCarloLocalization
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Probabilistic Methods]], [[Localization]]

- ### Relationships
  - is-subclass-of:: [[RB-1013-localization]]
  - requires:: [[Sensor Measurements]]
  - enables:: [[Global Localization]], [[Kidnapped Robot Problem]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[RB-1013-localization]]
  - is-instance-of:: [[Particle Filter]]
  - requires:: [[Map]]
  - requires:: [[Sensor Measurements]]
  - requires:: [[Motion Model]]
  - uses:: [[Importance Sampling]]
  - characterized-by:: [[Non-Parametric]], [[Global Localization Capability]]

  - #### Relationships
  - is-subclass-of:: [[RB-1013-localization]]
  - is-instance-of:: [[Particle Filter]], [[Bayes Filter]]
  - uses:: [[RB-1008-odometry]], [[Sensor Fusion]]
  - alternative-to:: [[RB-1015-kalman-filter]]
  - applied-in:: [[Mobile Robots]], [[SLAM]]
  - enables:: [[Global Localization]], [[Kidnapped Robot Problem]]

  - **Algorithm Overview**
  1. **Initialization**: Generate initial particle set
  2. **Prediction** (Motion Update): Move particles based on motion model
  3. **Update** (Measurement Update): Weight particles by measurement likelihood
  4. **Resampling**: Draw new particles proportional to weights
  5. **Iteration**: Repeat prediction-update-resampling

  - **Key Components**
  - **Particles**: Set of pose hypotheses {x₁, x₂, ..., xₙ}
  - **Weights**: Importance factors {w₁, w₂, ..., wₙ}
  - **Motion Model**: p(xₜ | xₜ₋₁, uₜ)
  - **Sensor Model**: p(zₜ | xₜ, m)
  - **Map**: Environmental representation

  - **Particle Representation**
  - Each particle: (x, y, θ, w)
  - x, y: Position coordinates
  - θ: Orientation (heading)
  - w: Weight (importance)
  - Typically 100-10,000 particles

  - **Motion Model (Prediction)**
  - Based on odometry or control inputs
  - Add noise to account for uncertainty
  - Sample from motion distribution
  - Particles spread according to motion

  - **Sensor Model (Update)**
  - Compute likelihood of sensor measurements
  - Compare expected vs actual sensor readings
  - Assign weights to particles
  - Higher weights for more likely poses

  - **Resampling**
  - **Purpose**: Focus particles on high-probability regions
  - **Methods**:
    - Multinomial Resampling
    - Stratified Resampling
    - Systematic Resampling
    - Low Variance Resampling (most efficient)
  - **Adaptive Resampling**: Only when needed (KLD-sampling)

  - **Advantages**
  - Solves global localization problem
  - Handles multi-modal distributions
  - Non-parametric (no Gaussian assumption)
  - Handles non-linear models naturally
  - Robust to sensor noise
  - Can recover from localization failures

  - **Limitations**
  - Computational cost (many particles needed)
  - Particle deprivation (all particles in wrong area)
  - Sensitive to motion and sensor models
  - Random resampling can lose diversity
  - Requires pre-existing map

  - **Variants and Improvements**
  - **Adaptive MCL**: Dynamic particle count
  - **KLD-Sampling**: Kullback-Leibler divergence-based sampling
  - **Mixture MCL**: Adds random particles to prevent divergence
  - **Augmented MCL**: Handles unexpected obstacles
  - **FastSLAM**: MCL extended to SLAM problem

  - **Parameter Tuning**
  - Number of particles (balance accuracy vs computation)
  - Motion noise parameters
  - Sensor noise parameters
  - Resampling threshold
  - Recovery mechanisms

  - **Applications**
  - Indoor mobile robot navigation
  - Museum tour guide robots
  - Warehouse automation
  - Service robots
  - RoboCup competition
  - Educational robotics

  - **Performance Characteristics**
  - Time Complexity: O(M) per iteration (M = particles)
  - Convergence: Usually within seconds
  - Accuracy: Centimeter-level with good sensors
  - Robustness: Handles ambiguous environments

  - **Comparison with Kalman Filter**
  - MCL: Multi-modal, non-parametric, global
  - KF: Unimodal, Gaussian, local tracking
  - MCL: Higher computational cost
  - KF: Requires linear/linearizable models

  - **Implementation Considerations**
  - Particle count vs available compute
  - Map resolution and representation
  - Sensor update frequency
  - Motion model accuracy
  - Handling symmetry in environment

  - **Quality Metrics**
  - authority-score:: 0.96
  - completeness:: 0.93
  - accuracy:: 0.95

- ### Provenance
  - sources:: [[Probabilistic Robotics]], [[Particle Filter Theory]]
  - migration-date:: 2026-04-26T00:00:00Z
