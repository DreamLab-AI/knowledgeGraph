public:: true

# 3D Modelling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:3d-modelling", "@type":"Page", "title":"3D Modelling", "vc:slug":"3d-modelling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:3d-modelling",
  "@type":"Class",
  "label":"3D Modelling",
  "definition":"3D modelling is the creation of a mathematical representation of a three-dimensional surface or volume using specialised software. Models are commonly built from polygon meshes, parametric surfaces or volumetric data and define the geometry that is later textured, rigged, animated and rendered. It is the foundational discipline for games, film, visualisation, product design and spatial computing.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:polygon-mesh","label":"Polygon Mesh"},{"@id":"urn:ngm:class:geometry-processing","label":"Geometry Processing"},{"@id":"urn:ngm:class:topology","label":"Topology"}],
    "requires":[{"@id":"urn:ngm:class:design-software","label":"Design Software"}],
    "enables":[{"@id":"urn:ngm:class:rendering","label":"Rendering"},{"@id":"urn:ngm:class:character-model","label":"Character Model"},{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"}],
    "uses":[{"@id":"urn:ngm:class:uv-mapping","label":"UV Mapping"},{"@id":"urn:ngm:class:computer-aided-design","label":"Computer-Aided Design"}],
    "supports":[{"@id":"urn:ngm:class:visual-effects","label":"Visual Effects"},{"@id":"urn:ngm:class:game-engine","label":"Game Engine"},{"@id":"urn:ngm:class:virtual-production","label":"Virtual Production"}],
    "contrastsWith":[{"@id":"urn:ngm:class:computer-aided-design","label":"Computer-Aided Design"}],
    "relatedTo":[{"@id":"urn:ngm:class:fbx","label":"FBX"},{"@id":"urn:ngm:class:character-rigging","label":"Character Rigging"},{"@id":"urn:ngm:class:skinning","label":"Skinning"}],
    "bridgesTo":[{"@id":"urn:ngm:class:augmented-reality","label":"Augmented Reality"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:3-d-modeling","label":"3D Modeling"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- 3D modelling is the creation of a mathematical representation of a three-dimensional surface or volume using [[Design Software]].
- Models are commonly built from a [[Polygon Mesh]], parametric surfaces or volumetric data.
- The resulting geometry is later textured, rigged, animated and rendered.
- It is the foundational discipline of [[Computer Graphics]] for games, film, visualisation and spatial computing.
- ### Overview
- 3D modelling encompasses several paradigms. Polygonal modelling builds surfaces from vertices, edges and faces and dominates real-time and entertainment work. NURBS and parametric surfaces produce mathematically smooth geometry favoured in industrial design.
- Digital sculpting treats the model like virtual clay, enabling high-detail organic forms that are later retopologised into efficient meshes.
- Procedural and generative approaches construct geometry from rules and parameters, scaling complex environments and assets.
- The discipline is distinct from but adjacent to computer-aided design, which prioritises engineering precision, manufacturability and parametric constraints over artistic surface modelling.
- ### Key aspects
- Mesh construction from vertices, edges and faces.
- Clean topology supporting deformation and subdivision.
- UV layout to prepare surfaces for texturing.
- Level-of-detail management for performance.
- Interchange through formats such as FBX and glTF.
- ### Mechanisms
- Box and polygon modelling for hard-surface and stylised assets.
- Digital sculpting and retopology for organic detail.
- Boolean and subdivision-surface operations.
- Procedural generation driven by parameters and graphs.
- ### Applications
- Game assets and characters for real-time engines.
- Film and visual effects environments and creatures.
- Product visualisation and industrial design.
- Digital humans and props for augmented and virtual reality.
- ### Relationships
- hasPart:: [[Polygon Mesh]]
- hasPart:: [[Geometry Processing]]
- hasPart:: [[Topology]]
- requires:: [[Design Software]]
- enables:: [[Rendering]]
- enables:: [[Character Model]]
- enables:: [[Texture Mapping]]
- uses:: [[UV Mapping]]
- uses:: [[Computer-Aided Design]]
- supports:: [[Visual Effects]]
- supports:: [[Game Engine]]
- supports:: [[Virtual Production]]
- contrastsWith:: [[Computer-Aided Design]]
- relatedTo:: [[FBX]]
- relatedTo:: [[Character Rigging]]
- relatedTo:: [[Skinning]]
- bridgesTo:: [[Augmented Reality]]
- sameAs:: [[3D Modeling]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
