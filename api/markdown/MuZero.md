MuZero is a model-based reinforcement learning algorithm from DeepMind that achieves superhuman performance in board games and Atari without being given the rules of the environment. It learns a latent dynamics model predicting reward, value, and policy, then plans with Monte Carlo Tree Search over this learned model. It generalises AlphaZero to domains where the environment dynamics are unknown.

### Content

- Rather than predicting raw observations, MuZero learns just the quantities needed for planning, reward, value, and policy, in an abstract latent space, sidestepping the difficulty of modelling full environment dynamics. This let it match AlphaZero on Go, chess, and shogi while also excelling at Atari from pixels.

