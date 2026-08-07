public:: true

# Separation of Concerns
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b0c30c1ec77763a6ea96d80bbc70a25bcda736fdfa77aa1630dbc18c989c4b86",
  "@type": "Page",
  "vc:slug": "separation-of-concerns",
  "title": "Separation of Concerns",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    },
    {
      "@id": "urn:visionflow:linked:component",
      "vc:label": "Component"
    },
    {
      "@id": "urn:visionflow:linked:osi-model",
      "vc:label": "OSI Model"
    },
    {
      "@id": "urn:visionflow:linked:hardware-abstraction-layer",
      "vc:label": "Hardware Abstraction Layer"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:separation-of-concerns",
  "@type": "Class",
  "label": "Separation of Concerns",
  "definition": "A foundational design principle holding that a system should be decomposed so that each part addresses a single, distinct concern — one aspect of functionality or one axis of decision-making — with minimal overlap between parts. Articulated by Dijkstra in 1974, it underlies modularity, layering, encapsulation, and interface design: by isolating concerns behind boundaries, changes to one concern can be made, understood, tested, and reused without cascading through the rest of the system.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:software-architecture",
    "label": "Software Architecture"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:component",
        "label": "Component"
      },
      {
        "@id": "urn:ngm:class:osi-model",
        "label": "OSI Model"
      },
      {
        "@id": "urn:ngm:class:hardware-abstraction-layer",
        "label": "Hardware Abstraction Layer"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A foundational design principle holding that a system should be decomposed so that each part addresses a single, distinct concern — one aspect of functionality or one axis of decision-making — with minimal overlap between parts. Articulated by Dijkstra in 1974, it underlies modularity, layering, encapsulation, and interface design: by isolating concerns behind boundaries, changes to one concern can be made, understood, tested, and reused without cascading through the rest of the system."

- ### Semantic Classification
  - owl-class:: infrastructure:SeparationOfConcerns
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Software Architecture]]
  - enables:: [[Interoperability]]
  - related-to:: [[Component]], [[OSI Model]], [[Hardware Abstraction Layer]]

- ### Content

  ## Definition

  **Separation of concerns** is the principle that a well-designed system dedicates each of its parts to one concern and keeps distinct concerns apart. Edsger Dijkstra introduced the phrase in "On the role of scientific thought" (1974), describing the discipline of "focusing one's attention upon some aspect" of a problem while deliberately setting others aside — not because the other aspects do not matter, but because a human mind reasons reliably about only one at a time. The principle converts that cognitive strategy into an architectural one: the structure of the system should mirror the structure of the concerns.

  Its fingerprints are on most of software engineering's load-bearing ideas. Parnas's information hiding (1972) prescribes drawing module boundaries around design decisions likely to change; layering separates levels of abstraction, as in the [[OSI Model]]'s seven independently specified network layers or a [[Hardware Abstraction Layer]] that isolates device specifics from application logic; patterns such as model-view-controller separate domain state from presentation from input handling; and a [[Component]] is precisely a unit that owns one concern behind a defined interface. Where concerns resist clean decomposition — logging, security, transactions cutting across many modules — aspect-oriented programming and middleware exist specifically to re-separate these "cross-cutting concerns".

  The payoff is change-tolerance: when one concern lives in one place, a modification touches one module, a defect is localised by construction, teams can work in parallel, and parts can be replaced independently — which is also why separated, well-specified boundaries are a precondition for [[Interoperability]] between independently built systems.

  ## Technical Details

  - **Symptoms of violation**: coupling metrics rising, "shotgun surgery" (one logical change edits many files), god objects, business logic embedded in UI or SQL, and duplicated knowledge across layers.
  - **Mechanisms of enforcement**: module systems and visibility rules, interface/implementation splits, dependency inversion, service boundaries in microservice architectures, and schema contracts between producers and consumers.
  - **Related principles**: single responsibility principle (SoC applied at class level), high cohesion/low coupling, information hiding, and orthogonality; Kiczales et al.'s aspect-oriented programming (1997) addresses concerns that cross-cut a dominant decomposition.
  - **Limits**: every decomposition privileges one dimension of concern ("tyranny of the dominant decomposition"); over-separation produces indirection-heavy designs where a single behaviour is smeared across many trivial parts, so the principle is applied against expected axes of change, not maximally.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
