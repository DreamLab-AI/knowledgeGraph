public:: true

# W3C RDF 1.1
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e20f9dc5350a178c90e23af11430322d9a6f63058aec2afce2e953fa18941a3",
  "@type": "Page",
  "vc:slug": "w-3-c-rdf-1-1",
  "title": "W3C RDF 1.1",
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
      "vc:value": "W3C RDF 1.1"
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
  "@id": "urn:ngm:class:w-3-c-rdf-1-1",
  "@type": "Class",
  "label": "W3C RDF 1.1",
  "definition": "W3C RDF 1.1 is the Resource Description Framework, a data model for representing information about resources as subject-predicate-object triples on the Web.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:w-3-c-rdf-1-1:f87870bcae4a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e20f9dc5350a178c90e23af11430322d9a6f63058aec2afce2e953fa18941a3"
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
  - W3C RDF 1.1 is the Resource Description Framework, a data model for representing information about resources as subject-predicate-object triples on the Web.

- ### Semantic Classification
  - owl-class:: standards:W3CRDF11
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[W3C]]

- ### Content
  - W3C RDF 1.1 is the Resource Description Framework, a data model for representing information about resources as subject-predicate-object triples on the Web.
  - Topic area: resource description framework.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
