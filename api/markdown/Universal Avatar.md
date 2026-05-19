public:: true

# Universal Avatar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7002ab79e5074394f497f1b1ee49bde8ec2d43601b8f27f86eee122ad58a4f80",
  "@type": "Page",
  "vc:slug": "universal-avatar",
  "title": "Universal Avatar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:avatar",
      "vc:label": "Avatar"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10094"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Universal Avatar"
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
  "@id": "urn:ngm:class:universal-avatar",
  "@type": "Class",
  "label": "Universal Avatar",
  "definition": "A cross-platform digital representation of a user that maintains consistent identity, appearance, and customizations across multiple metaverse applications, games, and virtual environments through interoperability standards and shared formats.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:avatar",
      "label": "Avatar"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:universal-avatar:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7002ab79e5074394f497f1b1ee49bde8ec2d43601b8f27f86eee122ad58a4f80"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:owl:class:avatar",
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
  - A cross-platform digital representation of a user that maintains consistent identity, appearance, and customizations across multiple metaverse applications, games, and virtual environments through interoperability standards and shared formats.

- ### Semantic Classification
  - owl-class:: spatial-computing:UniversalAvatar
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Avatar]]

- ### Content

  - ## Overview
  - Universal avatars address the fragmentation of user identity across virtual worlds by enabling a single avatar to work across 1,000+ applications. Ready Player Me leads this space with AI-powered avatar creation and cross-platform compatibility, backed by $56M in funding from Andreessen Horowitz.
  - ## Technical Details
  - ### Interoperability Standards
		- **glTF**: Standard 3D model format for avatars
		- **FBX**: Animation and model interchange
		- **VRM**: VR-optimized humanoid avatar format
		- **JSON/XML Metadata**: Avatar customization data
  - ### Ready Player Me Technology
		- AI selfie-to-avatar creation
		- SDKs for Unity and Unreal Engine
		- REST API for integration
		- Cross-engine translation and optimization
  - ### Avatar API Features
		- Technical compatibility across platforms
		- Visual consistency across games
		- Performance optimization per platform
		- Asset portability (skins, accessories)
  - ## Applications
  - Cross-game avatar identity
  - VR social platform presence
  - Enterprise metaverse profiles
  - Gaming character consistency
  - Virtual meeting avatars

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
