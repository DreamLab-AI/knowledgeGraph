A finite state machine (FSM) is an abstract computational model consisting of a finite set of states, a set of input events, and a transition function that maps a current state and input to a next state. At any moment the machine occupies exactly one state, and its behaviour is fully determined by its current state and the inputs it receives. FSMs are widely used to specify control logic, protocol behaviour, and reactive systems.

### Overview

- FSMs come in two principal flavours: deterministic, where each state-input pair has exactly one successor, and non-deterministic, where multiple successors are permitted. Acceptor variants (recognisers) decide whether an input string belongs to a language, while transducer variants (Mealy and Moore machines) emit outputs during operation. Because the model is simple and verifiable, FSMs underpin lexical analysers, communication protocols, embedded controllers, and game agent logic.

### Key aspects

- States, transitions, and an initial state form the core structure.
- Deterministic versus non-deterministic transition functions.
- Mealy machines emit output on transitions; Moore machines emit output per state.
- Equivalent in expressive power to regular languages and regular expressions.
- Strictly less powerful than pushdown automata or Turing machines, which add memory.

### Applications

- Lexical analysis and tokenisation in compilers.
- Network and communication protocol specification.
- Non-player character behaviour in games.
- Embedded and reactive control systems.
- User-interface and dialogue flow modelling.

### Provenance

