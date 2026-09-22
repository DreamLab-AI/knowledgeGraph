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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10085"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Transparency Metrics"
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
  "@id": "urn:ngm:class:transparency-metrics",
  "@type": "Class",
  "label": "Transparency Metrics",
  "definition": "Quantitative and qualitative measures used to assess and communicate the openness, accountability, and visibility of governance, operations, and decision-making processes in digital platforms, DAOs, and metaverse environments. Frameworks such as GRI, SASB, and the T-Index provide standardised scoring across data disclosure, financial reporting, and decision visibility dimensions. In blockchain contexts, on-chain voting records and treasury analytics serve as primary evidence sources.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:decision-transparency", "label": "Decision Transparency"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:dao-governance", "label": "DAO Governance"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:compliance-framework", "label": "Compliance Framework"}
    ]
  },
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
  - requires:: [[Audit Trail]]
  - enables:: [[Compliance Monitoring]], [[Decision Transparency]]
  - uses:: [[DAO Governance]], [[Blockchain]]
  - relatedTo:: [[AI Governance Framework]], [[Compliance Framework]]

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
