import React from 'react'


// We "destructure" the props inside the ({ })
const Modal = ({isOpen, onClose, children, title}) => {
  if (!isOpen) return null; // If not open, don't show anything
  

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      {/* The White Box */}
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
        
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-lg">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
        </div>

        {/* Content (This is where the magic 'children' go) */}
        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  )
}

export default Modal