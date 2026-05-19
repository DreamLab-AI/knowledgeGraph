schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ProximitySearch
legacy_uri:: urn:visionclaw:concept:spatial-computing:proximity-search
public:: true

# Proximity Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8",
  "@type": "Page",
  "vc:slug": "proximity-search",
  "title": "Proximity Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nearby-discovery",
      "vc:label": "Nearby Discovery"
    },
    {
      "@id": "urn:visionflow:owl:class:geospatial-technology",
      "vc:label": "Geospatial Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-82974760096e"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ProximitySearch"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10014"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proximity Search"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:proximity-search"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:proximity-search"
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
    "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:proximity-search",
  "@type": "OntologyClass",
  "label": "Proximity Search",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:geospatial-technology",
      "vc:label": "Geospatial Technology"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Geospatial query algorithms that locate nearby points of interest within a specified radius using coordinate-based indexing methods such as geohashing and quadtree structures for efficient location-based service applications.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:nearby-discovery",
      "vc:label": "Nearby Discovery"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:proximity-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Nearby Discovery]]",
      "resolved": "urn:visionflow:linked:nearby-discovery",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geospatial Technology]]",
      "resolved": "urn:visionflow:owl:class:geospatial-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d3228437c2ecf783c5d95fe345ec60373fc61ecfe1254b64edc74e27db3d13a8@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Geospatial query algorithms that locate nearby points of interest within a specified radius using coordinate-based indexing methods such as geohashing and quadtree structures for efficient location-based service applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:ProximitySearch
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Geospatial Technology]]
  - enables:: [[Nearby Discovery]]

- ### Content

  - #### Algorithms
		- Geohashing for prefix-based lookup
		- Quadtree recursive spatial partitioning
		- R-tree for bounding box queries
		- Grid-based spatial indexing
		- K-nearest neighbor search
  - #### Market Context
		- LBS market $65.79B in 2023
		- Projected growth to $462.65B by 2032
		- CAGR of 24.2% forecast
		- Powers Google Maps, Uber, Tinder
		- Indoor positioning systems expanding

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
