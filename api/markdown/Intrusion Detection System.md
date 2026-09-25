An intrusion detection system (IDS) monitors network traffic or host activity to identify malicious behaviour, policy violations, and signs of compromise, raising alerts for investigation. It detects threats using signature matching against known attack patterns, anomaly detection against established baselines, or a hybrid of both. An IDS is a detective control that complements preventive measures; when it can also block traffic it becomes an intrusion prevention system.

### Overview

- An IDS observes traffic (network-based, NIDS) or system events (host-based, HIDS).
- It compares observed activity against known attack signatures or learned normal behaviour.
- When suspicious activity is found it generates alerts for analysts to triage.
- It does not, by itself, block traffic; coupling detection with blocking yields an intrusion prevention system.

### Mechanisms

- Signature-based detection matching known malicious patterns and indicators.
- Anomaly-based detection flagging statistically unusual behaviour via [[Anomaly Detection]].
- Protocol and stateful analysis to spot violations of expected behaviour.
- Enrichment with [[Threat Intelligence]] to prioritise and contextualise alerts.

### Key aspects

- False positives and negatives: the central tuning trade-off.
- Placement: at network choke points or on critical hosts.
- Coverage: encrypted traffic and evasion techniques limit visibility.
- Integration: alerts must flow into [[SIEM]] and response workflows.

### Applications

- Perimeter and internal network monitoring in enterprises.
- Endpoint and server compromise detection.
- Cloud workload and container threat monitoring.
- Feeding [[Vulnerability Management]] and security operations.

### Provenance

