public:: true

# Blend Shape

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:blend-shape", "@type":"Page", "title":"Blend Shape", "vc:slug":"blend-shape", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:blend-shape",
  "@type":"Class",
  "label":"Blend Shape",
  "definition":"A blend shape, also called a morph target, is a stored deformation of a 3D mesh that is blended with a base shape by a weighted interpolation of vertex positions. By combining multiple blend shapes at varying weights, animators produce smooth transitions between expressions and poses without altering the mesh topology. Blend shapes are central to facial animation, where subtle muscle movements are captured as named targets driven by animation rigs or performance capture.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:facial-animation","label":"Facial Animation"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:point-cloud","label":"Point Cloud"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:animation-rig","label":"Animation Rig"},
      {"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:facial-animation","label":"Facial Animation"},
      {"@id":"urn:ngm:class:character-animation","label":"Character Animation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:avatar","label":"Avatar"},
      {"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:animation","label":"Animation"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:facial-animation","label":"Facial Animation"},
      {"@id":"urn:ngm:class:character-animation","label":"Character Animation"},
      {"@id":"urn:ngm:class:avatar","label":"Avatar"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A blend shape is a stored mesh deformation interpolated against a base shape by weighted vertex offsets.
  - It is a technique within [[Facial Animation]] and a building block of [[Character Animation]].
  - It is commonly driven by an [[Animation Rig]] and complements [[Skeletal Animation]].
  - It powers expressive [[Avatar]] faces under [[Real-Time Rendering]] constraints.
- ### Overview
  - Blend shapes capture target poses of a mesh, such as a smile or a raised brow, as differences from a neutral base.
  - At render time, weights between zero and one mix several targets, producing continuous, controllable deformation.
  - Because topology stays constant, blend shapes preserve UVs and rigging, making them efficient for faces and soft deformations.
  - They are the workhorse of facial animation pipelines, often combined with skeletal rigs for full-body and head motion.
- ### Mechanisms
  - Vertex interpolation: per-vertex offsets blended linearly against the base mesh.
  - Weighted combination: multiple targets summed by independent weights to compose expressions.
  - Corrective targets: additional shapes that fix artefacts arising from combined deformations.
  - Rig binding: weights exposed as controls that animators or capture data drive over time.
  - Performance capture mapping: tracked facial markers mapped onto named blend shape weights.
- ### Applications
  - Realistic facial animation for film, games, and virtual production.
  - Driving expressive avatars in real-time social and immersive applications.
  - Lip-sync and viseme systems for speech-driven character animation.
  - Subtle soft-body deformations layered on top of skeletal rigs.
- ### Relationships
  - hasPart:: [[Point Cloud]]
  - uses:: [[Animation Rig]]
  - uses:: [[Skeletal Animation]]
  - enables:: [[Facial Animation]]
  - enables:: [[Character Animation]]
  - supports:: [[Avatar]]
  - supports:: [[Real-Time Rendering]]
  - partOf:: [[Animation]]
  - contrastsWith:: [[Skeletal Animation]]
  - relatedTo:: [[Facial Animation]]
  - relatedTo:: [[Character Animation]]
  - relatedTo:: [[Avatar]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
