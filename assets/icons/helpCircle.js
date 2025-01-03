import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    className="ionicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <Path
      fill="none"
      stroke="black"
      strokeMiterlimit={10}
      strokeWidth={32}
      d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z"
    />
    <Path
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={28}
      d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296"
    />
    <Circle cx={250} cy={348} r={20} />
  </Svg>
)
export default SvgComponent
