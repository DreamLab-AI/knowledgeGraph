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