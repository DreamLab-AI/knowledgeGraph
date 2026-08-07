public:: true

# Endpoint Security
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c6aa157a5a223d71e163e5b5ef5c923a6eb7c2b413bf4e374bccee7b0901287",
  "@type": "Page",
  "vc:slug": "endpoint-security",
  "title": "Endpoint Security",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:defense-in-depth",
      "vc:label": "Defense In Depth"
    },
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:endpoint-security",
  "@type": "Class",
  "label": "Endpoint Security",
  "definition": "The practice of protecting end-user and edge devices — laptops, desktops, servers, mobiles, and increasingly IoT hardware — from compromise, combining preventive controls such as anti-malware, disk encryption, patching, and application allow-listing with detective and responsive capabilities delivered by endpoint detection and response (EDR) agents. As perimeter defences have weakened under remote work and cloud adoption, the endpoint has become the primary battleground and telemetry source for enterprise defence.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:cybersecurity",
    "label": "Cybersecurity"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:defense-in-depth",
        "label": "Defense In Depth"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:threat-detection",
        "label": "Threat Detection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:remote-work",
        "label": "Remote Work"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The practice of protecting end-user and edge devices — laptops, desktops, servers, mobiles, and increasingly IoT hardware — from compromise, combining preventive controls such as anti-malware, disk encryption, patching, and application allow-listing with detective and responsive capabilities delivered by endpoint detection and response (EDR) agents. As perimeter defences have weakened under remote work and cloud adoption, the endpoint has become the primary battleground and telemetry source for enterprise defence."

- ### Semantic Classification
  - owl-class:: security:EndpointSecurity
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Cybersecurity]]
  - part-of:: [[Defense In Depth]]
  - uses:: [[Threat Detection]]
  - related-to:: [[Network Security]]

- ### Content

  ## Definition

  **Endpoint security** protects the devices where users work and data lives: laptops, desktops, servers, virtual machines, mobiles, and edge devices. An endpoint is both the most common initial access point — phishing payloads, malicious documents, drive-by downloads, and stolen credentials all detonate on an endpoint — and the richest source of defensive telemetry, since process creation, file writes, registry changes, and network connections are all observable there. The discipline therefore spans hardening (patching, disk encryption, secure configuration baselines such as CIS Benchmarks), prevention (next-generation anti-malware, application allow-listing, exploit mitigation), and detection and response.

  The defining shift of the last decade is from signature-based antivirus to **endpoint detection and response (EDR)**: a resident agent streams behavioural telemetry to a cloud analytics backend, where detections are expressed as behaviours (credential dumping, ransomware-style mass encryption, living-off-the-land binary abuse) mapped to frameworks such as MITRE ATT&CK. Responders can then isolate a host from the network, kill processes, and pull forensic artefacts remotely. Extended detection and response (XDR) correlates this endpoint telemetry with identity, email, and [[Network Security]] signals.

  [[Remote Work]] made endpoint security load-bearing: devices now operate outside any network perimeter, on untrusted networks, so controls must travel with the device. This is why endpoint posture — patch level, EDR presence, encryption status — is a core signal in zero-trust access decisions, and why endpoint security is one of the strongest layers in a [[Defense In Depth]] architecture rather than a substitute for the others.

  ## Current Landscape

  - **Market**: CrowdStrike Falcon, Microsoft Defender for Endpoint, and SentinelOne dominate EDR/XDR; ESET, Sophos, and Trend Micro remain strong in the mid-market. Managed detection and response (MDR) services operate these platforms for organisations without 24/7 SOCs.
  - **Attacker adaptation**: EDR evasion is now a standard tradecraft category — BYOVD (bring your own vulnerable driver), userland unhooking, and abuse of legitimate remote-management tools — driving kernel-level tamper protection and eBPF-based sensors on Linux.
  - **Operational risk**: the July 2024 CrowdStrike faulty-update outage, which disabled roughly 8.5 million Windows machines, demonstrated that endpoint agents themselves are critical infrastructure requiring staged rollout discipline.
  - **Baseline expectations**: Cyber Essentials (UK), ISO 27001, and cyber-insurance underwriting all effectively require managed endpoint protection, MFA, and patch SLAs as minimum controls.
