public:: true

# Horizontal Scalability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:horizontal-scalability",
  "@type": "Page",
  "vc:slug": "horizontal-scalability",
  "title": "Horizontal Scalability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:horizontal-scalability",
  "@type": "Class",
  "label": "Horizontal Scalability",
  "definition": "Horizontal scalability is the capacity of a system to increase throughput by adding more independent nodes rather than upgrading a single machine (vertical scaling). It relies on partitioning work and state so that load can be distributed across commodity servers behind a balancer. Horizontal scaling underpins cloud-native and distributed architectures because it offers near-linear, fault-tolerant growth.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Horizontal scalability is the ability to grow capacity by adding nodes; it is a defining property enabled by [[Distributed Computing]] within the [[Distributed Systems Domain]].
- ### Content
  - Achieving it requires sharding or replicating state, stateless service tiers, and consistency strategies that tolerate partial failure. The pattern favours commodity hardware and elastic autoscaling, but introduces coordination, data-locality, and consistency trade-offs that vertical scaling avoids.
