
A commit-reveal scheme is a two-phase cryptographic protocol in which a participant first publishes a binding, hiding commitment to a value (typically a hash of the value plus a nonce) and later reveals the value for verification. The commit phase prevents others from learning or altering the choice, while the reveal phase lets anyone check the value against the earlier commitment. It matters for on-chain voting and auctions because it stops front-running and last-mover advantage by concealing inputs until all parties are bound.

- ### Content
  - Security rests on the commitment being both hiding (it leaks nothing about the value) and binding (the committer cannot later open it to a different value). In governance and auction contracts, all participants commit before any reveal, neutralising the advantage of acting last and protecting against vote-buying signalling.

