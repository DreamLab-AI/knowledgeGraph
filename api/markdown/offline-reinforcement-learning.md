- ### Definition
  - Offline reinforcement learning trains a policy from a fixed dataset of previously collected experience without further interaction with the environment. It avoids online exploration, which makes it suitable where data collection is costly or unsafe.

- ### Semantic Classification
  - owl-class:: machine-learning:OfflineReinforcementLearning
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Reinforcement Learning]]
  - bridges-to:: [[Imitation Learning]], [[Reward Function]]
  - requires:: [[Reinforcement Learning]], [[Markov Decision Process]]
  - enables:: [[Learning from Demonstration]]

- ### Content
  - Offline reinforcement learning, also called batch reinforcement learning, learns a policy entirely from a stored dataset of transitions. The central difficulty is distributional shift, because the learned policy may prefer actions that are poorly represented in the data, leading to overestimated values.
  - Methods address this by constraining the policy to stay close to the data distribution or by penalising uncertain value estimates. The setting is attractive in robotics, healthcare and other domains where live trial and error is impractical.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z