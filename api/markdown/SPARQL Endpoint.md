public:: true

# SPARQL Endpoint
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:daafb2e1e94607dff95762b6f63e6c5cf498c36058f7ed2498a392e07af39956",
  "@type": "Page",
  "vc:slug": "sparql-endpoint",
  "title": "SPARQL Endpoint",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:data-access-interface",
      "vc:label": "Data Access Interface"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "SPARQL Endpoint"
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
  "@id": "urn:ngm:class:sparql-endpoint",
  "@type": "Class",
  "label": "SPARQL Endpoint",
  "definition": "A sparql endpoint component in the Metaverse domain that required by ProvenanceOntologyProvO.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    },
    {
      "@id": "urn:ngm:class:data-access-interface",
      "label": "Data Access Interface"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sparql-endpoint:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:daafb2e1e94607dff95762b6f63e6c5cf498c36058f7ed2498a392e07af39956"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Access Interface]]",
      "resolved": "urn:visionflow:owl:class:data-access-interface",
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
  - A sparql endpoint component in the Metaverse domain that required by ProvenanceOntologyProvO.

- ### Semantic Classification
  - owl-class:: spatial-computing:SparqlEndpoint
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Data Access Interface]]

- ### Content
  SparqlEndpoint — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
