public:: true

# Payment Channels
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8228bf6b38c98af2315b89412aaac7ff1365ab48eac491e64ff2efe0f0586d8c",
  "@type": "Page",
  "vc:slug": "payment-channels",
  "title": "Payment Channels",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:payment-channel",
      "vc:label": "Payment Channel"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Payment Channels"
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
  "@id": "urn:ngm:class:payment-channels",
  "@type": "Class",
  "label": "Payment Channels",
  "definition": "Payment channels are off-chain constructs that let two parties exchange many bitcoin transactions while only recording opening and closing balances on the blockchain.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:payment-channel",
      "label": "Payment Channel"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
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
  "@id": "urn:visionflow:annotation:link-resolutions:payment-channels:cdb4a83d9464",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8228bf6b38c98af2315b89412aaac7ff1365ab48eac491e64ff2efe0f0586d8c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment Channel]]",
      "resolved": "urn:visionflow:linked:payment-channel",
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
  - Payment channels are off-chain constructs that let two parties exchange many bitcoin transactions while only recording opening and closing balances on the blockchain.

- ### Semantic Classification
  - owl-class:: blockchain:PaymentChannels
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Payment Channel]]
  - bridges-to:: [[Lightning Network]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]], [[Smart Contract]]
  - enables:: [[Lightning Network]]

- ### Content
  - A payment channel locks funds in a multisignature output on the blockchain, after which the two parties update their respective balances by exchanging signed transactions off-chain. Only the final state is settled on the chain when the channel closes.
  - Linking many channels into a network allows payments to be routed between parties who do not share a direct channel, which is the basis of the Lightning Network.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
