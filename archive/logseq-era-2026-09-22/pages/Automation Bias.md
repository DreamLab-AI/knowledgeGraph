public:: true

# Automation Bias
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:automation-bias", "@type":"Page", "title":"Automation Bias", "vc:slug":"automation-bias", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:automation-bias",
  "@type":"Class",
  "label":"Automation Bias",
  "definition":"Automation bias is the human tendency to over-rely on automated systems, accepting their outputs uncritically and discounting contradictory information, including one's own judgement. It manifests as errors of commission, following an automated recommendation that is wrong, and errors of omission, failing to act because the system did not prompt. Driven by the perceived authority of computers and the cognitive ease of deferring, it grows with workload, trust, and system opacity. Automation bias is a central human-factors concern in the governance of decision-support systems and human-in-the-loop oversight, where it can erode the very safeguards that human supervision is meant to provide.",
  "domain":"governance",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:bias","label":"Bias"}],
  "relations":{
    "contrastsWith":[
      {"@id":"urn:ngm:class:human-oversight","label":"Human Oversight"},
      {"@id":"urn:ngm:class:situational-awareness","label":"Situational Awareness"},
      {"@id":"urn:ngm:class:human-in-the-loop","label":"Human-in-the-Loop"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:trust","label":"Trust"},
      {"@id":"urn:ngm:class:automation","label":"Automation"},
      {"@id":"urn:ngm:class:human-factors","label":"Human Factors"},
      {"@id":"urn:ngm:class:explainability","label":"Explainability"},
      {"@id":"urn:ngm:class:accountability","label":"Accountability"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:automation","label":"Automation"},
      {"@id":"urn:ngm:class:trust","label":"Trust"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:human-factors","label":"Human Factors"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:explainability","label":"Explainability"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:accountability","label":"Accountability"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Automation bias is the tendency to defer uncritically to automated outputs, discounting contradictory evidence and one's own judgement. It is a form of cognitive [[Bias]] central to [[Human Factors]] and the governance of automated systems.
- It undermines [[Human Oversight]] by hollowing out the independent scrutiny that oversight depends on.
- ### Overview
- People often treat computer-generated advice as more authoritative than it is, especially under high workload or time pressure, and follow it even when it conflicts with available information.
- The bias produces two failure modes: commission errors, where an incorrect automated recommendation is accepted, and omission errors, where a problem is missed because the system gave no alert.
- It is amplified by opaque systems, miscalibrated [[Trust]], and complacency that grows the longer an automated aid performs reliably.
- ### Key aspects
- Errors of commission versus errors of omission.
- The interaction between system reliability, trust, and complacency.
- Loss of [[Situational Awareness]] and skill atrophy under heavy automation.
- The role of [[Explainability]] in keeping the human an active checker.
- ### Applications
- Aviation and flight-deck automation human-factors design.
- Clinical decision-support and diagnostic alerts.
- Algorithmic decision systems in public administration.
- Design of [[Human-in-the-Loop]] oversight and accountability regimes.
- ### Relationships
- subClassOf:: [[Bias]]
- contrastsWith:: [[Human Oversight]]
- contrastsWith:: [[Situational Awareness]]
- contrastsWith:: [[Human-in-the-Loop]]
- relatedTo:: [[Trust]]
- relatedTo:: [[Human Factors]]
- dependsOn:: [[Automation]]
- partOf:: [[Human Factors]]
- requires:: [[Explainability]]
- supports:: [[Accountability]]
- relatedTo:: [[Accountability]]
- ### Provenance
- updated:: 2026-06-15
