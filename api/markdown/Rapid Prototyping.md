public:: true

# Rapid Prototyping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rapid-prototyping",
  "@type": "Page",
  "vc:slug": "rapid-prototyping",
  "title": "Rapid Prototyping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rapid-prototyping",
  "@type": "Class",
  "label": "Rapid Prototyping",
  "definition": "Rapid Prototyping is an iterative product development approach that emphasises the construction of quick, low-fidelity or medium-fidelity artefacts—physical mock-ups, interactive wireframes, or functional code spikes—to test hypotheses with users and stakeholders before committing to full implementation. The methodology aims to compress the feedback loop between ideation and validated learning, reducing the risk of building features that do not meet user needs. It draws on lean startup principles, agile sprint structures, and design thinking frameworks, integrating user testing results directly into successive prototype iterations. Modern generative AI tools further accelerate rapid prototyping by auto-generating code scaffolds, UI components, and content variants.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:design-thinking", "label": "Design Thinking"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:user-experience", "label": "User Experience"},
      {"@id": "urn:ngm:class:collaborative-design", "label": "Collaborative Design"},
      {"@id": "urn:ngm:class:ai-development-tools", "label": "AI Development Tools"},
      {"@id": "urn:ngm:class:generative-design-tool", "label": "Generative Design Tool"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:product-design", "label": "Product Design"},
      {"@id": "urn:ngm:class:digital-content-creation", "label": "Digital Content Creation"},
      {"@id": "urn:ngm:class:development-platform", "label": "Development Platform"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:human-computer-interaction", "label": "Human Computer Interaction"},
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Rapid Prototyping is an iterative development practice that produces testable artefacts quickly using [[Collaborative Design]] and [[AI Development Tools]], compressing the feedback loop between hypothesis and validated [[User Experience]] learning.
- ### Relationships
  - Rapid Prototyping is a core execution technique within [[Design Thinking]], translating empathy insights into tangible artefacts for user evaluation. [[Generative Design Tool]] platforms now auto-generate UI layouts and code stubs from natural language descriptions, dramatically shortening cycle times. Validated prototypes graduate into [[Product Design]] specifications and, via cloud deployment, into full-featured products on [[Development Platform]] infrastructure. [[Human Computer Interaction]] research informs fidelity choices—paper sketches for early concept testing, interactive [[Digital Content Creation]] tools for later-stage validation. [[Knowledge Management]] systems capture lessons from each prototype cycle, preventing teams from repeating discovered dead-ends.
- ### Content
  - Rapid Prototyping operationalises the principle that building something, however rough, reveals insights that specification documents cannot. A paper prototype of a mobile screen, tested with five users, often surfaces critical usability issues within hours, at negligible cost. This stands in contrast to discovering the same issues months into development when redesign is expensive.

  - Fidelity progression is deliberate: low-fidelity prototypes test concepts and flows without distracting users with visual polish; medium-fidelity interactive prototypes validate interaction models; high-fidelity prototypes test emotional response and brand alignment. Teams choose fidelity based on the specific hypothesis under test, avoiding the trap of gold-plating early prototypes before fundamental assumptions are validated.

  - Agile sprint structures provide natural cadences for rapid prototyping. A two-week sprint can produce a clickable prototype, gather user feedback, synthesise findings, and commit to a next iteration. This rhythm embeds continuous learning into the development process rather than treating user research as a front-loaded phase that is dropped once coding begins.

  - [[AI Development Tools]] and generative models have recently transformed rapid prototyping velocity. Large language models generate functional React components from wireframe descriptions; image generation models produce realistic UI mock-ups; code copilots scaffold entire feature modules. These capabilities allow solo developers and small teams to reach testable prototypes within hours, democratising a practice that previously required dedicated design and engineering resources.
