schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#DecentralizedExchangeDEX
legacy_uri:: urn:visionclaw:concept:infrastructure:decentralized-exchange-dex
public:: true

# Decentralized Exchange (DEX)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d",
  "@type": "Page",
  "vc:slug": "decentralized-exchange-dex",
  "title": "Decentralized Exchange (DEX)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:de-fi-wg",
      "vc:label": "DeFi WG"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-trading",
      "vc:label": "Decentralized Trading"
    },
    {
      "@id": "urn:visionflow:linked:iso-24165",
      "vc:label": "ISO 24165"
    },
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:token-swapping",
      "vc:label": "Token Swapping"
    },
    {
      "@id": "urn:visionflow:linked:trading-interface",
      "vc:label": "Trading Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-oracle",
      "vc:label": "Blockchain Oracle"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6b4b2effcf7b"
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
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#DecentralizedExchangeDEX"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20262"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralized Exchange (DEX)"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:decentralized-exchange-dex"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:decentralized-exchange-dex"
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
    "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:decentralized-exchange-dex",
  "@type": "OntologyClass",
  "label": "Decentralized Exchange (DEX)",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Peer-to-peer marketplace enabling direct token swaps and digital asset trading through smart contracts without centralized intermediaries or custodial control.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:hasPart": [
    {
      "@id": "urn:visionflow:linked:price-oracle",
      "vc:label": "Price Oracle"
    },
    {
      "@id": "urn:visionflow:linked:trading-interface",
      "vc:label": "Trading Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:automated-market-maker",
      "vc:label": "Automated Market Maker"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-pool",
      "vc:label": "Liquidity Pool"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:requires": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:decentralized-trading",
      "vc:label": "Decentralized Trading"
    },
    {
      "@id": "urn:visionflow:linked:token-swapping",
      "vc:label": "Token Swapping"
    },
    {
      "@id": "urn:visionflow:owl:class:liquidity-provision",
      "vc:label": "Liquidity Provision"
    },
    {
      "@id": "urn:visionflow:owl:class:price-discovery",
      "vc:label": "Price Discovery"
    }
  ],
  "vc:dependsOn": [
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-oracle",
      "vc:label": "Blockchain Oracle"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralized-exchange-dex:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[DeFi WG]]",
      "resolved": "urn:visionflow:linked:de-fi-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[Decentralized Trading]]",
      "resolved": "urn:visionflow:linked:decentralized-trading",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 24165]]",
      "resolved": "urn:visionflow:linked:iso-24165",
      "kind": "StubLink"
    },
    {
      "raw": "[[Price Oracle]]",
      "resolved": "urn:visionflow:linked:price-oracle",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Swapping]]",
      "resolved": "urn:visionflow:linked:token-swapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trading Interface]]",
      "resolved": "urn:visionflow:linked:trading-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Market Maker]]",
      "resolved": "urn:visionflow:owl:class:automated-market-maker",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Oracle]]",
      "resolved": "urn:visionflow:owl:class:blockchain-oracle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Pool]]",
      "resolved": "urn:visionflow:owl:class:liquidity-pool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Liquidity Provision]]",
      "resolved": "urn:visionflow:owl:class:liquidity-provision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Price Discovery]]",
      "resolved": "urn:visionflow:owl:class:price-discovery",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b9a2d554ce04f39075ab979b74365e4525de747f80113e605413015d13c76d3d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Peer-to-peer marketplace enabling direct token swaps and digital asset trading through smart contracts without centralized intermediaries or custodial control.

- ### Semantic Classification
  - owl-class:: infrastructure:DecentralizedExchange
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Automated Market Maker]], [[Liquidity Pool]], [[Smart Contract]], [[Trading Interface]], [[Price Oracle]]
  - requires:: [[Blockchain]], [[Digital Wallet]], [[Token Standard]], [[Consensus Mechanism]]
  - enables:: [[Token Swapping]], [[Liquidity Provision]], [[Decentralized Trading]], [[Price Discovery]]
  - depends-on:: [[Smart Contract]], [[Cryptographic Signature]], [[Blockchain Oracle]]

- ### Content
  Decentralized Exchange (DEX) — content pending enrichment.

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources:: [[ISO 24165]], [[DeFi WG]]
  - migration-date:: 2026-04-26T00:00:00Z
