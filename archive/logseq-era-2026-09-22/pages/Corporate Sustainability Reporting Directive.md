public:: true

# Corporate Sustainability Reporting Directive

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:corporate-sustainability-reporting-directive", "@type": "Page", "title": "Corporate Sustainability Reporting Directive", "vc:slug": "corporate-sustainability-reporting-directive", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:corporate-sustainability-reporting-directive",
  "@type": "Class",
  "label": "Corporate Sustainability Reporting Directive",
  "definition": "The Corporate Sustainability Reporting Directive (CSRD) is a European Union law that expands and standardises the sustainability information companies must disclose, replacing the earlier Non-Financial Reporting Directive. It mandates reporting against the European Sustainability Reporting Standards, applies a double-materiality lens and requires assurance of the disclosed data. It substantially widens the scope of in-scope undertakings and the depth of environmental, social and governance disclosure.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:esg-reporting",
      "label": "ESG Reporting"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:double-materiality",
        "label": "Double Materiality"
      },
      {
        "@id": "urn:ngm:class:disclosure-requirements",
        "label": "Disclosure Requirements"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      },
      {
        "@id": "urn:ngm:class:scope-3-emissions",
        "label": "Scope 3 Emissions"
      },
      {
        "@id": "urn:ngm:class:disclosure-requirements",
        "label": "Disclosure Requirements"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG"
      },
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:double-materiality",
        "label": "Double Materiality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:esg",
        "label": "ESG"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:carbon-accounting",
        "label": "Carbon Accounting"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:esg-reporting",
        "label": "ESG Reporting"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - The Corporate Sustainability Reporting Directive (CSRD) is a European Union law that expands and standardises the sustainability information companies must disclose, replacing the earlier Non-Financial Reporting Directive. It mandates reporting against the European Sustainability Reporting Standards, applies a double-materiality lens and requires assurance of the disclosed data. It substantially widens the scope of in-scope undertakings and the depth of environmental, social and governance disclosure.
  - Related concepts: [[ESG Reporting]], [[Regulation]], [[Double Materiality]], [[Disclosure]], [[Carbon Accounting]], [[Scope 3 Emissions]]
- ### Overview
  - CSRD is a centrepiece of the European Union's sustainable-finance agenda, designed to give investors and stakeholders comparable, reliable and auditable sustainability data. It introduces mandatory European Sustainability Reporting Standards and the double-materiality principle, under which firms report both their impact on the world and the world's impact on them.
- ### Key aspects
  - Double-materiality assessment covering impact and financial materiality
  - Reporting against the European Sustainability Reporting Standards
  - Mandatory limited, later reasonable, assurance of disclosures
  - Phased application across large, listed and eventually smaller undertakings
- ### Applications
  - Corporate annual sustainability statements in the EU
  - Value-chain emissions and Scope 3 reporting
  - ESG data collection and assurance programmes
  - Investor screening on standardised sustainability data
- ### Relationships
  - subClassOf:: [[ESG Reporting]]
  - partOf:: [[Regulation]]
  - partOf:: [[ESG Reporting]]
  - implements:: [[Double Materiality]]
  - implements:: [[Disclosure]]
  - standardizedBy:: [[Regulation]]
  - requires:: [[Carbon Accounting]]
  - requires:: [[Scope 3 Emissions]]
  - requires:: [[Disclosure]]
  - enables:: [[Sustainability]]
  - enables:: [[Compliance]]
  - supports:: [[ESG]]
  - supports:: [[Sustainability]]
  - dependsOn:: [[Double Materiality]]
  - relatedTo:: [[ESG]]
  - relatedTo:: [[Regulatory Compliance]]
  - relatedTo:: [[Carbon Accounting]]
  - bridgesTo:: [[ESG Reporting]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - generatedAt:: 2026-06-15T00:00:00Z
  - updated:: 2026-06-15
