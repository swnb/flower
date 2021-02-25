import { CSSProperties, useMemo } from "react"
import styles from "./index.module.scss"

interface IFlowerProps {
  scale?: number
  style?: CSSProperties
}

function Flower({ scale = 1, style }: IFlowerProps) {
  const containerStyle = useMemo(
    () => ({
      ...style,
      transform: `scale3d(${scale},${scale},${scale})`,
    }),
    [scale, style]
  )

  return (
    <div className={styles.container} style={containerStyle}>
      <div className={styles.box}>
        {Array(6)
          .fill(undefined)
          .map((_, index) => (
            <div key={index} id={`item${index}`}>
              <div>
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export { Flower }
