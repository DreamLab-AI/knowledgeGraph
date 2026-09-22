public:: true

# Hyperautomation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hyperautomation", "@type":"Page", "title":"Hyperautomation", "vc:slug":"hyperautomation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:hyperautomation",
  "@type":"Class",
  "label":"Hyperautomation",
  "definition":"Hyperautomation is a disciplined approach to automating as many business and IT processes as possible by orchestrating a coordinated set of technologies including robotic process automation, machine learning, process mining and low-code platforms. Rather than automating tasks in isolation, it discovers, designs and integrates end-to-end automated workflows with intelligence layered in. The goal is scalable, adaptive automation that augments human work across the enterprise.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:intelligent-automation","label":"Intelligent Automation"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:digital-transformation","label":"Digital Transformation"}],
    "uses":[{"@id":"urn:ngm:class:robotic-process-automation","label":"Robotic Process Automation"},{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:process-mining","label":"Process Mining"}],
    "hasPart":[{"@id":"urn:ngm:class:workflow-automation","label":"Workflow Automation"},{"@id":"urn:ngm:class:low-code-platform","label":"Low Code Platform"}],
    "partOf":[{"@id":"urn:ngm:class:intelligent-automation","label":"Intelligent Automation"}],
    "implements":[{"@id":"urn:ngm:class:business-process-automation","label":"Business Process Automation"}],
    "dependsOn":[{"@id":"urn:ngm:class:orchestration","label":"Orchestration"}],
    "requires":[{"@id":"urn:ngm:class:process-mining","label":"Process Mining"}],
    "supports":[{"@id":"urn:ngm:class:digital-transformation","label":"Digital Transformation"}],
    "uses_ai":[{"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"},{"@id":"urn:ngm:class:ai-agents","label":"AI Agents"}],
    "contrastsWith":[{"@id":"urn:ngm:class:robotic-process-automation","label":"Robotic Process Automation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:workflow-automation","label":"Workflow Automation"}],
    "relatedTo":[{"@id":"urn:ngm:class:business-process-automation","label":"Business Process Automation"},{"@id":"urn:ngm:class:orchestration","label":"Orchestration"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Hyperautomation is the coordinated application of multiple automation technologies to identify, design and automate end-to-end processes at enterprise scale. It builds on [[Robotic Process Automation]] but adds [[Machine Learning]], [[Process Mining]] and [[Low Code Platform]] capabilities to handle judgement, variation and integration.
- As a maturation of [[Intelligent Automation]], it shifts the unit of automation from individual tasks to whole workflows, making it a primary driver of [[Digital Transformation]].
- ### Overview
- Hyperautomation starts with discovery: [[Process Mining]] and task mining reveal how work actually flows and where automation opportunities lie.
- Discovered processes are then orchestrated through a layered stack combining rule-based bots, AI models and human-in-the-loop steps.
- Intelligence from [[Natural Language Processing]] and [[AI Agents]] lets automated workflows interpret documents, make decisions and adapt to exceptions.
- [[Orchestration]] coordinates the components so that automation spans systems and departments rather than stopping at silo boundaries.
- ### Key aspects
- Discovery: data-driven identification of automatable processes.
- Augmentation: layering AI onto deterministic automation to handle ambiguity.
- Orchestration: end-to-end coordination across tools and teams.
- Governance: measurement, monitoring and continuous optimisation of automated workflows.
- ### Applications
- Automating finance, procurement and HR operations end to end.
- Intelligent document processing for claims, invoices and contracts.
- Customer-service automation blending bots and AI agents.
- Accelerating [[Digital Transformation]] programmes across the enterprise.
- ### Relationships
- subClassOf:: [[Intelligent Automation]]
- enables:: [[Digital Transformation]]
- uses:: [[Robotic Process Automation]]
- uses:: [[Machine Learning]]
- uses:: [[Process Mining]]
- hasPart:: [[Workflow Automation]]
- hasPart:: [[Low Code Platform]]
- partOf:: [[Intelligent Automation]]
- implements:: [[Business Process Automation]]
- dependsOn:: [[Orchestration]]
- requires:: [[Process Mining]]
- supports:: [[Digital Transformation]]
- uses:: [[Natural Language Processing]]
- uses:: [[AI Agents]]
- contrastsWith:: [[Robotic Process Automation]]
- bridgesTo:: [[Workflow Automation]]
- relatedTo:: [[Business Process Automation]]
- relatedTo:: [[Orchestration]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
