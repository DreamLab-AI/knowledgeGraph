public:: true

# BIP-16
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bip-16",
  "@type": "Page",
  "vc:slug": "bip-16",
  "title": "BIP-16",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bip-16",
  "@type": "Class",
  "label": "BIP-16",
  "definition": "BIP-16 is the Bitcoin Improvement Proposal that introduced Pay-to-Script-Hash (P2SH), allowing funds to be sent to the hash of a redeem script rather than to a full script. The spender supplies the matching script and its satisfying inputs at redemption time, shifting the burden of specifying complex spending conditions from sender to recipient. P2SH made multi-signature and other complex scripts practical and is the standard mechanism behind multi-sig wallet addresses.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-sig-governance", "label": "Multi Sig Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - BIP-16 defines Pay-to-Script-Hash (P2SH), the Bitcoin standard that makes complex spending conditions practical and underpins [[Multi-Sig Governance]].
- ### Content
  - By committing only to a script hash in the output, P2SH keeps transactions compact and lets recipients define multi-signature or time-locked redemption logic. Activated in 2012, it became the foundation for multi-sig custody before SegWit and Taproot refined the model.
