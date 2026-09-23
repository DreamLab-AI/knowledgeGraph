
Working memory is the short-lived, actively maintained store an agent uses to hold and manipulate the information relevant to its current task. In large-language-model agents it is realised through the context window, intermediate reasoning traces, and scratchpads, augmented by external stores when the active context is insufficient. It is distinguished from long-term memory by its limited capacity, volatility, and tight coupling to ongoing reasoning.

- [[Working Memory]] is the actively maintained, short-lived store an agent uses to hold the information needed for its current task, a component of any [[Cognitive Architecture]].
- In [[Large Language Model]] systems it is realised through the [[Context Window]], reasoning traces, and the [[Attention Mechanism]] that selects relevant content.
- When the active context is insufficient it is augmented by external memory via [[Retrieval-Augmented Generation]] over a [[Vector Database]].
- ### Overview
- Working memory holds the transient state of reasoning: the task description, intermediate conclusions, retrieved facts, and tool outputs currently in play.
- In transformer-based agents the context window functions as a capacity-limited working memory, with attention dynamically weighting which tokens influence the next step.
- Because the window is finite and volatile, agents offload less-relevant material to external stores and retrieve it on demand, blurring the line with long-term memory.
- ### Mechanisms
- Context window: the bounded sequence of tokens the model can attend to in a single forward pass.
- Attention weighting: the mechanism that focuses computation on task-relevant items held in context.
- Scratchpads and reasoning traces: explicit intermediate text that externalises working state.
- Memory augmentation: retrieval pipelines that load relevant items into the active context as needed.
- ### Applications
- Multi-step reasoning and chain-of-thought problem solving.
- Planning and tool use in autonomous agents that track sub-goals and results.
- Maintaining conversational and task state across turns.
- Combining retrieved knowledge with in-context computation.
- ### Provenance

