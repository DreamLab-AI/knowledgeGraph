public:: true

# WebSockets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:25c80382ca6f27f1fddfbfbb4dcae26462d36f041305b737a3b69f0c9df7cd43",
  "@type": "Page",
  "vc:slug": "web-sockets",
  "title": "WebSockets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:network-communication",
      "vc:label": "Network Communication"
    },
    {
      "@id": "urn:visionflow:linked:web-technology",
      "vc:label": "Web Technology"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:https-datatracker-ietf-org-doc-html-rfc-6455",
      "vc:label": "https://datatracker.ietf.org/doc/html/rfc6455"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-web-api-web-sockets-api",
      "vc:label": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "WebSockets"
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
  "@id": "urn:ngm:class:web-sockets",
  "@type": "Class",
  "label": "WebSockets",
  "definition": "WebSockets is a protocol providing full-duplex communication channels over a single TCP connection between a client and a server. It is widely used for real-time web applications.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:network-communication",
        "label": "Network Communication"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-sockets:84fc153d21f1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:25c80382ca6f27f1fddfbfbb4dcae26462d36f041305b737a3b69f0c9df7cd43"
  },
  "vc:resolutions": [
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Communication]]",
      "resolved": "urn:visionflow:linked:network-communication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web Technology]]",
      "resolved": "urn:visionflow:linked:web-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://datatracker.ietf.org/doc/html/rfc6455]]",
      "resolved": "urn:visionflow:linked:https-datatracker-ietf-org-doc-html-rfc-6455",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API]]",
      "resolved": "urn:visionflow:linked:https-developer-mozilla-org-en-us-docs-web-api-web-sockets-api",
      "kind": "StubLink"
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
  - WebSockets is a protocol providing full-duplex communication channels over a single TCP connection between a client and a server. It is widely used for real-time web applications.

- ### Semantic Classification
  - owl-class:: general:WebSockets
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Web Technology]]
  - requires:: [[HTTP]]
  - enables:: [[Network Communication]]

- ### Content
  - WebSockets establishes a persistent connection through an initial HTTP handshake, after which both client and server can send messages at any time without repeated request and response cycles. This reduces latency compared with polling approaches.
  - The protocol is used for chat applications, live dashboards, collaborative editing, and other cases where the server needs to push updates to the client. It is supported natively by web browsers and by libraries across many programming languages.

- ### Provenance
  - sources:: [[https://datatracker.ietf.org/doc/html/rfc6455]], [[https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API]]
  - migration-date:: 2026-05-29T00:00:00Z
