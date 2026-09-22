public:: true

# Keyframe Animation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:keyframe-animation", "@type":"Page", "title":"Keyframe Animation", "vc:slug":"keyframe-animation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:keyframe-animation",
  "@type":"Class",
  "label":"Keyframe Animation",
  "definition":"Keyframe animation is a technique in which an animator specifies an object's properties at a set of significant frames, called keyframes, and the system interpolates the in-between frames automatically. Property values such as position, rotation, and scale are stored on timed curves whose interpolation and easing control the motion between keys. It is a foundational method for authoring deterministic, repeatable motion in computer graphics and real-time engines.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:animation","label":"Animation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:animation","label":"Animation"}],
    "hasPart":[{"@id":"urn:ngm:class:interpolation","label":"Interpolation"}],
    "uses":[{"@id":"urn:ngm:class:interpolation","label":"Interpolation"}],
    "requires":[{"@id":"urn:ngm:class:interpolation","label":"Interpolation"}],
    "enables":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"}],
    "supports":[{"@id":"urn:ngm:class:rendering","label":"Rendering"},{"@id":"urn:ngm:class:computer-graphics","label":"Computer Graphics"}],
    "implements":[{"@id":"urn:ngm:class:animation","label":"Animation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:motion-capture","label":"Motion Capture"},{"@id":"urn:ngm:class:procedural-generation","label":"Procedural Generation"}],
    "relatedTo":[{"@id":"urn:ngm:class:motion-capture","label":"Motion Capture"},{"@id":"urn:ngm:class:usd","label":"USD"},{"@id":"urn:ngm:class:spatial-computing","label":"Spatial Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Keyframe animation defines motion by setting property values at chosen frames and interpolating the rest. It is a core method of [[Animation]] in [[Computer Graphics]], relying on [[Interpolation]] to fill the frames between keys.
- It gives animators precise, repeatable control over how objects change over time.
- ### Overview
- An animator places keyframes at the moments where a property reaches a meaningful value, leaving the system to generate the transitions.
- Each animated property is stored as a curve of time-value pairs; the curve's shape and easing determine the feel of the motion.
- Because the result is deterministic, the same timeline plays back identically every time.
- ### Key aspects
- Keys: explicit property values pinned to specific times.
- Interpolation: the method used to compute in-between values via [[Interpolation]].
- Easing: curve shaping that accelerates or decelerates motion for natural feel.
- Channels: separate curves for position, rotation, scale, and other properties.
- ### Mechanisms
- Linear interpolation produces constant-rate transitions between keys.
- Spline and Bezier curves yield smooth, controllable acceleration.
- Curve editors let animators reshape tangents and easing per channel.
- Animation clips can be blended and layered for complex behaviour.
- ### Applications
- Authoring character and object motion in games and XR scenes.
- Driving [[Skeletal Animation]] by keying bone transforms.
- Camera moves, UI transitions, and cinematic sequences.
- Interchange of animated assets through formats such as [[USD]].
- ### Relationships
- partOf:: [[Animation]]
- hasPart:: [[Interpolation]]
- uses:: [[Interpolation]]
- requires:: [[Interpolation]]
- enables:: [[Skeletal Animation]]
- supports:: [[Rendering]]
- supports:: [[Computer Graphics]]
- implements:: [[Animation]]
- bridgesTo:: [[Skeletal Animation]]
- contrastsWith:: [[Motion Capture]]
- contrastsWith:: [[Procedural Generation]]
- relatedTo:: [[Motion Capture]]
- relatedTo:: [[USD]]
- relatedTo:: [[Spatial Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
