
Reward shaping is a reinforcement-learning technique that augments an environment's native reward signal with additional intermediate rewards to guide and accelerate learning. Potential-based reward shaping provides theoretical guarantees that the optimal policy is preserved, avoiding the introduction of unintended behaviours. It is commonly used to address sparse-reward problems where useful feedback is rare.

- ### Overview
  - Reward shaping injects extra reward terms that make the gradient of progress denser and easier to follow.
  - Naive shaping risks changing the optimal policy and inducing reward hacking, where the agent exploits the proxy signal.
  - Potential-based reward shaping defines the extra reward as the difference of a potential function over consecutive states, which provably leaves the optimal policy unchanged.
  - Shaping is especially valuable in sparse-reward tasks where the agent rarely sees informative feedback.
- ### Mechanisms
  - Potential function over states whose differences form the shaping reward.
  - Difference-of-potentials formula F(s,s') = gamma*phi(s') - phi(s).
  - Curriculum and distance-based heuristics for designing potentials.
  - Guarding against reward hacking by validating that proxy and true objectives align.
  - Integration with value-function estimates as a learned potential.
- ### Applications
  - Speeding up training in sparse-reward robotics and control tasks.
  - Guiding exploration in navigation and game-playing agents.
  - Encoding domain knowledge as soft guidance without overriding the goal.
  - Stabilising learning in long-horizon decision problems.
- ### Provenance

