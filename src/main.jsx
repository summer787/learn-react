
import { StrictMode } from 'react';
// import { createRoot } from '../node_modules/react-dom/client';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(

<StrictMode>
  <App />
</StrictMode>

);






















// --------------------------------------------------------------------------------

// // React 함수 컴포넌트의 요건
// // - 함수 이름은 첫글자가 대문자!
// // - JSX를 반환!

// // App 함수 컴포넌트를 작성합니다.
// function App() {
//   // JSX 값 반환
//   return (
//     <div className="App">
//       {/* JSX 주석 */}
//       {/* <Heading>React</Heading> */}
//       <h1>React</h1>
//       {/* <Description>...</Description> */}
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
//         animi, labore facilis obcaecati ullam placeat molestiae. Enim,
//         consectetur laudantium.
//       </p>
//       <ul>
//         <li>list item A</li>
//         <li>list item B</li>
//         <li>list item C</li>
//       </ul>
//     </div>
//   );
// }

// // createRoot
// // create + Root (React DOM Root)
// // ReactDOMRoot 객체를 생성하는 함수
// createRoot(document.getElementById('root'))
// // ReactDOMRoot 객체는 render() 메서드를 사용해
// // React 요소를 실제 DOM 요소에 렌더링 한다.
// .render(
//   // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
//   <App />
//   // <App></App>
// );