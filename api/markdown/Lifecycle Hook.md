
An extension point exposed at a defined moment in a system's execution lifecycle at which user-supplied code is invoked to observe or modify behaviour without altering the host itself. In agent runtimes, hooks fire before and after events such as a tool call, a model request, a task start, or a session end, and the registered handler can log, validate, transform inputs and outputs, inject context, or veto the action, making hooks the primary mechanism for deterministic, policy-driven customisation of an otherwise opaque agent loop.

- ### In Plain Terms
  - A lifecycle hook is a spot where you can plug in your own code to run at a specific moment — say, just before an agent uses a tool — to watch it, tweak it, or stop it.

- ### Semantic Classification

- ### Content

  ## Definition

  A **lifecycle hook** is a named, documented point in the flow of execution where the host framework hands control to code the user registered in advance. The host defines the moments — the "when" — and the developer supplies the behaviour — the "what". Because the interception point is fixed and the contract for the handler is explicit, hooks let an agent runtime be extended and governed from the outside without forking or patching its core loop. This inversion of control is what separates a hook from an ad-hoc edit: the host promises to call you at a known instant with a known payload.

  In agent systems the useful moments cluster around boundaries the loop crosses on every turn. Pre-tool-use and post-tool-use hooks bracket each tool invocation; pre-model and post-model hooks bracket each request to the language model; session-start and session-end hooks bracket the whole conversation; and task-level hooks fire as work items begin and complete. A handler attached to these points typically does one of a few jobs — emit structured telemetry, validate or rewrite the arguments about to be used, enrich the context with retrieved information, or return a veto that blocks the action entirely.

  ## Blocking versus Observing

  Hooks divide into observing and mutating kinds, and the distinction drives their design. An observing hook is fire-and-forget: it may log or emit a metric but must not change the outcome, so it can run asynchronously and its failure should not break the host. A mutating or blocking hook participates in the decision — it can alter the payload or refuse the operation — so it runs synchronously in the critical path and its own reliability and latency become part of the system's. Blocking hooks are how policy is enforced deterministically: a pre-tool hook that rejects a disallowed shell command is functioning as a guardrail.

  ## Relationship to Neighbouring Patterns

  A lifecycle hook is a close cousin of [[Middleware]], which wraps a request pipeline in a chain of before-and-after stages, and it shares the publish-and-react spirit of [[EventDrivenArchitecture]]. It differs from a [[Webhook]], which delivers an event across a network boundary to a remote HTTP endpoint; a lifecycle hook is an in-process callback within the same runtime. Composed across the turns of an agent loop, hooks provide the observability, validation, and context-injection seams that make a production [[AgenticWorkflow]] auditable and controllable rather than a black box.

