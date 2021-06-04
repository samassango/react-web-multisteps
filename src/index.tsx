import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import styles from './styles.module.css'
interface IConfig {
  btnSubmitLabel: string,
  btnNextLabel: string,
  btnPreviousLabel: string,
}

interface Props {
  children: any,
  containerStyle?: any,
  buttonContainerStyle?: any,
  onNextMove: Function,
  onPreviousMove: Function,
  onSubmit?: Function
  config?: IConfig
}

export const ReactWebMultiSteps = ({ children, containerStyle, buttonContainerStyle, onNextMove, onPreviousMove, onSubmit, config }: Props) => {
  const [step, setStep] = useState(0);
  const [childElement, setChildElement] = useState(null);
  const [canMove, setCanMove] = useState({
    previous: false,
    next: false,
  });

  const len = children.length - 1;

  useEffect((): any => {
    if (step == 0) {
      setCanMove({ previous: false, next: len > 0 ? true : false });
    } else {
      setCanMove({ previous: true, next: len == step ? false : true });
    }
    setChildElement(children[step]);
  }, [step]);

  const onPreviousMoveEvent = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
    onPreviousMove();
  };

  const onNextMoveEvent = () => {
    const newStep = len > step ? step + 1 : step;
    if (newStep !== step) {
      setStep(newStep);
    }
    onNextMove();
  };

  return (<div className={containerStyle ? containerStyle : styles.cotainer}>
    {childElement !== null ?
      childElement :
      <div>
        Loading...
      </div>
    }
    <div className={buttonContainerStyle ? buttonContainerStyle : styles.childContainer}>
      {canMove.previous &&
        <button className={styles.button} onClick={onPreviousMoveEvent}>{config?.btnPreviousLabel ? config.btnPreviousLabel : 'Previous'}</button>
      }
      {canMove.next &&
        <button className={styles.button} onClick={onNextMoveEvent}>{config?.btnNextLabel ? config.btnNextLabel : 'Next'}</button>
      }
      {typeof onSubmit == 'function' &&
        <button className={styles.button} onClick={() => {
          typeof onSubmit == 'function' ? onSubmit() : null;
        }}>{config?.btnSubmitLabel ? config.btnSubmitLabel : 'Submit'}</button>
      }

    </div>
  </div>);
}
ReactWebMultiSteps.propTypes = {
  children: PropTypes.any,
  containerStyle: PropTypes.object,
  buttonStyleContainer: PropTypes.object,
  onNextMove: PropTypes.func,
  onPreviousMove: PropTypes.func,
  onSubmit: PropTypes.func
}
