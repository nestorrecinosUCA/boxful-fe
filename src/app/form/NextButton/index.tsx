
import './NextButton.css';
import { BsArrowRightShort } from 'react-icons/bs';

export default function NextButton() {
  return (
    <button className={`primaryButton defaultMargin`}>
      <p className={`buttonLabel`}>
        Siguiente
      </p>
      <BsArrowRightShort
        className={`arrowIcon`}
      />
    </button>
  );
}
