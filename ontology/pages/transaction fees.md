public:: true

# transaction fees
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1c370b9935c962576a5b24a7d722a66de560eee0ba37c20f728cfdefccdaa376",
  "@type": "Page",
  "vc:slug": "transaction-fees",
  "title": "transaction fees",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-network",
      "vc:label": "Bitcoin Network"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:transaction",
      "vc:label": "Transaction"
    },
    {
      "@id": "urn:visionflow:linked:https-developer-bitcoin-org-devguide-transactions-html",
      "vc:label": "https://developer.bitcoin.org/devguide/transactions.html"
    },
    {
      "@id": "urn:visionflow:linked:https-en-bitcoin-it-wiki-transaction-fees",
      "vc:label": "https://en.bitcoin.it/wiki/Transaction_fees"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "transaction fees"
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
  "@id": "urn:ngm:class:transaction-fees",
  "@type": "Class",
  "label": "transaction fees",
  "definition": "Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction",
      "label": "Transaction"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:transaction-fees:5a36e0e53640",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1c370b9935c962576a5b24a7d722a66de560eee0ba37c20f728cfdefccdaa376"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Network]]",
      "resolved": "urn:visionflow:linked:bitcoin-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Validation]]",
      "resolved": "urn:visionflow:linked:transaction-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bitcoin Mining]]",
      "resolved": "urn:visionflow:linked:bitcoin-mining",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction]]",
      "resolved": "urn:visionflow:linked:transaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://developer.bitcoin.org/devguide/transactions.html]]",
      "resolved": "urn:visionflow:linked:https-developer-bitcoin-org-devguide-transactions-html",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.bitcoin.it/wiki/Transaction_fees]]",
      "resolved": "urn:visionflow:linked:https-en-bitcoin-it-wiki-transaction-fees",
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
  - Transaction fees are amounts paid by users to have their transactions included in a blockchain block. They compensate miners or validators and help prioritise transactions when capacity is limited.

- ### Semantic Classification
  - owl-class:: blockchain:transactionfees
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Transaction]]
  - bridges-to:: [[Bitcoin Mining]]
  - requires:: [[Bitcoin Network]]
  - enables:: [[Transaction Validation]]

- ### Content
  - Transaction fees are set by users and represent the difference between a transaction's inputs and outputs, which the block producer collects. When demand for block space is high, users raise fees to have their transactions confirmed sooner.
  - Fees provide an incentive for miners and validators in addition to block rewards, and they are expected to become a larger share of mining revenue as block subsidies decline over time. Fee estimation tools help users choose appropriate amounts.

- ### Provenance
  - sources:: [[https://developer.bitcoin.org/devguide/transactions.html]], [[https://en.bitcoin.it/wiki/Transaction_fees]]
  - migration-date:: 2026-05-29T00:00:00Z
