- ### Definition
  - [[Multi-Robot Systems]] are coordinated ensembles of two or more robotic agents sharing world models and communication links to accomplish complex tasks — such as exploration, construction, or logistics — that exceed the capability of any individual [[Autonomous Robot]].

- ### Relationships
  - Multi-robot systems depend on [[Robotic Control]] architectures to manage each agent, employ [[Robot Operating System]] middleware for communication, and apply [[Consensus Algorithm]] approaches to align distributed decisions, while large-scale deployments converge on [[Swarm Robotics]] emergent-behaviour principles and [[Fleet Management]] infrastructure for operational oversight.

- ### Content
  - The field emerged in the late 1980s from distributed AI and the recognition that parallel embodied agents could solve problems intractable for single robots. Early work focused on simple biological analogies — ant colonies and bee swarms — before maturing into rigorous task-allocation and market-based coordination frameworks through the 1990s and 2000s.

  - Coordination in MRS operates across several layers: perception fusion aggregates sensor streams from multiple agents; task allocation assigns objectives using auction-based or optimisation algorithms; motion planning ensures collision-free trajectories respecting both individual dynamics and inter-robot constraints; and communication protocols propagate state updates within latency budgets.

  - Industrial applications drive commercial adoption. Warehouse systems such as those deployed by Amazon and Ocado use hundreds of ground robots coordinated in real time. Search-and-rescue MRS can penetrate disaster environments with heterogeneous aerial-ground teams where no single platform suffices. Agricultural fleets spray, harvest, and monitor fields with a fraction of the human labour previously required.

  - In 2024-2025, large language models are being integrated as high-level task planners for heterogeneous robot teams, enabling natural-language mission specification. Foundation models for robotics pre-trained on diverse manipulation and navigation data are reducing per-robot sample complexity. Sim-to-real transfer using photorealistic simulation is accelerating the deployment of multi-robot coordination policies trained entirely in software.