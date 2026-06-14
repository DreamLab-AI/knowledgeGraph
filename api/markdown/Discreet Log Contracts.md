public:: true

# Discreet Log Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7203fec543eebb721a2c779617d5f95887812b8051f245da0af9b602556a8f58",
  "@type": "Page",
  "vc:slug": "discreet-log-contracts",
  "title": "Discreet Log Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:schnorr-signature",
      "vc:label": "Schnorr Signature"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-proof",
      "vc:label": "Cryptographic Proof"
    },
    {
      "@id": "urn:visionflow:linked:atomic-swap",
      "vc:label": "Atomic Swap"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Discreet Log Contracts"
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
  "@id": "urn:ngm:class:discreet-log-contracts",
  "@type": "Class",
  "label": "Discreet Log Contracts",
  "definition": "A scheme for executing conditional Bitcoin payments based on signed outcomes from external oracles, where the contract logic stays off-chain and only the settled transaction is broadcast.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-contract",
      "label": "Smart Contract"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
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
  "@id": "urn:visionflow:annotation:link-resolutions:discreet-log-contracts:0f31b9218df3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7203fec543eebb721a2c779617d5f95887812b8051f245da0af9b602556a8f58"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Schnorr Signature]]",
      "resolved": "urn:visionflow:linked:schnorr-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Proof]]",
      "resolved": "urn:visionflow:linked:cryptographic-proof",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Atomic Swap]]",
      "resolved": "urn:visionflow:linked:atomic-swap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
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
  - A scheme for executing conditional Bitcoin payments based on signed outcomes from external oracles, where the contract logic stays off-chain and only the settled transaction is broadcast.

- ### Semantic Classification
  - owl-class:: blockchain:DiscreetLogContracts
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Smart Contract]]
  - bridges-to:: [[Bitcoin Script]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Schnorr Signature]], [[Cryptographic Proof]]
  - enables:: [[Atomic Swap]]

- ### Content
  - Discreet Log Contracts (DLCs) allow two parties to enter a conditional Bitcoin contract whose payout depends on a future event attested by an oracle. The oracle signs the outcome, and the corresponding signature reveals the key needed to claim the agreed payout, keeping the contract indistinguishable from an ordinary transaction on-chain.
  - Because the contract terms and oracle remain off-chain, DLCs offer privacy and scalability advantages over fully on-chain contracts, and they are used for derivatives, prediction markets and other event-contingent settlements on Bitcoin.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
