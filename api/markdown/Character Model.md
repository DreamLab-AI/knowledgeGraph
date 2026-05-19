schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CharacterModel
legacy_uri:: urn:visionclaw:concept:spatial-computing:character-model
public:: true

# Character Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719",
  "@type": "Page",
  "vc:slug": "character-model",
  "title": "Character Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-modeling-software",
      "vc:label": "3D Modeling Software"
    },
    {
      "@id": "urn:visionflow:linked:character-animation",
      "vc:label": "Character Animation"
    },
    {
      "@id": "urn:visionflow:linked:game-characters",
      "vc:label": "Game Characters"
    },
    {
      "@id": "urn:visionflow:linked:topology-design",
      "vc:label": "Topology Design"
    },
    {
      "@id": "urn:visionflow:linked:virtual-avatars",
      "vc:label": "Virtual Avatars"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-model",
      "vc:label": "3D Model"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:texture-mapping",
      "vc:label": "Texture Mapping"
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
      "vc:key": "content-hash",
      "vc:value": "sha256-12-71c875ee7bcc"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CharacterModel"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9818"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Character Model"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:character-model"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:character-model"
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
    "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:character-model",
  "@type": "OntologyClass",
  "label": "Character Model",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "spatial-computing"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A 3D digital representation of a character consisting of a polygonal mesh, textures, and materials, designed with clean topology optimized for animation and real-time rendering, serving as the foundation for rigging, skinning, and character animation workflows.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:3-d-modeling-software",
      "vc:label": "3D Modeling Software"
    },
    {
      "@id": "urn:visionflow:linked:topology-design",
      "vc:label": "Topology Design"
    },
    {
      "@id": "urn:visionflow:owl:class:texture-mapping",
      "vc:label": "Texture Mapping"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:character-animation",
      "vc:label": "Character Animation"
    },
    {
      "@id": "urn:visionflow:linked:game-characters",
      "vc:label": "Game Characters"
    },
    {
      "@id": "urn:visionflow:linked:virtual-avatars",
      "vc:label": "Virtual Avatars"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:character-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Modeling Software]]",
      "resolved": "urn:visionflow:linked:3-d-modeling-software",
      "kind": "StubLink"
    },
    {
      "raw": "[[Character Animation]]",
      "resolved": "urn:visionflow:linked:character-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Game Characters]]",
      "resolved": "urn:visionflow:linked:game-characters",
      "kind": "StubLink"
    },
    {
      "raw": "[[Topology Design]]",
      "resolved": "urn:visionflow:linked:topology-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Avatars]]",
      "resolved": "urn:visionflow:linked:virtual-avatars",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Model]]",
      "resolved": "urn:visionflow:owl:class:3-d-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Texture Mapping]]",
      "resolved": "urn:visionflow:owl:class:texture-mapping",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:7784458def1b42e0ee3e2e3b5100c6552353a1e04f7c9548fa38b8953db83719@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A 3D digital representation of a character consisting of a polygonal mesh, textures, and materials, designed with clean topology optimized for animation and real-time rendering, serving as the foundation for rigging, skinning, and character animation workflows.

- ### Semantic Classification
  - owl-class:: spatial-computing:CharacterModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D Model]]
  - requires:: [[3D Modeling Software]], [[Texture Mapping]], [[Topology Design]]
  - enables:: [[Character Animation]], [[Virtual Avatars]], [[Game Characters]]
  - bridges-to:: [[Computer Vision]]

- ### Content

  - ## Technical Details
  - **Topology Requirements**:
		- Clean, evenly distributed mesh (preferably quads)
		- Suitable polycount for target platform
		- Symmetrical neutral pose (T-pose or A-pose)
		- Dense mesh around deformation areas (eyes, shoulders, elbows)
  - **Common Issues to Avoid**:
		- N-Gons (faces with more than 4 edges)
		- Flipped faces and open edges
		- Isolated vertices
		- Poor edge flow around joints
  - **Retopology**: Process of converting high-resolution models into optimized meshes suitable for animation and real-time use
  - **Tools**: Blender, Maya, 3ds Max, ZBrush, Character Creator, AccuRIG
  - ## Applications
  - Video game character creation
  - Virtual avatar systems
  - Animated film production
  - VR/AR character representation
  - Metaverse identity systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
