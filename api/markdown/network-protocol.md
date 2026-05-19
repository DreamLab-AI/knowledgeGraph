- ### Definition
  - A network protocol is a set of established rules that specify how to format, send, and receive data between networked devices, enabling diverse communication systems to interact using standard procedures. Protocols are organized into layered architectures such as the OSI model (7 layers) and TCP/IP model (4 layers), each layer handling specific aspects of network communication.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:NetworkProtocol
  - owl-role:: Standard
  - belongs-to-domain:: [[InfrastructureDomain]], [[Technology Domain]], [[ETSI_Domain_Interoperability]]

- ### Relationships
  - enables:: [[Network Communication]], [[Data Transmission]], [[Interoperability]]

- ### Content

  ## OSI Model (7 Layers)

  The Open Systems Interconnection model is a conceptual framework created by ISO enabling diverse systems to communicate using standard protocols.

  | Layer | Name | Function | Protocols |
  |-------|------|----------|-----------|
  | 7 | Application | Network services to applications | HTTP, FTP, SMTP, DNS, DHCP |
  | 6 | Presentation | Data translation, encryption, compression | SSL/TLS, JPEG, ASCII |
  | 5 | Session | Session establishment and management | NetBIOS, RPC |
  | 4 | Transport | Reliable or fast delivery | TCP, UDP |
  | 3 | Network | Logical addressing and routing | IP, ICMP, OSPF |
  | 2 | Data Link | Node-to-node data transfer | Ethernet, Wi-Fi, PPP |
  | 1 | Physical | Raw bit transmission | USB, DSL, Fiber optic |

  ## TCP/IP Model (4 Layers)

  The practical model underlying the modern Internet, combining OSI layers for simplicity.

  | Layer | Function | Protocols |
  |-------|----------|-----------|
  | Application | User data preparation | HTTP, FTP, SMTP, DNS |
  | Transport | Segment data, ensure delivery | TCP, UDP |
  | Internet | IP addressing, routing | IP, ICMP, ARP |
  | Link (Network Access) | Frame conversion, physical transmission | Ethernet, Wi-Fi |

  ## Key Protocols

  ### Transport Layer
  - **TCP (Transmission Control Protocol)**: Connection-oriented, reliable delivery with acknowledgments
  - **UDP (User Datagram Protocol)**: Connectionless, fast but unreliable, used for streaming

  ### Network Layer
  - **IP (Internet Protocol)**: Logical addressing and packet routing
  - **ICMP**: Error reporting and diagnostics (ping)

  ### Application Layer
  - **HTTP/HTTPS**: Web communication
  - **FTP/SFTP**: File transfer
  - **SMTP/IMAP/POP3**: Email protocols
  - **DNS**: Domain name resolution
  - **DHCP**: Dynamic IP assignment

  ## Model Comparison

  | Aspect | OSI Model | TCP/IP Model |
  |--------|-----------|--------------|
  | Layers | 7 | 4 |
  | Purpose | Reference framework | Practical implementation |
  | Upper Layers | Separate (5,6,7) | Combined (Application) |
  | Usage | Education, troubleshooting | Actual Internet operations |

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z