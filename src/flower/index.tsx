import styles from "./index.module.scss"

function Flower() {
  return (
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
  )
}

export { Flower }
