public:: true
alias:: CarbonAccounting

# Carbon Accounting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5aba8cc2ca3b9d23b361b3fb3376fc94067c3ce7d34305b0f963d9a71d189a95",
  "@type": "Page",
  "vc:slug": "carbon-accounting",
  "title": "Carbon Accounting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:climate-action-planning",
      "vc:label": "Climate Action Planning"
    },
    {
      "@id": "urn:visionflow:linked:data-collection",
      "vc:label": "Data Collection"
    },
    {
      "@id": "urn:visionflow:linked:emission-factors",
      "vc:label": "Emission Factors"
    },
    {
      "@id": "urn:visionflow:linked:emissions-reporting",
      "vc:label": "Emissions Reporting"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    },
    {
      "@id": "urn:visionflow:linked:sec-securities-and-exchange-commission",
      "vc:label": "SEC (Securities and Exchange Commission)"
    },
    {
      "@id": "urn:visionflow:linked:verification-process",
      "vc:label": "Verification Process"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:environmental-accounting",
      "vc:label": "Environmental Accounting"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9807"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Accounting"
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
  "@id": "urn:ngm:class:carbon-accounting",
  "@type": "Class",
  "label": "Carbon Accounting",
  "definition": "The systematic process of measuring, recording, and reporting an organization's greenhouse gas emissions across direct operations (Scope 1), purchased energy (Scope 2), and value chain activities (Scope 3), expressed in CO2 equivalent units to quantify climate impact and enable reduction strategies.",
  "domain": "governance",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:environmental-accounting",
    "label": "Environmental Accounting"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      },
      {
        "@id": "urn:ngm:class:emission-factors",
        "label": "Emission Factors"
      },
      {
        "@id": "urn:ngm:class:verification-process",
        "label": "Verification Process"
      },
      {
        "@id": "urn:ngm:class:greenhouse-gas-protocol",
        "label": "Greenhouse Gas Protocol"
      },
      {
        "@id": "urn:ngm:class:materiality-assessment",
        "label": "Materiality Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:emissions-reporting",
        "label": "Emissions Reporting"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:net-zero-target-setting",
        "label": "Net Zero Target Setting"
      },
      {
        "@id": "urn:ngm:class:carbon-offsetting",
        "label": "Carbon Offsetting"
      },
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Disclosure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:scope-1-emissions",
        "label": "Scope 1 Emissions"
      },
      {
        "@id": "urn:ngm:class:scope-2-emissions",
        "label": "Scope 2 Emissions"
      },
      {
        "@id": "urn:ngm:class:scope-3-emissions",
        "label": "Scope 3 Emissions"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:corporate-sustainability-reporting",
        "label": "Corporate Sustainability Reporting"
      },
      {
        "@id": "urn:ngm:class:climate-risk-management",
        "label": "Climate Risk Management"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-14064",
        "label": "ISO 14064"
      },
      {
        "@id": "urn:ngm:class:ifrs-s2",
        "label": "ISSB IFRS S2"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:life-cycle-assessment",
        "label": "Life Cycle Assessment"
      },
      {
        "@id": "urn:ngm:class:supply-chain-data",
        "label": "Supply Chain Data"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Carbon Footprinting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:carbon-credits",
        "label": "Carbon Credit"
      },
      {
        "@id": "urn:ngm:class:science-based-targets",
        "label": "Science Based Targets"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ghg-accounting",
      "label": "GHG Accounting"
    },
    {
      "@id": "urn:ngm:class:greenhouse-gas-accounting",
      "label": "Greenhouse Gas Accounting"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-accounting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5aba8cc2ca3b9d23b361b3fb3376fc94067c3ce7d34305b0f963d9a71d189a95"
  },
  "vc:resolutions": [
    {
      "raw": "[[Climate Action Planning]]",
      "resolved": "urn:visionflow:linked:climate-action-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Collection]]",
      "resolved": "urn:visionflow:linked:data-collection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emission Factors]]",
      "resolved": "urn:visionflow:linked:emission-factors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Reporting]]",
      "resolved": "urn:visionflow:linked:emissions-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    },
    {
      "raw": "[[SEC (Securities and Exchange Commission)]]",
      "resolved": "urn:visionflow:linked:sec-securities-and-exchange-commission",
      "kind": "StubLink"
    },
    {
      "raw": "[[Verification Process]]",
      "resolved": "urn:visionflow:linked:verification-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Accounting]]",
      "resolved": "urn:visionflow:owl:class:environmental-accounting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:owl:class:regulatory-compliance",
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
  - The systematic process of measuring, recording, and reporting an organization's greenhouse gas emissions across direct operations (Scope 1), purchased energy (Scope 2), and value chain activities (Scope 3), expressed in CO2 equivalent units to quantify climate impact and enable reduction strategies.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonAccounting
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental Accounting]]
  - requires:: [[Data Collection]], [[Emission Factors]], [[Verification Process]]
  - enables:: [[Emissions Reporting]], [[Climate Action Planning]], [[Regulatory Compliance]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Emissions Scopes**:
		- **Scope 1**: Direct emissions from owned sources (vehicles, on-site combustion)
		- **Scope 2**: Indirect emissions from purchased electricity, steam, heating, cooling
		- **Scope 3**: Value chain emissions (suppliers, business travel, product use) - typically 80%+ of total
  - **Key Standards**:
		- **GHG Protocol**: Used by 97% of disclosing S&P 500 companies
		- **ISO 14064**: International GHG accounting standard
		- **ISSB IFRS S2**: Voluntary reporting standard (mandatory in some countries)
  - **Regulatory Landscape (2024)**:
		- EU CSRD: Mandatory for 50,000+ companies starting 2025
		- SEC Climate Rule: Scope 1 and 2 disclosure for large US companies (2026)
		- California SB 253: State-level emissions tracking requirements
  - **Measurement Unit**: CO2e (carbon dioxide equivalent) - converts all GHGs using global warming potential
  - ## Applications
  - Corporate sustainability reporting
  - Regulatory compliance documentation
  - Climate target setting and tracking
  - Supply chain emissions management
  - ESG investor disclosures

- ### Current Landscape (2026)
  - On 9 September 2025 the GHG Protocol and ISO announced a landmark partnership to merge their corporate carbon-accounting standards (the 2004 Corporate Standard, 2015 Scope 2 Guidance, 2011 Scope 3 Standard and ISO 14064-1) into a single harmonised global standard, with a consolidated public consultation slated for Q2 2027 and publication of the joint standard in Q4 2028.
  - The GHG Protocol's Scope 3 revision advanced through 2026 (Phase 1 Progress Update, 31 March 2026): proposals introduce data-quality tiers, a requirement to report at least 95% of total Scope 3 emissions, a new Category 16 for facilitated and other value-chain activities, and a reworking of Category 15 (Investments) so financed emissions stay in Cat 15 while insurance and underwriting move to Cat 16.
  - The ISSB issued targeted amendments to IFRS S2 on 11 December 2025 (effective 1 January 2027, early adoption permitted) that let entities limit Scope 3 Category 15 measurement to financed emissions, drop the mandatory GICS classification, and add jurisdictional reliefs on measurement method and IPCC global-warming-potential values.
  - ISSB adoption has broadened, with roughly 39 jurisdictions having adopted, aligned with, or taken steps toward using the standards as of late 2025; on 22 April 2026 the ISSB opted to address nature-related disclosure via an IFRS Practice Statement (exposure draft expected October 2026) rather than a standalone mandatory standard.
  - The EU's Omnibus I Directive was published in the Official Journal on 26 February 2026 and entered into force on 18 March 2026, applying a "stop-the-clock" delay and concentrating CSRD scope on companies above 1,000 employees and EUR 450m turnover; EFRAG's simplified ESRS (December 2025) aim to cut mandatory datapoints by over 60%, applying to financial years from 1 January 2027.
  - PCAF substantially updated its Global GHG Accounting and Reporting Standard in December 2025, adding asset-class methodologies (Use of Proceeds, securitisation, sovereign and sub-sovereign debt), expanding insurance-associated emissions coverage, and introducing forward-looking metrics such as Expected Emissions Reductions (EER) and Expected Avoided Emissions (EAE).
  - The vendor market has consolidated around AI-assisted, assurance-grade platforms led by Persefoni and Watershed (the latter strengthened by its VitalMetrics/CEDA acquisition), alongside Normative, Plan A, Sweep, Greenly and SAP Sustainability Control Tower, with financed-emissions PCAF depth and audit-ready Scope 3 supplier data as the main differentiators.
  - Open challenges as of 2026 centre on Scope 3 data quality and verification, reconciling divergent regimes (EU CSRD/ESRS, California SB 253/SB 261, ISSB S2) into interoperable disclosures, and managing the multi-year transition risk while the harmonised GHG Protocol/ISO standard is still being drafted for 2028.

- ### References
  - 1. Gibson Dunn (2026). ESG: Risk, Litigation, and Reporting Update (April 2026). https://www.gibsondunn.com/gibson-dunn-esg-monthly-update-april-2026/
  - 2. GHG Protocol (2026). GHG Protocol Announces Key Standard Development Updates: FAQ Resource. https://ghgprotocol.org/blog/ghg-protocol-announces-key-standard-development-updates-faq-resource
  - 3. IFRS Foundation / ISSB (2025). ISSB issues targeted amendments to IFRS S2 to support implementation. https://www.ifrs.org/news-and-events/news/2025/12/issb-issues-targeted-amendments-ifrs-s2/
  - 4. A&L Goodbody (2026). Sustainability reporting and due diligence update – June 2026. https://www.algoodbody.com/insights-publications/sustainability-reporting-and-due-diligence-update-june-2026
  - 5. Persefoni (2026). PCAF: Reporting Standard Beginner's Guide. https://www.persefoni.com/blog/pcaf

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]], [[SEC (Securities and Exchange Commission)]]
  - migration-date:: 2026-04-26T00:00:00Z
