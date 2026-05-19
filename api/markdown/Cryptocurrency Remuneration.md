schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#CryptocurrencyRemuneration
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:cryptocurrency-remuneration
public:: true

# Cryptocurrency Remuneration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd8a70f88cf8730d27dfcd96e583bb336c10e90a7c35eca998ec43b30e20709a",
  "@type": "Page",
  "vc:slug": "cryptocurrency-remuneration",
  "title": "Cryptocurrency Remuneration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-250-blockchain-collaboration",
      "vc:label": "TELE-250-blockchain-collaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-251-smart-contract-coordination",
      "vc:label": "TELE-251-smart-contract-coordination"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptocurrency",
      "vc:label": "Cryptocurrency"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Lightning Network]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-147724fb1283"
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
      "vc:value": "distributed-collaboration"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#CryptocurrencyRemuneration"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0253"
    },
    {
      "vc:key": "maturity",
      "vc:value": "developing"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptocurrency Remuneration"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:cryptocurrency-remuneration"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:cryptocurrency-remuneration"
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
    "@id": "urn:visionflow:page:dd8a70f88cf8730d27dfcd96e583bb336c10e90a7c35eca998ec43b30e20709a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptocurrency-remuneration",
  "@type": "Class",
  "label": "Cryptocurrency Remuneration",
  "definition": "\"The payment of remote workers, freelancers, or distributed team members in cryptocurrency (Bitcoin, ereum, stablecoins) rather than traditional fiat currency, enabling borderless, instant, low-fee transactions that bypass traditional banking systems whilst providing financial inclusion for unban...",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptocurrency",
      "label": "Cryptocurrency"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptocurrency-remuneration:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd8a70f88cf8730d27dfcd96e583bb336c10e90a7c35eca998ec43b30e20709a"
  },
  "vc:resolutions": [
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-250-blockchain-collaboration]]",
      "resolved": "urn:visionflow:linked:tele-250-blockchain-collaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-251-smart-contract-coordination]]",
      "resolved": "urn:visionflow:linked:tele-251-smart-contract-coordination",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:owl:class:cryptocurrency",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:dd8a70f88cf8730d27dfcd96e583bb336c10e90a7c35eca998ec43b30e20709a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - "The payment of remote workers, freelancers, or distributed team members in cryptocurrency (Bitcoin, Ethereum, stablecoins) rather than traditional fiat currency, enabling borderless, instant, low-fee transactions that bypass traditional banking systems whilst providing financial inclusion for unbanked populations and facilitating blockchain-based collaboration."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:CryptocurrencyRemuneration
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency]]

- ### Content

  ## Definition

  **Cryptocurrency Remuneration** enables global teams to receive payments in digital assets, bypassing traditional wire transfers that take 3-5 days and cost 3-5% in fees. Stablecoins (USDC, DAI) pegged to USD avoid cryptocurrency volatility, whilst Lightning Network enables sub-penny transaction fees for microtask payments.

  ## Advantages

  - **Instant Settlement**: Payments confirmed in seconds-minutes
  - **Low Fees**: <£0.01 vs. 3-5% PayPal/wire transfer fees
  - **Global Access**: Anyone with internet can receive payments
  - **Financial Inclusion**: Enables unbanked populations to participate in remote work

  ## Challenges

  - **Volatility**: Bitcoin, Ethereum prices fluctuate (stablecoins mitigate this)
  - **Tax Complexity**: Cryptocurrency income/capital gains taxation complicated (HMRC guidance)
  - **Regulatory Risk**: Some jurisdictions restrict cryptocurrency use
  - **User Experience**: Requires cryptocurrency wallet literacy

  ## UK Tax Treatment (HMRC)

  - Cryptocurrency payments subject to income tax, National Insurance
  - Capital gains tax applies to token appreciation (£3,000 annual exemption, 2025)
  - Employers paying in crypto must withhold PAYE, NI

  #### Related Concepts
  - [[TELE-002-telecollaboration]]
  - [[TELE-250-blockchain-collaboration]]
  - [[TELE-251-smart-contract-coordination]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
