Model-based reinforcement learning is a class of reinforcement learning in which the agent learns or is given an explicit model of the environment's dynamics and reward, then uses that model to plan or to generate simulated experience for policy improvement. By predicting future states it can be far more sample-efficient than model-free methods, at the cost of vulnerability to model error. It underpins planning algorithms, world models and many robotics control approaches.

### Overview

- Instead of learning a policy purely from trial and error, a model-based agent first builds a predictive model of transitions and rewards, then exploits it to plan ahead or to imagine training data.
- This dramatically improves sample efficiency, which is decisive in robotics where real-world interaction is slow and costly.

### Mechanisms

- Dynamics learning: fitting a transition and reward model from collected experience.
- Planning: rolling the model forward to evaluate action sequences, as in model predictive control.
- Dyna-style integration: mixing real and model-generated experience to update a policy or value function.

### Applications

- Sample-efficient robotic manipulation and locomotion control.
- World-model agents that learn behaviour largely in imagination.
- Model predictive control of physical systems with learned dynamics.

### Provenance

