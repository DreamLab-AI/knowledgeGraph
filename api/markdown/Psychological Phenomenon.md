public:: true

# Psychological Phenomenon
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6f92eba96474d65891129f09513871dd93385e162d0059e43ecc4e197d2b396c",
  "@type": "Page",
  "vc:slug": "psychological-phenomenon",
  "title": "Psychological Phenomenon",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9127"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Psychological Phenomenon"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:psychological-phenomenon",
  "@type": "Class",
  "label": "Psychological Phenomenon",
  "definition": "A Psychological Phenomenon, in the context of spatial computing, denotes any observable, reproducible effect on cognition, emotion, or behaviour that arises from interaction with immersive virtual environments. Established examples include the Proteus Effect (avatar-driven behavioural conformity), simulator sickness (sensorimotor conflict), flow states, social presence, and embodiment illusions. Understanding these phenomena is foundational to ethical metaverse design, therapeutic XR applications, and the study of human-computer interaction at scale.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    },
    {
      "@id": "urn:ngm:class:digital-human-avatar-representation",
      "label": "Humans, Avatars , Character"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:proteus-effect", "label": "Proteus Effect"},
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:vr-psychology", "label": "VR Psychology"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"},
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"},
      {"@id": "urn:ngm:class:emotional-immersion", "label": "Emotional Immersion"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:behavioral-modeling", "label": "Behavioral Modeling"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:psychological-phenomenon:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6f92eba96474d65891129f09513871dd93385e162d0059e43ecc4e197d2b396c"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A Psychological Phenomenon, in the context of spatial computing, denotes any observable, reproducible effect on cognition, emotion, or behaviour arising from interaction with immersive virtual environments. Established examples include the Proteus Effect (avatar-driven behavioural conformity), simulator sickness (sensorimotor conflict), flow states, social presence, and embodiment illusions. Understanding these phenomena is foundational to ethical metaverse design and therapeutic XR applications.

- ### Semantic Classification
  - owl-class:: infrastructure:PsychologicalPhenomenon
  - owl-role:: Concept

- ### Relationships
  - hasPart:: [[Proteus Effect]], [[Social Presence]], [[VR Psychology]]
  - relatedTo:: [[Immersive Experience]], [[Cognitive Science]], [[Emotional Immersion]], [[Embodied AI]]
  - enables:: [[Behavioral Modeling]]

- ### Content
  # PsychologicalPhenomenon
  PsychologicalPhenomenon encompasses the cognitive, emotional, and behavioral impacts of immersive Metaverse experiences on human psychology and social dynamics. Key phenomena include sense of presence—the subjective experience of "being there" in virtual space influenced by visual fidelity, spatial audio, and interaction agency; embodiment and ownership of virtual avatars affecting self-perception and behavior; the Proteus Effect where avatar appearance influences real behavioral patterns (e.g., taller avatars increase confidence); social presence enabling emotional connection with others despite physical distance; cognitive load from novel 3D interfaces requiring spatial reasoning; simulator sickness caused by sensory conflicts between visual motion and vestibular input; and flow states where users achieve deep engagement and time distortion during immersive activities. Research examines positive outcomes including enhanced empathy through perspective-taking, improved learning through experiential simulation, reduced social anxiety in controlled environments, and therapeutic applications for phobias and PTSD. Negative effects under study include dissociation from physical reality, addiction patterns similar to gaming disorders, identity confusion, privacy boundary erosion, and potential for manipulation through behavioral tracking. Understanding these phenomena informs ethical design promoting psychological wellbeing, accessibility accommodations, and age-appropriate experiences.
  - https://www.frontiersin.org/journals/virtual-reality - Frontiers in Virtual Reality peer-reviewed research
  - https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=6046 - IEEE VR conference proceedings
  - https://journals.sagepub.com/home/crx - Cyberpsychology, Behavior, and Social Networking journal
  - https://psycnet.apa.org/ - APA PsycNet database of psychology research

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
