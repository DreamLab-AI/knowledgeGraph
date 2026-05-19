schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SparqlEndpoint
legacy_uri:: urn:visionclaw:concept:spatial-computing:sparql-endpoint
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-58462c017ab7"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SparqlEndpoint"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1005"
    },
    {
      "vc:key": "maturity",
      "vc:value": "emerging"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "SPARQL Endpoint"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:sparql-endpoint"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:sparql-endpoint"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:daafb2e1e94607dff95762b6f63e6c5cf498c36058f7ed2498a392e07af39956@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:daafb2e1e94607dff95762b6f63e6c5cf498c36058f7ed2498a392e07af39956@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
