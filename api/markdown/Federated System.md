public:: true

# Federated System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:federated-system",
  "@type": "Page",
  "vc:slug": "federated-system",
  "title": "Federated System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:federated-system",
  "@type": "Class",
  "label": "Federated System",
  "definition": "A federated system is a distributed architecture composed of autonomous, independently operated nodes or servers that cooperate under shared protocols while retaining local control over their own data and policies. Unlike fully centralised systems, federation distributes authority across multiple operators, and unlike fully decentralised peer-to-peer networks, it relies on a finite set of identifiable, semi-trusted servers. This model underpins federated social networks, messaging, and consortium-style trust arrangements.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:fedimint", "label": "Fedimint"},
      {"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A federated system coordinates multiple autonomous servers under common protocols while preserving local control, occupying a middle ground between centralised and fully decentralised designs. It is the architectural basis for systems like [[Fedimint]] and the trust model of a [[Consortium Blockchain]], and is a class of [[Distributed Systems]].
- ### Content
  - Federation reduces single-point-of-failure and single-operator-control risks by distributing authority across a known set of cooperating nodes, while keeping coordination tractable through shared standards and inter-server protocols. Trade-offs include the need to govern membership and inter-operator trust, and reliance on the honesty and availability of a quorum of federation members rather than open, permissionless participation.
