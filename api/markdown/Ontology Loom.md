
A portable serving node that grounds LLM responses in a formal ontology behind a stable, model-swappable façade. At query time it retrieves the relevant slice of the reasoned ontology, injects it as a budget-clamped structured scaffold, and delegates generation to whichever model sits behind it, so the model restates checked facts rather than performing open-ended recall. On a held-out benchmark, static scaffold grounding lifted paired answer scores to 0.94 on two different models, from parametric baselines of 0.146 and 0.268, at three to six times lower latency. The Ontology Loom is the DreamLab mesh's implementation of the context-graph layer. Distinct from Loom, the screen-recording product.

- ## What it does
	- Consumers — agents, an email gateway, any OpenAI-compatible client — hold one endpoint. The Loom retrieves the relevant slice of the reasoned [[Ontology]], injects it as structured context, and delegates generation to the model deployed behind the façade. Swapping that model changes no consumer.
	- `POST /loom/scaffold` returns the retrieval alone — taxonomy slice, typed relations, definitions — with no model in the loop. This is the [[Context Graph]] assembly step, exposed as its own primitive.
- ## The measured case for grounding
	- On a held-out 37-question benchmark with gold answers derived from the graph itself, two models with very different parametric baselines (0.146 and 0.268) both landed at 0.94 when grounded through the scaffold, three to six times faster than ungrounded generation.
	- The lift concentrates in niche domains the models do not already know — blockchain, robotics, standards — and adds nothing where the model was already right, which is the signature of genuine grounding rather than leakage.
	- Structured scaffold carries the value; prose renderings of the same content added nothing measurable and are off the default path.
- ## Why it exists
	- Content stays on the LAN: the Loom delegates only to a local or LAN model, which is what makes it usable as a privacy boundary for personal data.
	- It decouples the knowledge stack from the model market. The corpus, ontology and [[Reasoning Engine]] evolve on their own schedule; the deployed model is a URL behind the façade, chosen by benchmark.

