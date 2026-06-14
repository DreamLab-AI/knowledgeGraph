public:: true

# Information Security Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3ff4892e81be92719b545065a973244fde3addc80e568c938266365e2a9ccc3",
  "@type": "Page",
  "vc:slug": "information-security-domain",
  "title": "Information Security Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:linked:threat-modelling",
      "vc:label": "Threat Modelling"
    },
    {
      "@id": "urn:visionflow:linked:security-governance",
      "vc:label": "Security Governance"
    },
    {
      "@id": "urn:visionflow:linked:incident-response",
      "vc:label": "Incident Response"
    },
    {
      "@id": "urn:visionflow:linked:vulnerability-management",
      "vc:label": "Vulnerability Management"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-primitive",
      "vc:label": "Cryptographic Primitive"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:audit-logging",
      "vc:label": "Audit Logging"
    },
    {
      "@id": "urn:visionflow:linked:risk-reduction",
      "vc:label": "Risk Reduction"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:trustworthy-operation",
      "vc:label": "Trustworthy Operation"
    },
    {
      "@id": "urn:visionflow:linked:cryptography-domain",
      "vc:label": "Cryptography Domain"
    },
    {
      "@id": "urn:visionflow:linked:privacy-domain",
      "vc:label": "Privacy Domain"
    },
    {
      "@id": "urn:visionflow:linked:risk-management-domain",
      "vc:label": "Risk Management Domain"
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
      "vc:value": "Information Security Domain"
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
  "@id": "urn:ngm:class:information-security-domain",
  "@type": "Class",
  "label": "Information Security Domain",
  "definition": "The Information Security Domain classifies concepts concerned with protecting the confidentiality, integrity, and availability of information and the systems that process it. It covers controls, threat models, governance, and the operational practices that defend assets against compromise. As a top-level subject classification, it scopes the practice of securing systems rather than the cryptographic mathematics that some controls rely upon.",
  "domain": "security",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Infra Security And Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:threat-modelling",
        "label": "Threat Modelling"
      },
      {
        "@id": "urn:ngm:class:security-governance",
        "label": "Security Governance"
      },
      {
        "@id": "urn:ngm:class:incident-response",
        "label": "Incident Response"
      },
      {
        "@id": "urn:ngm:class:vulnerability-management",
        "label": "Vulnerability Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:risk-reduction",
        "label": "Risk Reduction"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:trustworthy-operation",
        "label": "Trustworthy Operation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:information-security-domain:c2428056aaed",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d3ff4892e81be92719b545065a973244fde3addc80e568c938266365e2a9ccc3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:linked:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Threat Modelling]]",
      "resolved": "urn:visionflow:linked:threat-modelling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Security Governance]]",
      "resolved": "urn:visionflow:linked:security-governance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Incident Response]]",
      "resolved": "urn:visionflow:linked:incident-response",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vulnerability Management]]",
      "resolved": "urn:visionflow:linked:vulnerability-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Primitive]]",
      "resolved": "urn:visionflow:linked:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit Logging]]",
      "resolved": "urn:visionflow:linked:audit-logging",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Risk Reduction]]",
      "resolved": "urn:visionflow:linked:risk-reduction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trustworthy Operation]]",
      "resolved": "urn:visionflow:linked:trustworthy-operation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptography Domain]]",
      "resolved": "urn:visionflow:linked:cryptography-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy Domain]]",
      "resolved": "urn:visionflow:linked:privacy-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Risk Management Domain]]",
      "resolved": "urn:visionflow:linked:risk-management-domain",
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
  - The Information Security Domain classifies concepts concerned with protecting the confidentiality, integrity, and availability of information and the systems that process it. It covers controls, threat models, governance, and the operational practices that defend assets against compromise. As a top-level subject classification, it scopes the practice of securing systems rather than the cryptographic mathematics that some controls rely upon.

- ### Semantic Classification
  - owl-class:: infosec:InformationSecurityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Cryptography Domain]], [[Privacy Domain]], [[Risk Management Domain]]
  - has-part:: [[Access Control]], [[Threat Modelling]], [[Security Governance]], [[Incident Response]], [[Vulnerability Management]]
  - requires:: [[Cryptographic Primitive]], [[Identity Management]], [[Audit Logging]]
  - enables:: [[Risk Reduction]], [[Regulatory Compliance]], [[Trustworthy Operation]]

- ### Content
  - The Information Security Domain organises the controls and processes that keep systems trustworthy. Access control restricts who can act, threat modelling identifies what could go wrong, and incident response defines how an organisation reacts when defences fail. Together with vulnerability management and governance, these form a continuous cycle of assessment and improvement.
  - Security is framed around the confidentiality, integrity, and availability triad and assessed against documented threat models. Controls are layered so that the failure of one does not expose the whole system, and their effectiveness is measured through audit logging and review. Standards such as the ISO/IEC 27000 family provide a common control catalogue and management framework.
  - As a top-level domain, information security consumes cryptographic primitives and identity management while feeding into privacy and risk management. It bridges to the Cryptography Domain, which supplies the algorithms, and to the Risk Management Domain, which quantifies exposure. Treating the operational practice as a distinct axis keeps it separable from both the underlying mathematics and the broader enterprise risk view.

- ### Provenance
  - sources:: [[ISO/IEC 27001]], [[NIST SP 800-53]]
  - migration-date:: 2026-05-29T00:00:00Z
