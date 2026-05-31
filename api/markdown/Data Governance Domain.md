public:: true

# Data Governance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d92a52208a634c8f6abf5542895be8519e9ce5dbf06c47c83ea31c7918c64a0",
  "@type": "Page",
  "vc:slug": "data-governance-domain",
  "title": "Data Governance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-ownership",
      "vc:label": "Data Ownership"
    },
    {
      "@id": "urn:visionflow:linked:data-quality",
      "vc:label": "Data Quality"
    },
    {
      "@id": "urn:visionflow:linked:data-lineage",
      "vc:label": "Data Lineage"
    },
    {
      "@id": "urn:visionflow:linked:data-catalogue",
      "vc:label": "Data Catalogue"
    },
    {
      "@id": "urn:visionflow:linked:retention-policy",
      "vc:label": "Retention Policy"
    },
    {
      "@id": "urn:visionflow:linked:governance-domain",
      "vc:label": "Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:data-management-domain",
      "vc:label": "Data Management Domain"
    },
    {
      "@id": "urn:visionflow:linked:trusted-data",
      "vc:label": "Trusted Data"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-reporting",
      "vc:label": "Regulatory Reporting"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "Privacy Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance-domain",
      "vc:label": "Regulatory Compliance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:dama-dmbok",
      "vc:label": "DAMA-DMBOK"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Governance Domain"
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
  "@id": "urn:ngm:class:data-governance-domain",
  "@type": "Class",
  "label": "Data Governance Domain",
  "definition": "The Data Governance Domain classifies concepts concerning the policies, roles and controls that govern data as an organisational asset. It covers ownership, quality, lineage and the rules for access, retention and use. As a top-level subject axis it establishes how data is managed responsibly across systems and throughout its lifecycle.",
  "domain": "data-governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-ownership",
        "label": "Data Ownership"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-lineage",
        "label": "Data Lineage"
      },
      {
        "@id": "urn:ngm:class:data-catalogue",
        "label": "Data Catalogue"
      },
      {
        "@id": "urn:ngm:class:retention-policy",
        "label": "Retention Policy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:governance-domain",
        "label": "Governance Domain"
      },
      {
        "@id": "urn:ngm:class:data-management-domain",
        "label": "Data Management Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trusted-data",
        "label": "Trusted Data"
      },
      {
        "@id": "urn:ngm:class:regulatory-reporting",
        "label": "Regulatory Reporting"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-governance-domain:7a83cb3ae75c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d92a52208a634c8f6abf5542895be8519e9ce5dbf06c47c83ea31c7918c64a0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Ownership]]",
      "resolved": "urn:visionflow:linked:data-ownership",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Quality]]",
      "resolved": "urn:visionflow:linked:data-quality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Lineage]]",
      "resolved": "urn:visionflow:linked:data-lineage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Catalogue]]",
      "resolved": "urn:visionflow:linked:data-catalogue",
      "kind": "StubLink"
    },
    {
      "raw": "[[Retention Policy]]",
      "resolved": "urn:visionflow:linked:retention-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Management Domain]]",
      "resolved": "urn:visionflow:linked:data-management-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trusted Data]]",
      "resolved": "urn:visionflow:linked:trusted-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Reporting]]",
      "resolved": "urn:visionflow:linked:regulatory-reporting",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Domain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Compliance Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAMA-DMBOK]]",
      "resolved": "urn:visionflow:linked:dama-dmbok",
      "kind": "StubLink"
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
  - The Data Governance Domain classifies concepts concerning the policies, roles and controls that govern data as an organisational asset. It covers ownership, quality, lineage and the rules for access, retention and use. As a top-level subject axis it establishes how data is managed responsibly across systems and throughout its lifecycle.

- ### Semantic Classification
  - owl-class:: dgov:DataGovernanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Privacy Domain]], [[Regulatory Compliance Domain]]
  - has-part:: [[Data Ownership]], [[Data Quality]], [[Data Lineage]], [[Data Catalogue]], [[Retention Policy]]
  - requires:: [[Governance Domain]], [[Data Management Domain]]
  - enables:: [[Trusted Data]], [[Regulatory Reporting]]

- ### Content
  - Data governance establishes accountability for data, assigning ownership and stewardship so that decisions about data have a responsible party. It defines policies for classification, access, retention and disposal, and the controls that enforce them. The objective is data that is trustworthy, consistent and used in accordance with obligations.
  - The domain depends on visibility into where data originates, how it is transformed and where it flows, captured as lineage and recorded in catalogues. Quality management sets measurable expectations for accuracy, completeness and timeliness and monitors conformance. Policies link data handling to legal and contractual requirements.
  - Data governance bridges to privacy and regulatory compliance, which impose specific constraints on personal and regulated data. It requires the wider Governance Domain for legitimate policy-making and the Data Management Domain for the technical means of enforcement.

- ### Provenance
  - sources:: [[DAMA-DMBOK]]
  - migration-date:: 2026-05-29T00:00:00Z
