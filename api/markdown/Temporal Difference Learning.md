Temporal difference (TD) learning is a class of model-free reinforcement learning methods that estimate value functions by bootstrapping: each value estimate is updated towards a target composed of the immediate reward plus the discounted estimate of the successor state, rather than waiting for a full episode return. The TD error, the difference between the bootstrapped target and the current estimate, drives incremental updates and underpins algorithms such as TD(0), TD(lambda), SARSA, and Q-learning. By combining the sampling of Monte Carlo methods with the bootstrapping of dynamic programming, TD learning enables online, incremental learning from incomplete sequences.

### Overview

- TD learning sits between Monte Carlo methods and dynamic programming. Like Monte Carlo it learns directly from sampled experience without a model of the environment; like dynamic programming it updates estimates using other estimates (bootstrapping) rather than waiting for the final return.
- The canonical TD(0) update adjusts the value of the current state towards the reward plus the discounted value of the next state. The magnitude of this adjustment is the TD error, a quantity that also has a striking correspondence to dopaminergic reward-prediction signals in neuroscience.
- TD(lambda) generalises this by blending n-step returns through an exponentially weighted eligibility trace, interpolating smoothly between one-step TD and full Monte Carlo updates.
- When combined with function approximation and deep networks, TD methods yield deep Q-networks and actor-critic algorithms that scale to high-dimensional state spaces.

### Mechanisms

- Bootstrapping: updating an estimate using a later, partly estimated target.
- TD error: the scalar difference that signals how surprising an outcome was.
- Eligibility traces: short-term memory of recently visited states for credit assignment.
- On-policy (SARSA) versus off-policy (Q-learning) control variants.

### Applications

- Game playing and control agents (Atari, board games, robotics).
- Critic estimation in actor-critic and [[Policy Gradient]] methods.
- Recommendation and sequential decision systems.
- Operations research and adaptive control problems framed as a [[Markov Decision Process]].

### Provenance

