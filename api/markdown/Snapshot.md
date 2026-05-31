public:: true

# Snapshot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66a54702040a5b942c1893d16a4e19fe0d2dae3b826b5294874e2471e6446163",
  "@type": "Page",
  "vc:slug": "snapshot",
  "title": "Snapshot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ipfs",
      "vc:label": "IPFS"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:gnosis-safe",
      "vc:label": "Gnosis Safe"
    },
    {
      "@id": "urn:visionflow:linked:governance-domain",
      "vc:label": "Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Snapshot"
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
  "@id": "urn:ngm:class:snapshot",
  "@type": "Class",
  "label": "Snapshot",
  "definition": "Snapshot is an off-chain governance platform that lets token holders and decentralised autonomous organisations vote on proposals without paying on-chain transaction fees. Votes are signed cryptographically with a wallet and weighted according to token holdings recorded at a chosen block height, then aggregated and stored on the InterPlanetary File System. Because voting is gasless and non-binding at the protocol level, results are typically executed separately by multisignature wallets or on-chain modules.",
  "domain": "snapshot",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-finance-domain",
      "label": "Decentralised Finance Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:snapshot:16a0eeb0791b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:66a54702040a5b942c1893d16a4e19fe0d2dae3b826b5294874e2471e6446163"
  },
  "vc:resolutions": [
    {
      "raw": "[[IPFS]]",
      "resolved": "urn:visionflow:linked:ipfs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Gnosis Safe]]",
      "resolved": "urn:visionflow:linked:gnosis-safe",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
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
  - Snapshot is an off-chain governance platform that lets token holders and decentralised autonomous organisations vote on proposals without paying on-chain transaction fees. Votes are signed cryptographically with a wallet and weighted according to token holdings recorded at a chosen block height, then aggregated and stored on the InterPlanetary File System. Because voting is gasless and non-binding at the protocol level, results are typically executed separately by multisignature wallets or on-chain modules.

- ### Semantic Classification
  - owl-class:: defi:Snapshot
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Decentralised Finance Domain]]
  - bridges-to:: [[Gnosis Safe]], [[Governance Domain]]
  - requires:: [[IPFS]], [[Ethereum]]
  - enables:: [[Decentralised Autonomous Organisation]]

- ### Content
  - Snapshot decouples the act of expressing governance preferences from on-chain execution. Each proposal records the voting strategy, the snapshot block at which balances are read, and the available choices. Participants sign a message with their wallet to register a vote, and these signatures are verifiable without consuming gas, which removes a significant barrier to broad participation.
  - The platform supports a range of voting strategies, including single-choice, approval, quadratic, ranked-choice and weighted voting, and can read balances from ERC-20 tokens, ERC-721 collections, delegated balances and custom contracts. Voting power is computed at a fixed block to prevent vote-buying through transient balance changes during the voting window.
  - Because Snapshot is advisory rather than self-executing, organisations commonly pair it with a multisignature wallet or an execution module that enacts approved decisions on-chain. This separation keeps day-to-day signalling cheap while reserving costly settlement for decisions that have already reached consensus.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
