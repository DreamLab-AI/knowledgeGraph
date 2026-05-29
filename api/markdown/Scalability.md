public:: true

# Scalability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scalability",
  "@type": "Page",
  "vc:slug": "scalability",
  "title": "Scalability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scalability",
  "@type": "Class",
  "label": "Scalability",
  "definition": "Scalability is the property of a system that describes its capacity to handle increasing workloads by adding resources, without proportionate degradation in performance, cost efficiency, or reliability. Horizontal scalability adds more nodes to a distributed cluster; vertical scalability increases the resources of existing nodes. In distributed systems, achieving linear or near-linear scalability requires careful attention to coordination overhead, data partitioning strategies, and consistency trade-offs as captured by the CAP theorem. Scalability is a first-order design concern in cloud-native architectures, blockchain networks, and AI inference platforms serving large user populations.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:scalable-architecture", "label": "Scalable Architecture"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:kubernetes", "label": "Kubernetes"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:scalability-pattern", "label": "Scalability Pattern"},
      {"@id": "urn:ngm:class:performance-optimization", "label": "Performance Optimization"},
      {"@id": "urn:ngm:class:distributed-architecture", "label": "Distributed Architecture"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:resilience", "label": "Resilience"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Scalability]] is the systemic property enabling a software or infrastructure system to handle growing workloads by adding resources—horizontal or vertical—whilst maintaining performance and reliability, achieved through [[Distributed Systems]] design, [[Microservices Architecture]] decomposition, and [[Kubernetes]] orchestration patterns.
- ### Relationships
  - Scalability is an attribute of [[Scalable Architecture]] systems. It is operationalised through [[Distributed Systems]] coordination, [[Microservices Architecture]] decomposition, and [[Kubernetes]] workload orchestration. It enables [[High-Performance Computing]] capacity and [[Fault Tolerance]] through redundancy. It is characterised by [[Scalability Pattern]] catalogues, measured via [[Performance Optimization]] metrics, implemented in [[Distributed Architecture]] designs, and studied in domain contexts including [[Blockchain Scalability]] challenges. System [[Resilience]] is a closely related quality attribute.
- ### Content
  - Scalability has been a central concern of distributed systems engineering since the early Internet era, but its importance has grown substantially with the rise of cloud computing, mobile applications, and AI workloads. The ability to serve millions of simultaneous users or process petabytes of data daily is no longer a luxury reserved for web giants—it is a baseline expectation for any commercially deployed digital service, and architectural decisions made early in a system's life have long-lasting consequences for its ultimate scale ceiling.

  - Two primary scalability strategies exist: vertical scaling, which involves adding CPU, memory, or storage capacity to existing nodes, and horizontal scaling, which adds more nodes to distribute load. Vertical scaling is simpler to implement but has physical and economic limits; horizontal scaling offers theoretically unbounded capacity but introduces complexity in distributed coordination, state management, and network communication. Most modern architectures favour stateless horizontally scalable service tiers backed by scalable data stores such as distributed SQL or NoSQL databases.

  - Data partitioning (sharding) is a fundamental horizontal scalability technique. Partitioning schemes based on hash, range, or geographic criteria distribute data across nodes such that query traffic is balanced and cross-partition operations are minimised. Consistent hashing, popularised by Amazon's Dynamo paper, enables partition rebalancing when nodes join or leave a cluster with minimal data movement. Partition design requires co-design with application access patterns to avoid hot-spots that negate the benefits of distribution.

  - Blockchain scalability presents a distinct challenge: decentralisation, security, and scalability form the so-called "trilemma" in which optimising for any two properties constrains the third. Layer-2 scaling approaches such as payment channels, rollups, and state channels achieve throughput improvements by moving computation off-chain whilst retaining on-chain security guarantees. These innovations mirror techniques from distributed database engineering—such as write-ahead logging and materialised views—adapted to the adversarial, trustless context of public blockchains.
