
A reward signal is the scalar feedback an agent receives from its environment in reinforcement learning, indicating the immediate desirability of the state-action pair just experienced. It is the primary mechanism by which goals are communicated to a learning agent, which seeks to maximise the cumulative reward it accumulates over time rather than any single immediate value. The design of the reward signal strongly shapes learned behaviour, and poorly specified rewards can lead to unintended or degenerate strategies.

- ### Overview
  - The reward signal encodes what an agent should achieve, not how to achieve it.
  - Agents optimise the expected sum of future rewards, the return.
  - Discounting weighs near-term rewards more heavily than distant ones.
  - Reward shaping adds intermediate signals to accelerate learning.
- ### Mechanisms
  - Rewards are scalar feedback delivered at each environment step.
  - Sparse rewards make credit assignment harder than dense ones.
  - Reward hacking occurs when agents exploit misspecified objectives.
  - Value functions estimate expected cumulative reward.
  - Temporal-difference methods bootstrap value from reward signals.
- ### Applications
  - Game-playing agents learning from win or loss outcomes.
  - Robotic control rewarded for task completion.
  - Recommendation and dialogue systems tuned via feedback.
  - Operations and control optimised against performance metrics.
- ### Provenance

