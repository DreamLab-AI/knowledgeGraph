public:: true

# Bitfinex
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:714dd29a96b4d35d04da15e27a3e01a07b7abbf3757725bddc5de74f1c06ef2d",
  "@type": "Page",
  "vc:slug": "bitfinex",
  "title": "Bitfinex",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:tether",
      "vc:label": "Tether"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:https-www-bitfinex-com",
      "vc:label": "https://www.bitfinex.com"
    },
    {
      "@id": "urn:visionflow:linked:https-docs-bitfinex-com",
      "vc:label": "https://docs.bitfinex.com"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitfinex"
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
  "@id": "urn:ngm:class:bitfinex",
  "@type": "Class",
  "label": "Bitfinex",
  "definition": "Bitfinex is a cryptocurrency exchange that allows trading of digital assets and is associated with the issuer of the Tether stablecoin. It is operated by iFinex.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin Proof-of-Work Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitfinex:00576e55b7ae",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:714dd29a96b4d35d04da15e27a3e01a07b7abbf3757725bddc5de74f1c06ef2d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tether]]",
      "resolved": "urn:visionflow:linked:tether",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.bitfinex.com]]",
      "resolved": "urn:visionflow:linked:https-www-bitfinex-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://docs.bitfinex.com]]",
      "resolved": "urn:visionflow:linked:https-docs-bitfinex-com",
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
  - Bitfinex is a cryptocurrency exchange that allows trading of digital assets and is associated with the issuer of the Tether stablecoin. It is operated by iFinex.

- ### Semantic Classification
  - owl-class:: blockchain:Bitfinex
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency]]
  - bridges-to:: [[Tether]]
  - requires:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - Bitfinex is a trading platform for cryptocurrencies that offers spot trading, margin trading, and related services. It has operated since the early years of cryptocurrency exchanges.
  - The exchange shares ownership with Tether, the company behind a widely used stablecoin. Bitfinex provides an interface and matching engine for buyers and sellers of digital assets.

- ### Provenance
  - sources:: [[https://www.bitfinex.com]], [[https://docs.bitfinex.com]]
  - migration-date:: 2026-05-29T00:00:00Z
