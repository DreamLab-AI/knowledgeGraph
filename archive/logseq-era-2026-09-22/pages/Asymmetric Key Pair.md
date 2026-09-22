public:: true

# Asymmetric Key Pair

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:asymmetric-key-pair", "@type":"Page", "title":"Asymmetric Key Pair", "vc:slug":"asymmetric-key-pair", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:asymmetric-key-pair",
  "@type":"Class",
  "label":"Asymmetric Key Pair",
  "definition":"An asymmetric key pair is the pair of mathematically related keys, a public key and a private key, that together enable asymmetric cryptography: data encrypted or signed with one key can only be decrypted or verified with the other. The private key must be kept secret by its owner, while the public key can be freely distributed, allowing anyone to encrypt a message intended for the owner or verify a signature the owner has produced. Asymmetric key pairs underpin public-key infrastructure, digital signatures, and blockchain account ownership.",
  "domain":"security",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:asymmetric-cryptography","label":"Asymmetric Cryptography"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[],
    "partOf":[
      {"@id":"urn:ngm:class:asymmetric-cryptography","label":"Asymmetric Cryptography"}
    ]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An asymmetric key pair is the pair of mathematically related keys, a public key and a private key, that together enable asymmetric cryptography: data encrypted or signed with one key can only be decrypted or verified with the other. The private key must be kept secret by its owner, while the public key can be freely distributed, allowing anyone to encrypt a message intended for the owner or verify a signature the owner has produced. Asymmetric key pairs underpin public-key infrastructure, digital signatures, and blockchain account ownership.
- ### Relationships
	- subClassOf:: [[Asymmetric Cryptography]]
	- partOf:: [[Asymmetric Cryptography]]
