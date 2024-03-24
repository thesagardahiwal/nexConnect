import React from 'react'

function GroupPage({mediaFiles}) {
  const handleDownload = (data) => {
    const blob = new Blob([data.content]);
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = data.filename;
    downloadLink.click();
  }
  return (
    <div className='h-[30vh] mb-3 overflow-hidden transperent w-full'>
      <div className='bg-gradient-to-r from-pink-400 to-indigo-400 mt-5 mx-3 h-full p-[2px] rounded-md'>
          {/* Show all files */}
          <ul className='p-2'>
            {mediaFiles?.map((file, i) => (
              <li className='text-white my-1 bg-gradient-to-r from-indigo-500 to-green-400 flex justify-between items-center rounded-md p-1' key={`index-Of${i}`}>
                <div className='flex start-0'>
                  {file.filename}
                </div>
                <div className='flex-end'>
                  <button className='p-1' onClick={() => handleDownload(file)}>Download</button>
                </div>
              </li>
              ))}
          </ul>
      </div>
      


    </div>
  )
}

export default GroupPage