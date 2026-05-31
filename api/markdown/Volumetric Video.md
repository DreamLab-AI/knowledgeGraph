public:: true

# Volumetric Video
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c2ee6b501098a37c782c29e51fc78ea9b8715cb5632a1f356c2eeacbe2c54ca",
  "@type": "Page",
  "vc:slug": "volumetric-video",
  "title": "Volumetric Video",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:linked:volume-rendering",
      "vc:label": "Volume Rendering"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud",
      "vc:label": "Point Cloud"
    },
    {
      "@id": "urn:visionflow:linked:performance-capture",
      "vc:label": "Performance Capture"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Volumetric Video"
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
  "@id": "urn:ngm:class:volumetric-video",
  "@type": "Class",
  "label": "Volumetric Video",
  "definition": "Volumetric video captures a subject from many viewpoints to reconstruct a moving three-dimensional representation that can be viewed from any angle, rather than a fixed two-dimensional image sequence.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:volume-rendering",
        "label": "Volume Rendering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:volumetric-video:5e1a710c374f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c2ee6b501098a37c782c29e51fc78ea9b8715cb5632a1f356c2eeacbe2c54ca"
  },
  "vc:resolutions": [
    {
      "raw": "[[Photogrammetry]]",
      "resolved": "urn:visionflow:linked:photogrammetry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Volume Rendering]]",
      "resolved": "urn:visionflow:linked:volume-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Point Cloud]]",
      "resolved": "urn:visionflow:linked:point-cloud",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Performance Capture]]",
      "resolved": "urn:visionflow:linked:performance-capture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
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
  - Volumetric video captures a subject from many viewpoints to reconstruct a moving three-dimensional representation that can be viewed from any angle, rather than a fixed two-dimensional image sequence.

- ### Semantic Classification
  - owl-class:: metaverse:VolumetricVideo
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Point Cloud]], [[Performance Capture]]
  - requires:: [[Photogrammetry]]
  - enables:: [[Volume Rendering]]

- ### Content
  - Volumetric video uses arrays of cameras and depth sensors to reconstruct per-frame geometry and appearance, producing meshes or point clouds that play back as a free-viewpoint recording. Storage and bandwidth are demanding because each frame carries spatial data.
  - It supplies realistic captured humans and objects for XR and metaverse scenes, complementing performance capture of synthetic characters. The output feeds point cloud and volume rendering pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
