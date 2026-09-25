The assembly layer at the top of the knowledge stack. A context graph consumes the layers beneath it — a formal ontology, a populated knowledge graph, and operational sources such as documents, chat history and tool outputs — to assemble the working set of information an AI agent needs for its next response. It does not compete with the ontology or the knowledge graph; it selects from them under a token budget. In the DreamLab mesh this layer is implemented by the Ontology Loom, which retrieves a budget-clamped structured scaffold from the reasoned ontology and injects it into model context at query time.

## Where it sits in the stack

- Reading the knowledge stack bottom-up: a [[Taxonomy]] gives clean is-a categories; an [[Ontology]] extends that into a full formal vocabulary of classes, typed properties and logical rules; a [[Knowledge Graph]] populates that vocabulary with instance data at scale so facts can be traversed and queried; and the context graph sits above all of them, assembling the right working set for an agent's next response.
- The term gained traction in industry writing during 2024–2026 as agent frameworks converged on the same problem: an agent's bottleneck is not model capability but the selection of which facts, documents and history belong in its context window right now. It has not yet settled — competing vendor framings use it for decision-trace audit records and for temporal agent memory; this graph uses the assembly sense only.

## The DreamLab implementation

- The [[Ontology Loom]] is this layer in the DreamLab mesh. It serves `POST /loom/scaffold` — a retrieval that returns the taxonomy slice, typed relations and definitions relevant to a query with no model involved at all — and an OpenAI-compatible chat endpoint that injects the same scaffold before delegating to whichever model is deployed behind the façade.
- The scaffold is budget-clamped: the context graph's job is selection under constraint, not accumulation.

## What it is not

- Not a competitor to the [[Knowledge Graph]] — it holds no facts of its own; it selects from graphs that do.
- Not a semantic layer in the business-intelligence sense (governed metric definitions over warehouse data); that is a parallel concept from a different tradition, and the DreamLab mesh does not ship one.

