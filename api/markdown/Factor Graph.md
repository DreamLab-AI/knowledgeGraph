public:: true

# Factor Graph

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:factor-graph", "@type": "Page", "title": "Factor Graph", "vc:slug": "factor-graph", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:factor-graph",
  "@type": "Class",
  "label": "Factor Graph",
  "definition": "A factor graph is a bipartite graphical model that factorises a global function into a product of local factors, connecting variable nodes to the factor nodes that constrain them. It makes the structure of an inference problem explicit and supports efficient message-passing algorithms. In robotics it is the dominant representation for state estimation problems such as SLAM and sensor fusion.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphical-model",
      "label": "Graphical Model"
    },
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Graphical Model"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bayes-filter",
        "label": "Bayes Filter"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Graphical Model"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
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
  - A bipartite [[Graphical Model]] linking variables to the factors that constrain them.
  - Factorises a joint function for efficient [[Bayesian Inference]].
  - The standard formulation for [[SLAM]] and [[Sensor Fusion]] in robotics.
- ### Overview
  - Variable nodes hold unknown states; factor nodes encode measurements and priors.
  - Belief propagation and nonlinear least-squares exploit the sparse structure.
  - Generalises Bayesian networks and Markov random fields for inference.
- ### Mechanisms
  - Factorisation exposes conditional independence and sparsity.
  - Message passing propagates beliefs between variables and factors.
  - Maximum-a-posteriori estimation solves a sparse nonlinear optimisation.
  - Incremental smoothing reuses computation as new measurements arrive.
- ### Applications
  - Pose-graph and landmark-based SLAM.
  - Multi-sensor fusion for localisation.
  - Calibration and trajectory estimation.
- ### Relationships
  - subClassOf:: [[Graphical Model]]
  - partOf:: [[Graphical Model]]
  - hasPart:: [[Probability Distribution]]
  - uses:: [[Bayesian Inference]]
  - uses:: [[Linear Algebra]]
  - enables:: [[SLAM]]
  - enables:: [[Sensor Fusion]]
  - supports:: [[Pose Estimation]]
  - dependsOn:: [[Bayesian Inference]]
  - relatedTo:: [[Bayes Filter]]
  - relatedTo:: [[Kalman Filter]]
  - relatedTo:: [[Graphical Model]]
  - relatedTo:: [[Sensor Fusion]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
