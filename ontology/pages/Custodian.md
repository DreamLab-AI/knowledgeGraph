public:: true

# Custodian

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:custodian", "@type":"Page", "title":"Custodian", "vc:slug":"custodian", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:custodian",
  "@type":"Class",
  "label":"Custodian",
  "definition":"A custodian is an entity entrusted with safeguarding assets on behalf of others, holding and securing them while the legal or beneficial owner retains a claim. In digital-asset markets a custodian secures cryptographic keys and underlying holdings for clients and, in the case of fiat-backed stablecoins, holds the reserves that back issued tokens. Custodianship concentrates security and introduces counterparty risk, which is mitigated through controls such as segregation, audits, and proof of reserves.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:custody","label":"Custody"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:custody","label":"Custody"},{"@id":"urn:ngm:class:digital-asset-custody","label":"Digital Asset Custody Innovation"}],
    "hasPart":[{"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},{"@id":"urn:ngm:class:multisig","label":"Multisig"}],
    "uses":[{"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},{"@id":"urn:ngm:class:hot-wallet","label":"Hot Wallet"},{"@id":"urn:ngm:class:multisig","label":"Multisig"}],
    "implements":[{"@id":"urn:ngm:class:institutional-custody","label":"Institutional Custody"}],
    "enables":[{"@id":"urn:ngm:class:asset-management","label":"Asset Management"},{"@id":"urn:ngm:class:proof-of-reserves","label":"Proof of Reserves"}],
    "requires":[{"@id":"urn:ngm:class:trust","label":"Trust"},{"@id":"urn:ngm:class:kyc","label":"KYC"}],
    "supports":[{"@id":"urn:ngm:class:tether","label":"Tether"},{"@id":"urn:ngm:class:centralized-exchange","label":"Centralized Exchange"},{"@id":"urn:ngm:class:stablecoin","label":"Stablecoin"}],
    "dependsOn":[{"@id":"urn:ngm:class:trust","label":"Trust"}],
    "standardizedBy":[{"@id":"urn:ngm:class:regulation","label":"Regulation"}],
    "relatedTo":[{"@id":"urn:ngm:class:audit","label":"Audit and Assurance"},{"@id":"urn:ngm:class:aml","label":"AML"},{"@id":"urn:ngm:class:transparency","label":"Transparency"}],
    "contrastsWith":[{"@id":"urn:ngm:class:self-custody","label":"Self-Custody"}],
    "bridgesTo":[{"@id":"urn:ngm:class:counterparty-risk","label":"Counterparty Risk"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A Custodian is an entity that safeguards assets for others under [[Custody]] and [[Digital Asset Custody Innovation]], securing keys and reserves while the owner keeps a claim.
- It relies on [[Cold Storage]], [[Multisig]], and [[Trust]], and stands in contrast to [[Self-Custody]].
- ### Overview
- A custodian holds assets on behalf of clients who do not wish, or are not permitted, to hold them directly. In traditional finance this means safekeeping securities and cash; in digital-asset markets it means securing the private keys that control on-chain holdings, together with the operational and legal controls around them.
- Custodians serve several roles in the crypto ecosystem. Exchanges custody user balances, institutional custodians offer regulated safekeeping for funds and corporations, and stablecoin issuers act as or appoint custodians for the fiat reserves backing their tokens. In each case the custodian concentrates security expertise but also becomes a single point of trust and potential failure.
- Managing this counterparty risk is central to custodianship. Practices include segregating client assets, splitting key control across multiple parties via multisignature or threshold schemes, keeping the bulk of holdings in offline cold storage, and demonstrating solvency through independent audits and proof of reserves.
- ### Key aspects
- The custodian holds assets while the client retains legal or beneficial ownership.
- Key management combines cold storage for the bulk of funds with limited hot wallets for liquidity.
- Multisignature and threshold schemes prevent any single party from moving assets unilaterally.
- Segregation, audits, and proof of reserves demonstrate that client assets are intact.
- Regulation and KYC/AML obligations frame how licensed custodians operate.
- ### Applications
- Institutional safekeeping of digital assets for funds and corporations.
- Exchange-held balances for users who do not self-custody.
- Reserve custody for fiat-backed stablecoins such as Tether.
- Regulated services bridging traditional finance and digital-asset markets.
- ### Relationships
- partOf:: [[Custody]]
- partOf:: [[Digital Asset Custody Innovation]]
- hasPart:: [[Cold Storage]]
- hasPart:: [[Multisig]]
- uses:: [[Cold Storage]]
- uses:: [[Hot Wallet]]
- uses:: [[Multisig]]
- implements:: [[Institutional Custody]]
- enables:: [[Asset Management]]
- enables:: [[Proof of Reserves]]
- requires:: [[Trust]]
- requires:: [[KYC]]
- supports:: [[Tether]]
- supports:: [[Centralized Exchange]]
- supports:: [[Stablecoin]]
- dependsOn:: [[Trust]]
- standardizedBy:: [[Regulation]]
- relatedTo:: [[Audit and Assurance]]
- relatedTo:: [[AML]]
- relatedTo:: [[Transparency]]
- contrastsWith:: [[Self-Custody]]
- bridgesTo:: [[Counterparty Risk]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
