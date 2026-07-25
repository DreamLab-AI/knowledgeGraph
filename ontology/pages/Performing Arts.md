public:: true

# Performing Arts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0068a5a6188d27e254e418b9d615c283839f735b2353f186441c2cec3902f190",
  "@type": "Page",
  "vc:slug": "performing-arts",
  "title": "Performing Arts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9661"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Performing Arts"
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
  "@id": "urn:ngm:class:performing-arts",
  "@type": "Class",
  "label": "Performing Arts",
  "definition": "Time-based artistic disciplines—including theatre, dance, music, and live performance—that occur in shared space between performers and audience. In spatial computing contexts, performing arts intersect with virtual production, motion capture, and location-based experiences to create hybrid physical-digital performances that extend audience reach and deepen narrative immersion.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:virtual-production", "label": "Virtual Production"},
      {"@id": "urn:ngm:class:spatial-audio", "label": "Spatial Audio"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:venue-tethered-immersive-experience", "label": "Venue-Tethered Immersive Experience"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:music-and-audio", "label": "Music and Audio"},
      {"@id": "urn:ngm:class:ai-application", "label": "AI Application"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:performing-arts:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0068a5a6188d27e254e418b9d615c283839f735b2353f186441c2cec3902f190"
  },
  "vc:resolutions": [
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
  - Time-based artistic disciplines—including theatre, dance, music, and live performance—that occur in shared space between performers and audience. In spatial computing contexts, performing arts intersect with virtual production, motion capture, and location-based experiences to create hybrid physical-digital performances that extend audience reach and deepen narrative immersion.

- ### Semantic Classification
  - owl-class:: spatial-computing:PerformingArts
  - owl-role:: concept

- ### Relationships
  - **uses** [[Motion Capture]] — motion capture translates performer movement into digital animation and volumetric data
  - **uses** [[Virtual Production]] — virtual production pipelines create real-time digital environments for live performance
  - **uses** [[Spatial Audio]] — spatial audio systems reproduce directional sound for immersive audience experiences
  - **enables** [[Immersive Experience]] — performing arts are a primary content type driving immersive experience design
  - **enables** [[Venue-Tethered Immersive Experience]] — live performances anchor location-based digital-physical hybrid experiences
  - **relatedTo** [[Music and Audio]] — music is a core performing art domain
  - **relatedTo** [[Creative Media Domain]] — performing arts sit within the creative media domain

- ### Content

  ## Overview

  Performing Arts represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
