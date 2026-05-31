public:: true

# W3C SPARQL 1.1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:140e07e980662789d3acdb287b285182099e5d7766d12fd4bcedb9168f3fd31e",
  "@type": "Page",
  "vc:slug": "w-3-c-sparql-1-1",
  "title": "W3C SPARQL 1.1",
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
      "vc:value": "W3C SPARQL 1.1"
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
  "@id": "urn:ngm:class:w-3-c-sparql-1-1",
  "@type": "Class",
  "label": "W3C SPARQL 1.1",
  "definition": "A W3C Recommendation defining SPARQL 1.1, the query language and protocol for retrieving and manipulating data stored in RDF format. It includes query, update and federation features.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-sparql-1-1:f6965ac705ad",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:140e07e980662789d3acdb287b285182099e5d7766d12fd4bcedb9168f3fd31e"
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
  - A W3C Recommendation defining SPARQL 1.1, the query language and protocol for retrieving and manipulating data stored in RDF format. It includes query, update and federation features.

- ### Semantic Classification
  - owl-class:: standards:W3CSPARQL11
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - A W3C Recommendation defining SPARQL 1.1, the query language and protocol for retrieving and manipulating data stored in RDF format. It includes query, update and federation features.
  - Topic area: RDF query language.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
