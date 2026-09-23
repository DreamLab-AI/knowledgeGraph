
Room state tracking is the mechanism in real-time collaboration and conferencing systems that maintains an authoritative, synchronised record of a virtual room's membership, media status, and shared state. It tracks who is present, their roles, mute and stream states, and assignments such as breakout-room placement. Reliable state tracking ensures all participants and the server share a consistent view of the session.

- ### Content
  - The system reconciles join and leave events, role changes, and stream toggles into a single authoritative state propagated to all clients. For breakout rooms it tracks participant assignments and transitions, keeping the main and sub-room views consistent.

