import { h as X, v as Uo, _ as To, j as me, w as Eo, o as ko, m as Co, __tla as __tla_0 } from "./index-D0SjFJVE.js";
import { a as it, b as Gt, _ as at, D as Ot, V as Ee, c as ht, P as Yn, d as Jn, R as Kn, I as Qn, F as wn, e as zr, f as xt, W as Ao, B as It, S as Yr, g as Zn, U as fr, h as _n, M as ur, i as st, L as Do, j as qn, k as $n, l as pt, m as Mo, n as Fo, o as Po, p as Lo, q as Oo, r as Ro, T as Bo, s as cr, t as Go, v as Jr, w as Io, x as zo, H as jo, y as No, z as Wo, A as Vo, E as Ho, G as Xo, J as Yo, u as St, C as Jo, O as Ko } from "./useGraphStore-Bny5txld.js";
let Ta;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Qo = (l)=>typeof l == "object" && typeof l.then == "function", er = [];
    function Zo(l, r, c = (f, t)=>f === t) {
        if (l === r) return !0;
        if (!l || !r) return !1;
        const f = l.length;
        if (r.length !== f) return !1;
        for(let t = 0; t < f; t++)if (!c(l[t], r[t])) return !1;
        return !0;
    }
    function qo(l, r = null, c = !1, f = {}) {
        r === null && (r = [
            l
        ]);
        for (const e of er)if (Zo(r, e.keys, e.equal)) {
            if (c) return;
            if (Object.prototype.hasOwnProperty.call(e, "error")) throw e.error;
            if (Object.prototype.hasOwnProperty.call(e, "response")) return f.lifespan && f.lifespan > 0 && (e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(e.remove, f.lifespan)), e.response;
            if (!c) throw e.promise;
        }
        const t = {
            keys: r,
            equal: f.equal,
            remove: ()=>{
                const e = er.indexOf(t);
                e !== -1 && er.splice(e, 1);
            },
            promise: (Qo(l) ? l : l(...r)).then((e)=>{
                t.response = e, f.lifespan && f.lifespan > 0 && (t.timeout = setTimeout(t.remove, f.lifespan));
            }).catch((e)=>t.error = e)
        };
        if (er.push(t), !c) throw t.promise;
    }
    const $o = (l, r, c)=>qo(l, r, !1, c), zt = new Ee, Kr = new Ee, ei = new Ee, Un = new ht;
    function ti(l, r, c) {
        const f = zt.setFromMatrixPosition(l.matrixWorld);
        f.project(r);
        const t = c.width / 2, e = c.height / 2;
        return [
            f.x * t + t,
            -(f.y * e) + e
        ];
    }
    function ri(l, r) {
        const c = zt.setFromMatrixPosition(l.matrixWorld), f = Kr.setFromMatrixPosition(r.matrixWorld), t = c.sub(f), e = r.getWorldDirection(ei);
        return t.angleTo(e) > Math.PI / 2;
    }
    function ni(l, r, c, f) {
        const t = zt.setFromMatrixPosition(l.matrixWorld), e = t.clone();
        e.project(r), Un.set(e.x, e.y), c.setFromCamera(Un, r);
        const n = c.intersectObjects(f, !0);
        if (n.length) {
            const i = n[0].distance;
            return t.distanceTo(c.ray.origin) < i;
        }
        return !0;
    }
    function oi(l, r) {
        if (r instanceof Jn) return r.zoom;
        if (r instanceof Yn) {
            const c = zt.setFromMatrixPosition(l.matrixWorld), f = Kr.setFromMatrixPosition(r.matrixWorld), t = r.fov * Math.PI / 180, e = c.distanceTo(f);
            return 1 / (2 * Math.tan(t / 2) * e);
        } else return 1;
    }
    function ii(l, r, c) {
        if (r instanceof Yn || r instanceof Jn) {
            const f = zt.setFromMatrixPosition(l.matrixWorld), t = Kr.setFromMatrixPosition(r.matrixWorld), e = f.distanceTo(t), n = (c[1] - c[0]) / (r.far - r.near), i = c[1] - n * r.far;
            return Math.round(n * e + i);
        }
    }
    const jr = (l)=>Math.abs(l) < 1e-10 ? 0 : l;
    function eo(l, r, c = "") {
        let f = "matrix3d(";
        for(let t = 0; t !== 16; t++)f += jr(r[t] * l.elements[t]) + (t !== 15 ? "," : ")");
        return c + f;
    }
    const ai = ((l)=>(r)=>eo(r, l))([
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1,
        1,
        -1,
        1,
        1
    ]), si = ((l)=>(r, c)=>eo(r, l(c), "translate(-50%,-50%)"))((l)=>[
            1 / l,
            1 / l,
            1 / l,
            1,
            -1 / l,
            -1 / l,
            -1 / l,
            -1,
            1 / l,
            1 / l,
            1 / l,
            1,
            1,
            1,
            1,
            1
        ]);
    function li(l) {
        return l && typeof l == "object" && "current" in l;
    }
    const Tn = X.forwardRef(({ children: l, eps: r = .001, style: c, className: f, prepend: t, center: e, fullscreen: n, portal: i, distanceFactor: o, sprite: a = !1, transform: s = !1, occlude: u, onOcclude: d, castShadow: h, receiveShadow: v, material: y, geometry: m, zIndexRange: M = [
        16777271,
        0
    ], calculatePosition: _ = ti, as: b = "div", wrapperClass: p, pointerEvents: w = "auto", ...D }, U)=>{
        const { gl: k, camera: R, scene: O, size: Y, raycaster: x, events: F, viewport: A } = it(), [W] = X.useState(()=>document.createElement(b)), V = X.useRef(null), J = X.useRef(null), oe = X.useRef(0), z = X.useRef([
            0,
            0
        ]), P = X.useRef(null), g = X.useRef(null), S = i?.current || F.connected || k.domElement.parentNode, E = X.useRef(null), C = X.useRef(!1), T = X.useMemo(()=>u && u !== "blending" || Array.isArray(u) && u.length && li(u[0]), [
            u
        ]);
        X.useLayoutEffect(()=>{
            const K = k.domElement;
            u && u === "blending" ? (K.style.zIndex = `${Math.floor(M[0] / 2)}`, K.style.position = "absolute", K.style.pointerEvents = "none") : (K.style.zIndex = null, K.style.position = null, K.style.pointerEvents = null);
        }, [
            u
        ]), X.useLayoutEffect(()=>{
            if (J.current) {
                const K = V.current = Uo.createRoot(W);
                if (O.updateMatrixWorld(), s) W.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                else {
                    const B = _(J.current, R, Y);
                    W.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${B[0]}px,${B[1]}px,0);transform-origin:0 0;`;
                }
                return S && (t ? S.prepend(W) : S.appendChild(W)), ()=>{
                    S && S.removeChild(W), K.unmount();
                };
            }
        }, [
            S,
            s
        ]), X.useLayoutEffect(()=>{
            p && (W.className = p);
        }, [
            p
        ]);
        const N = X.useMemo(()=>s ? {
                position: "absolute",
                top: 0,
                left: 0,
                width: Y.width,
                height: Y.height,
                transformStyle: "preserve-3d",
                pointerEvents: "none"
            } : {
                position: "absolute",
                transform: e ? "translate3d(-50%,-50%,0)" : "none",
                ...n && {
                    top: -Y.height / 2,
                    left: -Y.width / 2,
                    width: Y.width,
                    height: Y.height
                },
                ...c
            }, [
            c,
            e,
            n,
            Y,
            s
        ]), L = X.useMemo(()=>({
                position: "absolute",
                pointerEvents: w
            }), [
            w
        ]);
        X.useLayoutEffect(()=>{
            if (C.current = !1, s) {
                var K;
                (K = V.current) == null || K.render(X.createElement("div", {
                    ref: P,
                    style: N
                }, X.createElement("div", {
                    ref: g,
                    style: L
                }, X.createElement("div", {
                    ref: U,
                    className: f,
                    style: c,
                    children: l
                }))));
            } else {
                var B;
                (B = V.current) == null || B.render(X.createElement("div", {
                    ref: U,
                    style: N,
                    className: f,
                    children: l
                }));
            }
        });
        const G = X.useRef(!0);
        Gt((K)=>{
            if (J.current) {
                R.updateMatrixWorld(), J.current.updateWorldMatrix(!0, !1);
                const B = s ? z.current : _(J.current, R, Y);
                if (s || Math.abs(oe.current - R.zoom) > r || Math.abs(z.current[0] - B[0]) > r || Math.abs(z.current[1] - B[1]) > r) {
                    const j = ri(J.current, R);
                    let ue = !1;
                    T && (Array.isArray(u) ? ue = u.map((ne)=>ne.current) : u !== "blending" && (ue = [
                        O
                    ]));
                    const fe = G.current;
                    if (ue) {
                        const ne = ni(J.current, R, x, ue);
                        G.current = ne && !j;
                    } else G.current = !j;
                    fe !== G.current && (d ? d(!G.current) : W.style.display = G.current ? "block" : "none");
                    const q = Math.floor(M[0] / 2), ie = u ? T ? [
                        M[0],
                        q
                    ] : [
                        q - 1,
                        0
                    ] : M;
                    if (W.style.zIndex = `${ii(J.current, R, ie)}`, s) {
                        const [ne, H] = [
                            Y.width / 2,
                            Y.height / 2
                        ], re = R.projectionMatrix.elements[5] * H, { isOrthographicCamera: te, top: I, left: pe, bottom: $, right: ae } = R, Z = ai(R.matrixWorldInverse), Se = te ? `scale(${re})translate(${jr(-(ae + pe) / 2)}px,${jr((I + $) / 2)}px)` : `translateZ(${re}px)`;
                        let ee = J.current.matrixWorld;
                        a && (ee = R.matrixWorldInverse.clone().transpose().copyPosition(ee).scale(J.current.scale), ee.elements[3] = ee.elements[7] = ee.elements[11] = 0, ee.elements[15] = 1), W.style.width = Y.width + "px", W.style.height = Y.height + "px", W.style.perspective = te ? "" : `${re}px`, P.current && g.current && (P.current.style.transform = `${Se}${Z}translate(${ne}px,${H}px)`, g.current.style.transform = si(ee, 1 / ((o || 10) / 400)));
                    } else {
                        const ne = o === void 0 ? 1 : oi(J.current, R) * o;
                        W.style.transform = `translate3d(${B[0]}px,${B[1]}px,0) scale(${ne})`;
                    }
                    z.current = B, oe.current = R.zoom;
                }
            }
            if (!T && E.current && !C.current) if (s) {
                if (P.current) {
                    const B = P.current.children[0];
                    if (B != null && B.clientWidth && B != null && B.clientHeight) {
                        const { isOrthographicCamera: j } = R;
                        if (j || m) D.scale && (Array.isArray(D.scale) ? D.scale instanceof Ee ? E.current.scale.copy(D.scale.clone().divideScalar(1)) : E.current.scale.set(1 / D.scale[0], 1 / D.scale[1], 1 / D.scale[2]) : E.current.scale.setScalar(1 / D.scale));
                        else {
                            const ue = (o || 10) / 400, fe = B.clientWidth * ue, q = B.clientHeight * ue;
                            E.current.scale.set(fe, q, 1);
                        }
                        C.current = !0;
                    }
                }
            } else {
                const B = W.children[0];
                if (B != null && B.clientWidth && B != null && B.clientHeight) {
                    const j = 1 / A.factor, ue = B.clientWidth * j, fe = B.clientHeight * j;
                    E.current.scale.set(ue, fe, 1), C.current = !0;
                }
                E.current.lookAt(K.camera.position);
            }
        });
        const Q = X.useMemo(()=>({
                vertexShader: s ? void 0 : `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,
                fragmentShader: `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `
            }), [
            s
        ]);
        return X.createElement("group", at({}, D, {
            ref: J
        }), u && !T && X.createElement("mesh", {
            castShadow: h,
            receiveShadow: v,
            ref: E
        }, m || X.createElement("planeGeometry", null), y || X.createElement("shaderMaterial", {
            side: Ot,
            vertexShader: Q.vertexShader,
            fragmentShader: Q.fragmentShader
        })));
    }), to = parseInt(Kn.replace(/\D+/g, "")), ro = to >= 125 ? "uv1" : "uv2", En = new It, tr = new Ee;
    class Qr extends Qn {
        constructor(){
            super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
            const r = [
                -1,
                2,
                0,
                1,
                2,
                0,
                -1,
                1,
                0,
                1,
                1,
                0,
                -1,
                0,
                0,
                1,
                0,
                0,
                -1,
                -1,
                0,
                1,
                -1,
                0
            ], c = [
                -1,
                2,
                1,
                2,
                -1,
                1,
                1,
                1,
                -1,
                -1,
                1,
                -1,
                -1,
                -2,
                1,
                -2
            ], f = [
                0,
                2,
                1,
                2,
                3,
                1,
                2,
                4,
                3,
                4,
                5,
                3,
                4,
                6,
                5,
                6,
                7,
                5
            ];
            this.setIndex(f), this.setAttribute("position", new wn(r, 3)), this.setAttribute("uv", new wn(c, 2));
        }
        applyMatrix4(r) {
            const c = this.attributes.instanceStart, f = this.attributes.instanceEnd;
            return c !== void 0 && (c.applyMatrix4(r), f.applyMatrix4(r), c.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        setPositions(r) {
            let c;
            r instanceof Float32Array ? c = r : Array.isArray(r) && (c = new Float32Array(r));
            const f = new zr(c, 6, 1);
            return this.setAttribute("instanceStart", new xt(f, 3, 0)), this.setAttribute("instanceEnd", new xt(f, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
        }
        setColors(r, c = 3) {
            let f;
            r instanceof Float32Array ? f = r : Array.isArray(r) && (f = new Float32Array(r));
            const t = new zr(f, c * 2, 1);
            return this.setAttribute("instanceColorStart", new xt(t, c, 0)), this.setAttribute("instanceColorEnd", new xt(t, c, c)), this;
        }
        fromWireframeGeometry(r) {
            return this.setPositions(r.attributes.position.array), this;
        }
        fromEdgesGeometry(r) {
            return this.setPositions(r.attributes.position.array), this;
        }
        fromMesh(r) {
            return this.fromWireframeGeometry(new Ao(r.geometry)), this;
        }
        fromLineSegments(r) {
            const c = r.geometry;
            return this.setPositions(c.attributes.position.array), this;
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new It);
            const r = this.attributes.instanceStart, c = this.attributes.instanceEnd;
            r !== void 0 && c !== void 0 && (this.boundingBox.setFromBufferAttribute(r), En.setFromBufferAttribute(c), this.boundingBox.union(En));
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new Yr), this.boundingBox === null && this.computeBoundingBox();
            const r = this.attributes.instanceStart, c = this.attributes.instanceEnd;
            if (r !== void 0 && c !== void 0) {
                const f = this.boundingSphere.center;
                this.boundingBox.getCenter(f);
                let t = 0;
                for(let e = 0, n = r.count; e < n; e++)tr.fromBufferAttribute(r, e), t = Math.max(t, f.distanceToSquared(tr)), tr.fromBufferAttribute(c, e), t = Math.max(t, f.distanceToSquared(tr));
                this.boundingSphere.radius = Math.sqrt(t), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
            }
        }
        toJSON() {}
        applyMatrix(r) {
            return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(r);
        }
    }
    class no extends Qr {
        constructor(){
            super(), this.isLineGeometry = !0, this.type = "LineGeometry";
        }
        setPositions(r) {
            const c = r.length - 3, f = new Float32Array(2 * c);
            for(let t = 0; t < c; t += 3)f[2 * t] = r[t], f[2 * t + 1] = r[t + 1], f[2 * t + 2] = r[t + 2], f[2 * t + 3] = r[t + 3], f[2 * t + 4] = r[t + 4], f[2 * t + 5] = r[t + 5];
            return super.setPositions(f), this;
        }
        setColors(r, c = 3) {
            const f = r.length - c, t = new Float32Array(2 * f);
            if (c === 3) for(let e = 0; e < f; e += c)t[2 * e] = r[e], t[2 * e + 1] = r[e + 1], t[2 * e + 2] = r[e + 2], t[2 * e + 3] = r[e + 3], t[2 * e + 4] = r[e + 4], t[2 * e + 5] = r[e + 5];
            else for(let e = 0; e < f; e += c)t[2 * e] = r[e], t[2 * e + 1] = r[e + 1], t[2 * e + 2] = r[e + 2], t[2 * e + 3] = r[e + 3], t[2 * e + 4] = r[e + 4], t[2 * e + 5] = r[e + 5], t[2 * e + 6] = r[e + 6], t[2 * e + 7] = r[e + 7];
            return super.setColors(t, c), this;
        }
        fromLine(r) {
            const c = r.geometry;
            return this.setPositions(c.attributes.position.array), this;
        }
    }
    class Zr extends Zn {
        constructor(r){
            super({
                type: "LineMaterial",
                uniforms: fr.clone(fr.merge([
                    _n.common,
                    _n.fog,
                    {
                        worldUnits: {
                            value: 1
                        },
                        linewidth: {
                            value: 1
                        },
                        resolution: {
                            value: new ht(1, 1)
                        },
                        dashOffset: {
                            value: 0
                        },
                        dashScale: {
                            value: 1
                        },
                        dashSize: {
                            value: 1
                        },
                        gapSize: {
                            value: 1
                        }
                    }
                ])),
                vertexShader: `
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,
                fragmentShader: `
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${to >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,
                clipping: !0
            }), this.isLineMaterial = !0, this.onBeforeCompile = function() {
                this.transparent ? this.defines.USE_LINE_COLOR_ALPHA = "1" : delete this.defines.USE_LINE_COLOR_ALPHA;
            }, Object.defineProperties(this, {
                color: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.diffuse.value;
                    },
                    set: function(c) {
                        this.uniforms.diffuse.value = c;
                    }
                },
                worldUnits: {
                    enumerable: !0,
                    get: function() {
                        return "WORLD_UNITS" in this.defines;
                    },
                    set: function(c) {
                        c === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
                    }
                },
                linewidth: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.linewidth.value;
                    },
                    set: function(c) {
                        this.uniforms.linewidth.value = c;
                    }
                },
                dashed: {
                    enumerable: !0,
                    get: function() {
                        return "USE_DASH" in this.defines;
                    },
                    set (c) {
                        !!c != "USE_DASH" in this.defines && (this.needsUpdate = !0), c === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
                    }
                },
                dashScale: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashScale.value;
                    },
                    set: function(c) {
                        this.uniforms.dashScale.value = c;
                    }
                },
                dashSize: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashSize.value;
                    },
                    set: function(c) {
                        this.uniforms.dashSize.value = c;
                    }
                },
                dashOffset: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashOffset.value;
                    },
                    set: function(c) {
                        this.uniforms.dashOffset.value = c;
                    }
                },
                gapSize: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.gapSize.value;
                    },
                    set: function(c) {
                        this.uniforms.gapSize.value = c;
                    }
                },
                opacity: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.opacity.value;
                    },
                    set: function(c) {
                        this.uniforms.opacity.value = c;
                    }
                },
                resolution: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.resolution.value;
                    },
                    set: function(c) {
                        this.uniforms.resolution.value.copy(c);
                    }
                },
                alphaToCoverage: {
                    enumerable: !0,
                    get: function() {
                        return "USE_ALPHA_TO_COVERAGE" in this.defines;
                    },
                    set: function(c) {
                        !!c != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), c === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
                    }
                }
            }), this.setValues(r);
        }
    }
    const Lr = new st, kn = new Ee, Cn = new Ee, Le = new st, Oe = new st, Ke = new st, Or = new Ee, Rr = new qn, Be = new Do, An = new Ee, rr = new It, nr = new Yr, Qe = new st;
    let Ze, ut;
    function Dn(l, r, c) {
        return Qe.set(0, 0, -r, 1).applyMatrix4(l.projectionMatrix), Qe.multiplyScalar(1 / Qe.w), Qe.x = ut / c.width, Qe.y = ut / c.height, Qe.applyMatrix4(l.projectionMatrixInverse), Qe.multiplyScalar(1 / Qe.w), Math.abs(Math.max(Qe.x, Qe.y));
    }
    function fi(l, r) {
        const c = l.matrixWorld, f = l.geometry, t = f.attributes.instanceStart, e = f.attributes.instanceEnd, n = Math.min(f.instanceCount, t.count);
        for(let i = 0, o = n; i < o; i++){
            Be.start.fromBufferAttribute(t, i), Be.end.fromBufferAttribute(e, i), Be.applyMatrix4(c);
            const a = new Ee, s = new Ee;
            Ze.distanceSqToSegment(Be.start, Be.end, s, a), s.distanceTo(a) < ut * .5 && r.push({
                point: s,
                pointOnLine: a,
                distance: Ze.origin.distanceTo(s),
                object: l,
                face: null,
                faceIndex: i,
                uv: null,
                [ro]: null
            });
        }
    }
    function ci(l, r, c) {
        const f = r.projectionMatrix, e = l.material.resolution, n = l.matrixWorld, i = l.geometry, o = i.attributes.instanceStart, a = i.attributes.instanceEnd, s = Math.min(i.instanceCount, o.count), u = -r.near;
        Ze.at(1, Ke), Ke.w = 1, Ke.applyMatrix4(r.matrixWorldInverse), Ke.applyMatrix4(f), Ke.multiplyScalar(1 / Ke.w), Ke.x *= e.x / 2, Ke.y *= e.y / 2, Ke.z = 0, Or.copy(Ke), Rr.multiplyMatrices(r.matrixWorldInverse, n);
        for(let d = 0, h = s; d < h; d++){
            if (Le.fromBufferAttribute(o, d), Oe.fromBufferAttribute(a, d), Le.w = 1, Oe.w = 1, Le.applyMatrix4(Rr), Oe.applyMatrix4(Rr), Le.z > u && Oe.z > u) continue;
            if (Le.z > u) {
                const b = Le.z - Oe.z, p = (Le.z - u) / b;
                Le.lerp(Oe, p);
            } else if (Oe.z > u) {
                const b = Oe.z - Le.z, p = (Oe.z - u) / b;
                Oe.lerp(Le, p);
            }
            Le.applyMatrix4(f), Oe.applyMatrix4(f), Le.multiplyScalar(1 / Le.w), Oe.multiplyScalar(1 / Oe.w), Le.x *= e.x / 2, Le.y *= e.y / 2, Oe.x *= e.x / 2, Oe.y *= e.y / 2, Be.start.copy(Le), Be.start.z = 0, Be.end.copy(Oe), Be.end.z = 0;
            const y = Be.closestPointToPointParameter(Or, !0);
            Be.at(y, An);
            const m = $n.lerp(Le.z, Oe.z, y), M = m >= -1 && m <= 1, _ = Or.distanceTo(An) < ut * .5;
            if (M && _) {
                Be.start.fromBufferAttribute(o, d), Be.end.fromBufferAttribute(a, d), Be.start.applyMatrix4(n), Be.end.applyMatrix4(n);
                const b = new Ee, p = new Ee;
                Ze.distanceSqToSegment(Be.start, Be.end, p, b), c.push({
                    point: p,
                    pointOnLine: b,
                    distance: Ze.origin.distanceTo(p),
                    object: l,
                    face: null,
                    faceIndex: d,
                    uv: null,
                    [ro]: null
                });
            }
        }
    }
    class oo extends ur {
        constructor(r = new Qr, c = new Zr({
            color: Math.random() * 16777215
        })){
            super(r, c), this.isLineSegments2 = !0, this.type = "LineSegments2";
        }
        computeLineDistances() {
            const r = this.geometry, c = r.attributes.instanceStart, f = r.attributes.instanceEnd, t = new Float32Array(2 * c.count);
            for(let n = 0, i = 0, o = c.count; n < o; n++, i += 2)kn.fromBufferAttribute(c, n), Cn.fromBufferAttribute(f, n), t[i] = i === 0 ? 0 : t[i - 1], t[i + 1] = t[i] + kn.distanceTo(Cn);
            const e = new zr(t, 2, 1);
            return r.setAttribute("instanceDistanceStart", new xt(e, 1, 0)), r.setAttribute("instanceDistanceEnd", new xt(e, 1, 1)), this;
        }
        raycast(r, c) {
            const f = this.material.worldUnits, t = r.camera;
            t === null && !f && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
            const e = r.params.Line2 !== void 0 && r.params.Line2.threshold || 0;
            Ze = r.ray;
            const n = this.matrixWorld, i = this.geometry, o = this.material;
            ut = o.linewidth + e, i.boundingSphere === null && i.computeBoundingSphere(), nr.copy(i.boundingSphere).applyMatrix4(n);
            let a;
            if (f) a = ut * .5;
            else {
                const u = Math.max(t.near, nr.distanceToPoint(Ze.origin));
                a = Dn(t, u, o.resolution);
            }
            if (nr.radius += a, Ze.intersectsSphere(nr) === !1) return;
            i.boundingBox === null && i.computeBoundingBox(), rr.copy(i.boundingBox).applyMatrix4(n);
            let s;
            if (f) s = ut * .5;
            else {
                const u = Math.max(t.near, rr.distanceToPoint(Ze.origin));
                s = Dn(t, u, o.resolution);
            }
            rr.expandByScalar(s), Ze.intersectsBox(rr) !== !1 && (f ? fi(this, c) : ci(this, t, c));
        }
        onBeforeRender(r) {
            const c = this.material.uniforms;
            c && c.resolution && (r.getViewport(Lr), this.material.uniforms.resolution.value.set(Lr.z, Lr.w));
        }
    }
    class ui extends oo {
        constructor(r = new no, c = new Zr({
            color: Math.random() * 16777215
        })){
            super(r, c), this.isLine2 = !0, this.type = "Line2";
        }
    }
    const Mn = X.forwardRef(function({ points: r, color: c = 16777215, vertexColors: f, linewidth: t, lineWidth: e, segments: n, dashed: i, ...o }, a) {
        var s, u;
        const d = it((M)=>M.size), h = X.useMemo(()=>n ? new oo : new ui, [
            n
        ]), [v] = X.useState(()=>new Zr), y = (f == null || (s = f[0]) == null ? void 0 : s.length) === 4 ? 4 : 3, m = X.useMemo(()=>{
            const M = n ? new Qr : new no, _ = r.map((b)=>{
                const p = Array.isArray(b);
                return b instanceof Ee || b instanceof st ? [
                    b.x,
                    b.y,
                    b.z
                ] : b instanceof ht ? [
                    b.x,
                    b.y,
                    0
                ] : p && b.length === 3 ? [
                    b[0],
                    b[1],
                    b[2]
                ] : p && b.length === 2 ? [
                    b[0],
                    b[1],
                    0
                ] : b;
            });
            if (M.setPositions(_.flat()), f) {
                c = 16777215;
                const b = f.map((p)=>p instanceof pt ? p.toArray() : p);
                M.setColors(b.flat(), y);
            }
            return M;
        }, [
            r,
            n,
            f,
            y
        ]);
        return X.useLayoutEffect(()=>{
            h.computeLineDistances();
        }, [
            r,
            h
        ]), X.useLayoutEffect(()=>{
            i ? v.defines.USE_DASH = "" : delete v.defines.USE_DASH, v.needsUpdate = !0;
        }, [
            i,
            v
        ]), X.useEffect(()=>()=>{
                m.dispose(), v.dispose();
            }, [
            m
        ]), X.createElement("primitive", at({
            object: h,
            ref: a
        }, o), X.createElement("primitive", {
            object: m,
            attach: "geometry"
        }), X.createElement("primitive", at({
            object: v,
            attach: "material",
            color: c,
            vertexColors: !!f,
            resolution: [
                d.width,
                d.height
            ],
            linewidth: (u = t ?? e) !== null && u !== void 0 ? u : 1,
            dashed: i,
            transparent: y === 4
        }, o)));
    });
    function di() {
        var l = Object.create(null);
        function r(t, e) {
            var n = t.id, i = t.name, o = t.dependencies;
            o === void 0 && (o = []);
            var a = t.init;
            a === void 0 && (a = function() {});
            var s = t.getTransferables;
            if (s === void 0 && (s = null), !l[n]) try {
                o = o.map(function(d) {
                    return d && d.isWorkerModule && (r(d, function(h) {
                        if (h instanceof Error) throw h;
                    }), d = l[d.id].value), d;
                }), a = f("<" + i + ">.init", a), s && (s = f("<" + i + ">.getTransferables", s));
                var u = null;
                typeof a == "function" ? u = a.apply(void 0, o) : console.error("worker module init function failed to rehydrate"), l[n] = {
                    id: n,
                    value: u,
                    getTransferables: s
                }, e(u);
            } catch (d) {
                d && d.noLog || console.error(d), e(d);
            }
        }
        function c(t, e) {
            var n, i = t.id, o = t.args;
            (!l[i] || typeof l[i].value != "function") && e(new Error("Worker module " + i + ": not found or its 'init' did not return a function"));
            try {
                var a = (n = l[i]).value.apply(n, o);
                a && typeof a.then == "function" ? a.then(s, function(u) {
                    return e(u instanceof Error ? u : new Error("" + u));
                }) : s(a);
            } catch (u) {
                e(u);
            }
            function s(u) {
                try {
                    var d = l[i].getTransferables && l[i].getTransferables(u);
                    (!d || !Array.isArray(d) || !d.length) && (d = void 0), e(u, d);
                } catch (h) {
                    console.error(h), e(h);
                }
            }
        }
        function f(t, e) {
            var n = void 0;
            self.troikaDefine = function(o) {
                return n = o;
            };
            var i = URL.createObjectURL(new Blob([
                "/** " + t.replace(/\*/g, "") + ` **/

troikaDefine(
` + e + `
)`
            ], {
                type: "application/javascript"
            }));
            try {
                importScripts(i);
            } catch (o) {
                console.error(o);
            }
            return URL.revokeObjectURL(i), delete self.troikaDefine, n;
        }
        self.addEventListener("message", function(t) {
            var e = t.data, n = e.messageId, i = e.action, o = e.data;
            try {
                i === "registerModule" && r(o, function(a) {
                    a instanceof Error ? postMessage({
                        messageId: n,
                        success: !1,
                        error: a.message
                    }) : postMessage({
                        messageId: n,
                        success: !0,
                        result: {
                            isCallable: typeof a == "function"
                        }
                    });
                }), i === "callModule" && c(o, function(a, s) {
                    a instanceof Error ? postMessage({
                        messageId: n,
                        success: !1,
                        error: a.message
                    }) : postMessage({
                        messageId: n,
                        success: !0,
                        result: a
                    }, s || void 0);
                });
            } catch (a) {
                postMessage({
                    messageId: n,
                    success: !1,
                    error: a.stack
                });
            }
        });
    }
    function hi(l) {
        var r = function() {
            for(var c = [], f = arguments.length; f--;)c[f] = arguments[f];
            return r._getInitResult().then(function(t) {
                if (typeof t == "function") return t.apply(void 0, c);
                throw new Error("Worker module function was called but `init` did not return a callable function");
            });
        };
        return r._getInitResult = function() {
            var c = l.dependencies, f = l.init;
            c = Array.isArray(c) ? c.map(function(e) {
                return e && (e = e.onMainThread || e, e._getInitResult && (e = e._getInitResult())), e;
            }) : [];
            var t = Promise.all(c).then(function(e) {
                return f.apply(null, e);
            });
            return r._getInitResult = function() {
                return t;
            }, t;
        }, r;
    }
    var io = function() {
        var l = !1;
        if (typeof window < "u" && typeof window.document < "u") try {
            var r = new Worker(URL.createObjectURL(new Blob([
                ""
            ], {
                type: "application/javascript"
            })));
            r.terminate(), l = !0;
        } catch (c) {
            console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + c.message + "]");
        }
        return io = function() {
            return l;
        }, l;
    }, pi = 0, vi = 0, Br = !1, Rt = Object.create(null), Bt = Object.create(null), Nr = Object.create(null);
    function wt(l) {
        if ((!l || typeof l.init != "function") && !Br) throw new Error("requires `options.init` function");
        var r = l.dependencies, c = l.init, f = l.getTransferables, t = l.workerId, e = hi(l);
        t == null && (t = "#default");
        var n = "workerModule" + ++pi, i = l.name || n, o = null;
        r = r && r.map(function(s) {
            return typeof s == "function" && !s.workerModuleData && (Br = !0, s = wt({
                workerId: t,
                name: "<" + i + "> function dependency: " + s.name,
                init: `function(){return (
` + sr(s) + `
)}`
            }), Br = !1), s && s.workerModuleData && (s = s.workerModuleData), s;
        });
        function a() {
            for(var s = [], u = arguments.length; u--;)s[u] = arguments[u];
            if (!io()) return e.apply(void 0, s);
            if (!o) {
                o = Fn(t, "registerModule", a.workerModuleData);
                var d = function() {
                    o = null, Bt[t].delete(d);
                };
                (Bt[t] || (Bt[t] = new Set)).add(d);
            }
            return o.then(function(h) {
                var v = h.isCallable;
                if (v) return Fn(t, "callModule", {
                    id: n,
                    args: s
                });
                throw new Error("Worker module function was called but `init` did not return a callable function");
            });
        }
        return a.workerModuleData = {
            isWorkerModule: !0,
            id: n,
            name: i,
            dependencies: r,
            init: sr(c),
            getTransferables: f && sr(f)
        }, a.onMainThread = e, a;
    }
    function gi(l) {
        Bt[l] && Bt[l].forEach(function(r) {
            r();
        }), Rt[l] && (Rt[l].terminate(), delete Rt[l]);
    }
    function sr(l) {
        var r = l.toString();
        return !/^function/.test(r) && /^\w+\s*\(/.test(r) && (r = "function " + r), r;
    }
    function mi(l) {
        var r = Rt[l];
        if (!r) {
            var c = sr(di);
            r = Rt[l] = new Worker(URL.createObjectURL(new Blob([
                "/** Worker Module Bootstrap: " + l.replace(/\*/g, "") + ` **/

;(` + c + ")()"
            ], {
                type: "application/javascript"
            }))), r.onmessage = function(f) {
                var t = f.data, e = t.messageId, n = Nr[e];
                if (!n) throw new Error("WorkerModule response with empty or unknown messageId");
                delete Nr[e], n(t);
            };
        }
        return r;
    }
    function Fn(l, r, c) {
        return new Promise(function(f, t) {
            var e = ++vi;
            Nr[e] = function(n) {
                n.success ? f(n.result) : t(new Error("Error in worker " + r + " call: " + n.error));
            }, mi(l).postMessage({
                messageId: e,
                action: r,
                data: c
            });
        });
    }
    function ao() {
        var l = (function(r) {
            function c(z, P, g, S, E, C, T, N) {
                var L = 1 - T;
                N.x = L * L * z + 2 * L * T * g + T * T * E, N.y = L * L * P + 2 * L * T * S + T * T * C;
            }
            function f(z, P, g, S, E, C, T, N, L, G) {
                var Q = 1 - L;
                G.x = Q * Q * Q * z + 3 * Q * Q * L * g + 3 * Q * L * L * E + L * L * L * T, G.y = Q * Q * Q * P + 3 * Q * Q * L * S + 3 * Q * L * L * C + L * L * L * N;
            }
            function t(z, P) {
                for(var g = /([MLQCZ])([^MLQCZ]*)/g, S, E, C, T, N; S = g.exec(z);){
                    var L = S[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(G) {
                        return parseFloat(G);
                    });
                    switch(S[1]){
                        case "M":
                            T = E = L[0], N = C = L[1];
                            break;
                        case "L":
                            (L[0] !== T || L[1] !== N) && P("L", T, N, T = L[0], N = L[1]);
                            break;
                        case "Q":
                            {
                                P("Q", T, N, T = L[2], N = L[3], L[0], L[1]);
                                break;
                            }
                        case "C":
                            {
                                P("C", T, N, T = L[4], N = L[5], L[0], L[1], L[2], L[3]);
                                break;
                            }
                        case "Z":
                            (T !== E || N !== C) && P("L", T, N, E, C);
                            break;
                    }
                }
            }
            function e(z, P, g) {
                g === void 0 && (g = 16);
                var S = {
                    x: 0,
                    y: 0
                };
                t(z, function(E, C, T, N, L, G, Q, K, B) {
                    switch(E){
                        case "L":
                            P(C, T, N, L);
                            break;
                        case "Q":
                            {
                                for(var j = C, ue = T, fe = 1; fe < g; fe++)c(C, T, G, Q, N, L, fe / (g - 1), S), P(j, ue, S.x, S.y), j = S.x, ue = S.y;
                                break;
                            }
                        case "C":
                            {
                                for(var q = C, ie = T, ne = 1; ne < g; ne++)f(C, T, G, Q, K, B, N, L, ne / (g - 1), S), P(q, ie, S.x, S.y), q = S.x, ie = S.y;
                                break;
                            }
                    }
                });
            }
            var n = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", i = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", o = new WeakMap, a = {
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !0,
                antialias: !1,
                depth: !1
            };
            function s(z, P) {
                var g = z.getContext ? z.getContext("webgl", a) : z, S = o.get(g);
                if (!S) {
                    let Q = function(q) {
                        var ie = C[q];
                        if (!ie && (ie = C[q] = g.getExtension(q), !ie)) throw new Error(q + " not supported");
                        return ie;
                    }, K = function(q, ie) {
                        var ne = g.createShader(ie);
                        return g.shaderSource(ne, q), g.compileShader(ne), ne;
                    }, B = function(q, ie, ne, H) {
                        if (!T[q]) {
                            var re = {}, te = {}, I = g.createProgram();
                            g.attachShader(I, K(ie, g.VERTEX_SHADER)), g.attachShader(I, K(ne, g.FRAGMENT_SHADER)), g.linkProgram(I), T[q] = {
                                program: I,
                                transaction: function($) {
                                    g.useProgram(I), $({
                                        setUniform: function(Z, Se) {
                                            for(var ee = [], se = arguments.length - 2; se-- > 0;)ee[se] = arguments[se + 2];
                                            var de = te[Se] || (te[Se] = g.getUniformLocation(I, Se));
                                            g["uniform" + Z].apply(g, [
                                                de
                                            ].concat(ee));
                                        },
                                        setAttribute: function(Z, Se, ee, se, de) {
                                            var ve = re[Z];
                                            ve || (ve = re[Z] = {
                                                buf: g.createBuffer(),
                                                loc: g.getAttribLocation(I, Z),
                                                data: null
                                            }), g.bindBuffer(g.ARRAY_BUFFER, ve.buf), g.vertexAttribPointer(ve.loc, Se, g.FLOAT, !1, 0, 0), g.enableVertexAttribArray(ve.loc), E ? g.vertexAttribDivisor(ve.loc, se) : Q("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ve.loc, se), de !== ve.data && (g.bufferData(g.ARRAY_BUFFER, de, ee), ve.data = de);
                                        }
                                    });
                                }
                            };
                        }
                        T[q].transaction(H);
                    }, j = function(q, ie) {
                        L++;
                        try {
                            g.activeTexture(g.TEXTURE0 + L);
                            var ne = N[q];
                            ne || (ne = N[q] = g.createTexture(), g.bindTexture(g.TEXTURE_2D, ne), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST)), g.bindTexture(g.TEXTURE_2D, ne), ie(ne, L);
                        } finally{
                            L--;
                        }
                    }, ue = function(q, ie, ne) {
                        var H = g.createFramebuffer();
                        G.push(H), g.bindFramebuffer(g.FRAMEBUFFER, H), g.activeTexture(g.TEXTURE0 + ie), g.bindTexture(g.TEXTURE_2D, q), g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, q, 0);
                        try {
                            ne(H);
                        } finally{
                            g.deleteFramebuffer(H), g.bindFramebuffer(g.FRAMEBUFFER, G[--G.length - 1] || null);
                        }
                    }, fe = function() {
                        C = {}, T = {}, N = {}, L = -1, G.length = 0;
                    };
                    var E = typeof WebGL2RenderingContext < "u" && g instanceof WebGL2RenderingContext, C = {}, T = {}, N = {}, L = -1, G = [];
                    g.canvas.addEventListener("webglcontextlost", function(q) {
                        fe(), q.preventDefault();
                    }, !1), o.set(g, S = {
                        gl: g,
                        isWebGL2: E,
                        getExtension: Q,
                        withProgram: B,
                        withTexture: j,
                        withTextureFramebuffer: ue,
                        handleContextLoss: fe
                    });
                }
                P(S);
            }
            function u(z, P, g, S, E, C, T, N) {
                T === void 0 && (T = 15), N === void 0 && (N = null), s(z, function(L) {
                    var G = L.gl, Q = L.withProgram, K = L.withTexture;
                    K("copy", function(B, j) {
                        G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, E, C, 0, G.RGBA, G.UNSIGNED_BYTE, P), Q("copy", n, i, function(ue) {
                            var fe = ue.setUniform, q = ue.setAttribute;
                            q("aUV", 2, G.STATIC_DRAW, 0, new Float32Array([
                                0,
                                0,
                                2,
                                0,
                                0,
                                2
                            ])), fe("1i", "image", j), G.bindFramebuffer(G.FRAMEBUFFER, N || null), G.disable(G.BLEND), G.colorMask(T & 8, T & 4, T & 2, T & 1), G.viewport(g, S, E, C), G.scissor(g, S, E, C), G.drawArrays(G.TRIANGLES, 0, 3);
                        });
                    });
                });
            }
            function d(z, P, g) {
                var S = z.width, E = z.height;
                s(z, function(C) {
                    var T = C.gl, N = new Uint8Array(S * E * 4);
                    T.readPixels(0, 0, S, E, T.RGBA, T.UNSIGNED_BYTE, N), z.width = P, z.height = g, u(T, N, 0, 0, S, E);
                });
            }
            var h = Object.freeze({
                __proto__: null,
                withWebGLContext: s,
                renderImageData: u,
                resizeWebGLCanvasWithoutClearing: d
            });
            function v(z, P, g, S, E, C) {
                C === void 0 && (C = 1);
                var T = new Uint8Array(z * P), N = S[2] - S[0], L = S[3] - S[1], G = [];
                e(g, function(q, ie, ne, H) {
                    G.push({
                        x1: q,
                        y1: ie,
                        x2: ne,
                        y2: H,
                        minX: Math.min(q, ne),
                        minY: Math.min(ie, H),
                        maxX: Math.max(q, ne),
                        maxY: Math.max(ie, H)
                    });
                }), G.sort(function(q, ie) {
                    return q.maxX - ie.maxX;
                });
                for(var Q = 0; Q < z; Q++)for(var K = 0; K < P; K++){
                    var B = ue(S[0] + N * (Q + .5) / z, S[1] + L * (K + .5) / P), j = Math.pow(1 - Math.abs(B) / E, C) / 2;
                    B < 0 && (j = 1 - j), j = Math.max(0, Math.min(255, Math.round(j * 255))), T[K * z + Q] = j;
                }
                return T;
                function ue(q, ie) {
                    for(var ne = 1 / 0, H = 1 / 0, re = G.length; re--;){
                        var te = G[re];
                        if (te.maxX + H <= q) break;
                        if (q + H > te.minX && ie - H < te.maxY && ie + H > te.minY) {
                            var I = M(q, ie, te.x1, te.y1, te.x2, te.y2);
                            I < ne && (ne = I, H = Math.sqrt(ne));
                        }
                    }
                    return fe(q, ie) && (H = -H), H;
                }
                function fe(q, ie) {
                    for(var ne = 0, H = G.length; H--;){
                        var re = G[H];
                        if (re.maxX <= q) break;
                        var te = re.y1 > ie != re.y2 > ie && q < (re.x2 - re.x1) * (ie - re.y1) / (re.y2 - re.y1) + re.x1;
                        te && (ne += re.y1 < re.y2 ? 1 : -1);
                    }
                    return ne !== 0;
                }
            }
            function y(z, P, g, S, E, C, T, N, L, G) {
                C === void 0 && (C = 1), N === void 0 && (N = 0), L === void 0 && (L = 0), G === void 0 && (G = 0), m(z, P, g, S, E, C, T, null, N, L, G);
            }
            function m(z, P, g, S, E, C, T, N, L, G, Q) {
                C === void 0 && (C = 1), L === void 0 && (L = 0), G === void 0 && (G = 0), Q === void 0 && (Q = 0);
                for(var K = v(z, P, g, S, E, C), B = new Uint8Array(K.length * 4), j = 0; j < K.length; j++)B[j * 4 + Q] = K[j];
                u(T, B, L, G, z, P, 1 << 3 - Q, N);
            }
            function M(z, P, g, S, E, C) {
                var T = E - g, N = C - S, L = T * T + N * N, G = L ? Math.max(0, Math.min(1, ((z - g) * T + (P - S) * N) / L)) : 0, Q = z - (g + G * T), K = P - (S + G * N);
                return Q * Q + K * K;
            }
            var _ = Object.freeze({
                __proto__: null,
                generate: v,
                generateIntoCanvas: y,
                generateIntoFramebuffer: m
            }), b = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", p = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", w = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", D = new Float32Array([
                0,
                0,
                2,
                0,
                0,
                2
            ]), U = null, k = !1, R = {}, O = new WeakMap;
            function Y(z) {
                if (!k && !W(z)) throw new Error("WebGL generation not supported");
            }
            function x(z, P, g, S, E, C, T) {
                if (C === void 0 && (C = 1), T === void 0 && (T = null), !T && (T = U, !T)) {
                    var N = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
                    if (!N) throw new Error("OffscreenCanvas or DOM canvas not supported");
                    T = U = N.getContext("webgl", {
                        depth: !1
                    });
                }
                Y(T);
                var L = new Uint8Array(z * P * 4);
                s(T, function(B) {
                    var j = B.gl, ue = B.withTexture, fe = B.withTextureFramebuffer;
                    ue("readable", function(q, ie) {
                        j.texImage2D(j.TEXTURE_2D, 0, j.RGBA, z, P, 0, j.RGBA, j.UNSIGNED_BYTE, null), fe(q, ie, function(ne) {
                            A(z, P, g, S, E, C, j, ne, 0, 0, 0), j.readPixels(0, 0, z, P, j.RGBA, j.UNSIGNED_BYTE, L);
                        });
                    });
                });
                for(var G = new Uint8Array(z * P), Q = 0, K = 0; Q < L.length; Q += 4)G[K++] = L[Q];
                return G;
            }
            function F(z, P, g, S, E, C, T, N, L, G) {
                C === void 0 && (C = 1), N === void 0 && (N = 0), L === void 0 && (L = 0), G === void 0 && (G = 0), A(z, P, g, S, E, C, T, null, N, L, G);
            }
            function A(z, P, g, S, E, C, T, N, L, G, Q) {
                C === void 0 && (C = 1), L === void 0 && (L = 0), G === void 0 && (G = 0), Q === void 0 && (Q = 0), Y(T);
                var K = [];
                e(g, function(B, j, ue, fe) {
                    K.push(B, j, ue, fe);
                }), K = new Float32Array(K), s(T, function(B) {
                    var j = B.gl, ue = B.isWebGL2, fe = B.getExtension, q = B.withProgram, ie = B.withTexture, ne = B.withTextureFramebuffer, H = B.handleContextLoss;
                    if (ie("rawDistances", function(re, te) {
                        (z !== re._lastWidth || P !== re._lastHeight) && j.texImage2D(j.TEXTURE_2D, 0, j.RGBA, re._lastWidth = z, re._lastHeight = P, 0, j.RGBA, j.UNSIGNED_BYTE, null), q("main", b, p, function(I) {
                            var pe = I.setAttribute, $ = I.setUniform, ae = !ue && fe("ANGLE_instanced_arrays"), Z = !ue && fe("EXT_blend_minmax");
                            pe("aUV", 2, j.STATIC_DRAW, 0, D), pe("aLineSegment", 4, j.DYNAMIC_DRAW, 1, K), $.apply(void 0, [
                                "4f",
                                "uGlyphBounds"
                            ].concat(S)), $("1f", "uMaxDistance", E), $("1f", "uExponent", C), ne(re, te, function(Se) {
                                j.enable(j.BLEND), j.colorMask(!0, !0, !0, !0), j.viewport(0, 0, z, P), j.scissor(0, 0, z, P), j.blendFunc(j.ONE, j.ONE), j.blendEquationSeparate(j.FUNC_ADD, ue ? j.MAX : Z.MAX_EXT), j.clear(j.COLOR_BUFFER_BIT), ue ? j.drawArraysInstanced(j.TRIANGLES, 0, 3, K.length / 4) : ae.drawArraysInstancedANGLE(j.TRIANGLES, 0, 3, K.length / 4);
                            });
                        }), q("post", n, w, function(I) {
                            I.setAttribute("aUV", 2, j.STATIC_DRAW, 0, D), I.setUniform("1i", "tex", te), j.bindFramebuffer(j.FRAMEBUFFER, N), j.disable(j.BLEND), j.colorMask(Q === 0, Q === 1, Q === 2, Q === 3), j.viewport(L, G, z, P), j.scissor(L, G, z, P), j.drawArrays(j.TRIANGLES, 0, 3);
                        });
                    }), j.isContextLost()) throw H(), new Error("webgl context lost");
                });
            }
            function W(z) {
                var P = !z || z === U ? R : z.canvas || z, g = O.get(P);
                if (g === void 0) {
                    k = !0;
                    var S = null;
                    try {
                        var E = [
                            97,
                            106,
                            97,
                            61,
                            99,
                            137,
                            118,
                            80,
                            80,
                            118,
                            137,
                            99,
                            61,
                            97,
                            106,
                            97
                        ], C = x(4, 4, "M8,8L16,8L24,24L16,24Z", [
                            0,
                            0,
                            32,
                            32
                        ], 24, 1, z);
                        g = C && E.length === C.length && C.every(function(T, N) {
                            return T === E[N];
                        }), g || (S = "bad trial run results", console.info(E, C));
                    } catch (T) {
                        g = !1, S = T.message;
                    }
                    S && console.warn("WebGL SDF generation not supported:", S), k = !1, O.set(P, g);
                }
                return g;
            }
            var V = Object.freeze({
                __proto__: null,
                generate: x,
                generateIntoCanvas: F,
                generateIntoFramebuffer: A,
                isSupported: W
            });
            function J(z, P, g, S, E, C) {
                E === void 0 && (E = Math.max(S[2] - S[0], S[3] - S[1]) / 2), C === void 0 && (C = 1);
                try {
                    return x.apply(V, arguments);
                } catch (T) {
                    return console.info("WebGL SDF generation failed, falling back to JS", T), v.apply(_, arguments);
                }
            }
            function oe(z, P, g, S, E, C, T, N, L, G) {
                E === void 0 && (E = Math.max(S[2] - S[0], S[3] - S[1]) / 2), C === void 0 && (C = 1), N === void 0 && (N = 0), L === void 0 && (L = 0), G === void 0 && (G = 0);
                try {
                    return F.apply(V, arguments);
                } catch (Q) {
                    return console.info("WebGL SDF generation failed, falling back to JS", Q), y.apply(_, arguments);
                }
            }
            return r.forEachPathCommand = t, r.generate = J, r.generateIntoCanvas = oe, r.javascript = _, r.pathToLineSegments = e, r.webgl = V, r.webglUtils = h, Object.defineProperty(r, "__esModule", {
                value: !0
            }), r;
        })({});
        return l;
    }
    function yi() {
        var l = (function(r) {
            var c = {
                R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
                EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
                ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
                ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
                AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
                CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
                B: "a,3,f+2,2v,690",
                S: "9,2,k",
                WS: "c,k,4f4,1vk+a,u,1j,335",
                ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
                BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
                NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
                AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
                LRO: "6ct",
                RLO: "6cu",
                LRE: "6cq",
                RLE: "6cr",
                PDF: "6cs",
                LRI: "6ee",
                RLI: "6ef",
                FSI: "6eg",
                PDI: "6eh"
            }, f = {}, t = {};
            f.L = 1, t[1] = "L", Object.keys(c).forEach(function(H, re) {
                f[H] = 1 << re + 1, t[f[H]] = H;
            }), Object.freeze(f);
            var e = f.LRI | f.RLI | f.FSI, n = f.L | f.R | f.AL, i = f.B | f.S | f.WS | f.ON | f.FSI | f.LRI | f.RLI | f.PDI, o = f.BN | f.RLE | f.LRE | f.RLO | f.LRO | f.PDF, a = f.S | f.WS | f.B | e | f.PDI | o, s = null;
            function u() {
                if (!s) {
                    s = new Map;
                    var H = function(te) {
                        if (c.hasOwnProperty(te)) {
                            var I = 0;
                            c[te].split(",").forEach(function(pe) {
                                var $ = pe.split("+"), ae = $[0], Z = $[1];
                                ae = parseInt(ae, 36), Z = Z ? parseInt(Z, 36) : 0, s.set(I += ae, f[te]);
                                for(var Se = 0; Se < Z; Se++)s.set(++I, f[te]);
                            });
                        }
                    };
                    for(var re in c)H(re);
                }
            }
            function d(H) {
                return u(), s.get(H.codePointAt(0)) || f.L;
            }
            function h(H) {
                return t[d(H)];
            }
            var v = {
                pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
                canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
            };
            function y(H, re) {
                var te = 36, I = 0, pe = new Map, $ = re && new Map, ae;
                return H.split(",").forEach(function Z(Se) {
                    if (Se.indexOf("+") !== -1) for(var ee = +Se; ee--;)Z(ae);
                    else {
                        ae = Se;
                        var se = Se.split(">"), de = se[0], ve = se[1];
                        de = String.fromCodePoint(I += parseInt(de, te)), ve = String.fromCodePoint(I += parseInt(ve, te)), pe.set(de, ve), re && $.set(ve, de);
                    }
                }), {
                    map: pe,
                    reverseMap: $
                };
            }
            var m, M, _;
            function b() {
                if (!m) {
                    var H = y(v.pairs, !0), re = H.map, te = H.reverseMap;
                    m = re, M = te, _ = y(v.canonical, !1).map;
                }
            }
            function p(H) {
                return b(), m.get(H) || null;
            }
            function w(H) {
                return b(), M.get(H) || null;
            }
            function D(H) {
                return b(), _.get(H) || null;
            }
            var U = f.L, k = f.R, R = f.EN, O = f.ES, Y = f.ET, x = f.AN, F = f.CS, A = f.B, W = f.S, V = f.ON, J = f.BN, oe = f.NSM, z = f.AL, P = f.LRO, g = f.RLO, S = f.LRE, E = f.RLE, C = f.PDF, T = f.LRI, N = f.RLI, L = f.FSI, G = f.PDI;
            function Q(H, re) {
                for(var te = 125, I = new Uint32Array(H.length), pe = 0; pe < H.length; pe++)I[pe] = d(H[pe]);
                var $ = new Map;
                function ae(Ne, Ye) {
                    var We = I[Ne];
                    I[Ne] = Ye, $.set(We, $.get(We) - 1), We & i && $.set(i, $.get(i) - 1), $.set(Ye, ($.get(Ye) || 0) + 1), Ye & i && $.set(i, ($.get(i) || 0) + 1);
                }
                for(var Z = new Uint8Array(H.length), Se = new Map, ee = [], se = null, de = 0; de < H.length; de++)se || ee.push(se = {
                    start: de,
                    end: H.length - 1,
                    level: re === "rtl" ? 1 : re === "ltr" ? 0 : xn(de, !1)
                }), I[de] & A && (se.end = de, se = null);
                for(var ve = E | S | g | P | e | G | C | A, Ue = function(Ne) {
                    return Ne + (Ne & 1 ? 1 : 2);
                }, De = function(Ne) {
                    return Ne + (Ne & 1 ? 2 : 1);
                }, ye = 0; ye < ee.length; ye++){
                    se = ee[ye];
                    var be = [
                        {
                            _level: se.level,
                            _override: 0,
                            _isolate: 0
                        }
                    ], ce = void 0, Me = 0, ke = 0, je = 0;
                    $.clear();
                    for(var Te = se.start; Te <= se.end; Te++){
                        var he = I[Te];
                        if (ce = be[be.length - 1], $.set(he, ($.get(he) || 0) + 1), he & i && $.set(i, ($.get(i) || 0) + 1), he & ve) if (he & (E | S)) {
                            Z[Te] = ce._level;
                            var we = (he === E ? De : Ue)(ce._level);
                            we <= te && !Me && !ke ? be.push({
                                _level: we,
                                _override: 0,
                                _isolate: 0
                            }) : Me || ke++;
                        } else if (he & (g | P)) {
                            Z[Te] = ce._level;
                            var et = (he === g ? De : Ue)(ce._level);
                            et <= te && !Me && !ke ? be.push({
                                _level: et,
                                _override: he & g ? k : U,
                                _isolate: 0
                            }) : Me || ke++;
                        } else if (he & e) {
                            he & L && (he = xn(Te + 1, !0) === 1 ? N : T), Z[Te] = ce._level, ce._override && ae(Te, ce._override);
                            var _e = (he === N ? De : Ue)(ce._level);
                            _e <= te && Me === 0 && ke === 0 ? (je++, be.push({
                                _level: _e,
                                _override: 0,
                                _isolate: 1,
                                _isolInitIndex: Te
                            })) : Me++;
                        } else if (he & G) {
                            if (Me > 0) Me--;
                            else if (je > 0) {
                                for(ke = 0; !be[be.length - 1]._isolate;)be.pop();
                                var xe = be[be.length - 1]._isolInitIndex;
                                xe != null && (Se.set(xe, Te), Se.set(Te, xe)), be.pop(), je--;
                            }
                            ce = be[be.length - 1], Z[Te] = ce._level, ce._override && ae(Te, ce._override);
                        } else he & C ? (Me === 0 && (ke > 0 ? ke-- : !ce._isolate && be.length > 1 && (be.pop(), ce = be[be.length - 1])), Z[Te] = ce._level) : he & A && (Z[Te] = se.level);
                        else Z[Te] = ce._level, ce._override && he !== J && ae(Te, ce._override);
                    }
                    for(var Fe = [], Ce = null, ge = se.start; ge <= se.end; ge++){
                        var Ae = I[ge];
                        if (!(Ae & o)) {
                            var Ie = Z[ge], Ge = Ae & e, Pe = Ae === G;
                            Ce && Ie === Ce._level ? (Ce._end = ge, Ce._endsWithIsolInit = Ge) : Fe.push(Ce = {
                                _start: ge,
                                _end: ge,
                                _level: Ie,
                                _startsWithPDI: Pe,
                                _endsWithIsolInit: Ge
                            });
                        }
                    }
                    for(var He = [], tt = 0; tt < Fe.length; tt++){
                        var qe = Fe[tt];
                        if (!qe._startsWithPDI || qe._startsWithPDI && !Se.has(qe._start)) {
                            for(var rt = [
                                Ce = qe
                            ], lt = void 0; Ce && Ce._endsWithIsolInit && (lt = Se.get(Ce._end)) != null;)for(var $e = tt + 1; $e < Fe.length; $e++)if (Fe[$e]._start === lt) {
                                rt.push(Ce = Fe[$e]);
                                break;
                            }
                            for(var ze = [], ft = 0; ft < rt.length; ft++)for(var $r = rt[ft], pr = $r._start; pr <= $r._end; pr++)ze.push(pr);
                            for(var yo = Z[ze[0]], en = se.level, jt = ze[0] - 1; jt >= 0; jt--)if (!(I[jt] & o)) {
                                en = Z[jt];
                                break;
                            }
                            var vr = ze[ze.length - 1], bo = Z[vr], tn = se.level;
                            if (!(I[vr] & e)) {
                                for(var Nt = vr + 1; Nt <= se.end; Nt++)if (!(I[Nt] & o)) {
                                    tn = Z[Nt];
                                    break;
                                }
                            }
                            He.push({
                                _seqIndices: ze,
                                _sosType: Math.max(en, yo) % 2 ? k : U,
                                _eosType: Math.max(tn, bo) % 2 ? k : U
                            });
                        }
                    }
                    for(var gr = 0; gr < He.length; gr++){
                        var mr = He[gr], le = mr._seqIndices, _t = mr._sosType, xo = mr._eosType, vt = Z[le[0]] & 1 ? k : U;
                        if ($.get(oe)) for(var Wt = 0; Wt < le.length; Wt++){
                            var rn = le[Wt];
                            if (I[rn] & oe) {
                                for(var yr = _t, Vt = Wt - 1; Vt >= 0; Vt--)if (!(I[le[Vt]] & o)) {
                                    yr = I[le[Vt]];
                                    break;
                                }
                                ae(rn, yr & (e | G) ? V : yr);
                            }
                        }
                        if ($.get(R)) for(var Ht = 0; Ht < le.length; Ht++){
                            var nn = le[Ht];
                            if (I[nn] & R) for(var Xt = Ht - 1; Xt >= -1; Xt--){
                                var on = Xt === -1 ? _t : I[le[Xt]];
                                if (on & n) {
                                    on === z && ae(nn, x);
                                    break;
                                }
                            }
                        }
                        if ($.get(z)) for(var br = 0; br < le.length; br++){
                            var an = le[br];
                            I[an] & z && ae(an, k);
                        }
                        if ($.get(O) || $.get(F)) for(var Ut = 1; Ut < le.length - 1; Ut++){
                            var xr = le[Ut];
                            if (I[xr] & (O | F)) {
                                for(var gt = 0, Sr = 0, wr = Ut - 1; wr >= 0 && (gt = I[le[wr]], !!(gt & o)); wr--);
                                for(var _r = Ut + 1; _r < le.length && (Sr = I[le[_r]], !!(Sr & o)); _r++);
                                gt === Sr && (I[xr] === O ? gt === R : gt & (R | x)) && ae(xr, gt);
                            }
                        }
                        if ($.get(R)) for(var Je = 0; Je < le.length; Je++){
                            var So = le[Je];
                            if (I[So] & R) {
                                for(var Yt = Je - 1; Yt >= 0 && I[le[Yt]] & (Y | o); Yt--)ae(le[Yt], R);
                                for(Je++; Je < le.length && I[le[Je]] & (Y | o | R); Je++)I[le[Je]] !== R && ae(le[Je], R);
                            }
                        }
                        if ($.get(Y) || $.get(O) || $.get(F)) for(var Tt = 0; Tt < le.length; Tt++){
                            var sn = le[Tt];
                            if (I[sn] & (Y | O | F)) {
                                ae(sn, V);
                                for(var Jt = Tt - 1; Jt >= 0 && I[le[Jt]] & o; Jt--)ae(le[Jt], V);
                                for(var Kt = Tt + 1; Kt < le.length && I[le[Kt]] & o; Kt++)ae(le[Kt], V);
                            }
                        }
                        if ($.get(R)) for(var Ur = 0, ln = _t; Ur < le.length; Ur++){
                            var fn = le[Ur], Tr = I[fn];
                            Tr & R ? ln === U && ae(fn, U) : Tr & n && (ln = Tr);
                        }
                        if ($.get(i)) {
                            var Et = k | R | x, cn = Et | U, Qt = [];
                            {
                                for(var mt = [], yt = 0; yt < le.length; yt++)if (I[le[yt]] & i) {
                                    var kt = H[le[yt]], un = void 0;
                                    if (p(kt) !== null) if (mt.length < 63) mt.push({
                                        char: kt,
                                        seqIndex: yt
                                    });
                                    else break;
                                    else if ((un = w(kt)) !== null) for(var Ct = mt.length - 1; Ct >= 0; Ct--){
                                        var Er = mt[Ct].char;
                                        if (Er === un || Er === w(D(kt)) || p(D(Er)) === kt) {
                                            Qt.push([
                                                mt[Ct].seqIndex,
                                                yt
                                            ]), mt.length = Ct;
                                            break;
                                        }
                                    }
                                }
                                Qt.sort(function(Ne, Ye) {
                                    return Ne[0] - Ye[0];
                                });
                            }
                            for(var kr = 0; kr < Qt.length; kr++){
                                for(var dn = Qt[kr], Zt = dn[0], Cr = dn[1], hn = !1, Xe = 0, Ar = Zt + 1; Ar < Cr; Ar++){
                                    var pn = le[Ar];
                                    if (I[pn] & cn) {
                                        hn = !0;
                                        var vn = I[pn] & Et ? k : U;
                                        if (vn === vt) {
                                            Xe = vn;
                                            break;
                                        }
                                    }
                                }
                                if (hn && !Xe) {
                                    Xe = _t;
                                    for(var Dr = Zt - 1; Dr >= 0; Dr--){
                                        var gn = le[Dr];
                                        if (I[gn] & cn) {
                                            var mn = I[gn] & Et ? k : U;
                                            mn !== vt ? Xe = mn : Xe = vt;
                                            break;
                                        }
                                    }
                                }
                                if (Xe) {
                                    if (I[le[Zt]] = I[le[Cr]] = Xe, Xe !== vt) {
                                        for(var At = Zt + 1; At < le.length; At++)if (!(I[le[At]] & o)) {
                                            d(H[le[At]]) & oe && (I[le[At]] = Xe);
                                            break;
                                        }
                                    }
                                    if (Xe !== vt) {
                                        for(var Dt = Cr + 1; Dt < le.length; Dt++)if (!(I[le[Dt]] & o)) {
                                            d(H[le[Dt]]) & oe && (I[le[Dt]] = Xe);
                                            break;
                                        }
                                    }
                                }
                            }
                            for(var nt = 0; nt < le.length; nt++)if (I[le[nt]] & i) {
                                for(var yn = nt, Mr = nt, Fr = _t, Mt = nt - 1; Mt >= 0; Mt--)if (I[le[Mt]] & o) yn = Mt;
                                else {
                                    Fr = I[le[Mt]] & Et ? k : U;
                                    break;
                                }
                                for(var bn = xo, Ft = nt + 1; Ft < le.length; Ft++)if (I[le[Ft]] & (i | o)) Mr = Ft;
                                else {
                                    bn = I[le[Ft]] & Et ? k : U;
                                    break;
                                }
                                for(var Pr = yn; Pr <= Mr; Pr++)I[le[Pr]] = Fr === bn ? Fr : vt;
                                nt = Mr;
                            }
                        }
                    }
                    for(var Ve = se.start; Ve <= se.end; Ve++){
                        var wo = Z[Ve], qt = I[Ve];
                        if (wo & 1 ? qt & (U | R | x) && Z[Ve]++ : qt & k ? Z[Ve]++ : qt & (x | R) && (Z[Ve] += 2), qt & o && (Z[Ve] = Ve === 0 ? se.level : Z[Ve - 1]), Ve === se.end || d(H[Ve]) & (W | A)) for(var $t = Ve; $t >= 0 && d(H[$t]) & a; $t--)Z[$t] = se.level;
                    }
                }
                return {
                    levels: Z,
                    paragraphs: ee
                };
                function xn(Ne, Ye) {
                    for(var We = Ne; We < H.length; We++){
                        var ot = I[We];
                        if (ot & (k | z)) return 1;
                        if (ot & (A | U) || Ye && ot === G) return 0;
                        if (ot & e) {
                            var Sn = _o(We);
                            We = Sn === -1 ? H.length : Sn;
                        }
                    }
                    return 0;
                }
                function _o(Ne) {
                    for(var Ye = 1, We = Ne + 1; We < H.length; We++){
                        var ot = I[We];
                        if (ot & A) break;
                        if (ot & G) {
                            if (--Ye === 0) return We;
                        } else ot & e && Ye++;
                    }
                    return -1;
                }
            }
            var K = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", B;
            function j() {
                if (!B) {
                    var H = y(K, !0), re = H.map, te = H.reverseMap;
                    te.forEach(function(I, pe) {
                        re.set(pe, I);
                    }), B = re;
                }
            }
            function ue(H) {
                return j(), B.get(H) || null;
            }
            function fe(H, re, te, I) {
                var pe = H.length;
                te = Math.max(0, te == null ? 0 : +te), I = Math.min(pe - 1, I == null ? pe - 1 : +I);
                for(var $ = new Map, ae = te; ae <= I; ae++)if (re[ae] & 1) {
                    var Z = ue(H[ae]);
                    Z !== null && $.set(ae, Z);
                }
                return $;
            }
            function q(H, re, te, I) {
                var pe = H.length;
                te = Math.max(0, te == null ? 0 : +te), I = Math.min(pe - 1, I == null ? pe - 1 : +I);
                var $ = [];
                return re.paragraphs.forEach(function(ae) {
                    var Z = Math.max(te, ae.start), Se = Math.min(I, ae.end);
                    if (Z < Se) {
                        for(var ee = re.levels.slice(Z, Se + 1), se = Se; se >= Z && d(H[se]) & a; se--)ee[se] = ae.level;
                        for(var de = ae.level, ve = 1 / 0, Ue = 0; Ue < ee.length; Ue++){
                            var De = ee[Ue];
                            De > de && (de = De), De < ve && (ve = De | 1);
                        }
                        for(var ye = de; ye >= ve; ye--)for(var be = 0; be < ee.length; be++)if (ee[be] >= ye) {
                            for(var ce = be; be + 1 < ee.length && ee[be + 1] >= ye;)be++;
                            be > ce && $.push([
                                ce + Z,
                                be + Z
                            ]);
                        }
                    }
                }), $;
            }
            function ie(H, re, te, I) {
                var pe = ne(H, re, te, I), $ = [].concat(H);
                return pe.forEach(function(ae, Z) {
                    $[Z] = (re.levels[ae] & 1 ? ue(H[ae]) : null) || H[ae];
                }), $.join("");
            }
            function ne(H, re, te, I) {
                for(var pe = q(H, re, te, I), $ = [], ae = 0; ae < H.length; ae++)$[ae] = ae;
                return pe.forEach(function(Z) {
                    for(var Se = Z[0], ee = Z[1], se = $.slice(Se, ee + 1), de = se.length; de--;)$[ee - de] = se[de];
                }), $;
            }
            return r.closingToOpeningBracket = w, r.getBidiCharType = d, r.getBidiCharTypeName = h, r.getCanonicalBracket = D, r.getEmbeddingLevels = Q, r.getMirroredCharacter = ue, r.getMirroredCharactersMap = fe, r.getReorderSegments = q, r.getReorderedIndices = ne, r.getReorderedString = ie, r.openingToClosingBracket = p, Object.defineProperty(r, "__esModule", {
                value: !0
            }), r;
        })({});
        return l;
    }
    const so = /\bvoid\s+main\s*\(\s*\)\s*{/g;
    function Wr(l) {
        const r = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function c(f, t) {
            let e = Lo[t];
            return e ? Wr(e) : f;
        }
        return l.replace(r, c);
    }
    const Re = [];
    for(let l = 0; l < 256; l++)Re[l] = (l < 16 ? "0" : "") + l.toString(16);
    function bi() {
        const l = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, c = Math.random() * 4294967295 | 0, f = Math.random() * 4294967295 | 0;
        return (Re[l & 255] + Re[l >> 8 & 255] + Re[l >> 16 & 255] + Re[l >> 24 & 255] + "-" + Re[r & 255] + Re[r >> 8 & 255] + "-" + Re[r >> 16 & 15 | 64] + Re[r >> 24 & 255] + "-" + Re[c & 63 | 128] + Re[c >> 8 & 255] + "-" + Re[c >> 16 & 255] + Re[c >> 24 & 255] + Re[f & 255] + Re[f >> 8 & 255] + Re[f >> 16 & 255] + Re[f >> 24 & 255]).toUpperCase();
    }
    const ct = Object.assign || function() {
        let l = arguments[0];
        for(let r = 1, c = arguments.length; r < c; r++){
            let f = arguments[r];
            if (f) for(let t in f)Object.prototype.hasOwnProperty.call(f, t) && (l[t] = f[t]);
        }
        return l;
    }, xi = Date.now(), Pn = new WeakMap, Ln = new Map;
    let Si = 1e10;
    function Vr(l, r) {
        const c = Ti(r);
        let f = Pn.get(l);
        if (f || Pn.set(l, f = Object.create(null)), f[c]) return new f[c];
        const t = `_onBeforeCompile${c}`, e = function(a, s) {
            l.onBeforeCompile.call(this, a, s);
            const u = this.customProgramCacheKey() + "|" + a.vertexShader + "|" + a.fragmentShader;
            let d = Ln[u];
            if (!d) {
                const h = wi(this, a, r, c);
                d = Ln[u] = h;
            }
            a.vertexShader = d.vertexShader, a.fragmentShader = d.fragmentShader, ct(a.uniforms, this.uniforms), r.timeUniform && (a.uniforms[r.timeUniform] = {
                get value () {
                    return Date.now() - xi;
                }
            }), this[t] && this[t](a);
        }, n = function() {
            return i(r.chained ? l : l.clone());
        }, i = function(a) {
            const s = Object.create(a, o);
            return Object.defineProperty(s, "baseMaterial", {
                value: l
            }), Object.defineProperty(s, "id", {
                value: Si++
            }), s.uuid = bi(), s.uniforms = ct({}, a.uniforms, r.uniforms), s.defines = ct({}, a.defines, r.defines), s.defines[`TROIKA_DERIVED_MATERIAL_${c}`] = "", s.extensions = ct({}, a.extensions, r.extensions), s._listeners = void 0, s;
        }, o = {
            constructor: {
                value: n
            },
            isDerivedMaterial: {
                value: !0
            },
            type: {
                get: ()=>l.type,
                set: (a)=>{
                    l.type = a;
                }
            },
            isDerivedFrom: {
                writable: !0,
                configurable: !0,
                value: function(a) {
                    const s = this.baseMaterial;
                    return a === s || s.isDerivedMaterial && s.isDerivedFrom(a) || !1;
                }
            },
            customProgramCacheKey: {
                writable: !0,
                configurable: !0,
                value: function() {
                    return l.customProgramCacheKey() + "|" + c;
                }
            },
            onBeforeCompile: {
                get () {
                    return e;
                },
                set (a) {
                    this[t] = a;
                }
            },
            copy: {
                writable: !0,
                configurable: !0,
                value: function(a) {
                    return l.copy.call(this, a), !l.isShaderMaterial && !l.isDerivedMaterial && (ct(this.extensions, a.extensions), ct(this.defines, a.defines), ct(this.uniforms, fr.clone(a.uniforms))), this;
                }
            },
            clone: {
                writable: !0,
                configurable: !0,
                value: function() {
                    const a = new l.constructor;
                    return i(a).copy(this);
                }
            },
            getDepthMaterial: {
                writable: !0,
                configurable: !0,
                value: function() {
                    let a = this._depthMaterial;
                    return a || (a = this._depthMaterial = Vr(l.isDerivedMaterial ? l.getDepthMaterial() : new Fo({
                        depthPacking: Po
                    }), r), a.defines.IS_DEPTH_MATERIAL = "", a.uniforms = this.uniforms), a;
                }
            },
            getDistanceMaterial: {
                writable: !0,
                configurable: !0,
                value: function() {
                    let a = this._distanceMaterial;
                    return a || (a = this._distanceMaterial = Vr(l.isDerivedMaterial ? l.getDistanceMaterial() : new Mo, r), a.defines.IS_DISTANCE_MATERIAL = "", a.uniforms = this.uniforms), a;
                }
            },
            dispose: {
                writable: !0,
                configurable: !0,
                value () {
                    const { _depthMaterial: a, _distanceMaterial: s } = this;
                    a && a.dispose(), s && s.dispose(), l.dispose.call(this);
                }
            }
        };
        return f[c] = n, new n;
    }
    function wi(l, { vertexShader: r, fragmentShader: c }, f, t) {
        let { vertexDefs: e, vertexMainIntro: n, vertexMainOutro: i, vertexTransform: o, fragmentDefs: a, fragmentMainIntro: s, fragmentMainOutro: u, fragmentColorTransform: d, customRewriter: h, timeUniform: v } = f;
        if (e = e || "", n = n || "", i = i || "", a = a || "", s = s || "", u = u || "", (o || h) && (r = Wr(r)), (d || h) && (c = c.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`), c = Wr(c)), h) {
            let y = h({
                vertexShader: r,
                fragmentShader: c
            });
            r = y.vertexShader, c = y.fragmentShader;
        }
        if (d) {
            let y = [];
            c = c.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (m)=>(y.push(m), "")), u = `${d}
${y.join(`
`)}
${u}`;
        }
        if (v) {
            const y = `
uniform float ${v};
`;
            e = y + e, a = y + a;
        }
        return o && (r = `vec3 troika_position_${t};
vec3 troika_normal_${t};
vec2 troika_uv_${t};
${r}
`, e = `${e}
void troikaVertexTransform${t}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${o}
}
`, n = `
troika_position_${t} = vec3(position);
troika_normal_${t} = vec3(normal);
troika_uv_${t} = vec2(uv);
troikaVertexTransform${t}(troika_position_${t}, troika_normal_${t}, troika_uv_${t});
${n}
`, r = r.replace(/\b(position|normal|uv)\b/g, (y, m, M, _)=>/\battribute\s+vec[23]\s+$/.test(_.substr(0, M)) ? m : `troika_${m}_${t}`), l.map && l.map.channel > 0 || (r = r.replace(/\bMAP_UV\b/g, `troika_uv_${t}`))), r = On(r, t, e, n, i), c = On(c, t, a, s, u), {
            vertexShader: r,
            fragmentShader: c
        };
    }
    function On(l, r, c, f, t) {
        return (f || t || c) && (l = l.replace(so, `
${c}
void troikaOrigMain${r}() {`), l += `
void main() {
  ${f}
  troikaOrigMain${r}();
  ${t}
}`), l;
    }
    function _i(l, r) {
        return l === "uniforms" ? void 0 : typeof r == "function" ? r.toString() : r;
    }
    let Ui = 0;
    const Rn = new Map;
    function Ti(l) {
        const r = JSON.stringify(l, _i);
        let c = Rn.get(r);
        return c == null && Rn.set(r, c = ++Ui), c;
    }
    function Ei() {
        return typeof window > "u" && (self.window = self), (function(l) {
            var r = {
                parse: function(t) {
                    var e = r._bin, n = new Uint8Array(t);
                    if (e.readASCII(n, 0, 4) == "ttcf") {
                        var i = 4;
                        e.readUshort(n, i), i += 2, e.readUshort(n, i), i += 2;
                        var o = e.readUint(n, i);
                        i += 4;
                        for(var a = [], s = 0; s < o; s++){
                            var u = e.readUint(n, i);
                            i += 4, a.push(r._readFont(n, u));
                        }
                        return a;
                    }
                    return [
                        r._readFont(n, 0)
                    ];
                },
                _readFont: function(t, e) {
                    var n = r._bin, i = e;
                    n.readFixed(t, e), e += 4;
                    var o = n.readUshort(t, e);
                    e += 2, n.readUshort(t, e), e += 2, n.readUshort(t, e), e += 2, n.readUshort(t, e), e += 2;
                    for(var a = [
                        "cmap",
                        "head",
                        "hhea",
                        "maxp",
                        "hmtx",
                        "name",
                        "OS/2",
                        "post",
                        "loca",
                        "glyf",
                        "kern",
                        "CFF ",
                        "GDEF",
                        "GPOS",
                        "GSUB",
                        "SVG "
                    ], s = {
                        _data: t,
                        _offset: i
                    }, u = {}, d = 0; d < o; d++){
                        var h = n.readASCII(t, e, 4);
                        e += 4, n.readUint(t, e), e += 4;
                        var v = n.readUint(t, e);
                        e += 4;
                        var y = n.readUint(t, e);
                        e += 4, u[h] = {
                            offset: v,
                            length: y
                        };
                    }
                    for(d = 0; d < a.length; d++){
                        var m = a[d];
                        u[m] && (s[m.trim()] = r[m.trim()].parse(t, u[m].offset, u[m].length, s));
                    }
                    return s;
                },
                _tabOffset: function(t, e, n) {
                    for(var i = r._bin, o = i.readUshort(t, n + 4), a = n + 12, s = 0; s < o; s++){
                        var u = i.readASCII(t, a, 4);
                        a += 4, i.readUint(t, a), a += 4;
                        var d = i.readUint(t, a);
                        if (a += 4, i.readUint(t, a), a += 4, u == e) return d;
                    }
                    return 0;
                }
            };
            r._bin = {
                readFixed: function(t, e) {
                    return (t[e] << 8 | t[e + 1]) + (t[e + 2] << 8 | t[e + 3]) / 65540;
                },
                readF2dot14: function(t, e) {
                    return r._bin.readShort(t, e) / 16384;
                },
                readInt: function(t, e) {
                    return r._bin._view(t).getInt32(e);
                },
                readInt8: function(t, e) {
                    return r._bin._view(t).getInt8(e);
                },
                readShort: function(t, e) {
                    return r._bin._view(t).getInt16(e);
                },
                readUshort: function(t, e) {
                    return r._bin._view(t).getUint16(e);
                },
                readUshorts: function(t, e, n) {
                    for(var i = [], o = 0; o < n; o++)i.push(r._bin.readUshort(t, e + 2 * o));
                    return i;
                },
                readUint: function(t, e) {
                    return r._bin._view(t).getUint32(e);
                },
                readUint64: function(t, e) {
                    return 4294967296 * r._bin.readUint(t, e) + r._bin.readUint(t, e + 4);
                },
                readASCII: function(t, e, n) {
                    for(var i = "", o = 0; o < n; o++)i += String.fromCharCode(t[e + o]);
                    return i;
                },
                readUnicode: function(t, e, n) {
                    for(var i = "", o = 0; o < n; o++){
                        var a = t[e++] << 8 | t[e++];
                        i += String.fromCharCode(a);
                    }
                    return i;
                },
                _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder : null,
                readUTF8: function(t, e, n) {
                    var i = r._bin._tdec;
                    return i && e == 0 && n == t.length ? i.decode(t) : r._bin.readASCII(t, e, n);
                },
                readBytes: function(t, e, n) {
                    for(var i = [], o = 0; o < n; o++)i.push(t[e + o]);
                    return i;
                },
                readASCIIArray: function(t, e, n) {
                    for(var i = [], o = 0; o < n; o++)i.push(String.fromCharCode(t[e + o]));
                    return i;
                },
                _view: function(t) {
                    return t._dataView || (t._dataView = t.buffer ? new DataView(t.buffer, t.byteOffset, t.byteLength) : new DataView(new Uint8Array(t).buffer));
                }
            }, r._lctf = {}, r._lctf.parse = function(t, e, n, i, o) {
                var a = r._bin, s = {}, u = e;
                a.readFixed(t, e), e += 4;
                var d = a.readUshort(t, e);
                e += 2;
                var h = a.readUshort(t, e);
                e += 2;
                var v = a.readUshort(t, e);
                return e += 2, s.scriptList = r._lctf.readScriptList(t, u + d), s.featureList = r._lctf.readFeatureList(t, u + h), s.lookupList = r._lctf.readLookupList(t, u + v, o), s;
            }, r._lctf.readLookupList = function(t, e, n) {
                var i = r._bin, o = e, a = [], s = i.readUshort(t, e);
                e += 2;
                for(var u = 0; u < s; u++){
                    var d = i.readUshort(t, e);
                    e += 2;
                    var h = r._lctf.readLookupTable(t, o + d, n);
                    a.push(h);
                }
                return a;
            }, r._lctf.readLookupTable = function(t, e, n) {
                var i = r._bin, o = e, a = {
                    tabs: []
                };
                a.ltype = i.readUshort(t, e), e += 2, a.flag = i.readUshort(t, e), e += 2;
                var s = i.readUshort(t, e);
                e += 2;
                for(var u = a.ltype, d = 0; d < s; d++){
                    var h = i.readUshort(t, e);
                    e += 2;
                    var v = n(t, u, o + h, a);
                    a.tabs.push(v);
                }
                return a;
            }, r._lctf.numOfOnes = function(t) {
                for(var e = 0, n = 0; n < 32; n++)(t >>> n & 1) != 0 && e++;
                return e;
            }, r._lctf.readClassDef = function(t, e) {
                var n = r._bin, i = [], o = n.readUshort(t, e);
                if (e += 2, o == 1) {
                    var a = n.readUshort(t, e);
                    e += 2;
                    var s = n.readUshort(t, e);
                    e += 2;
                    for(var u = 0; u < s; u++)i.push(a + u), i.push(a + u), i.push(n.readUshort(t, e)), e += 2;
                }
                if (o == 2) {
                    var d = n.readUshort(t, e);
                    for(e += 2, u = 0; u < d; u++)i.push(n.readUshort(t, e)), e += 2, i.push(n.readUshort(t, e)), e += 2, i.push(n.readUshort(t, e)), e += 2;
                }
                return i;
            }, r._lctf.getInterval = function(t, e) {
                for(var n = 0; n < t.length; n += 3){
                    var i = t[n], o = t[n + 1];
                    if (t[n + 2], i <= e && e <= o) return n;
                }
                return -1;
            }, r._lctf.readCoverage = function(t, e) {
                var n = r._bin, i = {};
                i.fmt = n.readUshort(t, e), e += 2;
                var o = n.readUshort(t, e);
                return e += 2, i.fmt == 1 && (i.tab = n.readUshorts(t, e, o)), i.fmt == 2 && (i.tab = n.readUshorts(t, e, 3 * o)), i;
            }, r._lctf.coverageIndex = function(t, e) {
                var n = t.tab;
                if (t.fmt == 1) return n.indexOf(e);
                if (t.fmt == 2) {
                    var i = r._lctf.getInterval(n, e);
                    if (i != -1) return n[i + 2] + (e - n[i]);
                }
                return -1;
            }, r._lctf.readFeatureList = function(t, e) {
                var n = r._bin, i = e, o = [], a = n.readUshort(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = n.readASCII(t, e, 4);
                    e += 4;
                    var d = n.readUshort(t, e);
                    e += 2;
                    var h = r._lctf.readFeatureTable(t, i + d);
                    h.tag = u.trim(), o.push(h);
                }
                return o;
            }, r._lctf.readFeatureTable = function(t, e) {
                var n = r._bin, i = e, o = {}, a = n.readUshort(t, e);
                e += 2, a > 0 && (o.featureParams = i + a);
                var s = n.readUshort(t, e);
                e += 2, o.tab = [];
                for(var u = 0; u < s; u++)o.tab.push(n.readUshort(t, e + 2 * u));
                return o;
            }, r._lctf.readScriptList = function(t, e) {
                var n = r._bin, i = e, o = {}, a = n.readUshort(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = n.readASCII(t, e, 4);
                    e += 4;
                    var d = n.readUshort(t, e);
                    e += 2, o[u.trim()] = r._lctf.readScriptTable(t, i + d);
                }
                return o;
            }, r._lctf.readScriptTable = function(t, e) {
                var n = r._bin, i = e, o = {}, a = n.readUshort(t, e);
                e += 2, a > 0 && (o.default = r._lctf.readLangSysTable(t, i + a));
                var s = n.readUshort(t, e);
                e += 2;
                for(var u = 0; u < s; u++){
                    var d = n.readASCII(t, e, 4);
                    e += 4;
                    var h = n.readUshort(t, e);
                    e += 2, o[d.trim()] = r._lctf.readLangSysTable(t, i + h);
                }
                return o;
            }, r._lctf.readLangSysTable = function(t, e) {
                var n = r._bin, i = {};
                n.readUshort(t, e), e += 2, i.reqFeature = n.readUshort(t, e), e += 2;
                var o = n.readUshort(t, e);
                return e += 2, i.features = n.readUshorts(t, e, o), i;
            }, r.CFF = {}, r.CFF.parse = function(t, e, n) {
                var i = r._bin;
                (t = new Uint8Array(t.buffer, e, n))[e = 0], t[++e], t[++e], t[++e], e++;
                var o = [];
                e = r.CFF.readIndex(t, e, o);
                for(var a = [], s = 0; s < o.length - 1; s++)a.push(i.readASCII(t, e + o[s], o[s + 1] - o[s]));
                e += o[o.length - 1];
                var u = [];
                e = r.CFF.readIndex(t, e, u);
                var d = [];
                for(s = 0; s < u.length - 1; s++)d.push(r.CFF.readDict(t, e + u[s], e + u[s + 1]));
                e += u[u.length - 1];
                var h = d[0], v = [];
                e = r.CFF.readIndex(t, e, v);
                var y = [];
                for(s = 0; s < v.length - 1; s++)y.push(i.readASCII(t, e + v[s], v[s + 1] - v[s]));
                if (e += v[v.length - 1], r.CFF.readSubrs(t, e, h), h.CharStrings) {
                    e = h.CharStrings, v = [], e = r.CFF.readIndex(t, e, v);
                    var m = [];
                    for(s = 0; s < v.length - 1; s++)m.push(i.readBytes(t, e + v[s], v[s + 1] - v[s]));
                    h.CharStrings = m;
                }
                if (h.ROS) {
                    e = h.FDArray;
                    var M = [];
                    for(e = r.CFF.readIndex(t, e, M), h.FDArray = [], s = 0; s < M.length - 1; s++){
                        var _ = r.CFF.readDict(t, e + M[s], e + M[s + 1]);
                        r.CFF._readFDict(t, _, y), h.FDArray.push(_);
                    }
                    e += M[M.length - 1], e = h.FDSelect, h.FDSelect = [];
                    var b = t[e];
                    if (e++, b != 3) throw b;
                    var p = i.readUshort(t, e);
                    for(e += 2, s = 0; s < p + 1; s++)h.FDSelect.push(i.readUshort(t, e), t[e + 2]), e += 3;
                }
                return h.Encoding && (h.Encoding = r.CFF.readEncoding(t, h.Encoding, h.CharStrings.length)), h.charset && (h.charset = r.CFF.readCharset(t, h.charset, h.CharStrings.length)), r.CFF._readFDict(t, h, y), h;
            }, r.CFF._readFDict = function(t, e, n) {
                var i;
                for(var o in e.Private && (i = e.Private[1], e.Private = r.CFF.readDict(t, i, i + e.Private[0]), e.Private.Subrs && r.CFF.readSubrs(t, i + e.Private.Subrs, e.Private)), e)[
                    "FamilyName",
                    "FontName",
                    "FullName",
                    "Notice",
                    "version",
                    "Copyright"
                ].indexOf(o) != -1 && (e[o] = n[e[o] - 426 + 35]);
            }, r.CFF.readSubrs = function(t, e, n) {
                var i = r._bin, o = [];
                e = r.CFF.readIndex(t, e, o);
                var a, s = o.length;
                a = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, n.Bias = a, n.Subrs = [];
                for(var u = 0; u < o.length - 1; u++)n.Subrs.push(i.readBytes(t, e + o[u], o[u + 1] - o[u]));
            }, r.CFF.tableSE = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                66,
                67,
                68,
                69,
                70,
                71,
                72,
                73,
                74,
                75,
                76,
                77,
                78,
                79,
                80,
                81,
                82,
                83,
                84,
                85,
                86,
                87,
                88,
                89,
                90,
                91,
                92,
                93,
                94,
                95,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                96,
                97,
                98,
                99,
                100,
                101,
                102,
                103,
                104,
                105,
                106,
                107,
                108,
                109,
                110,
                0,
                111,
                112,
                113,
                114,
                0,
                115,
                116,
                117,
                118,
                119,
                120,
                121,
                122,
                0,
                123,
                0,
                124,
                125,
                126,
                127,
                128,
                129,
                130,
                131,
                0,
                132,
                133,
                0,
                134,
                135,
                136,
                137,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                138,
                0,
                139,
                0,
                0,
                0,
                0,
                140,
                141,
                142,
                143,
                0,
                0,
                0,
                0,
                0,
                144,
                0,
                0,
                0,
                145,
                0,
                0,
                146,
                147,
                148,
                149,
                0,
                0,
                0,
                0
            ], r.CFF.glyphByUnicode = function(t, e) {
                for(var n = 0; n < t.charset.length; n++)if (t.charset[n] == e) return n;
                return -1;
            }, r.CFF.glyphBySE = function(t, e) {
                return e < 0 || e > 255 ? -1 : r.CFF.glyphByUnicode(t, r.CFF.tableSE[e]);
            }, r.CFF.readEncoding = function(t, e, n) {
                r._bin;
                var i = [
                    ".notdef"
                ], o = t[e];
                if (e++, o != 0) throw "error: unknown encoding format: " + o;
                var a = t[e];
                e++;
                for(var s = 0; s < a; s++)i.push(t[e + s]);
                return i;
            }, r.CFF.readCharset = function(t, e, n) {
                var i = r._bin, o = [
                    ".notdef"
                ], a = t[e];
                if (e++, a == 0) for(var s = 0; s < n; s++){
                    var u = i.readUshort(t, e);
                    e += 2, o.push(u);
                }
                else {
                    if (a != 1 && a != 2) throw "error: format: " + a;
                    for(; o.length < n;){
                        u = i.readUshort(t, e), e += 2;
                        var d = 0;
                        for(a == 1 ? (d = t[e], e++) : (d = i.readUshort(t, e), e += 2), s = 0; s <= d; s++)o.push(u), u++;
                    }
                }
                return o;
            }, r.CFF.readIndex = function(t, e, n) {
                var i = r._bin, o = i.readUshort(t, e) + 1, a = t[e += 2];
                if (e++, a == 1) for(var s = 0; s < o; s++)n.push(t[e + s]);
                else if (a == 2) for(s = 0; s < o; s++)n.push(i.readUshort(t, e + 2 * s));
                else if (a == 3) for(s = 0; s < o; s++)n.push(16777215 & i.readUint(t, e + 3 * s - 1));
                else if (o != 1) throw "unsupported offset size: " + a + ", count: " + o;
                return (e += o * a) - 1;
            }, r.CFF.getCharString = function(t, e, n) {
                var i = r._bin, o = t[e], a = t[e + 1];
                t[e + 2], t[e + 3], t[e + 4];
                var s = 1, u = null, d = null;
                o <= 20 && (u = o, s = 1), o == 12 && (u = 100 * o + a, s = 2), 21 <= o && o <= 27 && (u = o, s = 1), o == 28 && (d = i.readShort(t, e + 1), s = 3), 29 <= o && o <= 31 && (u = o, s = 1), 32 <= o && o <= 246 && (d = o - 139, s = 1), 247 <= o && o <= 250 && (d = 256 * (o - 247) + a + 108, s = 2), 251 <= o && o <= 254 && (d = 256 * -(o - 251) - a - 108, s = 2), o == 255 && (d = i.readInt(t, e + 1) / 65535, s = 5), n.val = d ?? "o" + u, n.size = s;
            }, r.CFF.readCharString = function(t, e, n) {
                for(var i = e + n, o = r._bin, a = []; e < i;){
                    var s = t[e], u = t[e + 1];
                    t[e + 2], t[e + 3], t[e + 4];
                    var d = 1, h = null, v = null;
                    s <= 20 && (h = s, d = 1), s == 12 && (h = 100 * s + u, d = 2), s != 19 && s != 20 || (h = s, d = 2), 21 <= s && s <= 27 && (h = s, d = 1), s == 28 && (v = o.readShort(t, e + 1), d = 3), 29 <= s && s <= 31 && (h = s, d = 1), 32 <= s && s <= 246 && (v = s - 139, d = 1), 247 <= s && s <= 250 && (v = 256 * (s - 247) + u + 108, d = 2), 251 <= s && s <= 254 && (v = 256 * -(s - 251) - u - 108, d = 2), s == 255 && (v = o.readInt(t, e + 1) / 65535, d = 5), a.push(v ?? "o" + h), e += d;
                }
                return a;
            }, r.CFF.readDict = function(t, e, n) {
                for(var i = r._bin, o = {}, a = []; e < n;){
                    var s = t[e], u = t[e + 1];
                    t[e + 2], t[e + 3], t[e + 4];
                    var d = 1, h = null, v = null;
                    if (s == 28 && (v = i.readShort(t, e + 1), d = 3), s == 29 && (v = i.readInt(t, e + 1), d = 5), 32 <= s && s <= 246 && (v = s - 139, d = 1), 247 <= s && s <= 250 && (v = 256 * (s - 247) + u + 108, d = 2), 251 <= s && s <= 254 && (v = 256 * -(s - 251) - u - 108, d = 2), s == 255) throw v = i.readInt(t, e + 1) / 65535, d = 5, "unknown number";
                    if (s == 30) {
                        var y = [];
                        for(d = 1;;){
                            var m = t[e + d];
                            d++;
                            var M = m >> 4, _ = 15 & m;
                            if (M != 15 && y.push(M), _ != 15 && y.push(_), _ == 15) break;
                        }
                        for(var b = "", p = [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            ".",
                            "e",
                            "e-",
                            "reserved",
                            "-",
                            "endOfNumber"
                        ], w = 0; w < y.length; w++)b += p[y[w]];
                        v = parseFloat(b);
                    }
                    s <= 21 && (h = [
                        "version",
                        "Notice",
                        "FullName",
                        "FamilyName",
                        "Weight",
                        "FontBBox",
                        "BlueValues",
                        "OtherBlues",
                        "FamilyBlues",
                        "FamilyOtherBlues",
                        "StdHW",
                        "StdVW",
                        "escape",
                        "UniqueID",
                        "XUID",
                        "charset",
                        "Encoding",
                        "CharStrings",
                        "Private",
                        "Subrs",
                        "defaultWidthX",
                        "nominalWidthX"
                    ][s], d = 1, s == 12 && (h = [
                        "Copyright",
                        "isFixedPitch",
                        "ItalicAngle",
                        "UnderlinePosition",
                        "UnderlineThickness",
                        "PaintType",
                        "CharstringType",
                        "FontMatrix",
                        "StrokeWidth",
                        "BlueScale",
                        "BlueShift",
                        "BlueFuzz",
                        "StemSnapH",
                        "StemSnapV",
                        "ForceBold",
                        0,
                        0,
                        "LanguageGroup",
                        "ExpansionFactor",
                        "initialRandomSeed",
                        "SyntheticBase",
                        "PostScript",
                        "BaseFontName",
                        "BaseFontBlend",
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        "ROS",
                        "CIDFontVersion",
                        "CIDFontRevision",
                        "CIDFontType",
                        "CIDCount",
                        "UIDBase",
                        "FDArray",
                        "FDSelect",
                        "FontName"
                    ][u], d = 2)), h != null ? (o[h] = a.length == 1 ? a[0] : a, a = []) : a.push(v), e += d;
                }
                return o;
            }, r.cmap = {}, r.cmap.parse = function(t, e, n) {
                t = new Uint8Array(t.buffer, e, n), e = 0;
                var i = r._bin, o = {};
                i.readUshort(t, e), e += 2;
                var a = i.readUshort(t, e);
                e += 2;
                var s = [];
                o.tables = [];
                for(var u = 0; u < a; u++){
                    var d = i.readUshort(t, e);
                    e += 2;
                    var h = i.readUshort(t, e);
                    e += 2;
                    var v = i.readUint(t, e);
                    e += 4;
                    var y = "p" + d + "e" + h, m = s.indexOf(v);
                    if (m == -1) {
                        var M;
                        m = o.tables.length, s.push(v);
                        var _ = i.readUshort(t, v);
                        _ == 0 ? M = r.cmap.parse0(t, v) : _ == 4 ? M = r.cmap.parse4(t, v) : _ == 6 ? M = r.cmap.parse6(t, v) : _ == 12 ? M = r.cmap.parse12(t, v) : console.debug("unknown format: " + _, d, h, v), o.tables.push(M);
                    }
                    if (o[y] != null) throw "multiple tables for one platform+encoding";
                    o[y] = m;
                }
                return o;
            }, r.cmap.parse0 = function(t, e) {
                var n = r._bin, i = {};
                i.format = n.readUshort(t, e), e += 2;
                var o = n.readUshort(t, e);
                e += 2, n.readUshort(t, e), e += 2, i.map = [];
                for(var a = 0; a < o - 6; a++)i.map.push(t[e + a]);
                return i;
            }, r.cmap.parse4 = function(t, e) {
                var n = r._bin, i = e, o = {};
                o.format = n.readUshort(t, e), e += 2;
                var a = n.readUshort(t, e);
                e += 2, n.readUshort(t, e), e += 2;
                var s = n.readUshort(t, e);
                e += 2;
                var u = s / 2;
                o.searchRange = n.readUshort(t, e), e += 2, o.entrySelector = n.readUshort(t, e), e += 2, o.rangeShift = n.readUshort(t, e), e += 2, o.endCount = n.readUshorts(t, e, u), e += 2 * u, e += 2, o.startCount = n.readUshorts(t, e, u), e += 2 * u, o.idDelta = [];
                for(var d = 0; d < u; d++)o.idDelta.push(n.readShort(t, e)), e += 2;
                for(o.idRangeOffset = n.readUshorts(t, e, u), e += 2 * u, o.glyphIdArray = []; e < i + a;)o.glyphIdArray.push(n.readUshort(t, e)), e += 2;
                return o;
            }, r.cmap.parse6 = function(t, e) {
                var n = r._bin, i = {};
                i.format = n.readUshort(t, e), e += 2, n.readUshort(t, e), e += 2, n.readUshort(t, e), e += 2, i.firstCode = n.readUshort(t, e), e += 2;
                var o = n.readUshort(t, e);
                e += 2, i.glyphIdArray = [];
                for(var a = 0; a < o; a++)i.glyphIdArray.push(n.readUshort(t, e)), e += 2;
                return i;
            }, r.cmap.parse12 = function(t, e) {
                var n = r._bin, i = {};
                i.format = n.readUshort(t, e), e += 2, e += 2, n.readUint(t, e), e += 4, n.readUint(t, e), e += 4;
                var o = n.readUint(t, e);
                e += 4, i.groups = [];
                for(var a = 0; a < o; a++){
                    var s = e + 12 * a, u = n.readUint(t, s + 0), d = n.readUint(t, s + 4), h = n.readUint(t, s + 8);
                    i.groups.push([
                        u,
                        d,
                        h
                    ]);
                }
                return i;
            }, r.glyf = {}, r.glyf.parse = function(t, e, n, i) {
                for(var o = [], a = 0; a < i.maxp.numGlyphs; a++)o.push(null);
                return o;
            }, r.glyf._parseGlyf = function(t, e) {
                var n = r._bin, i = t._data, o = r._tabOffset(i, "glyf", t._offset) + t.loca[e];
                if (t.loca[e] == t.loca[e + 1]) return null;
                var a = {};
                if (a.noc = n.readShort(i, o), o += 2, a.xMin = n.readShort(i, o), o += 2, a.yMin = n.readShort(i, o), o += 2, a.xMax = n.readShort(i, o), o += 2, a.yMax = n.readShort(i, o), o += 2, a.xMin >= a.xMax || a.yMin >= a.yMax) return null;
                if (a.noc > 0) {
                    a.endPts = [];
                    for(var s = 0; s < a.noc; s++)a.endPts.push(n.readUshort(i, o)), o += 2;
                    var u = n.readUshort(i, o);
                    if (o += 2, i.length - o < u) return null;
                    a.instructions = n.readBytes(i, o, u), o += u;
                    var d = a.endPts[a.noc - 1] + 1;
                    for(a.flags = [], s = 0; s < d; s++){
                        var h = i[o];
                        if (o++, a.flags.push(h), (8 & h) != 0) {
                            var v = i[o];
                            o++;
                            for(var y = 0; y < v; y++)a.flags.push(h), s++;
                        }
                    }
                    for(a.xs = [], s = 0; s < d; s++){
                        var m = (2 & a.flags[s]) != 0, M = (16 & a.flags[s]) != 0;
                        m ? (a.xs.push(M ? i[o] : -i[o]), o++) : M ? a.xs.push(0) : (a.xs.push(n.readShort(i, o)), o += 2);
                    }
                    for(a.ys = [], s = 0; s < d; s++)m = (4 & a.flags[s]) != 0, M = (32 & a.flags[s]) != 0, m ? (a.ys.push(M ? i[o] : -i[o]), o++) : M ? a.ys.push(0) : (a.ys.push(n.readShort(i, o)), o += 2);
                    var _ = 0, b = 0;
                    for(s = 0; s < d; s++)_ += a.xs[s], b += a.ys[s], a.xs[s] = _, a.ys[s] = b;
                } else {
                    var p;
                    a.parts = [];
                    do {
                        p = n.readUshort(i, o), o += 2;
                        var w = {
                            m: {
                                a: 1,
                                b: 0,
                                c: 0,
                                d: 1,
                                tx: 0,
                                ty: 0
                            },
                            p1: -1,
                            p2: -1
                        };
                        if (a.parts.push(w), w.glyphIndex = n.readUshort(i, o), o += 2, 1 & p) {
                            var D = n.readShort(i, o);
                            o += 2;
                            var U = n.readShort(i, o);
                            o += 2;
                        } else D = n.readInt8(i, o), o++, U = n.readInt8(i, o), o++;
                        2 & p ? (w.m.tx = D, w.m.ty = U) : (w.p1 = D, w.p2 = U), 8 & p ? (w.m.a = w.m.d = n.readF2dot14(i, o), o += 2) : 64 & p ? (w.m.a = n.readF2dot14(i, o), o += 2, w.m.d = n.readF2dot14(i, o), o += 2) : 128 & p && (w.m.a = n.readF2dot14(i, o), o += 2, w.m.b = n.readF2dot14(i, o), o += 2, w.m.c = n.readF2dot14(i, o), o += 2, w.m.d = n.readF2dot14(i, o), o += 2);
                    }while (32 & p);
                    if (256 & p) {
                        var k = n.readUshort(i, o);
                        for(o += 2, a.instr = [], s = 0; s < k; s++)a.instr.push(i[o]), o++;
                    }
                }
                return a;
            }, r.GDEF = {}, r.GDEF.parse = function(t, e, n, i) {
                var o = e;
                e += 4;
                var a = r._bin.readUshort(t, e);
                return {
                    glyphClassDef: a === 0 ? null : r._lctf.readClassDef(t, o + a)
                };
            }, r.GPOS = {}, r.GPOS.parse = function(t, e, n, i) {
                return r._lctf.parse(t, e, n, i, r.GPOS.subt);
            }, r.GPOS.subt = function(t, e, n, i) {
                var o = r._bin, a = n, s = {};
                if (s.fmt = o.readUshort(t, n), n += 2, e == 1 || e == 2 || e == 3 || e == 7 || e == 8 && s.fmt <= 2) {
                    var u = o.readUshort(t, n);
                    n += 2, s.coverage = r._lctf.readCoverage(t, u + a);
                }
                if (e == 1 && s.fmt == 1) {
                    var d = o.readUshort(t, n);
                    n += 2, d != 0 && (s.pos = r.GPOS.readValueRecord(t, n, d));
                } else if (e == 2 && s.fmt >= 1 && s.fmt <= 2) {
                    d = o.readUshort(t, n), n += 2;
                    var h = o.readUshort(t, n);
                    n += 2;
                    var v = r._lctf.numOfOnes(d), y = r._lctf.numOfOnes(h);
                    if (s.fmt == 1) {
                        s.pairsets = [];
                        var m = o.readUshort(t, n);
                        n += 2;
                        for(var M = 0; M < m; M++){
                            var _ = a + o.readUshort(t, n);
                            n += 2;
                            var b = o.readUshort(t, _);
                            _ += 2;
                            for(var p = [], w = 0; w < b; w++){
                                var D = o.readUshort(t, _);
                                _ += 2, d != 0 && (x = r.GPOS.readValueRecord(t, _, d), _ += 2 * v), h != 0 && (F = r.GPOS.readValueRecord(t, _, h), _ += 2 * y), p.push({
                                    gid2: D,
                                    val1: x,
                                    val2: F
                                });
                            }
                            s.pairsets.push(p);
                        }
                    }
                    if (s.fmt == 2) {
                        var U = o.readUshort(t, n);
                        n += 2;
                        var k = o.readUshort(t, n);
                        n += 2;
                        var R = o.readUshort(t, n);
                        n += 2;
                        var O = o.readUshort(t, n);
                        for(n += 2, s.classDef1 = r._lctf.readClassDef(t, a + U), s.classDef2 = r._lctf.readClassDef(t, a + k), s.matrix = [], M = 0; M < R; M++){
                            var Y = [];
                            for(w = 0; w < O; w++){
                                var x = null, F = null;
                                d != 0 && (x = r.GPOS.readValueRecord(t, n, d), n += 2 * v), h != 0 && (F = r.GPOS.readValueRecord(t, n, h), n += 2 * y), Y.push({
                                    val1: x,
                                    val2: F
                                });
                            }
                            s.matrix.push(Y);
                        }
                    }
                } else if (e == 4 && s.fmt == 1) s.markCoverage = r._lctf.readCoverage(t, o.readUshort(t, n) + a), s.baseCoverage = r._lctf.readCoverage(t, o.readUshort(t, n + 2) + a), s.markClassCount = o.readUshort(t, n + 4), s.markArray = r.GPOS.readMarkArray(t, o.readUshort(t, n + 6) + a), s.baseArray = r.GPOS.readBaseArray(t, o.readUshort(t, n + 8) + a, s.markClassCount);
                else if (e == 6 && s.fmt == 1) s.mark1Coverage = r._lctf.readCoverage(t, o.readUshort(t, n) + a), s.mark2Coverage = r._lctf.readCoverage(t, o.readUshort(t, n + 2) + a), s.markClassCount = o.readUshort(t, n + 4), s.mark1Array = r.GPOS.readMarkArray(t, o.readUshort(t, n + 6) + a), s.mark2Array = r.GPOS.readBaseArray(t, o.readUshort(t, n + 8) + a, s.markClassCount);
                else {
                    if (e == 9 && s.fmt == 1) {
                        var A = o.readUshort(t, n);
                        n += 2;
                        var W = o.readUint(t, n);
                        if (n += 4, i.ltype == 9) i.ltype = A;
                        else if (i.ltype != A) throw "invalid extension substitution";
                        return r.GPOS.subt(t, i.ltype, a + W);
                    }
                    console.debug("unsupported GPOS table LookupType", e, "format", s.fmt);
                }
                return s;
            }, r.GPOS.readValueRecord = function(t, e, n) {
                var i = r._bin, o = [];
                return o.push(1 & n ? i.readShort(t, e) : 0), e += 1 & n ? 2 : 0, o.push(2 & n ? i.readShort(t, e) : 0), e += 2 & n ? 2 : 0, o.push(4 & n ? i.readShort(t, e) : 0), e += 4 & n ? 2 : 0, o.push(8 & n ? i.readShort(t, e) : 0), e += 8 & n ? 2 : 0, o;
            }, r.GPOS.readBaseArray = function(t, e, n) {
                var i = r._bin, o = [], a = e, s = i.readUshort(t, e);
                e += 2;
                for(var u = 0; u < s; u++){
                    for(var d = [], h = 0; h < n; h++)d.push(r.GPOS.readAnchorRecord(t, a + i.readUshort(t, e))), e += 2;
                    o.push(d);
                }
                return o;
            }, r.GPOS.readMarkArray = function(t, e) {
                var n = r._bin, i = [], o = e, a = n.readUshort(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = r.GPOS.readAnchorRecord(t, n.readUshort(t, e + 2) + o);
                    u.markClass = n.readUshort(t, e), i.push(u), e += 4;
                }
                return i;
            }, r.GPOS.readAnchorRecord = function(t, e) {
                var n = r._bin, i = {};
                return i.fmt = n.readUshort(t, e), i.x = n.readShort(t, e + 2), i.y = n.readShort(t, e + 4), i;
            }, r.GSUB = {}, r.GSUB.parse = function(t, e, n, i) {
                return r._lctf.parse(t, e, n, i, r.GSUB.subt);
            }, r.GSUB.subt = function(t, e, n, i) {
                var o = r._bin, a = n, s = {};
                if (s.fmt = o.readUshort(t, n), n += 2, e != 1 && e != 2 && e != 4 && e != 5 && e != 6) return null;
                if (e == 1 || e == 2 || e == 4 || e == 5 && s.fmt <= 2 || e == 6 && s.fmt <= 2) {
                    var u = o.readUshort(t, n);
                    n += 2, s.coverage = r._lctf.readCoverage(t, a + u);
                }
                if (e == 1 && s.fmt >= 1 && s.fmt <= 2) {
                    if (s.fmt == 1) s.delta = o.readShort(t, n), n += 2;
                    else if (s.fmt == 2) {
                        var d = o.readUshort(t, n);
                        n += 2, s.newg = o.readUshorts(t, n, d), n += 2 * s.newg.length;
                    }
                } else if (e == 2 && s.fmt == 1) {
                    d = o.readUshort(t, n), n += 2, s.seqs = [];
                    for(var h = 0; h < d; h++){
                        var v = o.readUshort(t, n) + a;
                        n += 2;
                        var y = o.readUshort(t, v);
                        s.seqs.push(o.readUshorts(t, v + 2, y));
                    }
                } else if (e == 4) for(s.vals = [], d = o.readUshort(t, n), n += 2, h = 0; h < d; h++){
                    var m = o.readUshort(t, n);
                    n += 2, s.vals.push(r.GSUB.readLigatureSet(t, a + m));
                }
                else if (e == 5 && s.fmt == 2) {
                    if (s.fmt == 2) {
                        var M = o.readUshort(t, n);
                        n += 2, s.cDef = r._lctf.readClassDef(t, a + M), s.scset = [];
                        var _ = o.readUshort(t, n);
                        for(n += 2, h = 0; h < _; h++){
                            var b = o.readUshort(t, n);
                            n += 2, s.scset.push(b == 0 ? null : r.GSUB.readSubClassSet(t, a + b));
                        }
                    }
                } else if (e == 6 && s.fmt == 3) {
                    if (s.fmt == 3) {
                        for(h = 0; h < 3; h++){
                            d = o.readUshort(t, n), n += 2;
                            for(var p = [], w = 0; w < d; w++)p.push(r._lctf.readCoverage(t, a + o.readUshort(t, n + 2 * w)));
                            n += 2 * d, h == 0 && (s.backCvg = p), h == 1 && (s.inptCvg = p), h == 2 && (s.ahedCvg = p);
                        }
                        d = o.readUshort(t, n), n += 2, s.lookupRec = r.GSUB.readSubstLookupRecords(t, n, d);
                    }
                } else {
                    if (e == 7 && s.fmt == 1) {
                        var D = o.readUshort(t, n);
                        n += 2;
                        var U = o.readUint(t, n);
                        if (n += 4, i.ltype == 9) i.ltype = D;
                        else if (i.ltype != D) throw "invalid extension substitution";
                        return r.GSUB.subt(t, i.ltype, a + U);
                    }
                    console.debug("unsupported GSUB table LookupType", e, "format", s.fmt);
                }
                return s;
            }, r.GSUB.readSubClassSet = function(t, e) {
                var n = r._bin.readUshort, i = e, o = [], a = n(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = n(t, e);
                    e += 2, o.push(r.GSUB.readSubClassRule(t, i + u));
                }
                return o;
            }, r.GSUB.readSubClassRule = function(t, e) {
                var n = r._bin.readUshort, i = {}, o = n(t, e), a = n(t, e += 2);
                e += 2, i.input = [];
                for(var s = 0; s < o - 1; s++)i.input.push(n(t, e)), e += 2;
                return i.substLookupRecords = r.GSUB.readSubstLookupRecords(t, e, a), i;
            }, r.GSUB.readSubstLookupRecords = function(t, e, n) {
                for(var i = r._bin.readUshort, o = [], a = 0; a < n; a++)o.push(i(t, e), i(t, e + 2)), e += 4;
                return o;
            }, r.GSUB.readChainSubClassSet = function(t, e) {
                var n = r._bin, i = e, o = [], a = n.readUshort(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = n.readUshort(t, e);
                    e += 2, o.push(r.GSUB.readChainSubClassRule(t, i + u));
                }
                return o;
            }, r.GSUB.readChainSubClassRule = function(t, e) {
                for(var n = r._bin, i = {}, o = [
                    "backtrack",
                    "input",
                    "lookahead"
                ], a = 0; a < o.length; a++){
                    var s = n.readUshort(t, e);
                    e += 2, a == 1 && s--, i[o[a]] = n.readUshorts(t, e, s), e += 2 * i[o[a]].length;
                }
                return s = n.readUshort(t, e), e += 2, i.subst = n.readUshorts(t, e, 2 * s), e += 2 * i.subst.length, i;
            }, r.GSUB.readLigatureSet = function(t, e) {
                var n = r._bin, i = e, o = [], a = n.readUshort(t, e);
                e += 2;
                for(var s = 0; s < a; s++){
                    var u = n.readUshort(t, e);
                    e += 2, o.push(r.GSUB.readLigature(t, i + u));
                }
                return o;
            }, r.GSUB.readLigature = function(t, e) {
                var n = r._bin, i = {
                    chain: []
                };
                i.nglyph = n.readUshort(t, e), e += 2;
                var o = n.readUshort(t, e);
                e += 2;
                for(var a = 0; a < o - 1; a++)i.chain.push(n.readUshort(t, e)), e += 2;
                return i;
            }, r.head = {}, r.head.parse = function(t, e, n) {
                var i = r._bin, o = {};
                return i.readFixed(t, e), e += 4, o.fontRevision = i.readFixed(t, e), e += 4, i.readUint(t, e), e += 4, i.readUint(t, e), e += 4, o.flags = i.readUshort(t, e), e += 2, o.unitsPerEm = i.readUshort(t, e), e += 2, o.created = i.readUint64(t, e), e += 8, o.modified = i.readUint64(t, e), e += 8, o.xMin = i.readShort(t, e), e += 2, o.yMin = i.readShort(t, e), e += 2, o.xMax = i.readShort(t, e), e += 2, o.yMax = i.readShort(t, e), e += 2, o.macStyle = i.readUshort(t, e), e += 2, o.lowestRecPPEM = i.readUshort(t, e), e += 2, o.fontDirectionHint = i.readShort(t, e), e += 2, o.indexToLocFormat = i.readShort(t, e), e += 2, o.glyphDataFormat = i.readShort(t, e), e += 2, o;
            }, r.hhea = {}, r.hhea.parse = function(t, e, n) {
                var i = r._bin, o = {};
                return i.readFixed(t, e), e += 4, o.ascender = i.readShort(t, e), e += 2, o.descender = i.readShort(t, e), e += 2, o.lineGap = i.readShort(t, e), e += 2, o.advanceWidthMax = i.readUshort(t, e), e += 2, o.minLeftSideBearing = i.readShort(t, e), e += 2, o.minRightSideBearing = i.readShort(t, e), e += 2, o.xMaxExtent = i.readShort(t, e), e += 2, o.caretSlopeRise = i.readShort(t, e), e += 2, o.caretSlopeRun = i.readShort(t, e), e += 2, o.caretOffset = i.readShort(t, e), e += 2, e += 8, o.metricDataFormat = i.readShort(t, e), e += 2, o.numberOfHMetrics = i.readUshort(t, e), e += 2, o;
            }, r.hmtx = {}, r.hmtx.parse = function(t, e, n, i) {
                for(var o = r._bin, a = {
                    aWidth: [],
                    lsBearing: []
                }, s = 0, u = 0, d = 0; d < i.maxp.numGlyphs; d++)d < i.hhea.numberOfHMetrics && (s = o.readUshort(t, e), e += 2, u = o.readShort(t, e), e += 2), a.aWidth.push(s), a.lsBearing.push(u);
                return a;
            }, r.kern = {}, r.kern.parse = function(t, e, n, i) {
                var o = r._bin, a = o.readUshort(t, e);
                if (e += 2, a == 1) return r.kern.parseV1(t, e - 2, n, i);
                var s = o.readUshort(t, e);
                e += 2;
                for(var u = {
                    glyph1: [],
                    rval: []
                }, d = 0; d < s; d++){
                    e += 2, n = o.readUshort(t, e), e += 2;
                    var h = o.readUshort(t, e);
                    e += 2;
                    var v = h >>> 8;
                    if ((v &= 15) != 0) throw "unknown kern table format: " + v;
                    e = r.kern.readFormat0(t, e, u);
                }
                return u;
            }, r.kern.parseV1 = function(t, e, n, i) {
                var o = r._bin;
                o.readFixed(t, e), e += 4;
                var a = o.readUint(t, e);
                e += 4;
                for(var s = {
                    glyph1: [],
                    rval: []
                }, u = 0; u < a; u++){
                    o.readUint(t, e), e += 4;
                    var d = o.readUshort(t, e);
                    e += 2, o.readUshort(t, e), e += 2;
                    var h = d >>> 8;
                    if ((h &= 15) != 0) throw "unknown kern table format: " + h;
                    e = r.kern.readFormat0(t, e, s);
                }
                return s;
            }, r.kern.readFormat0 = function(t, e, n) {
                var i = r._bin, o = -1, a = i.readUshort(t, e);
                e += 2, i.readUshort(t, e), e += 2, i.readUshort(t, e), e += 2, i.readUshort(t, e), e += 2;
                for(var s = 0; s < a; s++){
                    var u = i.readUshort(t, e);
                    e += 2;
                    var d = i.readUshort(t, e);
                    e += 2;
                    var h = i.readShort(t, e);
                    e += 2, u != o && (n.glyph1.push(u), n.rval.push({
                        glyph2: [],
                        vals: []
                    }));
                    var v = n.rval[n.rval.length - 1];
                    v.glyph2.push(d), v.vals.push(h), o = u;
                }
                return e;
            }, r.loca = {}, r.loca.parse = function(t, e, n, i) {
                var o = r._bin, a = [], s = i.head.indexToLocFormat, u = i.maxp.numGlyphs + 1;
                if (s == 0) for(var d = 0; d < u; d++)a.push(o.readUshort(t, e + (d << 1)) << 1);
                if (s == 1) for(d = 0; d < u; d++)a.push(o.readUint(t, e + (d << 2)));
                return a;
            }, r.maxp = {}, r.maxp.parse = function(t, e, n) {
                var i = r._bin, o = {}, a = i.readUint(t, e);
                return e += 4, o.numGlyphs = i.readUshort(t, e), e += 2, a == 65536 && (o.maxPoints = i.readUshort(t, e), e += 2, o.maxContours = i.readUshort(t, e), e += 2, o.maxCompositePoints = i.readUshort(t, e), e += 2, o.maxCompositeContours = i.readUshort(t, e), e += 2, o.maxZones = i.readUshort(t, e), e += 2, o.maxTwilightPoints = i.readUshort(t, e), e += 2, o.maxStorage = i.readUshort(t, e), e += 2, o.maxFunctionDefs = i.readUshort(t, e), e += 2, o.maxInstructionDefs = i.readUshort(t, e), e += 2, o.maxStackElements = i.readUshort(t, e), e += 2, o.maxSizeOfInstructions = i.readUshort(t, e), e += 2, o.maxComponentElements = i.readUshort(t, e), e += 2, o.maxComponentDepth = i.readUshort(t, e), e += 2), o;
            }, r.name = {}, r.name.parse = function(t, e, n) {
                var i = r._bin, o = {};
                i.readUshort(t, e), e += 2;
                var a = i.readUshort(t, e);
                e += 2, i.readUshort(t, e);
                for(var s, u = [
                    "copyright",
                    "fontFamily",
                    "fontSubfamily",
                    "ID",
                    "fullName",
                    "version",
                    "postScriptName",
                    "trademark",
                    "manufacturer",
                    "designer",
                    "description",
                    "urlVendor",
                    "urlDesigner",
                    "licence",
                    "licenceURL",
                    "---",
                    "typoFamilyName",
                    "typoSubfamilyName",
                    "compatibleFull",
                    "sampleText",
                    "postScriptCID",
                    "wwsFamilyName",
                    "wwsSubfamilyName",
                    "lightPalette",
                    "darkPalette"
                ], d = e += 2, h = 0; h < a; h++){
                    var v = i.readUshort(t, e);
                    e += 2;
                    var y = i.readUshort(t, e);
                    e += 2;
                    var m = i.readUshort(t, e);
                    e += 2;
                    var M = i.readUshort(t, e);
                    e += 2;
                    var _ = i.readUshort(t, e);
                    e += 2;
                    var b = i.readUshort(t, e);
                    e += 2;
                    var p, w = u[M], D = d + 12 * a + b;
                    if (v == 0) p = i.readUnicode(t, D, _ / 2);
                    else if (v == 3 && y == 0) p = i.readUnicode(t, D, _ / 2);
                    else if (y == 0) p = i.readASCII(t, D, _);
                    else if (y == 1) p = i.readUnicode(t, D, _ / 2);
                    else if (y == 3) p = i.readUnicode(t, D, _ / 2);
                    else {
                        if (v != 1) throw "unknown encoding " + y + ", platformID: " + v;
                        p = i.readASCII(t, D, _), console.debug("reading unknown MAC encoding " + y + " as ASCII");
                    }
                    var U = "p" + v + "," + m.toString(16);
                    o[U] == null && (o[U] = {}), o[U][w !== void 0 ? w : M] = p, o[U]._lang = m;
                }
                for(var k in o)if (o[k].postScriptName != null && o[k]._lang == 1033) return o[k];
                for(var k in o)if (o[k].postScriptName != null && o[k]._lang == 0) return o[k];
                for(var k in o)if (o[k].postScriptName != null && o[k]._lang == 3084) return o[k];
                for(var k in o)if (o[k].postScriptName != null) return o[k];
                for(var k in o){
                    s = k;
                    break;
                }
                return console.debug("returning name table with languageID " + o[s]._lang), o[s];
            }, r["OS/2"] = {}, r["OS/2"].parse = function(t, e, n) {
                var i = r._bin.readUshort(t, e);
                e += 2;
                var o = {};
                if (i == 0) r["OS/2"].version0(t, e, o);
                else if (i == 1) r["OS/2"].version1(t, e, o);
                else if (i == 2 || i == 3 || i == 4) r["OS/2"].version2(t, e, o);
                else {
                    if (i != 5) throw "unknown OS/2 table version: " + i;
                    r["OS/2"].version5(t, e, o);
                }
                return o;
            }, r["OS/2"].version0 = function(t, e, n) {
                var i = r._bin;
                return n.xAvgCharWidth = i.readShort(t, e), e += 2, n.usWeightClass = i.readUshort(t, e), e += 2, n.usWidthClass = i.readUshort(t, e), e += 2, n.fsType = i.readUshort(t, e), e += 2, n.ySubscriptXSize = i.readShort(t, e), e += 2, n.ySubscriptYSize = i.readShort(t, e), e += 2, n.ySubscriptXOffset = i.readShort(t, e), e += 2, n.ySubscriptYOffset = i.readShort(t, e), e += 2, n.ySuperscriptXSize = i.readShort(t, e), e += 2, n.ySuperscriptYSize = i.readShort(t, e), e += 2, n.ySuperscriptXOffset = i.readShort(t, e), e += 2, n.ySuperscriptYOffset = i.readShort(t, e), e += 2, n.yStrikeoutSize = i.readShort(t, e), e += 2, n.yStrikeoutPosition = i.readShort(t, e), e += 2, n.sFamilyClass = i.readShort(t, e), e += 2, n.panose = i.readBytes(t, e, 10), e += 10, n.ulUnicodeRange1 = i.readUint(t, e), e += 4, n.ulUnicodeRange2 = i.readUint(t, e), e += 4, n.ulUnicodeRange3 = i.readUint(t, e), e += 4, n.ulUnicodeRange4 = i.readUint(t, e), e += 4, n.achVendID = [
                    i.readInt8(t, e),
                    i.readInt8(t, e + 1),
                    i.readInt8(t, e + 2),
                    i.readInt8(t, e + 3)
                ], e += 4, n.fsSelection = i.readUshort(t, e), e += 2, n.usFirstCharIndex = i.readUshort(t, e), e += 2, n.usLastCharIndex = i.readUshort(t, e), e += 2, n.sTypoAscender = i.readShort(t, e), e += 2, n.sTypoDescender = i.readShort(t, e), e += 2, n.sTypoLineGap = i.readShort(t, e), e += 2, n.usWinAscent = i.readUshort(t, e), e += 2, n.usWinDescent = i.readUshort(t, e), e += 2;
            }, r["OS/2"].version1 = function(t, e, n) {
                var i = r._bin;
                return e = r["OS/2"].version0(t, e, n), n.ulCodePageRange1 = i.readUint(t, e), e += 4, n.ulCodePageRange2 = i.readUint(t, e), e += 4;
            }, r["OS/2"].version2 = function(t, e, n) {
                var i = r._bin;
                return e = r["OS/2"].version1(t, e, n), n.sxHeight = i.readShort(t, e), e += 2, n.sCapHeight = i.readShort(t, e), e += 2, n.usDefault = i.readUshort(t, e), e += 2, n.usBreak = i.readUshort(t, e), e += 2, n.usMaxContext = i.readUshort(t, e), e += 2;
            }, r["OS/2"].version5 = function(t, e, n) {
                var i = r._bin;
                return e = r["OS/2"].version2(t, e, n), n.usLowerOpticalPointSize = i.readUshort(t, e), e += 2, n.usUpperOpticalPointSize = i.readUshort(t, e), e += 2;
            }, r.post = {}, r.post.parse = function(t, e, n) {
                var i = r._bin, o = {};
                return o.version = i.readFixed(t, e), e += 4, o.italicAngle = i.readFixed(t, e), e += 4, o.underlinePosition = i.readShort(t, e), e += 2, o.underlineThickness = i.readShort(t, e), e += 2, o;
            }, r == null && (r = {}), r.U == null && (r.U = {}), r.U.codeToGlyph = function(t, e) {
                var n = t.cmap, i = -1;
                if (n.p0e4 != null ? i = n.p0e4 : n.p3e1 != null ? i = n.p3e1 : n.p1e0 != null ? i = n.p1e0 : n.p0e3 != null && (i = n.p0e3), i == -1) throw "no familiar platform and encoding!";
                var o = n.tables[i];
                if (o.format == 0) return e >= o.map.length ? 0 : o.map[e];
                if (o.format == 4) {
                    for(var a = -1, s = 0; s < o.endCount.length; s++)if (e <= o.endCount[s]) {
                        a = s;
                        break;
                    }
                    return a == -1 || o.startCount[a] > e ? 0 : 65535 & (o.idRangeOffset[a] != 0 ? o.glyphIdArray[e - o.startCount[a] + (o.idRangeOffset[a] >> 1) - (o.idRangeOffset.length - a)] : e + o.idDelta[a]);
                }
                if (o.format == 12) {
                    if (e > o.groups[o.groups.length - 1][1]) return 0;
                    for(s = 0; s < o.groups.length; s++){
                        var u = o.groups[s];
                        if (u[0] <= e && e <= u[1]) return u[2] + (e - u[0]);
                    }
                    return 0;
                }
                throw "unknown cmap table format " + o.format;
            }, r.U.glyphToPath = function(t, e) {
                var n = {
                    cmds: [],
                    crds: []
                };
                if (t.SVG && t.SVG.entries[e]) {
                    var i = t.SVG.entries[e];
                    return i == null ? n : (typeof i == "string" && (i = r.SVG.toPath(i), t.SVG.entries[e] = i), i);
                }
                if (t.CFF) {
                    var o = {
                        x: 0,
                        y: 0,
                        stack: [],
                        nStems: 0,
                        haveWidth: !1,
                        width: t.CFF.Private ? t.CFF.Private.defaultWidthX : 0,
                        open: !1
                    }, a = t.CFF, s = t.CFF.Private;
                    if (a.ROS) {
                        for(var u = 0; a.FDSelect[u + 2] <= e;)u += 2;
                        s = a.FDArray[a.FDSelect[u + 1]].Private;
                    }
                    r.U._drawCFF(t.CFF.CharStrings[e], o, a, s, n);
                } else t.glyf && r.U._drawGlyf(e, t, n);
                return n;
            }, r.U._drawGlyf = function(t, e, n) {
                var i = e.glyf[t];
                i == null && (i = e.glyf[t] = r.glyf._parseGlyf(e, t)), i != null && (i.noc > -1 ? r.U._simpleGlyph(i, n) : r.U._compoGlyph(i, e, n));
            }, r.U._simpleGlyph = function(t, e) {
                for(var n = 0; n < t.noc; n++){
                    for(var i = n == 0 ? 0 : t.endPts[n - 1] + 1, o = t.endPts[n], a = i; a <= o; a++){
                        var s = a == i ? o : a - 1, u = a == o ? i : a + 1, d = 1 & t.flags[a], h = 1 & t.flags[s], v = 1 & t.flags[u], y = t.xs[a], m = t.ys[a];
                        if (a == i) if (d) {
                            if (!h) {
                                r.U.P.moveTo(e, y, m);
                                continue;
                            }
                            r.U.P.moveTo(e, t.xs[s], t.ys[s]);
                        } else h ? r.U.P.moveTo(e, t.xs[s], t.ys[s]) : r.U.P.moveTo(e, (t.xs[s] + y) / 2, (t.ys[s] + m) / 2);
                        d ? h && r.U.P.lineTo(e, y, m) : v ? r.U.P.qcurveTo(e, y, m, t.xs[u], t.ys[u]) : r.U.P.qcurveTo(e, y, m, (y + t.xs[u]) / 2, (m + t.ys[u]) / 2);
                    }
                    r.U.P.closePath(e);
                }
            }, r.U._compoGlyph = function(t, e, n) {
                for(var i = 0; i < t.parts.length; i++){
                    var o = {
                        cmds: [],
                        crds: []
                    }, a = t.parts[i];
                    r.U._drawGlyf(a.glyphIndex, e, o);
                    for(var s = a.m, u = 0; u < o.crds.length; u += 2){
                        var d = o.crds[u], h = o.crds[u + 1];
                        n.crds.push(d * s.a + h * s.b + s.tx), n.crds.push(d * s.c + h * s.d + s.ty);
                    }
                    for(u = 0; u < o.cmds.length; u++)n.cmds.push(o.cmds[u]);
                }
            }, r.U._getGlyphClass = function(t, e) {
                var n = r._lctf.getInterval(e, t);
                return n == -1 ? 0 : e[n + 2];
            }, r.U._applySubs = function(t, e, n, i) {
                for(var o = t.length - e - 1, a = 0; a < n.tabs.length; a++)if (n.tabs[a] != null) {
                    var s, u = n.tabs[a];
                    if (!u.coverage || (s = r._lctf.coverageIndex(u.coverage, t[e])) != -1) {
                        if (n.ltype == 1) t[e], u.fmt == 1 ? t[e] = t[e] + u.delta : t[e] = u.newg[s];
                        else if (n.ltype == 4) for(var d = u.vals[s], h = 0; h < d.length; h++){
                            var v = d[h], y = v.chain.length;
                            if (!(y > o)) {
                                for(var m = !0, M = 0, _ = 0; _ < y; _++){
                                    for(; t[e + M + (1 + _)] == -1;)M++;
                                    v.chain[_] != t[e + M + (1 + _)] && (m = !1);
                                }
                                if (m) {
                                    for(t[e] = v.nglyph, _ = 0; _ < y + M; _++)t[e + _ + 1] = -1;
                                    break;
                                }
                            }
                        }
                        else if (n.ltype == 5 && u.fmt == 2) for(var b = r._lctf.getInterval(u.cDef, t[e]), p = u.cDef[b + 2], w = u.scset[p], D = 0; D < w.length; D++){
                            var U = w[D], k = U.input;
                            if (!(k.length > o)) {
                                for(m = !0, _ = 0; _ < k.length; _++){
                                    var R = r._lctf.getInterval(u.cDef, t[e + 1 + _]);
                                    if (b == -1 && u.cDef[R + 2] != k[_]) {
                                        m = !1;
                                        break;
                                    }
                                }
                                if (m) {
                                    var O = U.substLookupRecords;
                                    for(h = 0; h < O.length; h += 2)O[h], O[h + 1];
                                }
                            }
                        }
                        else if (n.ltype == 6 && u.fmt == 3) {
                            if (!r.U._glsCovered(t, u.backCvg, e - u.backCvg.length) || !r.U._glsCovered(t, u.inptCvg, e) || !r.U._glsCovered(t, u.ahedCvg, e + u.inptCvg.length)) continue;
                            var Y = u.lookupRec;
                            for(D = 0; D < Y.length; D += 2){
                                b = Y[D];
                                var x = i[Y[D + 1]];
                                r.U._applySubs(t, e + b, x, i);
                            }
                        }
                    }
                }
            }, r.U._glsCovered = function(t, e, n) {
                for(var i = 0; i < e.length; i++)if (r._lctf.coverageIndex(e[i], t[n + i]) == -1) return !1;
                return !0;
            }, r.U.glyphsToPath = function(t, e, n) {
                for(var i = {
                    cmds: [],
                    crds: []
                }, o = 0, a = 0; a < e.length; a++){
                    var s = e[a];
                    if (s != -1) {
                        for(var u = a < e.length - 1 && e[a + 1] != -1 ? e[a + 1] : 0, d = r.U.glyphToPath(t, s), h = 0; h < d.crds.length; h += 2)i.crds.push(d.crds[h] + o), i.crds.push(d.crds[h + 1]);
                        for(n && i.cmds.push(n), h = 0; h < d.cmds.length; h++)i.cmds.push(d.cmds[h]);
                        n && i.cmds.push("X"), o += t.hmtx.aWidth[s], a < e.length - 1 && (o += r.U.getPairAdjustment(t, s, u));
                    }
                }
                return i;
            }, r.U.P = {}, r.U.P.moveTo = function(t, e, n) {
                t.cmds.push("M"), t.crds.push(e, n);
            }, r.U.P.lineTo = function(t, e, n) {
                t.cmds.push("L"), t.crds.push(e, n);
            }, r.U.P.curveTo = function(t, e, n, i, o, a, s) {
                t.cmds.push("C"), t.crds.push(e, n, i, o, a, s);
            }, r.U.P.qcurveTo = function(t, e, n, i, o) {
                t.cmds.push("Q"), t.crds.push(e, n, i, o);
            }, r.U.P.closePath = function(t) {
                t.cmds.push("Z");
            }, r.U._drawCFF = function(t, e, n, i, o) {
                for(var a = e.stack, s = e.nStems, u = e.haveWidth, d = e.width, h = e.open, v = 0, y = e.x, m = e.y, M = 0, _ = 0, b = 0, p = 0, w = 0, D = 0, U = 0, k = 0, R = 0, O = 0, Y = {
                    val: 0,
                    size: 0
                }; v < t.length;){
                    r.CFF.getCharString(t, v, Y);
                    var x = Y.val;
                    if (v += Y.size, x == "o1" || x == "o18") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                    else if (x == "o3" || x == "o23") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                    else if (x == "o4") a.length > 1 && !u && (d = a.shift() + i.nominalWidthX, u = !0), h && r.U.P.closePath(o), m += a.pop(), r.U.P.moveTo(o, y, m), h = !0;
                    else if (x == "o5") for(; a.length > 0;)y += a.shift(), m += a.shift(), r.U.P.lineTo(o, y, m);
                    else if (x == "o6" || x == "o7") for(var F = a.length, A = x == "o6", W = 0; W < F; W++){
                        var V = a.shift();
                        A ? y += V : m += V, A = !A, r.U.P.lineTo(o, y, m);
                    }
                    else if (x == "o8" || x == "o24") {
                        F = a.length;
                        for(var J = 0; J + 6 <= F;)M = y + a.shift(), _ = m + a.shift(), b = M + a.shift(), p = _ + a.shift(), y = b + a.shift(), m = p + a.shift(), r.U.P.curveTo(o, M, _, b, p, y, m), J += 6;
                        x == "o24" && (y += a.shift(), m += a.shift(), r.U.P.lineTo(o, y, m));
                    } else {
                        if (x == "o11") break;
                        if (x == "o1234" || x == "o1235" || x == "o1236" || x == "o1237") x == "o1234" && (_ = m, b = (M = y + a.shift()) + a.shift(), O = p = _ + a.shift(), D = p, k = m, y = (U = (w = (R = b + a.shift()) + a.shift()) + a.shift()) + a.shift(), r.U.P.curveTo(o, M, _, b, p, R, O), r.U.P.curveTo(o, w, D, U, k, y, m)), x == "o1235" && (M = y + a.shift(), _ = m + a.shift(), b = M + a.shift(), p = _ + a.shift(), R = b + a.shift(), O = p + a.shift(), w = R + a.shift(), D = O + a.shift(), U = w + a.shift(), k = D + a.shift(), y = U + a.shift(), m = k + a.shift(), a.shift(), r.U.P.curveTo(o, M, _, b, p, R, O), r.U.P.curveTo(o, w, D, U, k, y, m)), x == "o1236" && (M = y + a.shift(), _ = m + a.shift(), b = M + a.shift(), O = p = _ + a.shift(), D = p, U = (w = (R = b + a.shift()) + a.shift()) + a.shift(), k = D + a.shift(), y = U + a.shift(), r.U.P.curveTo(o, M, _, b, p, R, O), r.U.P.curveTo(o, w, D, U, k, y, m)), x == "o1237" && (M = y + a.shift(), _ = m + a.shift(), b = M + a.shift(), p = _ + a.shift(), R = b + a.shift(), O = p + a.shift(), w = R + a.shift(), D = O + a.shift(), U = w + a.shift(), k = D + a.shift(), Math.abs(U - y) > Math.abs(k - m) ? y = U + a.shift() : m = k + a.shift(), r.U.P.curveTo(o, M, _, b, p, R, O), r.U.P.curveTo(o, w, D, U, k, y, m));
                        else if (x == "o14") {
                            if (a.length > 0 && !u && (d = a.shift() + n.nominalWidthX, u = !0), a.length == 4) {
                                var oe = a.shift(), z = a.shift(), P = a.shift(), g = a.shift(), S = r.CFF.glyphBySE(n, P), E = r.CFF.glyphBySE(n, g);
                                r.U._drawCFF(n.CharStrings[S], e, n, i, o), e.x = oe, e.y = z, r.U._drawCFF(n.CharStrings[E], e, n, i, o);
                            }
                            h && (r.U.P.closePath(o), h = !1);
                        } else if (x == "o19" || x == "o20") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0, v += s + 7 >> 3;
                        else if (x == "o21") a.length > 2 && !u && (d = a.shift() + i.nominalWidthX, u = !0), m += a.pop(), y += a.pop(), h && r.U.P.closePath(o), r.U.P.moveTo(o, y, m), h = !0;
                        else if (x == "o22") a.length > 1 && !u && (d = a.shift() + i.nominalWidthX, u = !0), y += a.pop(), h && r.U.P.closePath(o), r.U.P.moveTo(o, y, m), h = !0;
                        else if (x == "o25") {
                            for(; a.length > 6;)y += a.shift(), m += a.shift(), r.U.P.lineTo(o, y, m);
                            M = y + a.shift(), _ = m + a.shift(), b = M + a.shift(), p = _ + a.shift(), y = b + a.shift(), m = p + a.shift(), r.U.P.curveTo(o, M, _, b, p, y, m);
                        } else if (x == "o26") for(a.length % 2 && (y += a.shift()); a.length > 0;)M = y, _ = m + a.shift(), y = b = M + a.shift(), m = (p = _ + a.shift()) + a.shift(), r.U.P.curveTo(o, M, _, b, p, y, m);
                        else if (x == "o27") for(a.length % 2 && (m += a.shift()); a.length > 0;)_ = m, b = (M = y + a.shift()) + a.shift(), p = _ + a.shift(), y = b + a.shift(), m = p, r.U.P.curveTo(o, M, _, b, p, y, m);
                        else if (x == "o10" || x == "o29") {
                            var C = x == "o10" ? i : n;
                            if (a.length == 0) console.debug("error: empty stack");
                            else {
                                var T = a.pop(), N = C.Subrs[T + C.Bias];
                                e.x = y, e.y = m, e.nStems = s, e.haveWidth = u, e.width = d, e.open = h, r.U._drawCFF(N, e, n, i, o), y = e.x, m = e.y, s = e.nStems, u = e.haveWidth, d = e.width, h = e.open;
                            }
                        } else if (x == "o30" || x == "o31") {
                            var L = a.length, G = (J = 0, x == "o31");
                            for(J += L - (F = -3 & L); J < F;)G ? (_ = m, b = (M = y + a.shift()) + a.shift(), m = (p = _ + a.shift()) + a.shift(), F - J == 5 ? (y = b + a.shift(), J++) : y = b, G = !1) : (M = y, _ = m + a.shift(), b = M + a.shift(), p = _ + a.shift(), y = b + a.shift(), F - J == 5 ? (m = p + a.shift(), J++) : m = p, G = !0), r.U.P.curveTo(o, M, _, b, p, y, m), J += 4;
                        } else {
                            if ((x + "").charAt(0) == "o") throw console.debug("Unknown operation: " + x, t), x;
                            a.push(x);
                        }
                    }
                }
                e.x = y, e.y = m, e.nStems = s, e.haveWidth = u, e.width = d, e.open = h;
            };
            var c = r, f = {
                Typr: c
            };
            return l.Typr = c, l.default = f, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({}).Typr;
    }
    function ki() {
        return (function(l) {
            var r = Uint8Array, c = Uint16Array, f = Uint32Array, t = new r([
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                2,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                4,
                5,
                5,
                5,
                5,
                0,
                0,
                0,
                0
            ]), e = new r([
                0,
                0,
                0,
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                4,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                8,
                8,
                9,
                9,
                10,
                10,
                11,
                11,
                12,
                12,
                13,
                13,
                0,
                0
            ]), n = new r([
                16,
                17,
                18,
                0,
                8,
                7,
                9,
                6,
                10,
                5,
                11,
                4,
                12,
                3,
                13,
                2,
                14,
                1,
                15
            ]), i = function(x, F) {
                for(var A = new c(31), W = 0; W < 31; ++W)A[W] = F += 1 << x[W - 1];
                var V = new f(A[30]);
                for(W = 1; W < 30; ++W)for(var J = A[W]; J < A[W + 1]; ++J)V[J] = J - A[W] << 5 | W;
                return [
                    A,
                    V
                ];
            }, o = i(t, 2), a = o[0], s = o[1];
            a[28] = 258, s[258] = 28;
            for(var u = i(e, 0)[0], d = new c(32768), h = 0; h < 32768; ++h){
                var v = (43690 & h) >>> 1 | (21845 & h) << 1;
                v = (61680 & (v = (52428 & v) >>> 2 | (13107 & v) << 2)) >>> 4 | (3855 & v) << 4, d[h] = ((65280 & v) >>> 8 | (255 & v) << 8) >>> 1;
            }
            var y = function(x, F, A) {
                for(var W = x.length, V = 0, J = new c(F); V < W; ++V)++J[x[V] - 1];
                var oe, z = new c(F);
                for(V = 0; V < F; ++V)z[V] = z[V - 1] + J[V - 1] << 1;
                {
                    oe = new c(1 << F);
                    var P = 15 - F;
                    for(V = 0; V < W; ++V)if (x[V]) for(var g = V << 4 | x[V], S = F - x[V], E = z[x[V] - 1]++ << S, C = E | (1 << S) - 1; E <= C; ++E)oe[d[E] >>> P] = g;
                }
                return oe;
            }, m = new r(288);
            for(h = 0; h < 144; ++h)m[h] = 8;
            for(h = 144; h < 256; ++h)m[h] = 9;
            for(h = 256; h < 280; ++h)m[h] = 7;
            for(h = 280; h < 288; ++h)m[h] = 8;
            var M = new r(32);
            for(h = 0; h < 32; ++h)M[h] = 5;
            var _ = y(m, 9), b = y(M, 5), p = function(x) {
                for(var F = x[0], A = 1; A < x.length; ++A)x[A] > F && (F = x[A]);
                return F;
            }, w = function(x, F, A) {
                var W = F / 8 | 0;
                return (x[W] | x[W + 1] << 8) >> (7 & F) & A;
            }, D = function(x, F) {
                var A = F / 8 | 0;
                return (x[A] | x[A + 1] << 8 | x[A + 2] << 16) >> (7 & F);
            }, U = [
                "unexpected EOF",
                "invalid block type",
                "invalid length/literal",
                "invalid distance",
                "stream finished",
                "no stream handler",
                ,
                "no callback",
                "invalid UTF-8 data",
                "extra field too long",
                "date not in range 1980-2099",
                "filename too long",
                "stream finishing",
                "invalid zip data"
            ], k = function(x, F, A) {
                var W = new Error(F || U[x]);
                if (W.code = x, Error.captureStackTrace && Error.captureStackTrace(W, k), !A) throw W;
                return W;
            }, R = function(x, F, A) {
                var W = x.length;
                if (!W || A && !A.l && W < 5) return F || new r(0);
                var V = !F || A, J = !A || A.i;
                A || (A = {}), F || (F = new r(3 * W));
                var oe, z = function(ce) {
                    var Me = F.length;
                    if (ce > Me) {
                        var ke = new r(Math.max(2 * Me, ce));
                        ke.set(F), F = ke;
                    }
                }, P = A.f || 0, g = A.p || 0, S = A.b || 0, E = A.l, C = A.d, T = A.m, N = A.n, L = 8 * W;
                do {
                    if (!E) {
                        A.f = P = w(x, g, 1);
                        var G = w(x, g + 1, 3);
                        if (g += 3, !G) {
                            var Q = x[(te = ((oe = g) / 8 | 0) + (7 & oe && 1) + 4) - 4] | x[te - 3] << 8, K = te + Q;
                            if (K > W) {
                                J && k(0);
                                break;
                            }
                            V && z(S + Q), F.set(x.subarray(te, K), S), A.b = S += Q, A.p = g = 8 * K;
                            continue;
                        }
                        if (G == 1) E = _, C = b, T = 9, N = 5;
                        else if (G == 2) {
                            var B = w(x, g, 31) + 257, j = w(x, g + 10, 15) + 4, ue = B + w(x, g + 5, 31) + 1;
                            g += 14;
                            for(var fe = new r(ue), q = new r(19), ie = 0; ie < j; ++ie)q[n[ie]] = w(x, g + 3 * ie, 7);
                            g += 3 * j;
                            var ne = p(q), H = (1 << ne) - 1, re = y(q, ne);
                            for(ie = 0; ie < ue;){
                                var te, I = re[w(x, g, H)];
                                if (g += 15 & I, (te = I >>> 4) < 16) fe[ie++] = te;
                                else {
                                    var pe = 0, $ = 0;
                                    for(te == 16 ? ($ = 3 + w(x, g, 3), g += 2, pe = fe[ie - 1]) : te == 17 ? ($ = 3 + w(x, g, 7), g += 3) : te == 18 && ($ = 11 + w(x, g, 127), g += 7); $--;)fe[ie++] = pe;
                                }
                            }
                            var ae = fe.subarray(0, B), Z = fe.subarray(B);
                            T = p(ae), N = p(Z), E = y(ae, T), C = y(Z, N);
                        } else k(1);
                        if (g > L) {
                            J && k(0);
                            break;
                        }
                    }
                    V && z(S + 131072);
                    for(var Se = (1 << T) - 1, ee = (1 << N) - 1, se = g;; se = g){
                        var de = (pe = E[D(x, g) & Se]) >>> 4;
                        if ((g += 15 & pe) > L) {
                            J && k(0);
                            break;
                        }
                        if (pe || k(2), de < 256) F[S++] = de;
                        else {
                            if (de == 256) {
                                se = g, E = null;
                                break;
                            }
                            var ve = de - 254;
                            if (de > 264) {
                                var Ue = t[ie = de - 257];
                                ve = w(x, g, (1 << Ue) - 1) + a[ie], g += Ue;
                            }
                            var De = C[D(x, g) & ee], ye = De >>> 4;
                            if (De || k(3), g += 15 & De, Z = u[ye], ye > 3 && (Ue = e[ye], Z += D(x, g) & (1 << Ue) - 1, g += Ue), g > L) {
                                J && k(0);
                                break;
                            }
                            V && z(S + 131072);
                            for(var be = S + ve; S < be; S += 4)F[S] = F[S - Z], F[S + 1] = F[S + 1 - Z], F[S + 2] = F[S + 2 - Z], F[S + 3] = F[S + 3 - Z];
                            S = be;
                        }
                    }
                    A.l = E, A.p = se, A.b = S, E && (P = 1, A.m = T, A.d = C, A.n = N);
                }while (!P);
                return S == F.length ? F : (function(ce, Me, ke) {
                    (ke == null || ke > ce.length) && (ke = ce.length);
                    var je = new (ce instanceof c ? c : ce instanceof f ? f : r)(ke - Me);
                    return je.set(ce.subarray(Me, ke)), je;
                })(F, 0, S);
            }, O = new r(0), Y = typeof TextDecoder < "u" && new TextDecoder;
            try {
                Y.decode(O, {
                    stream: !0
                });
            } catch  {}
            return l.convert_streams = function(x) {
                var F = new DataView(x), A = 0;
                function W() {
                    var B = F.getUint16(A);
                    return A += 2, B;
                }
                function V() {
                    var B = F.getUint32(A);
                    return A += 4, B;
                }
                function J(B) {
                    Q.setUint16(K, B), K += 2;
                }
                function oe(B) {
                    Q.setUint32(K, B), K += 4;
                }
                for(var z = {
                    signature: V(),
                    flavor: V(),
                    length: V(),
                    numTables: W(),
                    reserved: W(),
                    totalSfntSize: V(),
                    majorVersion: W(),
                    minorVersion: W(),
                    metaOffset: V(),
                    metaLength: V(),
                    metaOrigLength: V(),
                    privOffset: V(),
                    privLength: V()
                }, P = 0; Math.pow(2, P) <= z.numTables;)P++;
                P--;
                for(var g = 16 * Math.pow(2, P), S = 16 * z.numTables - g, E = 12, C = [], T = 0; T < z.numTables; T++)C.push({
                    tag: V(),
                    offset: V(),
                    compLength: V(),
                    origLength: V(),
                    origChecksum: V()
                }), E += 16;
                var N, L = new Uint8Array(12 + 16 * C.length + C.reduce((function(B, j) {
                    return B + j.origLength + 4;
                }), 0)), G = L.buffer, Q = new DataView(G), K = 0;
                return oe(z.flavor), J(z.numTables), J(g), J(P), J(S), C.forEach((function(B) {
                    oe(B.tag), oe(B.origChecksum), oe(E), oe(B.origLength), B.outOffset = E, (E += B.origLength) % 4 != 0 && (E += 4 - E % 4);
                })), C.forEach((function(B) {
                    var j, ue = x.slice(B.offset, B.offset + B.compLength);
                    if (B.compLength != B.origLength) {
                        var fe = new Uint8Array(B.origLength);
                        j = new Uint8Array(ue, 2), R(j, fe);
                    } else fe = new Uint8Array(ue);
                    L.set(fe, B.outOffset);
                    var q = 0;
                    (E = B.outOffset + B.origLength) % 4 != 0 && (q = 4 - E % 4), L.set(new Uint8Array(q).buffer, B.outOffset + B.origLength), N = E + q;
                })), G.slice(0, N);
            }, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({}).convert_streams;
    }
    function Ci(l, r) {
        const c = {
            M: 2,
            L: 2,
            Q: 4,
            C: 6,
            Z: 0
        }, f = {
            C: "18g,ca,368,1kz",
            D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",
            R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",
            L: "x9u,jff,a,fd,jv",
            T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"
        }, t = 1, e = 2, n = 4, i = 8, o = 16, a = 32;
        let s;
        function u(U) {
            if (!s) {
                const k = {
                    R: e,
                    L: t,
                    D: n,
                    C: o,
                    U: a,
                    T: i
                };
                s = new Map;
                for(let R in f){
                    let O = 0;
                    f[R].split(",").forEach((Y)=>{
                        let [x, F] = Y.split("+");
                        x = parseInt(x, 36), F = F ? parseInt(F, 36) : 0, s.set(O += x, k[R]);
                        for(let A = F; A--;)s.set(++O, k[R]);
                    });
                }
            }
            return s.get(U) || a;
        }
        const d = 1, h = 2, v = 3, y = 4, m = [
            null,
            "isol",
            "init",
            "fina",
            "medi"
        ];
        function M(U) {
            const k = new Uint8Array(U.length);
            let R = a, O = d, Y = -1;
            for(let x = 0; x < U.length; x++){
                const F = U.codePointAt(x);
                let A = u(F) | 0, W = d;
                A & i || (R & (t | n | o) ? A & (e | n | o) ? (W = v, (O === d || O === v) && k[Y]++) : A & (t | a) && (O === h || O === y) && k[Y]-- : R & (e | a) && (O === h || O === y) && k[Y]--, O = k[x] = W, R = A, Y = x, F > 65535 && x++);
            }
            return k;
        }
        function _(U, k) {
            const R = [];
            for(let Y = 0; Y < k.length; Y++){
                const x = k.codePointAt(Y);
                x > 65535 && Y++, R.push(l.U.codeToGlyph(U, x));
            }
            const O = U.GSUB;
            if (O) {
                const { lookupList: Y, featureList: x } = O;
                let F;
                const A = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, W = [];
                x.forEach((V)=>{
                    if (A.test(V.tag)) for(let J = 0; J < V.tab.length; J++){
                        if (W[V.tab[J]]) continue;
                        W[V.tab[J]] = !0;
                        const oe = Y[V.tab[J]], z = /^(isol|init|fina|medi)$/.test(V.tag);
                        z && !F && (F = M(k));
                        for(let P = 0; P < R.length; P++)(!F || !z || m[F[P]] === V.tag) && l.U._applySubs(R, P, oe, Y);
                    }
                });
            }
            return R;
        }
        function b(U, k) {
            const R = new Int16Array(k.length * 3);
            let O = 0;
            for(; O < k.length; O++){
                const A = k[O];
                if (A === -1) continue;
                R[O * 3 + 2] = U.hmtx.aWidth[A];
                const W = U.GPOS;
                if (W) {
                    const V = W.lookupList;
                    for(let J = 0; J < V.length; J++){
                        const oe = V[J];
                        for(let z = 0; z < oe.tabs.length; z++){
                            const P = oe.tabs[z];
                            if (oe.ltype === 1) {
                                if (l._lctf.coverageIndex(P.coverage, A) !== -1 && P.pos) {
                                    F(P.pos, O);
                                    break;
                                }
                            } else if (oe.ltype === 2) {
                                let g = null, S = Y();
                                if (S !== -1) {
                                    const E = l._lctf.coverageIndex(P.coverage, k[S]);
                                    if (E !== -1) {
                                        if (P.fmt === 1) {
                                            const C = P.pairsets[E];
                                            for(let T = 0; T < C.length; T++)C[T].gid2 === A && (g = C[T]);
                                        } else if (P.fmt === 2) {
                                            const C = l.U._getGlyphClass(k[S], P.classDef1), T = l.U._getGlyphClass(A, P.classDef2);
                                            g = P.matrix[C][T];
                                        }
                                        if (g) {
                                            g.val1 && F(g.val1, S), g.val2 && F(g.val2, O);
                                            break;
                                        }
                                    }
                                }
                            } else if (oe.ltype === 4) {
                                const g = l._lctf.coverageIndex(P.markCoverage, A);
                                if (g !== -1) {
                                    const S = Y(x), E = S === -1 ? -1 : l._lctf.coverageIndex(P.baseCoverage, k[S]);
                                    if (E !== -1) {
                                        const C = P.markArray[g], T = P.baseArray[E][C.markClass];
                                        R[O * 3] = T.x - C.x + R[S * 3] - R[S * 3 + 2], R[O * 3 + 1] = T.y - C.y + R[S * 3 + 1];
                                        break;
                                    }
                                }
                            } else if (oe.ltype === 6) {
                                const g = l._lctf.coverageIndex(P.mark1Coverage, A);
                                if (g !== -1) {
                                    const S = Y();
                                    if (S !== -1) {
                                        const E = k[S];
                                        if (p(U, E) === 3) {
                                            const C = l._lctf.coverageIndex(P.mark2Coverage, E);
                                            if (C !== -1) {
                                                const T = P.mark1Array[g], N = P.mark2Array[C][T.markClass];
                                                R[O * 3] = N.x - T.x + R[S * 3] - R[S * 3 + 2], R[O * 3 + 1] = N.y - T.y + R[S * 3 + 1];
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (U.kern && !U.cff) {
                    const V = Y();
                    if (V !== -1) {
                        const J = U.kern.glyph1.indexOf(k[V]);
                        if (J !== -1) {
                            const oe = U.kern.rval[J].glyph2.indexOf(A);
                            oe !== -1 && (R[V * 3 + 2] += U.kern.rval[J].vals[oe]);
                        }
                    }
                }
            }
            return R;
            function Y(A) {
                for(let W = O - 1; W >= 0; W--)if (k[W] !== -1 && (!A || A(k[W]))) return W;
                return -1;
            }
            function x(A) {
                return p(U, A) === 1;
            }
            function F(A, W) {
                for(let V = 0; V < 3; V++)R[W * 3 + V] += A[V] || 0;
            }
        }
        function p(U, k) {
            const R = U.GDEF && U.GDEF.glyphClassDef;
            return R ? l.U._getGlyphClass(k, R) : 0;
        }
        function w(...U) {
            for(let k = 0; k < U.length; k++)if (typeof U[k] == "number") return U[k];
        }
        function D(U) {
            const k = Object.create(null), R = U["OS/2"], O = U.hhea, Y = U.head.unitsPerEm, x = w(R && R.sTypoAscender, O && O.ascender, Y), F = {
                unitsPerEm: Y,
                ascender: x,
                descender: w(R && R.sTypoDescender, O && O.descender, 0),
                capHeight: w(R && R.sCapHeight, x),
                xHeight: w(R && R.sxHeight, x),
                lineGap: w(R && R.sTypoLineGap, O && O.lineGap),
                supportsCodePoint (A) {
                    return l.U.codeToGlyph(U, A) > 0;
                },
                forEachGlyph (A, W, V, J) {
                    let oe = 0;
                    const z = 1 / F.unitsPerEm * W, P = _(U, A);
                    let g = 0;
                    const S = b(U, P);
                    return P.forEach((E, C)=>{
                        if (E !== -1) {
                            let T = k[E];
                            if (!T) {
                                const { cmds: N, crds: L } = l.U.glyphToPath(U, E);
                                let G = "", Q = 0;
                                for(let fe = 0, q = N.length; fe < q; fe++){
                                    const ie = c[N[fe]];
                                    G += N[fe];
                                    for(let ne = 1; ne <= ie; ne++)G += (ne > 1 ? "," : "") + L[Q++];
                                }
                                let K, B, j, ue;
                                if (L.length) {
                                    K = B = 1 / 0, j = ue = -1 / 0;
                                    for(let fe = 0, q = L.length; fe < q; fe += 2){
                                        let ie = L[fe], ne = L[fe + 1];
                                        ie < K && (K = ie), ne < B && (B = ne), ie > j && (j = ie), ne > ue && (ue = ne);
                                    }
                                } else K = j = B = ue = 0;
                                T = k[E] = {
                                    index: E,
                                    advanceWidth: U.hmtx.aWidth[E],
                                    xMin: K,
                                    yMin: B,
                                    xMax: j,
                                    yMax: ue,
                                    path: G
                                };
                            }
                            J.call(null, T, oe + S[C * 3] * z, S[C * 3 + 1] * z, g), oe += S[C * 3 + 2] * z, V && (oe += V * W);
                        }
                        g += A.codePointAt(g) > 65535 ? 2 : 1;
                    }), oe;
                }
            };
            return F;
        }
        return function(k) {
            const R = new Uint8Array(k, 0, 4), O = l._bin.readASCII(R, 0, 4);
            if (O === "wOFF") k = r(k);
            else if (O === "wOF2") throw new Error("woff2 fonts not supported");
            return D(l.parse(k)[0]);
        };
    }
    const Ai = wt({
        name: "Typr Font Parser",
        dependencies: [
            Ei,
            ki,
            Ci
        ],
        init (l, r, c) {
            const f = l(), t = r();
            return c(f, t);
        }
    });
    function Di() {
        return (function(l) {
            var r = function() {
                this.buckets = new Map;
            };
            r.prototype.add = function(b) {
                var p = b >> 5;
                this.buckets.set(p, (this.buckets.get(p) || 0) | 1 << (31 & b));
            }, r.prototype.has = function(b) {
                var p = this.buckets.get(b >> 5);
                return p !== void 0 && (p & 1 << (31 & b)) != 0;
            }, r.prototype.serialize = function() {
                var b = [];
                return this.buckets.forEach((function(p, w) {
                    b.push((+w).toString(36) + ":" + p.toString(36));
                })), b.join(",");
            }, r.prototype.deserialize = function(b) {
                var p = this;
                this.buckets.clear(), b.split(",").forEach((function(w) {
                    var D = w.split(":");
                    p.buckets.set(parseInt(D[0], 36), parseInt(D[1], 36));
                }));
            };
            var c = Math.pow(2, 8), f = c - 1, t = ~f;
            function e(b) {
                var p = (function(D) {
                    return D & t;
                })(b).toString(16), w = (function(D) {
                    return (D & t) + c - 1;
                })(b).toString(16);
                return "codepoint-index/plane" + (b >> 16) + "/" + p + "-" + w + ".json";
            }
            function n(b, p) {
                var w = b & f, D = p.codePointAt(w / 6 | 0);
                return ((D = (D || 48) - 48) & 1 << w % 6) != 0;
            }
            function i(b, p) {
                var w;
                (w = b, w.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(D) {
                    return D.split("-").map((function(U) {
                        return parseInt(U.trim(), 16);
                    }));
                }))).forEach((function(D) {
                    var U = D[0], k = D[1];
                    k === void 0 && (k = U), p(U, k);
                }));
            }
            function o(b, p) {
                i(b, (function(w, D) {
                    for(var U = w; U <= D; U++)p(U);
                }));
            }
            var a = {}, s = {}, u = new WeakMap, d = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
            function h(b) {
                var p = u.get(b);
                return p || (p = new r, o(b.ranges, (function(w) {
                    return p.add(w);
                })), u.set(b, p)), p;
            }
            var v, y = new Map;
            function m(b, p, w) {
                return b[p] ? p : b[w] ? w : (function(D) {
                    for(var U in D)return U;
                })(b);
            }
            function M(b, p) {
                var w = p;
                if (!b.includes(w)) {
                    w = 1 / 0;
                    for(var D = 0; D < b.length; D++)Math.abs(b[D] - p) < Math.abs(w - p) && (w = b[D]);
                }
                return w;
            }
            function _(b) {
                return v || (v = new Set, o("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(p) {
                    v.add(p);
                }))), v.has(b);
            }
            return l.CodePointSet = r, l.clearCache = function() {
                a = {}, s = {};
            }, l.getFontsForString = function(b, p) {
                p === void 0 && (p = {});
                var w, D = p.lang;
                D === void 0 && (D = /\p{Script=Hangul}/u.test(w = b) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(w) ? "ja" : "en");
                var U = p.category;
                U === void 0 && (U = "sans-serif");
                var k = p.style;
                k === void 0 && (k = "normal");
                var R = p.weight;
                R === void 0 && (R = 400);
                var O = (p.dataUrl || d).replace(/\/$/g, ""), Y = new Map, x = new Uint8Array(b.length), F = {}, A = {}, W = new Array(b.length), V = new Map, J = !1;
                function oe(g) {
                    var S = y.get(g);
                    return S || (S = fetch(O + "/" + g).then((function(E) {
                        if (!E.ok) throw new Error(E.statusText);
                        return E.json().then((function(C) {
                            if (!Array.isArray(C) || C[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + C[0]);
                            return C[1];
                        }));
                    })).catch((function(E) {
                        if (O !== d) return J || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + O + '", trying default CDN. ' + E.message), J = !0), O = d, y.delete(g), oe(g);
                        throw E;
                    })), y.set(g, S)), S;
                }
                for(var z = function(g) {
                    var S = b.codePointAt(g), E = e(S);
                    W[g] = E, a[E] || V.has(E) || V.set(E, oe(E).then((function(C) {
                        a[E] = C;
                    }))), S > 65535 && (g++, P = g);
                }, P = 0; P < b.length; P++)z(P);
                return Promise.all(V.values()).then((function() {
                    V.clear();
                    for(var g = function(E) {
                        var C = b.codePointAt(E), T = null, N = a[W[E]], L = void 0;
                        for(var G in N){
                            var Q = A[G];
                            if (Q === void 0 && (Q = A[G] = new RegExp(G).test(D || "en")), Q) {
                                for(var K in L = G, N[G])if (n(C, N[G][K])) {
                                    T = K;
                                    break;
                                }
                                break;
                            }
                        }
                        if (!T) {
                            e: for(var B in N)if (B !== L) {
                                for(var j in N[B])if (n(C, N[B][j])) {
                                    T = j;
                                    break e;
                                }
                            }
                        }
                        T || (console.debug("No font coverage for U+" + C.toString(16)), T = "latin"), W[E] = T, s[T] || V.has(T) || V.set(T, oe("font-meta/" + T + ".json").then((function(ue) {
                            s[T] = ue;
                        }))), C > 65535 && (E++, S = E);
                    }, S = 0; S < b.length; S++)g(S);
                    return Promise.all(V.values());
                })).then((function() {
                    for(var g, S = null, E = 0; E < b.length; E++){
                        var C = b.codePointAt(E);
                        if (S && (_(C) || h(S).has(C))) x[E] = x[E - 1];
                        else {
                            S = s[W[E]];
                            var T = F[S.id];
                            if (!T) {
                                var N = S.typeforms, L = m(N, U, "sans-serif"), G = m(N[L], k, "normal"), Q = M((g = N[L]) === null || g === void 0 ? void 0 : g[G], R);
                                T = F[S.id] = O + "/font-files/" + S.id + "/" + L + "." + G + "." + Q + ".woff";
                            }
                            var K = Y.get(T);
                            K == null && (K = Y.size, Y.set(T, K)), x[E] = K;
                        }
                        C > 65535 && (E++, x[E] = x[E - 1]);
                    }
                    return {
                        fontUrls: Array.from(Y.keys()),
                        chars: x
                    };
                }));
            }, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({});
    }
    function Mi(l, r) {
        const c = Object.create(null), f = Object.create(null);
        function t(n, i) {
            const o = (a)=>{
                console.error(`Failure loading font ${n}`, a);
            };
            try {
                const a = new XMLHttpRequest;
                a.open("get", n, !0), a.responseType = "arraybuffer", a.onload = function() {
                    if (a.status >= 400) o(new Error(a.statusText));
                    else if (a.status > 0) try {
                        const s = l(a.response);
                        s.src = n, i(s);
                    } catch (s) {
                        o(s);
                    }
                }, a.onerror = o, a.send();
            } catch (a) {
                o(a);
            }
        }
        function e(n, i) {
            let o = c[n];
            o ? i(o) : f[n] ? f[n].push(i) : (f[n] = [
                i
            ], t(n, (a)=>{
                a.src = n, c[n] = a, f[n].forEach((s)=>s(a)), delete f[n];
            }));
        }
        return function(n, i, { lang: o, fonts: a = [], style: s = "normal", weight: u = "normal", unicodeFontsURL: d } = {}) {
            const h = new Uint8Array(n.length), v = [];
            n.length || _();
            const y = new Map, m = [];
            if (s !== "italic" && (s = "normal"), typeof u != "number" && (u = u === "bold" ? 700 : 400), a && !Array.isArray(a) && (a = [
                a
            ]), a = a.slice().filter((p)=>!p.lang || p.lang.test(o)).reverse(), a.length) {
                let U = 0;
                (function k(R = 0) {
                    for(let O = R, Y = n.length; O < Y; O++){
                        const x = n.codePointAt(O);
                        if (U === 1 && v[h[O - 1]].supportsCodePoint(x) || O > 0 && /\s/.test(n[O])) h[O] = h[O - 1], U === 2 && (m[m.length - 1][1] = O);
                        else for(let F = h[O], A = a.length; F <= A; F++)if (F === A) {
                            const W = U === 2 ? m[m.length - 1] : m[m.length] = [
                                O,
                                O
                            ];
                            W[1] = O, U = 2;
                        } else {
                            h[O] = F;
                            const { src: W, unicodeRange: V } = a[F];
                            if (!V || b(x, V)) {
                                const J = c[W];
                                if (!J) {
                                    e(W, ()=>{
                                        k(O);
                                    });
                                    return;
                                }
                                if (J.supportsCodePoint(x)) {
                                    let oe = y.get(J);
                                    typeof oe != "number" && (oe = v.length, v.push(J), y.set(J, oe)), h[O] = oe, U = 1;
                                    break;
                                }
                            }
                        }
                        x > 65535 && O + 1 < Y && (h[O + 1] = h[O], O++, U === 2 && (m[m.length - 1][1] = O));
                    }
                    M();
                })();
            } else m.push([
                0,
                n.length - 1
            ]), M();
            function M() {
                if (m.length) {
                    const p = m.map((w)=>n.substring(w[0], w[1] + 1)).join(`
`);
                    r.getFontsForString(p, {
                        lang: o || void 0,
                        style: s,
                        weight: u,
                        dataUrl: d
                    }).then(({ fontUrls: w, chars: D })=>{
                        const U = v.length;
                        let k = 0;
                        m.forEach((O)=>{
                            for(let Y = 0, x = O[1] - O[0]; Y <= x; Y++)h[O[0] + Y] = D[k++] + U;
                            k++;
                        });
                        let R = 0;
                        w.forEach((O, Y)=>{
                            e(O, (x)=>{
                                v[Y + U] = x, ++R === w.length && _();
                            });
                        });
                    });
                } else _();
            }
            function _() {
                i({
                    chars: h,
                    fonts: v
                });
            }
            function b(p, w) {
                for(let D = 0; D < w.length; D++){
                    const [U, k = U] = w[D];
                    if (U <= p && p <= k) return !0;
                }
                return !1;
            }
        };
    }
    const Fi = wt({
        name: "FontResolver",
        dependencies: [
            Mi,
            Ai,
            Di
        ],
        init (l, r, c) {
            return l(r, c());
        }
    });
    function Pi(l, r) {
        const f = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, t = "[^\\S\\u00A0]", e = new RegExp(`${t}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
        function n({ text: v, lang: y, fonts: m, style: M, weight: _, preResolvedFonts: b, unicodeFontsURL: p }, w) {
            const D = ({ chars: U, fonts: k })=>{
                let R, O;
                const Y = [];
                for(let x = 0; x < U.length; x++)U[x] !== O ? (O = U[x], Y.push(R = {
                    start: x,
                    end: x,
                    fontObj: k[U[x]]
                })) : R.end = x;
                w(Y);
            };
            b ? D(b) : l(v, D, {
                lang: y,
                fonts: m,
                style: M,
                weight: _,
                unicodeFontsURL: p
            });
        }
        function i({ text: v = "", font: y, lang: m, sdfGlyphSize: M = 64, fontSize: _ = 400, fontWeight: b = 1, fontStyle: p = "normal", letterSpacing: w = 0, lineHeight: D = "normal", maxWidth: U = 1 / 0, direction: k, textAlign: R = "left", textIndent: O = 0, whiteSpace: Y = "normal", overflowWrap: x = "normal", anchorX: F = 0, anchorY: A = 0, metricsOnly: W = !1, unicodeFontsURL: V, preResolvedFonts: J = null, includeCaretPositions: oe = !1, chunkedBoundsSize: z = 8192, colorRanges: P = null }, g) {
            const S = u(), E = {
                fontLoad: 0,
                typesetting: 0
            };
            v.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), v = v.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), _ = +_, w = +w, U = +U, D = D || "normal", O = +O, n({
                text: v,
                lang: m,
                style: p,
                weight: b,
                fonts: typeof y == "string" ? [
                    {
                        src: y
                    }
                ] : y,
                unicodeFontsURL: V,
                preResolvedFonts: J
            }, (C)=>{
                E.fontLoad = u() - S;
                const T = isFinite(U);
                let N = null, L = null, G = null, Q = null, K = null, B = null, j = null, ue = null, fe = 0, q = 0, ie = Y !== "nowrap";
                const ne = new Map, H = u();
                let re = O, te = 0, I = new d;
                const pe = [
                    I
                ];
                C.forEach((ee)=>{
                    const { fontObj: se } = ee, { ascender: de, descender: ve, unitsPerEm: Ue, lineGap: De, capHeight: ye, xHeight: be } = se;
                    let ce = ne.get(se);
                    if (!ce) {
                        const he = _ / Ue, we = D === "normal" ? (de - ve + De) * he : D * _, et = (we - (de - ve) * he) / 2, _e = Math.min(we, (de - ve) * he), xe = (de + ve) / 2 * he + _e / 2;
                        ce = {
                            index: ne.size,
                            src: se.src,
                            fontObj: se,
                            fontSizeMult: he,
                            unitsPerEm: Ue,
                            ascender: de * he,
                            descender: ve * he,
                            capHeight: ye * he,
                            xHeight: be * he,
                            lineHeight: we,
                            baseline: -et - de * he,
                            caretTop: xe,
                            caretBottom: xe - _e
                        }, ne.set(se, ce);
                    }
                    const { fontSizeMult: Me } = ce, ke = v.slice(ee.start, ee.end + 1);
                    let je, Te;
                    se.forEachGlyph(ke, _, w, (he, we, et, _e)=>{
                        we += te, _e += ee.start, je = we, Te = he;
                        const xe = v.charAt(_e), Fe = he.advanceWidth * Me, Ce = I.count;
                        let ge;
                        if ("isEmpty" in he || (he.isWhitespace = !!xe && new RegExp(t).test(xe), he.canBreakAfter = !!xe && e.test(xe), he.isEmpty = he.xMin === he.xMax || he.yMin === he.yMax || f.test(xe)), !he.isWhitespace && !he.isEmpty && q++, ie && T && !he.isWhitespace && we + Fe + re > U && Ce) {
                            if (I.glyphAt(Ce - 1).glyphObj.canBreakAfter) ge = new d, re = -we;
                            else for(let Ie = Ce; Ie--;)if (Ie === 0 && x === "break-word") {
                                ge = new d, re = -we;
                                break;
                            } else if (I.glyphAt(Ie).glyphObj.canBreakAfter) {
                                ge = I.splitAt(Ie + 1);
                                const Ge = ge.glyphAt(0).x;
                                re -= Ge;
                                for(let Pe = ge.count; Pe--;)ge.glyphAt(Pe).x -= Ge;
                                break;
                            }
                            ge && (I.isSoftWrapped = !0, I = ge, pe.push(I), fe = U);
                        }
                        let Ae = I.glyphAt(I.count);
                        Ae.glyphObj = he, Ae.x = we + re, Ae.y = et, Ae.width = Fe, Ae.charIndex = _e, Ae.fontData = ce, xe === `
` && (I = new d, pe.push(I), re = -(we + Fe + w * _) + O);
                    }), te = je + Te.advanceWidth * Me + w * _;
                });
                let $ = 0;
                pe.forEach((ee)=>{
                    let se = !0;
                    for(let de = ee.count; de--;){
                        const ve = ee.glyphAt(de);
                        se && !ve.glyphObj.isWhitespace && (ee.width = ve.x + ve.width, ee.width > fe && (fe = ee.width), se = !1);
                        let { lineHeight: Ue, capHeight: De, xHeight: ye, baseline: be } = ve.fontData;
                        Ue > ee.lineHeight && (ee.lineHeight = Ue);
                        const ce = be - ee.baseline;
                        ce < 0 && (ee.baseline += ce, ee.cap += ce, ee.ex += ce), ee.cap = Math.max(ee.cap, ee.baseline + De), ee.ex = Math.max(ee.ex, ee.baseline + ye);
                    }
                    ee.baseline -= $, ee.cap -= $, ee.ex -= $, $ += ee.lineHeight;
                });
                let ae = 0, Z = 0;
                if (F && (typeof F == "number" ? ae = -F : typeof F == "string" && (ae = -fe * (F === "left" ? 0 : F === "center" ? .5 : F === "right" ? 1 : a(F)))), A && (typeof A == "number" ? Z = -A : typeof A == "string" && (Z = A === "top" ? 0 : A === "top-baseline" ? -pe[0].baseline : A === "top-cap" ? -pe[0].cap : A === "top-ex" ? -pe[0].ex : A === "middle" ? $ / 2 : A === "bottom" ? $ : A === "bottom-baseline" ? -pe[pe.length - 1].baseline : a(A) * $)), !W) {
                    const ee = r.getEmbeddingLevels(v, k);
                    N = new Uint16Array(q), L = new Uint8Array(q), G = new Float32Array(q * 2), Q = {}, j = [
                        1 / 0,
                        1 / 0,
                        -1 / 0,
                        -1 / 0
                    ], ue = [], oe && (B = new Float32Array(v.length * 4)), P && (K = new Uint8Array(q * 3));
                    let se = 0, de = -1, ve = -1, Ue, De;
                    if (pe.forEach((ye, be)=>{
                        let { count: ce, width: Me } = ye;
                        if (ce > 0) {
                            let ke = 0;
                            for(let _e = ce; _e-- && ye.glyphAt(_e).glyphObj.isWhitespace;)ke++;
                            let je = 0, Te = 0;
                            if (R === "center") je = (fe - Me) / 2;
                            else if (R === "right") je = fe - Me;
                            else if (R === "justify" && ye.isSoftWrapped) {
                                let _e = 0;
                                for(let xe = ce - ke; xe--;)ye.glyphAt(xe).glyphObj.isWhitespace && _e++;
                                Te = (fe - Me) / _e;
                            }
                            if (Te || je) {
                                let _e = 0;
                                for(let xe = 0; xe < ce; xe++){
                                    let Fe = ye.glyphAt(xe);
                                    const Ce = Fe.glyphObj;
                                    Fe.x += je + _e, Te !== 0 && Ce.isWhitespace && xe < ce - ke && (_e += Te, Fe.width += Te);
                                }
                            }
                            const he = r.getReorderSegments(v, ee, ye.glyphAt(0).charIndex, ye.glyphAt(ye.count - 1).charIndex);
                            for(let _e = 0; _e < he.length; _e++){
                                const [xe, Fe] = he[_e];
                                let Ce = 1 / 0, ge = -1 / 0;
                                for(let Ae = 0; Ae < ce; Ae++)if (ye.glyphAt(Ae).charIndex >= xe) {
                                    let Ie = Ae, Ge = Ae;
                                    for(; Ge < ce; Ge++){
                                        let Pe = ye.glyphAt(Ge);
                                        if (Pe.charIndex > Fe) break;
                                        Ge < ce - ke && (Ce = Math.min(Ce, Pe.x), ge = Math.max(ge, Pe.x + Pe.width));
                                    }
                                    for(let Pe = Ie; Pe < Ge; Pe++){
                                        const He = ye.glyphAt(Pe);
                                        He.x = ge - (He.x + He.width - Ce);
                                    }
                                    break;
                                }
                            }
                            let we;
                            const et = (_e)=>we = _e;
                            for(let _e = 0; _e < ce; _e++){
                                const xe = ye.glyphAt(_e);
                                we = xe.glyphObj;
                                const Fe = we.index, Ce = ee.levels[xe.charIndex] & 1;
                                if (Ce) {
                                    const ge = r.getMirroredCharacter(v[xe.charIndex]);
                                    ge && xe.fontData.fontObj.forEachGlyph(ge, 0, 0, et);
                                }
                                if (oe) {
                                    const { charIndex: ge, fontData: Ae } = xe, Ie = xe.x + ae, Ge = xe.x + xe.width + ae;
                                    B[ge * 4] = Ce ? Ge : Ie, B[ge * 4 + 1] = Ce ? Ie : Ge, B[ge * 4 + 2] = ye.baseline + Ae.caretBottom + Z, B[ge * 4 + 3] = ye.baseline + Ae.caretTop + Z;
                                    const Pe = ge - de;
                                    Pe > 1 && s(B, de, Pe), de = ge;
                                }
                                if (P) {
                                    const { charIndex: ge } = xe;
                                    for(; ge > ve;)ve++, P.hasOwnProperty(ve) && (De = P[ve]);
                                }
                                if (!we.isWhitespace && !we.isEmpty) {
                                    const ge = se++, { fontSizeMult: Ae, src: Ie, index: Ge } = xe.fontData, Pe = Q[Ie] || (Q[Ie] = {});
                                    Pe[Fe] || (Pe[Fe] = {
                                        path: we.path,
                                        pathBounds: [
                                            we.xMin,
                                            we.yMin,
                                            we.xMax,
                                            we.yMax
                                        ]
                                    });
                                    const He = xe.x + ae, tt = xe.y + ye.baseline + Z;
                                    G[ge * 2] = He, G[ge * 2 + 1] = tt;
                                    const qe = He + we.xMin * Ae, rt = tt + we.yMin * Ae, lt = He + we.xMax * Ae, $e = tt + we.yMax * Ae;
                                    qe < j[0] && (j[0] = qe), rt < j[1] && (j[1] = rt), lt > j[2] && (j[2] = lt), $e > j[3] && (j[3] = $e), ge % z === 0 && (Ue = {
                                        start: ge,
                                        end: ge,
                                        rect: [
                                            1 / 0,
                                            1 / 0,
                                            -1 / 0,
                                            -1 / 0
                                        ]
                                    }, ue.push(Ue)), Ue.end++;
                                    const ze = Ue.rect;
                                    if (qe < ze[0] && (ze[0] = qe), rt < ze[1] && (ze[1] = rt), lt > ze[2] && (ze[2] = lt), $e > ze[3] && (ze[3] = $e), N[ge] = Fe, L[ge] = Ge, P) {
                                        const ft = ge * 3;
                                        K[ft] = De >> 16 & 255, K[ft + 1] = De >> 8 & 255, K[ft + 2] = De & 255;
                                    }
                                }
                            }
                        }
                    }), B) {
                        const ye = v.length - de;
                        ye > 1 && s(B, de, ye);
                    }
                }
                const Se = [];
                ne.forEach(({ index: ee, src: se, unitsPerEm: de, ascender: ve, descender: Ue, lineHeight: De, capHeight: ye, xHeight: be })=>{
                    Se[ee] = {
                        src: se,
                        unitsPerEm: de,
                        ascender: ve,
                        descender: Ue,
                        lineHeight: De,
                        capHeight: ye,
                        xHeight: be
                    };
                }), E.typesetting = u() - H, g({
                    glyphIds: N,
                    glyphFontIndices: L,
                    glyphPositions: G,
                    glyphData: Q,
                    fontData: Se,
                    caretPositions: B,
                    glyphColors: K,
                    chunkedBounds: ue,
                    fontSize: _,
                    topBaseline: Z + pe[0].baseline,
                    blockBounds: [
                        ae,
                        Z - $,
                        ae + fe,
                        Z
                    ],
                    visibleBounds: j,
                    timings: E
                });
            });
        }
        function o(v, y) {
            i({
                ...v,
                metricsOnly: !0
            }, (m)=>{
                const [M, _, b, p] = m.blockBounds;
                y({
                    width: b - M,
                    height: p - _
                });
            });
        }
        function a(v) {
            let y = v.match(/^([\d.]+)%$/), m = y ? parseFloat(y[1]) : NaN;
            return isNaN(m) ? 0 : m / 100;
        }
        function s(v, y, m) {
            const M = v[y * 4], _ = v[y * 4 + 1], b = v[y * 4 + 2], p = v[y * 4 + 3], w = (_ - M) / m;
            for(let D = 0; D < m; D++){
                const U = (y + D) * 4;
                v[U] = M + w * D, v[U + 1] = M + w * (D + 1), v[U + 2] = b, v[U + 3] = p;
            }
        }
        function u() {
            return (self.performance || Date).now();
        }
        function d() {
            this.data = [];
        }
        const h = [
            "glyphObj",
            "x",
            "y",
            "width",
            "charIndex",
            "fontData"
        ];
        return d.prototype = {
            width: 0,
            lineHeight: 0,
            baseline: 0,
            cap: 0,
            ex: 0,
            isSoftWrapped: !1,
            get count () {
                return Math.ceil(this.data.length / h.length);
            },
            glyphAt (v) {
                let y = d.flyweight;
                return y.data = this.data, y.index = v, y;
            },
            splitAt (v) {
                let y = new d;
                return y.data = this.data.splice(v * h.length), y;
            }
        }, d.flyweight = h.reduce((v, y, m, M)=>(Object.defineProperty(v, y, {
                get () {
                    return this.data[this.index * h.length + m];
                },
                set (_) {
                    this.data[this.index * h.length + m] = _;
                }
            }), v), {
            data: null,
            index: 0
        }), {
            typeset: i,
            measure: o
        };
    }
    const dt = ()=>(self.performance || Date).now(), dr = ao();
    let Bn;
    function Li(l, r, c, f, t, e, n, i, o, a, s = !0) {
        return s ? Ri(l, r, c, f, t, e, n, i, o, a).then(null, (u)=>(Bn || (console.warn("WebGL SDF generation failed, falling back to JS", u), Bn = !0), In(l, r, c, f, t, e, n, i, o, a))) : In(l, r, c, f, t, e, n, i, o, a);
    }
    const lr = [], Oi = 5;
    let Hr = 0;
    function lo() {
        const l = dt();
        for(; lr.length && dt() - l < Oi;)lr.shift()();
        Hr = lr.length ? setTimeout(lo, 0) : 0;
    }
    const Ri = (...l)=>new Promise((r, c)=>{
            lr.push(()=>{
                const f = dt();
                try {
                    dr.webgl.generateIntoCanvas(...l), r({
                        timing: dt() - f
                    });
                } catch (t) {
                    c(t);
                }
            }), Hr || (Hr = setTimeout(lo, 0));
        }), Bi = 4, Gi = 2e3, Gn = {};
    let Ii = 0;
    function In(l, r, c, f, t, e, n, i, o, a) {
        const s = "TroikaTextSDFGenerator_JS_" + Ii++ % Bi;
        let u = Gn[s];
        return u || (u = Gn[s] = {
            workerModule: wt({
                name: s,
                workerId: s,
                dependencies: [
                    ao,
                    dt
                ],
                init (d, h) {
                    const v = d().javascript.generate;
                    return function(...y) {
                        const m = h();
                        return {
                            textureData: v(...y),
                            timing: h() - m
                        };
                    };
                },
                getTransferables (d) {
                    return [
                        d.textureData.buffer
                    ];
                }
            }),
            requests: 0,
            idleTimer: null
        }), u.requests++, clearTimeout(u.idleTimer), u.workerModule(l, r, c, f, t, e).then(({ textureData: d, timing: h })=>{
            const v = dt(), y = new Uint8Array(d.length * 4);
            for(let m = 0; m < d.length; m++)y[m * 4 + a] = d[m];
            return dr.webglUtils.renderImageData(n, y, i, o, l, r, 1 << 3 - a), h += dt() - v, --u.requests === 0 && (u.idleTimer = setTimeout(()=>{
                gi(s);
            }, Gi)), {
                timing: h
            };
        });
    }
    function zi(l) {
        l._warm || (dr.webgl.isSupported(l), l._warm = !0);
    }
    const ji = dr.webglUtils.resizeWebGLCanvasWithoutClearing, Lt = {
        unicodeFontsURL: null,
        sdfGlyphSize: 64,
        sdfMargin: 1 / 16,
        sdfExponent: 9,
        textureWidth: 2048
    }, Ni = new pt;
    function bt() {
        return (self.performance || Date).now();
    }
    const zn = Object.create(null);
    function fo(l, r) {
        l = Hi({}, l);
        const c = bt(), f = [];
        if (l.font && f.push({
            label: "user",
            src: Xi(l.font)
        }), l.font = f, l.text = "" + l.text, l.sdfGlyphSize = l.sdfGlyphSize || Lt.sdfGlyphSize, l.unicodeFontsURL = l.unicodeFontsURL || Lt.unicodeFontsURL, l.colorRanges != null) {
            let d = {};
            for(let h in l.colorRanges)if (l.colorRanges.hasOwnProperty(h)) {
                let v = l.colorRanges[h];
                typeof v != "number" && (v = Ni.set(v).getHex()), d[h] = v;
            }
            l.colorRanges = d;
        }
        Object.freeze(l);
        const { textureWidth: t, sdfExponent: e } = Lt, { sdfGlyphSize: n } = l, i = t / n * 4;
        let o = zn[n];
        if (!o) {
            const d = document.createElement("canvas");
            d.width = t, d.height = n * 256 / i, o = zn[n] = {
                glyphCount: 0,
                sdfGlyphSize: n,
                sdfCanvas: d,
                sdfTexture: new Bo(d, void 0, void 0, void 0, cr, cr),
                contextLost: !1,
                glyphsByFont: new Map
            }, o.sdfTexture.generateMipmaps = !1, Wi(o);
        }
        const { sdfTexture: a, sdfCanvas: s } = o;
        ho(l).then((d)=>{
            const { glyphIds: h, glyphFontIndices: v, fontData: y, glyphPositions: m, fontSize: M, timings: _ } = d, b = [], p = new Float32Array(h.length * 4);
            let w = 0, D = 0;
            const U = bt(), k = y.map((F)=>{
                let A = o.glyphsByFont.get(F.src);
                return A || o.glyphsByFont.set(F.src, A = new Map), A;
            });
            h.forEach((F, A)=>{
                const W = v[A], { src: V, unitsPerEm: J } = y[W];
                let oe = k[W].get(F);
                if (!oe) {
                    const { path: E, pathBounds: C } = d.glyphData[V][F], T = Math.max(C[2] - C[0], C[3] - C[1]) / n * (Lt.sdfMargin * n + .5), N = o.glyphCount++, L = [
                        C[0] - T,
                        C[1] - T,
                        C[2] + T,
                        C[3] + T
                    ];
                    k[W].set(F, oe = {
                        path: E,
                        atlasIndex: N,
                        sdfViewBox: L
                    }), b.push(oe);
                }
                const { sdfViewBox: z } = oe, P = m[D++], g = m[D++], S = M / J;
                p[w++] = P + z[0] * S, p[w++] = g + z[1] * S, p[w++] = P + z[2] * S, p[w++] = g + z[3] * S, h[A] = oe.atlasIndex;
            }), _.quads = (_.quads || 0) + (bt() - U);
            const R = bt();
            _.sdf = {};
            const O = s.height, Y = Math.ceil(o.glyphCount / i), x = Math.pow(2, Math.ceil(Math.log2(Y * n)));
            x > O && (console.info(`Increasing SDF texture size ${O}->${x}`), ji(s, t, x), a.dispose()), Promise.all(b.map((F)=>co(F, o, l.gpuAccelerateSDF).then(({ timing: A })=>{
                    _.sdf[F.atlasIndex] = A;
                }))).then(()=>{
                b.length && !o.contextLost && (uo(o), a.needsUpdate = !0), _.sdfTotal = bt() - R, _.total = bt() - c, r(Object.freeze({
                    parameters: l,
                    sdfTexture: a,
                    sdfGlyphSize: n,
                    sdfExponent: e,
                    glyphBounds: p,
                    glyphAtlasIndices: h,
                    glyphColors: d.glyphColors,
                    caretPositions: d.caretPositions,
                    chunkedBounds: d.chunkedBounds,
                    ascender: d.ascender,
                    descender: d.descender,
                    lineHeight: d.lineHeight,
                    capHeight: d.capHeight,
                    xHeight: d.xHeight,
                    topBaseline: d.topBaseline,
                    blockBounds: d.blockBounds,
                    visibleBounds: d.visibleBounds,
                    timings: d.timings
                }));
            });
        }), Promise.resolve().then(()=>{
            o.contextLost || zi(s);
        });
    }
    function co({ path: l, atlasIndex: r, sdfViewBox: c }, { sdfGlyphSize: f, sdfCanvas: t, contextLost: e }, n) {
        if (e) return Promise.resolve({
            timing: -1
        });
        const { textureWidth: i, sdfExponent: o } = Lt, a = Math.max(c[2] - c[0], c[3] - c[1]), s = Math.floor(r / 4), u = s % (i / f) * f, d = Math.floor(s / (i / f)) * f, h = r % 4;
        return Li(f, f, l, c, a, o, t, u, d, h, n);
    }
    function Wi(l) {
        const r = l.sdfCanvas;
        r.addEventListener("webglcontextlost", (c)=>{
            console.log("Context Lost", c), c.preventDefault(), l.contextLost = !0;
        }), r.addEventListener("webglcontextrestored", (c)=>{
            console.log("Context Restored", c), l.contextLost = !1;
            const f = [];
            l.glyphsByFont.forEach((t)=>{
                t.forEach((e)=>{
                    f.push(co(e, l, !0));
                });
            }), Promise.all(f).then(()=>{
                uo(l), l.sdfTexture.needsUpdate = !0;
            });
        });
    }
    function Vi({ font: l, characters: r, sdfGlyphSize: c }, f) {
        let t = Array.isArray(r) ? r.join(`
`) : "" + r;
        fo({
            font: l,
            sdfGlyphSize: c,
            text: t
        }, f);
    }
    function Hi(l, r) {
        for(let c in r)r.hasOwnProperty(c) && (l[c] = r[c]);
        return l;
    }
    let or;
    function Xi(l) {
        return or || (or = typeof document > "u" ? {} : document.createElement("a")), or.href = l, or.href;
    }
    function uo(l) {
        if (typeof createImageBitmap != "function") {
            console.info("Safari<15: applying SDF canvas workaround");
            const { sdfCanvas: r, sdfTexture: c } = l, { width: f, height: t } = r, e = l.sdfCanvas.getContext("webgl");
            let n = c.image.data;
            (!n || n.length !== f * t * 4) && (n = new Uint8Array(f * t * 4), c.image = {
                width: f,
                height: t,
                data: n
            }, c.flipY = !1, c.isDataTexture = !0), e.readPixels(0, 0, f, t, e.RGBA, e.UNSIGNED_BYTE, n);
        }
    }
    const Yi = wt({
        name: "Typesetter",
        dependencies: [
            Pi,
            Fi,
            yi
        ],
        init (l, r, c) {
            return l(r, c());
        }
    }), ho = wt({
        name: "Typesetter",
        dependencies: [
            Yi
        ],
        init (l) {
            return function(r) {
                return new Promise((c)=>{
                    l.typeset(r, c);
                });
            };
        },
        getTransferables (l) {
            const r = [];
            for(let c in l)l[c] && l[c].buffer && r.push(l[c].buffer);
            return r;
        }
    });
    ho.onMainThread;
    const jn = {};
    function Ji(l) {
        let r = jn[l];
        return r || (r = jn[l] = new Jr(1, 1, l, l).translate(.5, .5, 0)), r;
    }
    const Ki = "aTroikaGlyphBounds", Nn = "aTroikaGlyphIndex", Qi = "aTroikaGlyphColor";
    class Zi extends Qn {
        constructor(){
            super(), this.detail = 1, this.curveRadius = 0, this.groups = [
                {
                    start: 0,
                    count: 1 / 0,
                    materialIndex: 0
                },
                {
                    start: 0,
                    count: 1 / 0,
                    materialIndex: 1
                }
            ], this.boundingSphere = new Yr, this.boundingBox = new It;
        }
        computeBoundingSphere() {}
        computeBoundingBox() {}
        set detail(r) {
            if (r !== this._detail) {
                this._detail = r, (typeof r != "number" || r < 1) && (r = 1);
                let c = Ji(r);
                [
                    "position",
                    "normal",
                    "uv"
                ].forEach((f)=>{
                    this.attributes[f] = c.attributes[f].clone();
                }), this.setIndex(c.getIndex().clone());
            }
        }
        get detail() {
            return this._detail;
        }
        set curveRadius(r) {
            r !== this._curveRadius && (this._curveRadius = r, this._updateBounds());
        }
        get curveRadius() {
            return this._curveRadius;
        }
        updateGlyphs(r, c, f, t, e) {
            this.updateAttributeData(Ki, r, 4), this.updateAttributeData(Nn, c, 1), this.updateAttributeData(Qi, e, 3), this._blockBounds = f, this._chunkedBounds = t, this.instanceCount = c.length, this._updateBounds();
        }
        _updateBounds() {
            const r = this._blockBounds;
            if (r) {
                const { curveRadius: c, boundingBox: f } = this;
                if (c) {
                    const { PI: t, floor: e, min: n, max: i, sin: o, cos: a } = Math, s = t / 2, u = t * 2, d = Math.abs(c), h = r[0] / d, v = r[2] / d, y = e((h + s) / u) !== e((v + s) / u) ? -d : n(o(h) * d, o(v) * d), m = e((h - s) / u) !== e((v - s) / u) ? d : i(o(h) * d, o(v) * d), M = e((h + t) / u) !== e((v + t) / u) ? d * 2 : i(d - a(h) * d, d - a(v) * d);
                    f.min.set(y, r[1], c < 0 ? -M : 0), f.max.set(m, r[3], c < 0 ? 0 : M);
                } else f.min.set(r[0], r[1], 0), f.max.set(r[2], r[3], 0);
                f.getBoundingSphere(this.boundingSphere);
            }
        }
        applyClipRect(r) {
            let c = this.getAttribute(Nn).count, f = this._chunkedBounds;
            if (f) for(let t = f.length; t--;){
                c = f[t].end;
                let e = f[t].rect;
                if (e[1] < r.w && e[3] > r.y && e[0] < r.z && e[2] > r.x) break;
            }
            this.instanceCount = c;
        }
        updateAttributeData(r, c, f) {
            const t = this.getAttribute(r);
            c ? t && t.array.length === c.length ? (t.array.set(c), t.needsUpdate = !0) : (this.setAttribute(r, new Ro(c, f)), delete this._maxInstanceCount, this.dispose()) : t && this.deleteAttribute(r);
        }
    }
    const qi = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`, $i = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`, ea = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`, ta = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
    function ra(l) {
        const r = Vr(l, {
            chained: !0,
            extensions: {
                derivatives: !0
            },
            uniforms: {
                uTroikaSDFTexture: {
                    value: null
                },
                uTroikaSDFTextureSize: {
                    value: new ht
                },
                uTroikaSDFGlyphSize: {
                    value: 0
                },
                uTroikaSDFExponent: {
                    value: 0
                },
                uTroikaTotalBounds: {
                    value: new st(0, 0, 0, 0)
                },
                uTroikaClipRect: {
                    value: new st(0, 0, 0, 0)
                },
                uTroikaEdgeOffset: {
                    value: 0
                },
                uTroikaFillOpacity: {
                    value: 1
                },
                uTroikaPositionOffset: {
                    value: new ht
                },
                uTroikaCurveRadius: {
                    value: 0
                },
                uTroikaBlurRadius: {
                    value: 0
                },
                uTroikaStrokeWidth: {
                    value: 0
                },
                uTroikaStrokeColor: {
                    value: new pt
                },
                uTroikaStrokeOpacity: {
                    value: 1
                },
                uTroikaOrient: {
                    value: new Go
                },
                uTroikaUseGlyphColors: {
                    value: !0
                },
                uTroikaSDFDebug: {
                    value: !1
                }
            },
            vertexDefs: qi,
            vertexTransform: $i,
            fragmentDefs: ea,
            fragmentColorTransform: ta,
            customRewriter ({ vertexShader: c, fragmentShader: f }) {
                let t = /\buniform\s+vec3\s+diffuse\b/;
                return t.test(f) && (f = f.replace(t, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), t.test(c) || (c = c.replace(so, `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))), {
                    vertexShader: c,
                    fragmentShader: f
                };
            }
        });
        return r.transparent = !0, r.forceSinglePass = !0, Object.defineProperties(r, {
            isTroikaTextMaterial: {
                value: !0
            },
            shadowSide: {
                get () {
                    return this.side;
                },
                set () {}
            }
        }), r;
    }
    const qr = new Oo({
        color: 16777215,
        side: Ot,
        transparent: !0
    }), Wn = 8421504, Vn = new qn, ir = new Ee, Gr = new Ee, Pt = [], na = new Ee, Ir = "+x+y";
    function Hn(l) {
        return Array.isArray(l) ? l[0] : l;
    }
    let po = ()=>{
        const l = new ur(new Jr(1, 1), qr);
        return po = ()=>l, l;
    }, vo = ()=>{
        const l = new ur(new Jr(1, 1, 32, 1), qr);
        return vo = ()=>l, l;
    };
    const oa = {
        type: "syncstart"
    }, ia = {
        type: "synccomplete"
    }, go = [
        "font",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "lang",
        "letterSpacing",
        "lineHeight",
        "maxWidth",
        "overflowWrap",
        "text",
        "direction",
        "textAlign",
        "textIndent",
        "whiteSpace",
        "anchorX",
        "anchorY",
        "colorRanges",
        "sdfGlyphSize"
    ], aa = go.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail");
    let mo = class extends ur {
        constructor(){
            const r = new Zi;
            super(r, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = .1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = Wn, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Ir, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
        }
        sync(r) {
            this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(r) : (this._isSyncing = !0, this.dispatchEvent(oa), fo({
                text: this.text,
                font: this.font,
                lang: this.lang,
                fontSize: this.fontSize || .1,
                fontWeight: this.fontWeight || "normal",
                fontStyle: this.fontStyle || "normal",
                letterSpacing: this.letterSpacing || 0,
                lineHeight: this.lineHeight || "normal",
                maxWidth: this.maxWidth,
                direction: this.direction || "auto",
                textAlign: this.textAlign,
                textIndent: this.textIndent,
                whiteSpace: this.whiteSpace,
                overflowWrap: this.overflowWrap,
                anchorX: this.anchorX,
                anchorY: this.anchorY,
                colorRanges: this.colorRanges,
                includeCaretPositions: !0,
                sdfGlyphSize: this.sdfGlyphSize,
                gpuAccelerateSDF: this.gpuAccelerateSDF,
                unicodeFontsURL: this.unicodeFontsURL
            }, (c)=>{
                this._isSyncing = !1, this._textRenderInfo = c, this.geometry.updateGlyphs(c.glyphBounds, c.glyphAtlasIndices, c.blockBounds, c.chunkedBounds, c.glyphColors);
                const f = this._queuedSyncs;
                f && (this._queuedSyncs = null, this._needsSync = !0, this.sync(()=>{
                    f.forEach((t)=>t && t());
                })), this.dispatchEvent(ia), r && r();
            })));
        }
        onBeforeRender(r, c, f, t, e, n) {
            this.sync(), e.isTroikaTextMaterial && this._prepareForRender(e);
        }
        dispose() {
            this.geometry.dispose();
        }
        get textRenderInfo() {
            return this._textRenderInfo || null;
        }
        createDerivedMaterial(r) {
            return ra(r);
        }
        get material() {
            let r = this._derivedMaterial;
            const c = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = qr.clone());
            if ((!r || !r.isDerivedFrom(c)) && (r = this._derivedMaterial = this.createDerivedMaterial(c), c.addEventListener("dispose", function f() {
                c.removeEventListener("dispose", f), r.dispose();
            })), this.hasOutline()) {
                let f = r._outlineMtl;
                return f || (f = r._outlineMtl = Object.create(r, {
                    id: {
                        value: r.id + .1
                    }
                }), f.isTextOutlineMaterial = !0, f.depthWrite = !1, f.map = null, r.addEventListener("dispose", function t() {
                    r.removeEventListener("dispose", t), f.dispose();
                })), [
                    f,
                    r
                ];
            } else return r;
        }
        set material(r) {
            r && r.isTroikaTextMaterial ? (this._derivedMaterial = r, this._baseMaterial = r.baseMaterial) : this._baseMaterial = r;
        }
        hasOutline() {
            return !!(this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY);
        }
        get glyphGeometryDetail() {
            return this.geometry.detail;
        }
        set glyphGeometryDetail(r) {
            this.geometry.detail = r;
        }
        get curveRadius() {
            return this.geometry.curveRadius;
        }
        set curveRadius(r) {
            this.geometry.curveRadius = r;
        }
        get customDepthMaterial() {
            return Hn(this.material).getDepthMaterial();
        }
        set customDepthMaterial(r) {}
        get customDistanceMaterial() {
            return Hn(this.material).getDistanceMaterial();
        }
        set customDistanceMaterial(r) {}
        _prepareForRender(r) {
            const c = r.isTextOutlineMaterial, f = r.uniforms, t = this.textRenderInfo;
            if (t) {
                const { sdfTexture: i, blockBounds: o } = t;
                f.uTroikaSDFTexture.value = i, f.uTroikaSDFTextureSize.value.set(i.image.width, i.image.height), f.uTroikaSDFGlyphSize.value = t.sdfGlyphSize, f.uTroikaSDFExponent.value = t.sdfExponent, f.uTroikaTotalBounds.value.fromArray(o), f.uTroikaUseGlyphColors.value = !c && !!t.glyphColors;
                let a = 0, s = 0, u = 0, d, h, v, y = 0, m = 0;
                if (c) {
                    let { outlineWidth: _, outlineOffsetX: b, outlineOffsetY: p, outlineBlur: w, outlineOpacity: D } = this;
                    a = this._parsePercent(_) || 0, s = Math.max(0, this._parsePercent(w) || 0), d = D, y = this._parsePercent(b) || 0, m = this._parsePercent(p) || 0;
                } else u = Math.max(0, this._parsePercent(this.strokeWidth) || 0), u && (v = this.strokeColor, f.uTroikaStrokeColor.value.set(v ?? Wn), h = this.strokeOpacity, h == null && (h = 1)), d = this.fillOpacity;
                f.uTroikaEdgeOffset.value = a, f.uTroikaPositionOffset.value.set(y, m), f.uTroikaBlurRadius.value = s, f.uTroikaStrokeWidth.value = u, f.uTroikaStrokeOpacity.value = h, f.uTroikaFillOpacity.value = d ?? 1, f.uTroikaCurveRadius.value = this.curveRadius || 0;
                let M = this.clipRect;
                if (M && Array.isArray(M) && M.length === 4) f.uTroikaClipRect.value.fromArray(M);
                else {
                    const _ = (this.fontSize || .1) * 100;
                    f.uTroikaClipRect.value.set(o[0] - _, o[1] - _, o[2] + _, o[3] + _);
                }
                this.geometry.applyClipRect(f.uTroikaClipRect.value);
            }
            f.uTroikaSDFDebug.value = !!this.debugSDF, r.polygonOffset = !!this.depthOffset, r.polygonOffsetFactor = r.polygonOffsetUnits = this.depthOffset || 0;
            const e = c ? this.outlineColor || 0 : this.color;
            if (e == null) delete r.color;
            else {
                const i = r.hasOwnProperty("color") ? r.color : r.color = new pt;
                (e !== i._input || typeof e == "object") && i.set(i._input = e);
            }
            let n = this.orientation || Ir;
            if (n !== r._orientation) {
                let i = f.uTroikaOrient.value;
                n = n.replace(/[^-+xyz]/g, "");
                let o = n !== Ir && n.match(/^([-+])([xyz])([-+])([xyz])$/);
                if (o) {
                    let [, a, s, u, d] = o;
                    ir.set(0, 0, 0)[s] = a === "-" ? 1 : -1, Gr.set(0, 0, 0)[d] = u === "-" ? -1 : 1, Vn.lookAt(na, ir.cross(Gr), Gr), i.setFromMatrix4(Vn);
                } else i.identity();
                r._orientation = n;
            }
        }
        _parsePercent(r) {
            if (typeof r == "string") {
                let c = r.match(/^(-?[\d.]+)%$/), f = c ? parseFloat(c[1]) : NaN;
                r = (isNaN(f) ? 0 : f / 100) * this.fontSize;
            }
            return r;
        }
        localPositionToTextCoords(r, c = new ht) {
            c.copy(r);
            const f = this.curveRadius;
            return f && (c.x = Math.atan2(r.x, Math.abs(f) - Math.abs(r.z)) * Math.abs(f)), c;
        }
        worldPositionToTextCoords(r, c = new ht) {
            return ir.copy(r), this.localPositionToTextCoords(this.worldToLocal(ir), c);
        }
        raycast(r, c) {
            const { textRenderInfo: f, curveRadius: t } = this;
            if (f) {
                const e = f.blockBounds, n = t ? vo() : po(), i = n.geometry, { position: o, uv: a } = i.attributes;
                for(let s = 0; s < a.count; s++){
                    let u = e[0] + a.getX(s) * (e[2] - e[0]);
                    const d = e[1] + a.getY(s) * (e[3] - e[1]);
                    let h = 0;
                    t && (h = t - Math.cos(u / t) * t, u = Math.sin(u / t) * t), o.setXYZ(s, u, d, h);
                }
                i.boundingSphere = this.geometry.boundingSphere, i.boundingBox = this.geometry.boundingBox, n.matrixWorld = this.matrixWorld, n.material.side = this.material.side, Pt.length = 0, n.raycast(r, Pt);
                for(let s = 0; s < Pt.length; s++)Pt[s].object = this, c.push(Pt[s]);
            }
        }
        copy(r) {
            const c = this.geometry;
            return super.copy(r), this.geometry = c, aa.forEach((f)=>{
                this[f] = r[f];
            }), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    go.forEach((l)=>{
        const r = "_private_" + l;
        Object.defineProperty(mo.prototype, l, {
            get () {
                return this[r];
            },
            set (c) {
                c !== this[r] && (this[r] = c, this._needsSync = !0);
            }
        });
    });
    new It;
    new pt;
    const Xr = X.forwardRef(({ sdfGlyphSize: l = 64, anchorX: r = "center", anchorY: c = "middle", font: f, fontSize: t = 1, children: e, characters: n, onSync: i, ...o }, a)=>{
        const s = it(({ invalidate: v })=>v), [u] = X.useState(()=>new mo), [d, h] = X.useMemo(()=>{
            const v = [];
            let y = "";
            return X.Children.forEach(e, (m)=>{
                typeof m == "string" || typeof m == "number" ? y += m : v.push(m);
            }), [
                v,
                y
            ];
        }, [
            e
        ]);
        return $o(()=>new Promise((v)=>Vi({
                    font: f,
                    characters: n
                }, v)), [
            "troika-text",
            f,
            n
        ]), X.useLayoutEffect(()=>void u.sync(()=>{
                s(), i && i(u);
            })), X.useEffect(()=>()=>u.dispose(), [
            u
        ]), X.createElement("primitive", at({
            object: u,
            ref: a,
            font: f,
            text: h,
            anchorX: r,
            anchorY: c,
            fontSize: t,
            sdfGlyphSize: l
        }, o), d);
    });
    function sa(l, r, c, f) {
        var t;
        return t = class extends Zn {
            constructor(e){
                super({
                    vertexShader: r,
                    fragmentShader: c,
                    ...e
                });
                for(const n in l)this.uniforms[n] = new Io(l[n]), Object.defineProperty(this, n, {
                    get () {
                        return this.uniforms[n].value;
                    },
                    set (i) {
                        this.uniforms[n].value = i;
                    }
                });
                this.uniforms = fr.clone(this.uniforms);
            }
        }, t.key = $n.generateUUID(), t;
    }
    const la = ()=>parseInt(Kn.replace(/\D+/g, "")), fa = la();
    function ca(l, r, c) {
        const f = it((h)=>h.size), t = it((h)=>h.viewport), e = typeof l == "number" ? l : f.width * t.dpr, n = f.height * t.dpr, i = (typeof l == "number" ? c : l) || {}, { samples: o = 0, depth: a, ...s } = i, u = a ?? i.depthBuffer, d = X.useMemo(()=>{
            const h = new zo(e, n, {
                minFilter: cr,
                magFilter: cr,
                type: jo,
                ...s
            });
            return u && (h.depthTexture = new No(e, n, Wo)), h.samples = o, h;
        }, []);
        return X.useLayoutEffect(()=>{
            d.setSize(e, n), o && (d.samples = o);
        }, [
            o,
            d,
            e,
            n
        ]), X.useEffect(()=>()=>d.dispose(), []), d;
    }
    const ua = (l)=>typeof l == "function", da = X.forwardRef(({ envMap: l, resolution: r = 256, frames: c = 1 / 0, makeDefault: f, children: t, ...e }, n)=>{
        const i = it(({ set: m })=>m), o = it(({ camera: m })=>m), a = it(({ size: m })=>m), s = X.useRef(null);
        X.useImperativeHandle(n, ()=>s.current, []);
        const u = X.useRef(null), d = ca(r);
        X.useLayoutEffect(()=>{
            e.manual || (s.current.aspect = a.width / a.height);
        }, [
            a,
            e
        ]), X.useLayoutEffect(()=>{
            s.current.updateProjectionMatrix();
        });
        let h = 0, v = null;
        const y = ua(t);
        return Gt((m)=>{
            y && (c === 1 / 0 || h < c) && (u.current.visible = !1, m.gl.setRenderTarget(d), v = m.scene.background, l && (m.scene.background = l), m.gl.render(m.scene, s.current), m.scene.background = v, m.gl.setRenderTarget(null), u.current.visible = !0, h++);
        }), X.useLayoutEffect(()=>{
            if (f) {
                const m = o;
                return i(()=>({
                        camera: s.current
                    })), ()=>i(()=>({
                            camera: m
                        }));
            }
        }, [
            s,
            f,
            i
        ]), X.createElement(X.Fragment, null, X.createElement("perspectiveCamera", at({
            ref: s
        }, e), !y && t), X.createElement("group", {
            ref: u
        }, y && t(d.texture)));
    }), ha = sa({
        cellSize: .5,
        sectionSize: 1,
        fadeDistance: 100,
        fadeStrength: 1,
        fadeFrom: 1,
        cellThickness: .5,
        sectionThickness: 1,
        cellColor: new pt,
        sectionColor: new pt,
        infiniteGrid: !1,
        followCamera: !1,
        worldCamProjPosition: new Ee,
        worldPlanePosition: new Ee
    }, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform vec3 worldPlanePosition;
    uniform float fadeDistance;
    uniform bool infiniteGrid;
    uniform bool followCamera;

    void main() {
      localPosition = position.xzy;
      if (infiniteGrid) localPosition *= 1.0 + fadeDistance;
      
      worldPosition = modelMatrix * vec4(localPosition, 1.0);
      if (followCamera) {
        worldPosition.xyz += (worldCamProjPosition - worldPlanePosition);
        localPosition = (inverse(modelMatrix) * worldPosition).xyz;
      }

      gl_Position = projectionMatrix * viewMatrix * worldPosition;
    }
  `, `
    varying vec3 localPosition;
    varying vec4 worldPosition;

    uniform vec3 worldCamProjPosition;
    uniform float cellSize;
    uniform float sectionSize;
    uniform vec3 cellColor;
    uniform vec3 sectionColor;
    uniform float fadeDistance;
    uniform float fadeStrength;
    uniform float fadeFrom;
    uniform float cellThickness;
    uniform float sectionThickness;

    float getGrid(float size, float thickness) {
      vec2 r = localPosition.xz / size;
      vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);
      float line = min(grid.x, grid.y) + 1.0 - thickness;
      return 1.0 - min(line, 1.0);
    }

    void main() {
      float g1 = getGrid(cellSize, cellThickness);
      float g2 = getGrid(sectionSize, sectionThickness);

      vec3 from = worldCamProjPosition*vec3(fadeFrom);
      float dist = distance(from, worldPosition.xyz);
      float d = 1.0 - min(dist / fadeDistance, 1.0);
      vec3 color = mix(cellColor, sectionColor, min(1.0, sectionThickness * g2));

      gl_FragColor = vec4(color, (g1 + g2) * pow(d, fadeStrength));
      gl_FragColor.a = mix(0.75 * gl_FragColor.a, gl_FragColor.a, g2);
      if (gl_FragColor.a <= 0.0) discard;

      #include <tonemapping_fragment>
      #include <${fa >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
    }
  `), pa = X.forwardRef(({ args: l, cellColor: r = "#000000", sectionColor: c = "#2080ff", cellSize: f = .5, sectionSize: t = 1, followCamera: e = !1, infiniteGrid: n = !1, fadeDistance: i = 100, fadeStrength: o = 1, fadeFrom: a = 1, cellThickness: s = .5, sectionThickness: u = 1, side: d = Ho, ...h }, v)=>{
        Vo({
            GridMaterial: ha
        });
        const y = X.useRef(null);
        X.useImperativeHandle(v, ()=>y.current, []);
        const m = new Xo, M = new Ee(0, 1, 0), _ = new Ee(0, 0, 0);
        Gt((w)=>{
            m.setFromNormalAndCoplanarPoint(M, _).applyMatrix4(y.current.matrixWorld);
            const D = y.current.material, U = D.uniforms.worldCamProjPosition, k = D.uniforms.worldPlanePosition;
            m.projectPoint(w.camera.position, U.value), k.value.set(0, 0, 0).applyMatrix4(y.current.matrixWorld);
        });
        const b = {
            cellSize: f,
            sectionSize: t,
            cellColor: r,
            sectionColor: c,
            cellThickness: s,
            sectionThickness: u
        }, p = {
            fadeDistance: i,
            fadeStrength: o,
            fadeFrom: a,
            infiniteGrid: n,
            followCamera: e
        };
        return X.createElement("mesh", at({
            ref: y,
            frustumCulled: !1
        }, h), X.createElement("gridMaterial", at({
            transparent: !0,
            "extensions-derivatives": !0,
            side: d
        }, b, p)), X.createElement("planeGeometry", {
            args: l
        }));
    });
    function va(l, r) {
        const c = l + "Geometry";
        return X.forwardRef(({ args: f, children: t, ...e }, n)=>{
            const i = X.useRef(null);
            return X.useImperativeHandle(n, ()=>i.current), X.useLayoutEffect(()=>void r?.(i.current)), X.createElement("mesh", at({
                ref: i
            }, e), X.createElement(c, {
                attach: "geometry",
                args: f
            }), t);
        });
    }
    const ar = va("circle"), Xn = {
        showLabels: !0,
        showNodeDetails: !0,
        nodeScale: 1,
        edgeWidth: 2,
        linkDistance: 150,
        chargeStrength: -500,
        gravity: .05,
        friction: .9,
        maxFPS: 60,
        lodEnabled: !0,
        highContrast: !1,
        reducedMotion: !1
    }, hr = Yo((l)=>({
            sidebarOpen: !0,
            sidebarTab: "details",
            menuOpen: null,
            loadingProgress: 0,
            loadingMessage: "",
            notifications: [],
            viewport: {
                zoom: 1,
                rotation: [
                    0,
                    0,
                    0
                ],
                target: [
                    0,
                    0,
                    0
                ],
                mode: "2d"
            },
            settings: Xn,
            toggleSidebar: ()=>l((r)=>({
                        sidebarOpen: !r.sidebarOpen
                    })),
            setSidebarTab: (r)=>l({
                    sidebarTab: r
                }),
            setMenuOpen: (r)=>l({
                    menuOpen: r
                }),
            setLoadingProgress: (r, c)=>l({
                    loadingProgress: r,
                    loadingMessage: c || ""
                }),
            addNotification: (r)=>l((c)=>{
                    const f = `notification-${Date.now()}-${Math.random()}`, t = {
                        ...r,
                        id: f
                    };
                    return r.duration !== 0 && setTimeout(()=>{
                        l((e)=>({
                                notifications: e.notifications.filter((n)=>n.id !== f)
                            }));
                    }, r.duration || 5e3), {
                        notifications: [
                            ...c.notifications,
                            t
                        ]
                    };
                }),
            removeNotification: (r)=>l((c)=>({
                        notifications: c.notifications.filter((f)=>f.id !== r)
                    })),
            setZoom: (r)=>l((c)=>({
                        viewport: {
                            ...c.viewport,
                            zoom: r
                        }
                    })),
            setRotation: (r)=>l((c)=>({
                        viewport: {
                            ...c.viewport,
                            rotation: r
                        }
                    })),
            setTarget: (r)=>l((c)=>({
                        viewport: {
                            ...c.viewport,
                            target: r
                        }
                    })),
            toggleViewMode: ()=>l((r)=>({
                        viewport: {
                            ...r.viewport,
                            mode: r.viewport.mode === "2d" ? "3d" : "2d"
                        }
                    })),
            updateSettings: (r)=>l((c)=>({
                        settings: {
                            ...c.settings,
                            ...r
                        }
                    })),
            resetSettings: ()=>l({
                    settings: Xn
                })
        }));
    function ga(l = {}) {
        const { autoStart: r = !0, iterations: c } = l, f = X.useRef(null), [t, e] = X.useState(!1), [n, i] = X.useState(!1), [o, a] = X.useState(1), { nodes: s, edges: u, updateNodePosition: d } = St(), { settings: h } = hr();
        return X.useEffect(()=>{
            let b = !0;
            async function p() {
                try {
                    const w = await To(()=>import("./webvowl_wasm-CAkdAINA.js"), []);
                    if (await w.default(), !b) return;
                    f.current = new w.WebVowl, e(!0), f.current.setCenter(0, 0), f.current.setLinkDistance(h.linkDistance), f.current.setChargeStrength(h.chargeStrength);
                } catch (w) {
                    console.error("Failed to initialize WASM:", w);
                }
            }
            return p(), ()=>{
                b = !1, f.current && (f.current = null);
            };
        }, []), X.useEffect(()=>{
            if (!f.current || !t || s.size === 0) return;
            const b = {
                header: {
                    title: {
                        en: "Ontology Graph"
                    }
                },
                namespace: [],
                class: Array.from(s.values()).map((p)=>({
                        id: p.id,
                        type: p.type
                    })),
                classAttribute: Array.from(s.values()).map((p)=>({
                        id: p.id,
                        label: {
                            en: p.label
                        },
                        iri: p.iri
                    })),
                property: Array.from(u.values()).filter((p)=>p.source && p.target).map((p)=>({
                        id: p.id,
                        type: p.type === "objectProperty" ? "owl:ObjectProperty" : "owl:DatatypeProperty"
                    })),
                propertyAttribute: Array.from(u.values()).filter((p)=>p.source && p.target).map((p)=>({
                        id: p.id,
                        domain: p.source,
                        range: p.target,
                        label: {
                            en: p.label || p.id
                        },
                        iri: `http://example.org/${p.id}`
                    }))
            };
            try {
                console.log(`[useWasmSimulation] Loading ${b.class.length} nodes, ${b.property.length} edges into WASM`);
                const p = b.propertyAttribute.find((w)=>w.id === "1003");
                if (p) {
                    console.log("[useWasmSimulation] Property 1003:", JSON.stringify(p, null, 2)), console.log("[useWasmSimulation] Domain value type:", typeof p.domain[0], "Value:", p.domain[0]), console.log("[useWasmSimulation] Range value type:", typeof p.range[0], "Value:", p.range[0]);
                    const w = b.class.some((U)=>U.id === p.domain[0]), D = b.class.some((U)=>U.id === p.range[0]);
                    console.log(`[useWasmSimulation] Domain ${p.domain[0]} exists: ${w}, Range ${p.range[0]} exists: ${D}`);
                } else {
                    console.log("[useWasmSimulation] Property 1003 not in propertyAttribute");
                    const w = b.property.find((D)=>D.id === "1003");
                    console.log("[useWasmSimulation] Property 1003 in property array:", w);
                }
                f.current.loadOntology(JSON.stringify(b)), f.current.initSimulation(), r && (c ? (f.current.runSimulation(c), i(!1)) : (i(!0), console.log("[useWasmSimulation] Simulation started")));
            } catch (p) {
                console.error("Failed to load ontology into WASM:", p);
            }
        }, [
            s,
            u,
            t,
            r,
            c
        ]), X.useEffect(()=>{
            f.current && (f.current.setLinkDistance(h.linkDistance), f.current.setChargeStrength(h.chargeStrength));
        }, [
            h.linkDistance,
            h.chargeStrength
        ]), Gt(()=>{
            const b = f.current;
            if (!(!b || !n)) try {
                if (b.isFinished()) {
                    i(!1), a(0);
                    return;
                }
                b.tick();
                const p = b.getAlpha();
                a(p);
                const w = b.getGraphData();
                w && w.nodes && w.nodes.forEach((D)=>{
                    d(D.id, [
                        D.x,
                        D.y,
                        0
                    ]);
                });
            } catch (p) {
                console.error("Simulation tick error:", p), i(!1);
            }
        }), {
            isInitialized: t,
            isRunning: n,
            alpha: o,
            start: ()=>{
                f.current && !n && i(!0);
            },
            stop: ()=>{
                i(!1);
            },
            reset: ()=>{
                f.current && (f.current.initSimulation(), a(1), r && i(!0));
            },
            step: ()=>{
                if (f.current && !n) {
                    f.current.tick();
                    const b = f.current.getGraphData();
                    b && b.nodes && b.nodes.forEach((p)=>{
                        d(p.id, [
                            p.x,
                            p.y,
                            0
                        ]);
                    }), a(f.current.getAlpha());
                }
            },
            checkNodeClick: (b, p)=>null
        };
    }
    function ma({ node: l }) {
        const r = X.useRef(null), [c, f] = X.useState(!1), [t, e] = X.useState(null), { selectNode: n, hoverNode: i, selectedNode: o } = St(), { settings: a } = hr(), s = o === l.id, u = l.properties?.instances || 0, d = 1.6, v = (u > 0 ? Math.sqrt(u) * .1 + d : d) * a.nodeScale, y = ()=>s ? "#67bc0f" : c ? "#8cd0f0" : "#aaccee", m = (p)=>{
            e({
                x: p.clientX,
                y: p.clientY
            });
        }, M = (p)=>{
            if (p.stopPropagation(), t && Math.sqrt(Math.pow(p.clientX - t.x, 2) + Math.pow(p.clientY - t.y, 2)) > 5) {
                e(null);
                return;
            }
            if (e(null), p.detail === 2 || p.metaKey || p.ctrlKey) {
                const D = `https://narrativegoldmine.com/#/page/${encodeURIComponent(l.label.toLowerCase())}`;
                window.open(D, "_blank");
            } else n(s ? null : l.id);
        }, _ = (p)=>{
            p.stopPropagation(), f(!0), i(l.id), document.body.style.cursor = "pointer", p.object && p.object.el && (p.object.el.title = `${l.label}

Double-click or Ctrl+Click to open page`);
        }, b = ()=>{
            f(!1), i(null), document.body.style.cursor = "auto";
        };
        return Gt(()=>{
            if (r.current && !l.pinned) {
                const p = new Ee(l.position.x, l.position.y, l.position.z);
                r.current.position.lerp(p, .1);
            }
        }), me.jsxs("group", {
            children: [
                me.jsx(ar, {
                    ref: r,
                    args: [
                        v,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z
                    ],
                    onPointerDown: m,
                    onClick: M,
                    onPointerOver: _,
                    onPointerOut: b,
                    children: me.jsx("meshBasicMaterial", {
                        color: y(),
                        transparent: !0,
                        opacity: l.opacity || 1
                    })
                }),
                me.jsx(ar, {
                    args: [
                        v + 2,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .1
                    ],
                    children: me.jsx("meshBasicMaterial", {
                        color: s ? "#67bc0f" : "#333",
                        transparent: !0,
                        opacity: s ? .5 : .2,
                        side: Ot
                    })
                }),
                a.showLabels && me.jsx(Xr, {
                    position: [
                        l.position.x,
                        l.position.y - v - 3,
                        l.position.z + 1
                    ],
                    fontSize: 1.4,
                    color: "#333",
                    anchorX: "center",
                    anchorY: "middle",
                    maxWidth: v * 4,
                    textAlign: "center",
                    children: l.label
                }),
                a.showNodeDetails && u > 0 && me.jsx(Xr, {
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z + 2
                    ],
                    fontSize: 1,
                    color: "#666",
                    anchorX: "center",
                    anchorY: "middle",
                    children: u
                }),
                s && me.jsx(ar, {
                    args: [
                        v + 8,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .2
                    ],
                    children: me.jsx("meshBasicMaterial", {
                        color: "#67bc0f",
                        transparent: !0,
                        opacity: .3,
                        side: Ot
                    })
                }),
                c && !s && me.jsx(ar, {
                    args: [
                        v + 5,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .15
                    ],
                    children: me.jsx("meshBasicMaterial", {
                        color: "#8cd0f0",
                        transparent: !0,
                        opacity: .2,
                        side: Ot
                    })
                })
            ]
        });
    }
    function ya({ edge: l }) {
        const { nodes: r, selectedEdge: c } = St(), { settings: f } = hr(), t = c === l.id, e = r.get(l.source), n = r.get(l.target), i = X.useMemo(()=>!e || !n ? null : [
                new Ee(e.position.x, e.position.y, e.position.z),
                new Ee(n.position.x, n.position.y, n.position.z)
            ], [
            e,
            n
        ]);
        if (!i || !e || !n) return null;
        const o = ()=>{
            if (t) return "#67bc0f";
            switch(l.type){
                case "subclass":
                    return "#444";
                case "objectProperty":
                    return "#999";
                case "datatypeProperty":
                    return "#666";
                case "disjoint":
                    return "#ff6666";
                default:
                    return "#999";
            }
        }, a = ()=>(l.type === "subclass" ? 3 : 2) * f.edgeWidth, s = ()=>{
            switch(l.type){
                case "disjoint":
                    return [
                        5,
                        5
                    ];
                default:
                    return;
            }
        }, u = X.useMemo(()=>new Ee((i[0].x + i[1].x) / 2, (i[0].y + i[1].y) / 2, (i[0].z + i[1].z) / 2 + 1), [
            i
        ]), d = X.useMemo(()=>new Ee().subVectors(i[1], i[0]).normalize(), [
            i
        ]);
        return me.jsxs("group", {
            children: [
                me.jsx(Mn, {
                    points: i,
                    color: o(),
                    lineWidth: a(),
                    transparent: !0,
                    opacity: l.opacity || .6,
                    dashed: !!s(),
                    dashSize: s()?.[0],
                    gapSize: s()?.[1]
                }),
                f.showLabels && l.label && me.jsx(Xr, {
                    position: u,
                    fontSize: 10,
                    color: "#666",
                    anchorX: "center",
                    anchorY: "middle",
                    maxWidth: 200,
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    padding: .05,
                    children: l.label
                }),
                l.type !== "disjoint" && me.jsxs("mesh", {
                    position: [
                        n.position.x - d.x * 25,
                        n.position.y - d.y * 25,
                        n.position.z
                    ],
                    rotation: [
                        0,
                        0,
                        Math.atan2(d.y, d.x)
                    ],
                    children: [
                        me.jsx("coneGeometry", {
                            args: [
                                5,
                                10,
                                8
                            ]
                        }),
                        me.jsx("meshBasicMaterial", {
                            color: o(),
                            transparent: !0,
                            opacity: l.opacity || .6
                        })
                    ]
                }),
                t && me.jsx(Mn, {
                    points: i,
                    color: "#67bc0f",
                    lineWidth: a() + 4,
                    transparent: !0,
                    opacity: .3
                })
            ]
        });
    }
    function ba() {
        const { nodes: l, edges: r, filteredNodes: c, filteredEdges: f } = St(), { isRunning: t, alpha: e } = ga({
            autoStart: !0
        }), n = Array.from(l.values()).filter((o)=>c.has(o.id)), i = Array.from(r.values()).filter((o)=>f.has(o.id));
        return me.jsxs("group", {
            children: [
                i.map((o)=>me.jsx(ya, {
                        edge: o
                    }, o.id)),
                n.map((o)=>me.jsx(ma, {
                        node: o
                    }, o.id)),
                t && me.jsx(Tn, {
                    position: [
                        0,
                        250,
                        0
                    ],
                    center: !0,
                    style: {
                        pointerEvents: "none",
                        userSelect: "none"
                    },
                    children: me.jsxs("div", {
                        style: {
                            background: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            padding: "8px 16px",
                            borderRadius: "4px",
                            fontSize: "14px",
                            fontFamily: "system-ui, sans-serif"
                        },
                        children: [
                            "Simulating... ",
                            (e * 100).toFixed(0),
                            "%"
                        ]
                    })
                }),
                l.size === 0 && me.jsx(Tn, {
                    center: !0,
                    children: me.jsxs("div", {
                        style: {
                            textAlign: "center",
                            color: "#999",
                            fontSize: "18px",
                            fontFamily: "system-ui, sans-serif"
                        },
                        children: [
                            me.jsx("h2", {
                                children: "No ontology loaded"
                            }),
                            me.jsx("p", {
                                children: "Drop a JSON file or select from the menu"
                            })
                        ]
                    })
                })
            ]
        });
    }
    function xa() {
        const { viewport: l } = hr(), r = l.mode === "3d";
        return me.jsx("div", {
            style: {
                width: "100%",
                height: "100vh",
                background: "#f5f5f5"
            },
            children: me.jsxs(Jo, {
                gl: {
                    antialias: !0,
                    alpha: !0,
                    powerPreference: "high-performance"
                },
                dpr: [
                    1,
                    2
                ],
                children: [
                    me.jsx(da, {
                        makeDefault: !0,
                        position: r ? [
                            0,
                            300,
                            500
                        ] : [
                            0,
                            0,
                            500
                        ],
                        fov: 50
                    }),
                    me.jsx(Ko, {
                        enableDamping: !0,
                        dampingFactor: .05,
                        minDistance: 50,
                        maxDistance: 2e3,
                        enableRotate: r,
                        enablePan: !0,
                        mouseButtons: {
                            LEFT: 2,
                            MIDDLE: 1,
                            RIGHT: 0
                        }
                    }),
                    me.jsx("ambientLight", {
                        intensity: .6
                    }),
                    me.jsx("directionalLight", {
                        position: [
                            10,
                            10,
                            5
                        ],
                        intensity: .5
                    }),
                    me.jsx("pointLight", {
                        position: [
                            -10,
                            -10,
                            -5
                        ],
                        intensity: .3
                    }),
                    r && me.jsx(pa, {
                        args: [
                            1e3,
                            1e3
                        ],
                        cellColor: "#cccccc",
                        sectionColor: "#aaaaaa",
                        fadeDistance: 800,
                        fadeStrength: 1
                    }),
                    me.jsx(ba, {})
                ]
            })
        });
    }
    function Sa() {
        const [l, r] = Eo(), c = {
            zoom: parseFloat(l.get("zoom") || "1"),
            rotation: l.get("rotation")?.split(",").map(Number) || [
                0,
                0,
                0
            ],
            selectedNode: l.get("selected") || null
        }, f = X.useCallback((t)=>{
            r((e)=>{
                const n = new URLSearchParams(e);
                return t.zoom !== void 0 && n.set("zoom", t.zoom.toString()), t.rotation !== void 0 && n.set("rotation", t.rotation.join(",")), t.selectedNode !== void 0 && (t.selectedNode === null ? n.delete("selected") : n.set("selected", t.selectedNode)), n;
            }, {
                replace: !0
            });
        }, [
            r
        ]);
        return [
            c,
            f
        ];
    }
    Ta = function() {
        const { nodeId: l } = ko(), r = Co(), c = St((n)=>n.setSelectedNode), [f, t] = Sa();
        X.useEffect(()=>{
            l && c(l);
        }, [
            l,
            c
        ]);
        const e = (n)=>{
            const o = St.getState().nodes.get(n);
            o?.label && (t({
                selectedNode: n
            }), r(`/page/${encodeURIComponent(o.label)}`));
        };
        return me.jsx("div", {
            className: "ontology-view",
            children: me.jsx(xa, {
                onNodeClick: e
            })
        });
    };
});
export { Ta as default, __tla };
