public:: true

# Capability Evaluation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:capability-evaluation", "@type":"Page", "title":"Capability Evaluation", "vc:slug":"capability-evaluation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:capability-evaluation",
  "@type":"Class",
  "label":"Capability Evaluation",
  "definition":"Capability evaluation is the systematic measurement of what an AI model can do, especially the elicitation and assessment of potentially dangerous capabilities such as autonomous replication, cyber-offence, or assistance with weapons. It combines benchmarks, structured tasks, and adversarial elicitation (including red-teaming) to establish upper bounds on model behaviour under best-effort prompting and tooling. Results feed safety cases and trigger the thresholds defined in responsible scaling and preparedness frameworks.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:ai-evaluation","label":"AI Evaluation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:ai-evaluation","label":"AI Evaluation"},{"@id":"urn:ngm:class:ai-safety","label":"AI Safety"}],
    "requires":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:red-teaming","label":"Red Teaming"}],
    "uses":[{"@id":"urn:ngm:class:red-teaming","label":"Red Teaming"},{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:safety-evaluation","label":"Safety Evaluation"}],
    "enables":[{"@id":"urn:ngm:class:responsible-scaling-policy","label":"Responsible Scaling Policy"},{"@id":"urn:ngm:class:ai-safety","label":"AI Safety"}],
    "supports":[{"@id":"urn:ngm:class:alignment","label":"Alignment"},{"@id":"urn:ngm:class:interpretability","label":"Interpretability"}],
    "bridgesTo":[{"@id":"urn:ngm:class:responsible-scaling-policy","label":"Responsible Scaling Policy"},{"@id":"urn:ngm:class:safety-evaluation","label":"Safety Evaluation"}],
    "relatedTo":[{"@id":"urn:ngm:class:large-language-model","label":"Large Language Model"},{"@id":"urn:ngm:class:ai-agent","label":"AI Agent"},{"@id":"urn:ngm:class:alignment","label":"Alignment"}],
    "contrastsWith":[{"@id":"urn:ngm:class:safety-evaluation","label":"Safety Evaluation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Capability Evaluation]] measures what an AI system can do, with emphasis on eliciting potentially dangerous capabilities, as a specialised form of [[AI Evaluation]].
- It draws on [[Model Evaluation]] benchmarks and [[Red Teaming]] to establish upper bounds on behaviour under best-effort elicitation.
- Findings feed a [[Responsible Scaling Policy]] and broader [[AI Safety]] decision-making, complementing [[Safety Evaluation]].
- It is most consequential for frontier [[Large Language Model]] and [[AI Agent]] systems.
- ### Overview
- Capability evaluation asks not whether a model is safe by default but what it could be made to do given strong prompting, fine-tuning, scaffolding, and tools.
- Because under-elicitation can hide latent capability, evaluators invest in adversarial elicitation, agentic harnesses, and expert-designed task suites.
- Evaluations are calibrated to thresholds: crossing a capability level triggers heightened safeguards under preparedness and responsible-scaling commitments.
- ### Key aspects
- Dangerous-capability focus: cyber, biological, autonomy, and persuasion domains receive targeted assessment.
- Elicitation rigour: best-effort prompting, tool access, and fine-tuning probes establish robust upper bounds.
- Agentic tasks: multi-step autonomous tasks test planning, tool use, and self-improvement.
- Threshold mapping: results are tied to defined capability levels that gate deployment decisions.
- Reproducibility: standardised task suites and scoring support comparison across models and labs.
- ### Applications
- Pre-deployment risk assessment for frontier models.
- Triggering safeguards and deployment gates in responsible scaling and preparedness frameworks.
- Informing governance, disclosure, and third-party auditing.
- Tracking capability trends across model generations.
- ### Relationships
- partOf:: [[AI Evaluation]]
- partOf:: [[AI Safety]]
- requires:: [[Model Evaluation]]
- requires:: [[Red Teaming]]
- uses:: [[Red Teaming]]
- uses:: [[Model Evaluation]]
- uses:: [[Safety Evaluation]]
- enables:: [[Responsible Scaling Policy]]
- enables:: [[AI Safety]]
- supports:: [[Alignment]]
- supports:: [[Interpretability]]
- bridgesTo:: [[Responsible Scaling Policy]]
- bridgesTo:: [[Safety Evaluation]]
- relatedTo:: [[Large Language Model]]
- relatedTo:: [[AI Agent]]
- relatedTo:: [[Alignment]]
- contrastsWith:: [[Safety Evaluation]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
