public:: true

# Fault Tree Analysis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fault-tree-analysis",
  "@type": "Page",
  "vc:slug": "fault-tree-analysis",
  "title": "Fault Tree Analysis",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fault-tree-analysis",
  "@type": "Class",
  "label": "Fault Tree Analysis",
  "definition": "Fault Tree Analysis (FTA) is a top-down, deductive reliability and safety method that models how combinations of component failures and events can lead to a defined undesired top-level event. Using Boolean logic gates to connect basic events, it identifies minimal cut sets — the smallest combinations of failures sufficient to cause the top event — and can be evaluated qualitatively or quantitatively with probabilities. Originating in aerospace and nuclear engineering, FTA is a cornerstone of system safety, risk assessment, and certification across safety-critical industries.",
  "domain": "engineering",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:reliability-engineering", "label": "Reliability Engineering"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:safety-evaluation", "label": "Safety Evaluation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Fault Tree Analysis is a top-down deductive method that uses Boolean logic to model how combinations of component failures lead to a defined undesired event, identifying the minimal failure combinations sufficient to cause it.

- ### Relationships
  - Fault Tree Analysis is a subclass of [[Risk Assessment]] and supports [[Reliability Engineering]] by quantifying how component failures combine into system-level hazards. It relates to broader [[Safety Evaluation]] practice, complementing bottom-up methods such as failure modes and effects analysis.

- ### Content
  - Fault Tree Analysis begins with the outcome to be prevented — a "top event" such as loss of an aircraft control surface or a reactor coolant failure — and reasons backward to the combinations of lower-level events that could produce it. This top-down, deductive orientation distinguishes it from bottom-up techniques: rather than enumerating every possible component failure and tracing its effects, FTA focuses analytical effort on the specific catastrophic outcomes that matter most.

  - The tree is built from events connected by logic gates. An OR gate propagates the failure if any input occurs; an AND gate requires all inputs to occur simultaneously, capturing the redundancy that makes systems robust. Decomposition continues until reaching basic events — primary component failures or external conditions whose probabilities are known or estimable — yielding a structured Boolean model of how local failures escalate into the system-level hazard.

  - Analysis proceeds qualitatively and quantitatively. Qualitatively, the tree is reduced to its minimal cut sets: the smallest sets of basic events whose joint occurrence triggers the top event. A single-element cut set reveals a single point of failure demanding attention, while large cut sets indicate robust, redundant designs. Quantitatively, basic-event probabilities are combined through the gate logic to estimate the top event's likelihood, supporting comparison against safety targets and certification thresholds.

  - FTA is embedded in the safety regimes of aerospace, nuclear power, rail, automotive, and process industries, often mandated by standards such as those governing functional safety. Its value extends beyond a probability number: constructing the tree forces explicit reasoning about failure dependencies, common-cause failures, and the effectiveness of safeguards, surfacing design weaknesses early. As complex software-intensive and autonomous systems proliferate, the deductive discipline of fault tree analysis is increasingly adapted to reason about combined hardware, software, and human-factor failures.
