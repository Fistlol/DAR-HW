import React,{SetStateAction, Dispatch} from 'react'
import styles from './Modal.module.scss'

interface Props {
  active: boolean,
  children: React.ReactNode
  closeEvent: Dispatch<SetStateAction<boolean>>
}

export const Modal:React.FunctionComponent<Props> = (props: Props) => {
  const {active, closeEvent} = props;

  const closeClick = () =>{
    closeEvent(!active)
  }

  if (active) {
    return (
      <div className={styles.window} onClick={closeClick}>
        <div className={styles.container} onClick={e => {
          e.stopPropagation();
        }}>
          {props.children}
          <button onClick={closeClick}>Close</button>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal