```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e9cf94d980ed71cdb9fa69423d0a3a34f4eb3617132d6ddff92362b44f2181ac",
  "@type": "Page",
  "vc:slug": "thorchain",
  "title": "THORChain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:linked:validator",
      "vc:label": "Validator"
    },
    {
      "@id": "urn:visionflow:linked:atomic-swap",
      "vc:label": "Atomic Swap"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:linked:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-bridge",
      "vc:label": "Cross-Chain Bridge"
    },
    {
      "@id": "urn:visionflow:linked:https-thorchain-org",
      "vc:label": "https://thorchain.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "THORChain"
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
  "@id": "urn:ngm:class:thorchain",
  "@type": "Class",
  "label": "THORChain",
  "definition": "A decentralised cross-chain liquidity protocol that lets users swap native assets across different blockchains without wrapping them or relying on a single custodian. It uses bonded validators and liquidity pools denominated in its native asset.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
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

- ### Definition
  - A decentralised cross-chain liquidity protocol that lets users swap native assets across different blockchains without wrapping them or relying on a single custodian. It uses bonded validators and liquidity pools denominated in its native asset.

- ### Semantic Classification
  - owl-class:: blockchain:THORChain
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Cross-Chain Bridge]]
  - bridges-to:: [[Decentralized Exchange]], [[Automated Market Maker]]
  - requires:: [[Liquidity Pool]], [[Validator]]
  - enables:: [[Atomic Swap]], [[Interoperability]]

- ### Content
  - THORChain enables swaps between native assets on separate chains, such as exchanging Bitcoin for an Ethereum token, by routing through liquidity pools paired with its own asset. Liquidity providers deposit assets and earn fees, while bonded nodes secure the network and process settlements.
  - The protocol avoids issuing wrapped representations of foreign assets, instead holding native funds in vaults managed by a rotating validator set. Cross-chain transfers are coordinated by an automated market maker that prices each swap against pool depth.

- ### Provenance
  - sources:: [[https://thorchain.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
