import { profile } from '@/data/resume'
import React from 'react'

const Summary = () => {
  return (
    <div>
      <div>
      <p className="font-sen text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {profile.summaryPlus}
      </p>
      </div>

    </div>
  )
}

export default Summary