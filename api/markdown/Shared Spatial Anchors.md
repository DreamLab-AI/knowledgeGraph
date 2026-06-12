public:: true

# Shared Spatial Anchors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8536fbcd46c9dc4cc0031c82b91bab55be9571e6a6663e9b4049a9e4a9c9f01",
  "@type": "Page",
  "vc:slug": "shared-spatial-anchors",
  "title": "Shared Spatial Anchors",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaborative-ar-experiences",
      "vc:label": "Collaborative AR Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10043"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Spatial Anchors"
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
  "@id": "urn:ngm:class:shared-spatial-anchors",
  "@type": "Class",
  "label": "Shared Spatial Anchors",
  "definition": "Cloud-based reference points that lock virtual objects to specific physical locations, enabling multiple users across different devices to perceive digital content in the same position and orientation relative to the real-world environment for collaborative mixed reality experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-ar-experiences",
        "label": "Collaborative AR Experiences"
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
  "@id": "urn:visionflow:annotation:link-resolutions:shared-spatial-anchors:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8536fbcd46c9dc4cc0031c82b91bab55be9571e6a6663e9b4049a9e4a9c9f01"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaborative AR Experiences]]",
      "resolved": "urn:visionflow:linked:collaborative-ar-experiences",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Cloud-based reference points that lock virtual objects to specific physical locations, enabling multiple users across different devices to perceive digital content in the same position and orientation relative to the real-world environment for collaborative mixed reality experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:SharedSpatialAnchors
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Spatial Computing Paradigm]]
  - enables:: [[Collaborative AR Experiences]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  - #### Key Capabilities
		- Cross-device coordinate synchronization
		- Persistent world-locked content placement
		- Multi-user simultaneous viewing
		- Platform-agnostic anchor sharing
		- Environmental understanding mapping
  - #### Implementation Platforms
		- ARCore Cloud Anchors (Google)
		- ARKit shared experiences (Apple)
		- Vuforia spatial anchoring
		- Niantic Lightship VPS
		- Custom cloud anchor services

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
