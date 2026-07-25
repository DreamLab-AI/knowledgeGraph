public:: true

# Pegasus Spyware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pegasus-spyware",
  "@type": "Page",
  "vc:slug": "pegasus-spyware",
  "title": "Pegasus Spyware",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pegasus-spyware",
  "@type": "Class",
  "label": "Pegasus Spyware",
  "definition": "Pegasus is commercial surveillance spyware developed by the NSO Group that covertly compromises smartphones, often via zero-click exploits requiring no user interaction. Once installed it can exfiltrate messages, calls, location, microphone, and camera data, granting near-total device control. It is a prominent case study in state-level digital surveillance and the human-rights risks of the commercial intrusion-software market.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-society-surveillance", "label": "Digital Society Surveillance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Pegasus is commercial zero-click spyware used to covertly surveil targeted smartphones, a flagship example within [[Digital Society Surveillance]].
- ### Content
  - Pegasus chains exploits against mobile operating systems to install a stealth implant with elevated privileges, enabling exfiltration of encrypted-app contents before encryption and silent activation of sensors. Its documented deployment against journalists, activists, and officials has driven debate over export controls, lawful-intercept norms, and the proliferation of mercenary surveillance tooling.
