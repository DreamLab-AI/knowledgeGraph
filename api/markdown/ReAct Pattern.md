
ReAct (Reasoning and Acting) is a prompting and agent-control pattern in which a language model interleaves explicit reasoning traces with action steps such as tool calls, observing the results before reasoning again. This loop lets the model decompose tasks, gather information, and self-correct rather than answering in a single pass. It is a foundational design for tool-using LLM agents.

- ### Content
  - A ReAct trace alternates Thought, Action, and Observation steps until the agent decides it can answer. Grounding reasoning in tool observations reduces hallucination and enables multi-step problem solving, but adds latency and token cost, and demands robust parsing and error handling around tool invocations.

