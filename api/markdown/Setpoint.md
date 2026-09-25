A setpoint is the desired target value that a control system attempts to maintain for a measured process variable, serving as the reference against which the controller compares the actual measurement. The difference between setpoint and measured value is the error signal that drives corrective action in a feedback loop. Setpoints can be fixed, scheduled, or continuously varying, as when a controller tracks a moving reference trajectory.

- A Setpoint is the target reference value within [[Closed-Loop Control]] and a [[Feedback Loop]], compared against the measured variable to produce the error that drives a [[PID Controller]].
- It expresses the goal state the system must reach and hold using a [[Sensor]] for measurement.

### Overview

- The setpoint is the goal a control system pursues: a temperature to maintain, a speed to hold, a position to reach. The controller continuously measures the actual process variable, subtracts it from the setpoint to form an error, and commands an actuator to drive that error towards zero.
- Setpoints come in several forms. A fixed setpoint stays constant, as in a thermostat. A scheduled setpoint changes over time according to a plan, as in a heating programme. A tracking setpoint follows a continuously varying reference, as when a robot joint follows a planned trajectory.
- Choosing and shaping setpoints well is part of control design: abrupt setpoint changes can cause overshoot, so smoothing or ramping the reference improves transient behaviour and protects equipment.

### Key aspects

- The error signal is defined as the difference between setpoint and measured value.
- Setpoint tracking measures how closely the output follows a changing reference.
- Disturbance rejection measures how well the output is held at the setpoint despite external upsets.
- Reference shaping, such as ramping or filtering, limits overshoot during setpoint changes.
- Cascaded control uses the output of one loop as the setpoint of an inner loop.

### Applications

- Thermostats and HVAC systems holding a target temperature.
- Industrial process control maintaining pressure, flow, or level at a target.
- Robotics and motion control commanding joint positions and velocities.
- Cruise control and autopilots tracking a commanded speed or heading.

### Provenance

