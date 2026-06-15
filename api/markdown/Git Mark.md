public:: true
alias:: Git-mark, git-mark, Gitmark

# Git Mark
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:git-mark",
  "@type": "Page",
  "title": "Git Mark",
  "vc:slug": "git-mark",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:git-mark",
  "@type": "Class",
  "label": "Git Mark",
  "definition": "Git Mark is a Block Trails Profile that anchors a Git history to Bitcoin by using each commit hash as the tweak that advances a trail, so the sequence of commits becomes a single-use-seal chain whose ordering and uniqueness are enforced by Bitcoin's UTXO model. The Blocktrails verifier checks a git-mark trail against the chain, confirming that each marked commit was timestamped and is tamper-evident on Bitcoin — it proves the history's immutability and temporal anchoring, not the correctness of the code itself. This gives a Bitcoin-secured provenance log for source repositories without storing any repository data on-chain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:block-trails",
      "label": "Block Trails"
    }
  ],
  "sameAs": [],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:block-trails",
        "label": "Block Trails"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:git",
        "label": "Git"
      },
      {
        "@id": "urn:ngm:class:single-use-seals",
        "label": "Single Use Seals"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:proof-of-publication",
        "label": "Proof of Publication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Software Supply Chain Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:trusted-timestamping",
        "label": "Timestamping"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:version-control",
        "label": "Version Control"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:content-provenance",
        "label": "Content Provenance"
      },
      {
        "@id": "urn:ngm:class:audit-log",
        "label": "Audit Log"
      },
      {
        "@id": "urn:ngm:class:client-side-validation",
        "label": "Client-Side Validation"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "ResearchAuthored"
  }
}
```

- ### Definition
  - Git Mark is the [[Block Trails]] Profile for anchoring [[Git]] histories to [[Bitcoin Network|Bitcoin]]. Each commit hash becomes the tweak that advances the trail, turning the commit graph into a [[Single Use Seals]] chain ordered by Bitcoin.

- ### Overview
  - To mark a repository, the latest commit hash is folded into the controlling key and the trail's head [[UTXO Model|UTXO]] is spent to a new [[Taproot]] output. The Blocktrails verifier then walks the trail against the chain, confirming "each git mark, verified on-chain". This proves the history is timestamped and tamper-evident — it does **not** assert that the code is correct, only that *this* history existed at *this* time and has not been silently rewritten.

- ### Why it matters
  - Git's own hashes give integrity *within* a repository, but a maintainer can still rewrite or backdate history off-chain. Git Mark binds the history to [[Proof of Publication]] on Bitcoin, giving downstream consumers a trustless [[Provenance Tracking]] and [[Software Supply Chain Security]] signal without publishing source on-chain.

- ### Relationships
  - is-subclass-of:: [[Block Trails]]
  - part-of:: [[Block Trails]]
  - uses:: [[Git]]
  - uses:: [[Single Use Seals]]
  - depends-on:: [[Bitcoin Network]]
  - depends-on:: [[Proof of Publication]]
  - implements:: [[Timestamping]]
  - enables:: [[Provenance Tracking]]
  - bridges-to:: [[Version Control]]
  - bridges-to:: [[Continuous Integration]]
  - related-to:: [[Content Provenance]]

- ### Provenance
  - sources:: https://blocktrails.org/ (Git-mark profile; verifier)
  - updated:: 2026-06-14
