public:: true

# Costmap
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:costmap",
  "@type": "Page",
  "vc:slug": "costmap",
  "title": "Costmap",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:costmap",
  "@type": "Class",
  "label": "Costmap",
  "definition": "A costmap is a grid-based spatial data structure used in robot navigation that assigns a traversal cost to each cell of the environment, encoding obstacles, inflation zones, and free space. Local and global costmaps fuse sensor data and static maps so that planners can compute collision-free, low-cost paths. It is a core component of navigation stacks such as Nav2, where it underpins both global path planning and local trajectory control.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Robot Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:nav2", "label": "Nav2"}, {"@id": "urn:ngm:class:navigation", "label": "Navigation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A costmap is a layered occupancy grid used by [[Navigation]] systems that assigns a cost to each cell, representing obstacles and the desirability of traversing space. It is a key data structure consumed by [[Nav2]] planners.
- ### Content
  - Costmaps are typically composed of layered plugins (static, obstacle, inflation) that combine map priors with live sensor readings. Inflation layers expand obstacle costs outward to keep the robot footprint clear, while global and local costmaps operate at different update rates and spatial extents for planning versus reactive control.
