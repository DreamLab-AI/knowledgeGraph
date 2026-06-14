public:: true

# Compliance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:193bdc9fa509f69778510d4ec32db89dd5ce4ccde9245562ec27fe6803270063",
  "@type": "Page",
  "vc:slug": "compliance-domain",
  "title": "Compliance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:control-framework",
      "vc:label": "Control Framework"
    },
    {
      "@id": "urn:visionflow:linked:compliance-monitoring",
      "vc:label": "Compliance Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:audit",
      "vc:label": "Audit"
    },
    {
      "@id": "urn:visionflow:linked:conformance-reporting",
      "vc:label": "Conformance Reporting"
    },
    {
      "@id": "urn:visionflow:linked:policy-management",
      "vc:label": "Policy Management"
    },
    {
      "@id": "urn:visionflow:linked:regulation-domain",
      "vc:label": "Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-representation-domain",
      "vc:label": "Knowledge Representation Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-conformance",
      "vc:label": "Regulatory Conformance"
    },
    {
      "@id": "urn:visionflow:linked:audit-readiness",
      "vc:label": "Audit Readiness"
    },
    {
      "@id": "urn:visionflow:linked:obligation-tracking",
      "vc:label": "Obligation Tracking"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance-domain",
      "vc:label": "AI Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:corporate-governance-domain",
      "vc:label": "Corporate Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-37301-2021",
      "vc:label": "ISO 37301:2021"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Compliance Domain"
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
  "@id": "urn:ngm:class:compliance-domain",
  "@type": "Class",
  "label": "Compliance Domain",
  "definition": "The Compliance Domain covers the processes by which organisations demonstrate adherence to laws, regulations, standards and internal policies. Its scope includes control frameworks, monitoring, audit and reporting of conformance. It is a top-level subject classification applied across regulated activities. The boundary excludes the creation of the rules themselves, which belongs to the Regulation Domain.",
  "domain": "governance",
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
        "@id": "urn:ngm:class:control-framework",
        "label": "Control Framework"
      },
      {
        "@id": "urn:ngm:class:compliance-monitoring",
        "label": "Compliance Monitoring"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      },
      {
        "@id": "urn:ngm:class:conformance-reporting",
        "label": "Conformance Reporting"
      },
      {
        "@id": "urn:ngm:class:policy-management",
        "label": "Policy Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulation-domain",
        "label": "Regulation Domain"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation-domain",
        "label": "Knowledge Representation Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-conformance",
        "label": "Regulatory Conformance"
      },
      {
        "@id": "urn:ngm:class:audit-readiness",
        "label": "Audit Readiness"
      },
      {
        "@id": "urn:ngm:class:obligation-tracking",
        "label": "Obligation Tracking"
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
  "@id": "urn:visionflow:annotation:link-resolutions:compliance-domain:364e0d3c8df8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:193bdc9fa509f69778510d4ec32db89dd5ce4ccde9245562ec27fe6803270063"
  },
  "vc:resolutions": [
    {
      "raw": "[[Control Framework]]",
      "resolved": "urn:visionflow:linked:control-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Monitoring]]",
      "resolved": "urn:visionflow:linked:compliance-monitoring",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit]]",
      "resolved": "urn:visionflow:linked:audit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conformance Reporting]]",
      "resolved": "urn:visionflow:linked:conformance-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Policy Management]]",
      "resolved": "urn:visionflow:linked:policy-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulation Domain]]",
      "resolved": "urn:visionflow:linked:regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Representation Domain]]",
      "resolved": "urn:visionflow:linked:knowledge-representation-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Conformance]]",
      "resolved": "urn:visionflow:linked:regulatory-conformance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit Readiness]]",
      "resolved": "urn:visionflow:linked:audit-readiness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Obligation Tracking]]",
      "resolved": "urn:visionflow:linked:obligation-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Governance Domain]]",
      "resolved": "urn:visionflow:linked:ai-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Corporate Governance Domain]]",
      "resolved": "urn:visionflow:linked:corporate-governance-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 37301:2021]]",
      "resolved": "urn:visionflow:linked:iso-37301-2021",
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
  - The Compliance Domain covers the processes by which organisations demonstrate adherence to laws, regulations, standards and internal policies. Its scope includes control frameworks, monitoring, audit and reporting of conformance. It is a top-level subject classification applied across regulated activities. The boundary excludes the creation of the rules themselves, which belongs to the Regulation Domain.

- ### Semantic Classification
  - owl-class:: comp:ComplianceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Regulation Domain]], [[AI Governance Domain]], [[Corporate Governance Domain]]
  - has-part:: [[Control Framework]], [[Compliance Monitoring]], [[Audit]], [[Conformance Reporting]], [[Policy Management]]
  - requires:: [[Regulation Domain]], [[Risk Management]], [[Knowledge Representation Domain]]
  - enables:: [[Regulatory Conformance]], [[Audit Readiness]], [[Obligation Tracking]]

- ### Content
  - The Compliance Domain addresses how organisations show that their activities meet applicable obligations, whether legal, regulatory or self-imposed. Its scope covers the control frameworks that map obligations to safeguards, the monitoring that detects deviation, the audit that verifies controls and the reporting that evidences conformance. The boundary is verification of adherence; the authoring of the obligations is a matter for the Regulation Domain.
  - Member concepts include the Control Framework, Compliance Monitoring, Audit, Conformance Reporting and Policy Management. These depend on the Regulation Domain for the obligations to be met, risk management for prioritisation and the Knowledge Representation Domain for encoding rules in machine-readable form.
  - The domain bridges to the Regulation Domain as the source of obligations, to the AI Governance Domain where AI-specific controls are assured, and to the Corporate Governance Domain through internal control. It enables regulatory conformance, audit readiness and obligation tracking.

- ### Provenance
  - sources:: [[ISO 37301:2021]]
  - migration-date:: 2026-05-29T00:00:00Z
