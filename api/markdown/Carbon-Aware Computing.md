
Carbon-aware computing is the practice of scheduling and placing computational workloads to minimise their associated greenhouse-gas emissions by responding to the time-varying and location-varying carbon intensity of electricity. Rather than only reducing energy use, it shifts flexible work to periods and regions where the grid is cleaner. The approach combines real-time grid carbon-intensity signals with workload orchestration to lower the carbon footprint of data centres and cloud services.

- Carbon-aware computing schedules and places workloads to follow cleaner electricity, lowering emissions per unit of work. It is a branch of [[Green Computing]] that responds to grid carbon intensity using [[Renewable Energy]] availability and [[Demand Response]] signals.
- It complements [[Energy Efficiency]] by reducing not just how much energy is used but how dirty that energy is.
- ### Overview
- Electricity carbon intensity varies by hour and region as the generation mix shifts between renewables and fossil fuels.
- Flexible workloads — batch jobs, model training, backups — can be deferred or relocated to low-carbon windows without harming service quality.
- Orchestrators consume real-time and forecast carbon-intensity data to make placement and timing decisions.
- ### Key aspects
- Temporal shifting: moving deferrable work to greener hours of the day.
- Spatial shifting: routing work to regions with cleaner grids.
- Demand shaping: aligning consumption with [[Renewable Energy]] supply via [[Demand Response]].
- Measurement: attributing emissions through [[Carbon Accounting]] and [[Carbon Footprint]] reporting.
- ### Mechanisms
- Grid carbon-intensity signals feed scheduling policies in the orchestration layer.
- Workload classification separates latency-sensitive tasks from flexible ones.
- Cloud platforms expose region and time hints so [[Cloud Computing]] consumers can act.
- Forecasting anticipates clean windows to plan deferrable work in advance.
- ### Applications
- Scheduling machine-learning training during low-carbon periods.
- Geographically routing batch processing to renewable-rich regions.
- Reducing data-centre emissions toward [[Net Zero]] commitments.
- Reporting against [[Environmental Sustainability]] and [[Lifecycle Assessment]] targets.
- ### Provenance

