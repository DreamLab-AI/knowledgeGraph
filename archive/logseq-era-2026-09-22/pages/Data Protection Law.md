public:: true

# Data Protection Law
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e974beb252bea38aa4e34ae7c8629d5db05e79c6974fed8b226cd5187278c715",
  "@type": "Page",
  "vc:slug": "data-protection-law",
  "title": "Data Protection Law",
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
      "@id": "urn:visionflow:linked:data-privacy",
      "vc:label": "Data Privacy"
    },
    {
      "@id": "urn:visionflow:linked:gdpr",
      "vc:label": "GDPR"
    },
    {
      "@id": "urn:visionflow:linked:ccpa",
      "vc:label": "CCPA"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Protection Law"
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
  "@id": "urn:ngm:class:data-protection-law",
  "@type": "Class",
  "label": "Data Protection Law",
  "definition": "The body of law governing how personal data may be collected, processed, stored and shared, and the rights afforded to individuals over their personal information.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-protection",
      "label": "Data Protection"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:ccpa",
        "label": "CCPA"
      },
      {
        "@id": "urn:ngm:class:data-subject-rights",
        "label": "Data Subject Rights"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:personal-data",
        "label": "Personal Data"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy by Design"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-breach-notification",
        "label": "Data Breach Notification"
      },
      {
        "@id": "urn:ngm:class:data-protection-impact-assessment",
        "label": "Data Protection Impact Assessment"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      },
      {
        "@id": "urn:ngm:class:digital-rights",
        "label": "Digital Rights"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-27701",
        "label": "ISO 27701"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:surveillance-capitalism",
        "label": "Surveillance Capitalism"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      },
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:right-to-be-forgotten",
        "label": "Right to be Forgotten"
      },
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-privacy-law",
      "label": "Data Privacy Law"
    },
    {
      "@id": "urn:ngm:class:privacy-law",
      "label": "Privacy Law"
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
  "@id": "urn:visionflow:annotation:link-resolutions:data-protection-law:bd5b0eb82a6f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e974beb252bea38aa4e34ae7c8629d5db05e79c6974fed8b226cd5187278c715"
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
      "raw": "[[Data Privacy]]",
      "resolved": "urn:visionflow:linked:data-privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GDPR]]",
      "resolved": "urn:visionflow:linked:gdpr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CCPA]]",
      "resolved": "urn:visionflow:linked:ccpa",
      "kind": "ResolvedLink"
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
  - The body of law governing how personal data may be collected, processed, stored and shared, and the rights afforded to individuals over their personal information.

- ### Semantic Classification
  - owl-class:: governance:DataProtectionLaw
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Protection]]
  - bridges-to:: [[GDPR]], [[CCPA]]
  - requires:: [[Data Protection]]
  - enables:: [[Privacy]], [[Data Privacy]]

- ### Content
  - Data protection law establishes obligations for organisations that handle personal data and confers rights on the individuals whose data is processed. Common principles include lawfulness, purpose limitation, data minimisation and accountability.
  - Regimes differ across jurisdictions in their definitions, enforcement mechanisms and territorial reach. Prominent examples include the European Union's General Data Protection Regulation and the California Consumer Privacy Act, which have influenced legislation elsewhere.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
