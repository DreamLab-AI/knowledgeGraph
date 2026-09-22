public:: true

# Shared Ar Experiences
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:470f932ca1a43910b34b8de3f2c77f30352f2d10200e3bfabbe8c52f4cc06a5f",
  "@type": "Page",
  "vc:slug": "shared-ar-experiences",
  "title": "Shared Ar Experiences",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:social-ar-interaction",
      "vc:label": "Social AR Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:augmented-reality",
      "vc:label": "Augmented Reality"
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
      "vc:value": "MV-10040"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shared Ar Experiences"
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
  "@id": "urn:ngm:class:shared-ar-experiences",
  "@type": "Class",
  "label": "Shared Ar Experiences",
  "definition": "Collaborative augmented reality interactions enabling multiple users to simultaneously view and interact with digital content overlaid on shared physical environments, supporting real-time synchronization of virtual objects across devices for social connection and joint activities.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:augmented-reality",
      "label": "Augmented Reality"
    }
  ],
  "relations": {},
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
  "@id": "urn:visionflow:annotation:link-resolutions:shared-ar-experiences:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:470f932ca1a43910b34b8de3f2c77f30352f2d10200e3bfabbe8c52f4cc06a5f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Social AR Interaction]]",
      "resolved": "urn:visionflow:linked:social-ar-interaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:owl:class:augmented-reality",
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
  - Collaborative augmented reality interactions enabling multiple users to simultaneously view and interact with digital content overlaid on shared physical environments, supporting real-time synchronization of virtual objects across devices for social connection and joint activities.

- ### Semantic Classification
  - owl-class:: spatial-computing:SharedArExperiences
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Augmented Reality]]
  - enables:: [[Social AR Interaction]]

- ### Content

  - #### Key Technologies
		- Cloud-based spatial anchor services
		- Cross-platform AR synchronization
		- Real-time object state sharing
		- Multi-device coordinate alignment
		- Shared world understanding
  - #### Applications
		- Virtual meetings and collaborative workspaces
		- Multiplayer AR gaming experiences
		- Educational group simulations
		- Design review and visualization
		- Social entertainment and events

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
