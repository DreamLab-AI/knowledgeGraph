public:: true

# State Space
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:state-space",
  "@type": "Page",
  "vc:slug": "state-space",
  "title": "State Space",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:state-space",
  "@type": "Class",
  "label": "State Space",
  "definition": "A state space is the mathematical set of all possible configurations (states) of a dynamical system, together with the transition rules that govern how the system evolves from one state to another over time. In control theory it is represented by first-order differential or difference equations relating state variables, inputs, and outputs; in artificial intelligence it denotes the complete set of system configurations that a search or planning algorithm may explore.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:hidden-state", "label": "Hidden State"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:optimal-control", "label": "Optimal Control"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:system-identification", "label": "System Identification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:recurrent-neural-network", "label": "Recurrent Neural Network"},
      {"@id": "urn:ngm:class:time-series-analysis", "label": "Time-Series Analysis"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:state-observer", "label": "State Observer"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The state space formalism provides a unified framework for describing the dynamic behaviour of systems in both engineering and computational contexts. In control engineering, a continuous-time linear system is represented as ẋ = Ax + Bu, y = Cx + Du, where the state vector x captures all information needed to predict future outputs given future inputs. In AI and planning, a [[State Estimation]] problem over a [[Hidden State]] is addressed via filters such as the [[Kalman Filter]], whilst [[Reinforcement Learning]] agents operate directly on state-action spaces to maximise cumulative reward.

- ### Relationships
  - State space representations underpin [[Optimal Control]] theory (LQR, MPC) and provide the mathematical substrate for [[System Identification]], where model parameters are estimated from input-output data. [[Recurrent Neural Network]] architectures can be viewed as learned state space models, and modern structured state space models (S4, Mamba) adapt this idea to sequence learning. [[Time-Series Analysis]] methods exploit state space formulations via the Kalman smoother and related Bayesian techniques.

- ### Content
  - The state space approach to linear systems was developed by Rudolf Kalman in the early 1960s, superseding classical transfer-function methods for multi-input multi-output (MIMO) systems. Kalman's 1960 paper introducing the optimal linear filter and his 1961 work on controllability and observability criteria provided the foundational theory that drove advances in aerospace guidance and chemical process control throughout the 1960s and 1970s.

  - Key properties examined in state space analysis include controllability (can any state be reached from any other via control inputs?), observability (can the full state be inferred from outputs alone?), stability (do eigenvalues of A lie in the left half-plane for continuous-time systems?), and minimality (absence of uncontrollable or unobservable modes). Tools such as pole placement and the Linear Quadratic Regulator (LQR) synthesise feedback gains directly from state space matrices.

  - In AI, state spaces underlie classical search (A*, BFS, DFS), where states are nodes and transitions are edges. Partially observable Markov Decision Processes (POMDPs) extend state space planning to settings where the true state is not directly observable, requiring belief-state tracking. Model-based reinforcement learning learns state transition models explicitly, enabling planning via rollouts through the learned state space.

  - From 2022 onward, state space models (SSMs) have attracted significant research interest as alternatives to Transformer attention for long-sequence modelling. The Mamba architecture (2023) introduced selective state spaces with hardware-aware implementations, achieving competitive performance on language and audio tasks with linear rather than quadratic scaling in sequence length, making SSMs a rapidly growing area in deep learning research.

