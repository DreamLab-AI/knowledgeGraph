schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#TransparencyMetrics
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:transparency-metrics
public:: true

# Transparency Metrics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a07fc65e3b283fd2653ec2ccbad50613cc5760b097698e64e2931f605ba0c71",
  "@type": "Page",
  "vc:slug": "transparency-metrics",
  "title": "Transparency Metrics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-8169057bd6f1"
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
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#TransparencyMetrics"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10085"
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
      "vc:value": "Transparency Metrics"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:transparency-metrics"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:transparency-metrics"
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
    "@id": "urn:visionflow:page:0a07fc65e3b283fd2653ec2ccbad50613cc5760b097698e64e2931f605ba0c71@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:transparency-metrics",
  "@type": "Class",
  "label": "Transparency Metrics",
  "definition": "Quantitative and qualitative measures used to assess and communicate the openness, accountability, and visibility of governance, operations, and decision-making processes in digital platforms, DAOs, and metaverse environments.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:transparency-metrics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0a07fc65e3b283fd2653ec2ccbad50613cc5760b097698e64e2931f605ba0c71"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:owl:class:governance",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0a07fc65e3b283fd2653ec2ccbad50613cc5760b097698e64e2931f605ba0c71@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Quantitative and qualitative measures used to assess and communicate the openness, accountability, and visibility of governance, operations, and decision-making processes in digital platforms, DAOs, and metaverse environments.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TransparencyMetrics
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Governance]]

- ### Content

  - ## Overview
  - Transparency metrics enable measurement and benchmarking of organizational openness and accountability. The T-Index measures real transparency using 14 de facto components across 129 countries. Sustainability reporting frameworks like GRI, SASB, and TCFD provide standardized ESG metrics.
  - ## Technical Details
  - ### Measurement Frameworks
		- **T-Index**: 14 de facto components based on website observations + 5 de jure components from laws
		- **WEF Stakeholder Capitalism Metrics**: 55 metrics for corporate transparency
		- **GRI (Global Reporting Initiative)**: Sustainability reporting standards
		- **SASB**: Industry-specific sustainability accounting standards
  - ### Key Metrics Categories
		- **Data Disclosure**: Open data availability and accessibility
		- **Decision Transparency**: Visibility of governance processes
		- **Financial Reporting**: Revenue, spending, and allocation disclosure
		- **Performance Tracking**: Measurable goals and progress reporting
  - ### Blockchain-Enabled Transparency
		- On-chain voting records
		- Treasury balance visibility
		- Smart contract execution logs
		- Token distribution analytics
  - ## Applications
  - DAO governance transparency reporting
  - Corporate ESG compliance measurement
  - Government open data initiatives
  - Metaverse platform accountability
  - Digital identity transparency verification

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
