public:: true

# CCPA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5099af523b636190128371504bc8e613203287553c2e51a39786e2d71443f990",
  "@type": "Page",
  "vc:slug": "ccpa",
  "title": "CCPA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-protection",
      "vc:label": "Data Protection"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:consumer-protection",
      "vc:label": "Consumer Protection"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:data-privacy",
      "vc:label": "Data Privacy"
    },
    {
      "@id": "urn:visionflow:linked:data-protection-law",
      "vc:label": "Data Protection Law"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CCPA"
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
  "@id": "urn:ngm:class:ccpa",
  "@type": "Class",
  "label": "CCPA",
  "definition": "The California Consumer Privacy Act (CCPA), a California state statute enacted in 2018 that grants California residents rights over the personal information that businesses collect about them, including the right to know, the right to delete, the right to opt out of sale, and the right to non-discrimination.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:data-protection-law",
    "label": "Data Protection Law"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:right-to-know",
        "label": "Right to Know"
      },
      {
        "@id": "urn:ngm:class:right-to-delete",
        "label": "Right to Delete"
      },
      {
        "@id": "urn:ngm:class:opt-out-right",
        "label": "Opt-Out Right"
      },
      {
        "@id": "urn:ngm:class:privacy-notice",
        "label": "Privacy Notice"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:us-privacy-law",
        "label": "US Privacy Law"
      },
      {
        "@id": "urn:ngm:class:california-law",
        "label": "California Law"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:data-inventory",
        "label": "Data Inventory"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:privacy-impact-assessment",
        "label": "Privacy Impact Assessment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:consumer-protection",
        "label": "Consumer Protection"
      },
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-protection-law",
        "label": "Data Protection Law"
      },
      {
        "@id": "urn:ngm:class:privacy-regulation",
        "label": "Privacy Regulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:personal-information",
        "label": "Personal Information"
      },
      {
        "@id": "urn:ngm:class:data-broker",
        "label": "Data Broker"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy by Design"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:california-attorney-general",
        "label": "California Attorney General"
      },
      {
        "@id": "urn:ngm:class:california-privacy-protection-agency",
        "label": "California Privacy Protection Agency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:hipaa",
        "label": "HIPAA"
      },
      {
        "@id": "urn:ngm:class:coppa",
        "label": "COPPA"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:ai-regulation",
        "label": "AI Regulation"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cpra",
        "label": "CPRA"
      },
      {
        "@id": "urn:ngm:class:data-breach-notification",
        "label": "Data Breach Notification"
      },
      {
        "@id": "urn:ngm:class:privacy-policy",
        "label": "Privacy Policy"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:california-consumer-privacy-act",
      "label": "California Consumer Privacy Act"
    },
    {
      "@id": "urn:ngm:class:ab-375",
      "label": "AB 375"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ccpa:0c89db9e0a96",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5099af523b636190128371504bc8e613203287553c2e51a39786e2d71443f990"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:linked:data-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consumer Protection]]",
      "resolved": "urn:visionflow:linked:consumer-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Privacy]]",
      "resolved": "urn:visionflow:linked:data-privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Protection Law]]",
      "resolved": "urn:visionflow:linked:data-protection-law",
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
  - The California Consumer Privacy Act, a state statute that grants California residents rights over the personal information that businesses collect about them.

- ### Semantic Classification
  - owl-class:: governance:CCPA
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Protection Law]]
  - bridges-to:: [[GDPR]], [[Data Privacy]]
  - requires:: [[Data Protection]]
  - enables:: [[Privacy]], [[Consumer Protection]]

- ### Content
  - The California Consumer Privacy Act provides California residents with rights including the ability to know what personal information is collected, to request its deletion and to opt out of its sale. It applies to qualifying businesses that handle the data of California residents.
  - The statute is frequently compared with the European Union's General Data Protection Regulation, with which it shares broad aims while differing in scope and mechanism. Subsequent amendments have expanded and refined the rights it confers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
