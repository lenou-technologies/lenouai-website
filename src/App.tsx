import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/home';
import About from '@/pages/about';
import Support from '@/pages/support';
import Guide from '@/pages/guide';
import Contact from '@/pages/contact';
import Privacy from '@/pages/privacy';
import Terms from '@/pages/terms';
import NotFound from '@/pages/not-found';

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')} ssrPath={ssrPath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/support" component={Support} />
        <Route path="/guide" component={Guide} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
