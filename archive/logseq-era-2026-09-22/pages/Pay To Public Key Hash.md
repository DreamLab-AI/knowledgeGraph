public:: true

# Pay To Public Key Hash
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pay-to-public-key-hash", "@type":"Page", "title":"Pay To Public Key Hash", "vc:slug":"pay-to-public-key-hash", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:pay-to-public-key-hash",
  "@type":"Class",
  "label":"Pay To Public Key Hash",
  "definition":"Pay-to-Public-Key-Hash (P2PKH) is the classic Bitcoin transaction output script that locks funds to the hash of a recipient's public key rather than to the key itself. Spending requires the spender to supply both the matching public key, which is hashed and compared to the committed hash, and a valid signature over the transaction, providing privacy until spend time and shorter addresses. It is expressed in Bitcoin Script as a fixed opcode sequence and contrasts with pay-to-script-hash and witness output types.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:bitcoin-script","label":"Bitcoin Script"}],
  "relations":{
    "implements":[
      {"@id":"urn:ngm:class:bitcoin-script","label":"Bitcoin Script"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"},
      {"@id":"urn:ngm:class:stack-machine","label":"Stack Machine"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:unspent-transaction-output","label":"Unspent Transaction Output"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:pay-to-script-hash","label":"Pay To Script Hash"},
      {"@id":"urn:ngm:class:segregated-witness","label":"Segregated Witness"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:transaction","label":"Transaction"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"},
      {"@id":"urn:ngm:class:multisignature","label":"Multisignature"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:transaction","label":"Transaction"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- [[Pay To Public Key Hash]] (P2PKH) is a [[Bitcoin Script]] output type that locks funds to the hash of a recipient's public key. Spending requires presenting the public key plus a valid [[Digital Signature]], using the [[Cryptography]] of the [[Bitcoin]] protocol.
- ### Overview
- P2PKH was the dominant Bitcoin output type for years and remains widely supported. By committing only to a hash of the public key, the full key stays hidden on-chain until the output is spent, which both shortens addresses and provides a measure of privacy.
- The output (scriptPubKey) embeds the public-key hash with a standard opcode template; the spending input (scriptSig) supplies the signature and public key, which the verifier checks against the committed hash and the transaction message.
- ### Key aspects
- The locking script follows the canonical OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG pattern.
- Validation hashes the supplied public key and compares it to the committed value before checking the signature.
- Addresses derived from P2PKH outputs historically begin with the digit one in mainnet base58 encoding.
- It contrasts with script-hash and witness output forms that move complexity or witness data elsewhere.
- ### Applications
- Receiving Bitcoin to a single-key address for payments and custody.
- Legacy wallet compatibility where newer witness formats are unsupported.
- Teaching the canonical script-verification flow on a [[Stack Machine]].
- ### Relationships
- subClassOf:: [[Bitcoin Script]]
- implements:: [[Bitcoin Script]]
- uses:: [[Digital Signature]]
- uses:: [[Stack Machine]]
- requires:: [[Cryptography]]
- partOf:: [[Unspent Transaction Output]]
- contrastsWith:: [[Pay To Script Hash]]
- contrastsWith:: [[Segregated Witness]]
- enables:: [[Transaction]]
- relatedTo:: [[Bitcoin]]
- relatedTo:: [[Multisignature]]
- dependsOn:: [[Digital Signature]]
- supports:: [[Transaction]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
