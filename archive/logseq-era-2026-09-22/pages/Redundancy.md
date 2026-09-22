public:: true

# Redundancy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:redundancy",
  "@type": "Page",
  "vc:slug": "redundancy",
  "title": "Redundancy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:redundancy",
  "@type": "Class",
  "label": "Redundancy",
  "definition": "Redundancy is the deliberate duplication of components, data, or pathways in a system so that the failure of any single element does not cause overall failure. It is a foundational technique for fault tolerance, implemented through replicas, standby nodes, mirrored storage, and multiple network routes. By eliminating single points of failure, redundancy raises availability at the cost of additional resources.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:system-architecture", "label": "System Architecture"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"},
      {"@id": "urn:ngm:class:reliability-engineering", "label": "Reliability Engineering"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Redundancy is the duplication of system elements to remove single points of failure, forming the backbone of [[Fault Tolerance]] and a core concern of [[Reliability Engineering]].
- ### Content
  - Patterns range from active-active and active-passive replication to N+1 hardware provisioning and geographic distribution across availability zones. Designers balance the cost of extra capacity against the target availability, often combining redundancy with health checks and automatic failover.
