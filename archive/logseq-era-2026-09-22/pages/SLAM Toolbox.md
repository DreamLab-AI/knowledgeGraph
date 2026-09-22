public:: true

# SLAM Toolbox
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:slam-toolbox",
  "@type": "Page",
  "vc:slug": "slam-toolbox",
  "title": "SLAM Toolbox",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:slam-toolbox",
  "@type": "Class",
  "label": "SLAM Toolbox",
  "definition": "SLAM Toolbox is an open-source ROS package for 2D simultaneous localisation and mapping using laser scan matching and pose-graph optimisation. It supports online mapping, lifelong mapping with map serialisation and continuation, and localisation against pre-built maps, making it a default mapping stack for indoor mobile robots. It is widely deployed on ground robots running the ROS navigation stack.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}, {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - SLAM Toolbox is an open-source ROS package for 2D LiDAR-based simultaneous localisation and mapping using pose-graph optimisation. It is used by a [[Ground Robot]] and by a [[Mobile Robot Platform]] to build and reuse maps.
- ### Content
  - It performs scan matching to construct a pose graph that is optimised to produce consistent occupancy maps, and its lifelong-mapping mode lets robots serialise, reload, and extend maps across sessions. Integration with the ROS Navigation2 stack makes it a standard choice for autonomous indoor navigation.
