public:: true

# IBC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8101d7e093c686817756b534c19fe12ba24f92912a16581fdb4e3f1a34449bc",
  "@type": "Page",
  "vc:slug": "ibc",
  "title": "IBC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cosmos-sdk",
      "vc:label": "Cosmos SDK"
    },
    {
      "@id": "urn:visionflow:linked:merkle-tree",
      "vc:label": "Merkle Tree"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:linked:tendermint",
      "vc:label": "Tendermint"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-interoperability",
      "vc:label": "Blockchain Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ibcprotocol-dev",
      "vc:label": "https://www.ibcprotocol.dev"
    },
    {
      "@id": "urn:visionflow:linked:https-github-com-cosmos-ibc",
      "vc:label": "https://github.com/cosmos/ibc"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IBC"
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
  "@id": "urn:ngm:class:ibc",
  "@type": "Class",
  "label": "IBC",
  "definition": "Inter-Blockchain Communication is a protocol for relaying authenticated data and tokens between independent blockchains. It is the native interoperability standard of the Cosmos ecosystem.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-interoperability",
      "label": "Blockchain Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cosmos-sdk",
        "label": "Cosmos SDK"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ibc:3263c2fa0903",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8101d7e093c686817756b534c19fe12ba24f92912a16581fdb4e3f1a34449bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cosmos SDK]]",
      "resolved": "urn:visionflow:linked:cosmos-sdk",
      "kind": "StubLink"
    },
    {
      "raw": "[[Merkle Tree]]",
      "resolved": "urn:visionflow:linked:merkle-tree",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Chain Bridge]]",
      "resolved": "urn:visionflow:linked:cross-chain-bridge",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tendermint]]",
      "resolved": "urn:visionflow:linked:tendermint",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Interoperability]]",
      "resolved": "urn:visionflow:linked:blockchain-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.ibcprotocol.dev]]",
      "resolved": "urn:visionflow:linked:https-www-ibcprotocol-dev",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://github.com/cosmos/ibc]]",
      "resolved": "urn:visionflow:linked:https-github-com-cosmos-ibc",
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
  - Inter-Blockchain Communication is a protocol for relaying authenticated data and tokens between independent blockchains. It is the native interoperability standard of the Cosmos ecosystem.

- ### Semantic Classification
  - owl-class:: blockchain:IBC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Blockchain Interoperability]]
  - bridges-to:: [[Tendermint]]
  - requires:: [[Cosmos SDK]], [[Merkle Tree]]
  - enables:: [[Cross-Chain Bridge]]

- ### Content
  - Inter-Blockchain Communication defines how two chains establish connections and channels, then exchange packets whose validity each chain can verify using light client proofs. Relayers move packets between chains but cannot forge them.
  - The protocol is widely used to transfer tokens between Cosmos chains and to support cross-chain applications. Its design separates the transport layer from application-level packet formats, allowing different use cases to share the same connection infrastructure.

- ### Provenance
  - sources:: [[https://www.ibcprotocol.dev]], [[https://github.com/cosmos/ibc]]
  - migration-date:: 2026-05-29T00:00:00Z
