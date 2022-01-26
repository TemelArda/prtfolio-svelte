uniform float u_time;
uniform sampler2D mask;
uniform sampler2D texture1;
uniform float texture_influence;
uniform vec2 resolution;
uniform float mouseClickX;
uniform float mouseClickY;


varying vec3 v_position;
varying vec2 vUv;
float Ripple(float x, float z){
    vec3 pos = vec3(x , 0.0, z );
    float d = distance(pos.xz, vec2(mouseClickX, mouseClickY));
    pos.y = sin(3.14 * ( .1 * d - u_time)) * 50.;
    pos.y /=  .1 + 5. * d  ;
    return pos.y;
}
void main(){
    vec4 maskTexture = texture2D(mask, gl_PointCoord);
    vec4 texColor = texture2D(texture1, vUv);
    vec4 c = vec4(.15 , vUv.y, vUv.x, 1.0) + .25 ;
    vec4 color = mix(c, texColor, clamp(texture_influence, 0.0, 1.0));
   // if(mouseClickX != .0)
        //color.x = Ripple(v_position.x, v_position.z);
    gl_FragColor = mix(color, texColor, clamp(texture_influence, 0.0, 1.0));
    gl_FragColor.a *= maskTexture.a;

}