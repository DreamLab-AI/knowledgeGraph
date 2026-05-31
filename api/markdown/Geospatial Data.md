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
  "definition": "Geospatial data is information that is explicitly tied to a location on or near the Earth's surface, expressed through coordinates, geometries, or raster grids. It encompasses vector features, satellite and aerial imagery, point clouds, and attributes associated with places. Such data powers mapping, navigation, logistics, and spatial analysis across many domains.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:logistics-optimization", "label": "Logistics Optimization"}, {"@id": "urn:ngm:class:point-cloud-generation", "label": "Point Cloud Generation"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Geospatial data binds attributes to locations through coordinates and geometries, and is a required input for [[Logistics Optimization]] and closely related to [[Point Cloud Generation]] for 3D spatial capture.
- ### Content
  - It is stored in vector formats (points, lines, polygons) and raster formats (imagery, elevation grids), referenced to coordinate systems and datums. Geographic information systems and spatial databases index it for queries such as nearest-neighbour, routing, and overlay analysis. Standards from the OGC and ISO ensure interoperability across mapping, remote sensing, and location services.
