public:: true

# Gas Fee
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f12270ce08a004c74291bf426e8187079b2f0ffa64c4defe726b13972915bb7a",
  "@type": "Page",
  "vc:slug": "gas-fee",
  "title": "Gas Fee",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:transaction-fee",
      "vc:label": "Transaction Fee"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Gas Fee"
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
  "@id": "urn:ngm:class:gas-fee",
  "@type": "Class",
  "label": "Gas Fee",
  "definition": "A gas fee is the payment a user makes to a blockchain network to have a transaction or smart contract operation executed and included in a block.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction-fee",
      "label": "Transaction Fee"
    }
  ],
  "relations": {
    "requires": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:gas-fee:cb89cb0e927a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f12270ce08a004c74291bf426e8187079b2f0ffa64c4defe726b13972915bb7a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transaction Fee]]",
      "resolved": "urn:visionflow:linked:transaction-fee",
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
  - A gas fee is the payment a user makes to a blockchain network to have a transaction or smart contract operation executed and included in a block.

- ### Semantic Classification
  - owl-class:: blockchain:GasFee
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Transaction Fee]]
  - bridges-to:: [[Ethereum Smart Contract Platform]]
  - requires:: [[Smart Contract]]

- ### Content
  - On Ethereum, gas measures the computational work required by an operation, and the gas fee is the gas amount multiplied by a price per unit of gas. Fees compensate validators and limit resource consumption by costly operations.
  - Following the EIP-1559 change, Ethereum fees consist of a base fee that is burned and an optional priority tip paid to validators, with the base fee adjusting according to network demand.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
