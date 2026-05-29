public:: true

# C4 Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c4-model",
  "@type": "Page",
  "vc:slug": "c4-model",
  "title": "C4 Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:c4-model",
  "@type": "Class",
  "label": "C4 Model",
  "definition": "The C4 Model is a hierarchical software architecture notation system developed by Simon Brown that uses four abstraction levels — Context, Containers, Components, and Code — to describe and communicate the structure of a software system at progressively increasing levels of technical detail. Each level targets a different audience, from non-technical stakeholders at the Context level to developers at the Code level, using a minimal, tool-agnostic set of diagram elements that are easy to reason about and keep up to date.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:diagrams-as-code", "label": "Diagrams as Code"},
      {"@id": "urn:ngm:class:structurizr-dsl", "label": "Structurizr DSL"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:documentation-generation", "label": "Documentation Generation"},
      {"@id": "urn:ngm:class:documentation-standards", "label": "Documentation Standards"}
    ],
    "relatedTo": [{"@id": "urn:ngm:class:enterprise-architecture", "label": "Enterprise Architecture"}]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[C4 Model]] is a lightweight, pragmatic approach to [[Software Architecture]] documentation that organises diagrams into four named levels of abstraction. The Context diagram shows how a system interacts with its users and external systems. The Container diagram decomposes the system into deployable units — web applications, databases, microservices — and their interactions. The Component diagram further decomposes a container into its internal structural components. The Code diagram, optional and often auto-generated, corresponds to UML class or entity-relationship diagrams. Each level deliberately reuses a small vocabulary of notation elements (person, system, container, component, relationship), making diagrams readable without extensive legend study.

- ### Relationships
  - The C4 Model is a methodology within [[Software Architecture]] practice. Its primary tooling ecosystem centres on [[Diagrams as Code]] approaches — most prominently the [[Structurizr DSL]], created by C4 Model author Simon Brown — which allow architecture models to be version-controlled alongside source code. Diagram-as-code renderers then generate SVG or PNG outputs for embedding in wikis or [[Documentation Generation]] pipelines, supporting [[Documentation Standards]] compliance. The model is also consistent with and complementary to [[Enterprise Architecture]] frameworks such as TOGAF, providing the technical architecture views that those frameworks require.

- ### Content
  - The C4 Model was developed by Simon Brown between approximately 2006 and 2011, drawing on his experience as an independent software architecture consultant who observed that teams frequently lacked consistent, comprehensible documentation of their systems. Brown was dissatisfied with the complexity and steep learning curve of UML, particularly for communicating with non-developers, and sought a simpler notation that non-architects could understand whilst still providing precision for technical teams. The model was formally published around 2018 through the c4model.com website and has been widely adopted in the UK software engineering community.

  - Technically, the C4 Model is notation-agnostic: the four levels can be drawn in any diagramming tool (Lucidchart, draw.io, PlantUML, Mermaid). The official tooling ecosystem centres on Structurizr, which implements a C4-aware workspace model — a single data model from which all four diagram levels are derived, ensuring consistency across views. The Structurizr DSL is a text-based domain-specific language for describing the workspace; Structurizr Lite and the open-source Structurizr-on-premises provide self-hosted rendering. C4-PlantUML and C4-Mermaid provide alternative rendering backends for teams already using those tools.

  - In the broader ecosystem, C4 has been adopted by organisations across financial services, government, and technology sectors as a replacement for ad-hoc whiteboard diagrams and inconsistent Visio drawings. It integrates well with agile documentation practices (Architecture Decision Records, lightweight architecture wikis) and with continuous documentation pipelines where diagrams are generated from code as part of CI/CD. The model's focus on infrastructure-level containers (not Docker containers specifically, though the terminology overlaps) maps naturally onto cloud-native deployment patterns using Kubernetes namespaces and microservice deployments.

  - From 2024–2025, the C4 Model continues to gain traction as teams seek to balance documentation thoroughness with maintenance burden. AI-assisted tooling is being applied to auto-generate initial C4 diagrams from codebase analysis, reducing the cold-start effort of documenting legacy systems. The model's simplicity also makes it amenable to AI reasoning about system structure — LLMs can be prompted to generate Structurizr DSL from natural language system descriptions with reasonable fidelity. Extensions to the model, such as deployment diagrams and dynamic diagrams, have been formalised, broadening its applicability without compromising the core simplicity principle.

