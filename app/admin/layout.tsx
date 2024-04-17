import React from 'react'

/*layout文件决定了网页的layout，
layout文件是可以被nextjs识别的，
所以要接受reactNode的参数（children）.*/

interface Props{
    children: React.ReactNode; 
}
const layout = ({children}:Props) => {
  return (
    <div className='flex'>
        <aside className='bg-slate-200 p-5 mr-5'>
            Sidebar
        </aside>
        <div>{children}</div>
    </div>
  )
}

export default layout