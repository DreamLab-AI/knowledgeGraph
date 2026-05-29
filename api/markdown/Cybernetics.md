public:: true

# Cybernetics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cybernetics",
  "@type": "Page",
  "vc:slug": "cybernetics",
  "title": "Cybernetics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cybernetics",
  "@type": "Class",
  "label": "Cybernetics",
  "definition": "Cybernetics is the transdisciplinary science of regulatory systems, feedback mechanisms, and goal-directed behaviour in animals, machines, and organisations, founded by Norbert Wiener in 1948 to provide a unified framework for understanding how systems use information to maintain stability and achieve purposes across biological, mechanical, and social domains. It centres on the study of circular causal processes — feedback loops — through which a system compares its actual state against a desired state and acts to reduce the discrepancy, extending naturally to concepts of information, communication, control, and self-organisation. Second-order cybernetics extends this to include the observer as a participant in the system being observed, influencing systems theory, cognitive science, constructivism, and AI.",
  "domain": "science",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:brain-computer-interfaces", "label": "Brain Computer Interfaces"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cognitive-science", "label": "Cognitive Science"},
      {"@id": "urn:ngm:class:emergence", "label": "Emergence"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Cybernetics]] is the science of purposeful regulatory behaviour through [[Feedback Loop|feedback loops]] and information flow, providing the theoretical foundation for [[Control Theory]], [[Adaptive Control]], and intelligent systems that maintain goals despite environmental disturbance — bridging biology, engineering, and [[Cognitive Science]].

- ### Relationships
  - Cybernetics formalised the [[Feedback Loop]] as the universal mechanism by which systems self-regulate, directly seeding modern [[Feedback Control]] engineering and informing [[Signal Processing]]. Its influence flows into [[Adaptive Control]] systems, [[Brain Computer Interfaces]] that close loops between neural signals and actuators, and [[Human Robot Interaction]] frameworks that model the human-machine dyad as a coupled feedback system. Second-order cybernetics resonates with [[Cognitive Science]] and theories of [[Emergence]] in complex adaptive systems.

- ### Content
  - Cybernetics was formally founded by Norbert Wiener with the 1948 publication "Cybernetics: Or Control and Communication in the Animal and the Machine," synthesising wartime research on anti-aircraft fire control, neurophysiology, information theory, and statistical mechanics into a single conceptual framework. The founding circle included mathematicians John von Neumann and Claude Shannon, neurophysiologist Warren McCulloch, and anthropologist Gregory Bateson, whose work connected cybernetic thinking to social and ecological systems. The name derives from the Greek kybernetes (steersman), evoking the archetype of goal-directed correction.

  - The central mechanism of cybernetics is negative feedback: a system measures the deviation of its actual state from a goal state and applies corrective action proportional to that error. This simple structure, when instantiated in biological nervous systems, engineering controllers, or organisational processes, produces stable goal-seeking behaviour that is robust to disturbance. Positive feedback loops, by contrast, produce amplification and instability, and cybernetics studies both in the context of learning, creativity, and pathology. Information — in Shannon's precise sense of entropy reduction — is the substrate flowing around these loops.

  - Second-order cybernetics, developed principally by Heinz von Foerster, Francisco Varela, and Humberto Maturana in the 1970s and 1980s, turned the analytic lens back on the observer. Rather than studying systems from outside, second-order cybernetics recognises that the observer is part of the system and that knowledge is constructed through interaction. This epistemological move influenced constructivism in education, systemic therapy in psychology, and enactivist theories of cognition. Separately, W. Ross Ashby's Law of Requisite Variety — stating that a controller must possess at least as much variety as the system it controls — provides one of cybernetics' most robust engineering theorems.

  - By 2024-2025 cybernetics experiences renewed interest as AI systems are framed as goal-directed agents embedded in feedback loops with human and physical environments. Concepts including homeostasis, requisite variety, and circular causality directly inform the design of reinforcement learning agents, AI alignment research, and human-AI teaming. Biosemiotics and synthetic biology draw on cybernetic principles at the cellular level, while the governance of AI and algorithmic systems is being analysed through the lens of second-order cybernetics to understand how regulatory institutions can steer technologies they are embedded within.

