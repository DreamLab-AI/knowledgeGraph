public:: true

# Cardano
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6d15049c8e7f2a27811a6631f48a83a4eef2eb328f01ee9556cc4c4ce960c9a",
  "@type": "Page",
  "vc:slug": "cardano",
  "title": "Cardano",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:kiayias-et-al-2017-ouroboros-a-provably-secure-proof-of-stake-blockchain-protocol",
      "vc:label": "Kiayias et al. 2017, Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cardano"
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
  "@id": "urn:ngm:class:cardano",
  "@type": "Class",
  "label": "Cardano",
  "definition": "Cardano is a public proof-of-stake blockchain platform launched in 2017 by IOHK, with Charles Hoskinson, a co-founder of Ethereum, among its founders. It is distinctive for its emphasis on peer-reviewed academic research and formal methods, and its consensus protocol Ouroboros was the first proof-of-stake protocol with published security proofs. The platform separates a settlement layer for its ADA cryptocurrency from a computation layer for smart contracts, which were enabled through the Alonzo upgrade in 2021. Cardano uses an extended UTXO accounting model and the functional language Plutus for on-chain logic.",
  "domain": "cardano",
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
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cardano:56549e77eb4b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f6d15049c8e7f2a27811a6631f48a83a4eef2eb328f01ee9556cc4c4ce960c9a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "StubLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Kiayias et al. 2017, Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol]]",
      "resolved": "urn:visionflow:linked:kiayias-et-al-2017-ouroboros-a-provably-secure-proof-of-stake-blockchain-protocol",
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
  - Cardano is a public proof-of-stake blockchain platform launched in 2017 by IOHK, with Charles Hoskinson, a co-founder of Ethereum, among its founders. It is distinctive for its emphasis on peer-reviewed academic research and formal methods, and its consensus protocol Ouroboros was the first proof-of-stake protocol with published security proofs. The platform separates a settlement layer for its ADA cryptocurrency from a computation layer for smart contracts, which were enabled through the Alonzo upgrade in 2021. Cardano uses an extended UTXO accounting model and the functional language Plutus for on-chain logic.

- ### Semantic Classification
  - owl-class:: bc:Cardano
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Ethereum]]
  - requires:: [[Proof of Stake]], [[UTXO]]
  - enables:: [[Smart Contract]]

- ### Content
  - Cardano's defining feature is its research-driven development process, in which protocol designs are published and peer reviewed before implementation. The Ouroboros family of proof-of-stake consensus protocols underpins the network, selecting block producers in proportion to staked ADA and providing formal arguments about safety and liveness.
  - Accounting on Cardano uses the extended unspent transaction output (EUTXO) model, which generalises Bitcoin's UTXO scheme to carry arbitrary data and scripts. Smart contracts are written in Plutus, a language based on Haskell, with the aim of enabling formal verification of on-chain logic.
  - Development has proceeded through named eras such as Byron, Shelley, Goguen and later upgrades that progressively introduced decentralised block production, smart contracts and scaling work. The project positions careful engineering and governance over rapid feature delivery, which has shaped both its reputation and its pace of change.

- ### Provenance
  - sources:: [[Kiayias et al. 2017, Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol]]
  - migration-date:: 2026-05-29T00:00:00Z
