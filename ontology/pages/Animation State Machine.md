public:: true

# Animation State Machine

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:animation-state-machine", "@type":"Page", "title":"Animation State Machine", "vc:slug":"animation-state-machine", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:animation-state-machine",
  "@type":"Class",
  "label":"Animation State Machine",
  "definition":"An animation state machine is a graph of discrete animation states and the transitions between them, used in real-time engines to drive a character or object's motion based on game logic, input and parameters. Each state references a clip or blend tree, and transitions carry conditions, blend durations and interruption rules that govern how one motion flows into another. It separates high-level behaviour authoring from low-level pose evaluation, making locomotion and action systems tractable to build and tune.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:state-machine","label":"State Machine"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:character-animation","label":"Character Animation"}],
    "hasPart":[{"@id":"urn:ngm:class:blend-tree","label":"Blend Tree"}],
    "requires":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"}],
    "enables":[{"@id":"urn:ngm:class:character-animation","label":"Character Animation"}],
    "uses":[{"@id":"urn:ngm:class:blend-tree","label":"Blend Tree"}],
    "dependsOn":[{"@id":"urn:ngm:class:game-engine","label":"Game Engine"}],
    "supports":[{"@id":"urn:ngm:class:game-engine","label":"Game Engine"}],
    "implements":[{"@id":"urn:ngm:class:finite-state-machine","label":"Finite State Machine"}],
    "relatedTo":[{"@id":"urn:ngm:class:skeletal-animation","label":"Skeletal Animation"},{"@id":"urn:ngm:class:finite-state-machine","label":"Finite State Machine"}],
    "bridgesTo":[{"@id":"urn:ngm:class:unreal-engine","label":"Unreal Engine"}],
    "contrastsWith":[{"@id":"urn:ngm:class:blend-tree","label":"Blend Tree"}],
    "standardizedBy":[{"@id":"urn:ngm:class:game-engine","label":"Game Engine"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - An animation state machine is a [[State Machine]] specialised for driving [[Character Animation]] in real-time engines.
  - Its nodes are animation states, each referencing a clip or a [[Blend Tree]], and its edges are conditioned transitions that blend between motions.
  - It applies the formal model of a [[Finite State Machine]] to the problem of selecting and crossfading [[Skeletal Animation]] poses.
- ### Overview
  - Animation state machines let designers author character behaviour as a readable graph rather than as imperative code. A state such as "Idle", "Walk" or "Jump" plays an associated motion, and transitions fire when parameters like speed or a jump trigger cross thresholds.
  - During each frame the machine evaluates the active state, advances any in-progress transition, and produces a final pose by blending the contributing clips.
  - The pattern is a standard feature of major engines, where it sits above the pose-evaluation layer and below gameplay logic that sets the driving parameters.
- ### Key aspects
  - States: each maps to a clip or a parameterised [[Blend Tree]] that selects motion by continuous inputs.
  - Transitions: directed edges carrying boolean or threshold conditions, blend durations and interruption settings.
  - Parameters: floats, bools and triggers exposed to gameplay code that drive transition conditions.
  - Layers and masks: parallel sub-machines applied to bone subsets, for example an upper-body aim over a lower-body locomotion.
  - Determinism: behaviour is reproducible given identical parameter histories, aiding debugging and networking.
- ### Mechanisms
  - On each update the machine resolves the current state, computes transition progress, and asks contributing nodes for poses.
  - Crossfade blending interpolates between source and destination poses over the transition duration.
  - A [[Blend Tree]] within a state mixes clips by continuous parameters such as movement direction or speed.
  - The result feeds the [[Skeletal Animation]] system, which applies the blended pose to the skeleton.
- ### Applications
  - Player and NPC locomotion in games built on a [[Game Engine]].
  - Avatar motion in virtual and augmented reality experiences.
  - Cinematic and gameplay action sequencing in [[Unreal Engine]] and comparable tools.
  - Procedural creature and crowd behaviour driven by gameplay parameters.
- ### Relationships
  - partOf:: [[Character Animation]]
  - hasPart:: [[Blend Tree]]
  - requires:: [[Skeletal Animation]]
  - enables:: [[Character Animation]]
  - uses:: [[Blend Tree]]
  - dependsOn:: [[Game Engine]]
  - supports:: [[Game Engine]]
  - implements:: [[Finite State Machine]]
  - relatedTo:: [[Skeletal Animation]]
  - relatedTo:: [[Finite State Machine]]
  - bridgesTo:: [[Unreal Engine]]
  - contrastsWith:: [[Blend Tree]]
  - standardizedBy:: [[Game Engine]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
