schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#VirtualModel
legacy_uri:: urn:visionclaw:concept:spatial-computing:virtual-model
public:: true

# Virtual Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51",
  "@type": "Page",
  "vc:slug": "virtual-model",
  "title": "Virtual Model",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-asset",
      "vc:label": "3D Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
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
      "vc:value": "sha256-12-221238e4ae40"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#VirtualModel"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10130"
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
      "vc:value": "Virtual Model"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:virtual-model"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:virtual-model"
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
    "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:virtual-model",
  "@type": "OntologyClass",
  "label": "Virtual Model",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:3-d-asset",
      "vc:label": "3D Asset"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A digital 3D representation of objects, characters, environments, or systems created using computer graphics software for use in metaverse platforms, simulations, games, and virtual production, including static assets, animated models, and procedurally generated content.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-model:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Asset]]",
      "resolved": "urn:visionflow:linked:3-d-asset",
      "kind": "StubLink"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:55190617cf03a97c835458d1cb0bde448a5c9d6d0f1315edb639b313aea32b51@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A digital 3D representation of objects, characters, environments, or systems created using computer graphics software for use in metaverse platforms, simulations, games, and virtual production, including static assets, animated models, and procedurally generated content.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualModel
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[3D Asset]]

- ### Content

  - ## Overview
  - Virtual models are 3D digital assets used across metaverse platforms, gaming, simulation, and entertainment. They range from static environmental elements to complex animated characters. Models can be created manually using 3D software, generated procedurally, or produced through photogrammetry and 3D scanning.
  - ## Technical Details
  - ### Model Categories
		- **Static Models**: Non-animated scenery, buildings, props
		- **Dynamic Models**: Animated characters, vehicles, interactive objects
		- **Parametric Models**: Procedurally adjustable assets
		- **Scanned Models**: Photogrammetry-captured real-world objects
  - ### Creation Tools
		- Blender, Maya, 3DS Max for modeling
		- ZBrush for sculpting
		- Substance Painter for texturing
		- Marvelous Designer for clothing
  - ### File Formats
		- glTF/GLB for web and game engines
		- FBX for animation exchange
		- USD for scene composition
		- OBJ for static geometry
  - ## Applications
  - Game and metaverse asset creation
  - Virtual production set design
  - Product visualization and prototyping
  - Architectural visualization
  - NFT and digital collectible creation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
