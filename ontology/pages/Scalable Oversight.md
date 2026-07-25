public:: true

# Scalable Oversight

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:scalable-oversight", "@type":"Page", "title":"Scalable Oversight", "vc:slug":"scalable-oversight", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:scalable-oversight",
  "@type":"Class",
  "label":"Scalable Oversight",
  "definition":"Scalable oversight is the AI-safety research problem of reliably supervising, evaluating, and steering AI systems whose capabilities approach or exceed human ability on the tasks being judged. It seeks mechanisms that let limited human supervisors provide accurate training signal and verification even when they cannot directly check a model's outputs. Approaches decompose hard judgements, amplify human judgement with AI assistance, and use adversarial or recursive structures to surface errors.",
  "domain":"artificial-intelligence",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:ai-alignment","label":"AI Alignment"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:ai-alignment","label":"AI Alignment"}],
    "hasPart":[{"@id":"urn:ngm:class:task-decomposition","label":"Task Decomposition"},{"@id":"urn:ngm:class:human-in-the-loop","label":"Human-in-the-Loop"}],
    "uses":[{"@id":"urn:ngm:class:human-feedback","label":"Human Feedback"},{"@id":"urn:ngm:class:reinforcement-learning-from-human-feedback","label":"RLHF"},{"@id":"urn:ngm:class:red-teaming","label":"Red Teaming"}],
    "requires":[{"@id":"urn:ngm:class:interpretability","label":"Interpretability"}],
    "enables":[{"@id":"urn:ngm:class:value-alignment","label":"Value Alignment"},{"@id":"urn:ngm:class:quality-assurance","label":"Quality Assurance"}],
    "supports":[{"@id":"urn:ngm:class:ai-safety","label":"AI Safety"}],
    "relatedTo":[{"@id":"urn:ngm:class:superintelligence","label":"Superintelligence"},{"@id":"urn:ngm:class:agentic-ai","label":"Agentic AI"},{"@id":"urn:ngm:class:ai-governance","label":"AI Governance"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Scalable oversight studies how humans can supervise AI systems that match or surpass human skill on the judged task. It is a subproblem of [[AI Alignment]] that relies on [[Human Feedback]], [[RLHF]], and structures such as [[Task Decomposition]] to extract reliable signal.
- ### Overview
- As models grow more capable, naive human evaluation breaks down: supervisors cannot directly verify long, expert, or superhuman outputs.
- The research programme asks how to preserve trustworthy training signal and verification in this regime, so that capability gains do not outrun our ability to check them.
- Proposed mechanisms amplify limited human judgement, decompose hard questions into checkable parts, and pit models against one another to expose flaws.
- ### Mechanisms
- [[Task Decomposition]] breaks an intractable judgement into smaller subclaims a human can verify.
- Recursive reward modelling and AI-assisted critique amplify a [[Human-in-the-Loop]] supervisor with model assistance.
- Debate-style and adversarial setups, related to [[Red Teaming]], surface deceptive or incorrect reasoning.
- Weak-to-strong generalisation studies whether weaker supervisors can elicit aligned behaviour from stronger models, supported by [[Interpretability]] tools.
- ### Applications
- Training and evaluating frontier models where direct human grading is infeasible.
- Building [[Quality Assurance]] processes for high-stakes AI deployments.
- Underpinning [[AI Governance]] assurances about controllability.
- Preparing oversight regimes for increasingly [[Agentic AI]] systems.
- ### Relationships
- partOf:: [[AI Alignment]]
- hasPart:: [[Task Decomposition]]
- hasPart:: [[Human-in-the-Loop]]
- uses:: [[Human Feedback]]
- uses:: [[RLHF]]
- uses:: [[Red Teaming]]
- requires:: [[Interpretability]]
- enables:: [[Value Alignment]]
- enables:: [[Quality Assurance]]
- supports:: [[AI Safety]]
- relatedTo:: [[Superintelligence]]
- relatedTo:: [[Agentic AI]]
- relatedTo:: [[AI Governance]]
- ### Provenance
- updated:: 2026-06-15
