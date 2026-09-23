
Formative assessment is an ongoing, low-stakes evaluation practice used by educators and learners to monitor understanding and progress during the learning process rather than at its conclusion, with the explicit purpose of informing instructional adjustments and learner self-regulation. Unlike summative assessment, formative assessment results are used to guide immediate pedagogical decisions — providing feedback, identifying misconceptions, and adapting content difficulty — rather than to assign grades or certifications. In spatial computing and XR learning environments, formative assessment can be embedded invisibly in simulation tasks, analysing performance traces in real time.

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

- ### Provenance

