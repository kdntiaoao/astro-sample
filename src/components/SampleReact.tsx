import { useState } from 'react'

export const SampleReact = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount((count) => count + 1)
  }

  return (
    <div className="my-8">
      <p className="my-2">Count: {count}</p>
      <button type="button" className="py-1 px-4 rounded bg-slate-600 text-white my-2" onClick={countUp}>
        +1
      </button>
    </div>
  )
}
