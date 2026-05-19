schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#Avatar
legacy_uri:: urn:visionclaw:concept:spatial-computing:avatar
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
      "@id": "urn:visionflow:owl:class:interaction-domain",
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[DID Nostr Identity]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-416e3eafcb90"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#Avatar"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20067"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Avatar"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:avatar"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:avatar"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:53ad95c3c89aaacea76e1b303729877048febad65bd8f70a919c3dafec8e6389@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "Digital representation of a person or agent used to interact within a virtual environment.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:metaverse",
      "label": "Metaverse"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:animation-rig",
        "label": "Animation Rig"
      },
      {
        "@id": "urn:ngm:class:visual-mesh",
        "label": "Visual Mesh"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-rendering-engine",
        "label": "3D Rendering Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:user-embodiment",
        "label": "User Embodiment"
      },
      {
        "@id": "urn:ngm:class:social-presence",
        "label": "Social Presence"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
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
      "resolved": "urn:visionflow:owl:class:interaction-domain",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:53ad95c3c89aaacea76e1b303729877048febad65bd8f70a919c3dafec8e6389@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
