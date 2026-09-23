
The Bellman equation is a recursive relationship that expresses the value of a state as the immediate reward plus the discounted value of successor states under a given policy. It is the mathematical foundation of dynamic programming and reinforcement learning, characterising optimal behaviour through the principle of optimality. Solving or approximating the Bellman equation yields value functions and optimal policies for sequential decision problems.

- ### Overview
	- Richard Bellman introduced the equation in the 1950s as the engine of dynamic programming. Its key idea is that an optimal policy has the property that whatever the initial state and decision, the remaining decisions must constitute an optimal policy for the resulting state.
	- For a fixed policy, the Bellman expectation equation defines the value function as a fixed point: V(s) equals the expected reward plus the discounted expected value of the next state. The Bellman optimality equation replaces the expectation over a fixed policy with a maximisation over actions, characterising the optimal value function.
	- These equations are contraction mappings under discounting, so iterative methods such as value iteration and policy iteration converge to the unique solution. Model-free methods like temporal-difference learning and Q-learning approximate the same fixed point from sampled experience.
- ### Mechanisms
	- Decomposes long-horizon return into immediate reward plus discounted future value.
	- Defines a fixed point that value iteration and policy iteration solve by repeated application.
	- Acts as a contraction under the discount factor, guaranteeing convergence.
	- Provides the bootstrapping target used by temporal-difference and [[Q Learning]] updates.
	- Generalises to continuous state and action spaces via the Hamilton–Jacobi–Bellman equation in [[Optimal Control]].
- ### Applications
	- Computing optimal policies in robotics, operations research, and game playing.
	- Underpinning value-based [[Reinforcement Learning]] agents and deep Q-networks.
	- Inventory, resource-allocation, and scheduling problems solved by dynamic programming.
	- Continuous-time optimal control of dynamical and economic systems.
- ### Provenance

