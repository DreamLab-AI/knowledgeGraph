public:: true

# Environmental Accounting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d166312d907e834e813de16b8cd276ef3cdd621fa30837c9a5b07401936670c6",
  "@type": "Page",
  "vc:slug": "environmental-accounting",
  "title": "Environmental Accounting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9600"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Environmental Accounting"
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
  "@id": "urn:ngm:class:environmental-accounting",
  "@type": "Class",
  "label": "Environmental Accounting",
  "definition": "A systematic framework for measuring, tracking, and reporting the environmental costs and impacts associated with economic activities, extending traditional financial accounting to incorporate natural capital, carbon emissions, resource consumption, and waste generation. Environmental accounting supports sustainability reporting, regulatory compliance, and circular economy transitions.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:sustainability-reporting",
    "label": "SustainabilityReporting"
  },
  "quality": 0.68,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:natural-capital-accounting",
      "label": "Natural Capital Accounting"
    },
    {
      "@id": "urn:ngm:class:green-accounting",
      "label": "Green Accounting"
    },
    {
      "@id": "urn:ngm:class:environmental-management-accounting",
      "label": "Environmental Management Accounting"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      },
      {
        "@id": "urn:ngm:class:natural-capital-valuation",
        "label": "Natural Capital Valuation"
      },
      {
        "@id": "urn:ngm:class:ecosystem-services-accounting",
        "label": "Ecosystem Services Accounting"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting",
        "label": "Corporate Sustainability Reporting"
      },
      {
        "@id": "urn:ngm:class:national-accounts",
        "label": "National Accounts"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:life-cycle-assessment",
        "label": "Life Cycle Assessment"
      },
      {
        "@id": "urn:ngm:class:environmental-impact-metric",
        "label": "Environmental Impact Metric"
      },
      {
        "@id": "urn:ngm:class:material-flow-analysis",
        "label": "Material Flow Analysis"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:environmental-sustainability",
        "label": "Environmental Sustainability"
      },
      {
        "@id": "urn:ngm:class:sustainability-reporting",
        "label": "SustainabilityReporting"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gri-standards",
        "label": "GRI Standards"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:environmental-impact-metric",
        "label": "Environmental Impact Metric"
      },
      {
        "@id": "urn:ngm:class:greenhouse-gas-inventory",
        "label": "Greenhouse Gas Inventory"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:circular-economy",
        "label": "Circular Economy"
      },
      {
        "@id": "urn:ngm:class:climate-policy",
        "label": "Climate Policy"
      },
      {
        "@id": "urn:ngm:class:sustainable-finance",
        "label": "Sustainable Finance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:tcfd",
        "label": "TCFD Framework"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:traditional-finance",
        "label": "Traditional Financial Accounting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-transparency",
        "label": "Supply Chain Transparency"
      },
      {
        "@id": "urn:ngm:class:blockchain-provenance",
        "label": "Blockchain Provenance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:environmental-assessment",
        "label": "Environmental Assessment"
      },
      {
        "@id": "urn:ngm:class:waste-management",
        "label": "Waste Management"
      },
      {
        "@id": "urn:ngm:class:carbon-markets",
        "label": "Carbon Market"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:environmental-accounting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d166312d907e834e813de16b8cd276ef3cdd621fa30837c9a5b07401936670c6"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A systematic framework for measuring, tracking, and reporting the environmental costs and impacts associated with economic activities, extending traditional financial accounting to incorporate natural capital, carbon emissions, resource consumption, and waste generation. Environmental accounting supports sustainability reporting, regulatory compliance, and circular economy transitions.

- ### Semantic Classification
  - owl-class:: spatial-computing:EnvironmentalAccounting
  - owl-role:: concept

- ### Relationships
  - Enables [[Environmental Sustainability]]
  - Enables [[SustainabilityReporting]]
  - Uses [[Environmental Impact Metric]]
  - Supports [[Circular Economy]]
  - Related To [[Environmental Assessment]]
  - Related To [[Waste Management]]

- ### Content

  ## Overview

  Environmental Accounting represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Current Landscape (2026)
  - The UN Statistical Commission adopted the 2025 SNA revision in March 2025, which for the first time introduces natural capital as a distinct asset category; the SEEA Central Framework is now being updated (Global Consultation, June 2026) to align its treatment of natural resources and ecosystem assets with the revised national-accounts standard.
  - The ISSB has pivoted decisively towards nature: after launching its Biodiversity, Ecosystems and Ecosystem Services (BEES) project in December 2025, it agreed on 22 April 2026 to address nature-related disclosures through a non-mandatory IFRS Practice Statement building on the TNFD framework (rather than a standalone standard), with an exposure draft targeted for October 2026 and a 120-day public consultation.
  - The ISSB issued targeted amendments to IFRS S2 on 11 December 2025, providing clarifications and jurisdictional reliefs on greenhouse-gas disclosures (notably Scope 3 category 15 financed emissions), effective for periods beginning on or after 1 January 2027 with early application permitted.
  - The EU's Omnibus I Directive was published in the Official Journal on 26 February 2026 and entered into force on 18 March 2026, sharply narrowing CSRD scope; EFRAG issued its Draft Amended ESRS on 3 December 2025 and the Commission is adopting the simplified ESRS via delegated acts (scheduled 3 July 2026), with member-state transposition due by 19 March 2027.
  - Under the revised regime, ESRS thresholds rise so mandatory reporting applies to EU undertakings above EUR 450 million net turnover and more than 1,000 employees; Amended ESRS E4 keeps an ecological (ecosystems, ecosystem services, species) rather than natural-capital-themed structure while remaining aligned to TNFD's LEAP approach and the Natural Capital Protocol.
  - TNFD adoption continued to grow, reaching over 730 disclosure adopters by November 2025 (including roughly 480 corporates and 179 investors), while some 620 organisations representing over USD 20 trillion in assets under management had committed to TNFD-aligned disclosure as of 31 July 2025; TNFD and EFRAG published a mapping confirming all 14 TNFD recommended disclosures are reflected in the ESRS.
  - Regulatory momentum extended beyond Europe: China's National People's Congress passed the Ecological and Environmental Code on 13 March 2026 (effective 15 August 2026), which for the first time codifies corporate GHG accounting, reporting and verification obligations into statutory law.
  - Open challenges as of 2026 centre on measuring the state of nature (the subject of an April 2026 TNFD discussion paper), harmonising public-sector SEEA accounts with private-sector disclosure frameworks, and reconciling the EU's deregulatory simplification drive with the push for comparable, decision-useful nature and biodiversity data.

- ### References
  - 1. UN Committee of Experts on Environmental-Economic Accounting (2026). Update of the SEEA Central Framework — Guidance Note A9.3: Consistency with the 2025 SNA revision. https://seea.un.org/sites/default/files/2026-06/gn_a9.3_gc.pdf
  - 2. KPMG International (2026). Reporting on nature — ISSB moves towards a nature-related IFRS Practice Statement. https://kpmg.com/xx/en/our-insights/ifrg/2026/issb-nature-reporting.html
  - 3. ICAEW (2025). ISSB amends IFRS S2, and moves to biodiversity-related (BEES) standards. https://www.icaew.com/insights/viewpoints-on-the-news/2025/dec-2025/issb-amends-ifrs-s2-moves-to-natural-capital-standards
  - 4. A&L Goodbody (2026). Sustainability reporting and due diligence update — June 2026 (Omnibus I, Amended ESRS, ISSB nature guidance). https://www.algoodbody.com/insights-publications/sustainability-reporting-and-due-diligence-update-june-2026
  - 5. TNFD (2025). TNFD 2025 Status Report. https://tnfd.global/wp-content/uploads/2025/09/250918_TNFD-Status-Report_DIGITAL.pdf
  - 6. KPMG International (2026). ESG Bulletin 2026 Issue 02 (ISSB nature Practice Statement; China Ecological and Environmental Code). https://assets.kpmg.com/content/dam/kpmgsites/cn/pdf/en/2026/05/esg-bulletin-02.pdf

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
