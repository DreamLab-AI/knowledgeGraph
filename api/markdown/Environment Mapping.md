public:: true

# Environment Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:environment-mapping",
  "@type": "Page",
  "vc:slug": "environment-mapping",
  "title": "Environment Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:environment-mapping",
  "@type": "Class",
  "label": "Environment Mapping",
  "definition": "Environment mapping is the robotics and computer-vision process of building a spatial representation of a robot's surroundings from sensor data such as lidar, cameras, or depth sensors. Representations include occupancy grids, point clouds, and topological or semantic maps that record obstacles, free space, and landmarks. Accurate mapping is a prerequisite for localisation, path planning, and safe autonomous navigation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robot Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:occupancy-grid", "label": "Occupancy Grid"}, {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Environment mapping builds a spatial model of a robot's surroundings from sensor data, producing structures such as the [[Occupancy Grid]] and enabling navigation for a [[Mobile Robot Platform]].
- ### Content
  - Mapping fuses lidar, depth, and visual input into occupancy grids, point clouds, or semantic maps. Combined with localisation it forms the SLAM problem and underpins collision-free planning in unknown environments.
