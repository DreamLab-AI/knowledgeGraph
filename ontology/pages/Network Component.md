public:: true

# Network Component
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b",
  "@type": "Page",
  "vc:slug": "network-component",
  "title": "Network Component",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-technology",
      "vc:label": "Blockchain Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0604"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Network Component"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-component",
  "@type": "Class",
  "label": "Network Component",
  "definition": "Network Component represents the fundamental infrastructure elements that constitute blockchain networks, including different node types, network protocols, and communication layers.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-network-component",
      "label": "Network Component"
    },
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:networkcomponent",
      "label": "Networkcomponent"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:network-component:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:efee90aeb001f60c852a64b8fd4c1e0cd4161b4cd06a91e6dfc221257af2ef5b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Technology]]",
      "resolved": "urn:visionflow:linked:blockchain-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Network Component represents the fundamental infrastructure elements that constitute blockchain networks, including different node types, network protocols, and communication layers. These components work together to enable distributed consensus, data replication, and peer-to-peer communication across the blockchain ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:NetworkComponent
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain Technology]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]]
  - partOf:: [[Network Infrastructure]]
  - partOf:: [[Blockchain Network]]
  - enables:: [[Consensus Mechanism]]
  - enables:: [[Distributed System]]
  - relatedTo:: [[Blockchain Protocol]]

- ### Content
  Network Component represents the fundamental infrastructure elements that constitute blockchain and distributed networks, including validator nodes, relay nodes, light clients, and peer-to-peer communication layers. Each component type plays a distinct role: full nodes maintain the complete ledger and enforce consensus rules; light nodes perform simplified payment verification; validator nodes participate in block production and attestation. The interplay of these components determines network resilience, throughput, finality, and decentralisation properties. In permissioned blockchain contexts, additional component types such as orderers and endorsing peers implement access-controlled consensus protocols.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
