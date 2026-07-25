public:: true

# Endpoint Detection and Response
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:endpoint-detection-and-response", "@type":"Page", "title":"Endpoint Detection and Response", "vc:slug":"endpoint-detection-and-response", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:endpoint-detection-and-response",
  "@type":"Class",
  "label":"Endpoint Detection and Response",
  "definition":"Endpoint Detection and Response (EDR) is a cybersecurity technology that continuously records endpoint activity, detects suspicious or malicious behaviour, and provides investigation and response capabilities on hosts such as laptops, servers and workstations. Lightweight agents stream rich telemetry to an analytics backend that applies behavioural detection, threat intelligence and anomaly models to surface and contain threats that bypass preventive controls. EDR enables analysts to investigate incidents, isolate compromised hosts and remediate threats, and increasingly feeds extended detection and response and managed services.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:telemetry","label":"Telemetry"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:monitoring","label":"Monitoring"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:incident-response","label":"Incident Response"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:threat-intelligence","label":"Threat Intelligence"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:security-operations-centre","label":"Security Operations Centre"},
      {"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero Trust Architecture"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:siem","label":"SIEM"},
      {"@id":"urn:ngm:class:soar","label":"SOAR"},
      {"@id":"urn:ngm:class:data-breach","label":"Data Breach"},
      {"@id":"urn:ngm:class:vulnerability-management","label":"Vulnerability Management"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Endpoint Detection and Response]] is a [[Threat Detection]] technology that records and analyses endpoint activity to find and contain threats.
	- Agents stream [[Telemetry]] to an analytics backend that applies behavioural and [[Anomaly Detection]] models.
	- EDR enables host isolation and remediation, feeding the [[Security Operations Centre]] and [[Incident Response]].
- ### Overview
	- EDR emerged to address attacks that evade signature-based prevention, focusing on detection and response rather than blocking alone.
	- A lightweight agent observes process execution, file and registry changes, network connections and authentication events.
	- The backend correlates these events into behavioural detections aligned to frameworks such as MITRE ATT&CK.
	- Modern offerings converge into XDR, extending the same detection model across identity, email, network and cloud.
- ### Mechanisms
	- **Continuous recording**: high-fidelity endpoint event capture provides the investigative trail.
	- **Behavioural analytics**: detection of attack techniques rather than specific malware samples.
	- **Response actions**: host isolation, process termination, file quarantine and rollback.
	- **Threat enrichment**: alerts are contextualised with [[Threat Intelligence]] for faster triage.
- ### Applications
	- Detecting and containing ransomware, living-off-the-land attacks and lateral movement.
	- Supporting [[Security Operations Centre]] investigations with detailed host context.
	- Forensic timeline reconstruction after a [[Data Breach]].
	- Enforcing endpoint trust signals within [[Zero Trust Architecture]].
- ### Relationships
	- partOf:: [[Cybersecurity]]
	- hasPart:: [[Telemetry]]
	- hasPart:: [[Anomaly Detection]]
	- requires:: [[Monitoring]]
	- enables:: [[Incident Response]]
	- uses:: [[Threat Intelligence]]
	- uses:: [[Anomaly Detection]]
	- supports:: [[Security Operations Centre]]
	- supports:: [[Zero Trust Architecture]]
	- relatedTo:: [[SIEM]]
	- relatedTo:: [[SOAR]]
	- relatedTo:: [[Data Breach]]
	- relatedTo:: [[Vulnerability Management]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
