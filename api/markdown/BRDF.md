
A Bidirectional Reflectance Distribution Function (BRDF) is a function that defines how light is reflected at an opaque surface, giving the ratio of reflected radiance to incident irradiance for each pair of incoming and outgoing directions. It encodes material appearance such as diffuse, glossy, and specular behaviour and is the core of physically based shading. Renderers evaluate the BRDF at surface intersections to compute realistic light transport.

- ### Content
  - Physically based BRDFs obey energy conservation and reciprocity and combine diffuse and microfacet specular terms to model real materials. During ray tracing, the BRDF is sampled at each surface hit to weight reflected light and to importance-sample directions for Monte Carlo integration of the rendering equation.

