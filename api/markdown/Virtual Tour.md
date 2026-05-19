public:: true

# Virtual Tour
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:53b6abce1251f0078207f17be8d754e1a80535bc2b941fc0f7c8569b32c841eb",
  "@type": "Page",
  "vc:slug": "virtual-tour",
  "title": "Virtual Tour",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:immersive-experience",
      "vc:label": "Immersive Experience"
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
      "vc:value": "MV-10149"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Tour"
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
  "@id": "urn:ngm:class:virtual-tour",
  "@type": "Class",
  "label": "Virtual Tour",
  "definition": "An interactive 360-degree digital representation of a physical location that enables remote exploration through web browsers or VR headsets, commonly used in real estate, museums, hospitality, and education to provide immersive walkthroughs without physical presence.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:immersive-experience",
      "label": "Immersive Experience"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-tour:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:53b6abce1251f0078207f17be8d754e1a80535bc2b941fc0f7c8569b32c841eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Immersive Experience]]",
      "resolved": "urn:visionflow:owl:class:immersive-experience",
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
  - An interactive 360-degree digital representation of a physical location that enables remote exploration through web browsers or VR headsets, commonly used in real estate, museums, hospitality, and education to provide immersive walkthroughs without physical presence.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualTour
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Immersive Experience]]

- ### Content

  - ## Overview
  - Virtual tours provide interactive, panoramic views enabling viewers to experience locations as if physically present. Research shows listings with 3D virtual tours can sell for up to 9% more and close up to 31% faster. Kuula serves over 500,000 professionals globally, with a December 2025 update supporting up to 32K resolution images. Museums use 360 virtual tours to present collections to global audiences, enhancing accessibility and engagement.
  - ## Technical Details
  - ### Tour Types
		- **360-Degree Photo Tours**: Static panoramic images with hotspot navigation
		- **3D Virtual Tours**: Full spatial models with depth and measurement
		- **Video Tours**: Guided walkthrough with narration
		- **VR Immersive Tours**: Headset-based exploration experience
  - ### Leading Platforms
		- **Kuula**: Award-winning 3D 360 virtual tour software
		- **Matterport**: Full 3D digital twin creation
		- **Giraffe360**: Real estate marketing focus
		- **Panoee**: Free virtual tour software
  - ### Creation Technologies
		- 360-degree cameras for panoramic capture
		- LiDAR scanning for precise measurements
		- Photogrammetry for 3D reconstruction
		- HDR photography for quality visuals
  - ### Features
		- Hotspot navigation between viewpoints
		- Embedded media and information
		- Floor plan integration
		- VR headset compatibility
  - ## Applications
  - Real estate property marketing
  - Museum and gallery exhibitions
  - Hotel and hospitality showcases
  - Educational institution tours
  - Tourism destination previews
  - Retail showroom experiences

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
