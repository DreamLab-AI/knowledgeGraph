public:: true

# Cultural Heritage XR Experience
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83fef7f5400eafa6447c5738cc7e70f2b32dcedb742db08d0df4c6c13eaf192e",
  "@type": "Page",
  "vc:slug": "cultural-heritage-xr-experience",
  "title": "Cultural Heritage XR Experience",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cultural-database",
      "vc:label": "Cultural Database"
    },
    {
      "@id": "urn:visionflow:linked:cultural-education",
      "vc:label": "Cultural Education"
    },
    {
      "@id": "urn:visionflow:linked:cultural-heritage-preservation-system",
      "vc:label": "Cultural Heritage Preservation System"
    },
    {
      "@id": "urn:visionflow:linked:cultural-metadata",
      "vc:label": "Cultural Metadata"
    },
    {
      "@id": "urn:visionflow:linked:heritage-documentation",
      "vc:label": "Heritage Documentation"
    },
    {
      "@id": "urn:visionflow:linked:heritage-tourism",
      "vc:label": "Heritage Tourism"
    },
    {
      "@id": "urn:visionflow:linked:icom-museum-definition",
      "vc:label": "ICOM Museum Definition"
    },
    {
      "@id": "urn:visionflow:linked:interactive-exhibit",
      "vc:label": "Interactive Exhibit"
    },
    {
      "@id": "urn:visionflow:linked:li-dar-scanning",
      "vc:label": "LiDAR Scanning"
    },
    {
      "@id": "urn:visionflow:linked:museum-api",
      "vc:label": "Museum API"
    },
    {
      "@id": "urn:visionflow:linked:unesco-world-heritage-convention",
      "vc:label": "UNESCO World Heritage Convention"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-reconstruction",
      "vc:label": "3D Reconstruction"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-rendering-engine",
      "vc:label": "3D Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:ar-overlay",
      "vc:label": "AR Overlay"
    },
    {
      "@id": "urn:visionflow:owl:class:archaeological-site-reconstruction",
      "vc:label": "Archaeological Site Reconstruction"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:educational-narrative",
      "vc:label": "Educational Narrative"
    },
    {
      "@id": "urn:visionflow:owl:class:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-audio-system",
      "vc:label": "Spatial Audio System"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-museum-tour",
      "vc:label": "Virtual Museum Tour"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-runtime-environment",
      "vc:label": "XR Runtime Environment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20300"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cultural Heritage XR Experience"
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
  "@id": "urn:ngm:class:cultural-heritage-xr-experience",
  "@type": "Class",
  "label": "Cultural Heritage XR Experience",
  "definition": "An immersive extended reality application designed to preserve, present, and educate users about cultural heritage through interactive 3D reconstructions, AR overlays, and virtual museum experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cultural-metadata",
        "label": "Cultural Metadata"
      },
      {
        "@id": "urn:ngm:class:interactive-exhibit",
        "label": "Interactive Exhibit"
      },
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      },
      {
        "@id": "urn:ngm:class:ar-overlay",
        "label": "AR Overlay"
      },
      {
        "@id": "urn:ngm:class:educational-narrative",
        "label": "Educational Narrative"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cultural-database",
        "label": "Cultural Database"
      },
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:spatial-audio-system",
        "label": "Spatial Audio System"
      },
      {
        "@id": "urn:ngm:class:xr-runtime-environment",
        "label": "XR Runtime Environment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cultural-education",
        "label": "Cultural Education"
      },
      {
        "@id": "urn:ngm:class:heritage-tourism",
        "label": "Heritage Tourism"
      },
      {
        "@id": "urn:ngm:class:archaeological-site-reconstruction",
        "label": "Archaeological Site Reconstruction"
      },
      {
        "@id": "urn:ngm:class:virtual-museum-tour",
        "label": "Virtual Museum Tour"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cultural-heritage-preservation-system",
        "label": "Cultural Heritage Preservation System"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:cultural-heritage-xr-experience:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:83fef7f5400eafa6447c5738cc7e70f2b32dcedb742db08d0df4c6c13eaf192e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cultural Database]]",
      "resolved": "urn:visionflow:linked:cultural-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Education]]",
      "resolved": "urn:visionflow:linked:cultural-education",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Heritage Preservation System]]",
      "resolved": "urn:visionflow:linked:cultural-heritage-preservation-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cultural Metadata]]",
      "resolved": "urn:visionflow:linked:cultural-metadata",
      "kind": "StubLink"
    },
    {
      "raw": "[[Heritage Documentation]]",
      "resolved": "urn:visionflow:linked:heritage-documentation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Heritage Tourism]]",
      "resolved": "urn:visionflow:linked:heritage-tourism",
      "kind": "StubLink"
    },
    {
      "raw": "[[ICOM Museum Definition]]",
      "resolved": "urn:visionflow:linked:icom-museum-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interactive Exhibit]]",
      "resolved": "urn:visionflow:linked:interactive-exhibit",
      "kind": "StubLink"
    },
    {
      "raw": "[[LiDAR Scanning]]",
      "resolved": "urn:visionflow:linked:li-dar-scanning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Museum API]]",
      "resolved": "urn:visionflow:linked:museum-api",
      "kind": "StubLink"
    },
    {
      "raw": "[[UNESCO World Heritage Convention]]",
      "resolved": "urn:visionflow:linked:unesco-world-heritage-convention",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Reconstruction]]",
      "resolved": "urn:visionflow:owl:class:3-d-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Rendering Engine]]",
      "resolved": "urn:visionflow:owl:class:3-d-rendering-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AR Overlay]]",
      "resolved": "urn:visionflow:owl:class:ar-overlay",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Archaeological Site Reconstruction]]",
      "resolved": "urn:visionflow:owl:class:archaeological-site-reconstruction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Educational Narrative]]",
      "resolved": "urn:visionflow:owl:class:educational-narrative",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Photogrammetry]]",
      "resolved": "urn:visionflow:owl:class:photogrammetry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Audio System]]",
      "resolved": "urn:visionflow:owl:class:spatial-audio-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Museum Tour]]",
      "resolved": "urn:visionflow:owl:class:virtual-museum-tour",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Runtime Environment]]",
      "resolved": "urn:visionflow:owl:class:xr-runtime-environment",
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
  - An immersive extended reality application designed to preserve, present, and educate users about cultural heritage through interactive 3D reconstructions, AR overlays, and virtual museum experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:CulturalHeritageXRExperience
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - bridges-to:: [[Computer Vision]]
  - has-part:: [[3D Reconstruction]], [[AR Overlay]], [[Educational Narrative]], [[Interactive Exhibit]], [[Cultural Metadata]]
  - is-part-of:: [[Cultural Heritage Preservation System]]
  - requires:: [[XR Runtime Environment]], [[3D Rendering Engine]], [[Spatial Audio System]], [[Cultural Database]]
  - enables:: [[Virtual Museum Tour]], [[Archaeological Site Reconstruction]], [[Cultural Education]], [[Heritage Tourism]]
  - depends-on:: [[Photogrammetry]], [[LiDAR Scanning]], [[Heritage Documentation]], [[Museum API]]

- ### Content
  Cultural Heritage XR Experience — content pending enrichment.

- ### Provenance
  - sources:: [[UNESCO World Heritage Convention]], [[ICOM Museum Definition]]
  - migration-date:: 2026-04-26T00:00:00Z
