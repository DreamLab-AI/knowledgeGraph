public:: true

# Graph Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11",
  "@type": "Page",
  "vc:slug": "graph-search",
  "title": "Graph Search",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Search"
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
  "@id": "urn:ngm:class:graph-search",
  "@type": "Class",
  "label": "Graph Search",
  "definition": "Algorithms that systematically explore graph-structured state spaces to find optimal or feasible paths between configurations, forming the computational foundation for robot motion planning, task planning, and navigation. Classical methods (BFS, Dijkstra, A*) guarantee completeness or optimality on discrete graphs; sampling-based variants (RRT, PRM) address high-dimensional continuous configuration spaces.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-algorithms",
        "label": "Graph Algorithms"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graph-neural-network",
        "label": "Graph Neural Network"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graph-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11"
  },
  "vc:resolutions": [],
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
  - Algorithms that systematically explore graph-structured state spaces to find optimal or feasible paths between configurations, forming the computational foundation for robot motion planning, task planning, and navigation. Classical methods (BFS, Dijkstra, A*) guarantee completeness or optimality on discrete graphs; sampling-based variants (RRT, PRM) address high-dimensional continuous configuration spaces.

- ### Semantic Classification
  - owl-class:: infrastructure:GraphSearch
  - owl-role:: Concept

- ### Relationships
  - Uses: [[Graph Algorithms]], [[Knowledge Representation]]
  - Enables: [[Motion Planning]], [[Navigation]]
  - Related To: [[Graph Neural Network]], [[Knowledge Graph]]

- ### Content
  term-id: RB-9009
  domain: rb
  # GraphSearch
  Graph Search refers to algorithms that explore graph-structured state spaces to find optimal or feasible paths between configurations, forming the computational foundation for robot motion planning, task planning, and navigation. These algorithms systematically explore nodes (states) and edges (transitions) to identify paths satisfying optimality criteria and constraint satisfaction.
  Classical algorithms include breadth-first search (BFS) for unweighted graphs, Dijkstra's algorithm for weighted graphs, and A* search incorporating heuristics for informed exploration. Advanced variants like D* and D* Lite enable efficient replanning when environment changes occur, while RRT (Rapidly-exploring Random Trees) and PRM (Probabilistic Roadmaps) handle high-dimensional configuration spaces through sampling-based approaches.
  Applications span path planning for mobile robots in static and dynamic environments, manipulation planning for robotic arms avoiding obstacles, multi-robot coordination optimizing collective behavior, and task-level planning searching through action sequences. Graph search algorithms trade off completeness guarantees, optimality properties, and computational efficiency based on problem characteristics.
  Contemporary research addresses anytime algorithms that improve solutions with additional computation time, incremental search techniques reusing previous search efforts, learning-based heuristics derived from experience data, and parallel search implementations leveraging GPU acceleration. Recent work explores neural network-guided search, integrating learned value functions to accelerate exploration, and graph neural networks for learning problem-specific heuristics from training data across multiple planning instances.
  - LaValle, S.M. (2006). Planning Algorithms. Cambridge University Press
  - Likhachev, M., & Ferguson, D. (2009). "Planning Long Dynamically Feasible Maneuvers for Autonomous Vehicles." International Journal of Robotics Research, 28(8), 933-945
  - Karaman, S., & Frazzoli, E. (2011). "Sampling-based algorithms for optimal motion planning." International Journal of Robotics Research, 30(7), 846-894
  - Gammell, J.D., et al. (2014). "Informed RRT*: Optimal sampling-based path planning focused via direct sampling of an admissible ellipsoidal heuristic." IEEE/RSJ International Conference on Intelligent Robots and Systems, 2997-3004

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
