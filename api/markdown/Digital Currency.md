schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#DigitalCurrency
legacy_uri:: urn:visionclaw:concept:spatial-computing:digital-currency
public:: true

# Digital Currency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67",
  "@type": "Page",
  "vc:slug": "digital-currency",
  "title": "Digital Currency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:programmable-money",
      "vc:label": "Programmable Money"
    },
    {
      "@id": "urn:visionflow:linked:security-infrastructure",
      "vc:label": "Security Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:transaction-network",
      "vc:label": "Transaction Network"
    },
    {
      "@id": "urn:visionflow:linked:virtual-transactions",
      "vc:label": "Virtual Transactions"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:financial-technology",
      "vc:label": "Financial Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-048fb25f9933"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#DigitalCurrency"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9855"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Currency"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-currency"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-currency"
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
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:digital-currency",
  "@type": "OntologyClass",
  "label": "Digital Currency",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:financial-technology",
      "vc:label": "Financial Technology"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Any form of monetary value that exists purely in electronic format, encompassing central bank digital currencies, cryptocurrencies, stablecoins, and virtual currencies used within metaverse economies for transactions, payments, and value exchange without physical representation. bridges-to:: [[Blockchain]]",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:security-infrastructure",
      "vc:label": "Security Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:transaction-network",
      "vc:label": "Transaction Network"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:programmable-money",
      "vc:label": "Programmable Money"
    },
    {
      "@id": "urn:visionflow:linked:virtual-transactions",
      "vc:label": "Virtual Transactions"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-payments",
      "vc:label": "Digital Payments"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-currency:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67"
  },
  "vc:resolutions": [
    {
      "raw": "[[Programmable Money]]",
      "resolved": "urn:visionflow:linked:programmable-money",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Infrastructure]]",
      "resolved": "urn:visionflow:linked:security-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction Network]]",
      "resolved": "urn:visionflow:linked:transaction-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Transactions]]",
      "resolved": "urn:visionflow:linked:virtual-transactions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Payments]]",
      "resolved": "urn:visionflow:owl:class:digital-payments",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Technology]]",
      "resolved": "urn:visionflow:owl:class:financial-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:315f40ff4ee75273a23922b4e4364602fad52e9cfc76305cff9de29686a7df67@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Any form of monetary value that exists purely in electronic format, encompassing central bank digital currencies, cryptocurrencies, stablecoins, and virtual currencies used within metaverse economies for transactions, payments, and value exchange without physical representation.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalCurrency
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Financial Technology]]
  - requires:: [[Digital Wallet]], [[Transaction Network]], [[Security Infrastructure]]
  - enables:: [[Digital Payments]], [[Virtual Transactions]], [[Programmable Money]]

- ### Content

  - ## Technical Details
  - **Currency Types**:
		- CBDCs: Central bank issued, centralized ledger
		- Cryptocurrencies: Decentralized, blockchain-based (Bitcoin, Ethereum)
		- Stablecoins: Pegged to fiat or commodities (USDT, USDC)
		- Virtual currencies: In-game or platform-specific tokens
  - **Global CBDC Status (2024)**:
		- 134 countries (98% of GDP) exploring CBDCs
		- China e-CNY: 7 trillion yuan ($986B) transaction volume
		- India e-rupee: 334% growth, ₹10.16 billion in circulation
		- 91% of surveyed central banks exploring retail or wholesale CBDCs
  - **Technology Stack**:
		- Distributed ledger technology (DLT)
		- Smart contracts for programmable money
		- Cross-border payment protocols
		- Digital wallet infrastructure
  - **Regulatory Framework**: EU MiCAR effective June 2024, US halted retail CBDC work 2025
  - ## Applications
  - Cross-border remittances
  - Metaverse commerce
  - Programmable payments
  - Financial inclusion
  - Micropayment systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
