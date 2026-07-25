public:: true

# Cognitive Load

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cognitive-load", "@type":"Page", "title":"Cognitive Load", "vc:slug":"cognitive-load", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:cognitive-load",
  "@type":"Class",
  "label":"Cognitive Load",
  "definition":"Cognitive load is the total amount of working-memory resource demanded by a task, interface, or learning activity at a given moment. It is commonly decomposed into intrinsic load (inherent task difficulty), extraneous load (imposed by poor presentation), and germane load (effort devoted to building durable mental schemas). Managing cognitive load is a central goal of user-experience and interaction design, since exceeding a user's capacity degrades comprehension, accuracy, and satisfaction.",
  "domain":"spatial-computing",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:user-experience","label":"User Experience"}],
    "dependsOn":[{"@id":"urn:ngm:class:working-memory","label":"Working Memory"},{"@id":"urn:ngm:class:attention","label":"Attention"}],
    "relatedTo":[{"@id":"urn:ngm:class:mental-model","label":"Mental Model"},{"@id":"urn:ngm:class:usability","label":"Usability"},{"@id":"urn:ngm:class:human-computer-interaction","label":"Human-Computer Interaction"}],
    "affects":[{"@id":"urn:ngm:class:interaction-design","label":"Interaction Design"}],
    "supports":[{"@id":"urn:ngm:class:usability","label":"Usability"}],
    "enables":[{"@id":"urn:ngm:class:user-research","label":"User Research"}],
    "requires":[{"@id":"urn:ngm:class:attention","label":"Attention"}],
    "uses":[{"@id":"urn:ngm:class:mental-model","label":"Mental Model"}],
    "contrastsWith":[{"@id":"urn:ngm:class:affordance","label":"Affordance"}],
    "bridgesTo":[{"@id":"urn:ngm:class:ergonomics","label":"Ergonomics"}],
    "supportedBy":[{"@id":"urn:ngm:class:cognitive-walkthrough","label":"Cognitive Walkthrough"}],
    "informedBy":[{"@id":"urn:ngm:class:user-research","label":"User Research"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Cognitive load is the demand a task places on [[Working Memory]], shaping how readily a person can perceive, decide, and act within a [[User Experience]].
- It is studied through [[Human-Computer Interaction]] and reduced through deliberate [[Interaction Design]] that respects the limits of [[Attention]].
- Designers measure and manage it to protect [[Usability]] and to help users form accurate [[Mental Model]] representations.
- ### Overview
- Cognitive load theory originates in educational psychology and has been widely adopted in interface and spatial-computing design.
- Working memory holds only a few items at once, so any interface that forces users to remember state, track scattered information, or decode ambiguous controls increases load.
- The three classic components are intrinsic load (task complexity that cannot be removed), extraneous load (avoidable burden from layout, jargon, or distraction), and germane load (productive effort that consolidates learning).
- Good design minimises extraneous load, paces intrinsic load, and channels remaining capacity toward germane schema-building.
- In immersive and spatial computing, depth, motion, and field-of-view introduce additional perceptual load that compounds the cognitive demand of the underlying task.
- ### Key aspects
- Intrinsic load — irreducible difficulty arising from the task itself and the user's prior knowledge.
- Extraneous load — burden added by presentation choices such as clutter, inconsistent layout, or unnecessary steps.
- Germane load — effort that builds transferable understanding and durable schemas.
- Chunking and progressive disclosure reduce the number of items held in [[Working Memory]] at once.
- Signalling and consistency reduce the search effort users spend locating controls and information.
- Measurement methods include subjective rating scales, dual-task probes, and physiological indicators such as pupil dilation.
- ### Applications
- Form and dialogue design that breaks long workflows into manageable steps.
- Information architecture and navigation that keep choices within comfortable limits.
- Onboarding and tutorials that pace intrinsic difficulty while building schemas.
- Immersive AR/VR interfaces where perceptual demand must be balanced against task demand.
- Accessibility work that lowers load for users with differing attentional or memory capacities.
- ### Relationships
- partOf:: [[User Experience]]
- dependsOn:: [[Working Memory]]
- dependsOn:: [[Attention]]
- relatedTo:: [[Mental Model]]
- relatedTo:: [[Usability]]
- relatedTo:: [[Human-Computer Interaction]]
- affects:: [[Interaction Design]]
- supports:: [[Usability]]
- enables:: [[User Research]]
- requires:: [[Attention]]
- uses:: [[Mental Model]]
- contrastsWith:: [[Affordance]]
- bridgesTo:: [[Ergonomics]]
- supportedBy:: [[Cognitive Walkthrough]]
- informedBy:: [[User Research]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
