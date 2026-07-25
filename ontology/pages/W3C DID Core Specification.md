public:: true

# W3C DID Core Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1f80b7172a9e3dc6bebbfab6c45f3c755ea3be2de50afb1f335d78af93c8dc4c",
  "@type": "Page",
  "vc:slug": "w-3-c-did-core-specification",
  "title": "W3C DID Core Specification",
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
      "vc:value": "W3C DID Core Specification"
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
  "@id": "urn:ngm:class:w-3-c-did-core-specification",
  "@type": "Class",
  "label": "W3C DID Core Specification",
  "definition": "A W3C specification defining decentralised identifiers (DIDs), a type of identifier that enables verifiable, self-sovereign digital identity independent of any centralised registry. It defines the DID data model and syntax.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-did-core-specification:8f4335da7556",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1f80b7172a9e3dc6bebbfab6c45f3c755ea3be2de50afb1f335d78af93c8dc4c"
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
  - A W3C specification defining decentralised identifiers (DIDs), a type of identifier that enables verifiable, self-sovereign digital identity independent of any centralised registry. It defines the DID data model and syntax.

- ### Semantic Classification
  - owl-class:: standards:W3CDIDCoreSpecification
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - A W3C specification defining decentralised identifiers (DIDs), a type of identifier that enables verifiable, self-sovereign digital identity independent of any centralised registry. It defines the DID data model and syntax.
  - Topic area: decentralised identifiers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
