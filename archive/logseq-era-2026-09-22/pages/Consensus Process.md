public:: true

# Consensus Process
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:consensus-process",
  "@type": "Page",
  "title": "Consensus Process",
  "vc:slug": "consensus-process",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:consensus-process",
  "@type": "Class",
  "label": "Consensus Process",
  "definition": "A consensus process is the structured, participatory procedure by which a standards body or governance group develops, refines, and adopts decisions through deliberation aimed at broad agreement rather than narrow majority voting. It gathers stakeholder input, circulates drafts for review and public comment, resolves objections substantively, and seeks a state of general acceptance — often characterised as rough consensus — where remaining dissent has been heard and addressed. The process underpins the legitimacy and durability of open standards by ensuring decisions reflect the considered views of affected parties rather than the preferences of a dominant actor.",
  "domain": "standards",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:working-group",
        "label": "Working Group"
      },
      {
        "@id": "urn:ngm:class:public-comment",
        "label": "Public Comment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:stakeholder-engagement",
        "label": "Stakeholder Engagement"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:deliberation",
        "label": "Deliberation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:open-standards",
        "label": "Open Standards"
      },
      {
        "@id": "urn:ngm:class:technical-standard",
        "label": "Technical Standard"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:rough-consensus",
        "label": "Rough Consensus"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:consensus-building",
      "label": "Consensus Building"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A consensus process is the structured, participatory procedure by which a [[Standards Body]] develops and adopts decisions through [[Deliberation]] aimed at broad agreement rather than narrow majority [[Voting]]. It depends on [[Stakeholder Engagement]], circulates drafts for [[Public Comment]], and resolves objections substantively to reach a state of general acceptance — often [[Rough Consensus]]. The process gives [[Open Standards]] their legitimacy and is a core practice within the [[Standards]] domain.

- ### Overview
  - Consensus-based development distinguishes open standards organisations from proprietary or single-vendor specifications by requiring decisions to reflect the considered agreement of affected parties.
  - Different bodies formalise consensus differently: the IETF works by rough consensus and running code, ISO uses graduated balloting with comment resolution, and the W3C combines working-group consensus with formal objections.
  - The aim is not unanimity but the absence of sustained, reasoned objection — dissent must be heard and addressed, not necessarily eliminated.
  - A robust consensus process trades speed for durability and adoption: standards that emerge from inclusive deliberation are more widely trusted and implemented.

- ### Key aspects
  - #### Participation
    - Open, multi-stakeholder participation drawing on implementers, users, and domain experts through [[Stakeholder Engagement]].
  - #### Deliberation and comment
    - Iterative drafting with structured [[Public Comment]] periods and documented [[Deliberation]] over each substantive issue.
  - #### Objection handling
    - Formal mechanisms to record, address, and where necessary overrule objections, distinguishing reasoned dissent from obstruction.
  - #### Consensus assessment
    - Chairs or editors judge when [[Rough Consensus]] has been reached, balancing inclusiveness against the need to progress.

- ### Mechanisms
  - #### Working groups
    - A [[Working Group]] convenes participants to draft and refine specifications under a defined charter and process rules.
  - #### Draft and review cycles
    - Successive drafts circulate for review; comment resolution logs show how each issue was handled before advancement.
  - #### Balloting
    - Some bodies use [[Voting]] or balloting as a procedural backstop, but consensus — not the vote count — is the substantive test of [[Decision Making]].

- ### Applications
  - **Internet protocol development** — the [[IETF]] advances RFCs through rough consensus and running code.
  - **International standards** — [[ISO]] and IEC develop standards via national-body consensus and formal comment resolution.
  - **Web platform standards** — the W3C and WHATWG reconcile browser-vendor and developer input to maintain [[Interoperability]].
  - **Industry consortia** — sector bodies use consensus to agree shared [[Technical Standard]] baselines among competitors.
  - **Open-source governance** — many projects adopt consensus-seeking decision processes for technical direction.

- ### Relationships
  - hasPart:: [[Working Group]]
  - hasPart:: [[Public Comment]]
  - dependsOn:: [[Stakeholder Engagement]]
  - dependsOn:: [[Consensus]]
  - requires:: [[Stakeholder Engagement]]
  - requires:: [[Decision Making]]
  - requires:: [[Deliberation]]
  - enables:: [[Open Standards]]
  - enables:: [[Technical Standard]]
  - uses:: [[Rough Consensus]]
  - uses:: [[Voting]]
  - implements:: [[Standards Body]]
  - supports:: [[Interoperability]]
  - relatedTo:: [[IETF]]
  - relatedTo:: [[ISO]]
  - contrastsWith:: [[Voting]]

- ### Provenance
  - sources:: IETF RFC 7282 (On Consensus and Humming in the IETF); ISO/IEC Directives Part 1 (consensus and balloting); W3C Process Document
  - updated:: 2026-06-15
