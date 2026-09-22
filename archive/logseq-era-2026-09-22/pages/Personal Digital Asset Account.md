public:: true

elevatedFrom:: [[personal accounts]]
# Personal Digital Asset Account
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c457a6ffa7f308e2b2969450b6a7cd43b2ac0114b0b55a1555eaff8eb22e3b84",
  "@type": "Page",
  "vc:slug": "personal-digital-asset-account",
  "title": "Personal Digital Asset Account",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "personal accounts"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:personal-digital-asset-account",
  "@type": "Class",
  "label": "Personal Digital Asset Account",
  "definition": "Personal accounts are individual user accounts that grant access to digital services, platforms, or financial instruments, uniquely associated with a natural person. In the context of digital assets and cryptocurrency, personal accounts include exchange accounts, self-custody wallets, and HMRC Self Assessment registrations through which an individual reports capital gains from asset disposals. Proper management of personal accounts intersects identity management, authentication, privacy, and tax compliance obligations.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:corporate-tax-compliance-framework", "label": "Corporate Tax Compliance Framework"},
      {"@id": "urn:ngm:class:corporate-tax-compliance-framework-treatment-crypto", "label": "Tax Treatment Crypto"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:personal-accounts:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c457a6ffa7f308e2b2969450b6a7cd43b2ac0114b0b55a1555eaff8eb22e3b84"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  Personal accounts are individually attributed user accounts providing access to digital services, financial platforms, or governmental systems, uniquely bound to a natural person's verified identity. They are the primary locus of credential management, authentication, and access-control enforcement. In the digital asset space, personal accounts span exchange trading accounts, self-custody wallets, and HMRC Self Assessment portals used to declare capital gains from cryptocurrency disposals.

- ### Semantic Classification
  - owl-class:: infrastructure:PersonalAccounts
  - owl-role:: Concept

- ### Relationships
  - Requires authentication mechanisms and identity management infrastructure.
  - Relates to digital identity frameworks, privacy obligations (GDPR), and access control policies.
  - In the context of UK cryptocurrency taxation, personal accounts are the basis for HMRC Self Assessment reporting of capital gains from digital asset disposals (see Tax Treatment Crypto).

- ### Content
  If you sold Bitcoin in the UK in **May 2025**, here is what you need to know about tax reporting:
  - The UK tax year runs from **6 April 2024 to 5 April 2025**.
  - As your sale occurred in May 2025, this falls in the **2025–2026 tax year** (6 April 2025 to 5 April 2026)[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/).
  - If you file your self-assessment **online**, you must report your crypto gains (and pay any tax due) by **31 January 2027**[](https://www.blockpit.io/tax-guides/crypto-tax-united-kingdom-hmrc)[](https://www.kraken.com/learn/uk-crypto-tax-guide)[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/)[](https://www.ross-brooke.co.uk/what-we-do/capital-gains-tax/capital-gains-tax-reporting-residential-sales/).
  - If you file with a **paper return**, the deadline is **31 October 2026**[](https://www.blockpit.io/tax-guides/crypto-tax-united-kingdom-hmrc)[](https://www.kraken.com/learn/uk-crypto-tax-guide)[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/).
  - Most individuals file online.
  - You must report all taxable gains for the 2025–2026 tax year, including those from Bitcoin sales, using the **Self Assessment tax return**.
  - If your total capital gains for the tax year exceed the Annual Exempt Amount (£3,000 for 2025–26), tax will be owed; even if below, you may still need to report if your proceeds are high or you are already in Self Assessment[](https://www.blockpit.io/tax-guides/crypto-tax-united-kingdom-hmrc)[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/).
  - Register for Self Assessment (if not already registered).
  - Complete the Capital Gains Summary section, including your Bitcoin transaction(s).
  - Submit digitally by the deadline and pay tax owed by the same date[](https://www.blockpit.io/tax-guides/crypto-tax-united-kingdom-hmrc)[](https://www.kraken.com/learn/uk-crypto-tax-guide)[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/).
  | Event | Sale Date | Tax Year | Deadline (Online Return) |
  | ---- | ---- | ---- |
  | Bitcoin Sale | May 2025 | 2025–2026 | 31 January 2027[](https://koinly.io/guides/hmrc-cryptocurrency-tax-guide/)[](https://www.ross-brooke.co.uk/what-we-do/capital-gains-tax/capital-gains-tax-reporting-residential-sales/) |

  ## When to Report UK Bitcoin Sales for Tax as an Individual
  - ## Tax Year and Reporting Period
  - ## Reporting Deadline
  - ## Which Gains to Report
  - ## How to Report
  - ## Summary Table

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
