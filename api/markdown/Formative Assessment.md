public:: true

# Formative Assessment

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:formative-assessment",
  "@type": "Page",
  "title": "Formative Assessment",
  "vc:slug": "formative-assessment",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:formative-assessment",
  "@type": "Class",
  "label": "Formative Assessment",
  "definition": "Formative assessment is an ongoing, low-stakes evaluation practice used by educators and learners to monitor understanding and progress during the learning process rather than at its conclusion, with the explicit purpose of informing instructional adjustments and learner self-regulation. Unlike summative assessment, formative assessment results are used to guide immediate pedagogical decisions — providing feedback, identifying misconceptions, and adapting content difficulty — rather than to assign grades or certifications. In spatial computing and XR learning environments, formative assessment can be embedded invisibly in simulation tasks, analysing performance traces in real time.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:adaptive-learning", "label": "Adaptive Learning"},
      {"@id": "urn:ngm:class:personalised-education", "label": "Personalised Education"},
      {"@id": "urn:ngm:class:learning-analytics", "label": "Learning Analytics"},
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:xr-training", "label": "Xr Training"},
      {"@id": "urn:ngm:class:intelligent-tutoring-system", "label": "Intelligent Tutoring System"},
      {"@id": "urn:ngm:class:competency-based-education", "label": "Competency Based Education"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:performance-trace", "label": "Performance Trace"},
      {"@id": "urn:ngm:class:diagnostic-feedback", "label": "Diagnostic Feedback"},
      {"@id": "urn:ngm:class:learning-objective", "label": "Learning Objective"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:learner-model", "label": "Learner Model"},
      {"@id": "urn:ngm:class:knowledge-tracing", "label": "Knowledge Tracing"},
      {"@id": "urn:ngm:class:xapi", "label": "Xapi"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:learning-management-system", "label": "Learning Management System"},
      {"@id": "urn:ngm:class:data-analytics", "label": "Data Analytics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:summative-assessment", "label": "Summative Assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:educational-technology", "label": "Educational Technology"},
      {"@id": "urn:ngm:class:simulation-based-learning", "label": "Simulation Based Learning"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:xapi", "label": "Xapi"}
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Formative Assessment]] is a continuous, process-oriented evaluation embedded in learning activities to diagnose understanding and guide [[Adaptive Learning]] adjustments in real time.
  - Produces [[Diagnostic Feedback]] for both learner and instructor, feeding into a [[Feedback Loop]] that drives [[Personalised Education]] by adjusting content difficulty, pacing, or instructional approach.
  - In [[Xr Training]] and [[Simulation Based Learning]] environments, formative assessment is embedded in task performance data captured via [[Xapi]] experience traces analysed by a [[Learner Model]].

- ### Overview
  - Formative assessment has roots in educational research dating to the 1960s and was systematically formalised by Black and Wiliam in their influential 1998 review "Inside the Black Box," which demonstrated strong evidence that high-quality feedback during learning significantly improves achievement outcomes. The concept distinguishes between assessment of learning (summative) and assessment for learning (formative).
  - In spatial computing and XR contexts, formative assessment takes on new dimensions. Simulation environments can capture fine-grained performance traces — task completion times, error patterns, gaze behaviour, hand movement trajectories — that provide rich data for automated formative feedback without interrupting immersion. Intelligent tutoring systems (ITS) use knowledge-tracing algorithms to maintain a probabilistic model of learner competency and adapt difficulty in real time. xAPI (Experience API) has become the standard protocol for reporting learning events from XR environments to learning record stores.

- ### Key aspects
  - **Feedback timing** — immediate, in-task feedback is most effective for procedural skills; delayed reflective feedback suits conceptual understanding.
  - **Low stakes** — formative assessments are explicitly not used for grading; removing evaluation threat increases honest engagement and productive failure.
  - **Embedded invisibility** — in XR environments, assessment can be entirely invisible to the learner, inferred from natural task interaction rather than explicit tests.
  - **Learner agency** — effective formative assessment involves learners in self-assessment and goal-setting, developing metacognitive skills alongside domain knowledge.

- ### Applications
  - XR medical simulation platforms that detect procedural errors and provide guidance during surgical training.
  - Intelligent tutoring systems for mathematics that identify the specific misconception causing errors and adapt explanations accordingly.
  - Language learning apps that adjust vocabulary difficulty based on real-time response patterns.
  - Workplace training simulations for safety procedures that provide corrective feedback on dangerous actions before they become habits.

- ### Mechanisms
  - **Knowledge tracing** — Bayesian knowledge tracing models estimate the probability a learner has mastered a skill based on their response history.
  - **Performance trace analysis** — xAPI statements capture learner interactions; analytics engines identify patterns indicative of misconceptions.
  - **Adaptive scaffolding** — the system adjusts hint availability, task complexity, and content presentation based on current learner-model state.

- ### Relationships
  - enables:: [[Adaptive Learning]]
  - enables:: [[Personalised Education]]
  - enables:: [[Learning Analytics]]
  - enables:: [[Feedback Loop]]
  - supports:: [[Xr Training]]
  - supports:: [[Intelligent Tutoring System]]
  - supports:: [[Competency Based Education]]
  - hasPart:: [[Performance Trace]]
  - hasPart:: [[Diagnostic Feedback]]
  - hasPart:: [[Learning Objective]]
  - uses:: [[Learner Model]]
  - uses:: [[Knowledge Tracing]]
  - uses:: [[Xapi]]
  - dependsOn:: [[Learning Management System]]
  - dependsOn:: [[Data Analytics]]
  - contrastsWith:: [[Summative Assessment]]
  - relatedTo:: [[Educational Technology]]
  - relatedTo:: [[Simulation Based Learning]]
  - relatedTo:: [[Augmented Reality]]
  - standardizedBy:: [[Xapi]]

- ### Provenance
  - updated:: 2026-06-15
