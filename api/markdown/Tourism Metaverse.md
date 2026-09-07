```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:71fb4203a01b177dd909585623bcde669f32a85be721144ddbb2379e864cd0be",
  "@type": "Page",
  "vc:slug": "tourism-metaverse",
  "title": "Tourism Metaverse",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:360-video",
      "vc:label": "360 Video"
    },
    {
      "@id": "urn:visionflow:linked:accessibility-enhancement",
      "vc:label": "Accessibility Enhancement"
    },
    {
      "@id": "urn:visionflow:linked:content-management-system",
      "vc:label": "Content Management System"
    },
    {
      "@id": "urn:visionflow:linked:cultural-exhibit",
      "vc:label": "Cultural Exhibit"
    },
    {
      "@id": "urn:visionflow:linked:cultural-heritage-preservation",
      "vc:label": "Cultural Heritage Preservation"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gs-mec",
      "vc:label": "ETSI GS MEC"
    },
    {
      "@id": "urn:visionflow:linked:geographic-information-system",
      "vc:label": "Geographic Information System"
    },
    {
      "@id": "urn:visionflow:linked:tour-guide-system",
      "vc:label": "Tour Guide System"
    },
    {
      "@id": "urn:visionflow:linked:translation-service",
      "vc:label": "Translation Service"
    },
    {
      "@id": "urn:visionflow:linked:travel-planner",
      "vc:label": "Travel Planner"
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
      "@id": "urn:visionflow:owl:class:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:destination-marketing",
      "vc:label": "Destination Marketing"
    },
    {
      "@id": "urn:visionflow:owl:class:geospatial-engine",
      "vc:label": "Geospatial Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-platform",
      "vc:label": "Metaverse Platform"
    },
    {
      "@id": "urn:visionflow:owl:class:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-audio",
      "vc:label": "Spatial Audio"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-destination",
      "vc:label": "Virtual Destination"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society",
      "vc:label": "VirtualSocietyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-tourism",
      "vc:label": "Virtual Tourism"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world",
      "vc:label": "Virtual World"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20313"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tourism Metaverse"
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
  "@id": "urn:ngm:class:tourism-metaverse",
  "@type": "Class",
  "label": "Tourism Metaverse",
  "definition": "A virtual platform enabling users to explore, preview, and experience tourist destinations, cultural sites, and travel experiences through immersive digital environments, supporting sustainable tourism and accessibility to remote or restricted locations.",
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
        "@id": "urn:ngm:class:geospatial-engine",
        "label": "Geospatial Engine"
      },
      {
        "@id": "urn:ngm:class:virtual-destination",
        "label": "Virtual Destination"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-management-system",
        "label": "Content Management System"
      },
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      },
      {
        "@id": "urn:ngm:class:spatial-audio",
        "label": "Spatial Audio"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility Enhancement"
      },
      {
        "@id": "urn:ngm:class:cultural-heritage-preservation",
        "label": "Cultural Heritage Preservation"
      },
      {
        "@id": "urn:ngm:class:destination-marketing",
        "label": "Destination Marketing"
      },
      {
        "@id": "urn:ngm:class:virtual-tourism",
        "label": "Virtual Tourism"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse-platform",
        "label": "Metaverse Platform"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
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

- ### Definition
  - A virtual platform enabling users to explore, preview, and experience tourist destinations, cultural sites, and travel experiences through immersive digital environments, supporting sustainable tourism and accessibility to remote or restricted locations.

- ### Semantic Classification
  - owl-class:: spatial-computing:TourismMetaverse
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualSocietyDomain]], [[CreativeMediaDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Virtual Destination]], [[Tour Guide System]], [[Cultural Exhibit]], [[Travel Planner]], [[Geospatial Engine]]
  - is-part-of:: [[Metaverse Platform]], [[Virtual World]]
  - requires:: [[3D Rendering Engine]], [[Spatial Audio]], [[Avatar System]], [[Content Management System]]
  - enables:: [[Virtual Tourism]], [[Cultural Heritage Preservation]], [[Destination Marketing]], [[Accessibility Enhancement]]
  - depends-on:: [[Photogrammetry]], [[360 Video]], [[Geographic Information System]], [[Translation Service]]

- ### Content
  Tourism Metaverse — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GS MEC]]
  - migration-date:: 2026-04-26T00:00:00Z
