public:: true

# Smart Contract Audit
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:smart-contract-audit", "@type":"Page", "title":"Smart Contract Audit", "vc:slug":"smart-contract-audit", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:smart-contract-audit",
  "@type":"Class",
  "label":"Smart Contract Audit",
  "definition":"A smart contract audit is a structured security review of on-chain contract code that seeks to identify vulnerabilities, logic errors and economic flaws before deployment to an immutable ledger. Auditors combine manual code review with static analysis, automated scanners and, where warranted, formal verification to assess correctness against the intended specification. Because deployed contracts often custody substantial value and cannot easily be patched, auditing is a critical control in the blockchain and decentralised finance lifecycle.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:security-audit","label":"Security Audit"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:code-review","label":"Code Review"},
      {"@id":"urn:ngm:class:static-analysis","label":"Static Analysis"},
      {"@id":"urn:ngm:class:formal-verification","label":"Formal Verification"}
    ],
    "partOf":[{"@id":"urn:ngm:class:blockchain-security","label":"Blockchain Security"}],
    "requires":[
      {"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},
      {"@id":"urn:ngm:class:solidity","label":"Solidity"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:static-analysis","label":"Static Analysis"},
      {"@id":"urn:ngm:class:formal-verification","label":"Formal Verification"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:decentralised-finance","label":"Decentralised Finance"},
      {"@id":"urn:ngm:class:blockchain-security","label":"Blockchain Security"}
    ],
    "supports":[{"@id":"urn:ngm:class:evm","label":"EVM"}],
    "dependsOn":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "bridgesTo":[
      {"@id":"urn:ngm:class:security-audit","label":"Security Audit"},
      {"@id":"urn:ngm:class:formal-verification","label":"Formal Verification"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:vulnerability","label":"Vulnerability"},
      {"@id":"urn:ngm:class:reentrancy-attack","label":"Reentrancy Attack"},
      {"@id":"urn:ngm:class:ethereum","label":"Ethereum"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A smart contract audit is a structured security review of on-chain [[Smart Contract]] code, combining [[Code Review]], [[Static Analysis]] and sometimes [[Formal Verification]] to find vulnerabilities before immutable deployment. It is a core control within [[Blockchain Security]].
- ### Overview
- Deployed contracts typically custody real value and are difficult or impossible to patch, so a flaw discovered after launch can be catastrophic and irreversible.
- Audits assess code against its intended specification, looking for both classic software defects and blockchain-specific hazards such as the [[Reentrancy Attack]], integer overflow and unchecked external calls.
- A rigorous audit blends human expertise with tooling, escalating to mathematical [[Formal Verification]] for high-value or safety-critical components.
- ### Mechanisms
- Manual line-by-line review against a threat model and specification.
- Automated [[Static Analysis]] and pattern scanners for known [[Vulnerability]] classes.
- Property-based testing and fuzzing of contract invariants.
- Formal verification of critical safety and liveness properties.
- Severity-ranked findings, remediation guidance and a follow-up review.
- ### Applications
- Pre-launch review of [[Decentralised Finance]] protocols and token contracts.
- Verifying [[EVM]] bytecode behaviour and gas-sensitive logic.
- Ongoing assurance for upgradeable proxy contract systems.
- Due diligence supporting [[Blockchain Security]] across an ecosystem.
- ### Relationships
- hasPart:: [[Code Review]]
- hasPart:: [[Static Analysis]]
- hasPart:: [[Formal Verification]]
- partOf:: [[Blockchain Security]]
- requires:: [[Smart Contract]]
- requires:: [[Solidity]]
- uses:: [[Static Analysis]]
- uses:: [[Formal Verification]]
- enables:: [[Decentralised Finance]]
- enables:: [[Blockchain Security]]
- supports:: [[EVM]]
- dependsOn:: [[Smart Contract]]
- bridgesTo:: [[Security Audit]]
- bridgesTo:: [[Formal Verification]]
- relatedTo:: [[Vulnerability]]
- relatedTo:: [[Reentrancy Attack]]
- relatedTo:: [[Ethereum]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
