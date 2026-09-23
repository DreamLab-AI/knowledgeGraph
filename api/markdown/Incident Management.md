
Incident management is the operational discipline of detecting, responding to, resolving, and learning from unplanned disruptions to a service. It coordinates people and tooling through detection, triage, escalation, mitigation, and recovery, then conducts blameless post-mortems to prevent recurrence. Closely associated with site reliability engineering and ITIL practice, it aims to minimise mean time to recovery and protect service-level objectives.

- ### Overview
  - When a service degrades, incident management provides the roles, runbooks, and communication structure to restore it quickly.
  - The goal is to minimise mean time to recovery while protecting agreed [[Service Level Objective]] targets.
  - Lessons captured in post-mortems feed back into engineering work, closing the loop between operations and development.
- ### Key aspects
  - Clear roles such as incident commander, communications lead, and operations lead.
  - Severity classification and defined escalation paths.
  - Blameless learning culture that treats failures as systemic, not personal.
- ### Mechanisms
  - [[Alerting]] derived from [[Monitoring]] signals pages an [[On-Call]] responder.
  - Responders follow a [[Runbook]] to triage and mitigate, escalating where needed.
  - After recovery, [[Root Cause Analysis]] identifies contributing factors and remediation actions.
- ### Applications
  - Operating cloud and SaaS platforms at scale.
  - Sustaining reliability targets under continuous deployment.
  - Coordinating cross-team response to security and availability events.
- ### Provenance

