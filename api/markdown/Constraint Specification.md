A constraint specification is a formal statement of the limits and conditions a control system or plan must satisfy, such as joint limits, actuator bounds, obstacle avoidance, and safety envelopes. It is supplied to control and optimisation algorithms so that generated commands remain feasible and safe. Precise constraint specification is essential for model-based and optimisation-based control design.

### Content

- Constraints may be equality or inequality, hard or soft, and span kinematic, dynamic, and environmental limits. Optimisation-based controllers such as model predictive control encode them directly in the solver, while reactive schemes enforce them through saturation or barrier functions.

