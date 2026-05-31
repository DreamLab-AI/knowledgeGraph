public:: true

# Digital Asset Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:43feefda18381fd74e15159f3fed150a051d98f1b6c762fa29818fe75fff53a8",
  "@type": "Page",
  "vc:slug": "digital-asset-domain",
  "title": "Digital Asset Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fungible-token",
      "vc:label": "Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:non-fungible-token",
      "vc:label": "Non-Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:tokenised-security",
      "vc:label": "Tokenised Security"
    },
    {
      "@id": "urn:visionflow:linked:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-primitive",
      "vc:label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:visionflow:linked:asset-tokenisation",
      "vc:label": "Asset Tokenisation"
    },
    {
      "@id": "urn:visionflow:linked:programmable-ownership",
      "vc:label": "Programmable Ownership"
    },
    {
      "@id": "urn:visionflow:linked:atomic-settlement",
      "vc:label": "Atomic Settlement"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:capital-markets-domain",
      "vc:label": "Capital Markets Domain"
    },
    {
      "@id": "urn:visionflow:linked:payment-systems-domain",
      "vc:label": "Payment Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Asset Domain"
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
  "@id": "urn:ngm:class:digital-asset-domain",
  "@type": "Class",
  "label": "Digital Asset Domain",
  "definition": "The Digital Asset Domain classifies concepts relating to value representations that are recorded, transferred, and settled on distributed ledgers. It covers tokens, their issuance and lifecycle, and the standards that define their behaviour. As a subject classification under the Blockchain Domain, it scopes the asset abstraction itself rather than the trading venues or regulatory regimes that surround it.",
  "domain": "digital-asset",
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
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      },
      {
        "@id": "urn:ngm:class:tokenised-security",
        "label": "Tokenised Security"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      },
      {
        "@id": "urn:ngm:class:programmable-ownership",
        "label": "Programmable Ownership"
      },
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-asset-domain:ab9d1741ffe8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:43feefda18381fd74e15159f3fed150a051d98f1b6c762fa29818fe75fff53a8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:linked:fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Fungible Token]]",
      "resolved": "urn:visionflow:linked:non-fungible-token",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenised Security]]",
      "resolved": "urn:visionflow:linked:tokenised-security",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:linked:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Primitive]]",
      "resolved": "urn:visionflow:linked:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Tokenisation]]",
      "resolved": "urn:visionflow:linked:asset-tokenisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Programmable Ownership]]",
      "resolved": "urn:visionflow:linked:programmable-ownership",
      "kind": "StubLink"
    },
    {
      "raw": "[[Atomic Settlement]]",
      "resolved": "urn:visionflow:linked:atomic-settlement",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Capital Markets Domain]]",
      "resolved": "urn:visionflow:linked:capital-markets-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment Systems Domain]]",
      "resolved": "urn:visionflow:linked:payment-systems-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
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
  - The Digital Asset Domain classifies concepts relating to value representations that are recorded, transferred, and settled on distributed ledgers. It covers tokens, their issuance and lifecycle, and the standards that define their behaviour. As a subject classification under the Blockchain Domain, it scopes the asset abstraction itself rather than the trading venues or regulatory regimes that surround it.

- ### Semantic Classification
  - owl-class:: asset:DigitalAssetDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Decentralised Finance Domain]], [[Capital Markets Domain]], [[Payment Systems Domain]]
  - has-part:: [[Fungible Token]], [[Non-Fungible Token]], [[Stablecoin]], [[Tokenised Security]], [[Token Standard]]
  - requires:: [[Smart Contract]], [[Distributed Ledger]], [[Cryptographic Primitive]]
  - enables:: [[Asset Tokenisation]], [[Programmable Ownership]], [[Atomic Settlement]]

- ### Content
  - The Digital Asset Domain treats the token as the unit of analysis. Fungible tokens represent interchangeable value, non-fungible tokens encode unique ownership, and tokenised securities and stablecoins bind on-ledger units to off-ledger claims or reference values. Token standards specify the interfaces and behaviours that wallets, exchanges, and contracts can rely upon, allowing assets to circulate across applications.
  - An asset has a lifecycle: issuance, transfer, custody, and redemption or burning. Each stage is enforced by smart contracts and recorded on a distributed ledger, which provides a tamper-evident history and supports atomic settlement between parties. The properties of the underlying ledger, including finality and throughput, shape what asset designs are practical.
  - Positioned beneath the Blockchain Domain, this domain supplies the value objects that decentralised finance composes and that capital markets and payment systems consume. Keeping the asset abstraction separate from market structure and regulation lets the ontology describe a tokenised bond and a meme token with the same vocabulary while attaching different obligations elsewhere in the graph.

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]]
  - migration-date:: 2026-05-29T00:00:00Z
