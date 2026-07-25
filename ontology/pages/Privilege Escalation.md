public:: true

# Privilege Escalation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:privilege-escalation", "@type":"Page", "title":"Privilege Escalation", "vc:slug":"privilege-escalation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:privilege-escalation",
  "@type":"Class",
  "label":"Privilege Escalation",
  "definition":"Privilege escalation is the act of gaining rights beyond those originally granted, allowing an attacker or process to perform actions reserved for higher-trust principals. Vertical escalation moves from a lower to a higher privilege level, while horizontal escalation moves laterally to another principal at the same level. It is a pivotal phase in attack chains, typically exploiting misconfiguration, flawed access control or software vulnerabilities.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security","label":"Security"}],
  "relations":{
    "exploits":[
      {"@id":"urn:ngm:class:vulnerability","label":"Vulnerability"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:penetration-testing","label":"Penetration Testing"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:least-privilege","label":"Least Privilege"}
    ],
    "mitigatedBy":[
      {"@id":"urn:ngm:class:access-control","label":"Access Control"},
      {"@id":"urn:ngm:class:least-privilege","label":"Least Privilege"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:vulnerability","label":"Vulnerability"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "detectedBy":[
      {"@id":"urn:ngm:class:audit-logging","label":"Audit Logging"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:authorization","label":"Authorization"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"},
      {"@id":"urn:ngm:class:observability","label":"Observability"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Privilege Escalation]] is the act of acquiring rights beyond those granted, letting a principal perform actions reserved for higher-trust roles. It typically arises from exploiting a [[Vulnerability]], weak [[Access Control]] or misconfiguration, and stands in direct opposition to [[Least Privilege]].
	- It is a pivotal phase in attack chains, converting an initial foothold into broad control.
- ### Overview
	- Privilege escalation takes two canonical forms. Vertical escalation elevates a principal from a lower to a higher privilege level, such as from a standard user to an administrator. Horizontal escalation moves laterally to impersonate or access another principal at the same level.
	- Attackers reach escalation by chaining flaws: a software [[Vulnerability]], a permissive [[Authorization]] policy, exposed credentials weakening [[Authentication]], or insecure defaults. Once achieved, escalation unlocks data exfiltration, persistence and further lateral movement.
	- Defenders counter escalation by enforcing [[Least Privilege]], hardening [[Access Control]], and monitoring through [[Audit Logging]] and [[Observability]] so that anomalous elevation is detected quickly.
- ### Mechanisms
	- Exploitation of memory-safety or logic flaws that grant elevated execution.
	- Abuse of overly broad roles, group memberships or service accounts.
	- Credential theft and token reuse that subvert [[Authentication]].
	- Misconfigured setuid binaries, scheduled tasks or container escapes.
	- Confused-deputy patterns where a trusted component is tricked into acting on an attacker's behalf.
- ### Applications
	- Modelling adversary behaviour during [[Penetration Testing]] and red-team exercises.
	- Threat modelling to identify and close escalation paths.
	- Designing defence-in-depth controls and detection rules.
	- Informing incident-response playbooks for containment.
- ### Relationships
	- exploits:: [[Vulnerability]]
	- enables:: [[Penetration Testing]]
	- contrastsWith:: [[Least Privilege]]
	- mitigatedBy:: [[Access Control]]
	- mitigatedBy:: [[Least Privilege]]
	- requires:: [[Vulnerability]]
	- dependsOn:: [[Authentication]]
	- detectedBy:: [[Audit Logging]]
	- relatedTo:: [[Authorization]]
	- relatedTo:: [[Authentication]]
	- relatedTo:: [[Observability]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
