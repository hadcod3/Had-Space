import React from 'react'

const EmptyStateText = () => {
    return (
        <div className="w-full flex justify-center p-5">
          <div className="w-[300px] xs:w-[500px] text-center">
            <h4 className="text-h4-bold mb-2">Oops… Nothing Here!</h4>
            <p className="text-subtitle">
              The void is real. Check back later or explore other treasures.
            </p>
          </div>
        </div>
    )
}

export default EmptyStateText