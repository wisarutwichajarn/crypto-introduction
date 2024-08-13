// import React, { useState } from 'react'

// function Login() {
//   const [username , setUsername] = useState('');
//   const [password , setPassword] = useState('');
//   const [error , setError] = useState('');

//   const handdleSummit = (e) => {
//     e.preventDefault();

// // ตรวจสอบข้อมูลที่กรอก
//     if(username === '' || password === ''){
//       setError('PLease Fill in both fields');
//       return;
//     }

//     // คุณสามารถส่งข้อมูลไปยังเซิร์ฟเวอร์ที่นี่
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // เคลียร์ข้อผิดพลาด
//     setError('');
// }


//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//     <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Login