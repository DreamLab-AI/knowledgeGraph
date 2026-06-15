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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10014"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proximity Search"
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
  "@id": "urn:ngm:class:proximity-search",
  "@type": "Class",
  "label": "Proximity Search",
  "definition": "Geospatial query algorithms that locate nearby points of interest within a specified radius using coordinate-based indexing mods such as geohashing and quadtree structures for efficient location-based service applications.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:geospatial-technology",
      "label": "Geospatial Technology"
    }
  ],
  "relations": {},
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
