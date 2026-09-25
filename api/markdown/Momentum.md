Momentum is an optimisation technique that accelerates gradient descent by accumulating an exponentially weighted moving average of past gradients and using it to update parameters. By carrying velocity from prior steps, it damps oscillations across steep directions and speeds progress along consistent ones, improving convergence on ill-conditioned loss surfaces. Momentum underlies many modern optimisers, with Nesterov's variant and adaptive methods such as Adam building directly on its formulation.

- Momentum is an [[Optimisation Algorithm]] enhancement that accumulates a moving average of past gradients to accelerate [[Gradient Descent]]. It uses the current [[Gradient]] and a [[Learning Rate]] together with a velocity term to make smoother, faster parameter updates.
- By carrying inertia between steps, it damps oscillation and improves [[Convergence]] on ill-conditioned [[Loss Function]] landscapes.

### Overview

- Plain gradient descent can zig-zag across narrow valleys and crawl along shallow directions. Momentum addresses both: it builds velocity in directions where gradients consistently point, while averaging out noisy, oscillating components.
- The update maintains a velocity vector that blends the previous velocity (scaled by a momentum coefficient, often around 0.9) with the current gradient. Parameters move according to this velocity rather than the raw gradient.
- Nesterov accelerated gradient refines this by evaluating the gradient at a look-ahead position, often yielding better convergence. Adaptive optimisers such as Adam combine momentum on the first moment with per-parameter scaling.

### Mechanisms

- Velocity accumulation: an exponentially weighted average of gradients.
- Momentum coefficient: controls how much past velocity persists.
- Update rule: parameters step along the velocity vector scaled by the learning rate.
- Nesterov look-ahead: gradient evaluated at the anticipated next position.

### Applications

- Training deep neural networks where loss surfaces are highly non-convex.
- Stochastic gradient descent with momentum as a robust default optimiser.
- Foundation for adaptive optimisers such as Adam and RMSProp variants.
- Accelerating convergence in large-scale and distributed training.

### Provenance

