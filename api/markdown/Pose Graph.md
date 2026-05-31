public:: true

# Pose Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pose-graph",
  "@type": "Page",
  "vc:slug": "pose-graph",
  "title": "Pose Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pose-graph",
  "@type": "Class",
  "label": "Pose Graph",
  "definition": "A pose graph is a graph representation used in robotics where nodes are robot poses (positions and orientations) and edges encode relative spatial constraints derived from odometry or sensor measurements. Pose-graph optimisation finds the configuration of poses that best satisfies all constraints, correcting accumulated drift. It is the backbone of modern graph-based SLAM systems.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robot Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:topological-map", "label": "Topological Map"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A pose graph encodes robot poses as nodes and inter-pose spatial constraints as edges, optimised to minimise overall error. It is a structural component of [[Topological Map]] construction and graph-based SLAM.
- ### Content
  - Edges fuse relative motion estimates from odometry with loop-closure constraints detected when the robot revisits a place. Nonlinear least-squares solvers (e.g. Gauss-Newton, Levenberg-Marquardt) optimise the graph to redistribute drift, producing globally consistent trajectories and maps even over large, looping environments.
