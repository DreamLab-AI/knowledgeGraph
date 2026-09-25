A control loop is the cyclical process by which a system measures its current state, compares it against a desired set point and applies corrective action to reduce the difference. Closed-loop control uses feedback from sensors to continuously regulate an actuator, while open-loop control acts without such feedback. Control loops are foundational to automation, cyber-physical systems and the reconciliation pattern used in infrastructure orchestration.

### Overview

- The control loop is one of the oldest and most pervasive abstractions in engineering, from a thermostat regulating temperature to a robot maintaining balance. In modern infrastructure the same sense-decide-act pattern reappears as the reconciliation loop that drives declarative orchestration toward a desired state.

### Mechanisms

- Sensing the current state of the controlled process
- Comparing measured state against a set point to compute error
- Computing a corrective action, often via a controller such as a PID controller
- Actuating the change and repeating the cycle continuously

### Applications

- Industrial process and motion control
- Robotics balance and trajectory control
- Building climate and energy management
- Declarative reconciliation in orchestration systems

### Provenance

