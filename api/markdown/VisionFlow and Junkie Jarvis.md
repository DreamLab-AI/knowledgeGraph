public:: true

# VisionFlow and Junkie Jarvis
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:756bf8a83980b969721be9117236c987bd8c53337890bed3a8ab5d2e62472a58",
  "@type": "Page",
  "vc:slug": "vision-flow-and-junkie-jarvis",
  "title": "VisionFlow and Junkie Jarvis",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:vision-flow-client",
      "vc:label": "VisionFlow Client"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "VisionFlow and Junkie Jarvis"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vision-flow-and-junkie-jarvis",
  "@type": "Class",
  "label": "VisionFlow and Junkie Jarvis",
  "definition": "VisionFlow and Junkie Jarvis is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:vision-flow-and-junkie-jarvis:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:756bf8a83980b969721be9117236c987bd8c53337890bed3a8ab5d2e62472a58"
  },
  "vc:resolutions": [
    {
      "raw": "[[VisionFlow Client]]",
      "resolved": "urn:visionflow:linked:vision-flow-client",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - VisionFlow and Junkie Jarvis is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:VisionFlowAndJunkieJarvis
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [[VisionFlow Client]]
  - # Uses Open Source Knowledge Management (LogSeq)
  - <iframe src="https://narrativegoldmine.com//#/graph" style="width: 100%; height: 600px"></iframe>
  - # Distributed Human-AI Collaboration on Private Datasets
		- VisionFlow is a cutting-edge platform designed for **real-time, collaborative knowledge management and AI-driven problem-solving**. At its core, VisionFlow enables **distributed human experts*  spread across teams, organizations, or even global network  to interact seamlessly with **powerful AI agents** in a shared, immersive 3D environment. By grounding AI capabilities in **private, secure datasets**, it transforms abstract data into actionable insights, fostering innovation without compromising privacy or security.
		- Whether you're a software engineer debugging complex systems, a researcher analyzing interconnected knowledge graphs, or a team collaborating on strategic initiatives, VisionFlow acts as a **pliable general-purpose platform**. It bridges human expertise with AI orchestration, allowing users to visualize, manipulate, and evolve ideas in real time while maintaining full control over sensitive data.
		- Built on a robust Rust backend with GPU-accelerated physics and React/Three.js frontend, VisionFlow is extensible, scalable, and production-ready. It supports everything from simple note-taking to enterprise-scale AI multi-agent workflows, making it versatile for individuals, teams, and organizations.
		- In today's data-driven world, knowledge is often scattered across documents, databases, and tools, making it hard for experts to collaborate effectively, specially when integrating AI. VisionFlow solves this by providing a **unified canvas** where humans and AI agents work together on **grounded private datasets**. Here's why it's a game-changer:
			  VisionFlow isn't just a visualization tool; it's a **collaborative workspace** where humans and AI agents interact in real time. Experts can:
				- **Pose questions** to AI agents powered by Claude Flow's MCP (Model Context Protocol).
				- **Spawn specialized agents** (e.g., researchers, coders, analysts) to tackle subtasks.
				- **Observe live progress** as agents update the 3D graph, showing evolving insights.
				- **Intervene dynamically**—drag nodes, adjust parameters, or redirect agents—all in a shared virtual space.
			- This pliability allows distributed teams (e.g., remote engineers or global research groups) to co-create solutions, with AI handling computation-heavy tasks while humans provide domain expertise.
			- Unlike public AI tools, VisionFlow keeps your data **private and secure**:
				- **Local-First Processing**: Metadata and graph structures are processed server-side on your infrastructure.
				- **Nostr Authentication**: Decentralized, key-based auth ensures user control without centralized identity providers.
				- **End-to-End Encryption**: Sensitive data (e.g., API keys, user sessions) is encrypted at rest and in transit.
				- **Zero-Trust Model**: Continuous verification—no implicit trust, even for internal requests.
				- **On-Premise Deployment**: Run entirely on your hardware or private cloud, with optional GPU acceleration.
			- You can import private datasets (e.g., internal docs, proprietary graphs) and have AI agents analyze them without data leaving your environment, ensuring compliance with regulations like GDPR or HIPAA.
			- VisionFlow is designed as a **general-purpose platform**, adaptable to diverse domains:
				- **Research & Analysis**: Visualize literature or datasets; spawn researcher agents for insights.
				- **Software Engineering**: Map codebases; use coder agents for refactoring, tester agents for validation.
				- **Business Intelligence**: Model organizational knowledge; analysts can query and refine in real time.
				- **Creative Collaboration**: Teams co-edit graphs; AI agents generate ideas, documentation, or prototypes.
				- **Education**: Interactive 3D mind maps; students collaborate with AI tutors on private notes.
			- Its modular architecture allows custom extensions, making it pliable for any problem requiring human-AI synergy on private data.
		- VisionFlow's features emphasize real-time interaction, privacy, and extensibility.
				- **GPU-Accelerated Rendering**: Powered by Three.js and React Three Fiber, rendering up to 100,000+ nodes at 60 FPS.
				- **Force-Directed Layout**: Nodes attract/repel based on semantic similarity and connections, creating intuitive clusters.
				- **Dual-Graph Support**: Separate physics for knowledge graphs (stable, blue theme) and agent graphs (dynamic, green theme).
				- **Interactive Controls**: Drag nodes, zoom, orbit, and apply forces in real time.
				- **Claude Flow MCP Integration**: Spawn and coordinate AI agents (e.g., researchers, coders, analysts) via TCP protocol.
				- **Dynamic Topologies**: Mesh (collaborative), hierarchical (command chain), ring (sequential), star (centralized).
				- **Agent Specialisation**: 12+ agent types with domain expertise (e.g., architect for design, tester for validation).
				- **Real-Time Telemetry**: Live updates on agent status, task progress, and performance metrics.
				- **Multi-Modal Pipeline**: Extracts features (topics, domains, structure) to generate dynamic edges and forces.
				- **Ontology Validation**: Maps graph to OWL/RDF for logical consistency checks and inference.
				- **Grounded Insights**: AI agents operate on your private data, ensuring privacy while providing context-aware responses.
				- **Nostr Authentication**: Decentralized identity without centralized providers; users control their keys.
				- **Private Datasets**: All processing happens on your infrastructure; no data leaves your environment.
				- **End-to-End Encryption**: AES-256 for sensitive data; TLS 1.3 for all communications.
				- **Zero-Trust Model**: Continuous verification;
  - shadertoy
  - [Geodesic tiling](https://www.shadertoy.com/view/llVXRd)
  - ```
	  #define MODEL_ROTATION vec2(.3, .25)
	  #define CAMERA_ROTATION vec2(.5, .5)
	  // 0: Defaults
	  // 1: Model
	  // 2: Camera
	  #define MOUSE_CONTROL 1
	  //#define DEBUG
	  // 1, 2, or 3
	  //#define LOOP 1
	  // --------------------------------------------------------
	  // HG_SDF
	  // https://www.shadertoy.com/view/Xs3GRB
	  // --------------------------------------------------------
	  void pR(inout vec2 p, float a) {
	      p = cos(a)*p + sin(a)*vec2(p.y, -p.x);
	  }
	  float pReflect(inout vec3 p, vec3 planeNormal, float offset) {
	      float t = dot(p, planeNormal)+offset;
	      if (t < 0.) {
	          p = p - (2.*t)*planeNormal;
	      }
	      return sign(t);
	  }
	  float smax(float a, float b, float r) {
	      float m = max(a, b);
	      if ((-a < r) && (-b < r)) {
	          return max(m, -(r - sqrt((r+a)*(r+a) + (r+b)*(r+b))));
	      } else {
	          return m;
	      }
	  }
	  // --------------------------------------------------------
	  // Icosahedron domain mirroring
	  // Adapted from knighty https://www.shadertoy.com/view/MsKGzw
	  // --------------------------------------------------------
	  #define PI 3.14159265359
	  vec3 facePlane;
	  vec3 uPlane;
	  vec3 vPlane;
	  int Type=5;
	  vec3 nc;
	  vec3 pab;
	  vec3 pbc;
	  vec3 pca;
	  void initIcosahedron() {//setup folding planes and vertex
	      float cospin=cos(PI/float(Type)), scospin=sqrt(0.75-cospin*cospin);
	      nc=vec3(-0.5,-cospin,scospin);//3rd folding plane. The two others are xz and yz planes
	      pbc=vec3(scospin,0.,0.5);//No normalization in order to have 'barycentric' coordinates work evenly
	      pca=vec3(0.,scospin,cospin);
	      pbc=normalize(pbc); pca=normalize(pca);//for slightly better DE. In reality it's not necesary to apply normalization :)
	  	pab=vec3(0,0,1);
	      facePlane = pca;
	      uPlane = cross(vec3(1,0,0), facePlane);
	      vPlane = vec3(1,0,0);
	  }
	  void pModIcosahedron(inout vec3 p) {
	      p = abs(p);
	      pReflect(p, nc, 0.);
	      p.xy = abs(p.xy);
	      pReflect(p, nc, 0.);
	      p.xy = abs(p.xy);
	      pReflect(p, nc, 0.);
	  }
	  // --------------------------------------------------------
	  // Triangle tiling
	  // Adapted from mattz https://www.shadertoy.com/view/4d2GzV
	  // --------------------------------------------------------
	  const float sqrt3 = 1.7320508075688772;
	  const float i3 = 0.5773502691896258;
	  const mat2 cart2hex = mat2(1, 0, i3, 2. * i3);
	  const mat2 hex2cart = mat2(1, 0, -.5, .5 * sqrt3);
	  #define PHI (1.618033988749895)
	  #define TAU 6.283185307179586
	  struct TriPoints {
	  	vec2 a;
	      vec2 b;
	      vec2 c;
	      vec2 center;
	      vec2 ab;
	      vec2 bc;
	      vec2 ca;
	  };
	  TriPoints closestTriPoints(vec2 p) {    
	      vec2 pTri = cart2hex * p;
	      vec2 pi = floor(pTri);
	      vec2 pf = fract(pTri);
	      float split1 = step(pf.y, pf.x);
	      float split2 = step(pf.x, pf.y);
	      vec2 a = vec2(split1, 1);
	      vec2 b = vec2(1, split2);
	      vec2 c = vec2(0, 0);
	      a += pi;
	      b += pi;
	      c += pi;
	      a = hex2cart * a;
	      b = hex2cart * b;
	      c = hex2cart * c;
	      vec2 center = (a + b + c) / 3.;
	  	vec2 ab = (a + b) / 2.;
	      vec2 bc = (b + c) / 2.;
	      vec2 ca = (c + a) / 2.;
	      return TriPoints(a, b, c, center, ab, bc, ca);
	  }
	  // --------------------------------------------------------
	  // Geodesic tiling
	  // --------------------------------------------------------
	  struct TriPoints3D {
	  	vec3 a;
	      vec3 b;
	      vec3 c;
	  	vec3 center;
	      vec3 ab;
	      vec3 bc;
	      vec3 ca;
	  };
	  vec3 intersection(vec3 n, vec3 planeNormal, float planeOffset) {
	      float denominator = dot(planeNormal, n);
	      float t = (dot(vec3(0), planeNormal ) + planeOffset) / -denominator;
	      return n * t;
	  }
	  //// Edge length of an icosahedron with an inscribed sphere of radius of 1
	  //float edgeLength = 1. / ((sqrt(3.) / 12.) * (3. + sqrt(5.)));
	  //// Inner radius of the icosahedron's face
	  //float faceRadius = (1./6.) * sqrt(3.) * edgeLength;
	  float faceRadius = 0.3819660112501051;
	  // 2D coordinates on the icosahedron face
	  vec2 icosahedronFaceCoordinates(vec3 p) {
	      vec3 pn = normalize(p);
	      vec3 i = intersection(pn, facePlane, -1.);
	      return vec2(dot(i, uPlane), dot(i, vPlane));
	  }
	  // Project 2D icosahedron face coordinates onto a sphere
	  vec3 faceToSphere(vec2 facePoint) {
	  	return normalize(facePlane + (uPlane * facePoint.x) + (vPlane * facePoint.y));
	  }
	  TriPoints3D geodesicTriPoints(vec3 p, float subdivisions) {
	      // Get 2D cartesian coordiantes on that face
	      vec2 uv = icosahedronFaceCoordinates(p);
	      // Get points on the nearest triangle tile
	  	float uvScale = subdivisions / faceRadius / 2.;
	      TriPoints points = closestTriPoints(uv * uvScale);
	      // Project 2D triangle coordinates onto a sphere 
	      vec3 a = faceToSphere(points.a / uvScale);
	      vec3 b = faceToSphere(points.b / uvScale);
	      vec3 c = faceToSphere(points.c / uvScale);
	      vec3 center = faceToSphere(points.center / uvScale);
	      vec3 ab = faceToSphere(points.ab / uvScale);
	      vec3 bc = faceToSphere(points.bc / uvScale);
	      vec3 ca = faceToSphere(points.ca / uvScale);
	      return TriPoints3D(a, b, c, center, ab, bc, ca);
	  }
	  // --------------------------------------------------------
	  // Spectrum colour palette
	  // IQ https://www.shadertoy.com/view/ll2GD3
	  // --------------------------------------------------------
	  vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
	      return a + b*cos( 6.28318*(c*t+d) );
	  }
	  vec3 spectrum(float n) {
	      return pal( n, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );
	  }
	  // --------------------------------------------------------
	  // Model/Camera Rotation
	  // --------------------------------------------------------
	  mat3 sphericalMatrix(float theta, float phi) {
	      float cx = cos(theta);
	      float cy = cos(phi);
	      float sx = sin(theta);
	      float sy = sin(phi);
	      return mat3(
	          cy, -sy * -sx, -sy * cx,
	          0, cx, sx,
	          sy, cy * -sx, cy * cx
	      );
	  }
	  mat3 mouseRotation(bool enable, vec2 xy) {
	      if (enable) {
	          vec2 mouse = iMouse.xy / iResolution.xy;
	          if (mouse.x != 0. && mouse.y != 0.) {
	              xy.x = mouse.x;
	              xy.y = mouse.y;
	          }
	      }
	      float rx, ry;
	      rx = (xy.y + .5) * PI;
	      ry = (-xy.x) * 2. * PI;
	      return sphericalMatrix(rx, ry);
	  }
	  mat3 modelRotation() {
	      mat3 m = mouseRotation(MOUSE_CONTROL==1, MODEL_ROTATION);
	      return m;
	  }
	  mat3 cameraRotation() {
	      mat3 m = mouseRotation(MOUSE_CONTROL==2, CAMERA_ROTATION);
	      return m;
	  }
	  // --------------------------------------------------------
	  // Animation 
	  // --------------------------------------------------------
	  const float SCENE_DURATION = 6.;
	  const float CROSSFADE_DURATION = 2.;
	  float time;
	  struct HexSpec {
	      float roundTop;
	      float roundCorner;
	  	float height;
	      float thickness;
	      float gap;    
	  };
	  HexSpec newHexSpec(float subdivisions) {
	  	return HexSpec(
	          .05 / subdivisions,
	          .1 / subdivisions,
	          2.,
	          2.,
	          .005
	      );
	  }
	  // Animation 1
	  float animSubdivisions1() {
	  	return mix(2.4, 3.4, cos(time * PI) * .5 + .5);
	  }
	  HexSpec animHex1(vec3 hexCenter, float subdivisions) {
	      HexSpec spec = newHexSpec(subdivisions);
	      float offset = time * 3. * PI;
	      offset -= subdivisions;
	      float blend = dot(hexCenter, pca);
	      blend = cos(blend * 30. + offset) * .5 + .5;
	      spec.height = mix(1.75, 2., blend);
	      spec.thickness = spec.height;
	      return spec;
	  }
	  // Animation 2
	  float animSubdivisions2() {
	      return mix(1., 2.3, sin(time * PI/2.) * .5 + .5);
	  }
	  HexSpec animHex2(vec3 hexCenter, float subdivisions) {
	      HexSpec spec = newHexSpec(subdivisions);
	      float blend = hexCenter.y;
	      spec.height = mix(1.6, 2., sin(blend * 10. + time * PI) * .5 + .5);
	      spec.roundTop = .02 / subdivisions;
	      spec.roundCorner = .09 / subdivisions;
	      spec.thickness = spec.roundTop * 4.;
	      spec.gap = .01;
	      return spec;
	  }
	  // Animation 3
	  float animSubdivisions3() {
	  	return 5.;
	  }
	  HexSpec animHex3(vec3 hexCenter, float subdivisions) {
	      HexSpec spec = newHexSpec(subdivisions);
	      float blend = acos(dot(hexCenter, pab)) * 10.;
	      blend = cos(blend + time * PI) * .5 + .5;
	      spec.gap = mix(.01, .4, blend) / subdivisions;
	      spec.thickness = spec.roundTop * 2.;
	  	return spec;
	  }
	  // Transition between animations
	  float sineInOut(float t) {
	    return -0.5 * (cos(PI * t) - 1.0);
	  }
	  float transitionValues(float a, float b, float c) {
	      #ifdef LOOP
	          #if LOOP == 1
	              return a;
	          #endif
	          #if LOOP == 2
	              return b;
	          #endif
	          #if LOOP == 3
	              return c;
	          #endif
	      #endif
	      float t = time / SCENE_DURATION;
	      float scene = floor(mod(t, 3.));
	      float blend = fract(t);
	      float delay = (SCENE_DURATION - CROSSFADE_DURATION) / SCENE_DURATION;
	      blend = max(blend - delay, 0.) / (1. - delay);
	      blend = sineInOut(blend);
	      float ab = mix(a, b, blend);
	      float bc = mix(b, c, blend);
	      float cd = mix(c, a, blend);
	      float result = mix(ab, bc, min(scene, 1.));
	      result = mix(result, cd, max(scene - 1., 0.));
	      return result;
	  }
	  HexSpec transitionHexSpecs(HexSpec a, HexSpec b, HexSpec c) {
	      float roundTop = transitionValues(a.roundTop, b.roundTop, c.roundTop);
	      float roundCorner = transitionValues(a.roundCorner, b.roundCorner, c.roundCorner);
	  	float height = transitionValues(a.height, b.height, c.height);
	      float thickness = transitionValues(a.thickness, b.thickness, c.thickness);
	      float gap = transitionValues(a.gap, b.gap, c.gap);
	  	return HexSpec(roundTop, roundCorner, height, thickness, gap);
	  }
	  // --------------------------------------------------------
	  // Modelling 
	  // --------------------------------------------------------
	  const vec3 FACE_COLOR = vec3(.9,.9,1.);
	  const vec3 BACK_COLOR = vec3(.1,.1,.15);
	  const vec3 BACKGROUND_COLOR = vec3(.0, .005, .03);
	  struct Model {
	      float dist;
	      vec3 albedo;
	      float glow;
	  };
	  Model hexModel(
	      vec3 p,
	      vec3 hexCenter,
	      vec3 edgeA,
	      vec3 edgeB,
	      HexSpec spec
	  ) {
	      float d;
	      float edgeADist = dot(p, edgeA) + spec.gap;
	      float edgeBDist = dot(p, edgeB) - spec.gap;
	      float edgeDist = smax(edgeADist, -edgeBDist, spec.roundCorner);
	      float outerDist = length(p) - spec.height;
	      d = smax(edgeDist, outerDist, spec.roundTop);
	      float innerDist = length(p) - spec.height + spec.thickness;
	      d = smax(d, -innerDist, spec.roundTop);
	      vec3 color;
	      float faceBlend = (spec.height - length(p)) / spec.thickness;
	      faceBlend = clamp(faceBlend, 0., 1.);
	      color = mix(FACE_COLOR, BACK_COLOR, step(.5, faceBlend));
	      vec3 edgeColor = spectrum(dot(hexCenter, pca) * 5. + length(p) + .8);    
	  	float edgeBlend = smoothstep(-.04, -.005, edgeDist);
	      color = mix(color, edgeColor, edgeBlend); 
	      return Model(d, color, edgeBlend);
	  }
	  // checks to see which intersection is closer
	  Model opU( Model m1, Model m2 ){
	      if (m1.dist < m2.dist) {
	          return m1;
	      } else {
	          return m2;
	      }
	  }
	  Model geodesicModel(vec3 p) {
	      pModIcosahedron(p);
	      float subdivisions = transitionValues(
	          animSubdivisions1(),
	          animSubdivisions2(),
	          animSubdivisions3()
	     	);
	  	TriPoints3D points = geodesicTriPoints(p, subdivisions);
	  	vec3 edgeAB = normalize(cross(points.center, points.ab));
	  	vec3 edgeBC = normalize(cross(points.center, points.bc));
	      vec3 edgeCA = normalize(cross(points.center, points.ca));
	      Model model, part;
	      HexSpec spec;
	  	spec = transitionHexSpecs(
	          animHex1(points.b, subdivisions),
	          animHex2(points.b, subdivisions),
	          animHex3(points.b, subdivisions)
	      );
	      part = hexModel(p, points.b, edgeAB, edgeBC, spec);
	      model = part;
	  	spec = transitionHexSpecs(
	          animHex1(points.c, subdivisions),
	          animHex2(points.c, subdivisions),
	          animHex3(points.c, subdivisions)
	      );
	      part = hexModel(p, points.c, edgeBC, edgeCA, spec);
	      model = opU(model, part);
	  	spec = transitionHexSpecs(
	          animHex1(points.a, subdivisions),
	          animHex2(points.a, subdivisions),
	          animHex3(points.a, subdivisions)
	      );
	      part = hexModel(p, points.a, edgeCA, edgeAB, spec);
	      model = opU(model, part);
	  	return model;
	  }
	  Model map( vec3 p ){
	      mat3 m = modelRotation();
	      p *= m;  
	      #ifndef LOOP
	      	pR(p.xz, time * PI/16.);
	      #endif
	      Model model = geodesicModel(p);
	      return model;
	  }
	  // --------------------------------------------------------
	  // LIGHTING
	  // Adapted from IQ https://www.shadertoy.com/view/Xds3zN
	  // --------------------------------------------------------
	  vec3 doLighting(Model model, vec3 pos, vec3 nor, vec3 ref, vec3 rd) {
	      vec3 lightPos = normalize(vec3(.5,.5,-1.));
	      vec3 backLightPos = normalize(vec3(-.5,-.3,1));
	      vec3 ambientPos = vec3(0,1,0);
	      vec3  lig = lightPos;
	      float amb = clamp((dot(nor, ambientPos) + 1.) / 2., 0., 1.);
	      float dif = clamp( dot( nor, lig ), 0.0, 1.0 );
	      float bac = pow(clamp(dot(nor, backLightPos), 0., 1.), 1.5);
	      float fre = pow( clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );
	      vec3 lin = vec3(0.0);
	      lin += 1.20 * dif * vec3(.9);
	      lin += 0.80 * amb * vec3(.5, .7, .8);
	      lin += 0.30 * bac * vec3(.25);
	      lin += 0.20 * fre * vec3(1);
	      vec3 albedo = model.albedo;
	      vec3 col = mix(albedo * lin, albedo, model.glow);    
	      return col;
	  }   
	  // --------------------------------------------------------
	  // Ray Marching
	  // Adapted from cabbibo https://www.shadertoy.com/view/Xl2XWt
	  // --------------------------------------------------------
	  const float MAX_TRACE_DISTANCE = 8.; // max trace distance
	  const float INTERSECTION_PRECISION = .001; // precision of the intersection
	  const int NUM_OF_TRACE_STEPS = 100;
	  const float FUDGE_FACTOR = .9; // Default is 1, reduce to fix overshoots
	  struct CastRay {
	      vec3 origin;
	      vec3 direction;
	  };
	  struct Ray {
	      vec3 origin;
	      vec3 direction;
	      float len;
	  };
	  struct Hit {
	      Ray ray;
	      Model model;
	      vec3 pos;
	      bool isBackground;
	      vec3 normal;
	      vec3 color;
	  };
	  vec3 calcNormal( in vec3 pos ){
	      vec3 eps = vec3( 0.001, 0.0, 0.0 );
	      vec3 nor = vec3(
	          map(pos+eps.xyy).dist - map(pos-eps.xyy).dist,
	          map(pos+eps.yxy).dist - map(pos-eps.yxy).dist,
	          map(pos+eps.yyx).dist - map(pos-eps.yyx).dist );
	      return normalize(nor);
	  }
	  Hit raymarch(CastRay castRay){
	      float currentDist = INTERSECTION_PRECISION * 2.0;
	      Model model;
	      Ray ray = Ray(castRay.origin, castRay.direction, 0.);
	      for( int i=0; i< NUM_OF_TRACE_STEPS ; i++ ){
	          if (currentDist < INTERSECTION_PRECISION || ray.len > MAX_TRACE_DISTANCE) {
	              break;
	          }
	          model = map(ray.origin + ray.direction * ray.len);
	          currentDist = model.dist;
	          ray.len += currentDist * FUDGE_FACTOR;
	      }
	      bool isBackground = false;
	      vec3 pos = vec3(0);
	      vec3 normal = vec3(0);
	      vec3 color = vec3(0);
	      if (ray.len > MAX_TRACE_DISTANCE) {
	          isBackground = true;
	      } else {
	          pos = ray.origin + ray.direction * ray.len;
	          normal = calcNormal(pos);
	      }
	      return Hit(ray, model, pos, isBackground, normal, color);
	  }
	  // --------------------------------------------------------
	  // Rendering
	  // --------------------------------------------------------
	  void shadeSurface(inout Hit hit){
	      vec3 color = BACKGROUND_COLOR;
	      if (hit.isBackground) {
	          hit.color = color;
	          return;
	      }
	      vec3 ref = reflect(hit.ray.direction, hit.normal);
	      #ifdef DEBUG
	          color = hit.normal * 0.5 + 0.5;
	      #else 
	          color = doLighting(
	              hit.model,
	              hit.pos,
	              hit.normal,
	              ref,
	              hit.ray.direction
	          );
	      #endif
	      hit.color = color;
	  }
	  vec3 render(Hit hit){
	      shadeSurface(hit);
	  	return hit.color;
	  }
	  // --------------------------------------------------------
	  // Camera
	  // https://www.shadertoy.com/view/Xl2XWt
	  // --------------------------------------------------------
	  mat3 calcLookAtMatrix( in vec3 ro, in vec3 ta, in float roll )
	  {
	      vec3 ww = normalize( ta - ro );
	      vec3 uu = normalize( cross(ww,vec3(sin(roll),cos(roll),0.0) ) );
	      vec3 vv = normalize( cross(uu,ww));
	      return mat3( uu, vv, ww );
	  }
	  void doCamera(out vec3 camPos, out vec3 camTar, out float camRoll, in float time, in vec2 mouse) {
	      float dist = 5.5;
	      camRoll = 0.;
	      camTar = vec3(0,0,0);
	      camPos = vec3(0,0,-dist);
	      camPos *= cameraRotation();
	      camPos += camTar;
	  }
	  // --------------------------------------------------------
	  // Gamma
	  // https://www.shadertoy.com/view/Xds3zN
	  // --------------------------------------------------------
	  const float GAMMA = 2.2;
	  vec3 gamma(vec3 color, float g) {
	      return pow(color, vec3(g));
	  }
	  vec3 linearToScreen(vec3 linearRGB) {
	      return gamma(linearRGB, 1.0 / GAMMA);
	  }
	  void mainImage( out vec4 fragColor, in vec2 fragCoord )
	  {
	      time = iTime;
	      #ifdef LOOP
	          #if LOOP == 1
	              time = mod(time, 2.);   
	          #endif
	          #if LOOP == 2
	              time = mod(time, 4.);   
	          #endif
	          #if LOOP == 3
	              time = mod(time, 2.);
	      	#endif
	      #endif
	      initIcosahedron();
	      vec2 p = (-iResolution.xy + 2.0*fragCoord.xy)/iResolution.y;
	      vec2 m = iMouse.xy / iResolution.xy;
	      vec3 camPos = vec3( 0., 0., 2.);
	      vec3 camTar = vec3( 0. , 0. , 0. );
	      float camRoll = 0.;
	      // camera movement
	      doCamera(camPos, camTar, camRoll, iTime, m);
	      // camera matrix
	      mat3 camMat = calcLookAtMatrix( camPos, camTar, camRoll );  // 0.0 is the camera roll
	      // create view ray
	      vec3 rd = normalize( camMat * vec3(p.xy,2.0) ); // 2.0 is the lens length
	      Hit hit = raymarch(CastRay(camPos, rd));
	      vec3 color = render(hit);
	      #ifndef DEBUG
	          color = linearToScreen(color);
	      #endif
	      fragColor = vec4(color,1.0);
	  }

  - ## Introduction
  - ## The Utility of VisionFlow
			- ### 1. **Real-Time Human-AI Symbiosis**
			- ### 2. **Grounded in Private Datasets**
			- ### 3. **Pliability for General-Purpose Use**
  - ## Key Features
			- ### Real-Time 3D Graph Visualization
			- ### AI Multi-Agent Orchestration
			- ### Semantic Analysis & Constraints
			- ### Secure, Private Data Handling
	  ```

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
