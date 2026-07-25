public:: true

# Snapshot Off-Chain Voting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6e1feb2356bed361a5a19d2a4cc86b3f90337b60e721f81e3dc1c8a390a4285",
  "@type": "Page",
  "vc:slug": "snapshot-off-chain-voting",
  "title": "Snapshot Off-Chain Voting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:daogovernance",
      "vc:label": "DAOGovernance"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:quadratic-voting",
      "vc:label": "Quadratic Voting"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-governance",
      "vc:label": "Decentralized Governance"
    },
    {
      "@id": "urn:visionflow:linked:https-snapshot-org",
      "vc:label": "https://snapshot.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Snapshot Off-Chain Voting"
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
  "@id": "urn:ngm:class:snapshot-off-chain-voting",
  "@type": "Class",
  "label": "Snapshot Off-Chain Voting",
  "definition": "A gasless governance platform that records votes off-chain by having participants sign messages, using token balances captured at a chosen block as voting weight. It avoids transaction fees while preserving a verifiable tally tied to on-chain holdings.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-governance",
      "label": "Decentralized Governance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:daogovernance",
        "label": "DAOGovernance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:snapshot-off-chain-voting:ff0fd3120cf7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f6e1feb2356bed361a5a19d2a4cc86b3f90337b60e721f81e3dc1c8a390a4285"
  },
  "vc:resolutions": [
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAOGovernance]]",
      "resolved": "urn:visionflow:linked:daogovernance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Quadratic Voting]]",
      "resolved": "urn:visionflow:linked:quadratic-voting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Governance]]",
      "resolved": "urn:visionflow:linked:decentralized-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://snapshot.org/]]",
      "resolved": "urn:visionflow:linked:https-snapshot-org",
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
  - A gasless governance platform that records votes off-chain by having participants sign messages, using token balances captured at a chosen block as voting weight. It avoids transaction fees while preserving a verifiable tally tied to on-chain holdings.

- ### Semantic Classification
  - owl-class:: blockchain:SnapshotOffChainVoting
  - owl-role:: NamedIndividual

- ### Relationships
  - is-subclass-of:: [[Decentralized Governance]]
  - bridges-to:: [[Governance]], [[Quadratic Voting]]
  - requires:: [[Digital Signature]], [[Token]]
  - enables:: [[DAOGovernance]]

- ### Content
  - Snapshot lets organisations run governance votes without paying transaction fees by collecting signed messages rather than on-chain transactions. Voting power is determined from a snapshot of token balances at a specified block, so holdings cannot be borrowed for a vote after that point.
  - Because the votes are stored off-chain, the results are advisory unless paired with an on-chain execution step, but the signatures remain independently verifiable. The platform supports several voting schemes, including weighted and quadratic methods.

- ### Provenance
  - sources:: [[https://snapshot.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
