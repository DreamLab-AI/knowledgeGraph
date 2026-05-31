public:: true

# Observability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a60356b2e94489cea7a9f92d1e957242281093b03635cb92da8443814ff6e80",
  "@type": "Page",
  "vc:slug": "observability",
  "title": "Observability",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:performance",
      "vc:label": "performance"
    },
    {
      "@id": "urn:visionflow:linked:site-reliability-engineering",
      "vc:label": "Site Reliability Engineering"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:reliability-engineering",
      "vc:label": "Reliability Engineering"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Observability"
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
  "@id": "urn:ngm:class:observability",
  "@type": "Class",
  "label": "Observability",
  "definition": "Observability is the property of a software system that allows its internal state to be inferred from external outputs such as logs, metrics, and traces.",
  "domain": "software-engineering",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reliability-engineering",
      "label": "Reliability Engineering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:performance",
        "label": "performance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:site-reliability-engineering",
        "label": "Site Reliability Engineering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:observability:58ee00072efb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a60356b2e94489cea7a9f92d1e957242281093b03635cb92da8443814ff6e80"
  },
  "vc:resolutions": [
    {
      "raw": "[[performance]]",
      "resolved": "urn:visionflow:linked:performance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Site Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:site-reliability-engineering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reliability Engineering]]",
      "resolved": "urn:visionflow:linked:reliability-engineering",
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
  - Observability is the property of a software system that allows its internal state to be inferred from external outputs such as logs, metrics, and traces.

- ### Semantic Classification
  - owl-class:: software-engineering:Observability
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Reliability Engineering]]
  - bridges-to:: [[Distributed Systems]]
  - requires:: [[performance]]
  - enables:: [[Site Reliability Engineering]]

- ### Content
  - Observability draws on three primary signal types: logs that record discrete events, metrics that aggregate numeric measurements over time, and distributed traces that follow a request across services.
  - The concept is associated with operating distributed systems where failures are difficult to reproduce, so engineers rely on collected telemetry to diagnose behaviour rather than reproducing problems directly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
