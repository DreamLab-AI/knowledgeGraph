import { h as H, v as Eo, _ as Co, m as Jn, j as he, w as ko, o as Ao, __tla as __tla_0 } from "./index-bYWwkQSG.js";
import { a as at, b as Gt, _ as st, D as Ot, V as Ee, c as pt, P as Kn, d as Qn, R as Zn, I as qn, F as _n, e as zr, f as St, W as Do, B as It, S as Jr, g as $n, U as cr, h as Un, M as ur, i as lt, L as Fo, j as eo, k as to, l as vt, m as Mo, n as Po, o as Lo, p as Oo, q as Ro, r as Bo, T as Go, s as fr, t as Io, v as Kr, w as No, x as zo, H as jo, y as Wo, z as Vo, A as Ho, E as Xo, G as Yo, J as Jo, u as it, C as Ko, O as Qo } from "./useGraphStore-otTAmbC8.js";
let ka;
let __tla = Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    const Zo = (l)=>typeof l == "object" && typeof l.then == "function", er = [];
    function qo(l, r, f = (c, t)=>c === t) {
        if (l === r) return !0;
        if (!l || !r) return !1;
        const c = l.length;
        if (r.length !== c) return !1;
        for(let t = 0; t < c; t++)if (!f(l[t], r[t])) return !1;
        return !0;
    }
    function $o(l, r = null, f = !1, c = {}) {
        r === null && (r = [
            l
        ]);
        for (const e of er)if (qo(r, e.keys, e.equal)) {
            if (f) return;
            if (Object.prototype.hasOwnProperty.call(e, "error")) throw e.error;
            if (Object.prototype.hasOwnProperty.call(e, "response")) return c.lifespan && c.lifespan > 0 && (e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(e.remove, c.lifespan)), e.response;
            if (!f) throw e.promise;
        }
        const t = {
            keys: r,
            equal: c.equal,
            remove: ()=>{
                const e = er.indexOf(t);
                e !== -1 && er.splice(e, 1);
            },
            promise: (Zo(l) ? l : l(...r)).then((e)=>{
                t.response = e, c.lifespan && c.lifespan > 0 && (t.timeout = setTimeout(t.remove, c.lifespan));
            }).catch((e)=>t.error = e)
        };
        if (er.push(t), !f) throw t.promise;
    }
    const ei = (l, r, f)=>$o(l, r, !1, f), Nt = new Ee, Qr = new Ee, ti = new Ee, Tn = new pt;
    function ri(l, r, f) {
        const c = Nt.setFromMatrixPosition(l.matrixWorld);
        c.project(r);
        const t = f.width / 2, e = f.height / 2;
        return [
            c.x * t + t,
            -(c.y * e) + e
        ];
    }
    function ni(l, r) {
        const f = Nt.setFromMatrixPosition(l.matrixWorld), c = Qr.setFromMatrixPosition(r.matrixWorld), t = f.sub(c), e = r.getWorldDirection(ti);
        return t.angleTo(e) > Math.PI / 2;
    }
    function oi(l, r, f, c) {
        const t = Nt.setFromMatrixPosition(l.matrixWorld), e = t.clone();
        e.project(r), Tn.set(e.x, e.y), f.setFromCamera(Tn, r);
        const n = f.intersectObjects(c, !0);
        if (n.length) {
            const i = n[0].distance;
            return t.distanceTo(f.ray.origin) < i;
        }
        return !0;
    }
    function ii(l, r) {
        if (r instanceof Qn) return r.zoom;
        if (r instanceof Kn) {
            const f = Nt.setFromMatrixPosition(l.matrixWorld), c = Qr.setFromMatrixPosition(r.matrixWorld), t = r.fov * Math.PI / 180, e = f.distanceTo(c);
            return 1 / (2 * Math.tan(t / 2) * e);
        } else return 1;
    }
    function ai(l, r, f) {
        if (r instanceof Kn || r instanceof Qn) {
            const c = Nt.setFromMatrixPosition(l.matrixWorld), t = Qr.setFromMatrixPosition(r.matrixWorld), e = c.distanceTo(t), n = (f[1] - f[0]) / (r.far - r.near), i = f[1] - n * r.far;
            return Math.round(n * e + i);
        }
    }
    const jr = (l)=>Math.abs(l) < 1e-10 ? 0 : l;
    function ro(l, r, f = "") {
        let c = "matrix3d(";
        for(let t = 0; t !== 16; t++)c += jr(r[t] * l.elements[t]) + (t !== 15 ? "," : ")");
        return f + c;
    }
    const si = ((l)=>(r)=>ro(r, l))([
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
    ]), li = ((l)=>(r, f)=>ro(r, l(f), "translate(-50%,-50%)"))((l)=>[
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
    function ci(l) {
        return l && typeof l == "object" && "current" in l;
    }
    const En = H.forwardRef(({ children: l, eps: r = .001, style: f, className: c, prepend: t, center: e, fullscreen: n, portal: i, distanceFactor: o, sprite: a = !1, transform: s = !1, occlude: u, onOcclude: d, castShadow: h, receiveShadow: p, material: v, geometry: g, zIndexRange: F = [
        16777271,
        0
    ], calculatePosition: E = ri, as: b = "div", wrapperClass: y, pointerEvents: x = "auto", ..._ }, T)=>{
        const { gl: w, camera: R, scene: O, size: Y, raycaster: S, events: M, viewport: D } = at(), [W] = H.useState(()=>document.createElement(b)), V = H.useRef(null), J = H.useRef(null), oe = H.useRef(0), N = H.useRef([
            0,
            0
        ]), P = H.useRef(null), m = H.useRef(null), U = i?.current || M.connected || w.domElement.parentNode, k = H.useRef(null), A = H.useRef(!1), C = H.useMemo(()=>u && u !== "blending" || Array.isArray(u) && u.length && ci(u[0]), [
            u
        ]);
        H.useLayoutEffect(()=>{
            const K = w.domElement;
            u && u === "blending" ? (K.style.zIndex = `${Math.floor(F[0] / 2)}`, K.style.position = "absolute", K.style.pointerEvents = "none") : (K.style.zIndex = null, K.style.position = null, K.style.pointerEvents = null);
        }, [
            u
        ]), H.useLayoutEffect(()=>{
            if (J.current) {
                const K = V.current = Eo.createRoot(W);
                if (O.updateMatrixWorld(), s) W.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                else {
                    const B = E(J.current, R, Y);
                    W.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${B[0]}px,${B[1]}px,0);transform-origin:0 0;`;
                }
                return U && (t ? U.prepend(W) : U.appendChild(W)), ()=>{
                    U && U.removeChild(W), K.unmount();
                };
            }
        }, [
            U,
            s
        ]), H.useLayoutEffect(()=>{
            y && (W.className = y);
        }, [
            y
        ]);
        const j = H.useMemo(()=>s ? {
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
                ...f
            }, [
            f,
            e,
            n,
            Y,
            s
        ]), L = H.useMemo(()=>({
                position: "absolute",
                pointerEvents: x
            }), [
            x
        ]);
        H.useLayoutEffect(()=>{
            if (A.current = !1, s) {
                var K;
                (K = V.current) == null || K.render(H.createElement("div", {
                    ref: P,
                    style: j
                }, H.createElement("div", {
                    ref: m,
                    style: L
                }, H.createElement("div", {
                    ref: T,
                    className: c,
                    style: f,
                    children: l
                }))));
            } else {
                var B;
                (B = V.current) == null || B.render(H.createElement("div", {
                    ref: T,
                    style: j,
                    className: c,
                    children: l
                }));
            }
        });
        const G = H.useRef(!0);
        Gt((K)=>{
            if (J.current) {
                R.updateMatrixWorld(), J.current.updateWorldMatrix(!0, !1);
                const B = s ? N.current : E(J.current, R, Y);
                if (s || Math.abs(oe.current - R.zoom) > r || Math.abs(N.current[0] - B[0]) > r || Math.abs(N.current[1] - B[1]) > r) {
                    const z = ni(J.current, R);
                    let ue = !1;
                    C && (Array.isArray(u) ? ue = u.map((ne)=>ne.current) : u !== "blending" && (ue = [
                        O
                    ]));
                    const ce = G.current;
                    if (ue) {
                        const ne = oi(J.current, R, S, ue);
                        G.current = ne && !z;
                    } else G.current = !z;
                    ce !== G.current && (d ? d(!G.current) : W.style.display = G.current ? "block" : "none");
                    const q = Math.floor(F[0] / 2), ie = u ? C ? [
                        F[0],
                        q
                    ] : [
                        q - 1,
                        0
                    ] : F;
                    if (W.style.zIndex = `${ai(J.current, R, ie)}`, s) {
                        const [ne, X] = [
                            Y.width / 2,
                            Y.height / 2
                        ], re = R.projectionMatrix.elements[5] * X, { isOrthographicCamera: te, top: I, left: ve, bottom: $, right: ae } = R, Z = si(R.matrixWorldInverse), Se = te ? `scale(${re})translate(${jr(-(ae + ve) / 2)}px,${jr((I + $) / 2)}px)` : `translateZ(${re}px)`;
                        let ee = J.current.matrixWorld;
                        a && (ee = R.matrixWorldInverse.clone().transpose().copyPosition(ee).scale(J.current.scale), ee.elements[3] = ee.elements[7] = ee.elements[11] = 0, ee.elements[15] = 1), W.style.width = Y.width + "px", W.style.height = Y.height + "px", W.style.perspective = te ? "" : `${re}px`, P.current && m.current && (P.current.style.transform = `${Se}${Z}translate(${ne}px,${X}px)`, m.current.style.transform = li(ee, 1 / ((o || 10) / 400)));
                    } else {
                        const ne = o === void 0 ? 1 : ii(J.current, R) * o;
                        W.style.transform = `translate3d(${B[0]}px,${B[1]}px,0) scale(${ne})`;
                    }
                    N.current = B, oe.current = R.zoom;
                }
            }
            if (!C && k.current && !A.current) if (s) {
                if (P.current) {
                    const B = P.current.children[0];
                    if (B != null && B.clientWidth && B != null && B.clientHeight) {
                        const { isOrthographicCamera: z } = R;
                        if (z || g) _.scale && (Array.isArray(_.scale) ? _.scale instanceof Ee ? k.current.scale.copy(_.scale.clone().divideScalar(1)) : k.current.scale.set(1 / _.scale[0], 1 / _.scale[1], 1 / _.scale[2]) : k.current.scale.setScalar(1 / _.scale));
                        else {
                            const ue = (o || 10) / 400, ce = B.clientWidth * ue, q = B.clientHeight * ue;
                            k.current.scale.set(ce, q, 1);
                        }
                        A.current = !0;
                    }
                }
            } else {
                const B = W.children[0];
                if (B != null && B.clientWidth && B != null && B.clientHeight) {
                    const z = 1 / D.factor, ue = B.clientWidth * z, ce = B.clientHeight * z;
                    k.current.scale.set(ue, ce, 1), A.current = !0;
                }
                k.current.lookAt(K.camera.position);
            }
        });
        const Q = H.useMemo(()=>({
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
        return H.createElement("group", st({}, _, {
            ref: J
        }), u && !C && H.createElement("mesh", {
            castShadow: h,
            receiveShadow: p,
            ref: k
        }, g || H.createElement("planeGeometry", null), v || H.createElement("shaderMaterial", {
            side: Ot,
            vertexShader: Q.vertexShader,
            fragmentShader: Q.fragmentShader
        })));
    }), no = parseInt(Zn.replace(/\D+/g, "")), oo = no >= 125 ? "uv1" : "uv2", Cn = new It, tr = new Ee;
    class Zr extends qn {
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
            ], f = [
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
            ], c = [
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
            this.setIndex(c), this.setAttribute("position", new _n(r, 3)), this.setAttribute("uv", new _n(f, 2));
        }
        applyMatrix4(r) {
            const f = this.attributes.instanceStart, c = this.attributes.instanceEnd;
            return f !== void 0 && (f.applyMatrix4(r), c.applyMatrix4(r), f.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
        }
        setPositions(r) {
            let f;
            r instanceof Float32Array ? f = r : Array.isArray(r) && (f = new Float32Array(r));
            const c = new zr(f, 6, 1);
            return this.setAttribute("instanceStart", new St(c, 3, 0)), this.setAttribute("instanceEnd", new St(c, 3, 3)), this.computeBoundingBox(), this.computeBoundingSphere(), this;
        }
        setColors(r, f = 3) {
            let c;
            r instanceof Float32Array ? c = r : Array.isArray(r) && (c = new Float32Array(r));
            const t = new zr(c, f * 2, 1);
            return this.setAttribute("instanceColorStart", new St(t, f, 0)), this.setAttribute("instanceColorEnd", new St(t, f, f)), this;
        }
        fromWireframeGeometry(r) {
            return this.setPositions(r.attributes.position.array), this;
        }
        fromEdgesGeometry(r) {
            return this.setPositions(r.attributes.position.array), this;
        }
        fromMesh(r) {
            return this.fromWireframeGeometry(new Do(r.geometry)), this;
        }
        fromLineSegments(r) {
            const f = r.geometry;
            return this.setPositions(f.attributes.position.array), this;
        }
        computeBoundingBox() {
            this.boundingBox === null && (this.boundingBox = new It);
            const r = this.attributes.instanceStart, f = this.attributes.instanceEnd;
            r !== void 0 && f !== void 0 && (this.boundingBox.setFromBufferAttribute(r), Cn.setFromBufferAttribute(f), this.boundingBox.union(Cn));
        }
        computeBoundingSphere() {
            this.boundingSphere === null && (this.boundingSphere = new Jr), this.boundingBox === null && this.computeBoundingBox();
            const r = this.attributes.instanceStart, f = this.attributes.instanceEnd;
            if (r !== void 0 && f !== void 0) {
                const c = this.boundingSphere.center;
                this.boundingBox.getCenter(c);
                let t = 0;
                for(let e = 0, n = r.count; e < n; e++)tr.fromBufferAttribute(r, e), t = Math.max(t, c.distanceToSquared(tr)), tr.fromBufferAttribute(f, e), t = Math.max(t, c.distanceToSquared(tr));
                this.boundingSphere.radius = Math.sqrt(t), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
            }
        }
        toJSON() {}
        applyMatrix(r) {
            return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(r);
        }
    }
    class io extends Zr {
        constructor(){
            super(), this.isLineGeometry = !0, this.type = "LineGeometry";
        }
        setPositions(r) {
            const f = r.length - 3, c = new Float32Array(2 * f);
            for(let t = 0; t < f; t += 3)c[2 * t] = r[t], c[2 * t + 1] = r[t + 1], c[2 * t + 2] = r[t + 2], c[2 * t + 3] = r[t + 3], c[2 * t + 4] = r[t + 4], c[2 * t + 5] = r[t + 5];
            return super.setPositions(c), this;
        }
        setColors(r, f = 3) {
            const c = r.length - f, t = new Float32Array(2 * c);
            if (f === 3) for(let e = 0; e < c; e += f)t[2 * e] = r[e], t[2 * e + 1] = r[e + 1], t[2 * e + 2] = r[e + 2], t[2 * e + 3] = r[e + 3], t[2 * e + 4] = r[e + 4], t[2 * e + 5] = r[e + 5];
            else for(let e = 0; e < c; e += f)t[2 * e] = r[e], t[2 * e + 1] = r[e + 1], t[2 * e + 2] = r[e + 2], t[2 * e + 3] = r[e + 3], t[2 * e + 4] = r[e + 4], t[2 * e + 5] = r[e + 5], t[2 * e + 6] = r[e + 6], t[2 * e + 7] = r[e + 7];
            return super.setColors(t, f), this;
        }
        fromLine(r) {
            const f = r.geometry;
            return this.setPositions(f.attributes.position.array), this;
        }
    }
    class qr extends $n {
        constructor(r){
            super({
                type: "LineMaterial",
                uniforms: cr.clone(cr.merge([
                    Un.common,
                    Un.fog,
                    {
                        worldUnits: {
                            value: 1
                        },
                        linewidth: {
                            value: 1
                        },
                        resolution: {
                            value: new pt(1, 1)
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
					#include <${no >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
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
                    set: function(f) {
                        this.uniforms.diffuse.value = f;
                    }
                },
                worldUnits: {
                    enumerable: !0,
                    get: function() {
                        return "WORLD_UNITS" in this.defines;
                    },
                    set: function(f) {
                        f === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
                    }
                },
                linewidth: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.linewidth.value;
                    },
                    set: function(f) {
                        this.uniforms.linewidth.value = f;
                    }
                },
                dashed: {
                    enumerable: !0,
                    get: function() {
                        return "USE_DASH" in this.defines;
                    },
                    set (f) {
                        !!f != "USE_DASH" in this.defines && (this.needsUpdate = !0), f === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
                    }
                },
                dashScale: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashScale.value;
                    },
                    set: function(f) {
                        this.uniforms.dashScale.value = f;
                    }
                },
                dashSize: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashSize.value;
                    },
                    set: function(f) {
                        this.uniforms.dashSize.value = f;
                    }
                },
                dashOffset: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.dashOffset.value;
                    },
                    set: function(f) {
                        this.uniforms.dashOffset.value = f;
                    }
                },
                gapSize: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.gapSize.value;
                    },
                    set: function(f) {
                        this.uniforms.gapSize.value = f;
                    }
                },
                opacity: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.opacity.value;
                    },
                    set: function(f) {
                        this.uniforms.opacity.value = f;
                    }
                },
                resolution: {
                    enumerable: !0,
                    get: function() {
                        return this.uniforms.resolution.value;
                    },
                    set: function(f) {
                        this.uniforms.resolution.value.copy(f);
                    }
                },
                alphaToCoverage: {
                    enumerable: !0,
                    get: function() {
                        return "USE_ALPHA_TO_COVERAGE" in this.defines;
                    },
                    set: function(f) {
                        !!f != "USE_ALPHA_TO_COVERAGE" in this.defines && (this.needsUpdate = !0), f === !0 ? (this.defines.USE_ALPHA_TO_COVERAGE = "", this.extensions.derivatives = !0) : (delete this.defines.USE_ALPHA_TO_COVERAGE, this.extensions.derivatives = !1);
                    }
                }
            }), this.setValues(r);
        }
    }
    const Lr = new lt, kn = new Ee, An = new Ee, Le = new lt, Oe = new lt, Ke = new lt, Or = new Ee, Rr = new eo, Be = new Fo, Dn = new Ee, rr = new It, nr = new Jr, Qe = new lt;
    let Ze, dt;
    function Fn(l, r, f) {
        return Qe.set(0, 0, -r, 1).applyMatrix4(l.projectionMatrix), Qe.multiplyScalar(1 / Qe.w), Qe.x = dt / f.width, Qe.y = dt / f.height, Qe.applyMatrix4(l.projectionMatrixInverse), Qe.multiplyScalar(1 / Qe.w), Math.abs(Math.max(Qe.x, Qe.y));
    }
    function fi(l, r) {
        const f = l.matrixWorld, c = l.geometry, t = c.attributes.instanceStart, e = c.attributes.instanceEnd, n = Math.min(c.instanceCount, t.count);
        for(let i = 0, o = n; i < o; i++){
            Be.start.fromBufferAttribute(t, i), Be.end.fromBufferAttribute(e, i), Be.applyMatrix4(f);
            const a = new Ee, s = new Ee;
            Ze.distanceSqToSegment(Be.start, Be.end, s, a), s.distanceTo(a) < dt * .5 && r.push({
                point: s,
                pointOnLine: a,
                distance: Ze.origin.distanceTo(s),
                object: l,
                face: null,
                faceIndex: i,
                uv: null,
                [oo]: null
            });
        }
    }
    function ui(l, r, f) {
        const c = r.projectionMatrix, e = l.material.resolution, n = l.matrixWorld, i = l.geometry, o = i.attributes.instanceStart, a = i.attributes.instanceEnd, s = Math.min(i.instanceCount, o.count), u = -r.near;
        Ze.at(1, Ke), Ke.w = 1, Ke.applyMatrix4(r.matrixWorldInverse), Ke.applyMatrix4(c), Ke.multiplyScalar(1 / Ke.w), Ke.x *= e.x / 2, Ke.y *= e.y / 2, Ke.z = 0, Or.copy(Ke), Rr.multiplyMatrices(r.matrixWorldInverse, n);
        for(let d = 0, h = s; d < h; d++){
            if (Le.fromBufferAttribute(o, d), Oe.fromBufferAttribute(a, d), Le.w = 1, Oe.w = 1, Le.applyMatrix4(Rr), Oe.applyMatrix4(Rr), Le.z > u && Oe.z > u) continue;
            if (Le.z > u) {
                const b = Le.z - Oe.z, y = (Le.z - u) / b;
                Le.lerp(Oe, y);
            } else if (Oe.z > u) {
                const b = Oe.z - Le.z, y = (Oe.z - u) / b;
                Oe.lerp(Le, y);
            }
            Le.applyMatrix4(c), Oe.applyMatrix4(c), Le.multiplyScalar(1 / Le.w), Oe.multiplyScalar(1 / Oe.w), Le.x *= e.x / 2, Le.y *= e.y / 2, Oe.x *= e.x / 2, Oe.y *= e.y / 2, Be.start.copy(Le), Be.start.z = 0, Be.end.copy(Oe), Be.end.z = 0;
            const v = Be.closestPointToPointParameter(Or, !0);
            Be.at(v, Dn);
            const g = to.lerp(Le.z, Oe.z, v), F = g >= -1 && g <= 1, E = Or.distanceTo(Dn) < dt * .5;
            if (F && E) {
                Be.start.fromBufferAttribute(o, d), Be.end.fromBufferAttribute(a, d), Be.start.applyMatrix4(n), Be.end.applyMatrix4(n);
                const b = new Ee, y = new Ee;
                Ze.distanceSqToSegment(Be.start, Be.end, y, b), f.push({
                    point: y,
                    pointOnLine: b,
                    distance: Ze.origin.distanceTo(y),
                    object: l,
                    face: null,
                    faceIndex: d,
                    uv: null,
                    [oo]: null
                });
            }
        }
    }
    class ao extends ur {
        constructor(r = new Zr, f = new qr({
            color: Math.random() * 16777215
        })){
            super(r, f), this.isLineSegments2 = !0, this.type = "LineSegments2";
        }
        computeLineDistances() {
            const r = this.geometry, f = r.attributes.instanceStart, c = r.attributes.instanceEnd, t = new Float32Array(2 * f.count);
            for(let n = 0, i = 0, o = f.count; n < o; n++, i += 2)kn.fromBufferAttribute(f, n), An.fromBufferAttribute(c, n), t[i] = i === 0 ? 0 : t[i - 1], t[i + 1] = t[i] + kn.distanceTo(An);
            const e = new zr(t, 2, 1);
            return r.setAttribute("instanceDistanceStart", new St(e, 1, 0)), r.setAttribute("instanceDistanceEnd", new St(e, 1, 1)), this;
        }
        raycast(r, f) {
            const c = this.material.worldUnits, t = r.camera;
            t === null && !c && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
            const e = r.params.Line2 !== void 0 && r.params.Line2.threshold || 0;
            Ze = r.ray;
            const n = this.matrixWorld, i = this.geometry, o = this.material;
            dt = o.linewidth + e, i.boundingSphere === null && i.computeBoundingSphere(), nr.copy(i.boundingSphere).applyMatrix4(n);
            let a;
            if (c) a = dt * .5;
            else {
                const u = Math.max(t.near, nr.distanceToPoint(Ze.origin));
                a = Fn(t, u, o.resolution);
            }
            if (nr.radius += a, Ze.intersectsSphere(nr) === !1) return;
            i.boundingBox === null && i.computeBoundingBox(), rr.copy(i.boundingBox).applyMatrix4(n);
            let s;
            if (c) s = dt * .5;
            else {
                const u = Math.max(t.near, rr.distanceToPoint(Ze.origin));
                s = Fn(t, u, o.resolution);
            }
            rr.expandByScalar(s), Ze.intersectsBox(rr) !== !1 && (c ? fi(this, f) : ui(this, t, f));
        }
        onBeforeRender(r) {
            const f = this.material.uniforms;
            f && f.resolution && (r.getViewport(Lr), this.material.uniforms.resolution.value.set(Lr.z, Lr.w));
        }
    }
    class di extends ao {
        constructor(r = new io, f = new qr({
            color: Math.random() * 16777215
        })){
            super(r, f), this.isLine2 = !0, this.type = "Line2";
        }
    }
    const Mn = H.forwardRef(function({ points: r, color: f = 16777215, vertexColors: c, linewidth: t, lineWidth: e, segments: n, dashed: i, ...o }, a) {
        var s, u;
        const d = at((F)=>F.size), h = H.useMemo(()=>n ? new ao : new di, [
            n
        ]), [p] = H.useState(()=>new qr), v = (c == null || (s = c[0]) == null ? void 0 : s.length) === 4 ? 4 : 3, g = H.useMemo(()=>{
            const F = n ? new Zr : new io, E = r.map((b)=>{
                const y = Array.isArray(b);
                return b instanceof Ee || b instanceof lt ? [
                    b.x,
                    b.y,
                    b.z
                ] : b instanceof pt ? [
                    b.x,
                    b.y,
                    0
                ] : y && b.length === 3 ? [
                    b[0],
                    b[1],
                    b[2]
                ] : y && b.length === 2 ? [
                    b[0],
                    b[1],
                    0
                ] : b;
            });
            if (F.setPositions(E.flat()), c) {
                f = 16777215;
                const b = c.map((y)=>y instanceof vt ? y.toArray() : y);
                F.setColors(b.flat(), v);
            }
            return F;
        }, [
            r,
            n,
            c,
            v
        ]);
        return H.useLayoutEffect(()=>{
            h.computeLineDistances();
        }, [
            r,
            h
        ]), H.useLayoutEffect(()=>{
            i ? p.defines.USE_DASH = "" : delete p.defines.USE_DASH, p.needsUpdate = !0;
        }, [
            i,
            p
        ]), H.useEffect(()=>()=>{
                g.dispose(), p.dispose();
            }, [
            g
        ]), H.createElement("primitive", st({
            object: h,
            ref: a
        }, o), H.createElement("primitive", {
            object: g,
            attach: "geometry"
        }), H.createElement("primitive", st({
            object: p,
            attach: "material",
            color: f,
            vertexColors: !!c,
            resolution: [
                d.width,
                d.height
            ],
            linewidth: (u = t ?? e) !== null && u !== void 0 ? u : 1,
            dashed: i,
            transparent: v === 4
        }, o)));
    });
    function hi() {
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
                }), a = c("<" + i + ">.init", a), s && (s = c("<" + i + ">.getTransferables", s));
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
        function f(t, e) {
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
        function c(t, e) {
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
                }), i === "callModule" && f(o, function(a, s) {
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
    function pi(l) {
        var r = function() {
            for(var f = [], c = arguments.length; c--;)f[c] = arguments[c];
            return r._getInitResult().then(function(t) {
                if (typeof t == "function") return t.apply(void 0, f);
                throw new Error("Worker module function was called but `init` did not return a callable function");
            });
        };
        return r._getInitResult = function() {
            var f = l.dependencies, c = l.init;
            f = Array.isArray(f) ? f.map(function(e) {
                return e && (e = e.onMainThread || e, e._getInitResult && (e = e._getInitResult())), e;
            }) : [];
            var t = Promise.all(f).then(function(e) {
                return c.apply(null, e);
            });
            return r._getInitResult = function() {
                return t;
            }, t;
        }, r;
    }
    var so = function() {
        var l = !1;
        if (typeof window < "u" && typeof window.document < "u") try {
            var r = new Worker(URL.createObjectURL(new Blob([
                ""
            ], {
                type: "application/javascript"
            })));
            r.terminate(), l = !0;
        } catch (f) {
            console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + f.message + "]");
        }
        return so = function() {
            return l;
        }, l;
    }, vi = 0, gi = 0, Br = !1, Rt = Object.create(null), Bt = Object.create(null), Wr = Object.create(null);
    function wt(l) {
        if ((!l || typeof l.init != "function") && !Br) throw new Error("requires `options.init` function");
        var r = l.dependencies, f = l.init, c = l.getTransferables, t = l.workerId, e = pi(l);
        t == null && (t = "#default");
        var n = "workerModule" + ++vi, i = l.name || n, o = null;
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
            if (!so()) return e.apply(void 0, s);
            if (!o) {
                o = Pn(t, "registerModule", a.workerModuleData);
                var d = function() {
                    o = null, Bt[t].delete(d);
                };
                (Bt[t] || (Bt[t] = new Set)).add(d);
            }
            return o.then(function(h) {
                var p = h.isCallable;
                if (p) return Pn(t, "callModule", {
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
            init: sr(f),
            getTransferables: c && sr(c)
        }, a.onMainThread = e, a;
    }
    function mi(l) {
        Bt[l] && Bt[l].forEach(function(r) {
            r();
        }), Rt[l] && (Rt[l].terminate(), delete Rt[l]);
    }
    function sr(l) {
        var r = l.toString();
        return !/^function/.test(r) && /^\w+\s*\(/.test(r) && (r = "function " + r), r;
    }
    function yi(l) {
        var r = Rt[l];
        if (!r) {
            var f = sr(hi);
            r = Rt[l] = new Worker(URL.createObjectURL(new Blob([
                "/** Worker Module Bootstrap: " + l.replace(/\*/g, "") + ` **/

;(` + f + ")()"
            ], {
                type: "application/javascript"
            }))), r.onmessage = function(c) {
                var t = c.data, e = t.messageId, n = Wr[e];
                if (!n) throw new Error("WorkerModule response with empty or unknown messageId");
                delete Wr[e], n(t);
            };
        }
        return r;
    }
    function Pn(l, r, f) {
        return new Promise(function(c, t) {
            var e = ++gi;
            Wr[e] = function(n) {
                n.success ? c(n.result) : t(new Error("Error in worker " + r + " call: " + n.error));
            }, yi(l).postMessage({
                messageId: e,
                action: r,
                data: f
            });
        });
    }
    function lo() {
        var l = (function(r) {
            function f(N, P, m, U, k, A, C, j) {
                var L = 1 - C;
                j.x = L * L * N + 2 * L * C * m + C * C * k, j.y = L * L * P + 2 * L * C * U + C * C * A;
            }
            function c(N, P, m, U, k, A, C, j, L, G) {
                var Q = 1 - L;
                G.x = Q * Q * Q * N + 3 * Q * Q * L * m + 3 * Q * L * L * k + L * L * L * C, G.y = Q * Q * Q * P + 3 * Q * Q * L * U + 3 * Q * L * L * A + L * L * L * j;
            }
            function t(N, P) {
                for(var m = /([MLQCZ])([^MLQCZ]*)/g, U, k, A, C, j; U = m.exec(N);){
                    var L = U[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(G) {
                        return parseFloat(G);
                    });
                    switch(U[1]){
                        case "M":
                            C = k = L[0], j = A = L[1];
                            break;
                        case "L":
                            (L[0] !== C || L[1] !== j) && P("L", C, j, C = L[0], j = L[1]);
                            break;
                        case "Q":
                            {
                                P("Q", C, j, C = L[2], j = L[3], L[0], L[1]);
                                break;
                            }
                        case "C":
                            {
                                P("C", C, j, C = L[4], j = L[5], L[0], L[1], L[2], L[3]);
                                break;
                            }
                        case "Z":
                            (C !== k || j !== A) && P("L", C, j, k, A);
                            break;
                    }
                }
            }
            function e(N, P, m) {
                m === void 0 && (m = 16);
                var U = {
                    x: 0,
                    y: 0
                };
                t(N, function(k, A, C, j, L, G, Q, K, B) {
                    switch(k){
                        case "L":
                            P(A, C, j, L);
                            break;
                        case "Q":
                            {
                                for(var z = A, ue = C, ce = 1; ce < m; ce++)f(A, C, G, Q, j, L, ce / (m - 1), U), P(z, ue, U.x, U.y), z = U.x, ue = U.y;
                                break;
                            }
                        case "C":
                            {
                                for(var q = A, ie = C, ne = 1; ne < m; ne++)c(A, C, G, Q, K, B, j, L, ne / (m - 1), U), P(q, ie, U.x, U.y), q = U.x, ie = U.y;
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
            function s(N, P) {
                var m = N.getContext ? N.getContext("webgl", a) : N, U = o.get(m);
                if (!U) {
                    let Q = function(q) {
                        var ie = A[q];
                        if (!ie && (ie = A[q] = m.getExtension(q), !ie)) throw new Error(q + " not supported");
                        return ie;
                    }, K = function(q, ie) {
                        var ne = m.createShader(ie);
                        return m.shaderSource(ne, q), m.compileShader(ne), ne;
                    }, B = function(q, ie, ne, X) {
                        if (!C[q]) {
                            var re = {}, te = {}, I = m.createProgram();
                            m.attachShader(I, K(ie, m.VERTEX_SHADER)), m.attachShader(I, K(ne, m.FRAGMENT_SHADER)), m.linkProgram(I), C[q] = {
                                program: I,
                                transaction: function($) {
                                    m.useProgram(I), $({
                                        setUniform: function(Z, Se) {
                                            for(var ee = [], se = arguments.length - 2; se-- > 0;)ee[se] = arguments[se + 2];
                                            var de = te[Se] || (te[Se] = m.getUniformLocation(I, Se));
                                            m["uniform" + Z].apply(m, [
                                                de
                                            ].concat(ee));
                                        },
                                        setAttribute: function(Z, Se, ee, se, de) {
                                            var ge = re[Z];
                                            ge || (ge = re[Z] = {
                                                buf: m.createBuffer(),
                                                loc: m.getAttribLocation(I, Z),
                                                data: null
                                            }), m.bindBuffer(m.ARRAY_BUFFER, ge.buf), m.vertexAttribPointer(ge.loc, Se, m.FLOAT, !1, 0, 0), m.enableVertexAttribArray(ge.loc), k ? m.vertexAttribDivisor(ge.loc, se) : Q("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ge.loc, se), de !== ge.data && (m.bufferData(m.ARRAY_BUFFER, de, ee), ge.data = de);
                                        }
                                    });
                                }
                            };
                        }
                        C[q].transaction(X);
                    }, z = function(q, ie) {
                        L++;
                        try {
                            m.activeTexture(m.TEXTURE0 + L);
                            var ne = j[q];
                            ne || (ne = j[q] = m.createTexture(), m.bindTexture(m.TEXTURE_2D, ne), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, m.NEAREST), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, m.NEAREST)), m.bindTexture(m.TEXTURE_2D, ne), ie(ne, L);
                        } finally{
                            L--;
                        }
                    }, ue = function(q, ie, ne) {
                        var X = m.createFramebuffer();
                        G.push(X), m.bindFramebuffer(m.FRAMEBUFFER, X), m.activeTexture(m.TEXTURE0 + ie), m.bindTexture(m.TEXTURE_2D, q), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, q, 0);
                        try {
                            ne(X);
                        } finally{
                            m.deleteFramebuffer(X), m.bindFramebuffer(m.FRAMEBUFFER, G[--G.length - 1] || null);
                        }
                    }, ce = function() {
                        A = {}, C = {}, j = {}, L = -1, G.length = 0;
                    };
                    var k = typeof WebGL2RenderingContext < "u" && m instanceof WebGL2RenderingContext, A = {}, C = {}, j = {}, L = -1, G = [];
                    m.canvas.addEventListener("webglcontextlost", function(q) {
                        ce(), q.preventDefault();
                    }, !1), o.set(m, U = {
                        gl: m,
                        isWebGL2: k,
                        getExtension: Q,
                        withProgram: B,
                        withTexture: z,
                        withTextureFramebuffer: ue,
                        handleContextLoss: ce
                    });
                }
                P(U);
            }
            function u(N, P, m, U, k, A, C, j) {
                C === void 0 && (C = 15), j === void 0 && (j = null), s(N, function(L) {
                    var G = L.gl, Q = L.withProgram, K = L.withTexture;
                    K("copy", function(B, z) {
                        G.texImage2D(G.TEXTURE_2D, 0, G.RGBA, k, A, 0, G.RGBA, G.UNSIGNED_BYTE, P), Q("copy", n, i, function(ue) {
                            var ce = ue.setUniform, q = ue.setAttribute;
                            q("aUV", 2, G.STATIC_DRAW, 0, new Float32Array([
                                0,
                                0,
                                2,
                                0,
                                0,
                                2
                            ])), ce("1i", "image", z), G.bindFramebuffer(G.FRAMEBUFFER, j || null), G.disable(G.BLEND), G.colorMask(C & 8, C & 4, C & 2, C & 1), G.viewport(m, U, k, A), G.scissor(m, U, k, A), G.drawArrays(G.TRIANGLES, 0, 3);
                        });
                    });
                });
            }
            function d(N, P, m) {
                var U = N.width, k = N.height;
                s(N, function(A) {
                    var C = A.gl, j = new Uint8Array(U * k * 4);
                    C.readPixels(0, 0, U, k, C.RGBA, C.UNSIGNED_BYTE, j), N.width = P, N.height = m, u(C, j, 0, 0, U, k);
                });
            }
            var h = Object.freeze({
                __proto__: null,
                withWebGLContext: s,
                renderImageData: u,
                resizeWebGLCanvasWithoutClearing: d
            });
            function p(N, P, m, U, k, A) {
                A === void 0 && (A = 1);
                var C = new Uint8Array(N * P), j = U[2] - U[0], L = U[3] - U[1], G = [];
                e(m, function(q, ie, ne, X) {
                    G.push({
                        x1: q,
                        y1: ie,
                        x2: ne,
                        y2: X,
                        minX: Math.min(q, ne),
                        minY: Math.min(ie, X),
                        maxX: Math.max(q, ne),
                        maxY: Math.max(ie, X)
                    });
                }), G.sort(function(q, ie) {
                    return q.maxX - ie.maxX;
                });
                for(var Q = 0; Q < N; Q++)for(var K = 0; K < P; K++){
                    var B = ue(U[0] + j * (Q + .5) / N, U[1] + L * (K + .5) / P), z = Math.pow(1 - Math.abs(B) / k, A) / 2;
                    B < 0 && (z = 1 - z), z = Math.max(0, Math.min(255, Math.round(z * 255))), C[K * N + Q] = z;
                }
                return C;
                function ue(q, ie) {
                    for(var ne = 1 / 0, X = 1 / 0, re = G.length; re--;){
                        var te = G[re];
                        if (te.maxX + X <= q) break;
                        if (q + X > te.minX && ie - X < te.maxY && ie + X > te.minY) {
                            var I = F(q, ie, te.x1, te.y1, te.x2, te.y2);
                            I < ne && (ne = I, X = Math.sqrt(ne));
                        }
                    }
                    return ce(q, ie) && (X = -X), X;
                }
                function ce(q, ie) {
                    for(var ne = 0, X = G.length; X--;){
                        var re = G[X];
                        if (re.maxX <= q) break;
                        var te = re.y1 > ie != re.y2 > ie && q < (re.x2 - re.x1) * (ie - re.y1) / (re.y2 - re.y1) + re.x1;
                        te && (ne += re.y1 < re.y2 ? 1 : -1);
                    }
                    return ne !== 0;
                }
            }
            function v(N, P, m, U, k, A, C, j, L, G) {
                A === void 0 && (A = 1), j === void 0 && (j = 0), L === void 0 && (L = 0), G === void 0 && (G = 0), g(N, P, m, U, k, A, C, null, j, L, G);
            }
            function g(N, P, m, U, k, A, C, j, L, G, Q) {
                A === void 0 && (A = 1), L === void 0 && (L = 0), G === void 0 && (G = 0), Q === void 0 && (Q = 0);
                for(var K = p(N, P, m, U, k, A), B = new Uint8Array(K.length * 4), z = 0; z < K.length; z++)B[z * 4 + Q] = K[z];
                u(C, B, L, G, N, P, 1 << 3 - Q, j);
            }
            function F(N, P, m, U, k, A) {
                var C = k - m, j = A - U, L = C * C + j * j, G = L ? Math.max(0, Math.min(1, ((N - m) * C + (P - U) * j) / L)) : 0, Q = N - (m + G * C), K = P - (U + G * j);
                return Q * Q + K * K;
            }
            var E = Object.freeze({
                __proto__: null,
                generate: p,
                generateIntoCanvas: v,
                generateIntoFramebuffer: g
            }), b = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", y = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", x = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", _ = new Float32Array([
                0,
                0,
                2,
                0,
                0,
                2
            ]), T = null, w = !1, R = {}, O = new WeakMap;
            function Y(N) {
                if (!w && !W(N)) throw new Error("WebGL generation not supported");
            }
            function S(N, P, m, U, k, A, C) {
                if (A === void 0 && (A = 1), C === void 0 && (C = null), !C && (C = T, !C)) {
                    var j = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
                    if (!j) throw new Error("OffscreenCanvas or DOM canvas not supported");
                    C = T = j.getContext("webgl", {
                        depth: !1
                    });
                }
                Y(C);
                var L = new Uint8Array(N * P * 4);
                s(C, function(B) {
                    var z = B.gl, ue = B.withTexture, ce = B.withTextureFramebuffer;
                    ue("readable", function(q, ie) {
                        z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, N, P, 0, z.RGBA, z.UNSIGNED_BYTE, null), ce(q, ie, function(ne) {
                            D(N, P, m, U, k, A, z, ne, 0, 0, 0), z.readPixels(0, 0, N, P, z.RGBA, z.UNSIGNED_BYTE, L);
                        });
                    });
                });
                for(var G = new Uint8Array(N * P), Q = 0, K = 0; Q < L.length; Q += 4)G[K++] = L[Q];
                return G;
            }
            function M(N, P, m, U, k, A, C, j, L, G) {
                A === void 0 && (A = 1), j === void 0 && (j = 0), L === void 0 && (L = 0), G === void 0 && (G = 0), D(N, P, m, U, k, A, C, null, j, L, G);
            }
            function D(N, P, m, U, k, A, C, j, L, G, Q) {
                A === void 0 && (A = 1), L === void 0 && (L = 0), G === void 0 && (G = 0), Q === void 0 && (Q = 0), Y(C);
                var K = [];
                e(m, function(B, z, ue, ce) {
                    K.push(B, z, ue, ce);
                }), K = new Float32Array(K), s(C, function(B) {
                    var z = B.gl, ue = B.isWebGL2, ce = B.getExtension, q = B.withProgram, ie = B.withTexture, ne = B.withTextureFramebuffer, X = B.handleContextLoss;
                    if (ie("rawDistances", function(re, te) {
                        (N !== re._lastWidth || P !== re._lastHeight) && z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, re._lastWidth = N, re._lastHeight = P, 0, z.RGBA, z.UNSIGNED_BYTE, null), q("main", b, y, function(I) {
                            var ve = I.setAttribute, $ = I.setUniform, ae = !ue && ce("ANGLE_instanced_arrays"), Z = !ue && ce("EXT_blend_minmax");
                            ve("aUV", 2, z.STATIC_DRAW, 0, _), ve("aLineSegment", 4, z.DYNAMIC_DRAW, 1, K), $.apply(void 0, [
                                "4f",
                                "uGlyphBounds"
                            ].concat(U)), $("1f", "uMaxDistance", k), $("1f", "uExponent", A), ne(re, te, function(Se) {
                                z.enable(z.BLEND), z.colorMask(!0, !0, !0, !0), z.viewport(0, 0, N, P), z.scissor(0, 0, N, P), z.blendFunc(z.ONE, z.ONE), z.blendEquationSeparate(z.FUNC_ADD, ue ? z.MAX : Z.MAX_EXT), z.clear(z.COLOR_BUFFER_BIT), ue ? z.drawArraysInstanced(z.TRIANGLES, 0, 3, K.length / 4) : ae.drawArraysInstancedANGLE(z.TRIANGLES, 0, 3, K.length / 4);
                            });
                        }), q("post", n, x, function(I) {
                            I.setAttribute("aUV", 2, z.STATIC_DRAW, 0, _), I.setUniform("1i", "tex", te), z.bindFramebuffer(z.FRAMEBUFFER, j), z.disable(z.BLEND), z.colorMask(Q === 0, Q === 1, Q === 2, Q === 3), z.viewport(L, G, N, P), z.scissor(L, G, N, P), z.drawArrays(z.TRIANGLES, 0, 3);
                        });
                    }), z.isContextLost()) throw X(), new Error("webgl context lost");
                });
            }
            function W(N) {
                var P = !N || N === T ? R : N.canvas || N, m = O.get(P);
                if (m === void 0) {
                    w = !0;
                    var U = null;
                    try {
                        var k = [
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
                        ], A = S(4, 4, "M8,8L16,8L24,24L16,24Z", [
                            0,
                            0,
                            32,
                            32
                        ], 24, 1, N);
                        m = A && k.length === A.length && A.every(function(C, j) {
                            return C === k[j];
                        }), m || (U = "bad trial run results", console.info(k, A));
                    } catch (C) {
                        m = !1, U = C.message;
                    }
                    U && console.warn("WebGL SDF generation not supported:", U), w = !1, O.set(P, m);
                }
                return m;
            }
            var V = Object.freeze({
                __proto__: null,
                generate: S,
                generateIntoCanvas: M,
                generateIntoFramebuffer: D,
                isSupported: W
            });
            function J(N, P, m, U, k, A) {
                k === void 0 && (k = Math.max(U[2] - U[0], U[3] - U[1]) / 2), A === void 0 && (A = 1);
                try {
                    return S.apply(V, arguments);
                } catch (C) {
                    return console.info("WebGL SDF generation failed, falling back to JS", C), p.apply(E, arguments);
                }
            }
            function oe(N, P, m, U, k, A, C, j, L, G) {
                k === void 0 && (k = Math.max(U[2] - U[0], U[3] - U[1]) / 2), A === void 0 && (A = 1), j === void 0 && (j = 0), L === void 0 && (L = 0), G === void 0 && (G = 0);
                try {
                    return M.apply(V, arguments);
                } catch (Q) {
                    return console.info("WebGL SDF generation failed, falling back to JS", Q), v.apply(E, arguments);
                }
            }
            return r.forEachPathCommand = t, r.generate = J, r.generateIntoCanvas = oe, r.javascript = E, r.pathToLineSegments = e, r.webgl = V, r.webglUtils = h, Object.defineProperty(r, "__esModule", {
                value: !0
            }), r;
        })({});
        return l;
    }
    function bi() {
        var l = (function(r) {
            var f = {
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
            }, c = {}, t = {};
            c.L = 1, t[1] = "L", Object.keys(f).forEach(function(X, re) {
                c[X] = 1 << re + 1, t[c[X]] = X;
            }), Object.freeze(c);
            var e = c.LRI | c.RLI | c.FSI, n = c.L | c.R | c.AL, i = c.B | c.S | c.WS | c.ON | c.FSI | c.LRI | c.RLI | c.PDI, o = c.BN | c.RLE | c.LRE | c.RLO | c.LRO | c.PDF, a = c.S | c.WS | c.B | e | c.PDI | o, s = null;
            function u() {
                if (!s) {
                    s = new Map;
                    var X = function(te) {
                        if (f.hasOwnProperty(te)) {
                            var I = 0;
                            f[te].split(",").forEach(function(ve) {
                                var $ = ve.split("+"), ae = $[0], Z = $[1];
                                ae = parseInt(ae, 36), Z = Z ? parseInt(Z, 36) : 0, s.set(I += ae, c[te]);
                                for(var Se = 0; Se < Z; Se++)s.set(++I, c[te]);
                            });
                        }
                    };
                    for(var re in f)X(re);
                }
            }
            function d(X) {
                return u(), s.get(X.codePointAt(0)) || c.L;
            }
            function h(X) {
                return t[d(X)];
            }
            var p = {
                pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
                canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
            };
            function v(X, re) {
                var te = 36, I = 0, ve = new Map, $ = re && new Map, ae;
                return X.split(",").forEach(function Z(Se) {
                    if (Se.indexOf("+") !== -1) for(var ee = +Se; ee--;)Z(ae);
                    else {
                        ae = Se;
                        var se = Se.split(">"), de = se[0], ge = se[1];
                        de = String.fromCodePoint(I += parseInt(de, te)), ge = String.fromCodePoint(I += parseInt(ge, te)), ve.set(de, ge), re && $.set(ge, de);
                    }
                }), {
                    map: ve,
                    reverseMap: $
                };
            }
            var g, F, E;
            function b() {
                if (!g) {
                    var X = v(p.pairs, !0), re = X.map, te = X.reverseMap;
                    g = re, F = te, E = v(p.canonical, !1).map;
                }
            }
            function y(X) {
                return b(), g.get(X) || null;
            }
            function x(X) {
                return b(), F.get(X) || null;
            }
            function _(X) {
                return b(), E.get(X) || null;
            }
            var T = c.L, w = c.R, R = c.EN, O = c.ES, Y = c.ET, S = c.AN, M = c.CS, D = c.B, W = c.S, V = c.ON, J = c.BN, oe = c.NSM, N = c.AL, P = c.LRO, m = c.RLO, U = c.LRE, k = c.RLE, A = c.PDF, C = c.LRI, j = c.RLI, L = c.FSI, G = c.PDI;
            function Q(X, re) {
                for(var te = 125, I = new Uint32Array(X.length), ve = 0; ve < X.length; ve++)I[ve] = d(X[ve]);
                var $ = new Map;
                function ae(je, Ye) {
                    var We = I[je];
                    I[je] = Ye, $.set(We, $.get(We) - 1), We & i && $.set(i, $.get(i) - 1), $.set(Ye, ($.get(Ye) || 0) + 1), Ye & i && $.set(i, ($.get(i) || 0) + 1);
                }
                for(var Z = new Uint8Array(X.length), Se = new Map, ee = [], se = null, de = 0; de < X.length; de++)se || ee.push(se = {
                    start: de,
                    end: X.length - 1,
                    level: re === "rtl" ? 1 : re === "ltr" ? 0 : Sn(de, !1)
                }), I[de] & D && (se.end = de, se = null);
                for(var ge = k | U | m | P | e | G | A | D, Ue = function(je) {
                    return je + (je & 1 ? 1 : 2);
                }, De = function(je) {
                    return je + (je & 1 ? 2 : 1);
                }, ye = 0; ye < ee.length; ye++){
                    se = ee[ye];
                    var be = [
                        {
                            _level: se.level,
                            _override: 0,
                            _isolate: 0
                        }
                    ], fe = void 0, Fe = 0, Ce = 0, ze = 0;
                    $.clear();
                    for(var Te = se.start; Te <= se.end; Te++){
                        var pe = I[Te];
                        if (fe = be[be.length - 1], $.set(pe, ($.get(pe) || 0) + 1), pe & i && $.set(i, ($.get(i) || 0) + 1), pe & ge) if (pe & (k | U)) {
                            Z[Te] = fe._level;
                            var we = (pe === k ? De : Ue)(fe._level);
                            we <= te && !Fe && !Ce ? be.push({
                                _level: we,
                                _override: 0,
                                _isolate: 0
                            }) : Fe || Ce++;
                        } else if (pe & (m | P)) {
                            Z[Te] = fe._level;
                            var et = (pe === m ? De : Ue)(fe._level);
                            et <= te && !Fe && !Ce ? be.push({
                                _level: et,
                                _override: pe & m ? w : T,
                                _isolate: 0
                            }) : Fe || Ce++;
                        } else if (pe & e) {
                            pe & L && (pe = Sn(Te + 1, !0) === 1 ? j : C), Z[Te] = fe._level, fe._override && ae(Te, fe._override);
                            var _e = (pe === j ? De : Ue)(fe._level);
                            _e <= te && Fe === 0 && Ce === 0 ? (ze++, be.push({
                                _level: _e,
                                _override: 0,
                                _isolate: 1,
                                _isolInitIndex: Te
                            })) : Fe++;
                        } else if (pe & G) {
                            if (Fe > 0) Fe--;
                            else if (ze > 0) {
                                for(Ce = 0; !be[be.length - 1]._isolate;)be.pop();
                                var xe = be[be.length - 1]._isolInitIndex;
                                xe != null && (Se.set(xe, Te), Se.set(Te, xe)), be.pop(), ze--;
                            }
                            fe = be[be.length - 1], Z[Te] = fe._level, fe._override && ae(Te, fe._override);
                        } else pe & A ? (Fe === 0 && (Ce > 0 ? Ce-- : !fe._isolate && be.length > 1 && (be.pop(), fe = be[be.length - 1])), Z[Te] = fe._level) : pe & D && (Z[Te] = se.level);
                        else Z[Te] = fe._level, fe._override && pe !== J && ae(Te, fe._override);
                    }
                    for(var Me = [], ke = null, me = se.start; me <= se.end; me++){
                        var Ae = I[me];
                        if (!(Ae & o)) {
                            var Ie = Z[me], Ge = Ae & e, Pe = Ae === G;
                            ke && Ie === ke._level ? (ke._end = me, ke._endsWithIsolInit = Ge) : Me.push(ke = {
                                _start: me,
                                _end: me,
                                _level: Ie,
                                _startsWithPDI: Pe,
                                _endsWithIsolInit: Ge
                            });
                        }
                    }
                    for(var He = [], tt = 0; tt < Me.length; tt++){
                        var qe = Me[tt];
                        if (!qe._startsWithPDI || qe._startsWithPDI && !Se.has(qe._start)) {
                            for(var rt = [
                                ke = qe
                            ], ct = void 0; ke && ke._endsWithIsolInit && (ct = Se.get(ke._end)) != null;)for(var $e = tt + 1; $e < Me.length; $e++)if (Me[$e]._start === ct) {
                                rt.push(ke = Me[$e]);
                                break;
                            }
                            for(var Ne = [], ft = 0; ft < rt.length; ft++)for(var en = rt[ft], pr = en._start; pr <= en._end; pr++)Ne.push(pr);
                            for(var xo = Z[Ne[0]], tn = se.level, zt = Ne[0] - 1; zt >= 0; zt--)if (!(I[zt] & o)) {
                                tn = Z[zt];
                                break;
                            }
                            var vr = Ne[Ne.length - 1], So = Z[vr], rn = se.level;
                            if (!(I[vr] & e)) {
                                for(var jt = vr + 1; jt <= se.end; jt++)if (!(I[jt] & o)) {
                                    rn = Z[jt];
                                    break;
                                }
                            }
                            He.push({
                                _seqIndices: Ne,
                                _sosType: Math.max(tn, xo) % 2 ? w : T,
                                _eosType: Math.max(rn, So) % 2 ? w : T
                            });
                        }
                    }
                    for(var gr = 0; gr < He.length; gr++){
                        var mr = He[gr], le = mr._seqIndices, _t = mr._sosType, wo = mr._eosType, gt = Z[le[0]] & 1 ? w : T;
                        if ($.get(oe)) for(var Wt = 0; Wt < le.length; Wt++){
                            var nn = le[Wt];
                            if (I[nn] & oe) {
                                for(var yr = _t, Vt = Wt - 1; Vt >= 0; Vt--)if (!(I[le[Vt]] & o)) {
                                    yr = I[le[Vt]];
                                    break;
                                }
                                ae(nn, yr & (e | G) ? V : yr);
                            }
                        }
                        if ($.get(R)) for(var Ht = 0; Ht < le.length; Ht++){
                            var on = le[Ht];
                            if (I[on] & R) for(var Xt = Ht - 1; Xt >= -1; Xt--){
                                var an = Xt === -1 ? _t : I[le[Xt]];
                                if (an & n) {
                                    an === N && ae(on, S);
                                    break;
                                }
                            }
                        }
                        if ($.get(N)) for(var br = 0; br < le.length; br++){
                            var sn = le[br];
                            I[sn] & N && ae(sn, w);
                        }
                        if ($.get(O) || $.get(M)) for(var Ut = 1; Ut < le.length - 1; Ut++){
                            var xr = le[Ut];
                            if (I[xr] & (O | M)) {
                                for(var mt = 0, Sr = 0, wr = Ut - 1; wr >= 0 && (mt = I[le[wr]], !!(mt & o)); wr--);
                                for(var _r = Ut + 1; _r < le.length && (Sr = I[le[_r]], !!(Sr & o)); _r++);
                                mt === Sr && (I[xr] === O ? mt === R : mt & (R | S)) && ae(xr, mt);
                            }
                        }
                        if ($.get(R)) for(var Je = 0; Je < le.length; Je++){
                            var _o = le[Je];
                            if (I[_o] & R) {
                                for(var Yt = Je - 1; Yt >= 0 && I[le[Yt]] & (Y | o); Yt--)ae(le[Yt], R);
                                for(Je++; Je < le.length && I[le[Je]] & (Y | o | R); Je++)I[le[Je]] !== R && ae(le[Je], R);
                            }
                        }
                        if ($.get(Y) || $.get(O) || $.get(M)) for(var Tt = 0; Tt < le.length; Tt++){
                            var ln = le[Tt];
                            if (I[ln] & (Y | O | M)) {
                                ae(ln, V);
                                for(var Jt = Tt - 1; Jt >= 0 && I[le[Jt]] & o; Jt--)ae(le[Jt], V);
                                for(var Kt = Tt + 1; Kt < le.length && I[le[Kt]] & o; Kt++)ae(le[Kt], V);
                            }
                        }
                        if ($.get(R)) for(var Ur = 0, cn = _t; Ur < le.length; Ur++){
                            var fn = le[Ur], Tr = I[fn];
                            Tr & R ? cn === T && ae(fn, T) : Tr & n && (cn = Tr);
                        }
                        if ($.get(i)) {
                            var Et = w | R | S, un = Et | T, Qt = [];
                            {
                                for(var yt = [], bt = 0; bt < le.length; bt++)if (I[le[bt]] & i) {
                                    var Ct = X[le[bt]], dn = void 0;
                                    if (y(Ct) !== null) if (yt.length < 63) yt.push({
                                        char: Ct,
                                        seqIndex: bt
                                    });
                                    else break;
                                    else if ((dn = x(Ct)) !== null) for(var kt = yt.length - 1; kt >= 0; kt--){
                                        var Er = yt[kt].char;
                                        if (Er === dn || Er === x(_(Ct)) || y(_(Er)) === Ct) {
                                            Qt.push([
                                                yt[kt].seqIndex,
                                                bt
                                            ]), yt.length = kt;
                                            break;
                                        }
                                    }
                                }
                                Qt.sort(function(je, Ye) {
                                    return je[0] - Ye[0];
                                });
                            }
                            for(var Cr = 0; Cr < Qt.length; Cr++){
                                for(var hn = Qt[Cr], Zt = hn[0], kr = hn[1], pn = !1, Xe = 0, Ar = Zt + 1; Ar < kr; Ar++){
                                    var vn = le[Ar];
                                    if (I[vn] & un) {
                                        pn = !0;
                                        var gn = I[vn] & Et ? w : T;
                                        if (gn === gt) {
                                            Xe = gn;
                                            break;
                                        }
                                    }
                                }
                                if (pn && !Xe) {
                                    Xe = _t;
                                    for(var Dr = Zt - 1; Dr >= 0; Dr--){
                                        var mn = le[Dr];
                                        if (I[mn] & un) {
                                            var yn = I[mn] & Et ? w : T;
                                            yn !== gt ? Xe = yn : Xe = gt;
                                            break;
                                        }
                                    }
                                }
                                if (Xe) {
                                    if (I[le[Zt]] = I[le[kr]] = Xe, Xe !== gt) {
                                        for(var At = Zt + 1; At < le.length; At++)if (!(I[le[At]] & o)) {
                                            d(X[le[At]]) & oe && (I[le[At]] = Xe);
                                            break;
                                        }
                                    }
                                    if (Xe !== gt) {
                                        for(var Dt = kr + 1; Dt < le.length; Dt++)if (!(I[le[Dt]] & o)) {
                                            d(X[le[Dt]]) & oe && (I[le[Dt]] = Xe);
                                            break;
                                        }
                                    }
                                }
                            }
                            for(var nt = 0; nt < le.length; nt++)if (I[le[nt]] & i) {
                                for(var bn = nt, Fr = nt, Mr = _t, Ft = nt - 1; Ft >= 0; Ft--)if (I[le[Ft]] & o) bn = Ft;
                                else {
                                    Mr = I[le[Ft]] & Et ? w : T;
                                    break;
                                }
                                for(var xn = wo, Mt = nt + 1; Mt < le.length; Mt++)if (I[le[Mt]] & (i | o)) Fr = Mt;
                                else {
                                    xn = I[le[Mt]] & Et ? w : T;
                                    break;
                                }
                                for(var Pr = bn; Pr <= Fr; Pr++)I[le[Pr]] = Mr === xn ? Mr : gt;
                                nt = Fr;
                            }
                        }
                    }
                    for(var Ve = se.start; Ve <= se.end; Ve++){
                        var Uo = Z[Ve], qt = I[Ve];
                        if (Uo & 1 ? qt & (T | R | S) && Z[Ve]++ : qt & w ? Z[Ve]++ : qt & (S | R) && (Z[Ve] += 2), qt & o && (Z[Ve] = Ve === 0 ? se.level : Z[Ve - 1]), Ve === se.end || d(X[Ve]) & (W | D)) for(var $t = Ve; $t >= 0 && d(X[$t]) & a; $t--)Z[$t] = se.level;
                    }
                }
                return {
                    levels: Z,
                    paragraphs: ee
                };
                function Sn(je, Ye) {
                    for(var We = je; We < X.length; We++){
                        var ot = I[We];
                        if (ot & (w | N)) return 1;
                        if (ot & (D | T) || Ye && ot === G) return 0;
                        if (ot & e) {
                            var wn = To(We);
                            We = wn === -1 ? X.length : wn;
                        }
                    }
                    return 0;
                }
                function To(je) {
                    for(var Ye = 1, We = je + 1; We < X.length; We++){
                        var ot = I[We];
                        if (ot & D) break;
                        if (ot & G) {
                            if (--Ye === 0) return We;
                        } else ot & e && Ye++;
                    }
                    return -1;
                }
            }
            var K = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", B;
            function z() {
                if (!B) {
                    var X = v(K, !0), re = X.map, te = X.reverseMap;
                    te.forEach(function(I, ve) {
                        re.set(ve, I);
                    }), B = re;
                }
            }
            function ue(X) {
                return z(), B.get(X) || null;
            }
            function ce(X, re, te, I) {
                var ve = X.length;
                te = Math.max(0, te == null ? 0 : +te), I = Math.min(ve - 1, I == null ? ve - 1 : +I);
                for(var $ = new Map, ae = te; ae <= I; ae++)if (re[ae] & 1) {
                    var Z = ue(X[ae]);
                    Z !== null && $.set(ae, Z);
                }
                return $;
            }
            function q(X, re, te, I) {
                var ve = X.length;
                te = Math.max(0, te == null ? 0 : +te), I = Math.min(ve - 1, I == null ? ve - 1 : +I);
                var $ = [];
                return re.paragraphs.forEach(function(ae) {
                    var Z = Math.max(te, ae.start), Se = Math.min(I, ae.end);
                    if (Z < Se) {
                        for(var ee = re.levels.slice(Z, Se + 1), se = Se; se >= Z && d(X[se]) & a; se--)ee[se] = ae.level;
                        for(var de = ae.level, ge = 1 / 0, Ue = 0; Ue < ee.length; Ue++){
                            var De = ee[Ue];
                            De > de && (de = De), De < ge && (ge = De | 1);
                        }
                        for(var ye = de; ye >= ge; ye--)for(var be = 0; be < ee.length; be++)if (ee[be] >= ye) {
                            for(var fe = be; be + 1 < ee.length && ee[be + 1] >= ye;)be++;
                            be > fe && $.push([
                                fe + Z,
                                be + Z
                            ]);
                        }
                    }
                }), $;
            }
            function ie(X, re, te, I) {
                var ve = ne(X, re, te, I), $ = [].concat(X);
                return ve.forEach(function(ae, Z) {
                    $[Z] = (re.levels[ae] & 1 ? ue(X[ae]) : null) || X[ae];
                }), $.join("");
            }
            function ne(X, re, te, I) {
                for(var ve = q(X, re, te, I), $ = [], ae = 0; ae < X.length; ae++)$[ae] = ae;
                return ve.forEach(function(Z) {
                    for(var Se = Z[0], ee = Z[1], se = $.slice(Se, ee + 1), de = se.length; de--;)$[ee - de] = se[de];
                }), $;
            }
            return r.closingToOpeningBracket = x, r.getBidiCharType = d, r.getBidiCharTypeName = h, r.getCanonicalBracket = _, r.getEmbeddingLevels = Q, r.getMirroredCharacter = ue, r.getMirroredCharactersMap = ce, r.getReorderSegments = q, r.getReorderedIndices = ne, r.getReorderedString = ie, r.openingToClosingBracket = y, Object.defineProperty(r, "__esModule", {
                value: !0
            }), r;
        })({});
        return l;
    }
    const co = /\bvoid\s+main\s*\(\s*\)\s*{/g;
    function Vr(l) {
        const r = /^[ \t]*#include +<([\w\d./]+)>/gm;
        function f(c, t) {
            let e = Oo[t];
            return e ? Vr(e) : c;
        }
        return l.replace(r, f);
    }
    const Re = [];
    for(let l = 0; l < 256; l++)Re[l] = (l < 16 ? "0" : "") + l.toString(16);
    function xi() {
        const l = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, f = Math.random() * 4294967295 | 0, c = Math.random() * 4294967295 | 0;
        return (Re[l & 255] + Re[l >> 8 & 255] + Re[l >> 16 & 255] + Re[l >> 24 & 255] + "-" + Re[r & 255] + Re[r >> 8 & 255] + "-" + Re[r >> 16 & 15 | 64] + Re[r >> 24 & 255] + "-" + Re[f & 63 | 128] + Re[f >> 8 & 255] + "-" + Re[f >> 16 & 255] + Re[f >> 24 & 255] + Re[c & 255] + Re[c >> 8 & 255] + Re[c >> 16 & 255] + Re[c >> 24 & 255]).toUpperCase();
    }
    const ut = Object.assign || function() {
        let l = arguments[0];
        for(let r = 1, f = arguments.length; r < f; r++){
            let c = arguments[r];
            if (c) for(let t in c)Object.prototype.hasOwnProperty.call(c, t) && (l[t] = c[t]);
        }
        return l;
    }, Si = Date.now(), Ln = new WeakMap, On = new Map;
    let wi = 1e10;
    function Hr(l, r) {
        const f = Ei(r);
        let c = Ln.get(l);
        if (c || Ln.set(l, c = Object.create(null)), c[f]) return new c[f];
        const t = `_onBeforeCompile${f}`, e = function(a, s) {
            l.onBeforeCompile.call(this, a, s);
            const u = this.customProgramCacheKey() + "|" + a.vertexShader + "|" + a.fragmentShader;
            let d = On[u];
            if (!d) {
                const h = _i(this, a, r, f);
                d = On[u] = h;
            }
            a.vertexShader = d.vertexShader, a.fragmentShader = d.fragmentShader, ut(a.uniforms, this.uniforms), r.timeUniform && (a.uniforms[r.timeUniform] = {
                get value () {
                    return Date.now() - Si;
                }
            }), this[t] && this[t](a);
        }, n = function() {
            return i(r.chained ? l : l.clone());
        }, i = function(a) {
            const s = Object.create(a, o);
            return Object.defineProperty(s, "baseMaterial", {
                value: l
            }), Object.defineProperty(s, "id", {
                value: wi++
            }), s.uuid = xi(), s.uniforms = ut({}, a.uniforms, r.uniforms), s.defines = ut({}, a.defines, r.defines), s.defines[`TROIKA_DERIVED_MATERIAL_${f}`] = "", s.extensions = ut({}, a.extensions, r.extensions), s._listeners = void 0, s;
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
                    return l.customProgramCacheKey() + "|" + f;
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
                    return l.copy.call(this, a), !l.isShaderMaterial && !l.isDerivedMaterial && (ut(this.extensions, a.extensions), ut(this.defines, a.defines), ut(this.uniforms, cr.clone(a.uniforms))), this;
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
                    return a || (a = this._depthMaterial = Hr(l.isDerivedMaterial ? l.getDepthMaterial() : new Po({
                        depthPacking: Lo
                    }), r), a.defines.IS_DEPTH_MATERIAL = "", a.uniforms = this.uniforms), a;
                }
            },
            getDistanceMaterial: {
                writable: !0,
                configurable: !0,
                value: function() {
                    let a = this._distanceMaterial;
                    return a || (a = this._distanceMaterial = Hr(l.isDerivedMaterial ? l.getDistanceMaterial() : new Mo, r), a.defines.IS_DISTANCE_MATERIAL = "", a.uniforms = this.uniforms), a;
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
        return c[f] = n, new n;
    }
    function _i(l, { vertexShader: r, fragmentShader: f }, c, t) {
        let { vertexDefs: e, vertexMainIntro: n, vertexMainOutro: i, vertexTransform: o, fragmentDefs: a, fragmentMainIntro: s, fragmentMainOutro: u, fragmentColorTransform: d, customRewriter: h, timeUniform: p } = c;
        if (e = e || "", n = n || "", i = i || "", a = a || "", s = s || "", u = u || "", (o || h) && (r = Vr(r)), (d || h) && (f = f.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`), f = Vr(f)), h) {
            let v = h({
                vertexShader: r,
                fragmentShader: f
            });
            r = v.vertexShader, f = v.fragmentShader;
        }
        if (d) {
            let v = [];
            f = f.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (g)=>(v.push(g), "")), u = `${d}
${v.join(`
`)}
${u}`;
        }
        if (p) {
            const v = `
uniform float ${p};
`;
            e = v + e, a = v + a;
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
`, r = r.replace(/\b(position|normal|uv)\b/g, (v, g, F, E)=>/\battribute\s+vec[23]\s+$/.test(E.substr(0, F)) ? g : `troika_${g}_${t}`), l.map && l.map.channel > 0 || (r = r.replace(/\bMAP_UV\b/g, `troika_uv_${t}`))), r = Rn(r, t, e, n, i), f = Rn(f, t, a, s, u), {
            vertexShader: r,
            fragmentShader: f
        };
    }
    function Rn(l, r, f, c, t) {
        return (c || t || f) && (l = l.replace(co, `
${f}
void troikaOrigMain${r}() {`), l += `
void main() {
  ${c}
  troikaOrigMain${r}();
  ${t}
}`), l;
    }
    function Ui(l, r) {
        return l === "uniforms" ? void 0 : typeof r == "function" ? r.toString() : r;
    }
    let Ti = 0;
    const Bn = new Map;
    function Ei(l) {
        const r = JSON.stringify(l, Ui);
        let f = Bn.get(r);
        return f == null && Bn.set(r, f = ++Ti), f;
    }
    function Ci() {
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
                        var p = n.readUint(t, e);
                        e += 4;
                        var v = n.readUint(t, e);
                        e += 4, u[h] = {
                            offset: p,
                            length: v
                        };
                    }
                    for(d = 0; d < a.length; d++){
                        var g = a[d];
                        u[g] && (s[g.trim()] = r[g.trim()].parse(t, u[g].offset, u[g].length, s));
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
                var p = a.readUshort(t, e);
                return e += 2, s.scriptList = r._lctf.readScriptList(t, u + d), s.featureList = r._lctf.readFeatureList(t, u + h), s.lookupList = r._lctf.readLookupList(t, u + p, o), s;
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
                    var p = n(t, u, o + h, a);
                    a.tabs.push(p);
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
                var h = d[0], p = [];
                e = r.CFF.readIndex(t, e, p);
                var v = [];
                for(s = 0; s < p.length - 1; s++)v.push(i.readASCII(t, e + p[s], p[s + 1] - p[s]));
                if (e += p[p.length - 1], r.CFF.readSubrs(t, e, h), h.CharStrings) {
                    e = h.CharStrings, p = [], e = r.CFF.readIndex(t, e, p);
                    var g = [];
                    for(s = 0; s < p.length - 1; s++)g.push(i.readBytes(t, e + p[s], p[s + 1] - p[s]));
                    h.CharStrings = g;
                }
                if (h.ROS) {
                    e = h.FDArray;
                    var F = [];
                    for(e = r.CFF.readIndex(t, e, F), h.FDArray = [], s = 0; s < F.length - 1; s++){
                        var E = r.CFF.readDict(t, e + F[s], e + F[s + 1]);
                        r.CFF._readFDict(t, E, v), h.FDArray.push(E);
                    }
                    e += F[F.length - 1], e = h.FDSelect, h.FDSelect = [];
                    var b = t[e];
                    if (e++, b != 3) throw b;
                    var y = i.readUshort(t, e);
                    for(e += 2, s = 0; s < y + 1; s++)h.FDSelect.push(i.readUshort(t, e), t[e + 2]), e += 3;
                }
                return h.Encoding && (h.Encoding = r.CFF.readEncoding(t, h.Encoding, h.CharStrings.length)), h.charset && (h.charset = r.CFF.readCharset(t, h.charset, h.CharStrings.length)), r.CFF._readFDict(t, h, v), h;
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
                    var d = 1, h = null, p = null;
                    s <= 20 && (h = s, d = 1), s == 12 && (h = 100 * s + u, d = 2), s != 19 && s != 20 || (h = s, d = 2), 21 <= s && s <= 27 && (h = s, d = 1), s == 28 && (p = o.readShort(t, e + 1), d = 3), 29 <= s && s <= 31 && (h = s, d = 1), 32 <= s && s <= 246 && (p = s - 139, d = 1), 247 <= s && s <= 250 && (p = 256 * (s - 247) + u + 108, d = 2), 251 <= s && s <= 254 && (p = 256 * -(s - 251) - u - 108, d = 2), s == 255 && (p = o.readInt(t, e + 1) / 65535, d = 5), a.push(p ?? "o" + h), e += d;
                }
                return a;
            }, r.CFF.readDict = function(t, e, n) {
                for(var i = r._bin, o = {}, a = []; e < n;){
                    var s = t[e], u = t[e + 1];
                    t[e + 2], t[e + 3], t[e + 4];
                    var d = 1, h = null, p = null;
                    if (s == 28 && (p = i.readShort(t, e + 1), d = 3), s == 29 && (p = i.readInt(t, e + 1), d = 5), 32 <= s && s <= 246 && (p = s - 139, d = 1), 247 <= s && s <= 250 && (p = 256 * (s - 247) + u + 108, d = 2), 251 <= s && s <= 254 && (p = 256 * -(s - 251) - u - 108, d = 2), s == 255) throw p = i.readInt(t, e + 1) / 65535, d = 5, "unknown number";
                    if (s == 30) {
                        var v = [];
                        for(d = 1;;){
                            var g = t[e + d];
                            d++;
                            var F = g >> 4, E = 15 & g;
                            if (F != 15 && v.push(F), E != 15 && v.push(E), E == 15) break;
                        }
                        for(var b = "", y = [
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
                        ], x = 0; x < v.length; x++)b += y[v[x]];
                        p = parseFloat(b);
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
                    ][u], d = 2)), h != null ? (o[h] = a.length == 1 ? a[0] : a, a = []) : a.push(p), e += d;
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
                    var p = i.readUint(t, e);
                    e += 4;
                    var v = "p" + d + "e" + h, g = s.indexOf(p);
                    if (g == -1) {
                        var F;
                        g = o.tables.length, s.push(p);
                        var E = i.readUshort(t, p);
                        E == 0 ? F = r.cmap.parse0(t, p) : E == 4 ? F = r.cmap.parse4(t, p) : E == 6 ? F = r.cmap.parse6(t, p) : E == 12 ? F = r.cmap.parse12(t, p) : console.debug("unknown format: " + E, d, h, p), o.tables.push(F);
                    }
                    if (o[v] != null) throw "multiple tables for one platform+encoding";
                    o[v] = g;
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
                            var p = i[o];
                            o++;
                            for(var v = 0; v < p; v++)a.flags.push(h), s++;
                        }
                    }
                    for(a.xs = [], s = 0; s < d; s++){
                        var g = (2 & a.flags[s]) != 0, F = (16 & a.flags[s]) != 0;
                        g ? (a.xs.push(F ? i[o] : -i[o]), o++) : F ? a.xs.push(0) : (a.xs.push(n.readShort(i, o)), o += 2);
                    }
                    for(a.ys = [], s = 0; s < d; s++)g = (4 & a.flags[s]) != 0, F = (32 & a.flags[s]) != 0, g ? (a.ys.push(F ? i[o] : -i[o]), o++) : F ? a.ys.push(0) : (a.ys.push(n.readShort(i, o)), o += 2);
                    var E = 0, b = 0;
                    for(s = 0; s < d; s++)E += a.xs[s], b += a.ys[s], a.xs[s] = E, a.ys[s] = b;
                } else {
                    var y;
                    a.parts = [];
                    do {
                        y = n.readUshort(i, o), o += 2;
                        var x = {
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
                        if (a.parts.push(x), x.glyphIndex = n.readUshort(i, o), o += 2, 1 & y) {
                            var _ = n.readShort(i, o);
                            o += 2;
                            var T = n.readShort(i, o);
                            o += 2;
                        } else _ = n.readInt8(i, o), o++, T = n.readInt8(i, o), o++;
                        2 & y ? (x.m.tx = _, x.m.ty = T) : (x.p1 = _, x.p2 = T), 8 & y ? (x.m.a = x.m.d = n.readF2dot14(i, o), o += 2) : 64 & y ? (x.m.a = n.readF2dot14(i, o), o += 2, x.m.d = n.readF2dot14(i, o), o += 2) : 128 & y && (x.m.a = n.readF2dot14(i, o), o += 2, x.m.b = n.readF2dot14(i, o), o += 2, x.m.c = n.readF2dot14(i, o), o += 2, x.m.d = n.readF2dot14(i, o), o += 2);
                    }while (32 & y);
                    if (256 & y) {
                        var w = n.readUshort(i, o);
                        for(o += 2, a.instr = [], s = 0; s < w; s++)a.instr.push(i[o]), o++;
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
                    var p = r._lctf.numOfOnes(d), v = r._lctf.numOfOnes(h);
                    if (s.fmt == 1) {
                        s.pairsets = [];
                        var g = o.readUshort(t, n);
                        n += 2;
                        for(var F = 0; F < g; F++){
                            var E = a + o.readUshort(t, n);
                            n += 2;
                            var b = o.readUshort(t, E);
                            E += 2;
                            for(var y = [], x = 0; x < b; x++){
                                var _ = o.readUshort(t, E);
                                E += 2, d != 0 && (S = r.GPOS.readValueRecord(t, E, d), E += 2 * p), h != 0 && (M = r.GPOS.readValueRecord(t, E, h), E += 2 * v), y.push({
                                    gid2: _,
                                    val1: S,
                                    val2: M
                                });
                            }
                            s.pairsets.push(y);
                        }
                    }
                    if (s.fmt == 2) {
                        var T = o.readUshort(t, n);
                        n += 2;
                        var w = o.readUshort(t, n);
                        n += 2;
                        var R = o.readUshort(t, n);
                        n += 2;
                        var O = o.readUshort(t, n);
                        for(n += 2, s.classDef1 = r._lctf.readClassDef(t, a + T), s.classDef2 = r._lctf.readClassDef(t, a + w), s.matrix = [], F = 0; F < R; F++){
                            var Y = [];
                            for(x = 0; x < O; x++){
                                var S = null, M = null;
                                d != 0 && (S = r.GPOS.readValueRecord(t, n, d), n += 2 * p), h != 0 && (M = r.GPOS.readValueRecord(t, n, h), n += 2 * v), Y.push({
                                    val1: S,
                                    val2: M
                                });
                            }
                            s.matrix.push(Y);
                        }
                    }
                } else if (e == 4 && s.fmt == 1) s.markCoverage = r._lctf.readCoverage(t, o.readUshort(t, n) + a), s.baseCoverage = r._lctf.readCoverage(t, o.readUshort(t, n + 2) + a), s.markClassCount = o.readUshort(t, n + 4), s.markArray = r.GPOS.readMarkArray(t, o.readUshort(t, n + 6) + a), s.baseArray = r.GPOS.readBaseArray(t, o.readUshort(t, n + 8) + a, s.markClassCount);
                else if (e == 6 && s.fmt == 1) s.mark1Coverage = r._lctf.readCoverage(t, o.readUshort(t, n) + a), s.mark2Coverage = r._lctf.readCoverage(t, o.readUshort(t, n + 2) + a), s.markClassCount = o.readUshort(t, n + 4), s.mark1Array = r.GPOS.readMarkArray(t, o.readUshort(t, n + 6) + a), s.mark2Array = r.GPOS.readBaseArray(t, o.readUshort(t, n + 8) + a, s.markClassCount);
                else {
                    if (e == 9 && s.fmt == 1) {
                        var D = o.readUshort(t, n);
                        n += 2;
                        var W = o.readUint(t, n);
                        if (n += 4, i.ltype == 9) i.ltype = D;
                        else if (i.ltype != D) throw "invalid extension substitution";
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
                        var p = o.readUshort(t, n) + a;
                        n += 2;
                        var v = o.readUshort(t, p);
                        s.seqs.push(o.readUshorts(t, p + 2, v));
                    }
                } else if (e == 4) for(s.vals = [], d = o.readUshort(t, n), n += 2, h = 0; h < d; h++){
                    var g = o.readUshort(t, n);
                    n += 2, s.vals.push(r.GSUB.readLigatureSet(t, a + g));
                }
                else if (e == 5 && s.fmt == 2) {
                    if (s.fmt == 2) {
                        var F = o.readUshort(t, n);
                        n += 2, s.cDef = r._lctf.readClassDef(t, a + F), s.scset = [];
                        var E = o.readUshort(t, n);
                        for(n += 2, h = 0; h < E; h++){
                            var b = o.readUshort(t, n);
                            n += 2, s.scset.push(b == 0 ? null : r.GSUB.readSubClassSet(t, a + b));
                        }
                    }
                } else if (e == 6 && s.fmt == 3) {
                    if (s.fmt == 3) {
                        for(h = 0; h < 3; h++){
                            d = o.readUshort(t, n), n += 2;
                            for(var y = [], x = 0; x < d; x++)y.push(r._lctf.readCoverage(t, a + o.readUshort(t, n + 2 * x)));
                            n += 2 * d, h == 0 && (s.backCvg = y), h == 1 && (s.inptCvg = y), h == 2 && (s.ahedCvg = y);
                        }
                        d = o.readUshort(t, n), n += 2, s.lookupRec = r.GSUB.readSubstLookupRecords(t, n, d);
                    }
                } else {
                    if (e == 7 && s.fmt == 1) {
                        var _ = o.readUshort(t, n);
                        n += 2;
                        var T = o.readUint(t, n);
                        if (n += 4, i.ltype == 9) i.ltype = _;
                        else if (i.ltype != _) throw "invalid extension substitution";
                        return r.GSUB.subt(t, i.ltype, a + T);
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
                    var p = h >>> 8;
                    if ((p &= 15) != 0) throw "unknown kern table format: " + p;
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
                    var p = n.rval[n.rval.length - 1];
                    p.glyph2.push(d), p.vals.push(h), o = u;
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
                    var p = i.readUshort(t, e);
                    e += 2;
                    var v = i.readUshort(t, e);
                    e += 2;
                    var g = i.readUshort(t, e);
                    e += 2;
                    var F = i.readUshort(t, e);
                    e += 2;
                    var E = i.readUshort(t, e);
                    e += 2;
                    var b = i.readUshort(t, e);
                    e += 2;
                    var y, x = u[F], _ = d + 12 * a + b;
                    if (p == 0) y = i.readUnicode(t, _, E / 2);
                    else if (p == 3 && v == 0) y = i.readUnicode(t, _, E / 2);
                    else if (v == 0) y = i.readASCII(t, _, E);
                    else if (v == 1) y = i.readUnicode(t, _, E / 2);
                    else if (v == 3) y = i.readUnicode(t, _, E / 2);
                    else {
                        if (p != 1) throw "unknown encoding " + v + ", platformID: " + p;
                        y = i.readASCII(t, _, E), console.debug("reading unknown MAC encoding " + v + " as ASCII");
                    }
                    var T = "p" + p + "," + g.toString(16);
                    o[T] == null && (o[T] = {}), o[T][x !== void 0 ? x : F] = y, o[T]._lang = g;
                }
                for(var w in o)if (o[w].postScriptName != null && o[w]._lang == 1033) return o[w];
                for(var w in o)if (o[w].postScriptName != null && o[w]._lang == 0) return o[w];
                for(var w in o)if (o[w].postScriptName != null && o[w]._lang == 3084) return o[w];
                for(var w in o)if (o[w].postScriptName != null) return o[w];
                for(var w in o){
                    s = w;
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
                        var s = a == i ? o : a - 1, u = a == o ? i : a + 1, d = 1 & t.flags[a], h = 1 & t.flags[s], p = 1 & t.flags[u], v = t.xs[a], g = t.ys[a];
                        if (a == i) if (d) {
                            if (!h) {
                                r.U.P.moveTo(e, v, g);
                                continue;
                            }
                            r.U.P.moveTo(e, t.xs[s], t.ys[s]);
                        } else h ? r.U.P.moveTo(e, t.xs[s], t.ys[s]) : r.U.P.moveTo(e, (t.xs[s] + v) / 2, (t.ys[s] + g) / 2);
                        d ? h && r.U.P.lineTo(e, v, g) : p ? r.U.P.qcurveTo(e, v, g, t.xs[u], t.ys[u]) : r.U.P.qcurveTo(e, v, g, (v + t.xs[u]) / 2, (g + t.ys[u]) / 2);
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
                            var p = d[h], v = p.chain.length;
                            if (!(v > o)) {
                                for(var g = !0, F = 0, E = 0; E < v; E++){
                                    for(; t[e + F + (1 + E)] == -1;)F++;
                                    p.chain[E] != t[e + F + (1 + E)] && (g = !1);
                                }
                                if (g) {
                                    for(t[e] = p.nglyph, E = 0; E < v + F; E++)t[e + E + 1] = -1;
                                    break;
                                }
                            }
                        }
                        else if (n.ltype == 5 && u.fmt == 2) for(var b = r._lctf.getInterval(u.cDef, t[e]), y = u.cDef[b + 2], x = u.scset[y], _ = 0; _ < x.length; _++){
                            var T = x[_], w = T.input;
                            if (!(w.length > o)) {
                                for(g = !0, E = 0; E < w.length; E++){
                                    var R = r._lctf.getInterval(u.cDef, t[e + 1 + E]);
                                    if (b == -1 && u.cDef[R + 2] != w[E]) {
                                        g = !1;
                                        break;
                                    }
                                }
                                if (g) {
                                    var O = T.substLookupRecords;
                                    for(h = 0; h < O.length; h += 2)O[h], O[h + 1];
                                }
                            }
                        }
                        else if (n.ltype == 6 && u.fmt == 3) {
                            if (!r.U._glsCovered(t, u.backCvg, e - u.backCvg.length) || !r.U._glsCovered(t, u.inptCvg, e) || !r.U._glsCovered(t, u.ahedCvg, e + u.inptCvg.length)) continue;
                            var Y = u.lookupRec;
                            for(_ = 0; _ < Y.length; _ += 2){
                                b = Y[_];
                                var S = i[Y[_ + 1]];
                                r.U._applySubs(t, e + b, S, i);
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
                for(var a = e.stack, s = e.nStems, u = e.haveWidth, d = e.width, h = e.open, p = 0, v = e.x, g = e.y, F = 0, E = 0, b = 0, y = 0, x = 0, _ = 0, T = 0, w = 0, R = 0, O = 0, Y = {
                    val: 0,
                    size: 0
                }; p < t.length;){
                    r.CFF.getCharString(t, p, Y);
                    var S = Y.val;
                    if (p += Y.size, S == "o1" || S == "o18") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                    else if (S == "o3" || S == "o23") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                    else if (S == "o4") a.length > 1 && !u && (d = a.shift() + i.nominalWidthX, u = !0), h && r.U.P.closePath(o), g += a.pop(), r.U.P.moveTo(o, v, g), h = !0;
                    else if (S == "o5") for(; a.length > 0;)v += a.shift(), g += a.shift(), r.U.P.lineTo(o, v, g);
                    else if (S == "o6" || S == "o7") for(var M = a.length, D = S == "o6", W = 0; W < M; W++){
                        var V = a.shift();
                        D ? v += V : g += V, D = !D, r.U.P.lineTo(o, v, g);
                    }
                    else if (S == "o8" || S == "o24") {
                        M = a.length;
                        for(var J = 0; J + 6 <= M;)F = v + a.shift(), E = g + a.shift(), b = F + a.shift(), y = E + a.shift(), v = b + a.shift(), g = y + a.shift(), r.U.P.curveTo(o, F, E, b, y, v, g), J += 6;
                        S == "o24" && (v += a.shift(), g += a.shift(), r.U.P.lineTo(o, v, g));
                    } else {
                        if (S == "o11") break;
                        if (S == "o1234" || S == "o1235" || S == "o1236" || S == "o1237") S == "o1234" && (E = g, b = (F = v + a.shift()) + a.shift(), O = y = E + a.shift(), _ = y, w = g, v = (T = (x = (R = b + a.shift()) + a.shift()) + a.shift()) + a.shift(), r.U.P.curveTo(o, F, E, b, y, R, O), r.U.P.curveTo(o, x, _, T, w, v, g)), S == "o1235" && (F = v + a.shift(), E = g + a.shift(), b = F + a.shift(), y = E + a.shift(), R = b + a.shift(), O = y + a.shift(), x = R + a.shift(), _ = O + a.shift(), T = x + a.shift(), w = _ + a.shift(), v = T + a.shift(), g = w + a.shift(), a.shift(), r.U.P.curveTo(o, F, E, b, y, R, O), r.U.P.curveTo(o, x, _, T, w, v, g)), S == "o1236" && (F = v + a.shift(), E = g + a.shift(), b = F + a.shift(), O = y = E + a.shift(), _ = y, T = (x = (R = b + a.shift()) + a.shift()) + a.shift(), w = _ + a.shift(), v = T + a.shift(), r.U.P.curveTo(o, F, E, b, y, R, O), r.U.P.curveTo(o, x, _, T, w, v, g)), S == "o1237" && (F = v + a.shift(), E = g + a.shift(), b = F + a.shift(), y = E + a.shift(), R = b + a.shift(), O = y + a.shift(), x = R + a.shift(), _ = O + a.shift(), T = x + a.shift(), w = _ + a.shift(), Math.abs(T - v) > Math.abs(w - g) ? v = T + a.shift() : g = w + a.shift(), r.U.P.curveTo(o, F, E, b, y, R, O), r.U.P.curveTo(o, x, _, T, w, v, g));
                        else if (S == "o14") {
                            if (a.length > 0 && !u && (d = a.shift() + n.nominalWidthX, u = !0), a.length == 4) {
                                var oe = a.shift(), N = a.shift(), P = a.shift(), m = a.shift(), U = r.CFF.glyphBySE(n, P), k = r.CFF.glyphBySE(n, m);
                                r.U._drawCFF(n.CharStrings[U], e, n, i, o), e.x = oe, e.y = N, r.U._drawCFF(n.CharStrings[k], e, n, i, o);
                            }
                            h && (r.U.P.closePath(o), h = !1);
                        } else if (S == "o19" || S == "o20") a.length % 2 != 0 && !u && (d = a.shift() + i.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0, p += s + 7 >> 3;
                        else if (S == "o21") a.length > 2 && !u && (d = a.shift() + i.nominalWidthX, u = !0), g += a.pop(), v += a.pop(), h && r.U.P.closePath(o), r.U.P.moveTo(o, v, g), h = !0;
                        else if (S == "o22") a.length > 1 && !u && (d = a.shift() + i.nominalWidthX, u = !0), v += a.pop(), h && r.U.P.closePath(o), r.U.P.moveTo(o, v, g), h = !0;
                        else if (S == "o25") {
                            for(; a.length > 6;)v += a.shift(), g += a.shift(), r.U.P.lineTo(o, v, g);
                            F = v + a.shift(), E = g + a.shift(), b = F + a.shift(), y = E + a.shift(), v = b + a.shift(), g = y + a.shift(), r.U.P.curveTo(o, F, E, b, y, v, g);
                        } else if (S == "o26") for(a.length % 2 && (v += a.shift()); a.length > 0;)F = v, E = g + a.shift(), v = b = F + a.shift(), g = (y = E + a.shift()) + a.shift(), r.U.P.curveTo(o, F, E, b, y, v, g);
                        else if (S == "o27") for(a.length % 2 && (g += a.shift()); a.length > 0;)E = g, b = (F = v + a.shift()) + a.shift(), y = E + a.shift(), v = b + a.shift(), g = y, r.U.P.curveTo(o, F, E, b, y, v, g);
                        else if (S == "o10" || S == "o29") {
                            var A = S == "o10" ? i : n;
                            if (a.length == 0) console.debug("error: empty stack");
                            else {
                                var C = a.pop(), j = A.Subrs[C + A.Bias];
                                e.x = v, e.y = g, e.nStems = s, e.haveWidth = u, e.width = d, e.open = h, r.U._drawCFF(j, e, n, i, o), v = e.x, g = e.y, s = e.nStems, u = e.haveWidth, d = e.width, h = e.open;
                            }
                        } else if (S == "o30" || S == "o31") {
                            var L = a.length, G = (J = 0, S == "o31");
                            for(J += L - (M = -3 & L); J < M;)G ? (E = g, b = (F = v + a.shift()) + a.shift(), g = (y = E + a.shift()) + a.shift(), M - J == 5 ? (v = b + a.shift(), J++) : v = b, G = !1) : (F = v, E = g + a.shift(), b = F + a.shift(), y = E + a.shift(), v = b + a.shift(), M - J == 5 ? (g = y + a.shift(), J++) : g = y, G = !0), r.U.P.curveTo(o, F, E, b, y, v, g), J += 4;
                        } else {
                            if ((S + "").charAt(0) == "o") throw console.debug("Unknown operation: " + S, t), S;
                            a.push(S);
                        }
                    }
                }
                e.x = v, e.y = g, e.nStems = s, e.haveWidth = u, e.width = d, e.open = h;
            };
            var f = r, c = {
                Typr: f
            };
            return l.Typr = f, l.default = c, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({}).Typr;
    }
    function ki() {
        return (function(l) {
            var r = Uint8Array, f = Uint16Array, c = Uint32Array, t = new r([
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
            ]), i = function(S, M) {
                for(var D = new f(31), W = 0; W < 31; ++W)D[W] = M += 1 << S[W - 1];
                var V = new c(D[30]);
                for(W = 1; W < 30; ++W)for(var J = D[W]; J < D[W + 1]; ++J)V[J] = J - D[W] << 5 | W;
                return [
                    D,
                    V
                ];
            }, o = i(t, 2), a = o[0], s = o[1];
            a[28] = 258, s[258] = 28;
            for(var u = i(e, 0)[0], d = new f(32768), h = 0; h < 32768; ++h){
                var p = (43690 & h) >>> 1 | (21845 & h) << 1;
                p = (61680 & (p = (52428 & p) >>> 2 | (13107 & p) << 2)) >>> 4 | (3855 & p) << 4, d[h] = ((65280 & p) >>> 8 | (255 & p) << 8) >>> 1;
            }
            var v = function(S, M, D) {
                for(var W = S.length, V = 0, J = new f(M); V < W; ++V)++J[S[V] - 1];
                var oe, N = new f(M);
                for(V = 0; V < M; ++V)N[V] = N[V - 1] + J[V - 1] << 1;
                {
                    oe = new f(1 << M);
                    var P = 15 - M;
                    for(V = 0; V < W; ++V)if (S[V]) for(var m = V << 4 | S[V], U = M - S[V], k = N[S[V] - 1]++ << U, A = k | (1 << U) - 1; k <= A; ++k)oe[d[k] >>> P] = m;
                }
                return oe;
            }, g = new r(288);
            for(h = 0; h < 144; ++h)g[h] = 8;
            for(h = 144; h < 256; ++h)g[h] = 9;
            for(h = 256; h < 280; ++h)g[h] = 7;
            for(h = 280; h < 288; ++h)g[h] = 8;
            var F = new r(32);
            for(h = 0; h < 32; ++h)F[h] = 5;
            var E = v(g, 9), b = v(F, 5), y = function(S) {
                for(var M = S[0], D = 1; D < S.length; ++D)S[D] > M && (M = S[D]);
                return M;
            }, x = function(S, M, D) {
                var W = M / 8 | 0;
                return (S[W] | S[W + 1] << 8) >> (7 & M) & D;
            }, _ = function(S, M) {
                var D = M / 8 | 0;
                return (S[D] | S[D + 1] << 8 | S[D + 2] << 16) >> (7 & M);
            }, T = [
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
            ], w = function(S, M, D) {
                var W = new Error(M || T[S]);
                if (W.code = S, Error.captureStackTrace && Error.captureStackTrace(W, w), !D) throw W;
                return W;
            }, R = function(S, M, D) {
                var W = S.length;
                if (!W || D && !D.l && W < 5) return M || new r(0);
                var V = !M || D, J = !D || D.i;
                D || (D = {}), M || (M = new r(3 * W));
                var oe, N = function(fe) {
                    var Fe = M.length;
                    if (fe > Fe) {
                        var Ce = new r(Math.max(2 * Fe, fe));
                        Ce.set(M), M = Ce;
                    }
                }, P = D.f || 0, m = D.p || 0, U = D.b || 0, k = D.l, A = D.d, C = D.m, j = D.n, L = 8 * W;
                do {
                    if (!k) {
                        D.f = P = x(S, m, 1);
                        var G = x(S, m + 1, 3);
                        if (m += 3, !G) {
                            var Q = S[(te = ((oe = m) / 8 | 0) + (7 & oe && 1) + 4) - 4] | S[te - 3] << 8, K = te + Q;
                            if (K > W) {
                                J && w(0);
                                break;
                            }
                            V && N(U + Q), M.set(S.subarray(te, K), U), D.b = U += Q, D.p = m = 8 * K;
                            continue;
                        }
                        if (G == 1) k = E, A = b, C = 9, j = 5;
                        else if (G == 2) {
                            var B = x(S, m, 31) + 257, z = x(S, m + 10, 15) + 4, ue = B + x(S, m + 5, 31) + 1;
                            m += 14;
                            for(var ce = new r(ue), q = new r(19), ie = 0; ie < z; ++ie)q[n[ie]] = x(S, m + 3 * ie, 7);
                            m += 3 * z;
                            var ne = y(q), X = (1 << ne) - 1, re = v(q, ne);
                            for(ie = 0; ie < ue;){
                                var te, I = re[x(S, m, X)];
                                if (m += 15 & I, (te = I >>> 4) < 16) ce[ie++] = te;
                                else {
                                    var ve = 0, $ = 0;
                                    for(te == 16 ? ($ = 3 + x(S, m, 3), m += 2, ve = ce[ie - 1]) : te == 17 ? ($ = 3 + x(S, m, 7), m += 3) : te == 18 && ($ = 11 + x(S, m, 127), m += 7); $--;)ce[ie++] = ve;
                                }
                            }
                            var ae = ce.subarray(0, B), Z = ce.subarray(B);
                            C = y(ae), j = y(Z), k = v(ae, C), A = v(Z, j);
                        } else w(1);
                        if (m > L) {
                            J && w(0);
                            break;
                        }
                    }
                    V && N(U + 131072);
                    for(var Se = (1 << C) - 1, ee = (1 << j) - 1, se = m;; se = m){
                        var de = (ve = k[_(S, m) & Se]) >>> 4;
                        if ((m += 15 & ve) > L) {
                            J && w(0);
                            break;
                        }
                        if (ve || w(2), de < 256) M[U++] = de;
                        else {
                            if (de == 256) {
                                se = m, k = null;
                                break;
                            }
                            var ge = de - 254;
                            if (de > 264) {
                                var Ue = t[ie = de - 257];
                                ge = x(S, m, (1 << Ue) - 1) + a[ie], m += Ue;
                            }
                            var De = A[_(S, m) & ee], ye = De >>> 4;
                            if (De || w(3), m += 15 & De, Z = u[ye], ye > 3 && (Ue = e[ye], Z += _(S, m) & (1 << Ue) - 1, m += Ue), m > L) {
                                J && w(0);
                                break;
                            }
                            V && N(U + 131072);
                            for(var be = U + ge; U < be; U += 4)M[U] = M[U - Z], M[U + 1] = M[U + 1 - Z], M[U + 2] = M[U + 2 - Z], M[U + 3] = M[U + 3 - Z];
                            U = be;
                        }
                    }
                    D.l = k, D.p = se, D.b = U, k && (P = 1, D.m = C, D.d = A, D.n = j);
                }while (!P);
                return U == M.length ? M : (function(fe, Fe, Ce) {
                    (Ce == null || Ce > fe.length) && (Ce = fe.length);
                    var ze = new (fe instanceof f ? f : fe instanceof c ? c : r)(Ce - Fe);
                    return ze.set(fe.subarray(Fe, Ce)), ze;
                })(M, 0, U);
            }, O = new r(0), Y = typeof TextDecoder < "u" && new TextDecoder;
            try {
                Y.decode(O, {
                    stream: !0
                });
            } catch  {}
            return l.convert_streams = function(S) {
                var M = new DataView(S), D = 0;
                function W() {
                    var B = M.getUint16(D);
                    return D += 2, B;
                }
                function V() {
                    var B = M.getUint32(D);
                    return D += 4, B;
                }
                function J(B) {
                    Q.setUint16(K, B), K += 2;
                }
                function oe(B) {
                    Q.setUint32(K, B), K += 4;
                }
                for(var N = {
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
                }, P = 0; Math.pow(2, P) <= N.numTables;)P++;
                P--;
                for(var m = 16 * Math.pow(2, P), U = 16 * N.numTables - m, k = 12, A = [], C = 0; C < N.numTables; C++)A.push({
                    tag: V(),
                    offset: V(),
                    compLength: V(),
                    origLength: V(),
                    origChecksum: V()
                }), k += 16;
                var j, L = new Uint8Array(12 + 16 * A.length + A.reduce((function(B, z) {
                    return B + z.origLength + 4;
                }), 0)), G = L.buffer, Q = new DataView(G), K = 0;
                return oe(N.flavor), J(N.numTables), J(m), J(P), J(U), A.forEach((function(B) {
                    oe(B.tag), oe(B.origChecksum), oe(k), oe(B.origLength), B.outOffset = k, (k += B.origLength) % 4 != 0 && (k += 4 - k % 4);
                })), A.forEach((function(B) {
                    var z, ue = S.slice(B.offset, B.offset + B.compLength);
                    if (B.compLength != B.origLength) {
                        var ce = new Uint8Array(B.origLength);
                        z = new Uint8Array(ue, 2), R(z, ce);
                    } else ce = new Uint8Array(ue);
                    L.set(ce, B.outOffset);
                    var q = 0;
                    (k = B.outOffset + B.origLength) % 4 != 0 && (q = 4 - k % 4), L.set(new Uint8Array(q).buffer, B.outOffset + B.origLength), j = k + q;
                })), G.slice(0, j);
            }, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({}).convert_streams;
    }
    function Ai(l, r) {
        const f = {
            M: 2,
            L: 2,
            Q: 4,
            C: 6,
            Z: 0
        }, c = {
            C: "18g,ca,368,1kz",
            D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",
            R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",
            L: "x9u,jff,a,fd,jv",
            T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"
        }, t = 1, e = 2, n = 4, i = 8, o = 16, a = 32;
        let s;
        function u(T) {
            if (!s) {
                const w = {
                    R: e,
                    L: t,
                    D: n,
                    C: o,
                    U: a,
                    T: i
                };
                s = new Map;
                for(let R in c){
                    let O = 0;
                    c[R].split(",").forEach((Y)=>{
                        let [S, M] = Y.split("+");
                        S = parseInt(S, 36), M = M ? parseInt(M, 36) : 0, s.set(O += S, w[R]);
                        for(let D = M; D--;)s.set(++O, w[R]);
                    });
                }
            }
            return s.get(T) || a;
        }
        const d = 1, h = 2, p = 3, v = 4, g = [
            null,
            "isol",
            "init",
            "fina",
            "medi"
        ];
        function F(T) {
            const w = new Uint8Array(T.length);
            let R = a, O = d, Y = -1;
            for(let S = 0; S < T.length; S++){
                const M = T.codePointAt(S);
                let D = u(M) | 0, W = d;
                D & i || (R & (t | n | o) ? D & (e | n | o) ? (W = p, (O === d || O === p) && w[Y]++) : D & (t | a) && (O === h || O === v) && w[Y]-- : R & (e | a) && (O === h || O === v) && w[Y]--, O = w[S] = W, R = D, Y = S, M > 65535 && S++);
            }
            return w;
        }
        function E(T, w) {
            const R = [];
            for(let Y = 0; Y < w.length; Y++){
                const S = w.codePointAt(Y);
                S > 65535 && Y++, R.push(l.U.codeToGlyph(T, S));
            }
            const O = T.GSUB;
            if (O) {
                const { lookupList: Y, featureList: S } = O;
                let M;
                const D = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, W = [];
                S.forEach((V)=>{
                    if (D.test(V.tag)) for(let J = 0; J < V.tab.length; J++){
                        if (W[V.tab[J]]) continue;
                        W[V.tab[J]] = !0;
                        const oe = Y[V.tab[J]], N = /^(isol|init|fina|medi)$/.test(V.tag);
                        N && !M && (M = F(w));
                        for(let P = 0; P < R.length; P++)(!M || !N || g[M[P]] === V.tag) && l.U._applySubs(R, P, oe, Y);
                    }
                });
            }
            return R;
        }
        function b(T, w) {
            const R = new Int16Array(w.length * 3);
            let O = 0;
            for(; O < w.length; O++){
                const D = w[O];
                if (D === -1) continue;
                R[O * 3 + 2] = T.hmtx.aWidth[D];
                const W = T.GPOS;
                if (W) {
                    const V = W.lookupList;
                    for(let J = 0; J < V.length; J++){
                        const oe = V[J];
                        for(let N = 0; N < oe.tabs.length; N++){
                            const P = oe.tabs[N];
                            if (oe.ltype === 1) {
                                if (l._lctf.coverageIndex(P.coverage, D) !== -1 && P.pos) {
                                    M(P.pos, O);
                                    break;
                                }
                            } else if (oe.ltype === 2) {
                                let m = null, U = Y();
                                if (U !== -1) {
                                    const k = l._lctf.coverageIndex(P.coverage, w[U]);
                                    if (k !== -1) {
                                        if (P.fmt === 1) {
                                            const A = P.pairsets[k];
                                            for(let C = 0; C < A.length; C++)A[C].gid2 === D && (m = A[C]);
                                        } else if (P.fmt === 2) {
                                            const A = l.U._getGlyphClass(w[U], P.classDef1), C = l.U._getGlyphClass(D, P.classDef2);
                                            m = P.matrix[A][C];
                                        }
                                        if (m) {
                                            m.val1 && M(m.val1, U), m.val2 && M(m.val2, O);
                                            break;
                                        }
                                    }
                                }
                            } else if (oe.ltype === 4) {
                                const m = l._lctf.coverageIndex(P.markCoverage, D);
                                if (m !== -1) {
                                    const U = Y(S), k = U === -1 ? -1 : l._lctf.coverageIndex(P.baseCoverage, w[U]);
                                    if (k !== -1) {
                                        const A = P.markArray[m], C = P.baseArray[k][A.markClass];
                                        R[O * 3] = C.x - A.x + R[U * 3] - R[U * 3 + 2], R[O * 3 + 1] = C.y - A.y + R[U * 3 + 1];
                                        break;
                                    }
                                }
                            } else if (oe.ltype === 6) {
                                const m = l._lctf.coverageIndex(P.mark1Coverage, D);
                                if (m !== -1) {
                                    const U = Y();
                                    if (U !== -1) {
                                        const k = w[U];
                                        if (y(T, k) === 3) {
                                            const A = l._lctf.coverageIndex(P.mark2Coverage, k);
                                            if (A !== -1) {
                                                const C = P.mark1Array[m], j = P.mark2Array[A][C.markClass];
                                                R[O * 3] = j.x - C.x + R[U * 3] - R[U * 3 + 2], R[O * 3 + 1] = j.y - C.y + R[U * 3 + 1];
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else if (T.kern && !T.cff) {
                    const V = Y();
                    if (V !== -1) {
                        const J = T.kern.glyph1.indexOf(w[V]);
                        if (J !== -1) {
                            const oe = T.kern.rval[J].glyph2.indexOf(D);
                            oe !== -1 && (R[V * 3 + 2] += T.kern.rval[J].vals[oe]);
                        }
                    }
                }
            }
            return R;
            function Y(D) {
                for(let W = O - 1; W >= 0; W--)if (w[W] !== -1 && (!D || D(w[W]))) return W;
                return -1;
            }
            function S(D) {
                return y(T, D) === 1;
            }
            function M(D, W) {
                for(let V = 0; V < 3; V++)R[W * 3 + V] += D[V] || 0;
            }
        }
        function y(T, w) {
            const R = T.GDEF && T.GDEF.glyphClassDef;
            return R ? l.U._getGlyphClass(w, R) : 0;
        }
        function x(...T) {
            for(let w = 0; w < T.length; w++)if (typeof T[w] == "number") return T[w];
        }
        function _(T) {
            const w = Object.create(null), R = T["OS/2"], O = T.hhea, Y = T.head.unitsPerEm, S = x(R && R.sTypoAscender, O && O.ascender, Y), M = {
                unitsPerEm: Y,
                ascender: S,
                descender: x(R && R.sTypoDescender, O && O.descender, 0),
                capHeight: x(R && R.sCapHeight, S),
                xHeight: x(R && R.sxHeight, S),
                lineGap: x(R && R.sTypoLineGap, O && O.lineGap),
                supportsCodePoint (D) {
                    return l.U.codeToGlyph(T, D) > 0;
                },
                forEachGlyph (D, W, V, J) {
                    let oe = 0;
                    const N = 1 / M.unitsPerEm * W, P = E(T, D);
                    let m = 0;
                    const U = b(T, P);
                    return P.forEach((k, A)=>{
                        if (k !== -1) {
                            let C = w[k];
                            if (!C) {
                                const { cmds: j, crds: L } = l.U.glyphToPath(T, k);
                                let G = "", Q = 0;
                                for(let ce = 0, q = j.length; ce < q; ce++){
                                    const ie = f[j[ce]];
                                    G += j[ce];
                                    for(let ne = 1; ne <= ie; ne++)G += (ne > 1 ? "," : "") + L[Q++];
                                }
                                let K, B, z, ue;
                                if (L.length) {
                                    K = B = 1 / 0, z = ue = -1 / 0;
                                    for(let ce = 0, q = L.length; ce < q; ce += 2){
                                        let ie = L[ce], ne = L[ce + 1];
                                        ie < K && (K = ie), ne < B && (B = ne), ie > z && (z = ie), ne > ue && (ue = ne);
                                    }
                                } else K = z = B = ue = 0;
                                C = w[k] = {
                                    index: k,
                                    advanceWidth: T.hmtx.aWidth[k],
                                    xMin: K,
                                    yMin: B,
                                    xMax: z,
                                    yMax: ue,
                                    path: G
                                };
                            }
                            J.call(null, C, oe + U[A * 3] * N, U[A * 3 + 1] * N, m), oe += U[A * 3 + 2] * N, V && (oe += V * W);
                        }
                        m += D.codePointAt(m) > 65535 ? 2 : 1;
                    }), oe;
                }
            };
            return M;
        }
        return function(w) {
            const R = new Uint8Array(w, 0, 4), O = l._bin.readASCII(R, 0, 4);
            if (O === "wOFF") w = r(w);
            else if (O === "wOF2") throw new Error("woff2 fonts not supported");
            return _(l.parse(w)[0]);
        };
    }
    const Di = wt({
        name: "Typr Font Parser",
        dependencies: [
            Ci,
            ki,
            Ai
        ],
        init (l, r, f) {
            const c = l(), t = r();
            return f(c, t);
        }
    });
    function Fi() {
        return (function(l) {
            var r = function() {
                this.buckets = new Map;
            };
            r.prototype.add = function(b) {
                var y = b >> 5;
                this.buckets.set(y, (this.buckets.get(y) || 0) | 1 << (31 & b));
            }, r.prototype.has = function(b) {
                var y = this.buckets.get(b >> 5);
                return y !== void 0 && (y & 1 << (31 & b)) != 0;
            }, r.prototype.serialize = function() {
                var b = [];
                return this.buckets.forEach((function(y, x) {
                    b.push((+x).toString(36) + ":" + y.toString(36));
                })), b.join(",");
            }, r.prototype.deserialize = function(b) {
                var y = this;
                this.buckets.clear(), b.split(",").forEach((function(x) {
                    var _ = x.split(":");
                    y.buckets.set(parseInt(_[0], 36), parseInt(_[1], 36));
                }));
            };
            var f = Math.pow(2, 8), c = f - 1, t = ~c;
            function e(b) {
                var y = (function(_) {
                    return _ & t;
                })(b).toString(16), x = (function(_) {
                    return (_ & t) + f - 1;
                })(b).toString(16);
                return "codepoint-index/plane" + (b >> 16) + "/" + y + "-" + x + ".json";
            }
            function n(b, y) {
                var x = b & c, _ = y.codePointAt(x / 6 | 0);
                return ((_ = (_ || 48) - 48) & 1 << x % 6) != 0;
            }
            function i(b, y) {
                var x;
                (x = b, x.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map((function(_) {
                    return _.split("-").map((function(T) {
                        return parseInt(T.trim(), 16);
                    }));
                }))).forEach((function(_) {
                    var T = _[0], w = _[1];
                    w === void 0 && (w = T), y(T, w);
                }));
            }
            function o(b, y) {
                i(b, (function(x, _) {
                    for(var T = x; T <= _; T++)y(T);
                }));
            }
            var a = {}, s = {}, u = new WeakMap, d = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
            function h(b) {
                var y = u.get(b);
                return y || (y = new r, o(b.ranges, (function(x) {
                    return y.add(x);
                })), u.set(b, y)), y;
            }
            var p, v = new Map;
            function g(b, y, x) {
                return b[y] ? y : b[x] ? x : (function(_) {
                    for(var T in _)return T;
                })(b);
            }
            function F(b, y) {
                var x = y;
                if (!b.includes(x)) {
                    x = 1 / 0;
                    for(var _ = 0; _ < b.length; _++)Math.abs(b[_] - y) < Math.abs(x - y) && (x = b[_]);
                }
                return x;
            }
            function E(b) {
                return p || (p = new Set, o("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", (function(y) {
                    p.add(y);
                }))), p.has(b);
            }
            return l.CodePointSet = r, l.clearCache = function() {
                a = {}, s = {};
            }, l.getFontsForString = function(b, y) {
                y === void 0 && (y = {});
                var x, _ = y.lang;
                _ === void 0 && (_ = /\p{Script=Hangul}/u.test(x = b) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(x) ? "ja" : "en");
                var T = y.category;
                T === void 0 && (T = "sans-serif");
                var w = y.style;
                w === void 0 && (w = "normal");
                var R = y.weight;
                R === void 0 && (R = 400);
                var O = (y.dataUrl || d).replace(/\/$/g, ""), Y = new Map, S = new Uint8Array(b.length), M = {}, D = {}, W = new Array(b.length), V = new Map, J = !1;
                function oe(m) {
                    var U = v.get(m);
                    return U || (U = fetch(O + "/" + m).then((function(k) {
                        if (!k.ok) throw new Error(k.statusText);
                        return k.json().then((function(A) {
                            if (!Array.isArray(A) || A[0] !== 1) throw new Error("Incorrect schema version; need 1, got " + A[0]);
                            return A[1];
                        }));
                    })).catch((function(k) {
                        if (O !== d) return J || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + O + '", trying default CDN. ' + k.message), J = !0), O = d, v.delete(m), oe(m);
                        throw k;
                    })), v.set(m, U)), U;
                }
                for(var N = function(m) {
                    var U = b.codePointAt(m), k = e(U);
                    W[m] = k, a[k] || V.has(k) || V.set(k, oe(k).then((function(A) {
                        a[k] = A;
                    }))), U > 65535 && (m++, P = m);
                }, P = 0; P < b.length; P++)N(P);
                return Promise.all(V.values()).then((function() {
                    V.clear();
                    for(var m = function(k) {
                        var A = b.codePointAt(k), C = null, j = a[W[k]], L = void 0;
                        for(var G in j){
                            var Q = D[G];
                            if (Q === void 0 && (Q = D[G] = new RegExp(G).test(_ || "en")), Q) {
                                for(var K in L = G, j[G])if (n(A, j[G][K])) {
                                    C = K;
                                    break;
                                }
                                break;
                            }
                        }
                        if (!C) {
                            e: for(var B in j)if (B !== L) {
                                for(var z in j[B])if (n(A, j[B][z])) {
                                    C = z;
                                    break e;
                                }
                            }
                        }
                        C || (console.debug("No font coverage for U+" + A.toString(16)), C = "latin"), W[k] = C, s[C] || V.has(C) || V.set(C, oe("font-meta/" + C + ".json").then((function(ue) {
                            s[C] = ue;
                        }))), A > 65535 && (k++, U = k);
                    }, U = 0; U < b.length; U++)m(U);
                    return Promise.all(V.values());
                })).then((function() {
                    for(var m, U = null, k = 0; k < b.length; k++){
                        var A = b.codePointAt(k);
                        if (U && (E(A) || h(U).has(A))) S[k] = S[k - 1];
                        else {
                            U = s[W[k]];
                            var C = M[U.id];
                            if (!C) {
                                var j = U.typeforms, L = g(j, T, "sans-serif"), G = g(j[L], w, "normal"), Q = F((m = j[L]) === null || m === void 0 ? void 0 : m[G], R);
                                C = M[U.id] = O + "/font-files/" + U.id + "/" + L + "." + G + "." + Q + ".woff";
                            }
                            var K = Y.get(C);
                            K == null && (K = Y.size, Y.set(C, K)), S[k] = K;
                        }
                        A > 65535 && (k++, S[k] = S[k - 1]);
                    }
                    return {
                        fontUrls: Array.from(Y.keys()),
                        chars: S
                    };
                }));
            }, Object.defineProperty(l, "__esModule", {
                value: !0
            }), l;
        })({});
    }
    function Mi(l, r) {
        const f = Object.create(null), c = Object.create(null);
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
            let o = f[n];
            o ? i(o) : c[n] ? c[n].push(i) : (c[n] = [
                i
            ], t(n, (a)=>{
                a.src = n, f[n] = a, c[n].forEach((s)=>s(a)), delete c[n];
            }));
        }
        return function(n, i, { lang: o, fonts: a = [], style: s = "normal", weight: u = "normal", unicodeFontsURL: d } = {}) {
            const h = new Uint8Array(n.length), p = [];
            n.length || E();
            const v = new Map, g = [];
            if (s !== "italic" && (s = "normal"), typeof u != "number" && (u = u === "bold" ? 700 : 400), a && !Array.isArray(a) && (a = [
                a
            ]), a = a.slice().filter((y)=>!y.lang || y.lang.test(o)).reverse(), a.length) {
                let T = 0;
                (function w(R = 0) {
                    for(let O = R, Y = n.length; O < Y; O++){
                        const S = n.codePointAt(O);
                        if (T === 1 && p[h[O - 1]].supportsCodePoint(S) || O > 0 && /\s/.test(n[O])) h[O] = h[O - 1], T === 2 && (g[g.length - 1][1] = O);
                        else for(let M = h[O], D = a.length; M <= D; M++)if (M === D) {
                            const W = T === 2 ? g[g.length - 1] : g[g.length] = [
                                O,
                                O
                            ];
                            W[1] = O, T = 2;
                        } else {
                            h[O] = M;
                            const { src: W, unicodeRange: V } = a[M];
                            if (!V || b(S, V)) {
                                const J = f[W];
                                if (!J) {
                                    e(W, ()=>{
                                        w(O);
                                    });
                                    return;
                                }
                                if (J.supportsCodePoint(S)) {
                                    let oe = v.get(J);
                                    typeof oe != "number" && (oe = p.length, p.push(J), v.set(J, oe)), h[O] = oe, T = 1;
                                    break;
                                }
                            }
                        }
                        S > 65535 && O + 1 < Y && (h[O + 1] = h[O], O++, T === 2 && (g[g.length - 1][1] = O));
                    }
                    F();
                })();
            } else g.push([
                0,
                n.length - 1
            ]), F();
            function F() {
                if (g.length) {
                    const y = g.map((x)=>n.substring(x[0], x[1] + 1)).join(`
`);
                    r.getFontsForString(y, {
                        lang: o || void 0,
                        style: s,
                        weight: u,
                        dataUrl: d
                    }).then(({ fontUrls: x, chars: _ })=>{
                        const T = p.length;
                        let w = 0;
                        g.forEach((O)=>{
                            for(let Y = 0, S = O[1] - O[0]; Y <= S; Y++)h[O[0] + Y] = _[w++] + T;
                            w++;
                        });
                        let R = 0;
                        x.forEach((O, Y)=>{
                            e(O, (S)=>{
                                p[Y + T] = S, ++R === x.length && E();
                            });
                        });
                    });
                } else E();
            }
            function E() {
                i({
                    chars: h,
                    fonts: p
                });
            }
            function b(y, x) {
                for(let _ = 0; _ < x.length; _++){
                    const [T, w = T] = x[_];
                    if (T <= y && y <= w) return !0;
                }
                return !1;
            }
        };
    }
    const Pi = wt({
        name: "FontResolver",
        dependencies: [
            Mi,
            Di,
            Fi
        ],
        init (l, r, f) {
            return l(r, f());
        }
    });
    function Li(l, r) {
        const c = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, t = "[^\\S\\u00A0]", e = new RegExp(`${t}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
        function n({ text: p, lang: v, fonts: g, style: F, weight: E, preResolvedFonts: b, unicodeFontsURL: y }, x) {
            const _ = ({ chars: T, fonts: w })=>{
                let R, O;
                const Y = [];
                for(let S = 0; S < T.length; S++)T[S] !== O ? (O = T[S], Y.push(R = {
                    start: S,
                    end: S,
                    fontObj: w[T[S]]
                })) : R.end = S;
                x(Y);
            };
            b ? _(b) : l(p, _, {
                lang: v,
                fonts: g,
                style: F,
                weight: E,
                unicodeFontsURL: y
            });
        }
        function i({ text: p = "", font: v, lang: g, sdfGlyphSize: F = 64, fontSize: E = 400, fontWeight: b = 1, fontStyle: y = "normal", letterSpacing: x = 0, lineHeight: _ = "normal", maxWidth: T = 1 / 0, direction: w, textAlign: R = "left", textIndent: O = 0, whiteSpace: Y = "normal", overflowWrap: S = "normal", anchorX: M = 0, anchorY: D = 0, metricsOnly: W = !1, unicodeFontsURL: V, preResolvedFonts: J = null, includeCaretPositions: oe = !1, chunkedBoundsSize: N = 8192, colorRanges: P = null }, m) {
            const U = u(), k = {
                fontLoad: 0,
                typesetting: 0
            };
            p.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), p = p.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), E = +E, x = +x, T = +T, _ = _ || "normal", O = +O, n({
                text: p,
                lang: g,
                style: y,
                weight: b,
                fonts: typeof v == "string" ? [
                    {
                        src: v
                    }
                ] : v,
                unicodeFontsURL: V,
                preResolvedFonts: J
            }, (A)=>{
                k.fontLoad = u() - U;
                const C = isFinite(T);
                let j = null, L = null, G = null, Q = null, K = null, B = null, z = null, ue = null, ce = 0, q = 0, ie = Y !== "nowrap";
                const ne = new Map, X = u();
                let re = O, te = 0, I = new d;
                const ve = [
                    I
                ];
                A.forEach((ee)=>{
                    const { fontObj: se } = ee, { ascender: de, descender: ge, unitsPerEm: Ue, lineGap: De, capHeight: ye, xHeight: be } = se;
                    let fe = ne.get(se);
                    if (!fe) {
                        const pe = E / Ue, we = _ === "normal" ? (de - ge + De) * pe : _ * E, et = (we - (de - ge) * pe) / 2, _e = Math.min(we, (de - ge) * pe), xe = (de + ge) / 2 * pe + _e / 2;
                        fe = {
                            index: ne.size,
                            src: se.src,
                            fontObj: se,
                            fontSizeMult: pe,
                            unitsPerEm: Ue,
                            ascender: de * pe,
                            descender: ge * pe,
                            capHeight: ye * pe,
                            xHeight: be * pe,
                            lineHeight: we,
                            baseline: -et - de * pe,
                            caretTop: xe,
                            caretBottom: xe - _e
                        }, ne.set(se, fe);
                    }
                    const { fontSizeMult: Fe } = fe, Ce = p.slice(ee.start, ee.end + 1);
                    let ze, Te;
                    se.forEachGlyph(Ce, E, x, (pe, we, et, _e)=>{
                        we += te, _e += ee.start, ze = we, Te = pe;
                        const xe = p.charAt(_e), Me = pe.advanceWidth * Fe, ke = I.count;
                        let me;
                        if ("isEmpty" in pe || (pe.isWhitespace = !!xe && new RegExp(t).test(xe), pe.canBreakAfter = !!xe && e.test(xe), pe.isEmpty = pe.xMin === pe.xMax || pe.yMin === pe.yMax || c.test(xe)), !pe.isWhitespace && !pe.isEmpty && q++, ie && C && !pe.isWhitespace && we + Me + re > T && ke) {
                            if (I.glyphAt(ke - 1).glyphObj.canBreakAfter) me = new d, re = -we;
                            else for(let Ie = ke; Ie--;)if (Ie === 0 && S === "break-word") {
                                me = new d, re = -we;
                                break;
                            } else if (I.glyphAt(Ie).glyphObj.canBreakAfter) {
                                me = I.splitAt(Ie + 1);
                                const Ge = me.glyphAt(0).x;
                                re -= Ge;
                                for(let Pe = me.count; Pe--;)me.glyphAt(Pe).x -= Ge;
                                break;
                            }
                            me && (I.isSoftWrapped = !0, I = me, ve.push(I), ce = T);
                        }
                        let Ae = I.glyphAt(I.count);
                        Ae.glyphObj = pe, Ae.x = we + re, Ae.y = et, Ae.width = Me, Ae.charIndex = _e, Ae.fontData = fe, xe === `
` && (I = new d, ve.push(I), re = -(we + Me + x * E) + O);
                    }), te = ze + Te.advanceWidth * Fe + x * E;
                });
                let $ = 0;
                ve.forEach((ee)=>{
                    let se = !0;
                    for(let de = ee.count; de--;){
                        const ge = ee.glyphAt(de);
                        se && !ge.glyphObj.isWhitespace && (ee.width = ge.x + ge.width, ee.width > ce && (ce = ee.width), se = !1);
                        let { lineHeight: Ue, capHeight: De, xHeight: ye, baseline: be } = ge.fontData;
                        Ue > ee.lineHeight && (ee.lineHeight = Ue);
                        const fe = be - ee.baseline;
                        fe < 0 && (ee.baseline += fe, ee.cap += fe, ee.ex += fe), ee.cap = Math.max(ee.cap, ee.baseline + De), ee.ex = Math.max(ee.ex, ee.baseline + ye);
                    }
                    ee.baseline -= $, ee.cap -= $, ee.ex -= $, $ += ee.lineHeight;
                });
                let ae = 0, Z = 0;
                if (M && (typeof M == "number" ? ae = -M : typeof M == "string" && (ae = -ce * (M === "left" ? 0 : M === "center" ? .5 : M === "right" ? 1 : a(M)))), D && (typeof D == "number" ? Z = -D : typeof D == "string" && (Z = D === "top" ? 0 : D === "top-baseline" ? -ve[0].baseline : D === "top-cap" ? -ve[0].cap : D === "top-ex" ? -ve[0].ex : D === "middle" ? $ / 2 : D === "bottom" ? $ : D === "bottom-baseline" ? -ve[ve.length - 1].baseline : a(D) * $)), !W) {
                    const ee = r.getEmbeddingLevels(p, w);
                    j = new Uint16Array(q), L = new Uint8Array(q), G = new Float32Array(q * 2), Q = {}, z = [
                        1 / 0,
                        1 / 0,
                        -1 / 0,
                        -1 / 0
                    ], ue = [], oe && (B = new Float32Array(p.length * 4)), P && (K = new Uint8Array(q * 3));
                    let se = 0, de = -1, ge = -1, Ue, De;
                    if (ve.forEach((ye, be)=>{
                        let { count: fe, width: Fe } = ye;
                        if (fe > 0) {
                            let Ce = 0;
                            for(let _e = fe; _e-- && ye.glyphAt(_e).glyphObj.isWhitespace;)Ce++;
                            let ze = 0, Te = 0;
                            if (R === "center") ze = (ce - Fe) / 2;
                            else if (R === "right") ze = ce - Fe;
                            else if (R === "justify" && ye.isSoftWrapped) {
                                let _e = 0;
                                for(let xe = fe - Ce; xe--;)ye.glyphAt(xe).glyphObj.isWhitespace && _e++;
                                Te = (ce - Fe) / _e;
                            }
                            if (Te || ze) {
                                let _e = 0;
                                for(let xe = 0; xe < fe; xe++){
                                    let Me = ye.glyphAt(xe);
                                    const ke = Me.glyphObj;
                                    Me.x += ze + _e, Te !== 0 && ke.isWhitespace && xe < fe - Ce && (_e += Te, Me.width += Te);
                                }
                            }
                            const pe = r.getReorderSegments(p, ee, ye.glyphAt(0).charIndex, ye.glyphAt(ye.count - 1).charIndex);
                            for(let _e = 0; _e < pe.length; _e++){
                                const [xe, Me] = pe[_e];
                                let ke = 1 / 0, me = -1 / 0;
                                for(let Ae = 0; Ae < fe; Ae++)if (ye.glyphAt(Ae).charIndex >= xe) {
                                    let Ie = Ae, Ge = Ae;
                                    for(; Ge < fe; Ge++){
                                        let Pe = ye.glyphAt(Ge);
                                        if (Pe.charIndex > Me) break;
                                        Ge < fe - Ce && (ke = Math.min(ke, Pe.x), me = Math.max(me, Pe.x + Pe.width));
                                    }
                                    for(let Pe = Ie; Pe < Ge; Pe++){
                                        const He = ye.glyphAt(Pe);
                                        He.x = me - (He.x + He.width - ke);
                                    }
                                    break;
                                }
                            }
                            let we;
                            const et = (_e)=>we = _e;
                            for(let _e = 0; _e < fe; _e++){
                                const xe = ye.glyphAt(_e);
                                we = xe.glyphObj;
                                const Me = we.index, ke = ee.levels[xe.charIndex] & 1;
                                if (ke) {
                                    const me = r.getMirroredCharacter(p[xe.charIndex]);
                                    me && xe.fontData.fontObj.forEachGlyph(me, 0, 0, et);
                                }
                                if (oe) {
                                    const { charIndex: me, fontData: Ae } = xe, Ie = xe.x + ae, Ge = xe.x + xe.width + ae;
                                    B[me * 4] = ke ? Ge : Ie, B[me * 4 + 1] = ke ? Ie : Ge, B[me * 4 + 2] = ye.baseline + Ae.caretBottom + Z, B[me * 4 + 3] = ye.baseline + Ae.caretTop + Z;
                                    const Pe = me - de;
                                    Pe > 1 && s(B, de, Pe), de = me;
                                }
                                if (P) {
                                    const { charIndex: me } = xe;
                                    for(; me > ge;)ge++, P.hasOwnProperty(ge) && (De = P[ge]);
                                }
                                if (!we.isWhitespace && !we.isEmpty) {
                                    const me = se++, { fontSizeMult: Ae, src: Ie, index: Ge } = xe.fontData, Pe = Q[Ie] || (Q[Ie] = {});
                                    Pe[Me] || (Pe[Me] = {
                                        path: we.path,
                                        pathBounds: [
                                            we.xMin,
                                            we.yMin,
                                            we.xMax,
                                            we.yMax
                                        ]
                                    });
                                    const He = xe.x + ae, tt = xe.y + ye.baseline + Z;
                                    G[me * 2] = He, G[me * 2 + 1] = tt;
                                    const qe = He + we.xMin * Ae, rt = tt + we.yMin * Ae, ct = He + we.xMax * Ae, $e = tt + we.yMax * Ae;
                                    qe < z[0] && (z[0] = qe), rt < z[1] && (z[1] = rt), ct > z[2] && (z[2] = ct), $e > z[3] && (z[3] = $e), me % N === 0 && (Ue = {
                                        start: me,
                                        end: me,
                                        rect: [
                                            1 / 0,
                                            1 / 0,
                                            -1 / 0,
                                            -1 / 0
                                        ]
                                    }, ue.push(Ue)), Ue.end++;
                                    const Ne = Ue.rect;
                                    if (qe < Ne[0] && (Ne[0] = qe), rt < Ne[1] && (Ne[1] = rt), ct > Ne[2] && (Ne[2] = ct), $e > Ne[3] && (Ne[3] = $e), j[me] = Me, L[me] = Ge, P) {
                                        const ft = me * 3;
                                        K[ft] = De >> 16 & 255, K[ft + 1] = De >> 8 & 255, K[ft + 2] = De & 255;
                                    }
                                }
                            }
                        }
                    }), B) {
                        const ye = p.length - de;
                        ye > 1 && s(B, de, ye);
                    }
                }
                const Se = [];
                ne.forEach(({ index: ee, src: se, unitsPerEm: de, ascender: ge, descender: Ue, lineHeight: De, capHeight: ye, xHeight: be })=>{
                    Se[ee] = {
                        src: se,
                        unitsPerEm: de,
                        ascender: ge,
                        descender: Ue,
                        lineHeight: De,
                        capHeight: ye,
                        xHeight: be
                    };
                }), k.typesetting = u() - X, m({
                    glyphIds: j,
                    glyphFontIndices: L,
                    glyphPositions: G,
                    glyphData: Q,
                    fontData: Se,
                    caretPositions: B,
                    glyphColors: K,
                    chunkedBounds: ue,
                    fontSize: E,
                    topBaseline: Z + ve[0].baseline,
                    blockBounds: [
                        ae,
                        Z - $,
                        ae + ce,
                        Z
                    ],
                    visibleBounds: z,
                    timings: k
                });
            });
        }
        function o(p, v) {
            i({
                ...p,
                metricsOnly: !0
            }, (g)=>{
                const [F, E, b, y] = g.blockBounds;
                v({
                    width: b - F,
                    height: y - E
                });
            });
        }
        function a(p) {
            let v = p.match(/^([\d.]+)%$/), g = v ? parseFloat(v[1]) : NaN;
            return isNaN(g) ? 0 : g / 100;
        }
        function s(p, v, g) {
            const F = p[v * 4], E = p[v * 4 + 1], b = p[v * 4 + 2], y = p[v * 4 + 3], x = (E - F) / g;
            for(let _ = 0; _ < g; _++){
                const T = (v + _) * 4;
                p[T] = F + x * _, p[T + 1] = F + x * (_ + 1), p[T + 2] = b, p[T + 3] = y;
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
            glyphAt (p) {
                let v = d.flyweight;
                return v.data = this.data, v.index = p, v;
            },
            splitAt (p) {
                let v = new d;
                return v.data = this.data.splice(p * h.length), v;
            }
        }, d.flyweight = h.reduce((p, v, g, F)=>(Object.defineProperty(p, v, {
                get () {
                    return this.data[this.index * h.length + g];
                },
                set (E) {
                    this.data[this.index * h.length + g] = E;
                }
            }), p), {
            data: null,
            index: 0
        }), {
            typeset: i,
            measure: o
        };
    }
    const ht = ()=>(self.performance || Date).now(), dr = lo();
    let Gn;
    function Oi(l, r, f, c, t, e, n, i, o, a, s = !0) {
        return s ? Bi(l, r, f, c, t, e, n, i, o, a).then(null, (u)=>(Gn || (console.warn("WebGL SDF generation failed, falling back to JS", u), Gn = !0), Nn(l, r, f, c, t, e, n, i, o, a))) : Nn(l, r, f, c, t, e, n, i, o, a);
    }
    const lr = [], Ri = 5;
    let Xr = 0;
    function fo() {
        const l = ht();
        for(; lr.length && ht() - l < Ri;)lr.shift()();
        Xr = lr.length ? setTimeout(fo, 0) : 0;
    }
    const Bi = (...l)=>new Promise((r, f)=>{
            lr.push(()=>{
                const c = ht();
                try {
                    dr.webgl.generateIntoCanvas(...l), r({
                        timing: ht() - c
                    });
                } catch (t) {
                    f(t);
                }
            }), Xr || (Xr = setTimeout(fo, 0));
        }), Gi = 4, Ii = 2e3, In = {};
    let Ni = 0;
    function Nn(l, r, f, c, t, e, n, i, o, a) {
        const s = "TroikaTextSDFGenerator_JS_" + Ni++ % Gi;
        let u = In[s];
        return u || (u = In[s] = {
            workerModule: wt({
                name: s,
                workerId: s,
                dependencies: [
                    lo,
                    ht
                ],
                init (d, h) {
                    const p = d().javascript.generate;
                    return function(...v) {
                        const g = h();
                        return {
                            textureData: p(...v),
                            timing: h() - g
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
        }), u.requests++, clearTimeout(u.idleTimer), u.workerModule(l, r, f, c, t, e).then(({ textureData: d, timing: h })=>{
            const p = ht(), v = new Uint8Array(d.length * 4);
            for(let g = 0; g < d.length; g++)v[g * 4 + a] = d[g];
            return dr.webglUtils.renderImageData(n, v, i, o, l, r, 1 << 3 - a), h += ht() - p, --u.requests === 0 && (u.idleTimer = setTimeout(()=>{
                mi(s);
            }, Ii)), {
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
    }, Wi = new vt;
    function xt() {
        return (self.performance || Date).now();
    }
    const zn = Object.create(null);
    function uo(l, r) {
        l = Xi({}, l);
        const f = xt(), c = [];
        if (l.font && c.push({
            label: "user",
            src: Yi(l.font)
        }), l.font = c, l.text = "" + l.text, l.sdfGlyphSize = l.sdfGlyphSize || Lt.sdfGlyphSize, l.unicodeFontsURL = l.unicodeFontsURL || Lt.unicodeFontsURL, l.colorRanges != null) {
            let d = {};
            for(let h in l.colorRanges)if (l.colorRanges.hasOwnProperty(h)) {
                let p = l.colorRanges[h];
                typeof p != "number" && (p = Wi.set(p).getHex()), d[h] = p;
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
                sdfTexture: new Go(d, void 0, void 0, void 0, fr, fr),
                contextLost: !1,
                glyphsByFont: new Map
            }, o.sdfTexture.generateMipmaps = !1, Vi(o);
        }
        const { sdfTexture: a, sdfCanvas: s } = o;
        vo(l).then((d)=>{
            const { glyphIds: h, glyphFontIndices: p, fontData: v, glyphPositions: g, fontSize: F, timings: E } = d, b = [], y = new Float32Array(h.length * 4);
            let x = 0, _ = 0;
            const T = xt(), w = v.map((M)=>{
                let D = o.glyphsByFont.get(M.src);
                return D || o.glyphsByFont.set(M.src, D = new Map), D;
            });
            h.forEach((M, D)=>{
                const W = p[D], { src: V, unitsPerEm: J } = v[W];
                let oe = w[W].get(M);
                if (!oe) {
                    const { path: k, pathBounds: A } = d.glyphData[V][M], C = Math.max(A[2] - A[0], A[3] - A[1]) / n * (Lt.sdfMargin * n + .5), j = o.glyphCount++, L = [
                        A[0] - C,
                        A[1] - C,
                        A[2] + C,
                        A[3] + C
                    ];
                    w[W].set(M, oe = {
                        path: k,
                        atlasIndex: j,
                        sdfViewBox: L
                    }), b.push(oe);
                }
                const { sdfViewBox: N } = oe, P = g[_++], m = g[_++], U = F / J;
                y[x++] = P + N[0] * U, y[x++] = m + N[1] * U, y[x++] = P + N[2] * U, y[x++] = m + N[3] * U, h[D] = oe.atlasIndex;
            }), E.quads = (E.quads || 0) + (xt() - T);
            const R = xt();
            E.sdf = {};
            const O = s.height, Y = Math.ceil(o.glyphCount / i), S = Math.pow(2, Math.ceil(Math.log2(Y * n)));
            S > O && (console.info(`Increasing SDF texture size ${O}->${S}`), ji(s, t, S), a.dispose()), Promise.all(b.map((M)=>ho(M, o, l.gpuAccelerateSDF).then(({ timing: D })=>{
                    E.sdf[M.atlasIndex] = D;
                }))).then(()=>{
                b.length && !o.contextLost && (po(o), a.needsUpdate = !0), E.sdfTotal = xt() - R, E.total = xt() - f, r(Object.freeze({
                    parameters: l,
                    sdfTexture: a,
                    sdfGlyphSize: n,
                    sdfExponent: e,
                    glyphBounds: y,
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
    function ho({ path: l, atlasIndex: r, sdfViewBox: f }, { sdfGlyphSize: c, sdfCanvas: t, contextLost: e }, n) {
        if (e) return Promise.resolve({
            timing: -1
        });
        const { textureWidth: i, sdfExponent: o } = Lt, a = Math.max(f[2] - f[0], f[3] - f[1]), s = Math.floor(r / 4), u = s % (i / c) * c, d = Math.floor(s / (i / c)) * c, h = r % 4;
        return Oi(c, c, l, f, a, o, t, u, d, h, n);
    }
    function Vi(l) {
        const r = l.sdfCanvas;
        r.addEventListener("webglcontextlost", (f)=>{
            console.log("Context Lost", f), f.preventDefault(), l.contextLost = !0;
        }), r.addEventListener("webglcontextrestored", (f)=>{
            console.log("Context Restored", f), l.contextLost = !1;
            const c = [];
            l.glyphsByFont.forEach((t)=>{
                t.forEach((e)=>{
                    c.push(ho(e, l, !0));
                });
            }), Promise.all(c).then(()=>{
                po(l), l.sdfTexture.needsUpdate = !0;
            });
        });
    }
    function Hi({ font: l, characters: r, sdfGlyphSize: f }, c) {
        let t = Array.isArray(r) ? r.join(`
`) : "" + r;
        uo({
            font: l,
            sdfGlyphSize: f,
            text: t
        }, c);
    }
    function Xi(l, r) {
        for(let f in r)r.hasOwnProperty(f) && (l[f] = r[f]);
        return l;
    }
    let or;
    function Yi(l) {
        return or || (or = typeof document > "u" ? {} : document.createElement("a")), or.href = l, or.href;
    }
    function po(l) {
        if (typeof createImageBitmap != "function") {
            console.info("Safari<15: applying SDF canvas workaround");
            const { sdfCanvas: r, sdfTexture: f } = l, { width: c, height: t } = r, e = l.sdfCanvas.getContext("webgl");
            let n = f.image.data;
            (!n || n.length !== c * t * 4) && (n = new Uint8Array(c * t * 4), f.image = {
                width: c,
                height: t,
                data: n
            }, f.flipY = !1, f.isDataTexture = !0), e.readPixels(0, 0, c, t, e.RGBA, e.UNSIGNED_BYTE, n);
        }
    }
    const Ji = wt({
        name: "Typesetter",
        dependencies: [
            Li,
            Pi,
            bi
        ],
        init (l, r, f) {
            return l(r, f());
        }
    }), vo = wt({
        name: "Typesetter",
        dependencies: [
            Ji
        ],
        init (l) {
            return function(r) {
                return new Promise((f)=>{
                    l.typeset(r, f);
                });
            };
        },
        getTransferables (l) {
            const r = [];
            for(let f in l)l[f] && l[f].buffer && r.push(l[f].buffer);
            return r;
        }
    });
    vo.onMainThread;
    const jn = {};
    function Ki(l) {
        let r = jn[l];
        return r || (r = jn[l] = new Kr(1, 1, l, l).translate(.5, .5, 0)), r;
    }
    const Qi = "aTroikaGlyphBounds", Wn = "aTroikaGlyphIndex", Zi = "aTroikaGlyphColor";
    class qi extends qn {
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
            ], this.boundingSphere = new Jr, this.boundingBox = new It;
        }
        computeBoundingSphere() {}
        computeBoundingBox() {}
        set detail(r) {
            if (r !== this._detail) {
                this._detail = r, (typeof r != "number" || r < 1) && (r = 1);
                let f = Ki(r);
                [
                    "position",
                    "normal",
                    "uv"
                ].forEach((c)=>{
                    this.attributes[c] = f.attributes[c].clone();
                }), this.setIndex(f.getIndex().clone());
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
        updateGlyphs(r, f, c, t, e) {
            this.updateAttributeData(Qi, r, 4), this.updateAttributeData(Wn, f, 1), this.updateAttributeData(Zi, e, 3), this._blockBounds = c, this._chunkedBounds = t, this.instanceCount = f.length, this._updateBounds();
        }
        _updateBounds() {
            const r = this._blockBounds;
            if (r) {
                const { curveRadius: f, boundingBox: c } = this;
                if (f) {
                    const { PI: t, floor: e, min: n, max: i, sin: o, cos: a } = Math, s = t / 2, u = t * 2, d = Math.abs(f), h = r[0] / d, p = r[2] / d, v = e((h + s) / u) !== e((p + s) / u) ? -d : n(o(h) * d, o(p) * d), g = e((h - s) / u) !== e((p - s) / u) ? d : i(o(h) * d, o(p) * d), F = e((h + t) / u) !== e((p + t) / u) ? d * 2 : i(d - a(h) * d, d - a(p) * d);
                    c.min.set(v, r[1], f < 0 ? -F : 0), c.max.set(g, r[3], f < 0 ? 0 : F);
                } else c.min.set(r[0], r[1], 0), c.max.set(r[2], r[3], 0);
                c.getBoundingSphere(this.boundingSphere);
            }
        }
        applyClipRect(r) {
            let f = this.getAttribute(Wn).count, c = this._chunkedBounds;
            if (c) for(let t = c.length; t--;){
                f = c[t].end;
                let e = c[t].rect;
                if (e[1] < r.w && e[3] > r.y && e[0] < r.z && e[2] > r.x) break;
            }
            this.instanceCount = f;
        }
        updateAttributeData(r, f, c) {
            const t = this.getAttribute(r);
            f ? t && t.array.length === f.length ? (t.array.set(f), t.needsUpdate = !0) : (this.setAttribute(r, new Bo(f, c)), delete this._maxInstanceCount, this.dispose()) : t && this.deleteAttribute(r);
        }
    }
    const $i = `
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
`, ea = `
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
`, ta = `
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
`, ra = `
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
    function na(l) {
        const r = Hr(l, {
            chained: !0,
            extensions: {
                derivatives: !0
            },
            uniforms: {
                uTroikaSDFTexture: {
                    value: null
                },
                uTroikaSDFTextureSize: {
                    value: new pt
                },
                uTroikaSDFGlyphSize: {
                    value: 0
                },
                uTroikaSDFExponent: {
                    value: 0
                },
                uTroikaTotalBounds: {
                    value: new lt(0, 0, 0, 0)
                },
                uTroikaClipRect: {
                    value: new lt(0, 0, 0, 0)
                },
                uTroikaEdgeOffset: {
                    value: 0
                },
                uTroikaFillOpacity: {
                    value: 1
                },
                uTroikaPositionOffset: {
                    value: new pt
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
                    value: new vt
                },
                uTroikaStrokeOpacity: {
                    value: 1
                },
                uTroikaOrient: {
                    value: new Io
                },
                uTroikaUseGlyphColors: {
                    value: !0
                },
                uTroikaSDFDebug: {
                    value: !1
                }
            },
            vertexDefs: $i,
            vertexTransform: ea,
            fragmentDefs: ta,
            fragmentColorTransform: ra,
            customRewriter ({ vertexShader: f, fragmentShader: c }) {
                let t = /\buniform\s+vec3\s+diffuse\b/;
                return t.test(c) && (c = c.replace(t, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), t.test(f) || (f = f.replace(co, `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))), {
                    vertexShader: f,
                    fragmentShader: c
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
    const $r = new Ro({
        color: 16777215,
        side: Ot,
        transparent: !0
    }), Vn = 8421504, Hn = new eo, ir = new Ee, Gr = new Ee, Pt = [], oa = new Ee, Ir = "+x+y";
    function Xn(l) {
        return Array.isArray(l) ? l[0] : l;
    }
    let go = ()=>{
        const l = new ur(new Kr(1, 1), $r);
        return go = ()=>l, l;
    }, mo = ()=>{
        const l = new ur(new Kr(1, 1, 32, 1), $r);
        return mo = ()=>l, l;
    };
    const ia = {
        type: "syncstart"
    }, aa = {
        type: "synccomplete"
    }, yo = [
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
    ], sa = yo.concat("material", "color", "depthOffset", "clipRect", "curveRadius", "orientation", "glyphGeometryDetail");
    let bo = class extends ur {
        constructor(){
            const r = new qi;
            super(r, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = .1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = Vn, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = Ir, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
        }
        sync(r) {
            this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(r) : (this._isSyncing = !0, this.dispatchEvent(ia), uo({
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
            }, (f)=>{
                this._isSyncing = !1, this._textRenderInfo = f, this.geometry.updateGlyphs(f.glyphBounds, f.glyphAtlasIndices, f.blockBounds, f.chunkedBounds, f.glyphColors);
                const c = this._queuedSyncs;
                c && (this._queuedSyncs = null, this._needsSync = !0, this.sync(()=>{
                    c.forEach((t)=>t && t());
                })), this.dispatchEvent(aa), r && r();
            })));
        }
        onBeforeRender(r, f, c, t, e, n) {
            this.sync(), e.isTroikaTextMaterial && this._prepareForRender(e);
        }
        dispose() {
            this.geometry.dispose();
        }
        get textRenderInfo() {
            return this._textRenderInfo || null;
        }
        createDerivedMaterial(r) {
            return na(r);
        }
        get material() {
            let r = this._derivedMaterial;
            const f = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = $r.clone());
            if ((!r || !r.isDerivedFrom(f)) && (r = this._derivedMaterial = this.createDerivedMaterial(f), f.addEventListener("dispose", function c() {
                f.removeEventListener("dispose", c), r.dispose();
            })), this.hasOutline()) {
                let c = r._outlineMtl;
                return c || (c = r._outlineMtl = Object.create(r, {
                    id: {
                        value: r.id + .1
                    }
                }), c.isTextOutlineMaterial = !0, c.depthWrite = !1, c.map = null, r.addEventListener("dispose", function t() {
                    r.removeEventListener("dispose", t), c.dispose();
                })), [
                    c,
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
            return Xn(this.material).getDepthMaterial();
        }
        set customDepthMaterial(r) {}
        get customDistanceMaterial() {
            return Xn(this.material).getDistanceMaterial();
        }
        set customDistanceMaterial(r) {}
        _prepareForRender(r) {
            const f = r.isTextOutlineMaterial, c = r.uniforms, t = this.textRenderInfo;
            if (t) {
                const { sdfTexture: i, blockBounds: o } = t;
                c.uTroikaSDFTexture.value = i, c.uTroikaSDFTextureSize.value.set(i.image.width, i.image.height), c.uTroikaSDFGlyphSize.value = t.sdfGlyphSize, c.uTroikaSDFExponent.value = t.sdfExponent, c.uTroikaTotalBounds.value.fromArray(o), c.uTroikaUseGlyphColors.value = !f && !!t.glyphColors;
                let a = 0, s = 0, u = 0, d, h, p, v = 0, g = 0;
                if (f) {
                    let { outlineWidth: E, outlineOffsetX: b, outlineOffsetY: y, outlineBlur: x, outlineOpacity: _ } = this;
                    a = this._parsePercent(E) || 0, s = Math.max(0, this._parsePercent(x) || 0), d = _, v = this._parsePercent(b) || 0, g = this._parsePercent(y) || 0;
                } else u = Math.max(0, this._parsePercent(this.strokeWidth) || 0), u && (p = this.strokeColor, c.uTroikaStrokeColor.value.set(p ?? Vn), h = this.strokeOpacity, h == null && (h = 1)), d = this.fillOpacity;
                c.uTroikaEdgeOffset.value = a, c.uTroikaPositionOffset.value.set(v, g), c.uTroikaBlurRadius.value = s, c.uTroikaStrokeWidth.value = u, c.uTroikaStrokeOpacity.value = h, c.uTroikaFillOpacity.value = d ?? 1, c.uTroikaCurveRadius.value = this.curveRadius || 0;
                let F = this.clipRect;
                if (F && Array.isArray(F) && F.length === 4) c.uTroikaClipRect.value.fromArray(F);
                else {
                    const E = (this.fontSize || .1) * 100;
                    c.uTroikaClipRect.value.set(o[0] - E, o[1] - E, o[2] + E, o[3] + E);
                }
                this.geometry.applyClipRect(c.uTroikaClipRect.value);
            }
            c.uTroikaSDFDebug.value = !!this.debugSDF, r.polygonOffset = !!this.depthOffset, r.polygonOffsetFactor = r.polygonOffsetUnits = this.depthOffset || 0;
            const e = f ? this.outlineColor || 0 : this.color;
            if (e == null) delete r.color;
            else {
                const i = r.hasOwnProperty("color") ? r.color : r.color = new vt;
                (e !== i._input || typeof e == "object") && i.set(i._input = e);
            }
            let n = this.orientation || Ir;
            if (n !== r._orientation) {
                let i = c.uTroikaOrient.value;
                n = n.replace(/[^-+xyz]/g, "");
                let o = n !== Ir && n.match(/^([-+])([xyz])([-+])([xyz])$/);
                if (o) {
                    let [, a, s, u, d] = o;
                    ir.set(0, 0, 0)[s] = a === "-" ? 1 : -1, Gr.set(0, 0, 0)[d] = u === "-" ? -1 : 1, Hn.lookAt(oa, ir.cross(Gr), Gr), i.setFromMatrix4(Hn);
                } else i.identity();
                r._orientation = n;
            }
        }
        _parsePercent(r) {
            if (typeof r == "string") {
                let f = r.match(/^(-?[\d.]+)%$/), c = f ? parseFloat(f[1]) : NaN;
                r = (isNaN(c) ? 0 : c / 100) * this.fontSize;
            }
            return r;
        }
        localPositionToTextCoords(r, f = new pt) {
            f.copy(r);
            const c = this.curveRadius;
            return c && (f.x = Math.atan2(r.x, Math.abs(c) - Math.abs(r.z)) * Math.abs(c)), f;
        }
        worldPositionToTextCoords(r, f = new pt) {
            return ir.copy(r), this.localPositionToTextCoords(this.worldToLocal(ir), f);
        }
        raycast(r, f) {
            const { textRenderInfo: c, curveRadius: t } = this;
            if (c) {
                const e = c.blockBounds, n = t ? mo() : go(), i = n.geometry, { position: o, uv: a } = i.attributes;
                for(let s = 0; s < a.count; s++){
                    let u = e[0] + a.getX(s) * (e[2] - e[0]);
                    const d = e[1] + a.getY(s) * (e[3] - e[1]);
                    let h = 0;
                    t && (h = t - Math.cos(u / t) * t, u = Math.sin(u / t) * t), o.setXYZ(s, u, d, h);
                }
                i.boundingSphere = this.geometry.boundingSphere, i.boundingBox = this.geometry.boundingBox, n.matrixWorld = this.matrixWorld, n.material.side = this.material.side, Pt.length = 0, n.raycast(r, Pt);
                for(let s = 0; s < Pt.length; s++)Pt[s].object = this, f.push(Pt[s]);
            }
        }
        copy(r) {
            const f = this.geometry;
            return super.copy(r), this.geometry = f, sa.forEach((c)=>{
                this[c] = r[c];
            }), this;
        }
        clone() {
            return new this.constructor().copy(this);
        }
    };
    yo.forEach((l)=>{
        const r = "_private_" + l;
        Object.defineProperty(bo.prototype, l, {
            get () {
                return this[r];
            },
            set (f) {
                f !== this[r] && (this[r] = f, this._needsSync = !0);
            }
        });
    });
    new It;
    new vt;
    const Yr = H.forwardRef(({ sdfGlyphSize: l = 64, anchorX: r = "center", anchorY: f = "middle", font: c, fontSize: t = 1, children: e, characters: n, onSync: i, ...o }, a)=>{
        const s = at(({ invalidate: p })=>p), [u] = H.useState(()=>new bo), [d, h] = H.useMemo(()=>{
            const p = [];
            let v = "";
            return H.Children.forEach(e, (g)=>{
                typeof g == "string" || typeof g == "number" ? v += g : p.push(g);
            }), [
                p,
                v
            ];
        }, [
            e
        ]);
        return ei(()=>new Promise((p)=>Hi({
                    font: c,
                    characters: n
                }, p)), [
            "troika-text",
            c,
            n
        ]), H.useLayoutEffect(()=>void u.sync(()=>{
                s(), i && i(u);
            })), H.useEffect(()=>()=>u.dispose(), [
            u
        ]), H.createElement("primitive", st({
            object: u,
            ref: a,
            font: c,
            text: h,
            anchorX: r,
            anchorY: f,
            fontSize: t,
            sdfGlyphSize: l
        }, o), d);
    });
    function la(l, r, f, c) {
        var t;
        return t = class extends $n {
            constructor(e){
                super({
                    vertexShader: r,
                    fragmentShader: f,
                    ...e
                });
                for(const n in l)this.uniforms[n] = new No(l[n]), Object.defineProperty(this, n, {
                    get () {
                        return this.uniforms[n].value;
                    },
                    set (i) {
                        this.uniforms[n].value = i;
                    }
                });
                this.uniforms = cr.clone(this.uniforms);
            }
        }, t.key = to.generateUUID(), t;
    }
    const ca = ()=>parseInt(Zn.replace(/\D+/g, "")), fa = ca();
    function ua(l, r, f) {
        const c = at((h)=>h.size), t = at((h)=>h.viewport), e = typeof l == "number" ? l : c.width * t.dpr, n = c.height * t.dpr, i = (typeof l == "number" ? f : l) || {}, { samples: o = 0, depth: a, ...s } = i, u = a ?? i.depthBuffer, d = H.useMemo(()=>{
            const h = new zo(e, n, {
                minFilter: fr,
                magFilter: fr,
                type: jo,
                ...s
            });
            return u && (h.depthTexture = new Wo(e, n, Vo)), h.samples = o, h;
        }, []);
        return H.useLayoutEffect(()=>{
            d.setSize(e, n), o && (d.samples = o);
        }, [
            o,
            d,
            e,
            n
        ]), H.useEffect(()=>()=>d.dispose(), []), d;
    }
    const da = (l)=>typeof l == "function", ha = H.forwardRef(({ envMap: l, resolution: r = 256, frames: f = 1 / 0, makeDefault: c, children: t, ...e }, n)=>{
        const i = at(({ set: g })=>g), o = at(({ camera: g })=>g), a = at(({ size: g })=>g), s = H.useRef(null);
        H.useImperativeHandle(n, ()=>s.current, []);
        const u = H.useRef(null), d = ua(r);
        H.useLayoutEffect(()=>{
            e.manual || (s.current.aspect = a.width / a.height);
        }, [
            a,
            e
        ]), H.useLayoutEffect(()=>{
            s.current.updateProjectionMatrix();
        });
        let h = 0, p = null;
        const v = da(t);
        return Gt((g)=>{
            v && (f === 1 / 0 || h < f) && (u.current.visible = !1, g.gl.setRenderTarget(d), p = g.scene.background, l && (g.scene.background = l), g.gl.render(g.scene, s.current), g.scene.background = p, g.gl.setRenderTarget(null), u.current.visible = !0, h++);
        }), H.useLayoutEffect(()=>{
            if (c) {
                const g = o;
                return i(()=>({
                        camera: s.current
                    })), ()=>i(()=>({
                            camera: g
                        }));
            }
        }, [
            s,
            c,
            i
        ]), H.createElement(H.Fragment, null, H.createElement("perspectiveCamera", st({
            ref: s
        }, e), !v && t), H.createElement("group", {
            ref: u
        }, v && t(d.texture)));
    }), pa = la({
        cellSize: .5,
        sectionSize: 1,
        fadeDistance: 100,
        fadeStrength: 1,
        fadeFrom: 1,
        cellThickness: .5,
        sectionThickness: 1,
        cellColor: new vt,
        sectionColor: new vt,
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
  `), va = H.forwardRef(({ args: l, cellColor: r = "#000000", sectionColor: f = "#2080ff", cellSize: c = .5, sectionSize: t = 1, followCamera: e = !1, infiniteGrid: n = !1, fadeDistance: i = 100, fadeStrength: o = 1, fadeFrom: a = 1, cellThickness: s = .5, sectionThickness: u = 1, side: d = Xo, ...h }, p)=>{
        Ho({
            GridMaterial: pa
        });
        const v = H.useRef(null);
        H.useImperativeHandle(p, ()=>v.current, []);
        const g = new Yo, F = new Ee(0, 1, 0), E = new Ee(0, 0, 0);
        Gt((x)=>{
            g.setFromNormalAndCoplanarPoint(F, E).applyMatrix4(v.current.matrixWorld);
            const _ = v.current.material, T = _.uniforms.worldCamProjPosition, w = _.uniforms.worldPlanePosition;
            g.projectPoint(x.camera.position, T.value), w.value.set(0, 0, 0).applyMatrix4(v.current.matrixWorld);
        });
        const b = {
            cellSize: c,
            sectionSize: t,
            cellColor: r,
            sectionColor: f,
            cellThickness: s,
            sectionThickness: u
        }, y = {
            fadeDistance: i,
            fadeStrength: o,
            fadeFrom: a,
            infiniteGrid: n,
            followCamera: e
        };
        return H.createElement("mesh", st({
            ref: v,
            frustumCulled: !1
        }, h), H.createElement("gridMaterial", st({
            transparent: !0,
            "extensions-derivatives": !0,
            side: d
        }, b, y)), H.createElement("planeGeometry", {
            args: l
        }));
    });
    function ga(l, r) {
        const f = l + "Geometry";
        return H.forwardRef(({ args: c, children: t, ...e }, n)=>{
            const i = H.useRef(null);
            return H.useImperativeHandle(n, ()=>i.current), H.useLayoutEffect(()=>void r?.(i.current)), H.createElement("mesh", st({
                ref: i
            }, e), H.createElement(f, {
                attach: "geometry",
                args: c
            }), t);
        });
    }
    const ar = ga("circle"), Yn = {
        showLabels: !0,
        showNodeDetails: !0,
        nodeScale: 1,
        edgeWidth: 2,
        linkDistance: 250,
        chargeStrength: -2e3,
        gravity: .01,
        friction: .6,
        maxFPS: 60,
        lodEnabled: !0,
        highContrast: !1,
        reducedMotion: !1
    }, hr = Jo((l)=>({
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
            settings: Yn,
            toggleSidebar: ()=>l((r)=>({
                        sidebarOpen: !r.sidebarOpen
                    })),
            setSidebarTab: (r)=>l({
                    sidebarTab: r
                }),
            setMenuOpen: (r)=>l({
                    menuOpen: r
                }),
            setLoadingProgress: (r, f)=>l({
                    loadingProgress: r,
                    loadingMessage: f || ""
                }),
            addNotification: (r)=>l((f)=>{
                    const c = `notification-${Date.now()}-${Math.random()}`, t = {
                        ...r,
                        id: c
                    };
                    return r.duration !== 0 && setTimeout(()=>{
                        l((e)=>({
                                notifications: e.notifications.filter((n)=>n.id !== c)
                            }));
                    }, r.duration || 5e3), {
                        notifications: [
                            ...f.notifications,
                            t
                        ]
                    };
                }),
            removeNotification: (r)=>l((f)=>({
                        notifications: f.notifications.filter((c)=>c.id !== r)
                    })),
            setZoom: (r)=>l((f)=>({
                        viewport: {
                            ...f.viewport,
                            zoom: r
                        }
                    })),
            setRotation: (r)=>l((f)=>({
                        viewport: {
                            ...f.viewport,
                            rotation: r
                        }
                    })),
            setTarget: (r)=>l((f)=>({
                        viewport: {
                            ...f.viewport,
                            target: r
                        }
                    })),
            toggleViewMode: ()=>l((r)=>({
                        viewport: {
                            ...r.viewport,
                            mode: r.viewport.mode === "2d" ? "3d" : "2d"
                        }
                    })),
            updateSettings: (r)=>l((f)=>({
                        settings: {
                            ...f.settings,
                            ...r
                        }
                    })),
            resetSettings: ()=>l({
                    settings: Yn
                })
        })), Nr = {
        logForces: !1,
        logPositions: !1,
        logVelocities: !1,
        logAlpha: !1,
        logRepulsion: !1,
        logAttraction: !1,
        logCentering: !1,
        logBarnesHut: !1,
        logFPS: !1,
        logIterations: !1,
        logNodeCount: !1,
        showQuadtree: !1,
        showForceVectors: !1,
        showVelocityVectors: !1,
        highlightClusters: !1,
        logInterval: 10,
        trackNodes: [],
        logPositionHistory: !1,
        positionHistorySize: 100
    };
    class ma {
        config;
        iteration = 0;
        positionHistory = new Map;
        constructor(){
            const r = localStorage.getItem("wasmvowl-debug-config");
            this.config = r ? {
                ...Nr,
                ...JSON.parse(r)
            } : {
                ...Nr
            }, new URLSearchParams(window.location.search).get("debug") === "true" && this.enableAllLogging();
        }
        get() {
            return this.config;
        }
        set(r) {
            this.config = {
                ...this.config,
                ...r
            }, localStorage.setItem("wasmvowl-debug-config", JSON.stringify(this.config));
        }
        enableAllLogging() {
            this.set({
                logForces: !0,
                logPositions: !0,
                logVelocities: !0,
                logAlpha: !0,
                logRepulsion: !0,
                logAttraction: !0,
                logCentering: !0,
                logBarnesHut: !0,
                logFPS: !0,
                logIterations: !0,
                logNodeCount: !0
            });
        }
        disableAllLogging() {
            this.set({
                ...Nr
            });
        }
        shouldLog() {
            return this.iteration % this.config.logInterval === 0;
        }
        incrementIteration() {
            this.iteration++;
        }
        resetIteration() {
            this.iteration = 0;
        }
        trackPosition(r, f, c) {
            if (!this.config.logPositionHistory) return;
            this.positionHistory.has(r) || this.positionHistory.set(r, []);
            const t = this.positionHistory.get(r);
            t.push({
                x: f,
                y: c,
                iteration: this.iteration
            }), t.length > this.config.positionHistorySize && t.shift();
        }
        getPositionHistory(r) {
            return this.positionHistory.get(r) || [];
        }
        calculateNodeDistribution(r) {
            if (r.length === 0) return null;
            const f = {
                x: r.reduce((s, u)=>s + u.x, 0) / r.length,
                y: r.reduce((s, u)=>s + u.y, 0) / r.length
            }, c = r.map((s)=>Math.sqrt(Math.pow(s.x - f.x, 2) + Math.pow(s.y - f.y, 2))), t = Math.min(...c), e = Math.max(...c), n = c.reduce((s, u)=>s + u, 0) / c.length, i = Math.sqrt(c.reduce((s, u)=>s + Math.pow(u - n, 2), 0) / c.length), o = c.filter((s)=>s < 100).length, a = c.filter((s)=>s > 500).length;
            return {
                centroid: f,
                minDist: t,
                maxDist: e,
                avgDist: n,
                stdDev: i,
                clusteredCount: o,
                spreadCount: a,
                clusteringPercentage: o / r.length * 100,
                spreadPercentage: a / r.length * 100
            };
        }
        logDistribution(r, f) {
            const c = this.calculateNodeDistribution(f);
            c && (console.group(`📊 ${r} - Node Distribution (n=${f.length})`), console.log(`Centroid: (${c.centroid.x.toFixed(1)}, ${c.centroid.y.toFixed(1)})`), console.log(`Distance from center: min=${c.minDist.toFixed(1)}, max=${c.maxDist.toFixed(1)}, avg=${c.avgDist.toFixed(1)}, σ=${c.stdDev.toFixed(1)}`), console.log(`Clustering: ${c.clusteredCount} nodes within 100 units (${c.clusteringPercentage.toFixed(1)}%)`), console.log(`Spread: ${c.spreadCount} nodes beyond 500 units (${c.spreadPercentage.toFixed(1)}%)`), c.clusteringPercentage > 50 && console.warn(`⚠️ CLUSTERING DETECTED: ${c.clusteringPercentage.toFixed(1)}% of nodes within 100 units of center!`), console.groupEnd());
        }
    }
    const ya = new ma;
    typeof window < "u" && (window.wasmvowlDebug = ya);
    function ba(l = {}) {
        const { autoStart: r = !0, iterations: f } = l, c = H.useRef(null), [t, e] = H.useState(!1), [n, i] = H.useState(!1), [o, a] = H.useState(1), { nodes: s, edges: u, updateNodePosition: d } = it(), { settings: h } = hr();
        return H.useEffect(()=>{
            let b = !0;
            async function y() {
                try {
                    const x = await Co(()=>import("./webvowl_wasm-D7gpqwfz.js"), []);
                    if (await x.default(), !b) return;
                    c.current = new x.WebVowl, e(!0), console.log("✅ WASM module initialized"), c.current.setCenter(0, 0), c.current.setLinkDistance(h.linkDistance), c.current.setChargeStrength(h.chargeStrength), console.log("⚙️ Initial simulation parameters:", {
                        linkDistance: h.linkDistance,
                        chargeStrength: h.chargeStrength,
                        gravity: h.gravity,
                        friction: h.friction
                    });
                } catch (x) {
                    console.error("Failed to initialize WASM:", x);
                }
            }
            return y(), ()=>{
                b = !1, c.current && (c.current = null);
            };
        }, []), H.useRef(0), H.useEffect(()=>{
            if (!c.current || !t || s.size === 0) return;
            const b = new Set(Array.from(s.values()).map((_)=>_.id)), y = Array.from(u.values()).filter((_)=>{
                const T = _.source && b.has(_.source), w = _.target && b.has(_.target);
                return (!T || !w) && console.warn(`[useWasmSimulation] Skipping edge ${_.id}: source=${_.source} (exists: ${T}), target=${_.target} (exists: ${w})`), T && w;
            });
            console.log(`[useWasmSimulation] Filtered edges: ${y.length} valid out of ${u.size} total`);
            const x = {
                header: {
                    title: {
                        en: "Ontology Graph"
                    }
                },
                namespace: [],
                class: Array.from(s.values()).map((_)=>({
                        id: _.id,
                        type: _.type
                    })),
                classAttribute: Array.from(s.values()).map((_)=>({
                        id: _.id,
                        label: {
                            en: _.label
                        },
                        iri: _.iri
                    })),
                property: y.map((_)=>({
                        id: _.id,
                        type: _.type === "objectProperty" ? "owl:ObjectProperty" : "owl:DatatypeProperty",
                        domain: _.source,
                        range: _.target,
                        label: _.label || _.id,
                        iri: _.iri || `http://example.org/${_.id}`
                    }))
            };
            try {
                console.log(`[useWasmSimulation] Loading ${x.class.length} nodes, ${x.property.length} edges into WASM`), console.log("[useWasmSimulation] Total nodes in class array:", x.class.length), console.log("[useWasmSimulation] Sample node IDs:", x.class.slice(0, 10).map((w)=>w.id)), console.log("[useWasmSimulation] Node 1157 exists in class array?", x.class.some((w)=>w.id === "1157")), console.log("[useWasmSimulation] Node 1 exists in class array?", x.class.some((w)=>w.id === "1"));
                const _ = x.property.filter((w)=>!w.domain || !w.range);
                if (_.length > 0) throw console.error("[useWasmSimulation] Found properties with missing domain/range:", _), new Error(`Invalid properties: ${_.map((w)=>w.id).join(", ")}`);
                if (x.property.length > 0) {
                    const w = x.property[0];
                    console.log("[useWasmSimulation] Sample property:", {
                        id: w.id,
                        domain: w.domain,
                        range: w.range,
                        domainType: typeof w.domain,
                        rangeType: typeof w.range
                    });
                }
                const T = x.property.find((w)=>w.id === "1244");
                T && (console.log("[useWasmSimulation] Property 1244 full data:", JSON.stringify(T, null, 2)), console.log("[useWasmSimulation] Checking domain node:", {
                    domainId: T.domain,
                    domainExists: x.class.some((w)=>w.id === T.domain),
                    domainType: typeof T.domain
                }), console.log("[useWasmSimulation] Checking range node:", {
                    rangeId: T.range,
                    rangeExists: x.class.some((w)=>w.id === T.range),
                    rangeType: typeof T.range
                })), c.current.loadOntology(JSON.stringify(x)), c.current.initSimulation(), r && (f ? (c.current.runSimulation(f), i(!1)) : (i(!0), console.log("[useWasmSimulation] Simulation started")));
            } catch (_) {
                console.error("Failed to load ontology into WASM:", _);
            }
        }, [
            s,
            u,
            t,
            r,
            f
        ]), H.useEffect(()=>{
            c.current && (c.current.setLinkDistance(h.linkDistance), c.current.setChargeStrength(h.chargeStrength));
        }, [
            h.linkDistance,
            h.chargeStrength
        ]), Gt(()=>{
            const b = c.current;
            if (!(!b || !n)) try {
                if (b.isFinished()) {
                    i(!1), a(0);
                    return;
                }
                b.tick();
                const y = b.getAlpha();
                a(y);
                const x = b.getGraphData();
                x && x.nodes && x.nodes.forEach((_)=>{
                    d(_.id, [
                        _.x,
                        _.y,
                        0
                    ]);
                });
            } catch (y) {
                console.error("Simulation tick error:", y), i(!1);
            }
        }), {
            isInitialized: t,
            isRunning: n,
            alpha: o,
            start: ()=>{
                c.current && !n && i(!0);
            },
            stop: ()=>{
                i(!1);
            },
            reset: ()=>{
                c.current && (c.current.initSimulation(), a(1), r && i(!0));
            },
            step: ()=>{
                if (c.current && !n) {
                    c.current.tick();
                    const b = c.current.getGraphData();
                    b && b.nodes && b.nodes.forEach((y)=>{
                        d(y.id, [
                            y.x,
                            y.y,
                            0
                        ]);
                    }), a(c.current.getAlpha());
                }
            },
            checkNodeClick: (b, y)=>null
        };
    }
    function xa({ node: l }) {
        const r = H.useRef(null), [f, c] = H.useState(!1), [t, e] = H.useState(null), n = Jn(), { selectNode: i, hoverNode: o, selectedNode: a } = it(), { settings: s } = hr(), u = a === l.id, d = l.properties?.instances || 0, h = 1.6, v = (d > 0 ? Math.sqrt(d) * .1 + h : h) * s.nodeScale, g = ()=>u ? "#67bc0f" : f ? "#8cd0f0" : "#aaccee", F = (x)=>{
            e({
                x: x.clientX,
                y: x.clientY
            });
        }, E = (x)=>{
            if (x.stopPropagation(), t && Math.sqrt(Math.pow(x.clientX - t.x, 2) + Math.pow(x.clientY - t.y, 2)) > 5) {
                e(null);
                return;
            }
            e(null), x.detail === 2 || x.metaKey || x.ctrlKey ? n(`/page/${encodeURIComponent(l.label)}`) : i(u ? null : l.id);
        }, b = (x)=>{
            x.stopPropagation(), c(!0), o(l.id), document.body.style.cursor = "pointer", x.object && x.object.el && (x.object.el.title = `${l.label}

Double-click or Ctrl+Click to open page`);
        }, y = ()=>{
            c(!1), o(null), document.body.style.cursor = "auto";
        };
        return Gt(()=>{
            if (r.current && !l.pinned) {
                const x = new Ee(l.position.x, l.position.y, l.position.z);
                r.current.position.lerp(x, .1);
            }
        }), he.jsxs("group", {
            children: [
                he.jsx(ar, {
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
                    onPointerDown: F,
                    onClick: E,
                    onPointerOver: b,
                    onPointerOut: y,
                    children: he.jsx("meshBasicMaterial", {
                        color: g(),
                        transparent: !0,
                        opacity: l.opacity || 1
                    })
                }),
                he.jsx(ar, {
                    args: [
                        v + 2,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .1
                    ],
                    children: he.jsx("meshBasicMaterial", {
                        color: u ? "#67bc0f" : "#333",
                        transparent: !0,
                        opacity: u ? .5 : .2,
                        side: Ot
                    })
                }),
                s.showLabels && he.jsx(Yr, {
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
                s.showNodeDetails && d > 0 && he.jsx(Yr, {
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z + 2
                    ],
                    fontSize: 1,
                    color: "#666",
                    anchorX: "center",
                    anchorY: "middle",
                    children: d
                }),
                u && he.jsx(ar, {
                    args: [
                        v + 8,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .2
                    ],
                    children: he.jsx("meshBasicMaterial", {
                        color: "#67bc0f",
                        transparent: !0,
                        opacity: .3,
                        side: Ot
                    })
                }),
                f && !u && he.jsx(ar, {
                    args: [
                        v + 5,
                        32
                    ],
                    position: [
                        l.position.x,
                        l.position.y,
                        l.position.z - .15
                    ],
                    children: he.jsx("meshBasicMaterial", {
                        color: "#8cd0f0",
                        transparent: !0,
                        opacity: .2,
                        side: Ot
                    })
                })
            ]
        });
    }
    function Sa({ edge: l }) {
        const { nodes: r, selectedEdge: f } = it(), { settings: c } = hr(), t = f === l.id, e = r.get(l.source), n = r.get(l.target), i = H.useMemo(()=>{
            if (!e || !n || !e.position || !n.position) return null;
            const h = e.position.x, p = e.position.y, v = e.position.z, g = n.position.x, F = n.position.y, E = n.position.z;
            return typeof h != "number" || typeof p != "number" || typeof v != "number" || typeof g != "number" || typeof F != "number" || typeof E != "number" || isNaN(h) || isNaN(p) || isNaN(v) || isNaN(g) || isNaN(F) || isNaN(E) ? null : [
                new Ee(h, p, v),
                new Ee(g, F, E)
            ];
        }, [
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
        }, a = ()=>(l.type === "subclass" ? 3 : 2) * c.edgeWidth, s = ()=>{
            switch(l.type){
                case "disjoint":
                    return [
                        5,
                        5
                    ];
                default:
                    return;
            }
        }, u = H.useMemo(()=>new Ee((i[0].x + i[1].x) / 2, (i[0].y + i[1].y) / 2, (i[0].z + i[1].z) / 2 + 1), [
            i
        ]), d = H.useMemo(()=>new Ee().subVectors(i[1], i[0]).normalize(), [
            i
        ]);
        return he.jsxs("group", {
            children: [
                he.jsx(Mn, {
                    points: i,
                    color: o(),
                    lineWidth: a(),
                    transparent: !0,
                    opacity: l.opacity || .6,
                    dashed: !!s(),
                    dashSize: s()?.[0],
                    gapSize: s()?.[1]
                }),
                c.showLabels && l.label && he.jsx(Yr, {
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
                l.type !== "disjoint" && he.jsxs("mesh", {
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
                        he.jsx("coneGeometry", {
                            args: [
                                5,
                                10,
                                8
                            ]
                        }),
                        he.jsx("meshBasicMaterial", {
                            color: o(),
                            transparent: !0,
                            opacity: l.opacity || .6
                        })
                    ]
                }),
                t && he.jsx(Mn, {
                    points: i,
                    color: "#67bc0f",
                    lineWidth: a() + 4,
                    transparent: !0,
                    opacity: .3
                })
            ]
        });
    }
    function wa() {
        const { nodes: l, edges: r, filteredNodes: f, filteredEdges: c } = it(), { isRunning: t, alpha: e } = ba({
            autoStart: !0
        }), n = Array.from(l.values()).filter((o)=>f.has(o.id)), i = Array.from(r.values()).filter((o)=>c.has(o.id));
        return he.jsxs("group", {
            children: [
                i.map((o)=>he.jsx(Sa, {
                        edge: o
                    }, o.id)),
                n.map((o)=>he.jsx(xa, {
                        node: o
                    }, o.id)),
                t && he.jsx(En, {
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
                    children: he.jsxs("div", {
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
                l.size === 0 && he.jsx(En, {
                    center: !0,
                    children: he.jsxs("div", {
                        style: {
                            textAlign: "center",
                            color: "#999",
                            fontSize: "18px",
                            fontFamily: "system-ui, sans-serif"
                        },
                        children: [
                            he.jsx("h2", {
                                children: "No ontology loaded"
                            }),
                            he.jsx("p", {
                                children: "Drop a JSON file or select from the menu"
                            })
                        ]
                    })
                })
            ]
        });
    }
    function _a() {
        const { viewport: l } = hr(), r = l.mode === "3d";
        return he.jsx("div", {
            style: {
                width: "100%",
                height: "100vh",
                background: "#f5f5f5"
            },
            children: he.jsxs(Ko, {
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
                    he.jsx(ha, {
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
                    he.jsx(Qo, {
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
                    he.jsx("ambientLight", {
                        intensity: .6
                    }),
                    he.jsx("directionalLight", {
                        position: [
                            10,
                            10,
                            5
                        ],
                        intensity: .5
                    }),
                    he.jsx("pointLight", {
                        position: [
                            -10,
                            -10,
                            -5
                        ],
                        intensity: .3
                    }),
                    r && he.jsx(va, {
                        args: [
                            1e3,
                            1e3
                        ],
                        cellColor: "#cccccc",
                        sectionColor: "#aaaaaa",
                        fadeDistance: 800,
                        fadeStrength: 1
                    }),
                    he.jsx(wa, {})
                ]
            })
        });
    }
    function Ua() {
        const [l, r] = ko(), f = {
            zoom: parseFloat(l.get("zoom") || "1"),
            rotation: l.get("rotation")?.split(",").map(Number) || [
                0,
                0,
                0
            ],
            selectedNode: l.get("selected") || null
        }, c = H.useCallback((t)=>{
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
            f,
            c
        ];
    }
    ka = function() {
        const { nodeId: l } = Ao(), r = Jn(), [f, c] = H.useState(!0), [t, e] = H.useState(null), n = it((d)=>d.setSelectedNode), i = it((d)=>d.loadOntology), o = it((d)=>d.nodes.size), [a, s] = Ua();
        H.useEffect(()=>{
            (async ()=>{
                if (o > 0) {
                    c(!1);
                    return;
                }
                try {
                    console.log("Loading ontology from /data/ontology.json...");
                    const h = await fetch("/data/ontology.json");
                    if (!h.ok) throw new Error(`Failed to fetch ontology: ${h.status} ${h.statusText}`);
                    const p = await h.json();
                    if (console.log("Ontology data loaded:", {
                        classes: p.class?.length,
                        properties: p.property?.length
                    }), !p.class || !Array.isArray(p.class)) throw new Error("Invalid ontology format: missing class array");
                    const v = {
                        header: p.header,
                        namespace: p.namespace,
                        class: p.class,
                        property: p.property || [],
                        datatype: p.datatype,
                        classAttribute: p.classAttribute,
                        propertyAttribute: p.propertyAttribute
                    };
                    i(v), console.log(`Loaded ${v.class.length} classes and ${v.property?.length || 0} properties`), c(!1);
                } catch (h) {
                    console.error("Failed to auto-load ontology:", h), e(h instanceof Error ? h.message : "Unknown error"), c(!1);
                }
            })();
        }, [
            i,
            o
        ]), H.useEffect(()=>{
            l && n(l);
        }, [
            l,
            n
        ]);
        const u = (d)=>{
            const p = it.getState().nodes.get(d);
            p?.label && (s({
                selectedNode: d
            }), r(`/page/${encodeURIComponent(p.label)}`));
        };
        return f ? he.jsx("div", {
            className: "ontology-view loading",
            children: he.jsxs("div", {
                className: "loading-container",
                children: [
                    he.jsx("div", {
                        className: "spinner"
                    }),
                    he.jsx("p", {
                        children: "Loading ontology visualization..."
                    })
                ]
            })
        }) : t ? he.jsx("div", {
            className: "ontology-view error",
            children: he.jsxs("div", {
                className: "error-container",
                children: [
                    he.jsx("h2", {
                        children: "Failed to Load Ontology"
                    }),
                    he.jsx("p", {
                        children: t
                    }),
                    he.jsx("button", {
                        onClick: ()=>window.location.reload(),
                        children: "Retry"
                    })
                ]
            })
        }) : he.jsx("div", {
            className: "ontology-view",
            children: he.jsx(_a, {
                onNodeClick: u
            })
        });
    };
});
export { ka as default, __tla };
