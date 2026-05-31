public:: true

# Binance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed7d1957ec5f4c16b77066bd2c604351473dc42b3c288f39c0c3341bd3c677e6",
  "@type": "Page",
  "vc:slug": "binance",
  "title": "Binance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:coinbase",
      "vc:label": "Coinbase"
    },
    {
      "@id": "urn:visionflow:linked:digital-asset-domain",
      "vc:label": "Digital Asset Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Binance"
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
  "@id": "urn:ngm:class:binance",
  "@type": "Class",
  "label": "Binance",
  "definition": "Binance is a cryptocurrency exchange founded in 2017 by Changpeng Zhao and Yi He, and by trading volume it has been among the largest in the world. It offers spot and derivatives trading, staking, lending and a range of related services across many supported assets. The company developed the BNB token and the BNB Chain, an EVM-compatible blockchain network used for decentralised applications. Binance has faced significant regulatory scrutiny across multiple jurisdictions, including a 2023 settlement with United States authorities.",
  "domain": "binance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-asset-domain",
      "label": "Digital Asset Domain"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:binance:59bba357145c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed7d1957ec5f4c16b77066bd2c604351473dc42b3c288f39c0c3341bd3c677e6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Coinbase]]",
      "resolved": "urn:visionflow:linked:coinbase",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Asset Domain]]",
      "resolved": "urn:visionflow:linked:digital-asset-domain",
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
  - Binance is a cryptocurrency exchange founded in 2017 by Changpeng Zhao and Yi He, and by trading volume it has been among the largest in the world. It offers spot and derivatives trading, staking, lending and a range of related services across many supported assets. The company developed the BNB token and the BNB Chain, an EVM-compatible blockchain network used for decentralised applications. Binance has faced significant regulatory scrutiny across multiple jurisdictions, including a 2023 settlement with United States authorities.

- ### Semantic Classification
  - owl-class:: org:Binance
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Digital Asset Domain]]
  - bridges-to:: [[Coinbase]]

- ### Content
  - Binance operates a centralised exchange offering a wide range of spot pairs and derivatives, alongside services such as staking, savings products and a launchpad for new tokens. Its scale and breadth of listings made it a dominant venue for crypto trading globally.
  - The company created the BNB token, originally an exchange utility and discount token, and the BNB Chain, an EVM-compatible network that became a major host for decentralised finance and applications. This vertical integration distinguished Binance from exchanges that focus solely on trading.
  - Binance has been the subject of extensive regulatory action across several countries over anti-money-laundering and licensing concerns. In 2023 it reached a settlement with United States authorities that included substantial penalties and a change in leadership, illustrating the regulatory pressures facing large crypto exchanges.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
