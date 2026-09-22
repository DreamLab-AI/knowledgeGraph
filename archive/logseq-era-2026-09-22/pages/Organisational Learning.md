public:: true

# Organisational Learning
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:organisational-learning", "@type":"Page", "title":"Organisational Learning", "vc:slug":"organisational-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:organisational-learning",
  "@type":"Class",
  "label":"Organisational Learning",
  "definition":"Organisational learning is the process by which a group, team or enterprise creates, retains and transfers knowledge to improve its collective performance over time. It encompasses how experience is encoded into routines, how lessons from success and failure are shared, and how the organisation adapts its mental models and practices in response. As a discipline it bridges knowledge management, continuous improvement and organisational culture.",
  "domain":"distributed-collaboration",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:knowledge-management","label":"Knowledge Management"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:knowledge-management","label":"Knowledge Management"}],
    "enables":[{"@id":"urn:ngm:class:continuous-improvement","label":"Continuous Improvement"},{"@id":"urn:ngm:class:knowledge-transfer","label":"Knowledge Transfer"}],
    "supports":[{"@id":"urn:ngm:class:collaboration","label":"Collaboration"},{"@id":"urn:ngm:class:knowledge-sharing","label":"Knowledge Sharing"}],
    "implements":[{"@id":"urn:ngm:class:feedback-loop","label":"Feedback Loop"}],
    "uses":[{"@id":"urn:ngm:class:knowledge-base","label":"Knowledge Base"}],
    "dependsOn":[{"@id":"urn:ngm:class:knowledge-sharing","label":"Knowledge Sharing"}],
    "relatedTo":[{"@id":"urn:ngm:class:incident-reporting","label":"Incident Reporting"},{"@id":"urn:ngm:class:training","label":"Training"},{"@id":"urn:ngm:class:knowledge-management","label":"Knowledge Management"}],
    "bridgesTo":[{"@id":"urn:ngm:class:continuous-improvement","label":"Continuous Improvement"},{"@id":"urn:ngm:class:feedback-loop","label":"Feedback Loop"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Organisational learning is how a group creates, retains and transfers knowledge to improve collective performance over time. It is a discipline within [[Knowledge Management]] that enables [[Continuous Improvement]] and [[Knowledge Transfer]], depending on healthy [[Knowledge Sharing]] and structured [[Feedback Loop]] practices.
- ### Overview
- Organisations learn not only through the individuals within them but through shared routines, processes, tools and culture that outlast any single person.
- Learning operates at multiple levels: individual insight, team practice, and embedded organisational memory codified in procedures, documentation and systems.
- A central distinction is between single-loop learning, which corrects actions within existing assumptions, and double-loop learning, which questions and revises the underlying assumptions themselves.
- The learning organisation is one deliberately designed to acquire and act on knowledge faster than competitors, treating reflection and adaptation as core capabilities.
- ### Mechanisms
- Capturing tacit knowledge held in people's experience and converting it into explicit, shareable form.
- After-action reviews and blameless retrospectives that extract lessons from both incidents and successes.
- Feedback loops connecting outcomes back to decisions so that practice adapts to evidence.
- Knowledge repositories, communities of practice and mentoring that diffuse expertise across the organisation.
- ### Applications
- Learning from operational events through [[Incident Reporting]] and structured review.
- Onboarding and skill development via [[Training]] grounded in captured organisational knowledge.
- Sustaining [[Continuous Improvement]] cycles in engineering, manufacturing and service delivery.
- Strengthening distributed [[Collaboration]] by making knowledge accessible across time zones and teams.
- ### Key aspects
- Psychological safety is a precondition: people share lessons from failure only when it is safe to do so.
- Knowledge decays and must be actively maintained, curated and re-validated.
- Culture and incentives determine whether learning is genuinely embedded or merely performed.
- ### Relationships
- partOf:: [[Knowledge Management]]
- enables:: [[Continuous Improvement]]
- enables:: [[Knowledge Transfer]]
- supports:: [[Collaboration]]
- supports:: [[Knowledge Sharing]]
- implements:: [[Feedback Loop]]
- uses:: [[Knowledge Base]]
- dependsOn:: [[Knowledge Sharing]]
- relatedTo:: [[Incident Reporting]]
- relatedTo:: [[Training]]
- relatedTo:: [[Knowledge Management]]
- bridgesTo:: [[Continuous Improvement]]
- bridgesTo:: [[Feedback Loop]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
