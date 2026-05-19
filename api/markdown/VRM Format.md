public:: true

# VRM Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:440c59f2aa36392cfb35a867b95fa83e3d29b98219097cd1553564ad3a581909",
  "@type": "Page",
  "vc:slug": "vrm-format",
  "title": "VRM Format",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:3-d-file-format",
      "vc:label": "3D File Format"
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
      "vc:value": "MV-10164"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "VRM Format"
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
  "@id": "urn:ngm:class:vrm-format",
  "@type": "Class",
  "label": "VRM Format",
  "definition": "An open file format standard for 3D humanoid avatars built on glTF, designed for cross-platform interoperability in VR, AR, and metaverse applications, incorporating standardized rigging, facial expressions, gaze controls, and licensing metadata to enable seamless avatar use across different virt...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vrm-format:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:440c59f2aa36392cfb35a867b95fa83e3d29b98219097cd1553564ad3a581909"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D File Format]]",
      "resolved": "urn:visionflow:owl:class:3-d-file-format",
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
  - An open file format standard for 3D humanoid avatars built on glTF, designed for cross-platform interoperability in VR, AR, and metaverse applications, incorporating standardized rigging, facial expressions, gaze controls, and licensing metadata to enable seamless avatar use across different virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:VRMFormat
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D File Format]]

- ### Content

  - ## Overview
  - VRM is a platform-independent 3D avatar standard proposed by the VRM Consortium for metaverse interoperability. In October 2024, the VRM Consortium and Khronos Group announced collaboration to advance VRM as official glTF extensions. First released in Japan in 2018, VRM supports applications including VirtualCast, VRoid Studio, and cluster. Platforms like Decentraland, Hyperfy, and OnCyber have adopted VRM for avatar portability.
  - ## Technical Details
  - ### Format Specifications
		- **Base Format**: glTF with humanoid avatar extensions
		- **Facial Expressions**: Standardized blend shapes and controls
		- **Gaze Settings**: First-person avatar control information
		- **Rigging**: Consistent bone structure across platforms
  - ### Metadata Support
		- Title and author attribution
		- Creative Commons licensing options
		- Modification and redistribution rules
		- Character usage permissions
  - ### Khronos Collaboration (2024)
		- Proposal of VRM as official glTF extensions
		- International standardization advancement
		- Industry-wide adoption potential
		- Global metaverse ecosystem integration
  - ### Platform Adoption
		- VirtualCast metaverse communication
		- VRoid Studio character creation
		- cluster metaverse platform
		- Decentraland, Hyperfy, OnCyber
  - ## Applications
  - Cross-platform avatar portability
  - VTuber and streaming avatars
  - Metaverse identity representation
  - VR/AR application characters
  - Social VR platform avatars

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
