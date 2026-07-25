public:: true

# Security Operations Centre
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:security-operations-centre", "@type":"Page", "title":"Security Operations Centre", "vc:slug":"security-operations-centre", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:security-operations-centre",
  "@type":"Class",
  "label":"Security Operations Centre",
  "definition":"A Security Operations Centre (SOC) is a centralised function, combining people, processes and technology, that continuously monitors, detects, analyses and responds to cybersecurity threats across an organisation. Analysts triage alerts from telemetry sources, investigate incidents, and coordinate containment and remediation, typically aided by SIEM and SOAR platforms. The SOC is the operational hub of an enterprise security programme, providing the situational awareness and response capability needed to limit the impact of attacks.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:siem","label":"SIEM"},
      {"@id":"urn:ngm:class:soar","label":"SOAR"},
      {"@id":"urn:ngm:class:threat-intelligence","label":"Threat Intelligence"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:monitoring","label":"Monitoring"},
      {"@id":"urn:ngm:class:telemetry","label":"Telemetry"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:incident-response","label":"Incident Response"},
      {"@id":"urn:ngm:class:threat-detection","label":"Threat Detection"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},
      {"@id":"urn:ngm:class:vulnerability-management","label":"Vulnerability Management"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:zero-trust-architecture","label":"Zero Trust Architecture"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:security","label":"Security"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-breach","label":"Data Breach"},
      {"@id":"urn:ngm:class:cloud-security","label":"Cloud Security"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Security Operations Centre]] is the centralised people-process-technology function that monitors and responds to threats.
	- It is the operational arm of an enterprise [[Cybersecurity]] programme, consuming [[Telemetry]] and driving [[Incident Response]].
	- Analysts use [[SIEM]], [[SOAR]] and [[Threat Intelligence]] to perform [[Threat Detection]] and containment.
- ### Overview
	- A SOC operates around the clock, ingesting logs and signals from endpoints, networks, identity systems and cloud platforms.
	- It is typically organised in tiers: alert triage, deeper investigation, and threat hunting and engineering.
	- Detection content (rules, analytics, correlation) is continuously tuned to reduce false positives and surface real attacks.
	- Maturity is measured by detection coverage, mean time to detect and mean time to respond.
- ### Key aspects
	- **Continuous monitoring**: aggregation of [[Telemetry]] into a unified view via [[SIEM]] and [[Observability]] tooling.
	- **Triage and investigation**: prioritising alerts, enriching with [[Threat Intelligence]], and confirming true incidents.
	- **Response orchestration**: automating containment and remediation workflows with [[SOAR]].
	- **Threat hunting**: proactive search for adversary activity using hypotheses and [[Anomaly Detection]].
- ### Applications
	- Enterprise defence against intrusions, malware and account compromise.
	- Managed detection and response services offered to multiple client organisations.
	- Compliance and audit reporting for regulated industries.
	- Coordination of breach response and forensic investigation after a [[Data Breach]].
- ### Relationships
	- hasPart:: [[SIEM]]
	- hasPart:: [[SOAR]]
	- hasPart:: [[Threat Intelligence]]
	- requires:: [[Monitoring]]
	- requires:: [[Telemetry]]
	- enables:: [[Incident Response]]
	- enables:: [[Threat Detection]]
	- uses:: [[Anomaly Detection]]
	- uses:: [[Vulnerability Management]]
	- supports:: [[Zero Trust Architecture]]
	- supports:: [[Observability]]
	- implements:: [[Security]]
	- relatedTo:: [[Data Breach]]
	- relatedTo:: [[Cloud Security]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
