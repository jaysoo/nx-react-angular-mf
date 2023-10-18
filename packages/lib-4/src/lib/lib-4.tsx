import { Lib5 } from 'module-5/module-5';
/* eslint-disable-next-line */
export interface Lib4Props {}

export function Lib4(props: Lib4Props) {
  return (
    <div>
      <h1>Welcome to Lib4!</h1>
      <Lib5 />
    </div>
  );
}

export default Lib4;
