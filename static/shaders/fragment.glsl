#define PI 3.14159265359

uniform float u_time;
uniform sampler2D mask;
uniform sampler2D texture1;
uniform float texture_influence;
uniform vec2 resolution;
uniform float mouseClickX;
uniform float mouseClickY;

vec3 c1 = vec3(0.07843, 1.00000, 0.74902);


varying vec3 v_position;
varying vec2 vUv;

vec4 textureEffect(vec3 displacement){
    
    float theta = displacement.r * PI * 2.;
    vec2 dir = vec2(sin(theta), cos(theta));
    vec2 newUv = vUv + dir * .02 * displacement.r;
    return texture(texture1, newUv);
}

void main(){
    vec4 maskTexture = texture2D(mask, gl_PointCoord);
    
    vec3 displacement = clamp(vec3(v_position.y), .0, 1.) ;
    vec3 pct = vec3(vUv.x);
     pct.r = smoothstep(0.0,1.0, sin(vUv.x + u_time) * .5 + .5);
    // pct.g = sin(st.x*PI);
    // pct.b = pow(st.x,0.5);

 
    vec3 c2 = vec3(displacement) * c1;
    c1 = vec3(0.54118, 0.16863, 0.88627);
    vec3 c3 = vec3(vUv.x, vUv.y, .0) * .5 + .55;
    vec3 c4 = vec3(vUv.y, .75, vUv.x) * .2 + .5;

    vec3 cc = mix(c1, c3, pct.r);

    vec4 c = vec4(mix(c2, cc, .5), 1.);
    //vec4 c = vec4((c2 + cc), 1.);
    
    //vec4 c = vec4((c2 *  cc), 1.);
    vec4 texColor = textureEffect(displacement);
    vec4 color = mix(c, texColor, clamp(texture_influence, 0.0, 1.0));
    gl_FragColor = color;
    gl_FragColor.a *= maskTexture.a;

}