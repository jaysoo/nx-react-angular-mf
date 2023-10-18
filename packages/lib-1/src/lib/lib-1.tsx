import { Lib2 } from 'module-2/module-2';
/* eslint-disable-next-line */
export interface Lib1Props {}

export function Lib1(props: Lib1Props) {
  return (
    <div>
      <h1>Welcome to Lib1!</h1>
      <Lib2 />
    </div>
  );
}

export default Lib1;
