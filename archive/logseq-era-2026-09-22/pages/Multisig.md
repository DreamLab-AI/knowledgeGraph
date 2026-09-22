public:: true

# Multisig
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57744fb2f2c96e11fc16262b2d70116472df7d1f1011dfdd34b969dfdb18e014",
  "@type": "Page",
  "vc:slug": "multisig",
  "title": "Multisig",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:custody",
      "vc:label": "Custody"
    },
    {
      "@id": "urn:visionflow:linked:dao-governance",
      "vc:label": "DAO Governance"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:wallet",
      "vc:label": "Wallet"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Multisig"
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
  "@id": "urn:ngm:class:multisig",
  "@type": "Class",
  "label": "Multisig",
  "definition": "Multisig, or multi-signature, is a scheme requiring more than one cryptographic signature to authorise a transaction or action. It is widely used in cryptocurrency wallets and custody to distribute control.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:wallet",
      "label": "Wallet"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:custody",
        "label": "Custody"
      },
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:multisig:7925300a0f99",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57744fb2f2c96e11fc16262b2d70116472df7d1f1011dfdd34b969dfdb18e014"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody]]",
      "resolved": "urn:visionflow:linked:custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO Governance]]",
      "resolved": "urn:visionflow:linked:dao-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Wallet]]",
      "resolved": "urn:visionflow:linked:wallet",
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
  - Multisig, or multi-signature, is a scheme requiring more than one cryptographic signature to authorise a transaction or action. It is widely used in cryptocurrency wallets and custody to distribute control.

- ### Semantic Classification
  - owl-class:: blockchain:Multisig
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Wallet]]
  - bridges-to:: [[Smart Contract]]
  - requires:: [[Cryptography]]
  - enables:: [[Custody]], [[DAO Governance]]

- ### Content
  - Multisig requires a threshold number of signatures from a set of keyholders before a transaction is valid, for example two of three or three of five. By spreading signing authority across multiple keys and parties, it removes single points of failure and reduces the risk from a single compromised key.
  - In cryptocurrency it is used to secure treasuries, exchange reserves and shared wallets, and smart-contract implementations such as multisig Safes also enable on-chain governance execution. The approach underlies many institutional custody and DAO management arrangements.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
