import React from 'react'

const CaptainDetails = () => {
  return (
    <div className="h-2/5 p-6">
    <div className="h-1/2 p-5">
     <div className="flex items-center justify-between mb-3">
     <div className="flex items-center justify-between">
        <img className="w-10 h-10 rounded-full object-cover" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="captain image" />
        <h4 className="text-lg font-medium">Priyavrat</h4>
      </div>
      <div>
        <h4 className="text-xl font-semibold">₹193.22</h4>
        <p className="text-sm font-medium text-gray-600">Earned</p>
      </div>
     </div>
      <div className="flex p-3 mt-2 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
        <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours online</p>
        </div>
        <div className="text-center">
        <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600 ">Hours online</p>
        </div>
        <div className="text-center">
        <i className="text-3xl mb-2 font-thin ri-sticky-note-line"></i>
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600 ">Hours online</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CaptainDetails