public:: true

# Learning Platform Categorization
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7aea0f03249714127ccbbe9fdf3c04891c5448d81d4648a6be803b084c39264f",
  "@type": "Page",
  "vc:slug": "learning-platform-categorization",
  "title": "Learning Platform Categorization",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-classification",
      "vc:label": "Metaverse Classification"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1000"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Learning Platform Categorization"
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
  "@id": "urn:ngm:class:learning-platform-categorization",
  "@type": "Class",
  "label": "Learning Platform Categorization",
  "definition": "A taxonomy of platforms and environments used to deliver educational experiences, spanning traditional learning management systems, online learning portals, virtual classrooms, immersive XR-based environments, and metaverse-native learning spaces. The categorization framework identifies dimensions such as modality (synchronous/asynchronous), immersion level, social presence, and assessment integration, enabling educators and institutions to select or compare platforms for pedagogical fit. In the spatial computing context, the taxonomy extends to cover platforms that leverage augmented reality, virtual reality, and simulated environments to enable experiential, collaborative, and gamified learning at scale.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:metaverse-classification",
      "label": "Metaverse Classification"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:learning-management-system", "label": "Learning Management System"},
      {"@id": "urn:ngm:class:virtual-classroom", "label": "Virtual Classroom"},
      {"@id": "urn:ngm:class:immersive-learning", "label": "Immersive Learning"},
      {"@id": "urn:ngm:class:online-learning", "label": "Online Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"},
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:simulation", "label": "Simulation"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-learning", "label": "Collaborative Learning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:metaverse-classification", "label": "Metaverse Classification"},
      {"@id": "urn:ngm:class:educational-technology", "label": "Educational Technology"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:learning-platform-categorization:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7aea0f03249714127ccbbe9fdf3c04891c5448d81d4648a6be803b084c39264f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Metaverse Classification]]",
      "resolved": "urn:visionflow:owl:class:metaverse-classification",
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
  - A learning platform categorization component in the Metaverse domain that enables EtsiDomainApplicationEducation.

- ### Semantic Classification
  - owl-class:: spatial-computing:LearningPlatformCategorization
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Metaverse Classification]]

- ### Content

  ## Overview

  Learning platform categorization provides a structured framework for classifying the rapidly proliferating landscape of digital education environments. Categories range from traditional learning management systems (LMS) that manage content delivery and assessment at scale, through synchronous virtual classrooms, to fully immersive XR environments that place learners inside 3D simulated contexts. Platforms are evaluated along axes such as modality (self-paced vs. live), social presence, assessment fidelity, and technical accessibility.

  ## Category Dimensions

  - **Immersion level**: Text/video (low) → virtual classroom (medium) → full VR/AR (high).
  - **Social presence**: Asynchronous forums → synchronous cohort → avatar-based co-presence in spatial environments.
  - **Content type**: Declarative knowledge, procedural simulation, collaborative project, experiential scenario.
  - **Assessment integration**: Automated quizzes, portfolio artefacts, AI-powered competency inference from behavioural traces.

  ## Metaverse-Native Platforms

  Spatial computing expands the taxonomy to include persistent metaverse campuses (e.g., VRChat Education, Mozilla Hubs, AltspaceVR) and hybrid XR platforms that overlay educational content onto the physical world via augmented reality. These platforms introduce new considerations around avatar identity, presence fidelity, and the learning effectiveness of embodied simulation versus traditional screen-based interaction.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
