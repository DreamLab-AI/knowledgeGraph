public:: true
alias:: ValueFunction

# Value Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:value-function",
  "@type": "Page",
  "vc:slug": "value-function",
  "title": "Value Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:value-function",
  "@type": "Class",
  "label": "Value Function",
  "definition": "A value function in reinforcement learning estimates the expected cumulative future reward obtainable from a given state (state-value) or state-action pair (action-value) under a particular policy. It captures the long-term desirability of situations rather than immediate reward, and satisfies the recursive Bellman equation that relates the value of a state to the values of its successors. Value functions are central to dynamic programming, temporal-difference learning, and actor-critic methods, providing the signal that guides an agent toward reward-maximising behaviour.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:markov-decision-process", "label": "Markov Decision Process"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:optimal-control", "label": "Optimal Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A value function estimates the expected cumulative future reward from a state or state-action pair under a policy, capturing long-term desirability and satisfying the recursive Bellman equation.

- ### Relationships
  - Value Function is a subclass of [[Reinforcement Learning]] machinery and uses the [[Markov Decision Process]] formalism that defines states, actions, and rewards. It supports [[Optimal Control]], whose cost-to-go is its negated analogue, and relates to [[Machine Learning]] broadly through the function approximators used to represent it.

- ### Content
  - The value function answers the question an agent must repeatedly confront: not "what reward do I get now?" but "how good is it to be here, given everything that follows?" By summing discounted future rewards in expectation, it converts the sequential, delayed-consequence nature of decision problems into a scalar measure of state desirability, allowing an agent to prefer actions that lead to good situations even when immediate reward is low.

  - Its defining mathematical property is recursion through the Bellman equation, which states that the value of a state equals the immediate reward plus the discounted value of the successor state. This self-consistency turns value estimation into a fixed-point problem solvable by iteration: dynamic programming sweeps the equation to convergence when the model is known, while temporal-difference learning bootstraps estimates from sampled experience when it is not, updating each estimate toward the observed reward plus the current estimate of the next state.

  - Two flavours recur throughout the field. The state-value function evaluates how good a state is under a policy; the action-value (Q) function evaluates how good taking a specific action in a state is, which is more directly useful for control because the agent can simply choose the highest-valued action. Q-learning and its deep-network descendants learn the optimal action-value function directly, and value estimates also serve as the critic that reduces variance in policy-gradient and actor-critic methods.

  - In large or continuous state spaces, the value function cannot be tabulated and must be approximated, classically with linear features and now predominantly with deep neural networks. This combination — value functions represented by neural approximators and trained with temporal-difference targets — powered landmark results in game playing and robotics, while also introducing instabilities (the deadly triad of bootstrapping, off-policy learning, and function approximation) that motivate techniques such as target networks and experience replay to keep learning stable.
