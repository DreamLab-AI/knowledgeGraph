public:: true

# Skinning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:skinning", "@type":"Page", "title":"Skinning", "vc:slug":"skinning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:skinning",
  "@type":"Class",
  "label":"Skinning",
  "definition":"Skinning is the process of binding a deformable surface mesh to an underlying skeleton so that the mesh deforms naturally as the skeleton is animated. Each vertex is assigned weights that determine how strongly it follows each influencing bone, and these weights drive the deformation during playback. Skinning is essential to character animation, allowing a single rigged model to be posed and animated across many motions.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:character-rigging","label":"Character Rigging"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:polygon-mesh","label":"Polygon Mesh"},{"@id":"urn:ngm:class:blend-shape","label":"Blend Shape"}],
    "requires":[{"@id":"urn:ngm:class:character-rigging","label":"Character Rigging"},{"@id":"urn:ngm:class:character-model","label":"Character Model"}],
    "uses":[{"@id":"urn:ngm:class:geometry-processing","label":"Geometry Processing"},{"@id":"urn:ngm:class:shader","label":"Shader"}],
    "enables":[{"@id":"urn:ngm:class:character-animation","label":"Character Animation"},{"@id":"urn:ngm:class:animation","label":"Animation"}],
    "supports":[{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"},{"@id":"urn:ngm:class:game-engine","label":"Game Engine"}],
    "dependsOn":[{"@id":"urn:ngm:class:topology","label":"Topology"}],
    "relatedTo":[{"@id":"urn:ngm:class:texture-mapping","label":"Texture Mapping"},{"@id":"urn:ngm:class:uv-mapping","label":"UV Mapping"},{"@id":"urn:ngm:class:fbx","label":"FBX"},{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
    "bridgesTo":[{"@id":"urn:ngm:class:rendering-pipeline","label":"Rendering Pipeline"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Skinning is the process of binding a deformable surface [[Polygon Mesh]] to an underlying skeleton so the mesh deforms naturally as the skeleton is animated.
- Each vertex is assigned weights that determine how strongly it follows each influencing bone.
- It is the deformation half of [[Character Rigging]], complementing the skeletal hierarchy.
- It is essential to [[Character Animation]], letting one rigged model play many motions.
- ### Overview
- After a [[Character Model]] is built and a skeleton placed inside it, skinning attaches the visible surface to the bones so that movement of the skeleton drives movement of the mesh.
- The most common technique, linear blend skinning, computes each deformed vertex as a weighted average of the transforms of its influencing bones. It is fast and ubiquitous in real-time engines.
- Linear blend skinning suffers from artefacts such as the candy-wrapper collapse at twisting joints; dual quaternion skinning mitigates these at greater computational cost.
- Skin weights may be painted manually by artists or generated automatically through heat-diffusion and geodesic methods, then refined for clean deformation.
- ### Key aspects
- Vertex-to-bone weight assignment, usually normalised per vertex.
- Bind pose definition establishing the rest state.
- Linear blend versus dual quaternion deformation.
- Weight painting and automatic weight generation.
- Influence limits for real-time performance budgets.
- ### Mechanisms
- Computation of deformed vertex positions from weighted bone transforms.
- GPU skinning in vertex shaders for real-time playback.
- Corrective blend shapes layered on top of skeletal deformation.
- Export of skin clusters through interchange formats such as FBX.
- ### Applications
- Character animation in games and real-time experiences.
- Digital human and avatar deformation in spatial computing.
- Film and visual effects creature animation.
- Procedural and motion-captured performance retargeting.
- ### Relationships
- hasPart:: [[Polygon Mesh]]
- hasPart:: [[Blend Shape]]
- requires:: [[Character Rigging]]
- requires:: [[Character Model]]
- uses:: [[Geometry Processing]]
- uses:: [[Shader]]
- enables:: [[Character Animation]]
- enables:: [[Animation]]
- supports:: [[Real-Time Rendering]]
- supports:: [[Game Engine]]
- dependsOn:: [[Topology]]
- relatedTo:: [[Texture Mapping]]
- relatedTo:: [[UV Mapping]]
- relatedTo:: [[FBX]]
- relatedTo:: [[Computer Graphics]]
- bridgesTo:: [[Rendering Pipeline]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
