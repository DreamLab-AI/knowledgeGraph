public:: true

# HMRC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b7ef47ae9ccfd6bfd522a079d9cb0f781e5701433c95f3a687cbf109d8c5afb7",
  "@type": "Page",
  "vc:slug": "hmrc",
  "title": "HMRC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tax",
      "vc:label": "Tax"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:entity",
      "vc:label": "Entity"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HMRC"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hmrc",
  "@type": "Class",
  "label": "HMRC",
  "definition": "His Majesty's Revenue and Customs (HMRC) is the non-ministerial department of the UK government responsible for the administration and collection of taxes, payment of certain state benefits, and enforcement of customs regulations. Formed in 2005 by the merger of the Inland Revenue and HM Customs and Excise, HMRC operates the UK's tax self-assessment regime, Pay As You Earn (PAYE) system, and Making Tax Digital (MTD) programme. It also issues authoritative guidance on the taxation of cryptoassets, financial instruments, and cross-border transactions, making it a central regulatory reference for UK digital finance and compliance obligations.",
  "domain": "governance",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-body",
      "label": "Regulatory Body"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:pay-as-you-earn",
        "label": "Pay As You Earn"
      },
      {
        "@id": "urn:ngm:class:making-tax-digital",
        "label": "Making Tax Digital"
      },
      {
        "@id": "urn:ngm:class:self-assessment",
        "label": "Self Assessment"
      },
      {
        "@id": "urn:ngm:class:customs-and-excise",
        "label": "Customs and Excise"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:uk-government",
        "label": "UK Government"
      },
      {
        "@id": "urn:ngm:class:public-sector",
        "label": "Public Sector"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:corporate-tax-compliance-framework",
        "label": "Corporate Tax Compliance Framework"
      },
      {
        "@id": "urn:ngm:class:tax-collection",
        "label": "Tax Collection"
      },
      {
        "@id": "urn:ngm:class:vat-administration",
        "label": "VAT Administration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:financial-reporting",
        "label": "Financial Reporting"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:uk-tax-law",
        "label": "UK Tax Law"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:aml-compliance",
        "label": "AML Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fca",
        "label": "FCA"
      },
      {
        "@id": "urn:ngm:class:treasury",
        "label": "HM Treasury"
      },
      {
        "@id": "urn:ngm:class:companies-house",
        "label": "Companies House"
      },
      {
        "@id": "urn:ngm:class:oecd-tax-framework",
        "label": "OECD Tax Framework"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:cryptoasset-taxation",
        "label": "Cryptoasset Taxation"
      },
      {
        "@id": "urn:ngm:class:open-banking",
        "label": "Open Banking"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:irs",
        "label": "IRS"
      },
      {
        "@id": "urn:ngm:class:european-tax-authority",
        "label": "European Tax Authority"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:his-majestys-revenue-and-customs",
      "label": "His Majesty's Revenue and Customs"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hmrc:8c78b239a594",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b7ef47ae9ccfd6bfd522a079d9cb0f781e5701433c95f3a687cbf109d8c5afb7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Corporate Tax Compliance Framework]]",
      "resolved": "urn:visionflow:linked:tax",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Entity]]",
      "resolved": "urn:visionflow:linked:entity",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - His Majesty's Revenue and Customs ([[HMRC]]) is the non-ministerial UK government department formed in 2005 through the merger of the [[Inland Revenue]] and [[HM Customs and Excise]]. It is the primary authority for [[Tax Collection]], the administration of [[Value Added Tax]], [[Income Tax]], [[Corporation Tax]], [[National Insurance]], and [[Customs and Excise]] duties, and is also responsible for the payment of certain state benefits including [[Child Benefit]] and [[Tax Credits]]. HMRC operates under the policy oversight of [[HM Treasury]] and interacts extensively with [[Financial Regulation]] and the broader landscape of UK public-sector [[Data Governance]].

- ### Overview
  - HMRC is one of the largest government departments in the United Kingdom by headcount and budget, and one of the largest operators of enterprise [[Digital Infrastructure]] in the UK public sector. Its mandate spans revenue collection, customs administration, and the enforcement of compliance with UK [[Tax Law]].
  - The department collects direct taxes (income tax, capital gains tax, corporation tax), indirect taxes ([[VAT]], excise duties, stamp duties), and social contributions ([[National Insurance Contributions]]). It also administers the [[Making Tax Digital]] programme, which is progressively mandating digital [[Financial Reporting]] for businesses and sole traders.
  - HMRC's guidance is legally significant: policy briefs, manuals, and technical bulletins published by HMRC constitute interpretations of statute that taxpayers, accountants, and legal advisers rely on for [[Corporate Tax Compliance Framework]] decisions.

- ### Key Components
  - #### Pay As You Earn (PAYE)
    - [[Pay As You Earn]] is the UK's primary mechanism for withholding [[Income Tax]] and [[National Insurance Contributions]] at source via employers. HMRC maintains the Real Time Information (RTI) system, requiring employers to submit payroll data each pay cycle.
  - #### Self Assessment
    - [[Self Assessment]] is the annual tax return process used by the self-employed, higher-rate taxpayers, and those with complex financial affairs. It is the main compliance channel for [[Capital Gains Tax]] and certain dividend and rental income declarations.
  - #### Making Tax Digital (MTD)
    - [[Making Tax Digital]] is HMRC's flagship digitalisation programme, requiring businesses to maintain digital records and submit tax data via compatible software. MTD for [[VAT Administration]] was mandated from 2019; MTD for [[Income Tax]] (MTD ITSA) is being phased in.
  - #### Customs and Border Policy
    - Post-Brexit, HMRC administers the UK Global Tariff, customs declarations, and [[Import Duty]] for goods crossing the UK border. It works alongside the [[Border Force]] and [[UK Border Agency]] to enforce customs law.
  - #### Cryptoasset Guidance
    - HMRC has published specific guidance on the tax treatment of [[Cryptocurrency]] and other [[Cryptoasset Taxation]] including tokens, stablecoins, and NFTs. These guidance documents define which assets qualify as [[Capital Asset]] and how staking, mining, airdrops, and DeFi returns are taxed. This positions HMRC as a key reference for [[Blockchain]] sector compliance in the UK.
  - #### Anti-Money Laundering Supervision
    - HMRC is a statutory [[Anti-Money Laundering]] supervisor for certain sectors (estate agencies, accountants, high-value dealers), operating under the Money Laundering Regulations. It conducts [[AML Compliance]] inspections and can issue civil penalties and criminal prosecutions.

- ### Applications and Use Cases
  - **Digital Tax Filing**: Businesses and individuals use HMRC's online portals (Government Gateway, HMRC App) for digital self-assessment and VAT returns, integrating with [[Open Banking]] data feeds under MTD.
  - **Crypto and DeFi Taxation**: UK holders of [[Cryptocurrency]] and participants in [[Decentralised Finance]] reference HMRC's cryptoasset manual to determine CGT and income tax obligations on trades, yields, and token receipts.
  - **Corporate Compliance**: Large corporations use HMRC's published transfer pricing and permanent establishment guidance to manage international [[Corporate Tax Compliance Framework]] obligations, cross-referencing with [[OECD Tax Framework]] and BEPS rules.
  - **Employment and Payroll**: HR and payroll systems integrate with HMRC's RTI APIs to comply with [[Pay As You Earn]] obligations, submit statutory sick pay, and claim employment allowances.
  - **Customs Declarations**: Importers and exporters submit declarations through HMRC's Customs Declaration Service (CDS), replacing the legacy CHIEF system, a significant [[Digital Infrastructure]] migration.
  - **Research and Statistics**: HMRC publishes detailed tax gap analysis and fiscal statistics, used by economists, policy researchers, and public finance bodies studying [[Public Sector]] economics.
  - **International Exchange**: HMRC participates in the OECD Common Reporting Standard (CRS) and FATCA (US [[Foreign Account Tax Compliance]]), exchanging financial account information with partner jurisdictions to combat [[Tax Evasion]].

- ### Relationships
  - partOf:: [[UK Government]], [[Public Sector]]
  - hasPart:: [[Pay As You Earn]], [[Making Tax Digital]], [[Self Assessment]], [[Customs and Excise]]
  - enables:: [[Corporate Tax Compliance Framework]], [[Tax Collection]], [[VAT Administration]]
  - requires:: [[Financial Reporting]], [[Digital Identity]]
  - implements:: [[UK Tax Law]], [[Anti-Money Laundering]]
  - supports:: [[Financial Regulation]], [[AML Compliance]]
  - relatedTo:: [[FCA]], [[HM Treasury]], [[Companies House]], [[OECD Tax Framework]]
  - bridges-to:: [[Cryptocurrency]], [[Cryptoasset Taxation]], [[Open Banking]], [[Data Governance]]
  - contrastsWith:: [[IRS]], [[European Tax Authority]]
  - sameAs:: [[His Majesty's Revenue and Customs]]

- ### Standards and Regulatory Context
  - **OECD BEPS**: HMRC implements OECD Base Erosion and Profit Shifting (BEPS) measures, including country-by-country reporting and controlled foreign company rules, aligning UK practice with international [[OECD Tax Framework]] standards.
  - **Common Reporting Standard (CRS)**: Under CRS, HMRC exchanges financial account data annually with over 100 jurisdictions, requiring UK financial institutions to carry out due diligence and report to HMRC.
  - **FATCA**: The UK-US [[Foreign Account Tax Compliance]] intergovernmental agreement requires HMRC to transmit data on US persons holding UK accounts to the IRS, and vice versa.
  - **Money Laundering Regulations (MLR)**: HMRC supervises designated non-financial businesses under UK MLR, a transposition of the EU's Anti-Money Laundering Directives adapted post-Brexit to UK statute.
  - **UK GDPR / Data Protection Act 2018**: HMRC is a major controller of personal financial data and must comply with UK GDPR obligations, including for the transfer of taxpayer data under CRS/FATCA arrangements — intersecting with [[Data Governance]] requirements.
  - **Making Tax Digital Standards**: MTD mandates use of software with HMRC-compatible APIs; HMRC publishes developer-facing API standards and sandbox environments, engaging the [[Digital Infrastructure]] and fintech community.
  - **Customs Declaration Service (CDS)**: CDS replaced the CHIEF system for customs declarations, implementing the Union Customs Code-derived UK Customs Regime post-Brexit and integrating with the UK Global Tariff.

- ### Semantic Classification
  - owl-class:: governance:HMRC
  - owl-role:: Class
  - subClassOf:: [[Regulatory Body]]
  - domain:: governance

- ### Provenance
  - sources:: HMRC official guidance publications; OECD tax framework documentation; UK Finance Acts; Making Tax Digital developer documentation; HMRC cryptoassets manual
  - updated:: 2026-06-13
  - migration-date:: 2026-05-29T00:00:00Z
