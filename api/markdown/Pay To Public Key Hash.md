Pay-to-Public-Key-Hash (P2PKH) is the classic Bitcoin transaction output script that locks funds to the hash of a recipient's public key rather than to the key itself. Spending requires the spender to supply both the matching public key, which is hashed and compared to the committed hash, and a valid signature over the transaction, providing privacy until spend time and shorter addresses. It is expressed in Bitcoin Script as a fixed opcode sequence and contrasts with pay-to-script-hash and witness output types.

- [[Pay To Public Key Hash]] (P2PKH) is a [[Bitcoin Script]] output type that locks funds to the hash of a recipient's public key. Spending requires presenting the public key plus a valid [[Digital Signature]], using the [[Cryptography]] of the [[Bitcoin]] protocol.

### Overview

- P2PKH was the dominant Bitcoin output type for years and remains widely supported. By committing only to a hash of the public key, the full key stays hidden on-chain until the output is spent, which both shortens addresses and provides a measure of privacy.
- The output (scriptPubKey) embeds the public-key hash with a standard opcode template; the spending input (scriptSig) supplies the signature and public key, which the verifier checks against the committed hash and the transaction message.

### Key aspects

- The locking script follows the canonical OP_DUP OP_HASH160 <pubKeyHash> OP_EQUALVERIFY OP_CHECKSIG pattern.
- Validation hashes the supplied public key and compares it to the committed value before checking the signature.
- Addresses derived from P2PKH outputs historically begin with the digit one in mainnet base58 encoding.
- It contrasts with script-hash and witness output forms that move complexity or witness data elsewhere.

### Applications

- Receiving Bitcoin to a single-key address for payments and custody.
- Legacy wallet compatibility where newer witness formats are unsupported.
- Teaching the canonical script-verification flow on a [[Stack Machine]].

### Provenance

