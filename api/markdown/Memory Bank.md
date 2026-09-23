
A memory bank is a structured, persistent repository of curated project and task context that an autonomous agent reads at the start of every session and updates as work progresses, so that knowledge survives the resetting of the model's ephemeral context window. Typically realised as a set of versioned markdown or database records (project brief, active decisions, progress log, architectural notes), it gives a stateless language model durable long-term memory, enabling continuity of intent, avoidance of repeated discovery, and coherent behaviour across many disconnected invocations of the same or different agents.

- ### In Plain Terms
  - Because an AI agent forgets everything when its context resets, a memory bank is the notebook it writes to and re-reads every time it starts, so the next session already knows the plan, the decisions, and what is done.

- ### Semantic Classification

- ### Content

  ## Definition

  A **Memory Bank** is a discipline and artifact for giving otherwise stateless language-model agents durable, retrievable memory. Because a model's working context is bounded and is wiped between sessions, any fact that must outlive a single conversation has to be externalised. The memory bank is the canonical place that externalised knowledge lives: a small, deliberately structured corpus that the agent is instructed to load before acting and to amend after acting.

  In practice a memory bank is organised into typed documents rather than a single blob — for example a product/brief file describing why the project exists, an active-context file describing the current focus and open questions, a decisions log, a progress ledger, and a system/architecture map. This typing matters: it lets the agent read selectively, keeps each record small enough to fit alongside live task context, and makes updates auditable. The pattern is closely associated with coding assistants (Cline, Roo, Cursor rules) but generalises to any long-running agent that must maintain project awareness across many turns.

  ## Design Considerations

  - **Read-then-act, act-then-write.** The value of a memory bank collapses if the agent forgets to consult it, so the loading step is usually enforced by the system prompt or a pre-task hook rather than left to the model's discretion.
  - **Curation over accumulation.** A memory bank is not a transcript. Entries are summarised and pruned so that signal is not buried; stale decisions are superseded explicitly rather than appended endlessly.
  - **Versioning.** Storing the bank under version control (or an append-only store) gives provenance and rollback, so a bad automated edit can be reverted and the evolution of intent can be inspected.
  - **Scope boundaries.** Project-level memory (decisions, architecture) is kept distinct from personal or cross-project memory to avoid leaking context between unrelated tasks.

  A memory bank contrasts with a raw vector [[MemoryStore]] retrieval index: the memory bank favours a compact, human-legible, hand-curated set of documents optimised for reliable reload, whereas a vector store favours large-scale semantic recall. Mature agent stacks combine both — the bank for authoritative current state, the store for breadth.

