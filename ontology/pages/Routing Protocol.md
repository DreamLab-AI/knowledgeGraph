public:: true

# Routing Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:553f3dbb07a46dcd3308f37cfde56db6c593e3881faf70e14a5211d7b4144eb5",
  "@type": "Page",
  "vc:slug": "routing-protocol",
  "title": "Routing Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:network-architecture",
      "vc:label": "Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:network-topology",
      "vc:label": "Network Topology"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Routing Protocol"
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
  "@id": "urn:ngm:class:routing-protocol",
  "@type": "Class",
  "label": "Routing Protocol",
  "definition": "A protocol that determines how packets are forwarded between nodes in a network by computing and distributing routing information among routers.",
  "domain": "distributed-systems",
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
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:network-architecture",
        "label": "Network Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:routing-protocol:52e2badf72b7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:553f3dbb07a46dcd3308f37cfde56db6c593e3881faf70e14a5211d7b4144eb5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Architecture]]",
      "resolved": "urn:visionflow:linked:network-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Topology]]",
      "resolved": "urn:visionflow:linked:network-topology",
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
  - A protocol that determines how packets are forwarded between nodes in a network by computing and distributing routing information among routers.

- ### Semantic Classification
  - owl-class:: distributed-systems:RoutingProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[Network Topology]]
  - requires:: [[Communication Protocol]], [[Network Architecture]]
  - enables:: [[Interoperability]]

- ### Content
  - A routing protocol governs how routers exchange reachability information and select paths through a network, enabling packets to travel from source to destination across multiple hops. Protocols differ in whether they use distance-vector, link-state or path-vector approaches.
  - Interior protocols operate within an administrative domain to find efficient internal paths, while exterior protocols coordinate routing between domains across the wider internet. Convergence speed, scalability and policy control are key design concerns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
