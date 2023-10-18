import { Lib3 } from 'module-3/module-3';
/* eslint-disable-next-line */
export interface Lib2Props {}

export function Lib2(props: Lib2Props) {
  return (
    <div>
      <h1>Welcome to Lib2!</h1>
      <Lib3 />
    </div>
  );
}

export default Lib2;
