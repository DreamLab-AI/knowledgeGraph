public:: true

# Standardisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:standardisation", "@type":"Page", "title":"Standardisation", "vc:slug":"standardisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:standardisation",
  "@type": "Class",
  "label": "Standardisation",
  "definition": "Standardisation is the process by which industry participants, standards bodies and regulators develop and agree formal specifications, protocols and best practices for a technology or process, so that independently built implementations remain interoperable. It typically proceeds through a working group or industry consortium drafting a specification, a review and consensus period, and formal ratification by a recognised standards organisation such as IEEE, ISO or JEDEC. Standardisation reduces fragmentation, lowers integration cost and is a prerequisite for broad ecosystem adoption of a new technology.",
  "domain": "standards",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "produces": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Standardisation is the process by which industry participants, standards bodies and regulators develop and agree formal specifications, protocols and best practices for a technology or process, so that independently built implementations remain interoperable. It typically proceeds through a working group or industry consortium drafting a specification, a review and consensus period, and formal ratification by a recognised standards organisation such as IEEE, ISO or JEDEC. Standardisation reduces fragmentation, lowers integration cost and is a prerequisite for broad ecosystem adoption of a new technology.
