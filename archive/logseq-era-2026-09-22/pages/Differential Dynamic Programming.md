public:: true

# Differential Dynamic Programming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:differential-dynamic-programming",
  "@type": "Page",
  "vc:slug": "differential-dynamic-programming",
  "title": "Differential Dynamic Programming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:differential-dynamic-programming",
  "@type": "Class",
  "label": "Differential Dynamic Programming",
  "definition": "Differential Dynamic Programming (DDP) is a trajectory-optimisation algorithm that solves optimal-control problems by iteratively improving a control sequence using second-order local approximations of the dynamics and cost along the current trajectory. It performs a backward pass computing value-function derivatives and feedback gains, followed by a forward pass that applies the improved controls, converging quadratically near a solution. Together with its Gauss-Newton variant iLQR, DDP is widely used in robotics and model-predictive control for generating smooth, dynamically feasible motions.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:optimal-control", "label": "Optimal Control"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:markov-decision-process", "label": "Markov Decision Process"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Differential Dynamic Programming is a trajectory-optimisation algorithm that iteratively improves a control sequence using second-order local approximations of dynamics and cost, alternating a backward derivative pass with a forward rollout.

- ### Relationships
  - Differential Dynamic Programming is a subclass of [[Optimal Control]] and uses results from [[Control Theory]] to characterise local optimality and stability. It supports real-time [[Model Predictive Control]] by efficiently solving the underlying finite-horizon problem, and relates to the [[Markov Decision Process]] formalism it locally and continuously approximates.

- ### Content
  - DDP attacks the optimal-control problem of finding a control sequence that minimises an accumulated cost over a finite horizon subject to system dynamics. Solving this exactly via global dynamic programming suffers the curse of dimensionality, so DDP instead works locally: starting from a candidate trajectory, it builds quadratic approximations of the cost-to-go and the dynamics around that trajectory and uses them to compute a better control sequence, repeating until convergence.

  - The algorithm alternates two passes. The backward pass propagates the value function's first and second derivatives from the final time step to the first, producing at each step both a feedforward control correction and a feedback gain that maps state deviations to control adjustments. The forward pass then simulates the system applying these corrected controls, yielding a new, lower-cost trajectory around which the next iteration linearises.

  - A defining feature is that DDP returns not just an open-loop control sequence but a local feedback policy through the gains computed in the backward pass, giving robustness to small disturbances and modelling errors during execution. Near a solution it enjoys quadratic convergence from its use of second-order information, though practical implementations add regularisation and line search to remain stable when the local quadratic model is inaccurate far from the optimum.

  - The widely used iterative Linear-Quadratic Regulator (iLQR) is a Gauss-Newton simplification of DDP that drops the expensive second-order dynamics terms, trading a slightly slower convergence rate for much cheaper iterations and greater numerical robustness. These methods are workhorses of robotics and animation, generating smooth, dynamically feasible motions for legged robots, manipulators, and vehicles, and serving as the inner solver in model-predictive controllers that re-optimise the trajectory at every control step.
