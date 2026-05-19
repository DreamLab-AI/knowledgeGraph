public:: true

# Right to Be Forgotten
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0d82d3558cc494a2d1259a20b4fd6c8d4bfd2d9ce6ae2599e99a6f958af2b3f8",
  "@type": "Page",
  "vc:slug": "right-to-be-forgotten",
  "title": "Right to Be Forgotten",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ccpa",
      "vc:label": "CCPA"
    },
    {
      "@id": "urn:visionflow:linked:compliance-reporting",
      "vc:label": "Compliance Reporting"
    },
    {
      "@id": "urn:visionflow:linked:content-removal",
      "vc:label": "Content Removal"
    },
    {
      "@id": "urn:visionflow:linked:data-controller",
      "vc:label": "Data Controller"
    },
    {
      "@id": "urn:visionflow:linked:data-erasure",
      "vc:label": "Data Erasure"
    },
    {
      "@id": "urn:visionflow:linked:data-inventory",
      "vc:label": "Data Inventory"
    },
    {
      "@id": "urn:visionflow:linked:data-processor",
      "vc:label": "Data Processor"
    },
    {
      "@id": "urn:visionflow:linked:data-protection-framework",
      "vc:label": "Data Protection Framework"
    },
    {
      "@id": "urn:visionflow:linked:deletion-request",
      "vc:label": "Deletion Request"
    },
    {
      "@id": "urn:visionflow:linked:erasure-verification",
      "vc:label": "Erasure Verification"
    },
    {
      "@id": "urn:visionflow:linked:gdpr-article-17",
      "vc:label": "GDPR Article 17"
    },
    {
      "@id": "urn:visionflow:linked:privacy-policy",
      "vc:label": "Privacy Policy"
    },
    {
      "@id": "urn:visionflow:linked:privacy-rights-system",
      "vc:label": "Privacy Rights System"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:owl:class:consent-management",
      "vc:label": "Consent Management"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:user-privacy-control",
      "vc:label": "User Privacy Control"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20295"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Right to Be Forgotten"
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
  "@id": "urn:ngm:class:right-to-be-forgotten",
  "@type": "Class",
  "label": "Right to Be Forgotten",
  "definition": "A privacy right framework enabling individuals to request deletion or removal of personal data from online platforms and databases, with verification and audit mechanisms.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    },
    {
      "@id": "urn:ngm:class:privacy-framework",
      "label": "Privacy Framework"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:deletion-request",
        "label": "Deletion Request"
      },
      {
        "@id": "urn:ngm:class:erasure-verification",
        "label": "Erasure Verification"
      },
      {
        "@id": "urn:ngm:class:privacy-policy",
        "label": "Privacy Policy"
      },
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-inventory",
        "label": "Data Inventory"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance-reporting",
        "label": "Compliance Reporting"
      },
      {
        "@id": "urn:ngm:class:content-removal",
        "label": "Content Removal"
      },
      {
        "@id": "urn:ngm:class:data-erasure",
        "label": "Data Erasure"
      },
      {
        "@id": "urn:ngm:class:user-privacy-control",
        "label": "User Privacy Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-protection-framework",
        "label": "Data Protection Framework"
      },
      {
        "@id": "urn:ngm:class:privacy-rights-system",
        "label": "Privacy Rights System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:right-to-be-forgotten:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0d82d3558cc494a2d1259a20b4fd6c8d4bfd2d9ce6ae2599e99a6f958af2b3f8"
  },
  "vc:resolutions": [
    {
      "raw": "[[CCPA]]",
      "resolved": "urn:visionflow:linked:ccpa",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compliance Reporting]]",
      "resolved": "urn:visionflow:linked:compliance-reporting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Removal]]",
      "resolved": "urn:visionflow:linked:content-removal",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Controller]]",
      "resolved": "urn:visionflow:linked:data-controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Erasure]]",
      "resolved": "urn:visionflow:linked:data-erasure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Inventory]]",
      "resolved": "urn:visionflow:linked:data-inventory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Processor]]",
      "resolved": "urn:visionflow:linked:data-processor",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Protection Framework]]",
      "resolved": "urn:visionflow:linked:data-protection-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deletion Request]]",
      "resolved": "urn:visionflow:linked:deletion-request",
      "kind": "StubLink"
    },
    {
      "raw": "[[Erasure Verification]]",
      "resolved": "urn:visionflow:linked:erasure-verification",
      "kind": "StubLink"
    },
    {
      "raw": "[[GDPR Article 17]]",
      "resolved": "urn:visionflow:linked:gdpr-article-17",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Policy]]",
      "resolved": "urn:visionflow:linked:privacy-policy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Rights System]]",
      "resolved": "urn:visionflow:linked:privacy-rights-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:owl:class:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consent Management]]",
      "resolved": "urn:visionflow:owl:class:consent-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:owl:class:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:owl:class:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Privacy Control]]",
      "resolved": "urn:visionflow:owl:class:user-privacy-control",
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
  - A privacy right framework enabling individuals to request deletion or removal of personal data from online platforms and databases, with verification and audit mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:RightToBeForgotten
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Deletion Request]], [[Erasure Verification]], [[Audit Trail]], [[Privacy Policy]]
  - is-part-of:: [[Data Protection Framework]], [[Privacy Rights System]]
  - requires:: [[Identity Verification]], [[Data Inventory]], [[Consent Management]]
  - enables:: [[Data Erasure]], [[Content Removal]], [[User Privacy Control]], [[Compliance Reporting]]
  - depends-on:: [[Data Controller]], [[Data Processor]], [[Regulatory Compliance]]

- ### Content
  Right to Be Forgotten — content pending enrichment.

- ### Provenance
  - sources:: [[GDPR Article 17]], [[CCPA]]
  - migration-date:: 2026-04-26T00:00:00Z
