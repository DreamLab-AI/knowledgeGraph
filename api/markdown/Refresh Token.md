A refresh token is a long-lived credential issued alongside a short-lived access token, used to obtain new access tokens without prompting the user to re-authenticate. By keeping access tokens short-lived and exchanging the refresh token at the authorisation server, systems limit the damage of a leaked access token while preserving a smooth user session. Refresh tokens are sensitive and typically bound, rotated, and revocable.

- A [[Refresh Token]] is a long-lived [[Token]] that obtains new short-lived access tokens, supporting [[Session Management]] in [[OAuth 2.0]] without repeated [[Authentication]].

### Overview

- Refresh tokens let clients renew access without re-authenticating the user each time.
- They are paired with short-lived access tokens to bound the impact of token leakage.
- Because they are long-lived, they are guarded carefully and often rotated on use.
- They are central to maintaining sessions in OAuth and OpenID Connect flows.

### Mechanisms

- Issuance: granted with the access token after the authorisation flow.
- Exchange: presented to the authorisation server to mint fresh access tokens.
- Rotation: a new refresh token replaces the old one to detect replay.
- Binding: optionally tied to a client or device to limit theft value.
- Revocation: invalidated server-side to end a session immediately.

### Applications

- Keeping mobile and web sessions alive without frequent logins.
- Limiting blast radius by keeping access tokens short-lived.
- Supporting offline access for background processes.
- Detecting token theft through rotation and reuse detection.

### Provenance

