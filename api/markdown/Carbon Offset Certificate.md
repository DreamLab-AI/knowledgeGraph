public:: true

# Carbon Offset Certificate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:21c3bc462095579d3e9e1feb7d1093cbfc23ac4dea58c7e0faab3bb7da294833",
  "@type": "Page",
  "vc:slug": "carbon-offset-certificate",
  "title": "Carbon Offset Certificate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:carbon-neutrality",
      "vc:label": "Carbon Neutrality"
    },
    {
      "@id": "urn:visionflow:linked:climate-investment",
      "vc:label": "Climate Investment"
    },
    {
      "@id": "urn:visionflow:linked:emissions-compensation",
      "vc:label": "Emissions Compensation"
    },
    {
      "@id": "urn:visionflow:linked:project-verification",
      "vc:label": "Project Verification"
    },
    {
      "@id": "urn:visionflow:linked:registry-issuance",
      "vc:label": "Registry Issuance"
    },
    {
      "@id": "urn:visionflow:linked:third-party-validation",
      "vc:label": "Third Party Validation"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:environmental-certificate",
      "vc:label": "Environmental Certificate"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9813"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Carbon Offset Certificate"
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
  "@id": "urn:ngm:class:carbon-offset-certificate",
  "@type": "Class",
  "label": "Carbon Offset Certificate",
  "definition": "A verified document representing the reduction or removal of one metric ton of CO2 equivalent emissions, issued by recognized standards bodies after independent validation that confirms the underlying project's additionality, permanence, and measurability.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:environmental-certificate",
      "label": "Environmental Certificate"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:project-verification",
        "label": "Project Verification"
      },
      {
        "@id": "urn:ngm:class:registry-issuance",
        "label": "Registry Issuance"
      },
      {
        "@id": "urn:ngm:class:third-party-validation",
        "label": "Third Party Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:carbon-neutrality",
        "label": "Carbon Neutrality"
      },
      {
        "@id": "urn:ngm:class:climate-investment",
        "label": "Climate Investment"
      },
      {
        "@id": "urn:ngm:class:emissions-compensation",
        "label": "Emissions Compensation"
      }
    ]
  },
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:carbon-offset-certificate:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:21c3bc462095579d3e9e1feb7d1093cbfc23ac4dea58c7e0faab3bb7da294833"
  },
  "vc:resolutions": [
    {
      "raw": "[[Carbon Neutrality]]",
      "resolved": "urn:visionflow:linked:carbon-neutrality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Climate Investment]]",
      "resolved": "urn:visionflow:linked:climate-investment",
      "kind": "StubLink"
    },
    {
      "raw": "[[Emissions Compensation]]",
      "resolved": "urn:visionflow:linked:emissions-compensation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Project Verification]]",
      "resolved": "urn:visionflow:linked:project-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Registry Issuance]]",
      "resolved": "urn:visionflow:linked:registry-issuance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Third Party Validation]]",
      "resolved": "urn:visionflow:linked:third-party-validation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Environmental Certificate]]",
      "resolved": "urn:visionflow:owl:class:environmental-certificate",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - A verified document representing the reduction or removal of one metric ton of CO2 equivalent emissions, issued by recognized standards bodies after independent validation that confirms the underlying project's additionality, permanence, and measurability.

- ### Semantic Classification
  - owl-class:: spatial-computing:CarbonOffsetCertificate
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Environmental Certificate]]
  - requires:: [[Project Verification]], [[Registry Issuance]], [[Third Party Validation]]
  - enables:: [[Carbon Neutrality]], [[Emissions Compensation]], [[Climate Investment]]
  - bridges-to:: [[Blockchain]]

- ### Content

  - ## Technical Details
  - **Major Certification Standards**:
		- **Verra VCS**: 80% of VCM market share, 2,300+ projects, 1.3B credits issued
		- **Gold Standard**: WWF-founded, emphasis on sustainable development co-benefits
		- **American Carbon Registry (ACR)**: Oldest voluntary offset program
		- **Climate Action Reserve (CAR)**: North America focused
  - **Credit Properties**:
		- Real and measurable emission reductions
		- Additional (beyond business-as-usual)
		- Permanent or long-term
		- Independently verified
		- Uniquely numbered for tracking
		- Conservatively estimated
  - **Project Types**: AFOLU (forestry, land use), renewable energy, energy efficiency, waste management, transport
  - **Vintage Requirements**: Credits must represent reductions within 4 years of emissions year
  - **2024 Issues**: Some Brazilian Amazon projects suspended due to land-grabbing concerns
  - ## Applications
  - Corporate carbon neutrality claims
  - Voluntary emissions compensation
  - CORSIA aviation offset compliance
  - ESG portfolio enhancement
  - Climate impact investment

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
