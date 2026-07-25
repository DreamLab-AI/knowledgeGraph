public:: true

# Long-Range Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:long-range-navigation",
  "@type": "Page",
  "vc:slug": "long-range-navigation",
  "title": "Long-Range Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:long-range-navigation",
  "@type": "Class",
  "label": "Long-Range Navigation",
  "definition": "Long-range navigation is the capability of an autonomous agent to plan and execute travel over large distances and extended time horizons, beyond the range of local sensors. It typically fuses global positioning, topological or metric maps, and waypoint planning to maintain a coherent route across kilometre-scale or larger environments. It contrasts with short-range reactive navigation by emphasising global consistency and goal-directed path planning.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:topological-map", "label": "Topological Map"}, {"@id": "urn:ngm:class:gps", "label": "Gps"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Long-range navigation enables an agent to plan and follow routes over large distances using global references rather than local perception alone. It is commonly enabled by a [[Topological Map]] and absolute positioning from [[GPS]].
- ### Content
  - Systems combine coarse global planners with finer local controllers, hierarchically decomposing a long route into reachable segments. Robustness depends on map quality, localisation drift correction, and the ability to re-plan when waypoints become unreachable.
