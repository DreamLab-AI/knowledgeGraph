public:: true

# Competency Based Education

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:competency-based-education",
  "@type": "Page",
  "title": "Competency Based Education",
  "vc:slug": "competency-based-education",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:competency-based-education",
  "@type": "Class",
  "label": "Competency Based Education",
  "definition": "Competency-Based Education is an instructional model that grants progression and credentials based on demonstrated mastery of defined competencies rather than time spent in instruction. Learners advance when they can prove they have met explicit, measurable outcomes, often supported by personalised pacing and frequent assessment. The approach relies on learning analytics and educational technology to track and verify competency attainment.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:education-technology",
      "label": "Education Technology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:education-technology",
        "label": "Education Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:adaptive-learning",
        "label": "Adaptive Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:learning-analytics",
        "label": "Learning Analytics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:learning-management-system",
        "label": "Learning Management System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:learning-management-system",
        "label": "Learning Management System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:adaptive-learning",
        "label": "Adaptive Learning"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Competency-Based Education is an instructional model that grants progression and credentials based on demonstrated mastery of defined competencies rather than time spent in instruction.
  - Related concepts: [[Education Technology]] [[Adaptive Learning]] [[Learning Management System]] [[Learning Analytics]] [[Artificial Intelligence]]
- ### Overview
  - Competency-Based Education is an instructional model that grants progression and credentials based on demonstrated mastery of defined competencies rather than time spent in instruction.
  - Learners advance when they can prove they have met explicit, measurable outcomes, often supported by personalised pacing and frequent assessment.
  - The approach relies on learning analytics and educational technology to track and verify competency attainment.
  - It is modelled as a subclass of [[Education Technology]] within the artificial-intelligence domain.
- ### Key aspects
  - [[Learning Management System]] is a constituent or mechanism relevant to Competency Based Education.
- ### Mechanisms
  - Competency Based Education enables [[Adaptive Learning]].
  - Competency Based Education supports [[Learning Analytics]].
- ### Applications
  - Applied in contexts involving [[Adaptive Learning]].
  - Applied in contexts involving [[Learning Analytics]].
  - Applied in contexts involving [[Artificial Intelligence]].
- ### Relationships
  - subClassOf:: [[Education Technology]]
  - partOf:: [[Education Technology]]
  - enables:: [[Adaptive Learning]]
  - supports:: [[Learning Analytics]]
  - uses:: [[Learning Management System]]
  - relatedTo:: [[Artificial Intelligence]]
  - dependsOn:: [[Learning Management System]]
  - contrastsWith:: [[Adaptive Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
