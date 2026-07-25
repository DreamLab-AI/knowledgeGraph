public:: true

# Transfer Of Funds Regulation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:transfer-of-funds-regulation", "@type":"Page", "title":"Transfer Of Funds Regulation", "vc:slug":"transfer-of-funds-regulation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:transfer-of-funds-regulation",
  "@type":"Class",
  "label":"Transfer Of Funds Regulation",
  "definition":"The Transfer of Funds Regulation is a body of financial regulation requiring that information about the payer and payee accompany transfers of funds and certain crypto-asset transfers, so that transactions remain traceable for anti-money-laundering and counter-terrorist-financing purposes. It implements the Financial Action Task Force travel rule within a regulatory framework, obliging payment service providers and crypto-asset service providers to collect, transmit, and screen originator and beneficiary data. It is a central pillar of payment-chain transparency.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:financial-regulation","label":"Financial Regulation"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:travel-rule","label":"Travel Rule"}],
    "standardizedBy":[{"@id":"urn:ngm:class:financial-action-task-force","label":"Financial Action Task Force"}],
    "requires":[{"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"},{"@id":"urn:ngm:class:beneficial-ownership","label":"Beneficial Ownership"}],
    "supports":[{"@id":"urn:ngm:class:anti-money-laundering","label":"Anti-Money Laundering"},{"@id":"urn:ngm:class:counter-terrorist-financing","label":"Counter-Terrorist Financing"}],
    "enables":[{"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"}],
    "uses":[{"@id":"urn:ngm:class:payment-system","label":"Payment System"}],
    "relatedTo":[{"@id":"urn:ngm:class:payment-service-provider","label":"Payment Service Provider"},{"@id":"urn:ngm:class:crypto-asset-service-provider","label":"Crypto-Asset Service Provider"},{"@id":"urn:ngm:class:governance","label":"Governance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:privacy","label":"Privacy"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- The Transfer of Funds Regulation requires that payer and payee information accompany transfers of funds and certain crypto-asset transfers, keeping transactions traceable.
- It implements the [[Travel Rule]] within a [[Financial Regulation]] framework for [[Anti-Money Laundering]] and [[Counter-Terrorist Financing]].
- It obliges payment and crypto-asset service providers to collect, transmit, and screen originator and beneficiary data.
- ### Overview
- The regulation closes the anonymity gap in payment chains by ensuring identifying data travels with the value being moved.
- It extends long-standing wire-transfer transparency rules to the crypto-asset sector, aligning regulated entities with FATF standards.
- Compliance is enforced through obligations on intermediaries to verify, transmit, and act on missing or suspicious information.
- It sits at the intersection of [[Governance]], financial crime prevention, and data protection, balancing traceability against [[Privacy]].
- ### Mechanisms
- Information requirements: originator and beneficiary name, account or wallet identifiers, and supporting data.
- Travel-rule transmission: passing required data between sending and receiving service providers.
- Screening and monitoring: checking parties against sanctions lists and detecting incomplete transfers.
- Beneficial ownership and KYC: identifying who ultimately controls the funds.
- Enforcement: supervisory penalties and obligations to reject or flag non-compliant transfers.
- ### Applications
- Cross-border bank and payment-institution transfers carrying mandated payer or payee data.
- Crypto-asset service providers exchanging travel-rule information for on-chain transfers.
- Compliance and transaction-monitoring systems screening for sanctions and financial crime.
- Regulatory reporting and audit of payment-chain transparency.
- ### Relationships
- implements:: [[Travel Rule]]
- standardizedBy:: [[Financial Action Task Force]]
- requires:: [[Know Your Customer]]
- requires:: [[Beneficial Ownership]]
- supports:: [[Anti-Money Laundering]]
- supports:: [[Counter-Terrorist Financing]]
- enables:: [[Regulatory Compliance]]
- uses:: [[Payment System]]
- relatedTo:: [[Payment Service Provider]]
- relatedTo:: [[Crypto-Asset Service Provider]]
- relatedTo:: [[Governance]]
- bridgesTo:: [[Privacy]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
