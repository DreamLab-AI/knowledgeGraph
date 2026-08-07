public:: true

# Ransomware
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b70e74e842592f6505b31daf621ead479ab2e4c0e65904c16e25e4c34365b4e1",
  "@type": "Page",
  "vc:slug": "ransomware",
  "title": "Ransomware",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:malware", "vc:label": "Malware"},
    {"@id": "urn:visionflow:linked:encryption", "vc:label": "Encryption"},
    {"@id": "urn:visionflow:linked:data-breach", "vc:label": "Data Breach"},
    {"@id": "urn:visionflow:linked:disaster-recovery", "vc:label": "Disaster Recovery"},
    {"@id": "urn:visionflow:linked:incident-response", "vc:label": "Incident Response"},
    {"@id": "urn:visionflow:linked:bitcoin", "vc:label": "Bitcoin"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ransomware",
  "@type": "Class",
  "label": "Ransomware",
  "definition": "A class of malware that denies victims access to their data or systems — typically by encrypting files with attacker-held keys, and increasingly by exfiltrating data for extortion — and demands payment, usually in cryptocurrency, for restoration or non-disclosure. Operated today as a service economy with affiliates, initial-access brokers, and leak sites, ransomware is among the most financially damaging cyber threats and the principal stress test of an organisation's backup, incident response, and disaster recovery posture.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:malware",
    "label": "Malware"
  },
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-breach", "label": "Data Breach"},
      {"@id": "urn:ngm:class:disaster-recovery", "label": "Disaster Recovery"},
      {"@id": "urn:ngm:class:incident-response", "label": "Incident Response"}
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
  - "A class of malware that denies victims access to their data or systems — typically by encrypting files with attacker-held keys, and increasingly by exfiltrating data for extortion — and demands payment, usually in cryptocurrency, for restoration or non-disclosure. Operated today as a service economy with affiliates, initial-access brokers, and leak sites, ransomware is among the most financially damaging cyber threats and the principal stress test of an organisation's backup, incident response, and disaster recovery posture."

- ### Semantic Classification
  - owl-class:: security:Ransomware
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Malware]]
  - uses:: [[Encryption]]
  - related-to:: [[Data Breach]]
  - related-to:: [[Disaster Recovery]]

- ### Content

  ## Definition

  **Ransomware** is [[Malware]] that weaponises the victim's own dependence on data availability. Classic crypto-ransomware enumerates files and encrypts them with a hybrid scheme — a symmetric key per file or volume, wrapped by an attacker-controlled public key — so that only payment yields the decryption capability. The attack turns strong [[Encryption]], normally a defensive technology, into the instrument of denial. Locker variants block system access without touching files; wiper-adjacent strains (NotPetya, 2017) mimic ransomware while making recovery impossible.

  The modern threat is an economy rather than a program. Ransomware-as-a-service (RaaS) operators lease tooling and infrastructure to affiliates who conduct intrusions, splitting proceeds; initial-access brokers sell footholds obtained through phishing, stolen credentials, and unpatched edge devices — social engineering remains the leading entry vector. Since around 2019 the dominant playbook is **double extortion**: exfiltrate data first, then encrypt, so that even a victim with perfect backups faces a [[Data Breach]] disclosure threat via the gang's leak site. Payments are demanded in cryptocurrency, principally [[Bitcoin]] or Monero, with blockchain-analytics firms and sanctions regimes increasingly targeting the laundering pipeline.

  Defence is correspondingly layered. Prevention centres on phishing-resistant authentication, patching of internet-facing services, and least-privilege segmentation to stop lateral movement. Resilience centres on immutable, offline, tested backups — the core of [[Disaster Recovery]] — because paying the ransom neither guarantees working decryptors nor removes the stolen data. Mature [[Incident Response]] plans rehearse the specific ransomware scenario: isolation, forensics, legal and regulatory notification (UK GDPR, NIS regulations), and the payment decision, on which official guidance from the NCSC and law enforcement is firmly against paying.

  ## Current Landscape

  - **Scale**: annual global damages are estimated in the tens of billions of dollars; healthcare, education, manufacturing, and local government are disproportionately hit because downtime is intolerable.
  - **Notable incidents**: WannaCry and NotPetya (2017), Colonial Pipeline and Kaseya (2021), MOVEit mass extortion (2023), the British Library attack (2023), and the Change Healthcare and Synnovis/NHS incidents (2024) illustrate supply-chain and critical-infrastructure exposure.
  - **Ecosystem churn**: law-enforcement takedowns (LockBit's Operation Cronos, ALPHV's collapse in 2024) fragment groups without ending the model; affiliates migrate to successor brands.
  - **Policy direction**: mandatory incident reporting, sanctions on payment facilitation, and proposals (including in the UK) to ban or require notification of ransom payments by public bodies and critical infrastructure operators.
  - **Countermeasures**: EDR with behavioural detection of mass encryption, immutable object-lock backups, network segmentation, and rehearsed offline recovery are the consensus baseline.
