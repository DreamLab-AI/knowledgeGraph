public:: true

# Social Engineering

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:social-engineering", "@type":"Page", "title":"Social Engineering", "vc:slug":"social-engineering", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:social-engineering",
  "@type":"Class",
  "label":"Social Engineering",
  "definition":"Social engineering is the manipulation of people into divulging confidential information or performing actions that compromise security, exploiting human psychology rather than technical vulnerabilities. It includes techniques such as phishing, pretexting, baiting and impersonation that bypass technical controls by targeting trust, urgency and authority. It is one of the most effective and prevalent attack vectors in cybersecurity.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:attack-vector","label":"Attack Vector"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:data-breach","label":"Data Breach"},{"@id":"urn:ngm:class:ransomware","label":"Ransomware"}],
    "uses":[{"@id":"urn:ngm:class:prompt-injection","label":"Prompt Injection"}],
    "hasPart":[{"@id":"urn:ngm:class:vulnerability","label":"Vulnerability"}],
    "relatedTo":[{"@id":"urn:ngm:class:threat-actor","label":"Threat Actor"},{"@id":"urn:ngm:class:malware","label":"Malware"}],
    "contrastsWith":[{"@id":"urn:ngm:class:access-control","label":"Access Control"},{"@id":"urn:ngm:class:authentication","label":"Authentication"}],
    "supports":[{"@id":"urn:ngm:class:penetration-testing","label":"Penetration Testing"}],
    "dependsOn":[{"@id":"urn:ngm:class:vulnerability","label":"Vulnerability"}],
    "implements":[{"@id":"urn:ngm:class:attack-vector","label":"Attack Vector"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cybersecurity","label":"Cybersecurity"}],
    "requires":[{"@id":"urn:ngm:class:threat-actor","label":"Threat Actor"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Social Engineering]] manipulates people into revealing secrets or taking unsafe actions, exploiting psychology rather than code, and is a primary [[Attack Vector]].
- It covers phishing, pretexting and impersonation that bypass [[Access Control]] and [[Authentication]].
- It is exploited by a [[Threat Actor]] to achieve a [[Data Breach]] or deploy [[Ransomware]].
- ### Overview
- Social engineering targets the human element, often the weakest link in a security posture.
- Attackers exploit trust, urgency, fear, authority and the desire to be helpful.
- Because it sidesteps technical defences, it remains effective even against well-hardened systems.
- Defence depends as much on awareness, culture and process as on technology.
- ### Mechanisms
- Phishing and spear-phishing use deceptive messages to harvest credentials or deliver [[Malware]].
- Pretexting fabricates a plausible scenario to extract information or access.
- Baiting offers something enticing to provoke a risky action.
- Impersonation and tailgating exploit physical and procedural trust.
- ### Applications
- Authorised assessment through [[Penetration Testing]] and red-team exercises.
- Security-awareness training and simulated phishing campaigns.
- Threat modelling that accounts for human-targeted attack paths.
- ### Relationships
- subClassOf:: [[Attack Vector]]
- enables:: [[Data Breach]]
- enables:: [[Ransomware]]
- uses:: [[Prompt Injection]]
- hasPart:: [[Vulnerability]]
- relatedTo:: [[Threat Actor]]
- relatedTo:: [[Malware]]
- contrastsWith:: [[Access Control]]
- contrastsWith:: [[Authentication]]
- supports:: [[Penetration Testing]]
- dependsOn:: [[Vulnerability]]
- implements:: [[Attack Vector]]
- bridgesTo:: [[Cybersecurity]]
- requires:: [[Threat Actor]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
