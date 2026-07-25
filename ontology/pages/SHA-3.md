public:: true

# SHA-3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:sha-3",
  "@type": "Page",
  "vc:slug": "sha-3",
  "title": "SHA-3",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sha-3",
  "@type": "Class",
  "label": "SHA-3",
  "definition": "SHA-3 is a family of cryptographic hash functions standardised by NIST in FIPS 202, based on the Keccak sponge construction rather than the Merkle-Damgaard design of SHA-2. Its sponge structure provides strong resistance to length-extension attacks and offers configurable output lengths and extendable-output functions. It is used as a collision-resistant primitive in digital signatures and integrity verification.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}, {"@id": "urn:ngm:class:cryptography-security-and-privacy", "label": "Cryptography Security and Privacy"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - SHA-3 is the NIST FIPS 202 hash family built on the Keccak sponge construction, resistant to length-extension attacks and offering extendable output. It is used by [[Digital Signature]] schemes and is a primitive within [[Cryptography Security and Privacy]].
- ### Content
  - The sponge absorbs input into a large internal state through the Keccak-f permutation, then squeezes out a digest, supporting SHA3-224 through SHA3-512 and the SHAKE XOFs. Standardised in 2015 as a structurally distinct alternative to SHA-2, it provides cryptographic diversity rather than replacing the still-secure SHA-2 family.
