public:: true

# responsible scaling policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f6f6771bd75cdc6a4dd0e29e0a06cdb29495111dbe8a59a7b1100e423de443b9",
  "@type": "Page",
  "vc:slug": "responsible-scaling-policy",
  "title": "responsible scaling policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:responsible-scaling-policy",
  "@type": "Class",
  "label": "Responsible Scaling Policy",
  "definition": "A Responsible Scaling Policy (RSP) is a voluntary safety commitment by frontier AI developers that specifies: the capability thresholds at which enhanced safety evaluations must be conducted before further scaling or deployment; the specific risk criteria (particularly around biological, chemical, nuclear, and cyberweapon uplift) that would trigger deployment restrictions; and the technical and organisational safeguards required at each capability level. RSPs translate high-level safety intentions into concrete, falsifiable commitments, creating accountability mechanisms analogous to a self-imposed regulatory framework operating ahead of formal government regulation.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:red-teaming", "label": "Red Teaming"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"},
      {"@id": "urn:ngm:class:frontier-model-forum", "label": "Frontier Model Forum"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A Responsible Scaling Policy (RSP) is a voluntary safety commitment by frontier AI developers that specifies: the capability thresholds at which enhanced safety evaluations must be conducted before further scaling or deployment; the specific risk criteria (particularly around biological, chemical, nuclear, and cyberweapon uplift) that would trigger deployment restrictions; and the technical and organisational safeguards required at each capability level. RSPs translate high-level safety intentions into concrete, falsifiable commitments, creating accountability mechanisms analogous to a self-imposed regulatory framework operating ahead of formal government regulation.

- ### Semantic Classification
  - owl-class:: responsible-scaling-policy:Responsible Scaling Policy
  - owl-role:: Concept

- ### Relationships
  - requires [[Red Teaming]]
  - requires [[Risk Assessment]]
  - relatedTo [[AI Safety]]
  - relatedTo [[AI Governance Framework]]
  - relatedTo [[Frontier Model Forum]]
  - supports [[AI Alignment]]

- ### Content
  Responsible Scaling Policies emerged from the recognition that voluntary safety commitments, to be credible, must be specific enough to be verifiable and must define clear decision rules rather than aspirational principles. Anthropic's RSP — the first publicly released example — defines AI Safety Levels (ASLs) analogous to biosafety level frameworks: each level corresponds to a capability threshold and specifies required countermeasures before proceeding. Crossing an ASL threshold triggers mandatory red-teaming for uplift to CBRN (chemical, biological, radiological, nuclear) weapons and enhanced cybersecurity evaluations.

  The policy operates as a commitment device: by publishing specific criteria in advance, the developer creates reputational and contractual accountability that makes it harder to quietly override safety gates under commercial pressure. Third-party auditors and government bodies can assess whether evaluation protocols have been followed. The UK AI Safety Institute and similar national bodies conduct evaluations of frontier models partly to provide independent verification analogous to what RSPs call for internally.

  Critics note that RSPs are self-regulated and lack legal enforcement, creating a collective action problem where competitive pressures may erode commitments over time. Proposals for international RSP frameworks and treaty-level obligations are under active discussion in AI governance forums. The Frontier Model Forum provides a venue for frontier AI labs to share safety evaluation methodologies and work towards cross-organisation standards, though binding commitments remain voluntary as of 2025.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
