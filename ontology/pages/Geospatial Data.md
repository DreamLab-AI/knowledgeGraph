public:: true

# Geospatial Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:geospatial-data",
  "@type": "Page",
  "vc:slug": "geospatial-data",
  "title": "Geospatial Data",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:geospatial-data",
  "@type": "Class",
  "label": "Geospatial Data",
  "definition": "Geospatial data is information explicitly tied to a location on or near the Earth's surface, expressed through coordinates, geometries, or raster grids. It encompasses vector features (points, lines, polygons), satellite and aerial imagery, elevation models, point clouds, and attributes associated with places. Such data underpins mapping, navigation, remote sensing, logistics, urban planning, and spatial analysis across many domains.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:data-management",
    "label": "Data Management"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:point-cloud-generation",
        "label": "Point Cloud Generation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:geographic-information-system",
        "label": "Geographic Information System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:coordinate-reference-system",
        "label": "Coordinate Reference System"
      },
      {
        "@id": "urn:ngm:class:spatial-database",
        "label": "Spatial Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:logistics-optimization",
        "label": "Logistics Optimization"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:urban-planning",
        "label": "Urban Planning"
      },
      {
        "@id": "urn:ngm:class:remote-sensing",
        "label": "Remote Sensing"
      },
      {
        "@id": "urn:ngm:class:disaster-response",
        "label": "Disaster Response"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:global-positioning-system",
        "label": "Global Positioning System"
      },
      {
        "@id": "urn:ngm:class:satellite-imagery",
        "label": "Satellite Imagery"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:spatial-index",
        "label": "Spatial Index"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-geospatial-consortium",
        "label": "Open Geospatial Consortium"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO 19100 Series"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:supply-chain-visibility",
        "label": "Supply Chain Visibility"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:logistics-optimization",
        "label": "Logistics Optimization"
      },
      {
        "@id": "urn:ngm:class:point-cloud-generation",
        "label": "Point Cloud Generation"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:geographic-data",
      "label": "Geographic Data"
    },
    {
      "@id": "urn:ngm:class:spatial-data",
      "label": "Spatial Data"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Geospatial data binds attributes to locations through coordinates and geometries, and is a required input for [[Logistics Optimization]] and closely related to [[Point Cloud Generation]] for 3D spatial capture.
- ### Content
  - It is stored in vector formats (points, lines, polygons) and raster formats (imagery, elevation grids), referenced to coordinate systems and datums. Geographic information systems and spatial databases index it for queries such as nearest-neighbour, routing, and overlay analysis. Standards from the OGC and ISO ensure interoperability across mapping, remote sensing, and location services.
