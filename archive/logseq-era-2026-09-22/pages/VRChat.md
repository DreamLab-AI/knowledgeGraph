public:: true

# VRChat
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e93c93be27ed00009c68fecf95627c68fb17938cf6b3d71953c74e7737daf732",
  "@type": "Page",
  "vc:slug": "vrchat",
  "title": "VRChat",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-system",
      "vc:label": "Avatar System"
    },
    {
      "@id": "urn:visionflow:linked:virtual-reality",
      "vc:label": "Virtual Reality"
    },
    {
      "@id": "urn:visionflow:linked:social-vr",
      "vc:label": "Social VR"
    },
    {
      "@id": "urn:visionflow:linked:avatar-customization",
      "vc:label": "Avatar Customization"
    },
    {
      "@id": "urn:visionflow:linked:avatar-interoperability",
      "vc:label": "Avatar Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-platform",
      "vc:label": "Metaverse Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "VRChat"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vrchat",
  "@type": "Class",
  "label": "VRChat",
  "definition": "VRChat is a social virtual reality platform where users interact as custom avatars in user-created 3D worlds, with support for both VR headsets and desktop access.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse-platform",
      "label": "Metaverse Platform"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:avatar-system",
        "label": "Avatar System"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-vr",
        "label": "Social VR"
      },
      {
        "@id": "urn:ngm:class:avatar-customization",
        "label": "Avatar Customization"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:vrchat:f1b3ff4a66dd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e93c93be27ed00009c68fecf95627c68fb17938cf6b3d71953c74e7737daf732"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar System]]",
      "resolved": "urn:visionflow:linked:avatar-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Reality]]",
      "resolved": "urn:visionflow:linked:virtual-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social VR]]",
      "resolved": "urn:visionflow:linked:social-vr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar Customization]]",
      "resolved": "urn:visionflow:linked:avatar-customization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar Interoperability]]",
      "resolved": "urn:visionflow:linked:avatar-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Platform]]",
      "resolved": "urn:visionflow:linked:metaverse-platform",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - VRChat is a social virtual reality platform where users interact as custom avatars in user-created 3D worlds, with support for both VR headsets and desktop access.

- ### Semantic Classification
  - owl-class:: metaverse:VRChat
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Metaverse Platform]]
  - bridges-to:: [[Avatar Interoperability]]
  - requires:: [[Avatar System]], [[Virtual Reality]]
  - enables:: [[Social VR]], [[Avatar Customization]]

- ### Content
  - VRChat lets users upload custom avatars and build interactive worlds, then meet and socialise within them in real time. It supports full-body tracking, expressive avatars and a large library of community-created spaces.
  - The platform is one of the most active examples of social virtual reality, with much of its content authored by users. Its avatar and world tooling is built on a mainstream game engine, and avatar portability is a recurring topic in its community.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
