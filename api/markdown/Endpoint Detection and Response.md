Endpoint Detection and Response (EDR) is a cybersecurity technology that continuously records endpoint activity, detects suspicious or malicious behaviour, and provides investigation and response capabilities on hosts such as laptops, servers and workstations. Lightweight agents stream rich telemetry to an analytics backend that applies behavioural detection, threat intelligence and anomaly models to surface and contain threats that bypass preventive controls. EDR enables analysts to investigate incidents, isolate compromised hosts and remediate threats, and increasingly feeds extended detection and response and managed services.

### Overview

- EDR emerged to address attacks that evade signature-based prevention, focusing on detection and response rather than blocking alone.
- A lightweight agent observes process execution, file and registry changes, network connections and authentication events.
- The backend correlates these events into behavioural detections aligned to frameworks such as MITRE ATT&CK.
- Modern offerings converge into XDR, extending the same detection model across identity, email, network and cloud.

### Mechanisms

- **Continuous recording**: high-fidelity endpoint event capture provides the investigative trail.
- **Behavioural analytics**: detection of attack techniques rather than specific malware samples.
- **Response actions**: host isolation, process termination, file quarantine and rollback.
- **Threat enrichment**: alerts are contextualised with [[Threat Intelligence]] for faster triage.

### Applications

- Detecting and containing ransomware, living-off-the-land attacks and lateral movement.
- Supporting [[Security Operations Centre]] investigations with detailed host context.
- Forensic timeline reconstruction after a [[Data Breach]].
- Enforcing endpoint trust signals within [[Zero Trust Architecture]].

### Provenance

