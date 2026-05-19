schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#MultiPartyTransactions
legacy_uri:: urn:visionclaw:concept:blockchain:multi-party-transactions
public:: true

# Multi Party Transactions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5",
  "@type": "Page",
  "vc:slug": "multi-party-transactions",
  "title": "Multi Party Transactions",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:blockchain-transactions",
      "vc:label": "Blockchain Transactions"
    },
    {
      "@id": "urn:visionflow:linked:cross-chain-trading",
      "vc:label": "Cross Chain Trading"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Virtual Economy]], [[AI Agent System]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-638f1f315206"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#MultiPartyTransactions"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9976"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi Party Transactions"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:multi-party-transactions"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:multi-party-transactions"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:multi-party-transactions",
  "@type": "Class",
  "label": "Multi Party Transactions",
  "definition": "Blockchain transactions involving more than two participants that use atomic swap protocols, adaptor signatures, and hash timelock contracts (HTLCs) to ensure all parties complete their exchanges simultaneously or the entire transaction is reversed, preventing partial completion losses.",
  "domain": "blockchain",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-transactions",
      "label": "Blockchain Transactions"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-chain-trading",
        "label": "Cross Chain Trading"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:multi-party-transactions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain Transactions]]",
      "resolved": "urn:visionflow:linked:blockchain-transactions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross Chain Trading]]",
      "resolved": "urn:visionflow:linked:cross-chain-trading",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f944bef68899f6322c1662457780488a6e9836519425c88e3fd1d0a7d9161dc5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Blockchain transactions involving more than two participants that use atomic swap protocols, adaptor signatures, and hash timelock contracts (HTLCs) to ensure all parties complete their exchanges simultaneously or the entire transaction is reversed, preventing partial completion losses.

- ### Semantic Classification
  - owl-class:: blockchain:MultiPartyTransactions
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Transactions]]
  - enables:: [[Cross Chain Trading]]

- ### Content

  ### Technical Details
  - Uses universal adaptor signature secrets to prevent malicious dropouts
  - ParaSwap framework reduces exchange time complexity from O(n) to O(1)
  - Can operate almost entirely off-chain with single on-chain finalization
  - Implemented across Bitcoin, Ethereum, Avalanche, and Binance Smart Chain
  - Reduces gas costs by 26.2x to 46.8x compared to serial swap methods

  ### Security Features
  - Cryptographic hash functions ensure transaction integrity
  - Time-lock constraints return funds if deadlines are missed
  - Atomic execution prevents partial transaction completion
  - No trusted third parties or centralized exchanges required

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
