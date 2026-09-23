
Multi-agent reinforcement learning (MARL) extends reinforcement learning to settings where several agents learn concurrently while interacting in a shared environment. Each agent optimises its own policy, but the environment is non-stationary from any single agent's perspective because the others are simultaneously adapting, which raises challenges of coordination, competition, credit assignment and equilibrium selection. MARL draws on game theory to analyse cooperative, competitive and mixed incentive structures and underpins applications from team robotics to automated trading and traffic control.

- ### Overview
  - In single-agent reinforcement learning one policy learns against a fixed environment. MARL removes that assumption: multiple agents learn at once, so each agent's environment shifts as the others adapt. This non-stationarity is the defining technical difficulty and motivates specialised training schemes.
  - The field spans fully cooperative teams sharing a reward, fully competitive zero-sum settings, and mixed-motive scenarios where agents must both cooperate and compete. Game-theoretic concepts such as equilibria and best responses provide the analytical backbone.
- ### Key aspects
  - Non-stationarity: simultaneous learning makes the effective environment a moving target for every agent.
  - Credit assignment: in cooperative teams, attributing shared outcomes to individual actions is hard.
  - Centralised training, decentralised execution: a common paradigm that shares information during learning but acts locally at deployment.
  - Emergent coordination: communication and convention can arise without being explicitly programmed.
- ### Mechanisms
  - Agents model the joint policy through value decomposition or actor-critic methods with shared or per-agent critics.
  - Opponent modelling and communication channels reduce the impact of non-stationarity.
  - Self-play and population-based training drive improvement in competitive settings.
- ### Applications
  - Cooperative robotics, autonomous traffic and fleet control, automated trading, network routing, and strategy games.
- ### Provenance

