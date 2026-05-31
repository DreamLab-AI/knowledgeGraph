public:: true

# Monero
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6430912ef24bbcbd4ca2c6951b36e0384fd15d7061dbf6087b2edaa51058a1c4",
  "@type": "Page",
  "vc:slug": "monero",
  "title": "Monero",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:proof-of-work",
      "vc:label": "Proof of Work"
    },
    {
      "@id": "urn:visionflow:linked:ring-signature",
      "vc:label": "Ring Signature"
    },
    {
      "@id": "urn:visionflow:linked:zcash",
      "vc:label": "Zcash"
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
      "vc:value": "Monero"
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
  "@id": "urn:ngm:class:monero",
  "@type": "Class",
  "label": "Monero",
  "definition": "Monero is a privacy-focused cryptocurrency launched in 2014 that obscures the sender, recipient and amount of every transaction by default. It uses ring signatures to hide the true spender among decoys, stealth addresses to conceal the recipient, and a confidential transaction scheme called RingCT to hide amounts. The protocol uses a proof-of-work algorithm designed to favour general-purpose hardware over specialised mining equipment. Monero is among the most widely used privacy coins and is governed by an open community development process.",
  "domain": "monero",
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
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:ring-signature",
        "label": "Ring Signature"
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
  "@id": "urn:visionflow:annotation:link-resolutions:monero:4469412a3887",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6430912ef24bbcbd4ca2c6951b36e0384fd15d7061dbf6087b2edaa51058a1c4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Proof of Work]]",
      "resolved": "urn:visionflow:linked:proof-of-work",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ring Signature]]",
      "resolved": "urn:visionflow:linked:ring-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Zcash]]",
      "resolved": "urn:visionflow:linked:zcash",
      "kind": "StubLink"
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
  - Monero is a privacy-focused cryptocurrency launched in 2014 that obscures the sender, recipient and amount of every transaction by default. It uses ring signatures to hide the true spender among decoys, stealth addresses to conceal the recipient, and a confidential transaction scheme called RingCT to hide amounts. The protocol uses a proof-of-work algorithm designed to favour general-purpose hardware over specialised mining equipment. Monero is among the most widely used privacy coins and is governed by an open community development process.

- ### Semantic Classification
  - owl-class:: bc:Monero
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Zcash]]
  - requires:: [[Proof of Work]], [[Ring Signature]]

- ### Content
  - Monero is built around mandatory privacy, in contrast to chains where transaction details are public by default. Every transaction combines ring signatures, which mix a user's output with chosen decoys so observers cannot tell which input was actually spent, with stealth addresses that generate a unique one-time destination for each payment.
  - Amounts are concealed using Ring Confidential Transactions, a commitment scheme that lets the network verify a transaction balances without revealing the values involved. The combination makes the transaction graph far harder to analyse than that of transparent ledgers.
  - The project uses a proof-of-work algorithm intended to resist specialised mining hardware and to keep mining accessible to ordinary computers, and it has periodically changed the algorithm to maintain this property. Monero is maintained by a decentralised community and is frequently studied in discussions of financial privacy and regulation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
