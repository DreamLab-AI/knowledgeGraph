
Git Mark is a Block Trails Profile that anchors a Git history to Bitcoin by using each commit hash as the tweak that advances a trail, so the sequence of commits becomes a single-use-seal chain whose ordering and uniqueness are enforced by Bitcoin's UTXO model. The Blocktrails verifier checks a git-mark trail against the chain, confirming that each marked commit was timestamped and is tamper-evident on Bitcoin — it proves the history's immutability and temporal anchoring, not the correctness of the code itself. This gives a Bitcoin-secured provenance log for source repositories without storing any repository data on-chain.

- ### Overview
  - To mark a repository, the latest commit hash is folded into the controlling key and the trail's head [[UTXO Model|UTXO]] is spent to a new [[Taproot]] output. The Blocktrails verifier then walks the trail against the chain, confirming "each git mark, verified on-chain". This proves the history is timestamped and tamper-evident — it does **not** assert that the code is correct, only that *this* history existed at *this* time and has not been silently rewritten.

- ### Why it matters
  - Git's own hashes give integrity *within* a repository, but a maintainer can still rewrite or backdate history off-chain. Git Mark binds the history to [[Proof of Publication]] on Bitcoin, giving downstream consumers a trustless [[Provenance Tracking]] and [[Software Supply Chain Security]] signal without publishing source on-chain.

- ### Provenance

