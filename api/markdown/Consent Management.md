public:: true
alias:: ConsentManagement

# Consent Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:161ab31a75af7dd932667d9eb8cd0cea11a1286da888a53c288c923dff9d7325",
  "@type": "Page",
  "vc:slug": "consent-management",
  "title": "Consent Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:audit-logger",
      "vc:label": "Audit Logger"
    },
    {
      "@id": "urn:visionflow:linked:consent-registry",
      "vc:label": "Consent Registry"
    },
    {
      "@id": "urn:visionflow:linked:data-governance-framework",
      "vc:label": "Data Governance Framework"
    },
    {
      "@id": "urn:visionflow:linked:data-privacy",
      "vc:label": "Data Privacy"
    },
    {
      "@id": "urn:visionflow:linked:enisa",
      "vc:label": "ENISA"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-compliance",
      "vc:label": "GDPR Compliance"
    },
    {
      "@id": "urn:visionflow:linked:iso-29184",
      "vc:label": "ISO 29184"
    },
    {
      "@id": "urn:visionflow:linked:permission-controller",
      "vc:label": "Permission Controller"
    },
    {
      "@id": "urn:visionflow:linked:privacy-policy",
      "vc:label": "Privacy Policy"
    },
    {
      "@id": "urn:visionflow:linked:user-authentication",
      "vc:label": "User Authentication"
    },
    {
      "@id": "urn:visionflow:linked:user-control",
      "vc:label": "User Control"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:etsi-domain-data-management-ethics",
      "vc:label": "ETSI Domain: Data Management + Ethics"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-provider",
      "vc:label": "Identity Provider"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:policy-engine",
      "vc:label": "Policy Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:right-to-be-forgotten",
      "vc:label": "Right to be Forgotten"
    },
    {
      "@id": "urn:visionflow:owl:class:right-to-be-forgotten",
      "vc:label": "Right to Be Forgotten"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:user-interface",
      "vc:label": "User Interface"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20123"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Consent Management"
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
  "@id": "urn:ngm:class:consent-management",
  "@type": "Class",
  "label": "Consent Management",
  "definition": "System for recording and enforcing user permissions for data collection, processing, and sharing across metaverse platforms, ensuring compliance with privacy regulations and user autonomy.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:audit-logger",
        "label": "Audit Logger"
      },
      {
        "@id": "urn:ngm:class:consent-registry",
        "label": "Consent Registry"
      },
      {
        "@id": "urn:ngm:class:permission-controller",
        "label": "Permission Controller"
      },
      {
        "@id": "urn:ngm:class:policy-engine",
        "label": "Policy Engine"
      },
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-governance-framework",
        "label": "Data Governance Framework"
      },
      {
        "@id": "urn:ngm:class:privacy-policy",
        "label": "Privacy Policy"
      },
      {
        "@id": "urn:ngm:class:user-authentication",
        "label": "User Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:gdpr-compliance",
        "label": "GDPR Compliance"
      },
      {
        "@id": "urn:ngm:class:user-control",
        "label": "User Control"
      },
      {
        "@id": "urn:ngm:class:right-to-be-forgotten",
        "label": "Right to Be Forgotten"
      },
      {
        "@id": "urn:ngm:class:right-to-be-forgotten",
        "label": "Right to Be Forgotten"
      },
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:etsi-domain-data-management-ethics",
        "label": "ETSI Domain: Data Management + Ethics"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:consent-management:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:161ab31a75af7dd932667d9eb8cd0cea11a1286da888a53c288c923dff9d7325"
  },
  "vc:resolutions": [
    {
      "raw": "[[Audit Logger]]",
      "resolved": "urn:visionflow:linked:audit-logger",
      "kind": "StubLink"
    },
    {
      "raw": "[[Consent Registry]]",
      "resolved": "urn:visionflow:linked:consent-registry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Governance Framework]]",
      "resolved": "urn:visionflow:linked:data-governance-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Privacy]]",
      "resolved": "urn:visionflow:linked:data-privacy",
      "kind": "StubLink"
    },
    {
      "raw": "[[ENISA]]",
      "resolved": "urn:visionflow:linked:enisa",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Compliance]]",
      "resolved": "urn:visionflow:linked:gdpr-compliance",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 29184]]",
      "resolved": "urn:visionflow:linked:iso-29184",
      "kind": "StubLink"
    },
    {
      "raw": "[[Permission Controller]]",
      "resolved": "urn:visionflow:linked:permission-controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Policy]]",
      "resolved": "urn:visionflow:linked:privacy-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Authentication]]",
      "resolved": "urn:visionflow:linked:user-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Control]]",
      "resolved": "urn:visionflow:linked:user-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ETSI Domain: Data Management + Ethics]]",
      "resolved": "urn:visionflow:owl:class:etsi-domain-data-management-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:owl:class:identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware Layer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Policy Engine]]",
      "resolved": "urn:visionflow:owl:class:policy-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Right to Be Forgotten]]",
      "resolved": "urn:visionflow:owl:class:right-to-be-forgotten",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Right to be Forgotten]]",
      "resolved": "urn:visionflow:owl:class:right-to-be-forgotten",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:owl:class:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Interface]]",
      "resolved": "urn:visionflow:owl:class:user-interface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society",
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
  - System for recording and enforcing user permissions for data collection, processing, and sharing across metaverse platforms, ensuring compliance with privacy regulations and user autonomy.

- ### Semantic Classification
  - owl-class:: infrastructure:ConsentManagement
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[Middleware Layer]], [[Application Layer]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - has-part:: [[Consent Registry]], [[Permission Controller]], [[Audit Logger]], [[Policy Engine]], [[User Interface]]
  - is-part-of:: [[ETSI Domain: Data Management + Ethics]]
  - requires:: [[Identity Provider]], [[Data Governance Framework]], [[Privacy Policy]], [[User Authentication]]
  - enables:: [[GDPR Compliance]], [[Data Privacy]], [[User Control]], [[Transparency]], [[Right to be Forgotten]], [[Right to Be Forgotten]]

- ### Content
  Consent Management — content pending enrichment.

- ### Provenance
  - sources:: [[ENISA]], [[ISO 29184]]
  - migration-date:: 2026-04-26T00:00:00Z
