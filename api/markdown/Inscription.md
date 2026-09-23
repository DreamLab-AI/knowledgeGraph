
An inscription is arbitrary data, such as an image, text or document, written directly onto an individual satoshi on the Bitcoin blockchain so that the content is stored entirely on-chain. Enabled by the Taproot upgrade and the Ordinals numbering scheme, inscriptions embed their payload in the witness portion of a transaction, making each inscribed satoshi a verifiable, transferable digital artefact. They underpin Bitcoin-native non-fungible assets and digital collectibles without relying on external metadata storage.

- An inscription writes arbitrary content directly onto an individual [[Satoshi]] using the [[Ordinals]] scheme, storing the payload on the [[Bitcoin]] [[Blockchain]] itself rather than in external storage. It turns each inscribed coin into a verifiable [[Digital Asset]].
- ### Overview
- Inscriptions became possible after the Taproot soft fork relaxed limits on witness data, allowing larger payloads to be committed within a transaction at modest cost.
- Because the content lives on-chain, an inscription carries strong durability and verifiability guarantees: anyone running a full node can reconstruct the artefact without trusting a third-party host.
- The approach contrasts with conventional token standards that store only a pointer to off-chain metadata, and it has driven a wave of Bitcoin-native collectibles and experiments.
- ### Mechanisms
- Content is committed in a Taproot script-path spend and revealed in the witness of a later transaction.
- The Ordinals theory assigns each satoshi a stable serial number, giving the inscription a unique carrier.
- Transfer of the inscribed satoshi moves ownership of the artefact, tracked by sat-aware wallets and indexers.
- Multiple media types are supported, identified by a content-type field embedded alongside the payload.
- Indexers parse the chain to present inscriptions as collectibles to users and marketplaces.
- ### Applications
- Minting Bitcoin-native [[Non-Fungible Token]] artefacts and [[Digital Art]].
- Recording immutable [[Provenance]] and authenticity claims fully on-chain.
- Trading inscribed satoshis through an [[NFT Marketplace]] and specialised wallets.
- Embedding documents or arbitrary [[Metadata]] for long-term archival.
- ### Provenance

