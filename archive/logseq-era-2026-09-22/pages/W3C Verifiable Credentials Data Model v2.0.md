public:: true

# W3C Verifiable Credentials Data Model v2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:48d4c81a7ed89b4920e48c61ab64e6651a970ea84c4e1ffb7f36ac706c75b15d",
  "@type": "Page",
  "vc:slug": "w-3-c-verifiable-credentials-data-model-v-2-0",
  "title": "W3C Verifiable Credentials Data Model v2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:w-3-c",
      "vc:label": "W3C"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "W3C Verifiable Credentials Data Model v2.0"
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
  "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model-v-2-0",
  "@type": "Class",
  "label": "W3C Verifiable Credentials Data Model v2.0",
  "definition": "Version 2.0 of the W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged between issuers, holders and verifiers.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:w3-c",
        "label": "W3C"
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-verifiable-credentials-data-model-v-2-0:8e0f7dff9600",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:48d4c81a7ed89b4920e48c61ab64e6651a970ea84c4e1ffb7f36ac706c75b15d"
  },
  "vc:resolutions": [
    {
      "raw": "[[W3C]]",
      "resolved": "urn:visionflow:linked:w-3-c",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - Version 2.0 of the W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged between issuers, holders and verifiers.

- ### Semantic Classification
  - owl-class:: standards:W3CVerifiableCredentialsDataModelv20
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - Version 2.0 of the W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged between issuers, holders and verifiers.
  - Topic area: verifiable credentials.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
