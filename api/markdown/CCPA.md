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
  "definition": "The California Consumer Privacy Act, a state statute that grants California residents rights over the personal information that businesses collect about them.",
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
