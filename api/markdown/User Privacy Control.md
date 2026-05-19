public:: true

# User Privacy Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:29f4900c3793c803475f990c09d75403b17e56cde34a9ff690db05c97ea4ee24",
  "@type": "Page",
  "vc:slug": "user-privacy-control",
  "title": "User Privacy Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:privacy-mechanism",
      "vc:label": "Privacy Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-4017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "User Privacy Control"
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
  "@id": "urn:ngm:class:user-privacy-control",
  "@type": "Class",
  "label": "User Privacy Control",
  "definition": "A user privacy control component in the Artificial Intelligence domain that enables RightToBeForgotten.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    },
    {
      "@id": "urn:ngm:class:privacy-mechanism",
      "label": "Privacy Mechanism"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:user-privacy-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:29f4900c3793c803475f990c09d75403b17e56cde34a9ff690db05c97ea4ee24"
  },
  "vc:resolutions": [
    {
      "raw": "[[Privacy Mechanism]]",
      "resolved": "urn:visionflow:owl:class:privacy-mechanism",
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
  - A user privacy control component in the Artificial Intelligence domain that enables RightToBeForgotten.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:UserPrivacyControl
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Privacy Mechanism]]

- ### Content
  UserPrivacyControl — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
