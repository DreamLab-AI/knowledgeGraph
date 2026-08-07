public:: true

# Archaeological Site Reconstruction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1520231202e0c3f48d783ec863d8d0dc04ad8683b0bde895f29677ca9c79a280",
  "@type": "Page",
  "vc:slug": "archaeological-site-reconstruction",
  "title": "Archaeological Site Reconstruction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:educational-experiences",
      "vc:label": "Educational Experiences"
    },
    {
      "@id": "urn:visionflow:linked:heritage-preservation",
      "vc:label": "Heritage Preservation"
    },
    {
      "@id": "urn:visionflow:linked:historical-research",
      "vc:label": "Historical Research"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-modeling",
      "vc:label": "3D Modeling"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-heritage",
      "vc:label": "Digital Heritage"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-tourism",
      "vc:label": "Virtual Tourism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9776"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Archaeological Site Reconstruction"
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
  "@id": "urn:ngm:class:archaeological-site-reconstruction",
  "@type": "Class",
  "label": "Archaeological Site Reconstruction",
  "definition": "Archaeological Site Reconstruction refers to the use of 3D modeling, photogrammetry, LiDAR, and virtual reality technologies to create accurate digital representations of ancient sites, enabling study, documentation, preservation, and immersive public access to cultural heritage through realistic...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:digital-heritage",
      "label": "Digital Heritage"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:historical-research",
        "label": "Historical Research"
      },
      {
        "@id": "urn:ngm:class:3d-modelling",
        "label": "3D Modeling"
      },
      {
        "@id": "urn:ngm:class:photogrammetry",
        "label": "Photogrammetry"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cultural-heritage-preservation",
        "label": "Heritage Preservation"
      },
      {
        "@id": "urn:ngm:class:virtual-tourism",
        "label": "Virtual Tourism"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:archaeological-site-reconstruction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1520231202e0c3f48d783ec863d8d0dc04ad8683b0bde895f29677ca9c79a280"
  },
  "vc:resolutions": [
    {
      "raw": "[[Educational Experiences]]",
      "resolved": "urn:visionflow:linked:educational-experiences",
      "kind": "StubLink"
    },
    {
      "raw": "[[Heritage Preservation]]",
      "resolved": "urn:visionflow:linked:heritage-preservation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Historical Research]]",
      "resolved": "urn:visionflow:linked:historical-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Modelling]]",
      "resolved": "urn:visionflow:owl:class:3-d-modeling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Heritage]]",
      "resolved": "urn:visionflow:owl:class:digital-heritage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Photogrammetry]]",
      "resolved": "urn:visionflow:owl:class:photogrammetry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Tourism]]",
      "resolved": "urn:visionflow:owl:class:virtual-tourism",
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
  - Archaeological Site Reconstruction refers to the use of 3D modeling, photogrammetry, LiDAR, and virtual reality technologies to create accurate digital representations of ancient sites, enabling study, documentation, preservation, and immersive public access to cultural heritage through realistic simulations of historical environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ArchaeologicalSiteReconstruction
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Digital Heritage]]
  - requires:: [[Photogrammetry]], [[3D Modelling]], [[Historical Research]]
  - enables:: [[Heritage Preservation]], [[Virtual Tourism]], [[Educational Experiences]]
  - bridges-to:: [[Computer Vision]] (ai)

- ### Content

  ### Technical Details
  Key technologies include:
  - **Photogrammetry**: Reality-based 3D modeling from 2D images, primary technique for cultural heritage documentation
  - **LiDAR and Laser Scanning**: High-precision 3D data capture for complex site geometries
  - **Drone Mapping**: Aerial photogrammetry for large-scale site documentation
  - **3D Modeling Software**: Tools for reconstructing original appearances from incomplete remains

  ### Applications
  - **Documentation and Cataloguing**: Permanent digital records of archaeological finds
  - **Preservation**: Capturing current state for future reference, especially for conflict-threatened heritage
  - **Virtual Tours**: Remote exploration increasing public access to historical sites
  - **AR/VR Experiences**: Immersive reconstructions showing monuments in their original state

  ### Virtual Archaeology
  Defined as computer techniques enabling 3D visualization and realistic representation of ancient buildings and objects whose remains have disappeared or are in poor conservation state, making interpretation possible where physical examination is difficult.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
