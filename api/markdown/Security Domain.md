public:: true

# Security Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4d985ff18118dad1328eee33dee67dd6930892c5e94147456466893cfb64e70",
  "@type": "Page",
  "vc:slug": "security-domain",
  "title": "Security Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:linked:threat-model",
      "vc:label": "Threat Model"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:vulnerability-management",
      "vc:label": "Vulnerability Management"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-domain",
      "vc:label": "Cryptographic Domain"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:trusted-computing",
      "vc:label": "Trusted Computing"
    },
    {
      "@id": "urn:visionflow:linked:data-protection",
      "vc:label": "Data Protection"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "Privacy Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
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
      "@id": "urn:visionflow:linked:nist-sp-800-53",
      "vc:label": "NIST SP 800-53"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Security Domain"
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
  "@id": "urn:ngm:class:security-domain",
  "@type": "Class",
  "label": "Security Domain",
  "definition": "The Security Domain classifies concepts concerning the protection of systems, data and communications against unauthorised access, modification and disruption. It covers the principles of confidentiality, integrity and availability and the controls that enforce them. As a top-level subject axis it applies across all architectural layers, framing how trust is established and threats are countered.",
  "domain": "security",
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
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:threat-model",
        "label": "Threat Model"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-domain",
        "label": "Cryptographic Domain"
      },
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trusted-computing",
        "label": "Trusted Computing"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:security-domain:bfb6ab1cc828",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e4d985ff18118dad1328eee33dee67dd6930892c5e94147456466893cfb64e70"
  },
  "vc:resolutions": [
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:linked:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Threat Model]]",
      "resolved": "urn:visionflow:linked:threat-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vulnerability Management]]",
      "resolved": "urn:visionflow:linked:vulnerability-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Domain]]",
      "resolved": "urn:visionflow:linked:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trusted Computing]]",
      "resolved": "urn:visionflow:linked:trusted-computing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:linked:data-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Domain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
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
      "raw": "[[NIST SP 800-53]]",
      "resolved": "urn:visionflow:linked:nist-sp-800-53",
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
  - The Security Domain classifies concepts concerning the protection of systems, data and communications against unauthorised access, modification and disruption. It covers the principles of confidentiality, integrity and availability and the controls that enforce them. As a top-level subject axis it applies across all architectural layers, framing how trust is established and threats are countered.

- ### Semantic Classification
  - owl-class:: sec:SecurityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Privacy Domain]], [[Regulatory Domain]]
  - has-part:: [[Access Control]], [[Threat Model]], [[Authentication]], [[Encryption]], [[Vulnerability Management]]
  - requires:: [[Cryptographic Domain]], [[Identity Domain]]
  - enables:: [[Trusted Computing]], [[Data Protection]]

- ### Content
  - Security concerns the systematic protection of assets against adversaries who seek to violate confidentiality, integrity or availability. It begins with threat modelling, which identifies what is being protected, from whom and through which attack surfaces. Controls are then selected and layered so that the failure of any single measure does not compromise the whole.
  - The domain spans authentication and authorisation, which establish and constrain identity, and cryptographic protection of data at rest and in transit. It addresses operational practices including patching, monitoring, incident response and the management of vulnerabilities across their lifecycle. Risk is assessed in terms of likelihood and impact, guiding proportionate investment in defences.
  - Security bridges to privacy, with which it shares mechanisms but differs in objective, and to regulatory regimes that mandate specific controls. It depends on the Cryptographic and Identity Domains for the primitives on which assurance is built.

- ### Provenance
  - sources:: [[ISO/IEC 27001]], [[NIST SP 800-53]]
  - migration-date:: 2026-05-29T00:00:00Z
