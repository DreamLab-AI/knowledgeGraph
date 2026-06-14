public:: true

# Last-Mile Delivery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:last-mile-delivery",
  "@type": "Page",
  "vc:slug": "last-mile-delivery",
  "title": "Last-Mile Delivery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:last-mile-delivery",
  "@type": "Class",
  "label": "Last-Mile Delivery",
  "definition": "Last-mile delivery is the final stage of a logistics chain in which goods move from a transport hub or distribution centre to the end recipient. It is typically the most expensive, time-sensitive and operationally complex segment because of fragmented destinations and traffic constraints. It is a primary target for automation through delivery robots, drones and route-optimisation systems.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"},
      {"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Last-mile delivery is the final, costliest leg of distribution; it is a key part of [[Logistics Optimization]] and is increasingly supported by autonomous a [[Ground Robot]] navigating sidewalks and roads to reach recipients.
- ### Content
  - Because it aggregates many short, low-density trips, the last mile dominates delivery cost and carbon footprint. Automation approaches range from sidewalk and curbside delivery robots to aerial drones and dynamic route optimisation, all of which depend on robust navigation, obstacle avoidance and planning under real-world uncertainty.
