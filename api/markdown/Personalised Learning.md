public:: true

# Personalised Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:personalised-learning",
  "@type": "Page",
  "vc:slug": "personalised-learning",
  "title": "Personalised Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:personalised-learning",
  "@type": "Class",
  "label": "Personalised Learning",
  "definition": "Personalised learning is an educational approach in which the pace, content, modality, and assessment of instruction are dynamically adapted to the knowledge state, learning style, goals, and preferences of the individual learner. Technology-enabled personalised learning uses data about learner interactions and performance to drive adaptive algorithms that present the most effective next learning experience for each person, contrasting with one-size-fits-all curriculum delivery.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": {"@id": "urn:ngm:class:adaptive-learning", "label": "Adaptive Learning"},
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:item-response-theory", "label": "Item Response Theory"},
      {"@id": "urn:ngm:class:bayesian-knowledge-tracing", "label": "Bayesian Knowledge Tracing"},
      {"@id": "urn:ngm:class:spaced-repetition", "label": "Spaced Repetition"},
      {"@id": "urn:ngm:class:recommendation-systems", "label": "Recommendation Systems"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:education-and-ai", "label": "Education and AI"},
      {"@id": "urn:ngm:class:immersive-learning", "label": "Immersive Learning"},
      {"@id": "urn:ngm:class:intelligent-tutoring-systems", "label": "Intelligent Tutoring Systems"},
      {"@id": "urn:ngm:class:formative-assessment", "label": "Formative Assessment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:learner-modelling", "label": "Learner Modelling"},
      {"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:self-directed-learning", "label": "Self-Directed Learning"},
      {"@id": "urn:ngm:class:competency-based-education", "label": "Competency-Based Education"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:standardised-curriculum", "label": "Standardised Curriculum"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:education-technology", "label": "Education Technology"},
      {"@id": "urn:ngm:class:curriculum-learning", "label": "Curriculum Learning"},
      {"@id": "urn:ngm:class:educational-methodology", "label": "Educational Methodology"},
      {"@id": "urn:ngm:class:learning-analytics", "label": "Learning Analytics"},
      {"@id": "urn:ngm:class:digital-equity", "label": "Digital Equity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:adaptive-instruction", "label": "Adaptive Instruction"},
    {"@id": "urn:ngm:class:differentiated-instruction", "label": "Differentiated Instruction"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Personalised Learning]] is an educational paradigm in which instructional content, pacing, sequencing, and assessment are tailored to the individual characteristics of each learner — their prior knowledge, demonstrated misconceptions, motivational state, learning pace, and preferred modalities — rather than delivered uniformly to a cohort. Historically pursued through tutoring and small-group instruction, personalised learning is now primarily realised through technology: [[Adaptive Learning]] platforms, intelligent tutoring systems, and increasingly [[Large Language Models]] acting as interactive tutors that respond to the learner's specific questions, misconceptions, and level of readiness.

- ### Relationships
  - Personalised learning builds on [[Adaptive Learning]] foundations and is increasingly powered by [[Large Language Models]] acting as conversational pedagogical agents. [[Knowledge Graph|Knowledge graphs]] of domain concepts and learner-state models enable precise identification of gaps and optimal next-content selection. [[Federated Learning]] enables learning models to improve from distributed learner data without centralising private educational records. It enables broader [[Education and AI]] applications and supports [[Immersive Learning]] experiences in XR environments. [[Education Technology]] platforms provide the delivery infrastructure, whilst [[Educational Methodology|educational methodology]] and [[Curriculum Learning|curriculum theory]] inform the pedagogical design.

- ### Content
  - The theoretical grounding for personalised learning dates to Bloom's 2-Sigma study (1984), which found that one-to-one tutoring produced student performance two standard deviations above average classroom instruction — a gap it attributed to the tutor's ability to monitor understanding and adjust explanations in real time. Early computer-based implementations emerged in the 1970s through intelligent tutoring systems (ITS) such as SOPHIE (electronics troubleshooting) and LISP Tutor, which modelled student knowledge explicitly and selected instructional interventions accordingly. These systems required extensive hand-authored expert models and were domain-specific and expensive to build.

  - Contemporary personalised learning platforms use a combination of item response theory (IRT) and Bayesian knowledge tracing to model learner proficiency across knowledge components from interaction data. Spaced repetition systems (SRS) like Anki and Duolingo apply forgetting curve models (Ebbinghaus, 1885; SuperMemo algorithm) to schedule review of material at the moment of optimal challenge. Recommendation algorithms drawn from collaborative filtering — "learners similar to you benefited from this resource next" — add a social dimension to personalisation. Machine learning classifiers detect learner disengagement or confusion from interaction patterns (response time, error rates, click behaviour) and trigger adaptive interventions.

  - The EdTech industry has deployed personalised learning at scale through platforms such as Khan Academy, Coursera, Duolingo, Carnegie Learning's MATHia, and DreamBox Learning, serving tens of millions of learners. Assessments in adaptive platforms continuously update the learner model rather than occurring as discrete events. The COVID-19 pandemic accelerated adoption of these platforms globally, generating unprecedented datasets on learner behaviour that are now being used to train more sophisticated adaptive models. Learning management systems (Moodle, Canvas, Blackboard) are integrating AI recommendation and analytics layers.

  - In 2024–2025 [[Large Language Models]] are transforming personalised learning by enabling natural language tutoring at scale — Khanmigo (Khan Academy), Microsoft's education Copilot, and numerous startups provide LLM-powered tutors that can answer questions, explain concepts at multiple levels of abstraction, generate worked examples, and provide Socratic guidance without prescripted content trees. Multimodal capabilities allow tutors to interpret student work (handwritten maths, diagrams) and respond visually. Privacy and equity concerns centre on data governance for learner profiles, algorithmic bias in recommendation, and the digital divide affecting access to high-quality personalised learning tools in low-resource educational contexts.

