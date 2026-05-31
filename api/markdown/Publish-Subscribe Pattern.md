public:: true

# Publish-Subscribe Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b24f213b2e78dd645e50a75696759438d8dfccb8b443cc9d71d4e060bd4aad43",
  "@type": "Page",
  "vc:slug": "publish-subscribe-pattern",
  "title": "Publish-Subscribe Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:message-queue",
      "vc:label": "Message Queue"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Publish-Subscribe Pattern"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:publish-subscribe-pattern",
  "@type": "Class",
  "label": "Publish-Subscribe Pattern",
  "definition": "A messaging pattern in which senders, called publishers, categorise messages into topics without knowledge of which receivers, called subscribers, will consume them. A broker or event channel delivers messages to interested subscribers.",
  "domain": "software-architecture",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:message-queue",
      "label": "Message Queue"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:publish-subscribe-pattern:57b6ba45247e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b24f213b2e78dd645e50a75696759438d8dfccb8b443cc9d71d4e060bd4aad43"
  },
  "vc:resolutions": [
    {
      "raw": "[[Message Queue]]",
      "resolved": "urn:visionflow:linked:message-queue",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Architecture]]",
      "resolved": "urn:visionflow:linked:software-architecture",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A messaging pattern in which senders, called publishers, categorise messages into topics without knowledge of which receivers, called subscribers, will consume them. A broker or event channel delivers messages to interested subscribers.

- ### Semantic Classification
  - owl-class:: software-architecture:PublishSubscribePattern
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Message Queue]]
  - bridges-to:: [[Software Architecture]]
  - requires:: [[Message Queue]]
  - enables:: [[Distributed Systems]]

- ### Content
  - The publish-subscribe pattern decouples producers and consumers of messages, allowing each to evolve independently and scale separately. Publishers emit events to named topics and subscribers register interest in those topics.
  - It is widely used in event-driven architectures and distributed systems, implemented by message brokers and streaming platforms. The decoupling improves modularity but introduces concerns around delivery guarantees and ordering.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
