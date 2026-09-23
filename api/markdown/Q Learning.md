
Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the value of taking a given action in a given state by iteratively updating an action-value (Q) function towards a bootstrapped Bellman target. Because it learns the optimal action-value function regardless of the policy being followed, it converges to optimal behaviour without requiring a model of the environment's dynamics. It is a foundational algorithm extended by deep Q-networks for high-dimensional problems.

- ### Overview
	- Introduced by Watkins in 1989, Q-learning maintains an estimate Q(s, a) of the expected discounted return for taking action a in state s and acting optimally thereafter. After each transition it nudges the estimate towards the observed reward plus the discounted maximum Q-value of the next state.
	- The "off-policy" property means the agent can explore using one policy (for example epsilon-greedy) while learning the value of the greedy optimal policy. Under suitable conditions on the learning rate and exploration, tabular Q-learning is proven to converge to the optimal action-value function.
	- For large or continuous state spaces, the table is replaced by a function approximator. Deep Q-networks combine Q-learning with neural networks, experience replay, and target networks to achieve stability, enabling agents to learn directly from raw sensory input.
- ### Mechanisms
	- Maintains an action-value estimate Q(s, a) updated by temporal-difference error.
	- Uses a bootstrapped [[Bellman Equation]] target with a discount factor.
	- Learns off-policy, decoupling exploration from the policy being evaluated.
	- Balances exploration and exploitation, commonly via epsilon-greedy action selection.
	- Scales through function approximation in [[Deep Reinforcement Learning]] with replay and target networks.
- ### Applications
	- Game-playing agents and control of simulated and physical robots.
	- Resource scheduling, routing, and energy-management decision problems.
	- Recommendation and bidding systems framed as sequential decisions.
	- Foundation for deep Q-network variants in high-dimensional perception tasks.
- ### Provenance

