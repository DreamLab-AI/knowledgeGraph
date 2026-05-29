public:: true

# Point Cloud
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b674bd3e1e7db21a544bbac0d9733128182df9a9f4e78805dd1413eb4f419c69",
  "@type": "Page",
  "vc:slug": "point-cloud",
  "title": "Point Cloud",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9189"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Point Cloud"
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
  "@id": "urn:ngm:class:point-cloud",
  "@type": "Class",
  "label": "Point Cloud",
  "definition": "A Point Cloud is a set of data points in three-dimensional space, each defined by X, Y, Z coordinates and optionally colour or intensity values, produced by LiDAR scanners, depth cameras, or photogrammetry pipelines. Point clouds serve as the raw geometric representation of real-world objects and environments before downstream processing into meshes, 3D models, or spatial maps. They are fundamental to SLAM, 3D reconstruction, and digital twin workflows in spatial computing.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:3-d-reconstruction", "label": "3D Reconstruction"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:photogrammetry", "label": "Photogrammetry"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:point-cloud:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b674bd3e1e7db21a544bbac0d9733128182df9a9f4e78805dd1413eb4f419c69"
  },
  "vc:resolutions": [],
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
  - A Point Cloud is a set of data points in three-dimensional space, each defined by X, Y, Z coordinates and optionally colour or intensity values, produced by LiDAR scanners, depth cameras, or photogrammetry pipelines. Point clouds serve as the raw geometric representation of real-world objects and environments before downstream processing into meshes, 3D models, or spatial maps. They are fundamental to SLAM, 3D reconstruction, and digital twin workflows in spatial computing.

- ### Semantic Classification
  - owl-class:: spatial-computing:PointCloud
  - owl-role:: Concept

- ### Relationships
  - requires [[Depth Sensing]]
  - enables [[3D Reconstruction]]
  - enables [[Spatial Mapping]]
  - relatedTo [[Photogrammetry]]
  - relatedTo [[SLAM]]
  - relatedTo [[Sensor Fusion]]

- ### Content
  # PointCloud
  A Point Cloud is a discrete set of 3D coordinate samples representing the surface geometry of an object or scene. LiDAR scanners emit laser pulses and measure return times to generate dense, high-accuracy point sets; RGB-D cameras combine colour and depth to produce coloured clouds; photogrammetry derives point clouds from overlapping photographs via structure-from-motion algorithms. Point cloud data feeds spatial-mapping and SLAM pipelines that track device position in real time. Downstream processing — including voxelisation, surface reconstruction, and mesh generation — converts raw clouds into 3D models usable in spatial computing environments. Sensor fusion combines point clouds from multiple modalities to improve coverage and accuracy. The LAS and E57 formats are common interchange standards; the Open3D library and PCL (Point Cloud Library) are widely used processing toolkits.

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
