```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:846d0f9085f75b5cee3dbd865e94b90b1b7e04bec0e8e1fbae21c7acd6097c1f",
  "@type": "Page",
  "vc:slug": "ant-pool",
  "title": "AntPool",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin-mining",
      "vc:label": "Bitcoin Mining"
    },
    {
      "@id": "urn:visionflow:linked:transaction-validation",
      "vc:label": "Transaction Validation"
    },
    {
      "@id": "urn:visionflow:linked:bitmain",
      "vc:label": "Bitmain"
    },
    {
      "@id": "urn:visionflow:linked:mining-pool",
      "vc:label": "Mining Pool"
    },
    {
      "@id": "urn:visionflow:linked:https-www-antpool-com",
      "vc:label": "https://www.antpool.com"
    },
    {
      "@id": "urn:visionflow:linked:https-www-antpool-com-help",
      "vc:label": "https://www.antpool.com/help"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AntPool"
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
  "@id": "urn:ngm:class:ant-pool",
  "@type": "Class",
  "label": "AntPool",
  "definition": "AntPool is a Bitcoin mining pool operated in association with Bitmain. It is one of the larger pools by share of network hash rate.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mining-pool",
      "label": "Mining Pool"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining",
        "label": "Bitcoin Mining"
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

- ### Definition
  - AntPool is a Bitcoin mining pool operated in association with Bitmain. It is one of the larger pools by share of network hash rate.

- ### Semantic Classification
  - owl-class:: blockchain:AntPool
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Mining Pool]]
  - bridges-to:: [[Bitmain]]
  - requires:: [[Bitcoin Mining]]
  - enables:: [[Transaction Validation]]

- ### Content
  - AntPool lets miners combine their hash power to receive steadier rewards, coordinating work and distributing payouts based on contributed shares. It has consistently held a notable portion of Bitcoin network hash rate.
  - The pool is connected to the hardware manufacturer Bitmain and supports several proof-of-work cryptocurrencies. It offers different payout schemes that distribute reward and variance in different ways.

- ### Provenance
  - sources:: [[https://www.antpool.com]], [[https://www.antpool.com/help]]
  - migration-date:: 2026-05-29T00:00:00Z
