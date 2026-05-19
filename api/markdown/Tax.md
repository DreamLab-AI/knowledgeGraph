schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Tax
legacy_uri:: urn:visionclaw:concept:infrastructure:tax
public:: true

# Tax
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:da96586440f90fbc16be6abd164b8e9627d8a8efca4babfc81d461fcdbe8dbd2",
  "@type": "Page",
  "vc:slug": "tax",
  "title": "Tax",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:accounts",
      "vc:label": "Accounts"
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
      "vc:value": "sha256-12-10b4bd401b26"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#Tax"
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
      "vc:value": "Tax"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:tax"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:tax"
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
    "@id": "urn:visionflow:page:da96586440f90fbc16be6abd164b8e9627d8a8efca4babfc81d461fcdbe8dbd2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:tax",
  "@type": "Class",
  "label": "Tax",
  "definition": "Tax is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.5,
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
      "raw": "[[Accounts]]",
      "resolved": "urn:visionflow:owl:class:accounts",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:da96586440f90fbc16be6abd164b8e9627d8a8efca4babfc81d461fcdbe8dbd2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Tax is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Tax
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
  - **HMRC and Companies House**: You must file your [[Accounts]] with Companies House and your tax return with HM Revenue and Customs (HMRC). These filings are typically done online.
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
