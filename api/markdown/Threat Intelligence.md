public:: true

# Threat Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e27dcfa38a0696b849c8acf527cf8d56cceac814114024a005789cd8ec2ad2d3",
  "@type": "Page",
  "vc:slug": "threat-intelligence",
  "title": "Threat Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    },
    {
      "@id": "urn:visionflow:linked:information-security",
      "vc:label": "Information Security"
    },
    {
      "@id": "urn:visionflow:linked:cybersecurity",
      "vc:label": "Cybersecurity"
    },
    {
      "@id": "urn:visionflow:linked:https-www-cisa-gov-topics-cyber-threats-and-advisories",
      "vc:label": "https://www.cisa.gov/topics/cyber-threats-and-advisories"
    },
    {
      "@id": "urn:visionflow:linked:https-attack-mitre-org",
      "vc:label": "https://attack.mitre.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Threat Intelligence"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:threat-intelligence",
  "@type": "Class",
  "label": "Threat Intelligence",
  "definition": "Threat intelligence is the collection, analysis and sharing of information about cyber threats to support detection, prevention and response.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cybersecurity",
      "label": "Cybersecurity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:threat-intelligence:a02f9aafc870",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e27dcfa38a0696b849c8acf527cf8d56cceac814114024a005789cd8ec2ad2d3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Security]]",
      "resolved": "urn:visionflow:linked:network-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Security]]",
      "resolved": "urn:visionflow:linked:information-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cybersecurity]]",
      "resolved": "urn:visionflow:linked:cybersecurity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.cisa.gov/topics/cyber-threats-and-advisories]]",
      "resolved": "urn:visionflow:linked:https-www-cisa-gov-topics-cyber-threats-and-advisories",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://attack.mitre.org/]]",
      "resolved": "urn:visionflow:linked:https-attack-mitre-org",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Threat intelligence is the collection, analysis and sharing of information about cyber threats to support detection, prevention and response.

- ### Semantic Classification
  - owl-class:: distributed-systems:ThreatIntelligence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cybersecurity]]
  - bridges-to:: [[Information Security]]
  - enables:: [[Network Security]]

- ### Content
  - Threat intelligence gathers data on adversaries, their tools and techniques, and observed indicators of compromise. Analysis turns raw data into context that informs defensive decisions.
  - Intelligence is categorised as strategic, operational and tactical depending on its audience and time horizon. Indicators such as malicious domains and file hashes are shared to support automated detection across organisations.

- ### Provenance
  - sources:: [[https://www.cisa.gov/topics/cyber-threats-and-advisories]], [[https://attack.mitre.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
