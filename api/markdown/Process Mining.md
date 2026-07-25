public:: true

# Process Mining
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:process-mining", "@type":"Page", "title":"Process Mining", "vc:slug":"process-mining", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:process-mining",
  "@type":"Class",
  "label":"Process Mining",
  "definition":"Process mining is a family of data-driven techniques that reconstruct, analyse, and improve real business processes by extracting knowledge from event logs recorded in enterprise information systems. It encompasses process discovery, which infers a process model from observed event sequences; conformance checking, which compares the discovered behaviour against a reference model; and enhancement, which enriches models with performance and frequency data. By grounding analysis in actual recorded execution rather than idealised documentation, it reveals bottlenecks, deviations, and automation opportunities.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:business-process-management","label":"Business Process Management"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:event-log","label":"Event Log"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:business-process-management","label":"Business Process Management"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:event-log","label":"Event Log"},
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},
      {"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:event-log","label":"Event Log"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:process-automation","label":"Process Automation"},
      {"@id":"urn:ngm:class:robotic-process-automation","label":"Robotic Process Automation"},
      {"@id":"urn:ngm:class:hyperautomation","label":"Hyperautomation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:intelligent-automation","label":"Intelligent Automation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:workflow-automation","label":"Workflow Automation"},
      {"@id":"urn:ngm:class:business-intelligence","label":"Business Intelligence"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:robotic-process-automation","label":"Robotic Process Automation"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Process Mining]] is a data-driven discipline within [[Business Process Management]] that reconstructs real processes from recorded [[Event Log|event logs]].
	- It combines [[Machine Learning]] and statistical analysis to discover, check, and enhance process models.
	- It feeds directly into [[Process Automation]] and [[Business Intelligence]] by surfacing how work actually flows through a system.
- ### Overview
	- Information systems such as ERP, CRM, and case-management platforms record timestamped events describing which activity occurred, when, and for which case. Process mining treats these traces as the ground truth of organisational behaviour.
	- Discovery algorithms (alpha miner, heuristic miner, inductive miner) infer a process model — often a Petri net, BPMN diagram, or directly-follows graph — from the ordering of events.
	- Conformance checking aligns observed traces against a normative model to quantify deviations, rework, and policy violations.
	- Enhancement overlays performance metrics such as waiting time, throughput, and resource utilisation onto the model, turning a static map into a diagnostic instrument.
- ### Key aspects
	- Event log quality: completeness, correct case identifiers, and accurate timestamps determine the reliability of every downstream result.
	- The three pillars: discovery, conformance, and enhancement.
	- Object-centric and predictive variants extend classical control-flow mining toward multi-entity and forward-looking analysis.
	- Privacy and access control, since event logs frequently contain sensitive operational and personal data.
- ### Applications
	- Identifying bottlenecks and rework loops in procure-to-pay and order-to-cash processes.
	- Prioritising candidates for [[Robotic Process Automation]] by quantifying repetitive, rule-based activity.
	- Auditing compliance by detecting paths that violate segregation-of-duties controls.
	- Continuous monitoring of service-level adherence in customer operations.
	- Benchmarking process variants across regions or business units.
- ### Relationships
	- hasPart:: [[Event Log]]
	- partOf:: [[Business Process Management]]
	- uses:: [[Event Log]]
	- uses:: [[Machine Learning]]
	- uses:: [[Business Intelligence]]
	- dependsOn:: [[Event Log]]
	- enables:: [[Process Automation]]
	- enables:: [[Robotic Process Automation]]
	- enables:: [[Hyperautomation]]
	- supports:: [[Intelligent Automation]]
	- relatedTo:: [[Workflow Automation]]
	- relatedTo:: [[Business Intelligence]]
	- contrastsWith:: [[Robotic Process Automation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
