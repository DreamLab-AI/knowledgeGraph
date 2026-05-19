schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#GraphSearch
legacy_uri:: urn:visionclaw:concept:infrastructure:graph-search
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-f7ac48826833"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#GraphSearch"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Search"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:graph-search"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:graph-search"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:graph-search",
  "@type": "OntologyClass",
  "label": "Graph Search",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "GraphSearch is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - GraphSearch is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:GraphSearch
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
