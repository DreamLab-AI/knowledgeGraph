public:: true

# Blend Tree
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:blend-tree", "@type":"Page", "title":"Blend Tree", "vc:slug":"blend-tree", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:blend-tree",
  "@type":"Class",
  "label":"Blend Tree",
  "definition":"A blend tree is a structure within an animation system that smoothly blends multiple animation clips according to one or more continuous parameters, producing a single output pose. It is commonly used for locomotion, where clips such as idle, walk and run are interpolated by speed and direction to avoid abrupt transitions. Blend trees are typically composed within an animation controller alongside state machines that govern when each tree is active.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:animation","label":"Animation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:animation-controller","label":"Animation Controller"}],
    "hasPart":[{"@id":"urn:ngm:class:keyframe-animation","label":"Keyframe Animation"}],
    "uses":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"},{"@id":"urn:ngm:class:keyframe-animation","label":"Keyframe Animation"}],
    "requires":[{"@id":"urn:ngm:class:animation-controller","label":"Animation Controller"}],
    "enables":[{"@id":"urn:ngm:class:locomotion","label":"Locomotion"},{"@id":"urn:ngm:class:procedural-animation","label":"Procedural Animation"}],
    "supports":[{"@id":"urn:ngm:class:character-animation","label":"Character Animation"}],
    "dependsOn":[{"@id":"urn:ngm:class:game-engine","label":"Game Engine"}],
    "implements":[{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"}],
    "relatedTo":[{"@id":"urn:ngm:class:motion-capture","label":"Motion Capture"},{"@id":"urn:ngm:class:inverse-kinematics","label":"Inverse Kinematics"},{"@id":"urn:ngm:class:unity","label":"Unity"},{"@id":"urn:ngm:class:unreal-engine","label":"Unreal Engine"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- A blend tree blends multiple [[Animation]] clips by continuous parameters into one output pose, typically for [[Locomotion]]. It sits within an [[Animation Controller]] and uses [[Skeletal Animation]] driven by an engine such as [[Unity]] or [[Unreal Engine]].
- ### Overview
- Switching between discrete animation clips produces visible popping; blend trees solve this by interpolating between clips along parameters such as speed and direction.
- A common case is a one-dimensional locomotion tree blending idle, walk and run by movement speed; two-dimensional trees add directional blending for strafing.
- Blend trees are usually nested inside an animation controller's state machine, which selects which tree drives the character at a given moment.
- ### Key aspects
- Parameter-driven interpolation between multiple clips.
- One- and two-dimensional blending for speed and direction.
- Composition within an animation controller and state machine.
- Real-time evaluation each frame for responsive characters.
- ### Applications
- Smooth character locomotion in games and virtual environments.
- Directional movement, strafing and turning blends.
- Combining captured and authored clips for natural motion.
- ### Relationships
- partOf:: [[Animation Controller]]
- hasPart:: [[Keyframe Animation]]
- uses:: [[Skeletal Animation]]
- uses:: [[Keyframe Animation]]
- requires:: [[Animation Controller]]
- enables:: [[Locomotion]]
- enables:: [[Procedural Animation]]
- supports:: [[Character Animation]]
- dependsOn:: [[Game Engine]]
- implements:: [[Real-Time Rendering]]
- relatedTo:: [[Motion Capture]]
- relatedTo:: [[Inverse Kinematics]]
- relatedTo:: [[Unity]]
- relatedTo:: [[Unreal Engine]]
- ### Provenance
- updated:: 2026-06-15
