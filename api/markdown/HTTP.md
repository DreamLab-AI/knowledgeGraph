public:: true

# HTTP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:863f56516448fcb5392faaf6e769fcc8fe564fbd3eca3b6807dafcd5bdfdf09c",
  "@type": "Page",
  "vc:slug": "http",
  "title": "HTTP",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transport-layer",
      "vc:label": "Transport Layer"
    },
    {
      "@id": "urn:visionflow:linked:api",
      "vc:label": "API"
    },
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HTTP"
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
  "@id": "urn:ngm:class:http",
  "@type": "Class",
  "label": "HTTP",
  "definition": "The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:application-layer",
      "label": "Application Layer"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transport-layer",
        "label": "Transport Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
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
  "@id": "urn:visionflow:annotation:link-resolutions:http:e0603c499aae",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:863f56516448fcb5392faaf6e769fcc8fe564fbd3eca3b6807dafcd5bdfdf09c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transport Layer]]",
      "resolved": "urn:visionflow:linked:transport-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[API]]",
      "resolved": "urn:visionflow:linked:api",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
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
  - The Hypertext Transfer Protocol, a stateless application-layer protocol for transferring hypertext and other resources between clients and servers that underpins the World Wide Web.

- ### Semantic Classification
  - owl-class:: general:HTTP
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Application Layer]]
  - bridges-to:: [[Network Protocol]], [[Communication Protocols]]
  - requires:: [[Transport Layer]]
  - enables:: [[API]]

- ### Content
  - HTTP is a request-response application-layer protocol in which a client sends a request specifying a method, target resource and headers, and a server returns a status code, headers and an optional body. It is stateless by design, with each request handled independently, and forms the foundation of communication on the World Wide Web.
  - Successive versions have improved performance and security: HTTP/1.1 introduced persistent connections, HTTP/2 added multiplexing over a single connection, and HTTP/3 runs over QUIC to reduce latency. HTTP underpins RESTful APIs and most web traffic.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
