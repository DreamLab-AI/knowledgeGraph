public:: true

# Networking Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0e9270b398e2a96dab95bdf71149f68962b659fab4a5089eedbe15f3b1fd80e8",
  "@type": "Page",
  "vc:slug": "networking-domain",
  "title": "Networking Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transport-protocol",
      "vc:label": "Transport Protocol"
    },
    {
      "@id": "urn:visionflow:linked:routing-protocol",
      "vc:label": "Routing Protocol"
    },
    {
      "@id": "urn:visionflow:linked:peer-to-peer-network",
      "vc:label": "Peer-to-Peer Network"
    },
    {
      "@id": "urn:visionflow:linked:addressing-scheme",
      "vc:label": "Addressing Scheme"
    },
    {
      "@id": "urn:visionflow:linked:network-topology",
      "vc:label": "Network Topology"
    },
    {
      "@id": "urn:visionflow:linked:physical-link",
      "vc:label": "Physical Link"
    },
    {
      "@id": "urn:visionflow:linked:data-transport",
      "vc:label": "Data Transport"
    },
    {
      "@id": "urn:visionflow:linked:distributed-communication",
      "vc:label": "Distributed Communication"
    },
    {
      "@id": "urn:visionflow:linked:service-reachability",
      "vc:label": "Service Reachability"
    },
    {
      "@id": "urn:visionflow:linked:interoperability-domain",
      "vc:label": "Interoperability Domain"
    },
    {
      "@id": "urn:visionflow:linked:information-security-domain",
      "vc:label": "Information Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:infrastructure-domain",
      "vc:label": "Infrastructure Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-7498-1",
      "vc:label": "ISO/IEC 7498-1"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Networking Domain"
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
  "@id": "urn:ngm:class:networking-domain",
  "@type": "Class",
  "label": "Networking Domain",
  "definition": "The Networking Domain classifies concepts concerned with the transport of data between computing endpoints across links and networks. It covers protocols, addressing, routing, and the layered models that organise communication. As a top-level subject classification, it scopes the movement of data rather than the applications that consume it or the security controls applied to it.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Infra Network And Comms"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:transport-protocol",
        "label": "Transport Protocol"
      },
      {
        "@id": "urn:ngm:class:routing-protocol",
        "label": "Routing Protocol"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:addressing-scheme",
        "label": "Addressing Scheme"
      },
      {
        "@id": "urn:ngm:class:network-topology",
        "label": "Network Topology"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:physical-link",
        "label": "Physical Link"
      },
      {
        "@id": "urn:ngm:class:addressing-scheme",
        "label": "Addressing Scheme"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-transport",
        "label": "Data Transport"
      },
      {
        "@id": "urn:ngm:class:distributed-communication",
        "label": "Distributed Communication"
      },
      {
        "@id": "urn:ngm:class:service-reachability",
        "label": "Service Reachability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:networking-domain:d14767bc0bca",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0e9270b398e2a96dab95bdf71149f68962b659fab4a5089eedbe15f3b1fd80e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transport Protocol]]",
      "resolved": "urn:visionflow:linked:transport-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Routing Protocol]]",
      "resolved": "urn:visionflow:linked:routing-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Peer-to-Peer Network]]",
      "resolved": "urn:visionflow:linked:peer-to-peer-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Addressing Scheme]]",
      "resolved": "urn:visionflow:linked:addressing-scheme",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Topology]]",
      "resolved": "urn:visionflow:linked:network-topology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physical Link]]",
      "resolved": "urn:visionflow:linked:physical-link",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Transport]]",
      "resolved": "urn:visionflow:linked:data-transport",
      "kind": "StubLink"
    },
    {
      "raw": "[[Distributed Communication]]",
      "resolved": "urn:visionflow:linked:distributed-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Service Reachability]]",
      "resolved": "urn:visionflow:linked:service-reachability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability Domain]]",
      "resolved": "urn:visionflow:linked:interoperability-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security Domain]]",
      "resolved": "urn:visionflow:linked:information-security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Infrastructure Domain]]",
      "resolved": "urn:visionflow:linked:infrastructure-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 7498-1]]",
      "resolved": "urn:visionflow:linked:iso-iec-7498-1",
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
  - The Networking Domain classifies concepts concerned with the transport of data between computing endpoints across links and networks. It covers protocols, addressing, routing, and the layered models that organise communication. As a top-level subject classification, it scopes the movement of data rather than the applications that consume it or the security controls applied to it.

- ### Semantic Classification
  - owl-class:: net:NetworkingDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability Domain]], [[Information Security Domain]], [[Infrastructure Domain]]
  - has-part:: [[Transport Protocol]], [[Routing Protocol]], [[Peer-to-Peer Network]], [[Addressing Scheme]], [[Network Topology]]
  - requires:: [[Physical Link]], [[Addressing Scheme]]
  - enables:: [[Data Transport]], [[Distributed Communication]], [[Service Reachability]]

- ### Content
  - The Networking Domain organises the mechanisms that carry data between machines. Layered models separate concerns so that transport protocols provide reliable or best-effort delivery, routing protocols select paths across networks, and addressing schemes give endpoints identities. Peer-to-peer overlays, used heavily by distributed ledgers, build logical networks on top of this transport.
  - Networks are characterised by latency, throughput, and reliability, and protocol design trades these properties against one another. Topology determines resilience: a well-connected mesh tolerates link failure better than a hub-and-spoke arrangement. These properties shape what higher layers, including consensus and payment systems, can assume about message delivery.
  - As a top-level domain, networking underpins infrastructure, interoperability, and security. It bridges to the Interoperability Domain, which connects distinct networks, and to the Information Security Domain, which protects traffic. Keeping data transport in its own classification lets the ontology describe communication independently of the services and protections layered above it.

- ### Provenance
  - sources:: [[ISO/IEC 7498-1]]
  - migration-date:: 2026-05-29T00:00:00Z
