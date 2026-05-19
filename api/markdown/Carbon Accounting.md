public:: true

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
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:environmental-accounting",
      "label": "Environmental Accounting"
    }
  ],
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:climate-action-planning",
        "label": "Climate Action Planning"
      },
      {
        "@id": "urn:ngm:class:emissions-reporting",
        "label": "Emissions Reporting"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]], [[SEC (Securities and Exchange Commission)]]
  - migration-date:: 2026-04-26T00:00:00Z
