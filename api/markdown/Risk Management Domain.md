public:: true

# Risk Management Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b1879000d8524021a52a8320a23ef4306f7810ae622c3120aee598ebf71e288b",
  "@type": "Page",
  "vc:slug": "risk-management-domain",
  "title": "Risk Management Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:risk-assessment",
      "vc:label": "Risk Assessment"
    },
    {
      "@id": "urn:visionflow:linked:risk-control",
      "vc:label": "Risk Control"
    },
    {
      "@id": "urn:visionflow:linked:risk-taxonomy",
      "vc:label": "Risk Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:stress-testing",
      "vc:label": "Stress Testing"
    },
    {
      "@id": "urn:visionflow:linked:risk-governance",
      "vc:label": "Risk Governance"
    },
    {
      "@id": "urn:visionflow:linked:risk-identification",
      "vc:label": "Risk Identification"
    },
    {
      "@id": "urn:visionflow:linked:measurement-method",
      "vc:label": "Measurement Method"
    },
    {
      "@id": "urn:visionflow:linked:exposure-reduction",
      "vc:label": "Exposure Reduction"
    },
    {
      "@id": "urn:visionflow:linked:capital-adequacy",
      "vc:label": "Capital Adequacy"
    },
    {
      "@id": "urn:visionflow:linked:resilience-planning",
      "vc:label": "Resilience Planning"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:information-security-domain",
      "vc:label": "Information Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-finance-domain",
      "vc:label": "Decentralised Finance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-31000",
      "vc:label": "ISO 31000"
    },
    {
      "@id": "urn:visionflow:linked:basel-iii",
      "vc:label": "Basel III"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Risk Management Domain"
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
  "@id": "urn:ngm:class:risk-management-domain",
  "@type": "Class",
  "label": "Risk Management Domain",
  "definition": "The Risk Management Domain classifies concepts concerned with identifying, assessing, and controlling exposure to adverse events across financial, operational, and technical systems. It covers risk taxonomies, measurement methods, controls, and governance frameworks. As a top-level subject classification, it scopes the systematic treatment of uncertainty and loss rather than the specific domains in which risks arise.",
  "domain": "finance",
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
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:risk-control",
        "label": "Risk Control"
      },
      {
        "@id": "urn:ngm:class:risk-taxonomy",
        "label": "Risk Taxonomy"
      },
      {
        "@id": "urn:ngm:class:stress-testing",
        "label": "Stress Testing"
      },
      {
        "@id": "urn:ngm:class:risk-governance",
        "label": "Risk Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:risk-identification",
        "label": "Risk Identification"
      },
      {
        "@id": "urn:ngm:class:measurement-method",
        "label": "Measurement Method"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:exposure-reduction",
        "label": "Exposure Reduction"
      },
      {
        "@id": "urn:ngm:class:capital-adequacy",
        "label": "Capital Adequacy"
      },
      {
        "@id": "urn:ngm:class:resilience-planning",
        "label": "Resilience Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:risk-management-domain:3a9aaa8bba6a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b1879000d8524021a52a8320a23ef4306f7810ae622c3120aee598ebf71e288b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Risk Assessment]]",
      "resolved": "urn:visionflow:linked:risk-assessment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Control]]",
      "resolved": "urn:visionflow:linked:risk-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Taxonomy]]",
      "resolved": "urn:visionflow:linked:risk-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stress Testing]]",
      "resolved": "urn:visionflow:linked:stress-testing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Governance]]",
      "resolved": "urn:visionflow:linked:risk-governance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Identification]]",
      "resolved": "urn:visionflow:linked:risk-identification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Method]]",
      "resolved": "urn:visionflow:linked:measurement-method",
      "kind": "StubLink"
    },
    {
      "raw": "[[Exposure Reduction]]",
      "resolved": "urn:visionflow:linked:exposure-reduction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Capital Adequacy]]",
      "resolved": "urn:visionflow:linked:capital-adequacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Resilience Planning]]",
      "resolved": "urn:visionflow:linked:resilience-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Information Security Domain]]",
      "resolved": "urn:visionflow:linked:information-security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Finance Domain]]",
      "resolved": "urn:visionflow:linked:decentralised-finance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 31000]]",
      "resolved": "urn:visionflow:linked:iso-31000",
      "kind": "StubLink"
    },
    {
      "raw": "[[Basel III]]",
      "resolved": "urn:visionflow:linked:basel-iii",
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
  - The Risk Management Domain classifies concepts concerned with identifying, assessing, and controlling exposure to adverse events across financial, operational, and technical systems. It covers risk taxonomies, measurement methods, controls, and governance frameworks. As a top-level subject classification, it scopes the systematic treatment of uncertainty and loss rather than the specific domains in which risks arise.

- ### Semantic Classification
  - owl-class:: risk:RiskManagementDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Financial Regulation Domain]], [[Information Security Domain]], [[Decentralised Finance Domain]]
  - has-part:: [[Risk Assessment]], [[Risk Control]], [[Risk Taxonomy]], [[Stress Testing]], [[Risk Governance]]
  - requires:: [[Risk Identification]], [[Measurement Method]]
  - enables:: [[Exposure Reduction]], [[Capital Adequacy]], [[Resilience Planning]]

- ### Content
  - The Risk Management Domain organises the disciplined treatment of uncertainty. A risk taxonomy classifies exposures by type, assessment estimates likelihood and impact, and controls reduce either the probability or the severity of loss. Governance assigns ownership and ensures that risk appetite and tolerance are set and monitored at the appropriate level.
  - Measurement methods range from qualitative scoring to quantitative models and stress testing, which examines behaviour under severe but plausible scenarios. In financial settings these methods inform capital adequacy and liquidity planning, while in technical settings they prioritise the remediation of vulnerabilities. The choice of method depends on data availability and the consequences of being wrong.
  - As a top-level domain, risk management connects to financial regulation, which mandates many controls, to information security, which manages technical exposures, and to decentralised finance, where composability concentrates risk. It bridges to those domains because risk is a cross-cutting concern they all share. Keeping the treatment of uncertainty in its own classification lets common methods be applied consistently across the graph.

- ### Provenance
  - sources:: [[ISO 31000]], [[Basel III]]
  - migration-date:: 2026-05-29T00:00:00Z
