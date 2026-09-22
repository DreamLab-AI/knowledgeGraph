public:: true

# DAOGovernance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c37c9f9a2f837b24881dbba8be4b9ad9b839d478b094ac7ec703d10b8c1a92bc",
  "@type": "Page",
  "vc:slug": "daogovernance",
  "title": "DAOGovernance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
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
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-autonomous-organization",
      "vc:label": "Decentralized Autonomous Organization"
    },
    {
      "@id": "urn:visionflow:linked:https-ethereum-org-en-dao",
      "vc:label": "https://ethereum.org/en/dao/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DAOGovernance"
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
  "@id": "urn:ngm:class:daogovernance",
  "@type": "Class",
  "label": "DAOGovernance",
  "definition": "The set of on-chain and off-chain processes by which a decentralised autonomous organisation makes and enforces collective decisions. It covers proposal submission, voting and execution of approved actions through smart contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-autonomous-organization",
      "label": "Decentralized Autonomous Organization"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:quadratic-voting",
        "label": "Quadratic Voting"
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
  "@id": "urn:visionflow:annotation:link-resolutions:daogovernance:181edf85f56b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c37c9f9a2f837b24881dbba8be4b9ad9b839d478b094ac7ec703d10b8c1a92bc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Autonomous Organization]]",
      "resolved": "urn:visionflow:linked:decentralized-autonomous-organization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ethereum.org/en/dao/]]",
      "resolved": "urn:visionflow:linked:https-ethereum-org-en-dao",
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
  - The set of on-chain and off-chain processes by which a decentralised autonomous organisation makes and enforces collective decisions. It covers proposal submission, voting and execution of approved actions through smart contracts.

- ### Semantic Classification
  - owl-class:: blockchain:DAOGovernance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Autonomous Organization]]
  - bridges-to:: [[Decentralized Governance]], [[Token]]
  - requires:: [[Smart Contract]], [[Governance]]
  - enables:: [[Quadratic Voting]]

- ### Content
  - DAO governance defines how members of a decentralised autonomous organisation propose changes, vote on them and have outcomes carried out automatically by smart contracts. Voting power is commonly tied to governance tokens or other membership signals.
  - Designs vary in how they weight votes, set quorums and manage treasuries, and many combine off-chain signalling with on-chain execution. The aim is to coordinate a distributed membership without a central administrator while constraining what any single actor can do.

- ### Provenance
  - sources:: [[https://ethereum.org/en/dao/]]
  - migration-date:: 2026-05-29T00:00:00Z
