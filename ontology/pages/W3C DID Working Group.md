public:: true

# W3C DID Working Group
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2290bd040b641f260b00315c2fbff332c1fa272cb23d10c590e4abd738a19b14",
  "@type": "Page",
  "vc:slug": "w-3-c-did-working-group",
  "title": "W3C DID Working Group",
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
      "vc:value": "W3C DID Working Group"
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
  "@id": "urn:ngm:class:w-3-c-did-working-group",
  "@type": "Class",
  "label": "W3C DID Working Group",
  "definition": "The W3C working group responsible for developing the Decentralized Identifiers (DIDs) specifications. It is a standards-development group rather than a single document.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-did-working-group:4c590ded1afb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2290bd040b641f260b00315c2fbff332c1fa272cb23d10c590e4abd738a19b14"
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
  - The W3C working group responsible for developing the Decentralized Identifiers (DIDs) specifications. It is a standards-development group rather than a single document.

- ### Semantic Classification
  - owl-class:: standards:W3CDIDWorkingGroup
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - The W3C working group responsible for developing the Decentralized Identifiers (DIDs) specifications. It is a standards-development group rather than a single document.
  - Topic area: decentralised identifiers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
