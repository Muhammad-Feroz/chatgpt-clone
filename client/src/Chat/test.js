import React from 'react'

const Chat = () => {
  const examples = [
    'How to use Tailwind CSS',
    'How to create a React app',
    'How to use Tailwind CSS with React',
    'How to use Tailwind CSS with Next.js',
    'How to use Tailwind CSS with Gatsby',
    'How to use Tailwind CSS with Svelte',
    'How to use Tailwind CSS with Vue',
    'How to use Tailwind CSS with Angular',
  ]
  return (
    <div className=' h-screen w-screen flex bg-[#050509]'>
      <div className=' w-[20%] h-screen bg-[#0c0c15] text-white p-4'>
        <div className=' h-[5%]'>
          <button className=' w-full h-[50px] border rounded hover:bg-slate-600'>+ New Chat</button>
        </div>
        <div className=' h-[70%] overflow-scroll shadow-lg hide-scroll-bar mb-4'>
          {
            [1, 2, 3, 4, 5, 6, 7, 9, 0, 1, 2, 3].map((item, index) => (
              <div className=' py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'>
                <span className=' mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                    <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                  </svg>
                </span>
                My chat history
              </div>
            ))
          }
        </div>
        <div className='overflow-scroll shadow-lg hide-scroll-bar h-[20%] border-t'>
        {
            [1, 2, 3].map((item, index) => (
              <div className=' py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer'>
                <span className=' mr-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M20 21l2 -2l-2 -2"></path>
                    <path d="M17 17l-2 2l2 2"></path>
                  </svg>
                </span>
                My chat history
              </div>
            ))
          }
        </div>
      </div>
      <div className=' w-[80%] h-screen'>
        <div className=' h-[80%] w-full flex flex-col justify-center items-center text-white'>
          <div className=' text-4xl font-bold mb-8'>APP GPT</div>
          <div className=' flex flex-wrap justify-around max-w-[900px]'>
          {
            examples.map((item, index) => (
              <div className=' text-lg font-light mt-4 border p-4 rounded cursor-pointer hover:bg-slate-800 min-w-[400px]'>{item}</div>
            ))
          }
          </div>
        </div>
        <div className=' h-[20%] border w-full'></div>
      </div>
    </div>
  )
}

export default Chat