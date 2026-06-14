public:: true

# Web3 Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:829f83e211d68cd258c25f40c926d9bd7f83528f4b21f9222591047f0a5dc4f0",
  "@type": "Page",
  "vc:slug": "web-3-domain",
  "title": "Web3 Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralised-application",
      "vc:label": "Decentralised Application"
    },
    {
      "@id": "urn:visionflow:linked:crypto-wallet",
      "vc:label": "Crypto Wallet"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-storage",
      "vc:label": "Decentralised Storage"
    },
    {
      "@id": "urn:visionflow:linked:naming-service",
      "vc:label": "Naming Service"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    },
    {
      "@id": "urn:visionflow:linked:public-key-cryptography",
      "vc:label": "Public-Key Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:permissionless-applications",
      "vc:label": "Permissionless Applications"
    },
    {
      "@id": "urn:visionflow:linked:user-owned-data",
      "vc:label": "User-Owned Data"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-domain",
      "vc:label": "Metaverse Domain"
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
      "vc:value": "Web3 Domain"
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
  "@id": "urn:ngm:class:web-3-domain",
  "@type": "Class",
  "label": "Web3 Domain",
  "definition": "The Web3 Domain classifies concepts for an internet architecture in which applications interact directly with public ledgers and user-controlled keys rather than centralised platforms. It covers decentralised applications, wallets, naming, and storage that together let users own assets and identity. As a subject classification under the Blockchain Domain, it scopes the application and interaction model rather than the consensus layer or the finance built upon it.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:crypto-wallet",
        "label": "Crypto Wallet"
      },
      {
        "@id": "urn:ngm:class:decentralised-storage",
        "label": "Decentralised Storage"
      },
      {
        "@id": "urn:ngm:class:naming-service",
        "label": "Naming Service"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:digital-asset-domain",
        "label": "Digital Asset Domain"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:permissionless-applications",
        "label": "Permissionless Applications"
      },
      {
        "@id": "urn:ngm:class:user-owned-data",
        "label": "User-Owned Data"
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
  "@id": "urn:visionflow:annotation:link-resolutions:web-3-domain:eb79ef45656b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:829f83e211d68cd258c25f40c926d9bd7f83528f4b21f9222591047f0a5dc4f0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralised Application]]",
      "resolved": "urn:visionflow:linked:decentralised-application",
      "kind": "StubLink"
    },
    {
      "raw": "[[Crypto Wallet]]",
      "resolved": "urn:visionflow:linked:crypto-wallet",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Storage]]",
      "resolved": "urn:visionflow:linked:decentralised-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Naming Service]]",
      "resolved": "urn:visionflow:linked:naming-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public-Key Cryptography]]",
      "resolved": "urn:visionflow:linked:public-key-cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Permissionless Applications]]",
      "resolved": "urn:visionflow:linked:permissionless-applications",
      "kind": "StubLink"
    },
    {
      "raw": "[[User-Owned Data]]",
      "resolved": "urn:visionflow:linked:user-owned-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse-domain",
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
  - The Web3 Domain classifies concepts for an internet architecture in which applications interact directly with public ledgers and user-controlled keys rather than centralised platforms. It covers decentralised applications, wallets, naming, and storage that together let users own assets and identity. As a subject classification under the Blockchain Domain, it scopes the application and interaction model rather than the consensus layer or the finance built upon it.

- ### Semantic Classification
  - owl-class:: web3:Web3Domain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Identity Domain]], [[Metaverse Domain]]
  - has-part:: [[Decentralised Application]], [[Crypto Wallet]], [[Decentralised Storage]], [[Naming Service]], [[Decentralised Autonomous Organisation]]
  - requires:: [[Smart Contract]], [[Digital Asset Domain]], [[Public-Key Cryptography]]
  - enables:: [[Self-Custody]], [[Permissionless Applications]], [[User-Owned Data]]

- ### Content
  - The Web3 Domain describes how end users reach ledger-based services. Decentralised applications present interfaces that call smart contracts directly, wallets hold the keys that authorise those calls, and naming and storage services replace centralised directories and hosting. The user, rather than a platform operator, holds the credentials that control assets and data.
  - Governance often takes the form of decentralised autonomous organisations, where token holders vote on protocol parameters and treasury use. This shifts control from a single operator to a distributed set of stakeholders, with the trade-offs in coordination and accountability that follow. The model depends on public-key cryptography for authorisation and on digital assets as the medium of participation.
  - Beneath the Blockchain Domain, Web3 supplies the application surface that decentralised finance, identity, and the metaverse build upon. The domain bridges to identity because self-custody and naming underpin portable user profiles. Separating the interaction model from finance and consensus keeps the user-facing concerns describable on their own terms.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
