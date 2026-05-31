public:: true

# HIPAA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0c2f5a92fb51be7e4e6f92264fd0f8de31b8cf9928a9c450bfb4b7973426a56e",
  "@type": "Page",
  "vc:slug": "hipaa",
  "title": "HIPAA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-protection",
      "vc:label": "Data Protection"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
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
      "@id": "urn:visionflow:linked:data-protection-law",
      "vc:label": "Data Protection Law"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HIPAA"
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
  "@id": "urn:ngm:class:hipaa",
  "@type": "Class",
  "label": "HIPAA",
  "definition": "The Health Insurance Portability and Accountability Act, a United States law that sets requirements for protecting the privacy and security of certain health information.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-protection-law",
      "label": "Data Protection Law"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:information-security",
        "label": "Information Security"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hipaa:c818cdccc0a0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0c2f5a92fb51be7e4e6f92264fd0f8de31b8cf9928a9c450bfb4b7973426a56e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Protection]]",
      "resolved": "urn:visionflow:linked:data-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
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
      "raw": "[[Data Protection Law]]",
      "resolved": "urn:visionflow:linked:data-protection-law",
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
  - The Health Insurance Portability and Accountability Act, a United States law that sets requirements for protecting the privacy and security of certain health information.

- ### Semantic Classification
  - owl-class:: governance:HIPAA
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Data Protection Law]]
  - bridges-to:: [[Data Privacy]]
  - requires:: [[Data Protection]], [[Information Security]]
  - enables:: [[Privacy]]

- ### Content
  - The Health Insurance Portability and Accountability Act establishes national standards in the United States for safeguarding protected health information held by covered entities and their business associates. Its Privacy Rule and Security Rule set out permitted uses and required safeguards.
  - The law restricts disclosure of identifiable health data without authorisation and requires administrative, physical and technical controls. Enforcement is carried out by federal authorities, with penalties for non-compliance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
