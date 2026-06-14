public:: true

# Regulatory Compliance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:57ac61c9601c0bc5160855c8d6bb5804491229869407724a993e9a6e60b62bf8",
  "@type": "Page",
  "vc:slug": "regulatory-compliance-domain",
  "title": "Regulatory Compliance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:control-framework",
      "vc:label": "Control Framework"
    },
    {
      "@id": "urn:visionflow:linked:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:linked:compliance-monitoring",
      "vc:label": "Compliance Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:evidence-collection",
      "vc:label": "Evidence Collection"
    },
    {
      "@id": "urn:visionflow:linked:attestation",
      "vc:label": "Attestation"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:data-governance-domain",
      "vc:label": "Data Governance Domain"
    },
    {
      "@id": "urn:visionflow:linked:certification",
      "vc:label": "Certification"
    },
    {
      "@id": "urn:visionflow:linked:audit-readiness",
      "vc:label": "Audit Readiness"
    },
    {
      "@id": "urn:visionflow:linked:security-domain",
      "vc:label": "Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation-domain",
      "vc:label": "Financial Regulation Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-27001",
      "vc:label": "ISO/IEC 27001"
    },
    {
      "@id": "urn:visionflow:linked:soc-2",
      "vc:label": "SOC 2"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regulatory Compliance Domain"
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
  "@id": "urn:ngm:class:regulatory-compliance-domain",
  "@type": "Class",
  "label": "Regulatory Compliance Domain",
  "definition": "The Regulatory Compliance Domain classifies concepts concerning the practices by which organisations meet and demonstrate adherence to applicable rules. It covers controls, monitoring, evidence and the audit processes that confirm conformance. As a top-level subject axis it operationalises the obligations set by the Regulatory Domain within systems and processes.",
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
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:compliance-monitoring",
        "label": "Compliance Monitoring"
      },
      {
        "@id": "urn:ngm:class:evidence-collection",
        "label": "Evidence Collection"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-domain",
        "label": "Regulatory Domain"
      },
      {
        "@id": "urn:ngm:class:data-governance-domain",
        "label": "Data Governance Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:certification",
        "label": "Certification"
      },
      {
        "@id": "urn:ngm:class:audit-readiness",
        "label": "Audit Readiness"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regulatory-compliance-domain:f4f20e2af192",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:57ac61c9601c0bc5160855c8d6bb5804491229869407724a993e9a6e60b62bf8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Control Framework]]",
      "resolved": "urn:visionflow:linked:control-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:linked:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance Monitoring]]",
      "resolved": "urn:visionflow:linked:compliance-monitoring",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Evidence Collection]]",
      "resolved": "urn:visionflow:linked:evidence-collection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Attestation]]",
      "resolved": "urn:visionflow:linked:attestation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Governance Domain]]",
      "resolved": "urn:visionflow:linked:data-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Certification]]",
      "resolved": "urn:visionflow:linked:certification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audit Readiness]]",
      "resolved": "urn:visionflow:linked:audit-readiness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Domain]]",
      "resolved": "urn:visionflow:linked:security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation Domain]]",
      "resolved": "urn:visionflow:linked:financial-regulation-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 27001]]",
      "resolved": "urn:visionflow:linked:iso-iec-27001",
      "kind": "StubLink"
    },
    {
      "raw": "[[SOC 2]]",
      "resolved": "urn:visionflow:linked:soc-2",
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
  - The Regulatory Compliance Domain classifies concepts concerning the practices by which organisations meet and demonstrate adherence to applicable rules. It covers controls, monitoring, evidence and the audit processes that confirm conformance. As a top-level subject axis it operationalises the obligations set by the Regulatory Domain within systems and processes.

- ### Semantic Classification
  - owl-class:: rcomp:RegulatoryComplianceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Security Domain]], [[Financial Regulation Domain]]
  - has-part:: [[Control Framework]], [[Audit Trail]], [[Compliance Monitoring]], [[Evidence Collection]], [[Attestation]]
  - requires:: [[Regulatory Domain]], [[Data Governance Domain]]
  - enables:: [[Certification]], [[Audit Readiness]]

- ### Content
  - Regulatory compliance translates external obligations into concrete controls, then operates and evidences those controls so that adherence can be demonstrated. It maps requirements to control objectives, assigns ownership and establishes the routine activities that keep the organisation conformant. The aim is continuous compliance rather than point-in-time conformance.
  - The domain emphasises auditable evidence, capturing logs, attestations and records that allow an independent party to verify that controls operate as designed. Compliance monitoring detects drift between policy and practice and triggers remediation. Control frameworks provide reusable structures that can be mapped to multiple regulatory regimes at once.
  - Regulatory compliance bridges to security, whose controls satisfy many requirements, and to financial regulation as a heavily supervised application. It depends on the Regulatory Domain for the rules it implements and on data governance for trustworthy evidence.

- ### Provenance
  - sources:: [[ISO/IEC 27001]], [[SOC 2]]
  - migration-date:: 2026-05-29T00:00:00Z
