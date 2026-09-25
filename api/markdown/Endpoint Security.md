The practice of protecting end-user and edge devices — laptops, desktops, servers, mobiles, and increasingly IoT hardware — from compromise, combining preventive controls such as anti-malware, disk encryption, patching, and application allow-listing with detective and responsive capabilities delivered by endpoint detection and response (EDR) agents. As perimeter defences have weakened under remote work and cloud adoption, the endpoint has become the primary battleground and telemetry source for enterprise defence.

### Semantic Classification

### Content

## Definition

**Endpoint security** protects the devices where users work and data lives: laptops, desktops, servers, virtual machines, mobiles, and edge devices. An endpoint is both the most common initial access point — phishing payloads, malicious documents, drive-by downloads, and stolen credentials all detonate on an endpoint — and the richest source of defensive telemetry, since process creation, file writes, registry changes, and network connections are all observable there. The discipline therefore spans hardening (patching, disk encryption, secure configuration baselines such as CIS Benchmarks), prevention (next-generation anti-malware, application allow-listing, exploit mitigation), and detection and response.

The defining shift of the last decade is from signature-based antivirus to **endpoint detection and response (EDR)**: a resident agent streams behavioural telemetry to a cloud analytics backend, where detections are expressed as behaviours (credential dumping, ransomware-style mass encryption, living-off-the-land binary abuse) mapped to frameworks such as MITRE ATT&CK. Responders can then isolate a host from the network, kill processes, and pull forensic artefacts remotely. Extended detection and response (XDR) correlates this endpoint telemetry with identity, email, and [[Network Security]] signals.

[[Remote Work]] made endpoint security load-bearing: devices now operate outside any network perimeter, on untrusted networks, so controls must travel with the device. This is why endpoint posture — patch level, EDR presence, encryption status — is a core signal in zero-trust access decisions, and why endpoint security is one of the strongest layers in a [[Defense In Depth]] architecture rather than a substitute for the others.

## Current Landscape

- **Market**: CrowdStrike Falcon, Microsoft Defender for Endpoint, and SentinelOne dominate EDR/XDR; ESET, Sophos, and Trend Micro remain strong in the mid-market. Managed detection and response (MDR) services operate these platforms for organisations without 24/7 SOCs.
- **Attacker adaptation**: EDR evasion is now a standard tradecraft category — BYOVD (bring your own vulnerable driver), userland unhooking, and abuse of legitimate remote-management tools — driving kernel-level tamper protection and eBPF-based sensors on Linux.
- **Operational risk**: the July 2024 CrowdStrike faulty-update outage, which disabled roughly 8.5 million Windows machines, demonstrated that endpoint agents themselves are critical infrastructure requiring staged rollout discipline.
- **Baseline expectations**: Cyber Essentials (UK), ISO 27001, and cyber-insurance underwriting all effectively require managed endpoint protection, MFA, and patch SLAs as minimum controls.
- **Market sizing (2026)**: analysts put the standalone EDR market at ~US$6.33bn in 2026 (≈24% CAGR to 2031) and XDR at ~US$7.9bn in 2025, with cloud-delivered agents holding ~68% share; the broader endpoint-security market is ~US$40bn (2025).
- **Platform consolidation (2025–2026)**: vendors are merging endpoint, identity and AI-agent security — CrowdStrike agreed to acquire SGNL and Seraphic Security (Jan 2026), SentinelOne agreed to acquire Prompt Security (Aug 2025), and Palo Alto announced a US$250m Cortex XDR expansion (Feb 2026).
- **Post-outage buying behaviour**: the July 2024 CrowdStrike faulty-update outage (~8.5m Windows machines) continues to drive phased-rollout discipline and, for some enterprises, multi-agent diversification strategies.

  **Sources**:

- https://www.mordorintelligence.com/industry-reports/endpoint-detection-and-response-market
- https://www.marketsandmarkets.com/Market-Reports/extended-detection-response-market-52119574.html
- https://www.datamintelligence.com/endpoint-security-market

