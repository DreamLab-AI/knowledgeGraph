public:: true

# DDS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f7455094980915c998293ffacc8485d9cdec7393cefbc3f76e8a48f323617c93",
  "@type": "Page",
  "vc:slug": "dds",
  "title": "DDS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:robot-operating-system",
      "vc:label": "Robot Operating System"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:middleware",
      "vc:label": "Middleware"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DDS"
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
  "@id": "urn:ngm:class:dds",
  "@type": "Class",
  "label": "DDS",
  "definition": "DDS, the Data Distribution Service, is an Object Management Group standard for a publish-subscribe middleware that distributes real-time data between distributed system components.",
  "domain": "software-engineering",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:middleware",
      "label": "Middleware"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dds:f79fe6c5dd8b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f7455094980915c998293ffacc8485d9cdec7393cefbc3f76e8a48f323617c93"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Operating System]]",
      "resolved": "urn:visionflow:linked:robot-operating-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware]]",
      "resolved": "urn:visionflow:linked:middleware",
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
  - DDS, the Data Distribution Service, is an Object Management Group standard for a publish-subscribe middleware that distributes real-time data between distributed system components.

- ### Semantic Classification
  - owl-class:: software-engineering:DDS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Middleware]]
  - bridges-to:: [[Distributed Systems]]
  - requires:: [[Network Protocol]]
  - enables:: [[Robot Operating System]]

- ### Content
  - DDS provides a data-centric publish-subscribe model in which applications publish and subscribe to named topics. It offers configurable quality of service controls for reliability, durability, and timing, suited to real-time and embedded systems.
  - DDS is used in robotics, aerospace, defence, and industrial control. ROS 2 adopts DDS as its default communication middleware, building its messaging layer on top of the standard.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
