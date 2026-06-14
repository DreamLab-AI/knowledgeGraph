public:: true

# RTAB-Map
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rtab-map",
  "@type": "Page",
  "vc:slug": "rtab-map",
  "title": "RTAB-Map",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rtab-map",
  "@type": "Class",
  "label": "RTAB-Map",
  "definition": "RTAB-Map (Real-Time Appearance-Based Mapping) is an open-source library for RGB-D, stereo, and lidar graph-based SLAM with a memory-management scheme that bounds computation for large-scale, long-term operation. Its core is an appearance-based loop-closure detector that recognises previously visited places to correct accumulated drift. It is widely used on ground robots to build consistent metric and topological maps.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:ground-robot", "label": "Ground Robot"}, {"@id": "urn:ngm:class:topological-map", "label": "Topological Map"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - RTAB-Map is an appearance-based graph SLAM library with loop closure, implemented on a [[Ground Robot]] to build a [[Topological Map]] alongside dense metric maps.
- ### Content
  - Its memory management retains recent and salient locations in working memory while moving older nodes to long-term memory, keeping loop-closure detection real-time even over large areas. Recognising revisited places lets it correct drift and produce globally consistent maps.
