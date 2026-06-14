public:: true

# Compliance Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:96e1363e5e2aa207c05bc72c0caa92d5de7dc21a8570f064086577cf4061df22",
  "@type": "Page",
  "vc:slug": "compliance-layer",
  "title": "Compliance Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:policy-layer",
      "vc:label": "Policy Layer"
    },
    {
      "@id": "urn:visionflow:linked:governance-layer",
      "vc:label": "Governance Layer"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-layer",
      "vc:label": "Regulatory Layer"
    },
    {
      "@id": "urn:visionflow:linked:institutional-layer",
      "vc:label": "Institutional Layer"
    },
    {
      "@id": "urn:visionflow:linked:audit",
      "vc:label": "Audit"
    },
    {
      "@id": "urn:visionflow:linked:risk-management",
      "vc:label": "Risk Management"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Compliance Layer"
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
  "@id": "urn:ngm:class:compliance-layer",
  "@type": "Class",
  "label": "Compliance Layer",
  "definition": "The Compliance Layer is the cross-cutting stratum that checks system behaviour against external obligations such as law, regulation, and contractual terms. It sits above the Policy Layer, consuming its enforcement records, and reports to the Regulatory and Governance Layers. It contains controls, evidence collection, audit trails, and conformance assessments rather than the operations being assessed.",
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
    "requires": [
      {
        "@id": "urn:ngm:class:policy-layer",
        "label": "Policy Layer"
      },
      {
        "@id": "urn:ngm:class:governance-layer",
        "label": "Governance Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-layer",
        "label": "Regulatory Layer"
      },
      {
        "@id": "urn:ngm:class:institutional-layer",
        "label": "Institutional Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:compliance-layer:b98b7a4b4e03",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:96e1363e5e2aa207c05bc72c0caa92d5de7dc21a8570f064086577cf4061df22"
  },
  "vc:resolutions": [
    {
      "raw": "[[Policy Layer]]",
      "resolved": "urn:visionflow:linked:policy-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Layer]]",
      "resolved": "urn:visionflow:linked:governance-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Layer]]",
      "resolved": "urn:visionflow:linked:regulatory-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Institutional Layer]]",
      "resolved": "urn:visionflow:linked:institutional-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit]]",
      "resolved": "urn:visionflow:linked:audit",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Management]]",
      "resolved": "urn:visionflow:linked:risk-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
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
  - The Compliance Layer is the cross-cutting stratum that checks system behaviour against external obligations such as law, regulation, and contractual terms. It sits above the Policy Layer, consuming its enforcement records, and reports to the Regulatory and Governance Layers. It contains controls, evidence collection, audit trails, and conformance assessments rather than the operations being assessed.

- ### Semantic Classification
  - owl-class:: compliance:ComplianceLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Audit]], [[Risk Management]]
  - requires:: [[Policy Layer]], [[Governance Layer]]
  - enables:: [[Regulatory Layer]], [[Institutional Layer]]

- ### Content
  - The Compliance Layer verifies that what a system actually does matches the obligations it is subject to. Typical members include control catalogues, evidence stores, automated conformance checks, attestations, and audit logs. It is concerned with demonstrable proof of adherence, not with implementing the underlying behaviour.
  - It requires the Policy Layer for the enforced rules it tests and the Governance Layer for the authoritative statement of intent. It enables the Regulatory Layer, which maps obligations to jurisdictions, and the Institutional Layer, which relies on demonstrated compliance to operate.
  - The layer bridges to audit and risk management, disciplines that define how evidence is gathered and how residual exposure is quantified. Its outputs are reports and attestations that external parties can trust.

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-05-29T00:00:00Z
