public:: true

# Participatory Design

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:participatory-design",
  "@type": "Page",
  "title": "Participatory Design",
  "vc:slug": "participatory-design",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:participatory-design",
  "@type": "Class",
  "label": "Participatory Design",
  "definition": "Participatory Design is a design methodology in which end-users, stakeholders, and affected communities are actively involved as co-designers throughout the design process rather than being passive subjects of research. Originating in Scandinavian workplace democracy movements of the 1970s, it prioritises the experiential knowledge of participants and seeks to produce systems that genuinely serve their needs. In digital technology and AI contexts, it is applied to ensure that systems reflect diverse human values and avoid embedding biases of the designer.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human-Computer Interaction"},
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"},
      {"@id": "urn:ngm:class:accessibility", "label": "Accessibility"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:user-research", "label": "User Research"},
      {"@id": "urn:ngm:class:prototyping", "label": "Prototyping"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:human-centred-design", "label": "Human-Centred Design"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inclusive-design", "label": "Inclusive Design"},
      {"@id": "urn:ngm:class:technology-adoption", "label": "Technology Adoption"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:policy", "label": "Policy"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:stakeholder-engagement", "label": "Stakeholder Engagement"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:expert-driven-design", "label": "Expert-Driven Design"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:co-design-workshop", "label": "Co-Design Workshop"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Participatory Design]] is a methodology that embeds end-users and stakeholders as co-creators throughout the design lifecycle, not merely as feedback sources.
  - It implements [[Human-Centred Design]] principles with a democratic ethos, drawing on Scandinavian traditions of worker participation in technology design.
  - In AI and digital systems, it is a key mechanism for operationalising [[AI Ethics]] and [[Inclusive Design]].

- ### Overview
  - Participatory Design challenges the assumption that expert designers alone can produce appropriate systems for communities they do not belong to.
  - Methods include workshops, design games, mock-ups, scenario walk-throughs, and co-authoring of requirements.
  - Power dynamics must be actively managed: tokenistic participation without real influence reproduces existing inequalities.

- ### Key Aspects
  - **Stakeholder mapping**: Identifying all affected parties, including marginalised groups.
  - **Co-design sessions**: Structured activities where participants generate and evaluate design options.
  - **Iterative validation**: Designs are repeatedly tested with participants throughout development.
  - **Mutual learning**: Designers learn domain expertise from users; users learn technological possibility space.

- ### Mechanisms
  - [[Prototyping]] enables concrete discussion of abstractions with non-technical participants.
  - [[User Research]] methods (ethnography, contextual inquiry) ground design in lived experience.
  - Facilitated [[Co-Design Workshop]] sessions generate design artefacts collaboratively.

- ### Applications
  - Community technology projects in public health, housing, and civic engagement.
  - AI fairness audits involving affected demographic communities.
  - Workplace productivity tools designed with workers rather than imposed by management.
  - [[Accessibility]] tooling developed with disabled users as primary designers.

- ### Relationships
  - relatedTo:: [[Human-Computer Interaction]]
  - relatedTo:: [[AI Ethics]]
  - relatedTo:: [[Accessibility]]
  - uses:: [[User Research]]
  - uses:: [[Prototyping]]
  - implements:: [[Human-Centred Design]]
  - enables:: [[Inclusive Design]]
  - enables:: [[Technology Adoption]]
  - supports:: [[Distributed Collaboration]]
  - supports:: [[Policy]]
  - dependsOn:: [[Stakeholder Engagement]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
