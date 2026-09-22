public:: true

# Commit-Reveal Scheme
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:commit-reveal-scheme",
  "@type": "Page",
  "vc:slug": "commit-reveal-scheme",
  "title": "Commit-Reveal Scheme",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commit-reveal-scheme",
  "@type": "Class",
  "label": "Commit-Reveal Scheme",
  "definition": "A commit-reveal scheme is a two-phase cryptographic protocol in which a participant first publishes a binding, hiding commitment to a value (typically a hash of the value plus a nonce) and later reveals the value for verification. The commit phase prevents others from learning or altering the choice, while the reveal phase lets anyone check the value against the earlier commitment. It matters for on-chain voting and auctions because it stops front-running and last-mover advantage by concealing inputs until all parties are bound.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-protocol", "label": "Cryptographic Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Commit-Reveal Scheme binds a participant to a hidden value via a hash commitment and later discloses it for verification, a mechanism used to make on-chain [[Quadratic Voting]] resistant to front-running.
- ### Content
  - Security rests on the commitment being both hiding (it leaks nothing about the value) and binding (the committer cannot later open it to a different value). In governance and auction contracts, all participants commit before any reveal, neutralising the advantage of acting last and protecting against vote-buying signalling.
