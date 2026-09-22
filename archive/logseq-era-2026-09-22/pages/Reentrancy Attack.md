public:: true

# Reentrancy Attack

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:reentrancy-attack",
  "@type": "Page",
  "title": "Reentrancy Attack",
  "vc:slug": "reentrancy-attack",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reentrancy-attack",
  "@type": "Class",
  "label": "Reentrancy Attack",
  "definition": "A reentrancy attack is a smart-contract exploit in which a malicious contract repeatedly re-enters a vulnerable function before its state is updated, draining funds or corrupting state. It arises when a contract makes an external call before completing its own bookkeeping, allowing the callee to recursively invoke the caller. The class of bug was made notorious by the DAO incident and is mitigated by the checks-effects-interactions pattern and reentrancy guards.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-security",
      "label": "Blockchain Security"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      },
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      },
      {
        "@id": "urn:ngm:class:state-change",
        "label": "State Change"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:state-change",
        "label": "State Change"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-security",
        "label": "Blockchain Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:attack-vector",
        "label": "Attack Vector"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vulnerability",
        "label": "Vulnerability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:solidity",
        "label": "Solidity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A reentrancy attack is a smart-contract exploit in which a malicious contract repeatedly re-enters a vulnerable function before its state is updated, draining funds or corrupting state. It arises when a contract makes an external call before completing its own bookkeeping, allowing the callee to recursively invoke the caller. The class of bug was made notorious by the DAO incident and is mitigated by the checks-effects-interactions pattern and reentrancy guards.
  - Related: [[Smart Contract]] [[Blockchain Security]] [[Solidity]] [[Ethereum]]
- ### Overview
  - The attack exploits the order of operations: a vulnerable contract sends value via an external call before decrementing the caller's balance, so the recipient's fallback function calls back into the withdrawal function while the stale balance still permits it. Each recursive call repeats until funds or gas are exhausted.
- ### Mechanisms
  - External call made before internal state is updated
  - Recursive re-entry via the recipient's fallback function
  - State left inconsistent across nested invocations
  - Mitigation through checks-effects-interactions ordering
  - Reentrancy guards and mutex locks as defences
- ### Applications
  - Auditing smart contracts for unsafe external calls
  - Designing withdrawal patterns resistant to re-entry
  - Static and dynamic analysis tooling for vulnerability detection
  - Security education and red-team exercises
- ### Relationships
  - subClassOf:: [[Blockchain Security]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Gas]]
  - relatedTo:: [[Solidity]]
  - relatedTo:: [[State Change]]
  - contrastsWith:: [[Security Audit]]
  - uses:: [[State Change]]
  - requires:: [[Smart Contract]]
  - partOf:: [[Blockchain Security]]
  - implements:: [[Attack Vector]]
  - supports:: [[Vulnerability]]
  - enables:: [[Vulnerability]]
  - dependsOn:: [[Solidity]]
  - bridgesTo:: [[Security Audit]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
