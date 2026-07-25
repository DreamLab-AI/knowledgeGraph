public:: true

# Educational Narrative
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:023adf4150ba9f4d7171f92459466fd9c95e0fc9a6443b3eb331a9af1d62530a",
  "@type": "Page",
  "vc:slug": "educational-narrative",
  "title": "Educational Narrative",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:personalised-learning",
      "vc:label": "Personalised Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-learning",
      "vc:label": "Immersive Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9891"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Educational Narrative"
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
  "@id": "urn:ngm:class:educational-narrative",
  "@type": "Class",
  "label": "Educational Narrative",
  "definition": "Immersive storytelling techniques employed in metaverse learning environments that place learners within engaging storylines, utilising narrative transportation to make complex concepts more approachable and significantly improve learning outcomes through active participation.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:immersive-learning",
      "label": "Immersive Learning"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:personalised-learning",
        "label": "Personalised Learning"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:educational-narrative:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:023adf4150ba9f4d7171f92459466fd9c95e0fc9a6443b3eb331a9af1d62530a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Personalised Learning]]",
      "resolved": "urn:visionflow:linked:personalised-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Immersive Learning]]",
      "resolved": "urn:visionflow:owl:class:immersive-learning",
      "kind": "ResolvedLink"
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Immersive storytelling techniques employed in metaverse learning environments that place learners within engaging storylines, utilising narrative transportation to make complex concepts more approachable and significantly improve learning outcomes through active participation.

- ### Semantic Classification
  - owl-class:: spatial-computing:EducationalNarrative
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Immersive Learning]]
  - enables:: [[Personalised Learning]]

- ### Content

  ## Technical Details

  ### Narrative Transportation
  - Places learners within engaging storylines
  - Makes complex concepts more approachable
  - Learners become active participants shaping the narrative
  - Strengthens connection to subject matter through agency

  ### Digital Storytelling Techniques
  - Interactive content with user-influenced story progression
  - VR and AR for full immersion and heightened emotional impact
  - Non-Player Characters (NPCs) delivering educational content
  - Scenario-based learning with choice consequences

  ### Platform Implementation
  - **Classlet**: Metaverse platform designed for immersive learning experiences
  - NPC integration for varied educational tasks
  - Educator customisation of content mapped to characters
  - Question-answering and scenario-based decision-making

  ## Applications

  ### History Education
  - Social VR and interactive storytelling tools enhance historical understanding
  - Participatory exploration of historical events
  - Increased student engagement, interaction, and autonomy
  - Empathetic connection to historical figures and events

  ### Language Learning
  - Digital storytelling for language acquisition
  - Creative and interactive techniques in metaverse environments
  - Contextual learning through narrative immersion

  ### STEM Education
  - Complex scientific concepts made accessible through narrative
  - Simulation-based learning with story frameworks
  - Collaborative problem-solving narratives

  ## Pedagogical Framework

  ### Immersion Types
  - **Narrative Immersion**: Simulations and role-play
  - **Ludic Immersion**: Challenge-based, exploratory projects, games
  - **Environmental Immersion**: Realistic virtual contexts

  ### Design Considerations
  - Accessibility and inclusivity requirements
  - Long-term integration strategies
  - Assessment alignment with narrative learning objectives

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
