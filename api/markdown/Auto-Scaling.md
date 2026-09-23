
Auto-scaling is the automated adjustment of computing capacity in response to observed demand, adding or removing resources to maintain performance and control cost. It uses metrics, policies and controllers to scale horizontally by changing instance counts or vertically by resizing instances. Auto-scaling is foundational to elastic cloud infrastructure, balancing responsiveness against efficiency without manual intervention.

- ### Overview
	- Auto-scaling observes workload signals, request rate, queue depth, CPU and memory utilisation, latency, through [[Monitoring]] and [[Observability]], and compares them against target thresholds. Controllers then act to converge actual capacity on the level the policy implies.
	- Horizontal scaling adds or removes interchangeable instances behind [[Load Balancing]], which is the dominant pattern for [[Microservices]] and stateless workloads. Vertical scaling resizes a single instance and suits stateful services that are harder to replicate.
	- In modern platforms auto-scaling is implemented by [[Kubernetes]] and other [[Container Orchestration]] systems, and informed by [[Capacity Planning]] so that scaling limits, cooldowns and reserves are set sensibly.
- ### Mechanisms
	- Metric collection and aggregation feeding scaling decisions.
	- Threshold, target-tracking and predictive scaling policies.
	- Horizontal scaling of instance counts behind a load balancer.
	- Vertical resizing of individual instances.
	- Cooldown windows and stabilisation to avoid oscillation.
- ### Applications
	- Absorbing traffic spikes for web and API services.
	- Right-sizing [[Microservices]] fleets to demand.
	- Improving [[High Availability]] and [[Fault Tolerance]] through redundancy.
	- Reducing idle cost during low-demand periods.
- ### Provenance

