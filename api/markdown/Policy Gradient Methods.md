Policy Gradient Methods are a class of reinforcement-learning algorithms that directly optimise a parameterised policy by ascending the gradient of expected cumulative reward. Rather than deriving a policy from a learned value function, they adjust action probabilities to make rewarding behaviour more likely, using estimators such as REINFORCE and actor-critic variants. They naturally handle continuous and stochastic action spaces and underpin modern algorithms like proximal policy optimisation.

### Overview

- Policy Gradient Methods optimise behaviour by treating the policy itself as a differentiable function and following the gradient of expected return. The policy gradient theorem expresses this gradient as an expectation over trajectories, which REINFORCE estimates from sampled returns and actor-critic methods reduce in variance using a learned [[Value Function]] baseline. Because they parameterise stochastic policies directly, they excel in continuous-control [[Markov Decision Process]] settings where value-based methods struggle.

### Mechanisms

- Direct gradient ascent on expected cumulative [[Reward Function]] return.
- Policy gradient theorem expressing the objective as a trajectory expectation.
- Baselines and [[Value Function]] critics for variance reduction.
- Natural support for continuous and stochastic action spaces.
- Trust-region and clipping constraints in modern variants.

### Applications

- Continuous control in robotics and simulation.
- [[Deep Reinforcement Learning]] for games and decision-making.
- Fine-tuning of large models with reinforcement signals.
- Resource scheduling and sequential decision problems.

### Provenance

