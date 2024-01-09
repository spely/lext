import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoxOpen = (props: SvgProps) => (
  <Svg
    width={props.size || 24}
    height={props.size || 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.color || `#FFFFFF`}
        d="M23.621 6.836 22.269 4.01a3.016 3.016 0 0 0-1.758-1.552L14.214.359a7.044 7.044 0 0 0-4.428 0L3.49 2.458a3.015 3.015 0 0 0-1.759 1.554L.445 6.719a3.01 3.01 0 0 0-.247 2.609c.309.84.964 1.49 1.802 1.796l-.005 6.314a4.993 4.993 0 0 0 3.418 4.748l4.365 1.455a7.01 7.01 0 0 0 2.214.357c.75 0 1.5-.119 2.214-.357l4.369-1.457a4.994 4.994 0 0 0 3.419-4.739l.005-6.32a2.98 2.98 0 0 0 1.819-1.79c.317-.858.229-1.799-.197-2.499M10.419 2.257a5.029 5.029 0 0 1 3.162 0l4.248 1.416-5.822 1.95-5.834-1.95zM2.204 7.666l1.327-2.782c.048.025 7.057 2.373 7.057 2.373l-1.621 3.258a1.006 1.006 0 0 1-1.173.434L2.713 9.256a1.025 1.025 0 0 1-.639-.619c-.109-.294-.078-.616.129-.97zm3.841 12.623a2.995 2.995 0 0 1-2.051-2.848l.005-5.648 3.162 1.054c1.344.448 2.792-.087 3.559-1.371l.278-.557-.005 10.981a4.827 4.827 0 0 1-.581-.155L6.046 20.29zm11.897-.001-4.37 1.457a5.02 5.02 0 0 1-.581.155l.005-10.995.319.64a2.978 2.978 0 0 0 3.521 1.302l3.161-1.053-.005 5.651a2.997 2.997 0 0 1-2.052 2.844zm4-11.644a.99.99 0 0 1-.619.6l-5.118 1.706c-.438.147-.934-.035-1.136-.365l-1.655-3.323s7.006-2.351 7.054-2.377l1.393 2.901a.993.993 0 0 1 .081.859z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color || `#FFFFFF`} d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgBoxOpen;
