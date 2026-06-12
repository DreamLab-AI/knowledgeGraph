public:: true

elevatedFrom:: [[Accounts]]
# UK Company Financial Filing Obligations
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:15b5d94bc41604fca6bea07eabffce1348827c615d8f1b3d00d74deb19d80c63",
  "@type": "Page",
  "vc:slug": "uk-company-financial-filing-obligations",
  "title": "UK Company Financial Filing Obligations",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Accounts"
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
  "@id": "urn:ngm:class:uk-company-financial-filing-obligations",
  "@type": "Class",
  "label": "UK Company Financial Filing Obligations",
  "definition": "Accounts denotes the financial reporting and filing obligations of a limited company under UK law, encompassing annual accounts preparation, Companies House submission deadlines, confirmation statements, and the penalties regime for late filing.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:compliance-audit-trail", "label": "Compliance Audit Trail"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:risk-management", "label": "Risk Management"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:accounts:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:15b5d94bc41604fca6bea07eabffce1348827c615d8f1b3d00d74deb19d80c63"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - Accounts denotes the financial reporting and filing obligations of a limited company under UK law, covering annual accounts preparation, Companies House submission deadlines (9 months from accounting reference date for subsequent years), confirmation statements, and the penalties regime for late filing.

- ### Semantic Classification
  - owl-class:: infrastructure:Accounts
  - owl-role:: Concept

- ### Relationships
  - bridges-to:: [[Blockchain]]
  - requires:: [[Compliance Framework]], [[Governance]]
  - supports:: [[Compliance Audit Trail]]
  - dependsOn:: [[Risk Management]]
  - relatedTo:: [[Privacy]]

- ### Content
  - For a limited company in the UK, the due dates for annual accounts are determined by your company's 'accounting reference date,' which is the end of your financial year. Here's how it typically works:
  - **First Accounting Period**:
  - Your first accounting period starts on the day your company is incorporated and runs until the end of the month in which the anniversary of incorporation falls, in the following year.
		- For example, if your company was incorporated in April 2022, your first accounting period would likely run until April 30, 2023.
  - **Filing Deadline**:
  - For your first accounts, you have 21 months from the date of incorporation to file with Companies House. This is longer than the normal deadline due to being your first year.
		- Subsequently, you have 9 months from your accounting reference date to file your accounts. So, for the accounting period ending April 30, 2023, your accounts would be due by January 31, 2024.
  - **Confirmation Statement**:
  - Alongside your accounts, you also need to file a confirmation statement annually. This is due 14 days after the anniversary of incorporation.
  - **Penalties for Late Filing**:
  - Companies House imposes penalties for late filing, which increase over time. It's crucial to adhere to these deadlines to avoid penalties.
  - **Annual Return**:
  - The annual return is a snapshot of company information, separate from the financial accounts, and also needs to be filed annually.
  - **Staying Organized**:
  - Keep track of these dates in your calendar and maintain regular communication with your accountant to ensure all filings are completed on time.
  - Your accountant will be able to provide the exact dates for your specific circumstances, but this general framework should give you a good idea of what to expect.
  - https://docs.google.com/spreadsheets/d/1fIM6SqpkZdfRsnAInrd1e-A5cPOG3r76CfQhRCQGeE0/edit?usp=sharing
  - ![rawaccounts.pdf](../assets/rawaccounts_1714229501722_0.pdf)
  - ![Feb2024-flossverse-010.pdf](../assets/Feb2024-flossverse-010_1717315840873_0.pdf)
  - ![Feb2024-flossverse-011.pdf](../assets/Feb2024-flossverse-011_1717315846806_0.pdf)
  - ![Jan2024-flossverse-009.pdf](../assets/Jan2024-flossverse-009_1717315853965_0.pdf)
  - ![March2024-flossverse-012.pdf](../assets/March2024-flossverse-012_1717315861420_0.pdf)
  - ![October2023-flossverse-007.pdf](../assets/October2023-flossverse-007_1717315868338_0.pdf)
  - ![October2023-flossverse-008.pdf](../assets/October2023-flossverse-008_1717315874531_0.pdf)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
