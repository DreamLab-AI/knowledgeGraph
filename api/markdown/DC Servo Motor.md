DC servo motor combines a direct-current electric motor with integrated or external feedback control electronics to enable precise position, velocity, or torque regulation.

### Semantic Classification

### Content

DC servo motors operate by continuously monitoring motor position or velocity through an encoder or potentiometer, comparing the measured value to a command signal, and adjusting armature current through a power amplifier to drive the motor toward the desired state. The control law, typically proportional-integral-derivative (PID) or more advanced schemes, determines servo bandwidth and stability. DC servos offer simple electrical control, inherent current limiting, and well-understood dynamics making them ideal for precise [[Robotic Joint]] actuators.

The advantage of servo feedback lies in bandwidth multiplication: without feedback, motor response is limited by electromagnetic time constants (tens of milliseconds); with servo control, closed-loop bandwidth can reach hundreds of hertz. This enables stiff joint control resisting external disturbances, accurate trajectory following despite load variations, and stability under friction and compliance uncertainties. However, servo systems require careful tuning to avoid oscillation, and encoder noise at high bandwidths necessitates filtering that reintroduces lag.

Modern DC servo implementations integrate electronics directly onto motor windings, reducing wiring complexity and improving reliability. Brushless DC motors with electronic commutation replace mechanical brushes, extending lifetime and enabling higher speeds. Advanced implementations incorporate multi-loop control hierarchies separating position, velocity, and current loops with different bandwidths, and adaptive gain scheduling that tunes controller parameters based on estimated load inertia and friction.

### Provenance

