
A runbook is a documented set of procedures for operating, maintaining and recovering a system, giving operators a repeatable sequence of steps for routine tasks and known failure scenarios. Modern runbooks range from human-readable checklists to executable automations that orchestrate remediation directly. They are a core artefact of site reliability engineering, reducing reliance on individual expertise during incidents.

- ### Overview
  - Runbooks encode the institutional knowledge needed to operate a service: how to deploy, how to scale, how to roll back, and how to respond to specific alerts. They turn tacit expertise into explicit, followable steps.
  - During an incident, a good runbook lets any on-call engineer execute the correct response without first reconstructing context, which shortens mean time to recovery and reduces error.
  - The discipline has evolved from static documents toward executable and semi-automated runbooks, where remediation steps can be triggered or fully orchestrated by tooling.
- ### Key aspects
  - Repeatability: the same steps produce the same outcome regardless of operator.
  - Scope: covers routine operations as well as known failure modes.
  - Triggers: each procedure is tied to a condition, alert or task.
  - Verification: steps include checks that confirm the system reached the desired state.
  - Maintenance: runbooks must be kept current with the systems they describe.
- ### Mechanisms
  - Checklist procedures linked from alerts in the monitoring system.
  - Automated runbooks that script remediation through infrastructure-as-code tooling.
  - Drills and game days that validate runbooks against simulated failures.
  - Versioning so runbooks evolve alongside system changes.
- ### Applications
  - On-call incident response for production services.
  - Disaster recovery and failover execution.
  - Routine maintenance such as deployments, rotations and backups.
  - Onboarding operators to a service.
- ### Provenance

