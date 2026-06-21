public:: true

# Digital Heritage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3a4c229455919bafb5c15ce887790f64c2256904acdf452bec8cb3d3deb7ec30",
  "@type": "Page",
  "vc:slug": "digital-heritage",
  "title": "Digital Heritage",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9579"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Heritage"
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
  "@id": "urn:ngm:class:digital-heritage",
  "@type": "Class",
  "label": "Digital Heritage",
  "definition": "The digitisation, preservation, and interactive presentation of cultural artefacts, historical sites, and intangible heritage through spatial computing technologies such as 3D reconstruction, AR, and VR. Digital heritage enables remote access, scholarly analysis, and public engagement with cultural memory that may otherwise be physically inaccessible or at risk of loss.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:cultural-heritage-xr-experience",
        "label": "Cultural Heritage XR Experience"
      },
      {
        "@id": "urn:ngm:class:archival-standards",
        "label": "Archival Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experience",
        "label": "Immersive Experience"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:3-d-reconstruction",
        "label": "3D Reconstruction"
      },
      {
        "@id": "urn:ngm:class:digital-preservation",
        "label": "Digital Preservation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-heritage:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3a4c229455919bafb5c15ce887790f64c2256904acdf452bec8cb3d3deb7ec30"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - The digitisation, preservation, and interactive presentation of cultural artefacts, historical sites, and intangible heritage through spatial computing technologies such as 3D reconstruction, AR, and VR. Digital heritage enables remote access, scholarly analysis, and public engagement with cultural memory that may otherwise be physically inaccessible or at risk of loss.

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalHeritage
  - owl-role:: concept

- ### Relationships
  - uses:: [[3D Reconstruction]], [[Digital Preservation]]
  - has-part:: [[Cultural Heritage XR Experience]], [[Archival Standards]]
  - enables:: [[Immersive Experience]]
  - related-to:: [[NFT]]
  - bridges-to:: [[Blockchain]]

- ### Content

  ## Overview

  Digital Heritage represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
