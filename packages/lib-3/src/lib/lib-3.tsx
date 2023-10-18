/* eslint-disable-next-line */
import { Lib4 } from 'module-4/module-4';
export interface Lib3Props {}

export function Lib3(props: Lib3Props) {
  return (
    <div>
      <h1>Welcome to Lib3!</h1>
      <Lib4 />
    </div>
  );
}

export default Lib3;
