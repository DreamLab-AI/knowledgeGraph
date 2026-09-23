
RTCP feedback is the control-channel mechanism of the RTP Control Protocol by which receivers report reception quality, such as packet loss, jitter, and round-trip time, back to senders during real-time media streaming. Senders use these reports, along with extensions like NACK, PLI, and REMB, to adapt encoding bitrate and recover from loss. It is the feedback loop that enables congestion-aware, resilient audiovisual transport.

- ### Content
  - Receiver reports carry loss, jitter, and timing statistics, while feedback messages such as NACK, PLI, and REMB signal retransmission and rate hints. Senders use this to tune bitrate, request keyframes, and respond to congestion, keeping interactive media smooth under changing network conditions.

