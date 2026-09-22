public:: true

# Qualified Custodian

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:qualified-custodian", "@type":"Page", "title":"Qualified Custodian", "vc:slug":"qualified-custodian", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:qualified-custodian",
  "@type":"Class",
  "label":"Qualified Custodian",
  "definition":"A qualified custodian is a regulated financial institution authorised to hold client assets, including digital assets, under fiduciary and supervisory standards set by securities regulators. It provides segregated accounts, independent audit and statutory protections that distinguish it from informal custody arrangements. For institutional investors, using a qualified custodian is often a regulatory precondition for holding crypto assets.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:digital-asset-custody","label":"Digital Asset Custody"}],
  "relations":{
    "contrastsWith":[
      {"@id":"urn:ngm:class:self-custody","label":"Self-Custody"},
      {"@id":"urn:ngm:class:custodial-wallet","label":"Custodial Wallet"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:regulatory-compliance","label":"Regulatory Compliance"},
      {"@id":"urn:ngm:class:securities-regulation","label":"Securities Regulation"},
      {"@id":"urn:ngm:class:know-your-customer","label":"Know Your Customer"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:asset-management","label":"Asset Management"},
      {"@id":"urn:ngm:class:custody","label":"Custody"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cold-storage","label":"Cold Storage"},
      {"@id":"urn:ngm:class:proof-of-reserve","label":"Proof of Reserve"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:audit-trail","label":"Audit Trail"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:compliance","label":"Compliance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:digital-asset-custody","label":"Digital Asset Custody"},
      {"@id":"urn:ngm:class:custodial-exchange","label":"Custodial Exchange"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A qualified custodian is a regulated institution authorised to hold client assets under fiduciary standards. A specialised form of [[Digital Asset Custody]], it contrasts with [[Self-Custody]], requires [[Securities Regulation]] compliance, and provides the statutory protection institutions need under [[Regulatory Compliance]] regimes.
- ### Overview
  - Securities rules in many jurisdictions require investment advisers and funds to hold client assets with a qualified custodian — an entity such as a bank, trust company or regulated custodian subject to supervision and audit.
  - Applied to digital assets, this concept raises questions about how cryptographic keys are held, segregated and audited in a way that satisfies traditional custody obligations.
  - Qualified custody combines regulatory authorisation with hardened operational security, giving institutional investors a defensible, compliant route to holding crypto assets.
- ### Key aspects
  - Regulatory authorisation: the custodian operates under a supervisory regime.
  - Segregation: client assets are held separately from the custodian's own.
  - Fiduciary duty: the custodian acts in clients' interests, with attendant liability.
  - Independent audit: holdings are verified by external examination.
  - Statutory protection: clients gain legal safeguards on insolvency.
- ### Mechanisms
  - Cold storage and multi-party key management for security of digital assets.
  - Segregated on-chain and ledger accounts per client.
  - Proof-of-reserve and audit trails to evidence holdings.
  - KYC/AML and reporting controls to satisfy regulators.
- ### Applications
  - Custody for funds, advisers and institutional crypto holders.
  - Enabling regulated investment products backed by digital assets.
  - Supporting tokenised securities under existing custody rules.
- ### Relationships
  - contrastsWith:: [[Self-Custody]]
  - contrastsWith:: [[Custodial Wallet]]
  - requires:: [[Regulatory Compliance]]
  - requires:: [[Securities Regulation]]
  - requires:: [[Know Your Customer]]
  - supports:: [[Asset Management]]
  - supports:: [[Custody]]
  - uses:: [[Cold Storage]]
  - uses:: [[Proof of Reserve]]
  - implements:: [[Audit Trail]]
  - dependsOn:: [[Compliance]]
  - relatedTo:: [[Digital Asset Custody]]
  - relatedTo:: [[Custodial Exchange]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
