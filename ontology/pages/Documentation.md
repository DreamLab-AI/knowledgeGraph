public:: true

# Documentation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:documentation", "@type":"Page", "title":"Documentation", "vc:slug":"documentation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:documentation",
  "@type":"Class",
  "label":"Documentation",
  "definition":"Documentation is the structured body of written, diagrammatic, or interactive material that describes the purpose, design, behaviour, and use of a system, dataset, process, or software artefact. It serves as the primary medium through which knowledge about an artefact is transferred between its creators and its users, maintainers, and auditors. Effective documentation spans reference material, conceptual explanations, tutorials, and procedural guides, and is increasingly treated as a versioned, testable component of the artefact itself rather than an afterthought.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data","label":"Data"}],
  "relations":{
    "supports":[{"@id":"urn:ngm:class:reproducibility","label":"Reproducibility"},{"@id":"urn:ngm:class:knowledge-management","label":"Knowledge Management"}],
    "requires":[{"@id":"urn:ngm:class:version-control","label":"Version Control"},{"@id":"urn:ngm:class:metadata","label":"Metadata"}],
    "dependsOn":[{"@id":"urn:ngm:class:data","label":"Data"}],
    "enables":[{"@id":"urn:ngm:class:maintainability","label":"Maintainability"}],
    "uses":[{"@id":"urn:ngm:class:markdown","label":"Markdown"},{"@id":"urn:ngm:class:static-site-generation","label":"Static Site Generation"}],
    "hasPart":[{"@id":"urn:ngm:class:api-reference","label":"API Reference"},{"@id":"urn:ngm:class:tutorial","label":"Tutorial"}],
    "relatedTo":[{"@id":"urn:ngm:class:technical-writing","label":"Technical Writing"},{"@id":"urn:ngm:class:reproducible-research","label":"Reproducible Research"}],
    "contrastsWith":[{"@id":"urn:ngm:class:tribal-knowledge","label":"Tribal Knowledge"}],
    "standardizedBy":[{"@id":"urn:ngm:class:standards","label":"Standards"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Documentation is the structured corpus of material that describes how an artefact works and how to use it, bridging [[Data]] producers and consumers.
  - It is a first-class, versioned component of modern software and research practice, supporting [[Reproducibility]] and [[Knowledge Management]].
  - Good documentation reduces reliance on [[Tribal Knowledge]] and lowers the cost of [[Onboarding]].
- ### Overview
  - Documentation captures the intent, structure, and operation of systems so that knowledge survives the departure of its original authors and scales beyond a single team.
  - It exists along a spectrum from machine-extractable inline comments and docstrings to standalone reference manuals, design records, and narrative guides.
  - The "docs-as-code" paradigm treats documentation sources as plain-text files held under [[Version Control]], reviewed alongside code, and published through automated pipelines.
  - Documentation quality is a measurable property: completeness, accuracy, currency, discoverability, and audience fit all contribute to its value.
- ### Key aspects
  - Reference documentation describes every interface, parameter, and configuration option precisely, often generated from source annotations.
  - Conceptual documentation explains the mental model and architecture behind a system, providing the "why" rather than the "how".
  - Procedural documentation (how-to guides and runbooks) walks readers through accomplishing concrete tasks.
  - Tutorials provide guided, learning-oriented paths for newcomers.
  - [[Metadata]] and structured annotations make documentation searchable and linkable.
- ### Mechanisms
  - Authoring in lightweight markup such as [[Markdown]] or reStructuredText keeps sources diffable and reviewable.
  - [[Static Site Generation]] transforms source files into navigable, searchable websites.
  - API documentation generators extract signatures and comments directly from source to keep reference material synchronised with code.
  - Continuous integration can lint prose, check links, and test embedded code samples, treating documentation defects as build failures.
- ### Applications
  - Software libraries and platforms ship reference docs, tutorials, and migration guides to enable adoption.
  - Research projects publish methods, environments, and analysis steps to support [[Reproducible Research]].
  - Operations teams maintain runbooks and incident playbooks as living documentation.
  - Datasets are accompanied by data dictionaries and provenance records expressed as [[Metadata]].
- ### Relationships
  - subClassOf:: [[Data]]
  - supports:: [[Reproducibility]]
  - supports:: [[Knowledge Management]]
  - requires:: [[Version Control]]
  - requires:: [[Metadata]]
  - dependsOn:: [[Data]]
  - enables:: [[Onboarding]]
  - enables:: [[Maintainability]]
  - uses:: [[Markdown]]
  - uses:: [[Static Site Generation]]
  - hasPart:: [[API Reference]]
  - hasPart:: [[Tutorial]]
  - relatedTo:: [[Technical Writing]]
  - relatedTo:: [[Reproducible Research]]
  - contrastsWith:: [[Tribal Knowledge]]
  - standardizedBy:: [[Standards]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
