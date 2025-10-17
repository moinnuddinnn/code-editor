import { jsx as _jsx } from "react/jsx-runtime";
//import "./types/shims";
import Editor from "./components/Editor";
export default function App() {
    return (_jsx("div", { style: { height: "100vh", background: "#1e1e1e", color: "white" }, children: _jsx(Editor, {}) }));
}
