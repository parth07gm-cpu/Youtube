import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-slate-50 text-gray-900">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
          <Head />
        </header>
        <main className="px-3 py-6 sm:px-4 lg:px-6">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <Body />
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
