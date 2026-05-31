public:: true

# W3C Verifiable Credentials Data Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7155afbccc4bdff2272b5c41ddc183cef29a6264b72f77f8bb6bd66f024d84d1",
  "@type": "Page",
  "vc:slug": "w-3-c-verifiable-credentials-data-model",
  "title": "W3C Verifiable Credentials Data Model",
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
      "vc:value": "W3C Verifiable Credentials Data Model"
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
  "@id": "urn:ngm:class:w-3-c-verifiable-credentials-data-model",
  "@type": "Class",
  "label": "W3C Verifiable Credentials Data Model",
  "definition": "The W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged on the Web between issuers, holders and verifiers.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-verifiable-credentials-data-model:175f7d8680d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7155afbccc4bdff2272b5c41ddc183cef29a6264b72f77f8bb6bd66f024d84d1"
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
  - The W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged on the Web between issuers, holders and verifiers.

- ### Semantic Classification
  - owl-class:: standards:W3CVerifiableCredentialsDataModel
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - The W3C Verifiable Credentials Data Model specifies a data model for cryptographically verifiable claims exchanged on the Web between issuers, holders and verifiers.
  - Topic area: verifiable credentials.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
