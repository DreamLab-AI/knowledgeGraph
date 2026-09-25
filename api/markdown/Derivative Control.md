Derivative control responds to the rate of change of system error, providing damping that opposes oscillations and improves transient response.

### Semantic Classification

### Content

Derivative control computes the time derivative of the control error and multiplies it by a gain coefficient to produce an output signal proportional to error velocity. Intuitively, the derivative term acts like friction: if error is increasing, the derivative term produces a large opposing action to slow the growth; if error is decreasing, the derivative term produces less opposition allowing faster convergence. This mechanism substantially improves transient response compared to proportional control alone.

The implementation challenge lies in noise sensitivity: taking numerical derivatives of noisy sensor signals amplifies measurement noise at high frequencies, potentially destabilising the control loop. Engineers typically employ low-pass filters on the error or error derivative, and tune the derivative gain carefully to balance damping benefits against noise amplification. The derivative term becomes ineffective if there are large delays in the measurement or actuation paths, since the control action responds to past error rates rather than current errors.

In robotics, derivative control becomes essential for [[Robotic Joint]] control where aggressive proportional gains would cause oscillation due to motor lag and load inertia. [[Model Predictive Control]] and [[Learning-Based Controllers]] can be viewed as generalisations that implicitly include derivative-like terms through state prediction. Modern implementations often employ filtered derivative terms or estimated state velocities from [[Kalman Filters]] rather than raw error derivatives, improving robustness whilst retaining the beneficial damping properties.

### Provenance

