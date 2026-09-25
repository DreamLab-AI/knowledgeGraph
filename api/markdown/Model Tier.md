A model tier is a named capability-and-cost band into which the language models available to an agent system are grouped, so that work can be routed to the cheapest model that is competent for it. A typical scheme distinguishes a small fast tier for classification and routing, a mid tier for routine generation, and a frontier tier for hard reasoning, each with characteristic latency, price per token, and quality envelope. Tiering turns the continuous space of model choices into a discrete policy surface that orchestration layers can reason about, enabling deliberate trade-offs between spend, speed, and answer quality across a workload.

### In Plain Terms

- Instead of always calling the biggest, most expensive model, you sort models into a few tiers — cheap-and-fast up to slow-and-smart — and send each task to the lowest tier that can still do it well.

### Semantic Classification

### Content

## Definition

A **Model Tier** is a coarse classification of language models by their capability and their cost, used as the basis for routing decisions in an agent or application. Providers increasingly ship families designed around exactly this idea — a lightweight model, a balanced mid model, and a flagship reasoning model — and a tiering policy names these bands and attaches routing rules to them. The point of a tier is that it is discrete: rather than reasoning about dozens of individual models, an orchestrator reasons about a handful of tiers with predictable characteristics.

Each tier is characterised by a bundle of properties: approximate quality on the tasks that matter, price per input and output token, typical latency, and context-window size. A routing layer maps incoming work to a tier — trivial extraction and intent-classification to the smallest tier, everyday drafting to the middle, and genuinely hard planning or multi-step reasoning to the frontier tier — and may escalate to a higher tier only when a cheaper attempt fails a quality check.

## Why Tiering Matters

- **Cost control.** The frontier tier can be an order of magnitude more expensive than the small tier; routing the majority of high-volume, low-difficulty calls downward is the single largest lever on inference spend.
- **Latency budgets.** Interactive surfaces route to fast tiers to stay responsive, reserving slow deep-reasoning tiers for background or explicitly deliberative steps.
- **Graceful escalation.** Tiers give a natural ladder: try cheap, verify, and only promote to a stronger tier on failure, which bounds cost while protecting quality.
- **Portability.** Because a tier is defined by role rather than by a specific model name, a system can swap the concrete model behind a tier as the market moves without rewriting its routing logic.

  Model tiering underpins [[CostEfficientInference]] and is a core mechanism of an [[LLMOrchestration]] layer. It is the policy counterpart to [[ModelSelection]]: selection picks the concrete model, while the tier defines the band that selection is choosing within.

