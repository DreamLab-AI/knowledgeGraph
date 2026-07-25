public:: true

# Probabilistic Roadmap

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:probabilistic-roadmap",
  "@type": "Page",
  "title": "Probabilistic Roadmap",
  "vc:slug": "probabilistic-roadmap",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:probabilistic-roadmap",
  "@type": "Class",
  "label": "Probabilistic Roadmap",
  "definition": "A probabilistic roadmap (PRM) is a sampling-based motion-planning algorithm that constructs a graph representation of the free configuration space of a robot by randomly sampling collision-free configurations and connecting nearby configurations with local path planners. In a preprocessing phase, many random configurations are sampled and validated against the robot's collision model; valid configurations become nodes and successful local connections become edges. At query time, start and goal configurations are connected to the roadmap and a graph-search algorithm finds a path. PRMs are effective in high-dimensional configuration spaces where deterministic grid-based planners are computationally infeasible.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sampling-based-planning", "label": "Sampling Based Planning"},
      {"@id": "urn:ngm:class:configuration-space", "label": "Configuration Space"},
      {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"},
      {"@id": "urn:ngm:class:graph-search", "label": "Graph Search"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rapidly-exploring-random-tree", "label": "Rapidly Exploring Random Tree"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:robot-arm-planning", "label": "Robot Arm Planning"},
      {"@id": "urn:ngm:class:multi-query-planning", "label": "Multi Query Planning"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:configuration-sample", "label": "Configuration Sample"},
      {"@id": "urn:ngm:class:local-planner", "label": "Local Planner"},
      {"@id": "urn:ngm:class:roadmap-graph", "label": "Roadmap Graph"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:random-sampling", "label": "Random Sampling"},
      {"@id": "urn:ngm:class:obstacle-model", "label": "Obstacle Model"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-manipulation", "label": "Robot Manipulation"},
      {"@id": "urn:ngm:class:high-dimensional-planning", "label": "High Dimensional Planning"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:grid-based-planning", "label": "Grid Based Planning"},
      {"@id": "urn:ngm:class:potential-field-planning", "label": "Potential Field Planning"}
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
  - [[Probabilistic Roadmap]] is a [[Sampling Based Planning]] algorithm that builds a [[Roadmap Graph]] of the robot's free [[Configuration Space]] through random sampling and [[Collision Detection]]-validated connections.
  - A preprocessing phase constructs the roadmap once; a [[Graph Search]] algorithm (typically A* or Dijkstra) answers multiple planning queries at low cost, making PRM efficient for [[Multi Query Planning]] in static environments.
  - Particularly effective for high-dimensional spaces such as multi-joint [[Robot Arm Planning]], where deterministic grid decompositions are intractable.

- ### Overview
  - The Probabilistic Roadmap Method was proposed by Kavraki et al. in 1996 and became one of the foundational algorithms in robot motion planning. It addresses the "curse of dimensionality" that makes deterministic planning infeasible for robots with many degrees of freedom.
  - The algorithm operates in two phases. In the learning phase, random collision-free configurations are sampled from the configuration space and connected by a local planner (often a straight-line interpolator in C-space) when the connection is collision-free. The result is a dense graph approximating the topology of the free space. In the query phase, the start and goal are added to the roadmap and a shortest-path algorithm finds a route.
  - PRM shines in static, high-dimensional environments where the same roadmap can be reused across many queries. For single-query problems or dynamic environments, [[Rapidly Exploring Random Tree]] variants are often preferred.

- ### Key aspects
  - **Sampling strategy** — uniform random sampling provides probabilistic completeness; halton sequences or Gaussian sampling near obstacles improve coverage of narrow passages.
  - **Local planner** — simple linear interpolation in joint space works for many robots; more complex planners handle kinodynamic constraints.
  - **Narrow passages** — thin corridors in configuration space are rarely sampled, causing connectivity failures; bridge sampling and other techniques address this weakness.
  - **Lazy evaluation** — collision checking is expensive; lazy PRM defers edge collision checks to query time, reducing preprocessing cost.

- ### Applications
  - Planning collision-free trajectories for industrial robot arms with 6–7 degrees of freedom.
  - Assembly planning for articulated mechanisms where parts must be inserted through narrow clearances.
  - Animation of virtual characters navigating complex 3D environments.
  - Protein folding analysis using C-space analogy for molecular conformation planning.

- ### Mechanisms
  - **Learning phase** — sample N random configurations; check each for collision; connect k-nearest valid neighbours with the local planner; store valid edges in the roadmap.
  - **Query phase** — connect start and goal to their nearest roadmap nodes; run Dijkstra or A* on the combined graph; smooth the returned path.
  - **Roadmap densification** — additional samples are added if connectivity is insufficient for a given query.

- ### Relationships
  - uses:: [[Sampling Based Planning]]
  - uses:: [[Configuration Space]]
  - uses:: [[Collision Detection]]
  - uses:: [[Graph Search]]
  - relatedTo:: [[Rapidly Exploring Random Tree]]
  - relatedTo:: [[Motion Planning]]
  - relatedTo:: [[Path Planning]]
  - relatedTo:: [[Robot Kinematics]]
  - enables:: [[Robot Arm Planning]]
  - enables:: [[Multi Query Planning]]
  - enables:: [[Autonomous Navigation]]
  - hasPart:: [[Configuration Sample]]
  - hasPart:: [[Local Planner]]
  - hasPart:: [[Roadmap Graph]]
  - dependsOn:: [[Random Sampling]]
  - dependsOn:: [[Obstacle Model]]
  - supports:: [[Robot Manipulation]]
  - supports:: [[High Dimensional Planning]]
  - contrastsWith:: [[Grid Based Planning]]
  - contrastsWith:: [[Potential Field Planning]]

- ### Provenance
  - updated:: 2026-06-15
