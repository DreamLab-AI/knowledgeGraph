public:: true

elevatedFrom:: [[Tax]]
# Corporate Tax Compliance Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:da96586440f90fbc16be6abd164b8e9627d8a8efca4babfc81d461fcdbe8dbd2",
  "@type": "Page",
  "vc:slug": "corporate-tax-compliance-framework",
  "title": "Corporate Tax Compliance Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:accounts",
      "vc:label": "Accounts"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tax"
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
  "@id": "urn:ngm:class:corporate-tax-compliance-framework",
  "@type": "Class",
  "label": "Corporate Tax Compliance Framework",
  "definition": "Tax, in the context of this knowledge graph, refers to the statutory obligations imposed on individuals and legal entities — particularly limited companies — by HMRC and comparable revenue authorities, covering corporation tax on trading profits, self-assessment for personal income drawn as salary or dividends, and VAT registration thresholds. Compliance requires accurate bookkeeping, timely filing of CT600 returns, and annual accounts submission to Companies House.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:uk-company-financial-filing-obligations", "label": "UK Company Financial Filing Obligations"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:legal-compliance", "label": "Legal Compliance"},
      {"@id": "urn:ngm:class:digital-tax-compliance-node", "label": "Digital Tax Compliance Node"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:legal-framework", "label": "Legal Framework"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tax:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:da96586440f90fbc16be6abd164b8e9627d8a8efca4babfc81d461fcdbe8dbd2"
  },
  "vc:resolutions": [
    {
      "raw": "[[UK Company Financial Filing Obligations]]",
      "resolved": "urn:visionflow:owl:class:accounts",
      "kind": "ResolvedLink"
    }
  ],
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
  - Tax, in the context of this knowledge graph, refers to the statutory obligations imposed on individuals and legal entities — particularly limited companies — by HMRC and comparable revenue authorities, covering corporation tax on trading profits, self-assessment for personal income drawn as salary or dividends, and VAT registration thresholds. Compliance requires accurate bookkeeping, timely filing of CT600 returns, and annual accounts submission to Companies House.

- ### Semantic Classification
  - owl-class:: infrastructure:Tax
  - owl-role:: Concept

- ### Relationships
  - requires:: Accounts, Regulatory Compliance
  - relatedTo:: Financial Regulation, Legal Compliance, Digital Tax Compliance Node
  - standardizedBy:: Legal Framework

- ### Content
  - Flossverse is a limited company in April last year and haven't earned enough to pay personal tax, but will owe 20% corporation tax. You're aware of the self-assessment deadline in late January 2024 and the business tax filing in April. You're seeking guidance on what you need to know and do regarding these tax obligations.
  - **📊 Tax Advisor**: As a Tax Advisor specializing in small business taxation, I'll walk you through the key aspects of managing your tax obligations for your limited company, taking into account corporation tax, self-assessment, and filing deadlines.
  - ---
  - Corporation Tax and Self-Assessment for a Limited Company:
  - **Corporation Tax**:
		- **Calculation**: As a limited company, you're subject to corporation tax on your profits. Currently, the rate is 20%. You calculate this tax on the net profit, which is your total income minus allowable business expenses.
	 - **Payment Deadline**: For a company that started in April, your financial year likely aligns with the fiscal year. The corporation tax is due 9 months and 1 day after the end of your accounting period, typically the fiscal year. Hence, if your accounting period ends in March, your tax would be due by January of the following year.
  - **Self-Assessment**:
  - **Personal Tax**: If you're drawing a salary or dividends from your company, you must report this on your personal tax return, known as self-assessment.
		- **Deadlines**: The self-assessment tax return must be filed by January 31st for the previous tax year. For example, for the 2023/2024 tax year, the deadline is January 31, 2025. However, it's good practice to prepare this well in advance.
  - I am not drawing salaries and shouldn't have done this. I have pushed it to Castletons.
		- DONE Awaiting an email about selling the car and the insurance for it
  - **Reporting and Documentation**:
  - **Annual Accounts**: You need to prepare annual accounts, including a balance sheet and a profit and loss statement.
		- **Company Tax Return (CT600)**: This form is used to report your company’s income, expenses, and allowances. It's separate from your personal tax return.
  - **Online Filing**:
  - **HMRC and Companies House**: You must file your [[UK Company Financial Filing Obligations]] with Companies House and your tax return with HM Revenue and Customs (HMRC). These filings are typically done online.
  - **Record Keeping**:
  - **Documentation**: Keep detailed records of all income, expenses, and bank statements. This documentation is crucial for accurate tax filings and potential audits.
  - **Deadlines Overview**:
  - **Corporation Tax Payment**: 9 months and 1 day after the end of your accounting period.
		- **Company Tax Return**: 12 months after the end of the accounting period.
		- **Self-Assessment Tax Return**: January 31st following the end of the tax year.
  - **Planning for Payments**:
  - **Reserve Funds**: It's advisable to set aside funds regularly to cover your tax liabilities.
  - **Consult Your Accountant**:
  - **Expertise**: Your accountant can provide personalized advice, ensure compliance, and possibly identify tax-saving opportunities.
  - **Stay Informed**:
  - **Changes in Tax Laws**: Tax laws and rates can change, so stay informed or rely on your accountant to keep you updated.
  - **Penalties for Late Filing**:
  - **Awareness**: Be aware of penalties for late filing or payment to avoid additional charges.
  - Remember, while this information provides a general framework, your specific situation might have unique considerations, so it’s important to work closely with your accountant.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
