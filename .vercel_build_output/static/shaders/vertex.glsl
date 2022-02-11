#define PI 3.14159265358979323846

uniform float u_time;
uniform float mouseClickX;
uniform float mouseClickY;
uniform float progress;
uniform vec2 resolution;
uniform float rippleInflunce;
uniform float pointMultiplier;

varying vec3 v_position;
varying vec2 vUv;

vec3 Wave(float x, float z){
    vec3 pos = vec3(x, 0.0, z);
    pos.y = sin( PI * (pos.x  + pos.z ) * 0.005 + u_time ) * 100.0 ;
    return pos;
}

vec3 MultiWave(float x, float z){
    vec3 pos = vec3(x, 0.0, z);
    pos.y = sin( (pos.x  + pos.z )* 0.009 + u_time ) * 50.0;
    pos.y += sin(  pos.x * 0.05 + u_time * 3.) * 12.0;
    pos.y += sin(  pos.z * 0.09 + u_time * 4.) * 10.0;
    return pos;
}

vec3 Ripple(float x, float z){
    vec3 pos = vec3(x , 0.0, z );
    float d = distance(pos.xz, vec2(mouseClickX, mouseClickY));
    pos.y = sin( .1 * ( d - u_time  * 50.)) * 40.;
    pos.y /=  .75 + 5. * d * .009;
    return pos;
}

vec3 Sphere(float x, float z){
    
    float r  = 250. + 8. * sin(PI  * z * .1 - x * .15 + u_time * 5. ) ;
    //float r  = 256. + 16. * sin(PI  *( z * .05 * x * .05 + u_time * .01));
    float s = r  * cos(  PI * z / 256.);
    vec3 pos = vec3( s * sin( x * .0246), 0, s * cos(x * .0246));
    pos.y = r * sin( z * PI * .004) ;
    return pos;
}

vec3 Thorus(float x, float z){
    float r  = 128.;
    //float r  = 256. + 16. * sin(PI  *( z * .05 * x * .05 + u_time * .01));
    float s = 128. + r  * cos(  PI * z * .004);
    vec3 pos = vec3( s * sin( x * .0246), 0, s * cos(x * .0246));
    pos.y = r * sin( z * PI * .0078) ;
    return pos;
}
vec3 fromRippleToSphere(float x, float z){
    vec3 pos = mix( Ripple(x, z), Sphere(x, z), clamp(progress, 0., 1.));
    return pos;
}


void main(){
    vec3 pos = mix(position, fromRippleToSphere(position.x, position.z), rippleInflunce);;
    pos = mix(MultiWave(position.x, position.z), pos, .8);
    //vec3 pos = Sphere(position.x, position.z);
     
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = pointMultiplier * (1./ -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
    
    v_position = pos;
    vUv = uv;
}

