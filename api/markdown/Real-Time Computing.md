public:: true

# Real-Time Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a3d1aaa8a17ac05a5dfcdc1d70ba80ae47be20b47ef68a747a64b5bbc8a7d087",
  "@type": "Page",
  "vc:slug": "real-time-computing",
  "title": "Real-Time Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:real-time-operating-system",
      "vc:label": "Real-Time Operating System"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Real-Time Computing"
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
  "@id": "urn:ngm:class:real-time-computing",
  "@type": "Class",
  "label": "Real-Time Computing",
  "definition": "Computing in which correctness depends not only on the logical result but also on meeting timing deadlines. Systems are classified as hard, firm, or soft real-time according to the consequences of missing a deadline.",
  "domain": "computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
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
  "@id": "urn:visionflow:annotation:link-resolutions:real-time-computing:43f1b2a3965d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a3d1aaa8a17ac05a5dfcdc1d70ba80ae47be20b47ef68a747a64b5bbc8a7d087"
  },
  "vc:resolutions": [
    {
      "raw": "[[Real-Time Operating System]]",
      "resolved": "urn:visionflow:linked:real-time-operating-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - Computing in which correctness depends not only on the logical result but also on meeting timing deadlines. Systems are classified as hard, firm, or soft real-time according to the consequences of missing a deadline.

- ### Semantic Classification
  - owl-class:: computing:RealTimeComputing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Latency]]
  - requires:: [[Real-Time Operating System]]
  - enables:: [[Embedded Systems]]

- ### Content
  - Real-time computing requires operations to complete within defined time bounds. In hard real-time systems a missed deadline is a failure, as in flight control, whereas soft real-time systems tolerate occasional lateness with degraded quality.
  - Such systems rely on predictable scheduling, bounded latency, and often real-time operating systems. They are common in embedded control, robotics, telecommunications, and multimedia.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
