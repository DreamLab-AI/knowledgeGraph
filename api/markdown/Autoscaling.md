
Autoscaling is the automated adjustment of computing resources allocated to an application in response to observed demand, scaling capacity up under load and down when demand falls. It monitors metrics such as utilisation, request rate or queue depth and triggers provisioning or removal of compute instances or containers against defined policies. Autoscaling improves cost efficiency and availability by matching supply to demand without manual intervention.

- ### Overview
  - Autoscaling automatically grows or shrinks an application's resource footprint to track demand.
  - It watches signals such as CPU utilisation, request rate or queue length against policy thresholds.
  - Horizontal autoscaling adds or removes instances; vertical autoscaling resizes individual instances.
  - The mechanism reduces over-provisioning costs while protecting against demand spikes.
- ### Mechanisms
  - Metric collection and observability feeding scaling decisions.
  - Scaling policies with thresholds, cooldowns and target tracking.
  - Horizontal pod or instance autoscaling in container platforms.
  - Predictive and scheduled scaling for anticipated demand patterns.
  - Integration with load balancers to distribute traffic across new capacity.
- ### Applications
  - Web services absorbing variable and bursty traffic.
  - Batch and queue workers scaling with backlog depth.
  - Cost optimisation by releasing idle capacity during quiet periods.
  - Resilient cloud-native deployments maintaining service-level objectives.
- ### Provenance

