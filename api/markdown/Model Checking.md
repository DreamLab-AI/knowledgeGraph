Model checking is an automated formal-verification technique that exhaustively explores the reachable states of a finite-state model of a system to determine whether it satisfies a specification, typically expressed in temporal logic. When the property fails, the model checker returns a concrete counterexample trace, making it valuable for debugging concurrent and reactive systems. Its main challenge is the state-space explosion problem, addressed by symbolic and abstraction techniques.

### Overview

- Model checking provides a push-button complement to deductive verification: given a model and a temporal-logic property, it decides satisfaction algorithmically by traversing the system's state graph. Explicit-state checkers enumerate states directly, while symbolic checkers represent vast state sets compactly using binary decision diagrams or hand the obligation to a satisfiability solver in bounded model checking. The decisive practical advantage is the counterexample: a failing run is reported as a concrete trace that engineers can replay and debug.

### Mechanisms

- Finite-state modelling of the system as a transition system over a state space.
- Property specification in temporal logic such as linear temporal logic or computation tree logic.
- Exhaustive state-space exploration to decide satisfaction of the property.
- Counterexample generation that returns a concrete failing trace when a property is violated.
- State-space-explosion mitigation through symbolic representation, abstraction and bounded checking.

### Applications

- Verifying concurrent protocols and hardware designs against safety and liveness properties.
- Checking embedded and reactive control software for deadlock and race conditions.
- Validating distributed-system consensus and cache-coherence protocols.
- Security analysis of authentication and cryptographic protocols.

### Provenance

