public:: true

# Avatar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:53ad95c3c89aaacea76e1b303729877048febad65bd8f70a919c3dafec8e6389",
  "@type": "Page",
  "vc:slug": "avatar",
  "title": "Avatar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:acm-web3-d-hanim",
      "vc:label": "ACM + Web3D HAnim"
    },
    {
      "@id": "urn:visionflow:linked:animation-rig",
      "vc:label": "Animation Rig"
    },
    {
      "@id": "urn:visionflow:linked:user-embodiment",
      "vc:label": "User Embodiment"
    },
    {
      "@id": "urn:visionflow:linked:user-experience-layer",
      "vc:label": "UserExperienceLayer"
    },
    {
      "@id": "urn:visionflow:linked:visual-mesh",
      "vc:label": "Visual Mesh"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-rendering-engine",
      "vc:label": "3D Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:social-presence",
      "vc:label": "Social Presence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20067"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Avatar"
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
  "@id": "urn:ngm:class:avatar",
  "@type": "Class",
  "label": "Avatar",
  "definition": "A digital representation of a person or autonomous agent used to perceive, act, and interact within a virtual or mixed-reality environment, embodying identity, appearance, and behavioural state.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:sc-content-and-assets",
    "label": "Content and Assets"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:animation-rig",
        "label": "Animation Rig"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:virtual-world",
        "label": "Virtual World"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      },
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Social Presence"
      },
      {
        "@id": "urn:ngm:class:non-verbal-communication",
        "label": "Non-Verbal Communication"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:network-synchronisation",
        "label": "Network Synchronisation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:hanim-standard",
        "label": "HAnim"
      },
      {
        "@id": "urn:ngm:class:gltf-standard",
        "label": "glTF/GLB"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      },
      {
        "@id": "urn:ngm:class:level-of-detail",
        "label": "Level of Detail"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:personalisation",
        "label": "Personalisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:non-player-character",
        "label": "Non Player Character"
      },
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:virtual-agent",
      "label": "Virtual Agent"
    },
    {
      "@id": "urn:ngm:class:digital-persona",
      "label": "Digital Persona"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:avatar:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:53ad95c3c89aaacea76e1b303729877048febad65bd8f70a919c3dafec8e6389"
  },
  "vc:resolutions": [
    {
      "raw": "[[ACM + Web3D HAnim]]",
      "resolved": "urn:visionflow:linked:acm-web3-d-hanim",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation Rig]]",
      "resolved": "urn:visionflow:linked:animation-rig",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Embodiment]]",
      "resolved": "urn:visionflow:linked:user-embodiment",
      "kind": "StubLink"
    },
    {
      "raw": "[[UserExperienceLayer]]",
      "resolved": "urn:visionflow:linked:user-experience-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Mesh]]",
      "resolved": "urn:visionflow:linked:visual-mesh",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Rendering Engine]]",
      "resolved": "urn:visionflow:owl:class:3-d-rendering-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Presence]]",
      "resolved": "urn:visionflow:owl:class:social-presence",
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
  - Digital representation of a person or agent used to interact within a virtual environment.
- ### Semantic Classification
  - owl-class:: spatial-computing:Avatar
  - owl-role:: Agent
  - owl-inferred:: spatial-computing:VirtualAgent
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[UserExperienceLayer]]
- ### Relationships
  - has-part:: [[Visual Mesh]], [[Animation Rig]]
  - is-part-of:: [[Metaverse]]
  - requires:: [[3D Rendering Engine]]
  - enables:: [[User Embodiment]], [[Social Presence]]
- ### Content
  Avatar — content pending enrichment.
- ### Provenance
  - sources:: [[ACM + Web3D HAnim]]
  - migration-date:: 2026-04-26T00:00:00Z
