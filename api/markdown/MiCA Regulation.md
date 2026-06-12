public:: true

# MiCA Regulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mi-ca-regulation",
  "@type": "Page",
  "vc:slug": "mi-ca-regulation",
  "title": "MiCA Regulation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mi-ca-regulation",
  "@type": "Class",
  "label": "MiCA Regulation",
  "definition": "The Markets in Crypto-Assets (MiCA) Regulation (EU 2023/1114) is the European Union's comprehensive legislative framework governing the issuance, offering, and trading of crypto-assets, including asset-referenced tokens, e-money tokens, and utility tokens. Adopted in June 2023 and phasing in through December 2024, MiCA establishes authorisation requirements for crypto-asset service providers (CASPs), disclosure obligations analogous to prospectus rules, and prudential standards for stablecoin issuers, creating the world's first complete statutory crypto-asset regime across a major economic bloc.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:aml-kyc-compliance", "label": "AML KYC Compliance"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:european-commission", "label": "European Commission"},
      {"@id": "urn:ngm:class:regulatory-framework", "label": "Regulatory Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:stablecoin-regulation", "label": "Stablecoin Regulation"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"},
      {"@id": "urn:ngm:class:blockchain-compliance", "label": "Blockchain Compliance"},
      {"@id": "urn:ngm:class:blockchain-analytics", "label": "Blockchain Analytics"},
      {"@id": "urn:ngm:class:ethereum-smart-contract-platform", "label": "Ethereum"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:digital-asset-market", "label": "Digital Asset Market"},
      {"@id": "urn:ngm:class:financial-stability", "label": "Financial Stability"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:digital-regulation", "label": "Digital Regulation"},
      {"@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - MiCA (Markets in Crypto-Assets) Regulation is the EU's landmark statutory framework that subjects crypto-asset issuers and service providers to authorisation, disclosure, and prudential requirements for the first time across all 27 member states.

- ### Relationships
  - MiCA is a subclass of [[Financial Regulation]] and was enacted by the [[European Commission]] within the broader [[Regulatory Framework]] for digital finance. It directly governs [[Cryptocurrency]] markets, imposes [[Stablecoin Regulation]] on asset-referenced and e-money tokens, and demands [[Compliance Framework]] adherence and [[AML KYC Compliance]] from all covered entities. [[Blockchain Analytics]] tools have become essential for satisfying MiCA's transaction monitoring requirements. The regulation applies to assets issued on networks such as [[Ethereum Smart Contract Platform]] and interacts with — but explicitly carves out — [[Securities Regulation]] (MiFID II) and [[Digital Regulation]] (DORA) in adjacent domains.

- ### Content
  - MiCA emerged from the European Commission's Digital Finance Strategy announced in September 2020 and was formally proposed in that same package. The regulation fills a gap identified when existing financial law — the Prospectus Regulation, MiFID II, AIFMD — was found not to cover most crypto-assets because they lacked the legal characteristics of financial instruments. MiCA therefore creates sui generis categories: (1) utility tokens, (2) asset-referenced tokens (ARTs), and (3) electronic money tokens (EMTs), each with calibrated disclosure, reserve, and governance obligations.

  - For ARTs and EMTs (broadly covering stablecoins), MiCA imposes particularly stringent requirements: issuers must be EU-authorised legal entities, maintain reserve assets commensurate with outstanding liabilities, publish a white paper approved by the national competent authority, and cap daily transaction volumes for tokens that threaten monetary sovereignty. Significant tokens — those exceeding five million holders or one billion euros in market capitalisation — face enhanced supervision by the European Banking Authority (EBA).

  - Crypto-asset service providers (CASPs) — exchanges, custodians, portfolio managers, execution brokers — must obtain authorisation in at least one EU member state and then passport that authorisation across the bloc. CASPs are subject to fit-and-proper governance tests, capital requirements, conflict-of-interest policies, client asset segregation, and market-abuse surveillance obligations. The Travel Rule requirements for transfers of crypto-assets above 1,000 euros align MiCA with FATF Recommendation 16.

  - MiCA's phase-in schedule saw stablecoin provisions applicable from 30 June 2024 and CASP rules from 30 December 2024. The regulation explicitly excludes NFTs (when truly non-fungible), security tokens (which remain under MiFID II), decentralised finance protocols with no identifiable issuer, and central bank digital currencies. These exclusions create interpretive grey zones, particularly around fractionated NFTs and partially decentralised DeFi, that the European Securities and Markets Authority (ESMA) is addressing through delegated acts and Q&A guidance.

  - MiCA has had significant global regulatory spillover: jurisdictions including the UK, Singapore, Hong Kong, the UAE, and several US states have studied or cited MiCA as a template for their own crypto-asset frameworks. Its comprehensive, markets-oriented approach contrasts with the US's enforcement-led posture and positions the EU as the default regulatory benchmark for internationally active crypto-asset businesses seeking regulatory clarity.
