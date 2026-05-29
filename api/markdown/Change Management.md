public:: true

# Change Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:change-management",
  "@type": "Page",
  "vc:slug": "change-management",
  "title": "Change Management",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:change-management",
  "@type": "Class",
  "label": "Change Management",
  "definition": "Change Management is the structured discipline of guiding organisations, teams, and individuals through transitions in technology, process, or culture to achieve desired outcomes whilst minimising disruption and resistance. It encompasses planning, communication, training, stakeholder alignment, and feedback loops that collectively ensure adoption of new working methods. In technology contexts it also covers the formal control of modifications to systems and infrastructure to reduce risk. Effective change management is widely recognised as a critical determinant of whether digital transformation initiatives deliver their intended value.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-transformation", "label": "Digital Transformation"},
      {"@id": "urn:ngm:class:stakeholder-engagement", "label": "Stakeholder Engagement"},
      {"@id": "urn:ngm:class:human-factors", "label": "Human Factors"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-adoption", "label": "AI Adoption"},
      {"@id": "urn:ngm:class:workforce-development", "label": "Workforce Development"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:compliance-monitoring", "label": "Compliance Monitoring"},
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Change Management is the disciplined approach to transitioning organisations and systems through planned alterations, combining [[Human Factors]] considerations with structured governance to sustain [[AI Adoption]] and [[Digital Transformation]] outcomes.
- ### Relationships
  - Successful change programmes depend on active [[Stakeholder Engagement]] to surface concerns early; they employ [[Risk Assessment]] to prioritise interventions and generate [[Audit Trail]] records required by [[Compliance Monitoring]]. At the workforce level, change management drives [[Workforce Development]] initiatives that equip staff for new capabilities.
- ### Content
  - Change management as an organisational discipline draws on frameworks such as Kotter's 8-Step Model, Prosci ADKAR, and Lewin's unfreeze-change-refreeze cycle. Each framework stresses that sustainable change requires building coalitions, communicating a compelling vision, and celebrating short-term wins to maintain momentum.

  - In IT service management, change management has a more procedural character, concerned with controlling modifications to production systems to minimise service disruption. ITIL defines change types—standard, normal, and emergency—with proportionate approval gates, and mandates post-implementation reviews to feed lessons learned back into planning.

  - The intersection of change management with AI deployment is particularly consequential. Introducing AI-assisted workflows typically re-shapes decision authority, redefines roles, and raises questions about accountability that human-centred change approaches must address explicitly. Resistance is often rooted in legitimate concerns about deskilling, surveillance, or job loss rather than mere inertia.

  - Measuring change management effectiveness requires both leading indicators—training completion, stakeholder sentiment, pilot adoption rates—and lagging indicators such as productivity metrics, defect rates, and employee retention. Digital tools increasingly enable continuous sensing of adoption health rather than relying solely on periodic surveys.

  - Governance of change at enterprise scale demands integration with enterprise architecture, programme management, and risk management functions so that individual changes are evaluated for cumulative systemic effects, avoiding the fragmented adoption that produces technical debt and conflicting process variants.
