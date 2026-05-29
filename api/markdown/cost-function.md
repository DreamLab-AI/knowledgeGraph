- ### Definition
  - A cost function is a scalar-valued mathematical function that quantifies the discrepancy between the current and desired states of a robotic system, or the total resource expenditure of a planned trajectory, providing the objective that control and planning algorithms minimise. In motion planning, cost functions encode factors such as path length, joint torque, collision risk, and time; in reinforcement learning they appear inverted as reward functions whose maximisation drives policy learning. The choice and design of the cost function critically shapes the behaviour of the optimised system, and poorly specified costs can lead to reward hacking or physically unrealisable trajectories.

- ### Semantic Classification
  - owl-class:: cost-function:Cost Function
  - owl-role:: Concept

- ### Relationships
  - enables [[Optimal Control]]
  - enables [[Motion Planning]]
  - relatedTo [[Reward Function]]
  - relatedTo [[Gradient Descent]]
  - uses [[Reinforcement Learning]]

- ### Content
  - Cost functions appear throughout robotics at multiple levels of abstraction. At the trajectory level, they encode geometric and dynamic criteria: a Cartesian path planner might minimise total arc length subject to joint-limit and obstacle-avoidance constraints, while a torque-minimising objective for a manipulator reduces actuator wear and energy consumption. Quadratic cost functions are popular in linear-quadratic regulator (LQR) formulations because they yield closed-form optimal solutions via the Riccati equation.
  - In sampling-based planners such as RRT* and PRM*, cost functions guide the rewiring and pruning of the search tree, ensuring convergence to asymptotically optimal paths as sample count grows. For trajectory optimisation methods such as CHOMP and TrajOpt, the cost function is expressed as a sum of smooth penalty terms that can be differentiated and minimised with gradient-based solvers.
  - In reinforcement learning, the cost function appears as the negation of the reward signal. Deep RL algorithms such as PPO and SAC learn policies that maximise cumulative discounted reward, which is equivalent to minimising a cumulative cost over the episode. Inverse reinforcement learning inverts this relationship, inferring the cost function that explains observed expert behaviour, enabling robots to learn task objectives from demonstration rather than hand-coded cost terms. Careful cost function design or learning is therefore one of the most consequential decisions in robot system development.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z