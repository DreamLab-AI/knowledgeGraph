A multi-agent orchestration pattern that separates deciding what to do from doing it: a planner component decomposes a goal into an ordered sequence of concrete steps, and one or more executor components carry those steps out, reporting results back so the plan can proceed or be revised. The split lets each role specialise — the planner reasons about strategy, dependencies, and ordering over the whole task, while executors focus narrowly on faithfully performing individual steps with the appropriate tools — and it makes the plan an explicit, inspectable artefact rather than an implicit chain of ad-hoc decisions.

### In Plain Terms

- One agent acts as the strategist that writes the to-do list, and other agents act as the workers that tick each item off — keeping big-picture planning and hands-on doing as separate jobs.

### Semantic Classification

### Content

## Definition

The **planner-executor pattern** structures an agentic system around two distinct responsibilities. A planner takes a high-level goal and produces a plan: an ordered, often dependency-aware list of steps that, if carried out, should achieve the goal. Executors then take those steps one at a time and perform them, using whatever tools each step demands, and return their outcomes. By making the plan a first-class object, the pattern turns an otherwise opaque problem-solving process into something that can be read, checked, cached, and repaired.

The separation is valuable because planning and executing reward different capabilities. Good planning needs breadth — an understanding of how steps depend on one another and where the risky parts of a task lie — whereas good execution needs precision and correct tool use on a single, well-scoped action. Holding both in one undifferentiated loop tends to produce agents that either lose the thread of the overall goal while mired in a step, or skip lightly over steps while gesturing at a plan. The pattern is a form of [[TaskDelegation]] and therefore presupposes a [[MultiAgentSystem]], even when the "agents" are different configurations of the same underlying model.

## Replanning

Real tasks rarely survive contact with execution unchanged, so mature implementations close the loop: executor results flow back to the planner, which can amend the remaining plan when a step fails, returns surprising information, or invalidates a later assumption. This replanning capability is what separates the pattern from a rigid script. The planner may re-order steps, insert new ones, or abandon a branch entirely. The cost is additional planning calls and the need to keep the plan and the world state consistent as execution proceeds.

## Relationship to Neighbouring Patterns

The planner-executor pattern sits within [[MultiAgentOrchestration]] and is closely related to the [[SupervisorWorkerPattern]]: both centralise coordination in one role and distribute effort to others. The distinction is one of emphasis — the supervisor-worker framing stresses ongoing management and delegation of live work, while the planner-executor framing stresses the up-front construction of an explicit plan that then drives execution. In practice systems blend the two, and both are common building blocks in the wider toolkit of [[LLMOrchestration]].

