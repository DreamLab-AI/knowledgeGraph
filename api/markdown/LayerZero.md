public:: true

# LayerZero
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:be67ec675c68f8ab775ba8845a66d0ea4e03f9bd5d2306b1cf270b69902c6be3",
  "@type": "Page",
  "vc:slug": "layer-zero",
  "title": "LayerZero",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:oracle",
      "vc:label": "Oracle"
    },
    {
      "@id": "urn:visionflow:linked:relayer",
      "vc:label": "Relayer"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-messaging",
      "vc:label": "Cross-Chain Messaging"
    },
    {
      "@id": "urn:visionflow:linked:omnichain-application",
      "vc:label": "Omnichain Application"
    },
    {
      "@id": "urn:visionflow:linked:bridge",
      "vc:label": "Bridge"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LayerZero"
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
  "@id": "urn:ngm:class:layer-zero",
  "@type": "Class",
  "label": "LayerZero",
  "definition": "LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:relayer",
        "label": "Relayer"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-messaging",
        "label": "Cross-Chain Messaging"
      },
      {
        "@id": "urn:ngm:class:omnichain-application",
        "label": "Omnichain Application"
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
  "@id": "urn:visionflow:annotation:link-resolutions:layer-zero:0e4c9beafb79",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:be67ec675c68f8ab775ba8845a66d0ea4e03f9bd5d2306b1cf270b69902c6be3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Oracle]]",
      "resolved": "urn:visionflow:linked:oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relayer]]",
      "resolved": "urn:visionflow:linked:relayer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Messaging]]",
      "resolved": "urn:visionflow:linked:cross-chain-messaging",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Omnichain Application]]",
      "resolved": "urn:visionflow:linked:omnichain-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bridge]]",
      "resolved": "urn:visionflow:linked:bridge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interoperability]]",
      "resolved": "urn:visionflow:linked:interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
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
  - LayerZero is a cross-chain interoperability protocol that allows smart contracts on different blockchains to send messages to one another. It uses a configurable security model in which an oracle delivers block headers and an independent relayer delivers transaction proofs, with a message accepted only when the two agree. This separation is intended to avoid reliance on a single intermediary chain for verifying cross-chain communication.

- ### Semantic Classification
  - owl-class:: blockchain:LayerZero
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Bridge]], [[Interoperability]]
  - requires:: [[Oracle]], [[Relayer]], [[Smart Contract]]
  - enables:: [[Cross-Chain Messaging]], [[Omnichain Application]]

- ### Content
  - LayerZero defines lightweight endpoint contracts on each connected chain that applications use to send and receive arbitrary messages. Rather than running a full light client of every chain, it relies on two independent parties, an oracle and a relayer, to supply complementary pieces of evidence about the source-chain transaction.
  - A message is delivered only when the block header reported by the oracle matches the proof supplied by the relayer, so a successful attack would require both parties to collude. Applications can choose their own oracle and relayer, giving them control over the trust assumptions of their cross-chain messaging.
  - The protocol underpins omnichain applications, where a single application maintains consistent state across multiple networks, as well as token bridges and cross-chain governance. Its security model has been the subject of ongoing analysis given the high value typically routed through interoperability infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
