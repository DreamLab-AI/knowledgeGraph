public:: true

# Rapidly Exploring Random Tree

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rapidly-exploring-random-tree",
  "@type": "Page",
  "title": "Rapidly Exploring Random Tree",
  "vc:slug": "rapidly-exploring-random-tree",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rapidly-exploring-random-tree",
  "@type": "Class",
  "label": "Rapidly Exploring Random Tree",
  "definition": "A Rapidly Exploring Random Tree (RRT) is a sampling-based motion-planning algorithm that incrementally builds a space-filling tree by drawing random samples from the configuration space and extending the tree toward each sample. It efficiently explores high-dimensional spaces while respecting kinematic and obstacle constraints, and its variants such as RRT* add asymptotic optimality. RRT is widely used for robot path planning where the free space is too large or complex for grid-based search.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sampling-based-planning",
      "label": "Sampling Based Planning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:sampling-based-planning",
        "label": "Sampling Based Planning"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sampling-based-planning",
        "label": "Sampling Based Planning"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:configuration-space",
        "label": "Configuration Space"
      },
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
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
  - [[Sampling Based Planning]]
  - [[Motion Planning]]
  - [[Configuration Space]]
  - [[Collision Detection]]
  - Rapidly Exploring Random Tree is defined within the [[Sampling Based Planning]] area of the robotics domain.
- ### Overview
  - RRT addresses the curse of dimensionality in motion planning by avoiding explicit discretisation of the configuration space. Instead it grows a tree rooted at the start state, biasing exploration toward unexplored regions through uniform random sampling. Because the probability of selecting a node for extension is proportional to the Voronoi region it occupies, the tree rapidly reaches into large empty areas — the property that gives the algorithm its name. Variants improve path quality, connect bidirectional trees, or incorporate dynamics.
- ### Mechanisms
  - Random sampling of the configuration space to generate candidate target states.
  - Nearest-neighbour selection to find the existing tree node closest to each sample.
  - Local steering that extends the tree toward the sample by a bounded step, subject to collision checking.
  - Voronoi bias that naturally pulls growth toward unexplored regions of free space.
  - RRT* rewiring that reconnects the tree to achieve asymptotic optimality over successive samples.
- ### Applications
  - Manipulator arm planning in cluttered workspaces with many degrees of freedom.
  - Mobile robot and autonomous vehicle path generation through obstacle fields.
  - Aerial and underwater vehicle trajectory planning under kinodynamic constraints.
  - Real-time replanning in dynamic environments where obstacles move.
- ### Relationships
  - subClassOf:: [[Sampling Based Planning]]
  - partOf:: [[Sampling Based Planning]]
  - partOf:: [[Motion Planning]]
  - implements:: [[Sampling Based Planning]]
  - implements:: [[Path Planning]]
  - uses:: [[Configuration Space]]
  - uses:: [[Collision Detection]]
  - requires:: [[Collision Detection]]
  - enables:: [[Autonomous Navigation]]
  - supports:: [[Motion Planning]]
  - relatedTo:: [[Path Planning]]
  - relatedTo:: [[Robot Operating System]]
  - contrastsWith:: [[Path Planning]]
  - bridgesTo:: [[Autonomous Navigation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
