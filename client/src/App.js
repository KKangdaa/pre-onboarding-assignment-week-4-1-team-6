import { RecoilRoot } from 'recoil';
import 'styles/App.css';
import RootRoute from 'routes/route';

export default function App() {
  return (
    <RecoilRoot>
      <RootRoute />
    </RecoilRoot>
  );
}
