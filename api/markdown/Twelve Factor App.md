
The Twelve-Factor App is a methodology for building software-as-a-service applications that are portable, resilient, and suitable for deployment on modern cloud platforms. It defines twelve guidelines covering codebase management, declared dependencies, configuration in the environment, backing services, build-release-run separation, stateless processes, port binding, concurrency, disposability, dev/prod parity, logs as event streams, and admin tasks. Adherence yields applications that scale horizontally, deploy continuously, and integrate cleanly with containerised and orchestrated infrastructure.

- The Twelve-Factor App is a methodology for building portable [[Cloud-Native Applications]] that deploy cleanly on managed platforms. It emphasises strict [[Configuration Management]] in the environment, stateless processes, and build-release-run separation, aligning naturally with [[Containerisation]] and [[Continuous Delivery]].
- ### Overview
- The methodology distils common practices for software-as-a-service into twelve concise factors that, taken together, make an application portable and operable across environments.
- Each factor addresses a recurring source of friction between development and production, such as configuration drift, hidden dependencies, or stateful processes that resist scaling.
- Following the factors tends to produce applications that are disposable, horizontally scalable, and observable, which suits them to elastic cloud infrastructure.
- ### Key aspects
- A single codebase tracked in version control maps to many deployments, with dependencies explicitly declared and isolated.
- Configuration that varies between deployments lives in the environment rather than in code, keeping the build artefact identical across stages.
- Processes are stateless and share nothing, persisting durable data in backing services so that instances can be added or removed freely.
- Logs are treated as event streams, and administrative tasks run as one-off processes in an identical environment.
- ### Applications
- Designing microservices that orchestrators can schedule and scale automatically.
- Establishing reproducible build-release-run pipelines for continuous delivery.
- Containerising legacy applications by remediating configuration and statefulness.
- Setting baseline platform engineering standards for cloud-native teams.
- ### Provenance

