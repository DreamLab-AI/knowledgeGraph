Dialogue management is the component of a conversational system that tracks the evolving state of an interaction and decides the system's next action at each turn. It maintains context across utterances, integrates recognised user intents and slots, and selects responses or operations that move the conversation toward the user's goal. It is the control layer that connects language understanding to language generation in a dialogue agent.

### Overview

- A dialogue manager sits between language understanding and language generation, deciding what the agent should do or say given the conversation so far.
- Dialogue state tracking maintains a belief over the user's goals, filled slots, and history, updating it as new utterances arrive.
- Policy approaches range from hand-authored finite-state and frame-based rules to learned policies optimised with reinforcement learning, and increasingly to large-language-model-driven planning.
- The manager handles clarification, confirmation, error recovery, and topic switching to keep interactions on track.

### Mechanisms

- State tracking: estimating and updating the current dialogue state from observations.
- Policy: mapping the tracked state to the next action, whether an API call or a response intent.
- Context management: retaining and resolving references across turns.
- Evaluation: task success, turn count, and user satisfaction guide policy improvement.

### Applications

- Task-oriented assistants for booking, support, and transactions.
- Multi-turn [[Chatbot]] experiences that remember prior turns.
- Voice assistants coordinating understanding, action, and spoken responses.

### Provenance

