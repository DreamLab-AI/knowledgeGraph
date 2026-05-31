public:: true

# Visual SLAM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:visual-slam",
  "@type": "Page",
  "vc:slug": "visual-slam",
  "title": "Visual SLAM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:visual-slam",
  "@type": "Class",
  "label": "Visual SLAM",
  "definition": "Visual simultaneous localisation and mapping (Visual SLAM) is the process of concurrently estimating a camera's trajectory and reconstructing a map of an unknown environment using image data alone or fused with inertial measurements. It combines feature tracking or direct photometric alignment with pose-graph or bundle-adjustment optimisation and loop closure. Visual SLAM is foundational to AR headsets, drones, and mobile robots that lack external positioning.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robot Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}, {"@id": "urn:ngm:class:visual-place-recognition", "label": "Visual Place Recognition"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Visual SLAM jointly recovers camera pose and scene structure from imagery; it draws on [[Depth Estimation]] for metric scale and uses [[Visual Place Recognition]] to close loops and bound drift.
- ### Content
  - Implementations divide into feature-based (e.g. ORB-SLAM) and direct (e.g. DSO, LSD-SLAM) families, often extended with inertial fusion (VIO) for robustness. Core components are a front-end tracker, a back-end optimiser performing bundle adjustment over keyframes, and loop-closure detection; trade-offs centre on accuracy, computational budget, and resilience to texture-poor or dynamic scenes.
